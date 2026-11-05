import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
const argv=process.argv.slice(2),get=k=>{const i=argv.indexOf(k);return i<0?undefined:argv[i+1]};
const allowed=new Set(['--collect','--dry-run','--profile','--region','--account','--bucket','--trail']);
for(let i=0;i<argv.length;i++){const k=argv[i];if(!allowed.has(k))throw Error('Unknown argument '+k);if(!['--collect','--dry-run'].includes(k)){if(!argv[i+1]||argv[i+1].startsWith('--'))throw Error('Missing value for '+k);i++}}
const profile=get('--profile')||'YOUR_PROFILE',region=get('--region')||'YOUR_REGION',account=get('--account'),bucket=get('--bucket')||'YOUR_BUCKET',trail=get('--trail')||'YOUR_TRAIL_NAME';
const jobs=[['identity','sts','get-caller-identity'],['iam-summary','iam','get-account-summary'],['bucket-public-access','s3api','get-public-access-block','--bucket',bucket],['bucket-encryption','s3api','get-bucket-encryption','--bucket',bucket],['trail-status','cloudtrail','get-trail-status','--name',trail],['trail-selectors','cloudtrail','get-event-selectors','--trail-name',trail]];
if(!argv.includes('--collect')||argv.includes('--dry-run')){console.log(JSON.stringify({mode:'offline dry-run',networkCalls:0,commands:jobs.map(([label,...a])=>({label,args:['aws',...a,'--profile',profile,'--region',region,'--output','json','--no-cli-pager']}))},null,2));process.exit(0)}
if(!/^\d{12}$/.test(account||''))throw Error('Supply expected 12-digit --account');
for(const [k,v] of Object.entries({profile,region,bucket,trail}))if(v.startsWith('YOUR_')||v.startsWith('-')||!v.trim())throw Error('Supply a scoped '+k);
function call(args){return spawnSync('aws',[...args,'--profile',profile,'--region',region,'--output','json','--no-cli-pager'],{encoding:'utf8',timeout:45000,env:{...process.env,AWS_PAGER:'',AWS_CLI_AUTO_PROMPT:'off'}})}
const id=call(jobs[0].slice(1));if(id.status!==0)throw Error('Caller identity lookup failed; no collection started. Check the selected profile.');
let caller;try{caller=JSON.parse(id.stdout)}catch{throw Error('Caller identity was not valid JSON')}
if(caller.Account!==account)throw Error('Caller account does not match expected account; stopped.');
const directory=path.resolve('private-evidence',new Date().toISOString().replaceAll(':','-'));
fs.mkdirSync(directory,{recursive:true});const manifest={kind:'private collection; not reviewed',expectedAccount:account,region,profile,collectedAt:new Date().toISOString(),records:[]};
for(const [label,...args] of jobs){const startedAt=new Date().toISOString(),r=label==='identity'?id:call(args),bytes=String(r.stdout||r.stderr||r.error?.message||'No output'),filename=label+(r.status===0?'.json':'.error.txt');fs.writeFileSync(path.join(directory,filename),bytes);manifest.records.push({label,args,startedAt,finishedAt:new Date().toISOString(),filename,exitStatus:r.status,collectionStatus:r.status===0?'Collected; review pending':'Collection error',sha256:createHash('sha256').update(bytes).digest('hex')})}
fs.writeFileSync(path.join(directory,'manifest.json'),JSON.stringify(manifest,null,2));console.log('Saved private evidence locally. Review and redact before any publication. Collection does not establish control effectiveness.');

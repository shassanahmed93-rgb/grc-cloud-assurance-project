import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
const root=path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/,'$1'));
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const data=JSON.parse(read('suite-data.json'));
assert.equal(data.length,4);
let assertions=0;
for(const p of data){
 const dir='projects/'+p.slug;
 const records=JSON.parse(read(dir+'/records.json'));
 assert.deepEqual(records,p.records);assertions++;
 assert.equal(new Set(records.map(r=>r.id)).size,records.length);assertions++;
 const sources=new Set(p.sources.map(s=>s.id));
 const fixtures=fs.existsSync(path.join(root,dir,'evidence-fixtures.json'))?JSON.parse(read(dir+'/evidence-fixtures.json')):{};
 for(const r of records){assert(r.test&&r.observation&&r.next&&r.owner&&r.basis);assertions++;for(const id of r.evidence){assert(sources.has(id)||Object.hasOwn(fixtures,id),'Dangling evidence '+id);assertions++}}
 const ctx={window:{}};vm.runInNewContext(read(dir+'/data.js'),ctx);assert.equal(ctx.window.LAB.slug,p.slug);assertions++;
 const html=read(dir+'/index.html');assert(html.includes('<noscript>'));assertions++;
 for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)){const ref=m[1].split('?')[0];if(ref.startsWith('https:')||ref.startsWith('#'))continue;let target=path.resolve(root,dir,ref);if(ref.endsWith('/'))target=path.join(target,'index.html');if(ref==='../../')continue;assert(fs.existsSync(target),'Missing page asset '+target);assertions++}
 assert(read(dir+'/records.csv').includes('"id"'));assertions++;
}
const vendor=data[0].records;
const known=vendor.filter(r=>r.status!=='Unknown'),yes=vendor.filter(r=>r.status==='Supported').length,partial=vendor.filter(r=>r.status==='Partial').length;
assert.equal(vendor.length,30);assert.equal(known.length,15);assert.equal(yes,13);assert.equal(partial,2);assert.equal(vendor.filter(r=>r.critical&&r.status!=='Supported').length,12);assertions+=5;
assert.equal(known.length/vendor.length,.5);assert.equal(Math.round((yes*2+partial)/(known.length*2)*100),93);assertions+=2;
assert(data[1].records.every(r=>r.status==='Not collected'));assert.equal(data[1].records.length,12);assertions+=2;
const ir=data[2].records;assert.equal(ir.length,8);assert.equal(ir[0].minute,0);assert.equal(ir.at(-1).minute,120);assert(ir.every((r,i)=>i===0||r.minute>ir[i-1].minute));assertions+=4;
const fixture=JSON.parse(read('projects/internal-audit/evidence-fixtures.json'));
const derive={
 'A-01':fixture['E-A-01'].leavers.every(r=>r.hours<=24)?'Pass':'Fail',
 'A-02':fixture['E-A-02'].buckets.every(r=>r.effectivePublicBlock&&r.encryption)?'Pass':'Fail',
 'A-03':fixture['E-A-03'].releases.every(r=>r.approver&&r.approver!==r.author)?'Pass':'Fail',
 'A-04':fixture['E-A-04'].technicalExecution&&fixture['E-A-04'].integrityCheck?'Pass':'Inconclusive',
 'A-05':fixture['E-A-05'].knownEvent&&fixture['E-A-05'].queryResult&&fixture['E-A-05'].alertReceipt?'Pass':'Inconclusive',
 'A-06':fixture['E-A-06'].currentReportReviewed?'Pass':'Fail',
 'A-07':fixture['E-A-07'].submissions.every(r=>!r.containsCustomerIdentifier||r.approvedPath)?'Pass':'Fail',
 'A-08':fixture['E-A-08'].commanderMinute<=30&&fixture['E-A-08'].firstDecisionMinute<=30?'Pass':'Fail',
 'A-09':fixture['E-A-09'].actualApprovalEvents>0?'Pass':'Inconclusive',
 'A-10':fixture['E-A-10'].hasRetestFields&&fixture['E-A-10'].hasClosureAuthority?'Pass':'Fail'
};
for(const r of data[3].records){assert.equal(r.status,derive[r.id]);assert(r.retest);assertions+=2}
assert.equal(Object.values(derive).filter(s=>s==='Pass').length,2);assert.equal(Object.values(derive).filter(s=>s==='Fail').length,5);assert.equal(Object.values(derive).filter(s=>s==='Inconclusive').length,3);assertions+=3;
const actions=JSON.parse(read('projects/internal-audit/corrective-actions.json'));assert.equal(actions.length,8);assert(actions.every(a=>a.status==='Open'&&a.closureEvidence==='Not obtained'));for(const a of actions){assert(data[3].records.some(r=>r.id===a.workpaper&&r.finding===a.id));assertions++}assertions+=2;
new vm.Script(read('projects/assurance-assets/app.js'));assertions++;
const collect=path.join(root,'projects/aws-soc2/collect-evidence.mjs');
const dry=spawnSync(process.execPath,[collect,'--dry-run'],{encoding:'utf8',cwd:root});assert.equal(dry.status,0);const plan=JSON.parse(dry.stdout);assert.equal(plan.networkCalls,0);assert(plan.commands.every(c=>!c.args.some(x=>/^(create|delete|put|start)-/.test(x))));assertions+=3;
const bad=spawnSync(process.execPath,[collect,'--collect','--account','bad'],{encoding:'utf8',cwd:root});assert.notEqual(bad.status,0);assert(bad.stderr.includes('12-digit'));assertions+=2;
console.log(`PASS: ${assertions} checks across 4 case studies; scoring, fixture-derived audit results, evidence links, assets and offline collector verified.`);

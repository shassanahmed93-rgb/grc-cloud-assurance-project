import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const load=n=>{const [h,...rows]=readFileSync(new URL(`data/${n}.csv`,import.meta.url),'utf8').trim().split(/\r?\n/);return rows.map(r=>Object.fromEntries(r.split(',').map((v,i)=>[h.split(',')[i],v])))};
const risks=load('risks'),controls=load('controls'),tests=load('tests'),findings=load('findings');
for(const rows of [risks,controls,tests,findings])assert.equal(new Set(rows.map(r=>r.id)).size,rows.length,'Duplicate identifier');
for(const r of risks){assert(controls.some(c=>c.id===r.control));for(const k of ['likelihood','impact','current_likelihood','current_impact','target_likelihood','target_impact'])assert(Number.isInteger(+r[k])&&+r[k]>=1&&+r[k]<=5);assert(+r.target_likelihood * +r.target_impact<=+r.current_likelihood * +r.current_impact);}
for(const t of tests){assert(controls.some(c=>c.id===t.control));assert(['Pass','Fail','Inconclusive'].includes(t.result));}
for(const f of findings){const t=tests.find(t=>t.id===f.test),r=risks.find(r=>r.id===f.risk);assert(t&&r);assert.equal(t.control,r.control);assert.notEqual(t.result,'Pass');assert(!Number.isNaN(Date.parse(f.due)));}
assert.equal(risks.filter(r=>r.current_likelihood*r.current_impact>9).length,5);
console.log('Validated scoring, unique IDs, risk/control/test/finding links and five above-appetite risks.');

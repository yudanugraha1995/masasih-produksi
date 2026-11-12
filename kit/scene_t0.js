// node scene_t0.js <id> -> JSON t0 tiap scene
const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
await p.goto('http://127.0.0.1:8765/scene.html?a=v&s='+process.argv[2]);await p.waitForTimeout(2000);
console.log(JSON.stringify(await p.evaluate(()=>({dur:DUR,t0:S.map(s=>s.t0)}))));await b.close();})();

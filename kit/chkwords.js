// usage: node chkwords.js <id> -> daftar frasa (huruf kecil) di body yang nggak ketemu di transkrip
const fs=require('fs');const id=process.argv[2];
const WORDS=JSON.parse(fs.readFileSync(`timing_${id}.json`)).words;
const _n=s=>s.toLowerCase().replace(/[^a-z0-9\-]/g,'');
function has(q){const qs=q.split(' ').map(_n);for(let i=0;i<WORDS.length;i++){let ok=true;for(let j=0;j<qs.length;j++){const w=WORDS[i+j];if(!w||!_n(w.w).startsWith(qs[j])){ok=false;break;}}if(ok)return true;}return false;}
const b=fs.readFileSync(`body_${id}.js`,'utf8');const m=[...b.matchAll(/'([^']+)'/g)].map(x=>x[1]).filter(x=>/^[A-Za-z][a-z \-]*$/.test(x)&&x!==x.toUpperCase()&&!/^(fact|plot|check|myth|C|T|L|R|BL|BR|B|r|g|y|b|p)$/.test(x));
const miss=[...new Set(m)].filter(x=>!has(x));console.log(id,miss.length?'MISS: '+miss.join(' | '):'ok');

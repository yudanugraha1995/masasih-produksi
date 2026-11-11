# usage: python3 build.py <id>  -> scenes_<id>.js dari lib + body_<id>.js + timing_<id>.json
import json,sys,subprocess
i=sys.argv[1]
W=json.load(open(f'timing_{i}.json'))['words']
dur=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'narasi_{i}.mp3']).decode())
out=f"const WORDS={json.dumps(W,ensure_ascii=False)};const DUR={dur:.3f};\n"
for f in ['lib_base.js','lib_extra.js','lib_templates.js',f'body_{i}.js']: out+=open(f).read()+"\n"
open(f'scenes_{i}.js','w').write(out);print('ok',i,dur)

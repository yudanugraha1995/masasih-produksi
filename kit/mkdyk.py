# usage: python3 mkdyk.py <id>  -> body_<id>.js = cfg_<id>.js + tpl_dyk.js (Did You Know)
import sys;i=sys.argv[1]
open(f'body_{i}.js','w').write(open(f'cfg_{i}.js').read()+'\n'+open('tpl_dyk.js').read());print('ok body',i)

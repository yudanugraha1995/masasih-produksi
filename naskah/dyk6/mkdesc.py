# mkdesc.py id... : title comment + naskah txt + desc/<id>.txt for DYK 6-country
import sys,re,os,subprocess
os.chdir('/home/user/masasih-produksi/kit')
exec(open('../naskah/dyk6/nar.py').read())
TAG={'xmasdinner_dyk':'#christmas','thanksgiving_dyk':'#thanksgiving','presents_dyk':'#christmas','santa_dyk':'#christmas','blackfriday_dyk':'#blackfriday','newyear_dyk':'#newyear','emergency_dyk':'#911','penny_dyk':'#money','xmasholiday_dyk':'#christmas'}
for i in sys.argv[1:]:
    title,text=N[i]
    c=open(f'cfg_{i}.js').read()
    if not c.startswith('// ====='): open(f'cfg_{i}.js','w').write(f'// ===== {title} (Did You Know, 6 negara, Speechify henry) =====\n'+c)
    open(f'../naskah/{i}.txt','w').write(text)
    sents=re.findall(r'[^.!?]+[.!?]',text)
    intro=sents[0].strip(); q=[s.strip() for s in sents if s.strip().endswith('?')][-1]
    tags=f"#shorts #DidYouKnow {TAG.get(i,'#facts')} #countries"
    subprocess.run(['python3','dyk_desc.py',i,intro,'💬 '+q+' Tell us in the comments!',tags,'map'],check=True)

# mkdesc.py id... : title comment + naskah txt + desc/<id>.txt for DYK 6-country
import sys,re,os,subprocess
os.chdir('/home/user/masasih-produksi/kit')
exec(open('../naskah/dyk6/nar.py').read());exec(open('../naskah/dyk6/nar2.py').read());N.update(N2);exec(open('../naskah/dyk6/nar55.py').read());exec(open('../naskah/dyk6/nar55h.py').read());exec(open('../naskah/dyk6/nar55u.py').read());H.update(H2);TT.update(TT2);N.update({k:(N[k][0] if k in N else TT[k],v) for k,v in list(N55.items())+list(H.items())})
TAG={'olympics_dyk':'#olympics','dogs_dyk':'#dogs','nobel_dyk':'#science','mcdonalds_dyk':'#food','xmasdinner_dyk':'#christmas','thanksgiving_dyk':'#thanksgiving','presents_dyk':'#christmas','santa_dyk':'#christmas','blackfriday_dyk':'#blackfriday','newyear_dyk':'#newyear','emergency_dyk':'#emergency','penny_dyk':'#money','xmasholiday_dyk':'#christmas','toothfairy_dyk':'#toothfairy','birthday_dyk':'#birthday','sunday_dyk':'#shopping','greetings_dyk':'#culture','mostvisited_dyk':'#travel','football_dyk':'#soccer','breakfast_dyk':'#food','dinnertime_dyk':'#food','bottle_dyk':'#recycling','parentalleave_dyk':'#parenting','incometax_dyk':'#money','weekend_dyk':'#culture','mountain_dyk':'#geography','river_dyk':'#geography','lakes_dyk':'#geography','pizza_dyk':'#pizza','languages_dyk':'#languages','capitals_dyk':'#geography','coastline_dyk':'#geography','stadium_dyk':'#sports','sports_dyk':'#sports','tea_dyk':'#tea','bikes_dyk':'#travel','anthem_dyk':'#culture','independence_dyk':'#history','islands_dyk':'#geography','hottest_dyk':'#geography','coldest_dyk':'#geography','biggest_dyk':'#geography','population_dyk':'#geography','sheep_dyk':'#animals','nationalanimal_dyk':'#animals','tallestbuilding_dyk':'#architecture','tuition_dyk':'#college','schoolage_dyk':'#school','summerbreak_dyk':'#school','cash_dyk':'#money','speedfine_dyk':'#cars','gamble_dyk':'#travel','trains_dyk':'#travel','fries_dyk':'#food','vat_dyk':'#money','voltage_dyk':'#travel','dst_dyk':'#time','timezones_dyk':'#time','dateformat_dyk':'#time','metric_dyk':'#facts'}
for i in sys.argv[1:]:
    title,text=N[i]
    c=open(f'cfg_{i}.js').read()
    if not c.startswith('// ====='): open(f'cfg_{i}.js','w').write(f'// ===== {title} (Did You Know, 6 negara, Speechify henry) =====\n'+c)
    open(f'../naskah/{i}.txt','w').write(text)
    sents=re.findall(r'[^.!?]+[.!?]',text)
    intro=sents[0].strip(); q=[s.strip() for s in sents if s.strip().endswith('?')][-1]
    tags=f"#shorts #DidYouKnow {TAG.get(i,'#facts')} #countries"
    subprocess.run(['python3','dyk_desc.py',i,intro,'💬 '+q+' Tell us in the comments!',tags,'map'],check=True)
    # rapikan huruf: angka tetap (1.3M), kata jadi Title Case (Santa Claus)
    import json as _j
    cf=open(f'cfg_{i}.js').read()
    nums=re.findall(r"\['[a-z]{2}','[^']*','[^']*','((?:[^'\\]|\\.)*)'",cf)+re.findall(r"num:'((?:[^'\\]|\\.)*)'",cf)
    d=open(f'desc/{i}.txt').read()
    for n in nums:
        n=n.replace("\\'","'")
        good=n if re.search(r'\d',n) else n.title().replace("'S","'s")
        d=re.sub(r'(: )'+re.escape(n.capitalize())+r'( \(|\n)',lambda m:m.group(1)+good+m.group(2),d)
    open(f'desc/{i}.txt','w').write(d)

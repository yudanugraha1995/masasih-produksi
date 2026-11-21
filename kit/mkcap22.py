# usage: python3 kit/mkcap22.py <naskah_dir> <meta.json>  -> naskah/judul_caption_<id>.md dari narasi
import json,sys,re,os
M=json.load(open(sys.argv[2]))
for k,m in M.items():
    s=open(f"{sys.argv[1]}/{k}.txt").read()
    s=re.sub(r'^\[shouting\]\s*Woyyy!!\s*','',s).replace(' Tulis di komentar, dan subscribe biar nggak ketinggalan!','')
    for a in ['Faktanya','Ternyata','Plot twist','Biar','Tapi kalau','Kamu','Rumahmu','Mata kamu','Jadi ']:
        s=s.replace(' '+a,'\n\n'+a,1)
    s=re.sub(r'\?(\s*)$','? Jawab di komentar ya! 👇',s.rstrip())
    d=f"{s}\nSubscribe biar nggak ketinggalan fakta Masa Sih berikutnya bareng YUMA.\n\nSumber: {m['src']}\n\nVideo ini untuk edukasi, bukan pengganti saran dokter."
    open(f"naskah/judul_caption_{k}.md",'w').write(f"# {m['t']}\n\n## Judul YT Short\n{m['t']} #shorts\n\n## Deskripsi YT\n{d}\n\n#masasih #{m['h']} #faktaunik #shorts\n")
    print(k,len(d))

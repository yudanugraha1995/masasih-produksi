# usage: python3 cldup.py <sign.json>  (output sign-upload MCP: list of {upload_params, api_key, signature, cloud_name})
# upload videos/<id>_styleA.mp4 ke Cloudinary (public_id masasih/<id>), simpan link di cloudinary_urls.json + .md
import json,sys,subprocess,os
S=json.load(open(sys.argv[1]));U=json.load(open('cloudinary_urls.json')) if os.path.exists('cloudinary_urls.json') else {}
for s in S:
    p=s['upload_params'];i=p['public_id'].split('/')[-1];f=f'../videos/{i}_styleA.mp4'
    if not os.path.exists(f): print('NOFILE',i);continue
    a=['curl','-sS',f"https://api.cloudinary.com/v1_1/{s['cloud_name']}/video/upload",'-F',f'file=@{f}','-F',f"api_key={s['api_key']}",'-F',f"signature={s['signature']}"]
    for k,v in p.items(): a+=['-F',f"{k}={str(v).lower() if isinstance(v,bool) else v}"]
    r=json.loads(subprocess.check_output(a));u=r.get('secure_url')
    print(i,u or r);
    if u: U[i]=u
json.dump(U,open('cloudinary_urls.json','w'),indent=0)
open('cloudinary_urls.md','w').write("# Link video Masa Sih di Cloudinary (pakai ini untuk Buffer, BUKAN raw GitHub)\n\n"+''.join(f"- {k}: {v}\n" for k,v in U.items()))

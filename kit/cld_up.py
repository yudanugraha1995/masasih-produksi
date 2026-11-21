# usage: python3 cld_up.py <signed.json> <file.mp4>   (signed.json = one object from mcp Cloudinary sign-upload)
# uploads to Cloudinary, prints secure_url (aturan 21 Nov 2026: video disimpan di Cloudinary, bukan GitHub)
import sys,json,subprocess
s=json.load(open(sys.argv[1]));f=sys.argv[2]
args=['curl','-s','https://%s/v1_1/%s/video/upload'%(s['host'],s['cloud_name']),'-F','file=@"%s"'%f,'-F','api_key='+s['api_key'],'-F','signature='+s['signature']]
for k,v in s['upload_params'].items(): args+=['--form-string','%s=%s'%(k,str(v).lower() if isinstance(v,bool) else v)]
r=json.loads(subprocess.run(args,capture_output=True,text=True).stdout)
print(r.get('secure_url') or r)

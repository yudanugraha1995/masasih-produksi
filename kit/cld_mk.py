# cld_mk.py <timestamp> <public_id>=<signature> ...  -> scratchpad s_<name>.json (audit_context/preset tetap dari sign-upload)
import sys,json,os
D='/tmp/claude-0/-home-user/2a676931-b3d4-5aef-9e72-eb66b9efd4ba/scratchpad/'
AC='eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiZGMwMWQ2M2E4OTY2YzIzMGY0Y2EwZjMyY2IyY2NkMzUiLCJ1c2VyX2V4dGVybmFsX2lkIjoiMmY4MjEzODNmYzBkYjhmNzc3ZmNiOTVlYmJhZWM3IiwidXNlcl9jdXN0b21faWQiOiJ5dWRhbnVncmFoYTA3OTVAZ21haWwuY29tIiwiY29tcG9uZW50IjoiY29uc29sZSJ9'
ts=int(sys.argv[1])
for a in sys.argv[2:]:
    pid,sig=a.split('=')
    json.dump({'upload_params':{'colors':0,'overwrite':True,'public_id':pid,'timestamp':ts,'upload_preset':'default_media_library_upload_preset_030852d711f3','audit_context':AC},'api_key':'634664842158594','signature':sig,'host':'api.cloudinary.com','cloud_name':'u5zqiuc2'},open(D+'s_'+pid.split('/')[-1]+'.json','w'))

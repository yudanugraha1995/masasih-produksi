# usage: python3 buf_dyk.py <vid> <cloudinary_url> [dueISO]
#  -> buat post YT Short di channel DYK (Buffer API, kredensial disuntik proxy) pakai kit/desc/<vid>.txt
#     tanpa dueISO: ambil slot kosong pertama di naskah/dyk6/slots.json, lalu hapus post lama di slot itu.
import sys,json,subprocess,os
D=os.path.dirname(os.path.abspath(__file__));CH='6af7f3f262b70b94b0282d7b'
SP=D+'/../naskah/dyk6/slots.json'
def gql(q,v):
    r=subprocess.run(['curl','-s','-X','POST','https://api.buffer.com/graphql','-H','Content-Type: application/json','-H','Authorization: Bearer proxy-injected','-d',json.dumps({'query':q,'variables':v})],capture_output=True,text=True).stdout
    return json.loads(r)
vid,url=sys.argv[1],sys.argv[2]
L=open(f'{D}/desc/{vid}.txt').read().split('\n');title,text=L[0].strip(),'\n'.join(L[1:]).strip()
S=json.load(open(SP));slot=None
if len(sys.argv)>3: due=sys.argv[3]
else:
    slot=next(s for s in S if not s.get('vid'));due=slot['dueUTC']
ERR=' '.join('... on %s{message}'%t for t in ['NotFoundError','UnauthorizedError','UnexpectedError','RestProxyError','LimitReachedError','InvalidInputError'])
q='mutation($i:CreatePostInput!){createPost(input:$i){__typename ... on PostActionSuccess{post{id dueAt}} %s}}'%ERR
inp={'channelId':CH,'schedulingType':'automatic','mode':'customScheduled','dueAt':due,'text':text,
     'assets':[{'video':{'url':url}}],'metadata':{'youtube':{'title':title,'categoryId':'27','privacy':'public','madeForKids':False}}}
r=gql(q,{'i':inp});p=r.get('data',{}).get('createPost',{})
if p.get('__typename')!='PostActionSuccess': print('FAIL',vid,r);sys.exit(1)
nid=p['post']['id'];print('NEW',vid,nid,p['post']['dueAt'])
if slot:
    d=gql('mutation($i:DeletePostInput!){deletePost(input:$i){__typename}}',{'i':{'id':slot['old']}})
    print('DEL',slot['old'],d.get('data',{}).get('deletePost',{}).get('__typename'))
    slot.update(new=nid,vid=vid);json.dump(S,open(SP,'w'),indent=0)
else:
    S.append({'old':None,'dueUTC':due,'new':nid,'vid':vid});json.dump(S,open(SP,'w'),indent=0)

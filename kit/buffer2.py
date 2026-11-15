#!/usr/bin/env python3
# TIDAK DIPAKAI LAGI (15 Nov): YT Masa Sih pindah ke channel baru di Buffer PERTAMA (konektor). Lihat CLAUDE.md.
"""Buffer KEDUA (khusus YT Masa Sih), lewat GraphQL api.buffer.com.
Key = network secret (proxy inject Authorization), JANGAN taruh key di sini.
Pakai:
  python3 kit/buffer2.py list                 -> post scheduled (id, dueAt WIB, judul)
  python3 kit/buffer2.py post <id> <ISO dueAt +07:00> <file_meta.json>
       meta json: {"title":..,"text":..}  (video = videos/<id>_styleA.mp4)
  python3 kit/buffer2.py delete <postId>
"""
import json,sys,subprocess
ORG="6af918b4f0ed12641d5e6db7"; CH="6af91902ece6dfde5fcb6a7a"
RAW="https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/"
def q(query,var=None):
    body=json.dumps({"query":query,"variables":var or {}})
    r=subprocess.run(["curl","-sS","https://api.buffer.com","-H","Content-Type: application/json",
        "-H","Authorization: Bearer proxy-injected","-d",body],capture_output=True,text=True)
    return json.loads(r.stdout)
a=sys.argv[1]
if a=="list":
    r=q('query($o:OrganizationId!,$c:[ChannelId!]){posts(input:{organizationId:$o,filter:{channelIds:$c,status:[scheduled]}},first:50){edges{node{id dueAt text metadata{... on YoutubePostMetadata{title}}}}}}',{"o":ORG,"c":[CH]})
    if "errors" in r: print(r); sys.exit(1)
    es=r["data"]["posts"]["edges"]; print(len(es),"scheduled")
    for e in sorted(es,key=lambda e:e["node"]["dueAt"]):
        n=e["node"]; print(n["id"],n["dueAt"],(n.get("metadata") or {}).get("title"))
elif a=="post":
    vid,due,mf=sys.argv[2:5]; m=json.load(open(mf))
    i={"channelId":CH,"text":m["text"],"mode":"customScheduled","schedulingType":"automatic","dueAt":due,
       "needsApproval":False,"assets":[{"video":{"url":RAW+vid+"_styleA.mp4"}}],
       "metadata":{"youtube":{"title":m["title"],"categoryId":"27","privacy":"public","madeForKids":False,
       "notifySubscribers":True,"embeddable":True,"license":"youtube"}}}
    print(json.dumps(q('mutation($i:CreatePostInput!){createPost(input:$i){__typename ... on PostActionSuccess{post{id status dueAt}} ... on MutationError{message}}}',{"i":i})))
elif a=="delete":
    print(json.dumps(q('mutation($i:PostId!){deletePost(input:{id:$i}){__typename}}',{"i":sys.argv[2]})))

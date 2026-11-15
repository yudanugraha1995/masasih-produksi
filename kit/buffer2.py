#!/usr/bin/env python3
"""Buffer KEDUA = khusus IG Masa Sih (masasihentertainment), lewat GraphQL api.buffer.com.
(15 Nov, owner via Bot C, user setuju.) YT TETAP lewat Buffer pertama (konektor), JANGAN dari sini.
Key = network secret (proxy inject Authorization), JANGAN taruh key di sini.
IG Reel = konten + jam SAMA PERSIS dengan YT Short di Buffer pertama (channel 6af91e0dece6dfde5fcb8a8a).
Pakai:
  python3 kit/buffer2.py list                    -> IG scheduled (id, dueAt, video)
  python3 kit/buffer2.py ig <id> <ISO dueAt> <teks.txt>
       teks = deskripsi YT apa adanya; #shorts -> #fyp, "subscribe" -> "follow" otomatis.
       video = videos/<id>_styleA.mp4, cover = frame 50 ms (judul).
  python3 kit/buffer2.py delete <postId>
Maks 10 terjadwal: cek `list` dulu sebelum nambah.
"""
import json, re, sys, subprocess
ORG = "6af918b4f0ed12641d5e6db7"; CH = "6af9288dece6dfde5fcc146a"   # IG masasihentertainment
RAW = "https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/"

def q(query, var=None):
    body = json.dumps({"query": query, "variables": var or {}})
    r = subprocess.run(["curl", "-sS", "https://api.buffer.com", "-H", "Content-Type: application/json",
                        "-H", "Authorization: Bearer proxy-injected", "-d", body], capture_output=True, text=True)
    return json.loads(r.stdout)

def caption(t):
    t = t.replace("#shorts", "#fyp")
    t = re.sub(r"like, subscribe, dan share", "like, follow, dan share", t)
    return t[:2200]

a = sys.argv[1]
if a == "list":
    r = q('query($o:OrganizationId!,$c:[ChannelId!]){posts(input:{organizationId:$o,filter:{channelIds:$c,status:[scheduled]}},first:50){edges{node{id dueAt assets{source}}}}}', {"o": ORG, "c": [CH]})
    if "errors" in r: print(r); sys.exit(1)
    es = r["data"]["posts"]["edges"]; print(len(es), "scheduled")
    for e in sorted(es, key=lambda e: e["node"]["dueAt"]):
        n = e["node"]; print(n["id"], n["dueAt"], (n["assets"] or [{}])[0].get("source", "").split("/")[-1])
elif a == "ig":
    vid, due, tf = sys.argv[2:5]
    i = {"channelId": CH, "text": caption(open(tf).read().strip()), "mode": "customScheduled",
         "schedulingType": "automatic", "dueAt": due,
         "assets": [{"video": {"url": RAW + vid + "_styleA.mp4", "metadata": {"thumbnailOffset": 50}}}],
         "metadata": {"instagram": {"type": "reel", "shouldShareToFeed": True}}}
    r = q('mutation($i:CreatePostInput!){createPost(input:$i){__typename ... on PostActionSuccess{post{id status dueAt}} ... on MutationError{message}}}', {"i": i})
    print(json.dumps(r))
elif a == "delete":
    print(json.dumps(q('mutation($i:PostId!){deletePost(input:{id:$i}){__typename}}', {"i": sys.argv[2]})))

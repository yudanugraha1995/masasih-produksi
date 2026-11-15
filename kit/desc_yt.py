#!/usr/bin/env python3
"""Bikin judul + deskripsi YT Short untuk Buffer dari naskah/judul_caption_<id>.md.
Pakai: python3 kit/desc_yt.py <id>   -> JSON {title, text, video}
Deskripsi panjang (16:9 kalau ada, kalau nggak Deskripsi YT), hashtag dirapikan jadi 4:
#masasih #<topik> #faktaunik #shorts. Judul tanpa #shorts."""
import json, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
vid = sys.argv[1]
md = (ROOT / f"naskah/judul_caption_{vid}.md").read_text()

m = re.search(r"^\*\*Judul:\*\*\s*(.+)$", md, re.M) or re.search(r"^## Judul YT Short\s*\n(.+)$", md, re.M)
title = m.group(1).replace("#shorts", "").strip()

m = re.search(r"^\*\*Deskripsi:\*\*\s*\n(.*?)(?=^\*\*Tag|^## |\Z)", md, re.M | re.S) \
    or re.search(r"^## Deskripsi YT\s*\n(.*?)(?=^## |\Z)", md, re.M | re.S)
body = m.group(1).strip()
tags = re.findall(r"#(\w+)", body)
lines = [l for l in body.splitlines() if not re.fullmatch(r"\s*(#\w+\s*)+", l)]
body = "\n".join(lines).strip()
if "subscribe" not in body.lower():
    body += "\n\nJangan lupa like, subscribe, dan share biar nggak ketinggalan fakta MASA SIH berikutnya."
topic = next((t for t in tags if t.lower() not in ("masasih", "faktaunik", "shorts", "fyp", "mitos")), "mitos")
text = f"{body}\n\n#masasih #{topic} #faktaunik #shorts"
print(json.dumps({"title": title, "text": text,
                  "video": f"https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/{vid}_styleA.mp4"},
                 ensure_ascii=False, indent=1))

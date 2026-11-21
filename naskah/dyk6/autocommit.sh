#!/bin/bash
# commit+push hasil DYK (narasi/subs/timing/naskah/desc/slots) tiap 10 menit selama render jalan
cd /home/user/masasih-produksi
while pgrep -f "run.sh .*_dyk" >/dev/null; do
  git add kit/narasi_*_dyk.mp3 kit/subs_*_dyk.json kit/timing_*_dyk.json naskah/*_dyk.txt kit/desc kit/cfg_*_dyk.js naskah/dyk6/slots.json 2>/dev/null
  git diff --cached --quiet || { git commit -qm "DYK 55 detik: hasil render (auto)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011yJCQ3Shtw2gXdrwF61pzf"; git pull -q --rebase --autostash origin main; git push -q origin HEAD:main; }
  sleep 120
done

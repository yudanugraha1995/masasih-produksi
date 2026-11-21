#!/bin/bash
# run.sh id...  DYK 6-country pipeline (Speechify henry, maks 55 dtk = bicara + ~6 dtk jeda, narasi 600-800 karakter)
cd /home/user/masasih-produksi/kit
for id in "$@"; do
  if [ -f ../videos/${id}_styleA.mp4 ] && python3 -c "import sys,subprocess;d=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0','../videos/${id}_styleA.mp4']));sys.exit(0 if d>=40 else 1)"; then echo "SKIP $id"; continue; fi
  TXT=$(python3 -c "exec(open('../naskah/dyk6/nar55.py').read());exec(open('../naskah/dyk6/nar55h.py').read());N55.update(H);exec(open('../naskah/dyk6/nar55u.py').read());N55.update(H2);print(N55['$id'])")
  python3 sp_tts.py $id "$TXT" > log_tts_$id.txt 2>&1 || { echo "FAIL tts $id"; continue; }
  SP=$(python3 -c "import json;print(json.load(open('words_$id.json'))['words'][-1]['end'])")
  T=$(python3 -c "print(round(min(55.0,$SP+6.0),1))"); python3 -c "import sys;sys.exit(0 if $SP<=50 else 1)" || echo "LONGSPEECH $id $SP"
  python3 instant_stretch.py $id raw_$id.mp3 words_$id.json $T 0.6 > log_st_$id.txt 2>&1 || { echo "FAIL stretch $id"; tail -3 log_st_$id.txt; continue; }
  grep -q WARN log_st_$id.txt && echo "WARNCUT $id"
  python3 mkdyk.py $id > /dev/null && python3 build.py $id > /dev/null || { echo "FAIL build $id"; continue; }
  bash runone.sh $id > log_r_$id.txt 2>&1; python3 sfx.py $id > log_s_$id.txt 2>&1; D=$(bash mux.sh $id 2>&1 | tail -1)
  python3 -c "import sys;sys.exit(0 if float('${D:-0}' or 0)>=$T-1 else 1)" 2>/dev/null || { echo "RETRY render $id $D"; bash runone.sh $id > log_r_$id.txt 2>&1; python3 sfx.py $id > log_s_$id.txt 2>&1; D=$(bash mux.sh $id 2>&1 | tail -1); }
  rm -rf fr_$id
  echo "OK $id $D"
done
echo ALLDONE

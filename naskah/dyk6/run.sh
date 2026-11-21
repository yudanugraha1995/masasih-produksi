#!/bin/bash
# run.sh id...  DYK 6-country pipeline (Speechify henry, <=55 s)
cd /home/user/masasih-produksi/kit
for id in "$@"; do
  TXT=$(python3 -c "exec(open('../naskah/dyk6/nar.py').read());exec(open('../naskah/dyk6/nar2.py').read());N.update(N2);print(N['$id'][1])")
  python3 sp_tts.py $id "$TXT" > log_tts_$id.txt 2>&1 || { echo "FAIL tts $id"; continue; }
  SP=$(python3 -c "import json;print(json.load(open('words_$id.json'))['words'][-1]['end'])")
  T=$(python3 -c "print(round(min(55.0,$SP+9.5),1))")
  python3 instant_stretch.py $id raw_$id.mp3 words_$id.json $T 0.6 > log_st_$id.txt 2>&1 || { echo "FAIL stretch $id"; tail -3 log_st_$id.txt; continue; }
  grep -q WARN log_st_$id.txt && echo "WARNCUT $id"
  python3 mkdyk.py $id > /dev/null && python3 build.py $id > /dev/null || { echo "FAIL build $id"; continue; }
  bash runone.sh $id > log_r_$id.txt 2>&1; python3 sfx.py $id > log_s_$id.txt 2>&1; D=$(bash mux.sh $id 2>&1 | tail -1)
  echo "OK $id $D"
done
echo ALLDONE

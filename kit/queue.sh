#!/bin/bash
# usage: queue.sh id1 id2 ...  -> build + render v & h, salin ke ../videos
cd "$(dirname "$0")"
for i in "$@"; do python3 build.py $i && ./run2.sh $i v >> render_$i.log 2>&1 && ./run2.sh $i h >> render_$i.log 2>&1 && cp out_${i}_v.mp4 ../videos/${i}_styleA.mp4 && cp out_${i}_h.mp4 ../videos/${i}_yt.mp4 && rm -rf fr_$i && echo "DONE $i" >> queue.log; done

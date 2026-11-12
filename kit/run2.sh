#!/bin/bash
# usage: runone.sh <scene-id>   -> renders 9:16 short to out_<id>.mp4
cd "$(dirname "$0")"; SC=$1; A=${2:-v}; export SC
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 narasi_$SC.mp3)
N=$(python3 -c "import math;print(math.ceil($DUR*30))")
rm -rf fr_$SC; mkdir fr_$SC; q=$((N/4+1))
for i in 0 1 2 3; do s=$((i*q)); e=$(((i+1)*q)); [ $e -gt $N ] && e=$N; node render.js $A fr_$SC $s $e > log_${SC}_$i.txt 2>&1 & done
wait
if [ "${NOSFX:-0}" = "1" ]; then
ffmpeg -y -v error -framerate 30 -i fr_$SC/f%05d.jpg -i narasi_$SC.mp3 -c:v libx264 -crf 18 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart out_${SC}_$A.mp4
else
python3 sfx.py $SC
ffmpeg -y -v error -framerate 30 -i fr_$SC/f%05d.jpg -i narasi_$SC.mp3 -i sfx_$SC.wav -filter_complex "[1:a]aformat=sample_rates=44100:channel_layouts=stereo[n];[2:a]aformat=sample_rates=44100:channel_layouts=stereo[s];[n][s]amix=inputs=2:duration=first:normalize=0[a]" -map 0:v -map "[a]" -c:v libx264 -crf 18 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart out_${SC}_$A.mp4
fi
echo "done $SC $(ls fr_$SC | wc -l)/$N"

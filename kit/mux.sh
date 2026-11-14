#!/bin/bash
# usage: mux.sh <id> -> gabung frame + narasi + sfx -> ../videos/<id>_styleA.mp4 (Did You Know)
cd "$(dirname "$0")";SC=$1
ffmpeg -y -v error -framerate 30 -i fr_$SC/f%05d.jpg -i narasi_$SC.mp3 -i sfx_$SC.wav -filter_complex "[1:a]aformat=sample_rates=44100:channel_layouts=stereo[n];[2:a]aformat=sample_rates=44100:channel_layouts=stereo[s];[n][s]amix=inputs=2:duration=first:normalize=0[a]" -map 0:v -map "[a]" -c:v libx264 -crf 20 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart ../videos/${SC}_styleA.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 ../videos/${SC}_styleA.mp4

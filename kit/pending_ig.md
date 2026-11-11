# IG yang menunggu kuota Buffer (maks 10 post terjadwal per channel)
Channel IG 6aed8639e29c69a1717e2e5f, metadata {instagram:{type:"reel",shouldShareToFeed:true}}, mode customScheduled.
Caption = bagian "Caption IG" di naskah/judul_caption_<id>.md (caption + baris hashtag + #fyp).
Cara: tiap ada post IG yang tayang, kuota kosong 1. Jadwalkan baris paling atas sebanyak kuota yang kosong, hapus baris itu dari tabel, commit, push.
Kalau masih ada sisa, pasang pengingat (send_later) setelah slot IG tayang berikutnya (08:05 / 16:05 WIB).

| id | dueAt (WIB) | video |
|---|---|---|
| kipas | 2026-11-17T08:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/kipas_styleA.mp4 |
| permenkaret | 2026-11-17T16:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/permenkaret_styleA.mp4 |
| kerokan | 2026-11-18T08:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/kerokan_styleA.mp4 |
| keretek | 2026-11-18T16:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/keretek_styleA.mp4 |
| otak | 2026-11-19T08:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/otak_styleA.mp4 |
| gula | 2026-11-19T16:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/gula_styleA.mp4 |
| cukur | 2026-11-20T08:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/cukur_styleA.mp4 |
| wortel | 2026-11-20T16:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/wortel_styleA.mp4 |
| ikanmas | 2026-11-21T08:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/ikanmas_styleA.mp4 |
| airputih | 2026-11-21T16:00:00+07:00 | https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/airputih_styleA.mp4 |

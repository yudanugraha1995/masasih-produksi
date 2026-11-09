# Produksi MASA SIH: aturan tetap

Bahasa ke user: Indonesia santai. User tidak mau menekan Allow dan tidak bisa standby, jadi semuanya harus otomatis.

## Video
- Gaya default = **Style A** (`kit/STYLE_A.md`): gambar vektor dibuat sendiri, kamera bergerak, kartu bab emas, infografik + sumber, split screen CTA. YUMA mengikuti skill yuma-mascot.
- Jangan ganti naskah dan jangan ganti narasi. Audio dipakai apa adanya.
- Default hanya **Short 9:16** (1080x1920). Versi YouTube 16:9 hanya kalau diminta.
- Render: lihat `kit/STYLE_A.md` bagian 7 (`scenes_<id>.js`, `subs_<id>.json`, `runone.sh`). Selalu cek lembar frame sebelum dijadwalkan.

## Hosting video (tanpa refresh)
- Simpan Short final di `videos/<id>_styleA.mp4`, commit, lalu push ke `main`.
- Link untuk Buffer: `https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/<file>.mp4` (permanen, repo Public).
- JANGAN pakai uguu atau host sementara lain, dan JANGAN buat pengingat refresh.

## Jadwal Buffer
- Org: 6ae70fdb1bfb2511a8a3e891 (Asia/Jakarta). Channel:
  - TikTok 6aed867de29c69a1717e3002
  - IG 6aed8639e29c69a1717e2e5f
  - YouTube 6aed86ade29c69a1717e311b
- Selalu jadwalkan ke **ketiga platform**.
- Slot: **3 post/hari jam 08:00, 14:00, 20:00 WIB**. Isi slot kosong paling awal; kalau slot terisi, pakai slot berikutnya.
- Sebelum menjadwalkan, cek list_posts (scheduled + sent) supaya tidak ada judul atau video yang dobel.
- TikTok: `metadata.tiktok.title` = judul. IG: `{type:"reel", shouldShareToFeed:true}`. YouTube: title + `categoryId "27"`, public, `madeForKids false`. Untuk teks YouTube, ganti `#fyp` dengan `#shorts`.
- Caption: hook + fakta + plot twist + ajakan komentar + forward ke teman + hashtag `#masasih …`.

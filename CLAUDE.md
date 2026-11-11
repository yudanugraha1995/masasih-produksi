# Produksi MASA SIH: aturan tetap

Bahasa ke user: Indonesia santai. User tidak mau menekan Allow dan tidak bisa standby, jadi semuanya harus otomatis.

## Video
- Gaya default = **Style A** (`kit/STYLE_A.md`): gambar vektor dibuat sendiri, kamera bergerak, kartu bab emas, infografik + sumber, split screen CTA. YUMA mengikuti skill yuma-mascot.
- Kalau user kasih naskah/narasi: jangan ganti, audio dipakai apa adanya.
- Kalau user minta video baru tanpa naskah: riset topik, tulis naskah **maksimal 1800 karakter**, lalu bikin narasi di ElevenLabs dengan suara **Senandika** (voice_id `eESTQeTcGUli0jYysKtx`) model **eleven_v3**. Ini selalu untuk konten Indonesia.
- Setiap minta video: kerjakan **dua versi**: Short 9:16 (1080x1920) DAN video YouTube 16:9 (1920x1080). Kirim file final keduanya + judul, caption, dan deskripsi YouTube (`judul_caption_<id>.md`).
- Timing kata: transkrip ElevenLabs Scribe (faster-whisper tidak bisa download model di cloud).
- Setiap video Style A wajib punya **thumbnail judul di 0,1 detik pertama** (isi `THUMB` di `scenes_<id>.js`, lihat `kit/STYLE_A.md` poin 11), supaya cover IG Reels berisi judul.
- Render: lihat `kit/STYLE_A.md` bagian 7 (`scenes_<id>.js`, `subs_<id>.json`, `runone.sh`). Selalu cek lembar frame sebelum dijadwalkan.

## Hosting video (tanpa refresh)
- Simpan Short final di `videos/<id>_styleA.mp4` dan video YT di `videos/<id>_yt.mp4`, commit, lalu push ke `main`.
- Link untuk Buffer: `https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/<file>.mp4` (permanen, repo Public).
- JANGAN pakai uguu atau host sementara lain, dan JANGAN buat pengingat refresh.

## Jadwal Buffer
- Org: 6ae70fdb1bfb2511a8a3e891 (Asia/Jakarta). Channel yang dipakai (mulai 11 Nov 2026):
  - YouTube **Masa Sih Official Studio** 6aed86ade29c69a1717e311b
  - Instagram **masasihentertainment** 6aed8639e29c69a1717e2e5f
  - (Jangan posting ke How Come Entertainment / TikTok.)
- **Short 9:16** -> IG masasihentertainment (reel) + YT Masa Sih Official Studio.
- **Video 16:9** -> YT Masa Sih Official Studio saja.
- Slot: **2 post/hari per channel jam 08:00 dan 16:00 WIB**. Isi slot kosong paling awal; kalau slot sudah terisi, lanjut ke slot/hari berikutnya.
- Paket Buffer gratis: maksimal 10 post terjadwal per channel.
- Sebelum menjadwalkan, cek list_posts (scheduled + sent) supaya tidak ada judul atau video yang dobel.
- TikTok: `metadata.tiktok.title` = judul. IG: `{type:"reel", shouldShareToFeed:true}`. YouTube: title + `categoryId "27"`, public, `madeForKids false`. Untuk teks YouTube, ganti `#fyp` dengan `#shorts`.
- Caption: hook + fakta + plot twist + ajakan komentar + forward ke teman + hashtag `#masasih …`.

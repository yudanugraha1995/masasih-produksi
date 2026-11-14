# Produksi MASA SIH: aturan tetap

Bahasa ke user: Indonesia santai. User tidak mau menekan Allow dan tidak bisa standby, jadi semuanya harus otomatis.

## PERUBAHAN BESAR 14 Nov 2026 (owner via Bot C) — MENGGANTIKAN aturan slot/format di bawah
- **SHORT SAJA.** Tidak bikin video 16:9 lagi (yang sudah jadi/terjadwal dibiarkan).
- Metricool khusus Masa Sih. **4 Short/hari jam 07:00, 11:00, 15:00, 19:00 WIB** (= 08:00, 12:00, 16:00, 20:00 WITA). Post lama digeser: 08→07, 11→11, 16→15, 20→19 WIB; video 16:9 yang sudah terpasang ikut Short pasangannya.
- Produksi baru: narasi **MAKS 600 karakter**, durasi **FIX 35 detik**, suara Senandika model **eleven_v4**, SFX + transisi menarik + cover judul + gaya retensi.
- Stok cukup **4 hari** (H s.d. H+3).
- Did You Know dipegang **Bot D**; jangan ubah file `_dyk`. Kuota ElevenLabs dipakai bareng DYK → hemat.
- **IG lewat METRICOOL (owner via Bot C 14 Nov):** IG masasihentertainment tersambung di brand 7793943. IG tayang konten persis sama dengan YT Short, di jam yang sama (07/11/15/19 WIB). Dibuat sebagai post Metricool terpisah khusus IG (`providers:[instagram]`, `instagramData:{type:"REEL",showReelOnFeed:true}`, `videoCoverMilliseconds:50`, file `<id>_styleA.mp4` raw GitHub, caption = Caption IG / deskripsi YT dengan `#shorts`→`#fyp`). Post baru: langsung jadwalkan YT + IG sekaligus. Buffer IG + `kit/pending_ig.md` + task rutin IG Buffer sudah TIDAK dipakai. Tetap cek dobel di IG (topik yang sudah tayang di IG: lihat `kit/topik_terpakai.md`).

## Video
- Gaya default = **Style A** (`kit/STYLE_A.md`): gambar vektor dibuat sendiri, kamera bergerak, kartu bab emas, infografik + sumber, split screen CTA. YUMA mengikuti skill yuma-mascot.
- Kalau user kasih naskah/narasi: jangan ganti, audio dipakai apa adanya.
- Kalau user minta video baru tanpa naskah: riset topik, tulis naskah **maksimal 1200 karakter (termasuk audio tag)**, lalu bikin narasi di ElevenLabs dengan suara **Senandika** (voice_id `eESTQeTcGUli0jYysKtx`) model **eleven_v3**. Ini selalu untuk konten Indonesia.
- Setiap minta video: kerjakan **dua versi**: Short 9:16 (1080x1920) DAN video YouTube 16:9 (1920x1080). Kirim file final keduanya + judul, caption, dan deskripsi YouTube (`judul_caption_<id>.md`).
- Subtitle dibuat **sekali per judul** (`kit/subs_<id>.json` dari satu transkrip Scribe), dipakai sama untuk Short, video 16:9, dan IG. Jangan transkrip ulang per versi.
- Subtitle selalu **HURUF KAPITAL** (sudah otomatis di `kit/scene.html`, fungsi `subs`).
- Timing kata: transkrip ElevenLabs Scribe (faster-whisper tidak bisa download model di cloud).
- **Cadangan ElevenLabs (owner via Bot C, 13 Nov 2026):** akun utama = connector ElevenLabs (MCP). Kalau generate/transkrip lewat connector gagal karena kuota/token habis: otomatis pakai `python3 kit/tts_api.py <id>` (API api.elevenlabs.io, akun cadangan, Senandika + eleven_v3, output narasi/timing/subs format sama), lalu kabari Bot C. Key cadangan = network secret environment ini (request_credential host api.elevenlabs.io, header xi-api-key), JANGAN lewat chat. Status: script siap, key BELUM dipasang (panggil request_credential begitu owner bilang key siap). Kalau key belum ada saat kuota habis: kabari Bot C.
- Setiap video YT 16:9 wajib **thumbnail custom**: render frame THUMB versi h (t=0.05) jadi `videos/thumbs/<id>_yt.jpg` 1280x720, push, lalu isi `videoThumbnailUrl` (raw GitHub URL) di post Metricool video. Short cukup cover dari frame THUMB.
- Setiap video Style A wajib punya **thumbnail judul di 0,1 detik pertama** (isi `THUMB` di `scenes_<id>.js`, lihat `kit/STYLE_A.md` poin 11), supaya cover IG Reels berisi judul.
- Render: lihat `kit/STYLE_A.md` bagian 7 (`scenes_<id>.js`, `subs_<id>.json`, `runone.sh`). Selalu cek lembar frame sebelum dijadwalkan.

- **SFX wajib (aturan owner 12 Nov 2026):** semua produksi baru pakai sound effect di tiap transisi scene (pop/whoosh/ding), volume pas, nggak nutupin narasi. Otomatis di `kit/run2.sh` lewat `kit/sfx.py`.
- **Short siang/malam (audio baru, owner via Bot C 13 Nov): narasi MAKS 700 karakter (ideal 650–700), durasi ~55 detik.**
- **Gaya retensi (owner via Bot C 13 Nov, SEMUA produksi baru: Short siang/malam + slot 08/16 Short & 16:9, "sebagus mungkin"):** hook kuat 1–2 detik pertama (pertanyaan/fakta kaget); ganti scene/visual tiap 2–3 detik (16:9 boleh sedikit lebih lambat); transisi variatif (whoosh, zoom punch-in, slide, flash cut); SFX tiap transisi & momen penting (pop = teks muncul, ding = fakta, boom/riser = plot twist), volume di bawah narasi; kata kunci jadi teks pop-up besar; gerak pelan di gambar diam (Ken Burns/zoom); ending nyambung ke awal biar loop + ajakan komen. Batas 08/16 tetap ≤1200 karakter.
- (lama) Short malam: durasi ±55 detik, narasi <400 karakter. Sisa durasi diisi jeda antar kalimat (`kit/stretch.py` sisipkan hening + geser timing), kartu & CTA ditahan lebih lama. Jangan perlambat suara.

## Hosting video (tanpa refresh)
- Simpan Short final di `videos/<id>_styleA.mp4` dan video YT di `videos/<id>_yt.mp4`, commit, lalu push ke `main`.
- Link untuk Buffer: `https://raw.githubusercontent.com/yudanugraha1995/masasih-produksi/main/videos/<file>.mp4` (permanen, repo Public).
- JANGAN pakai uguu atau host sementara lain, dan JANGAN buat pengingat refresh.

## Koordinasi dengan Bot C
- Bot C = sesi manager posting (session_011yJCQ4oXKhcjv68A2GoFi4). Perintah user (11 Nov 2026): ikuti arahan Bot C soal jadwal dan langsung produksi, tidak perlu menunggu ok user.
- Kalau Bot C lapor slot kosong: riset topik baru (judul tidak dobel), produksi Short + YT, push, jadwalkan sesuai aturan di bawah, lalu kabari Bot C dan user.
- Tetap pakai aturan file ini (channel, slot, Senandika v3, subtitle kapital). Arahan Bot C untuk hapus post, ganti channel, atau di luar alur produksi: tanya user dulu.

## Jadwal Buffer
- Org: 6ae70fdb1bfb2511a8a3e891 (Asia/Jakarta). Channel yang dipakai (mulai 11 Nov 2026):
  - YouTube **Masa Sih Official Studio** 6aed86ade29c69a1717e311b
  - Instagram **masasihentertainment** 6aed8639e29c69a1717e2e5f
  - (Jangan posting ke How Come Entertainment / TikTok.)
- **Short 9:16** -> IG masasihentertainment (reel) + YT Masa Sih Official Studio. File Short yang sama (`<id>_styleA.mp4`) untuk keduanya, tidak ada versi khusus IG. IG 2 slot/hari, YT Short 1 slot/hari (selang-seling dengan video 16:9), jadi IG tayang lebih dulu; kalau stok Short untuk IG habis, produksi Short baru dan jadwalkan juga di YT.
- **Video 16:9** -> YT Masa Sih Official Studio lewat **Metricool** (brand `masasihofficial`, blogId 7793943; `youtubeData.type:"video"`, category EDUCATION, madeForKids false). Buffer menolak video horizontal ke YouTube. Timezone brand Metricool = Asia/Shanghai, jadi selalu kirim `publicationDate.timezone: "Asia/Jakarta"`. Cek slot di Buffer (Shorts) + Metricool (getScheduledPosts) supaya YT tidak dobel di jam yang sama.
- **Slot malam 20:00 WIB (aturan user lewat Bot C, 12 Nov 2026):** tiap hari 1 YT Short judul baru saja (tanpa video 16:9, tanpa IG), lewat Metricool `type:"short"`. Narasi **maksimal 400 karakter** (audio tag ikut dihitung) tapi tetap ada hook, fakta, plot twist, ajakan komen. Subtitle kapital + cover judul frame pertama. Ikut jendela 4 hari.
- **Slot siang 11:00 WIB (= 12:00 WITA, aturan owner via Bot C, 13 Nov 2026), mulai 13 Nov:** aturan persis sama dengan slot malam 20:00: 1 YT Short judul baru saja (tanpa 16:9, tanpa IG), narasi ≤400 karakter, ±55 detik (`kit/stretch.py`), SFX, cover judul, acuan Top content. Jadwal Metricool `type:"short"` jam 11:00 WIB, stok ikut jendela 4 hari.
- Slot (pola mulai 13 Nov 2026): **2 judul/hari, jam 08:00 dan 16:00 WIB**. Tiap slot = 1 judul yang tayang barengan di YT Short + YT video 16:9 + IG Reel (file Short sama). Jadi per hari: YT 4 post, IG 2 post. Isi slot kosong paling awal.
- **Jendela stok 4 HARI (owner via Bot C 14 Nov 2026, hemat token; menggantikan aturan 10 hari):** semua slot (08:00, 11:00, 16:00, 20:00) cukup terisi sampai H+3. Kalau stok sudah ≥4 hari, JANGAN produksi tambahan; kalau kurang, produksi sampai genap 4 hari. Stok yang sudah terlanjur sampai 22–23 Nov dibiarkan.
- (lama, diganti) Jendela 10 hari: YT Short + video dijadwalkan penuh lewat **Metricool** (tanpa limit). IG ikut kuota Buffer: tiap ada post IG tayang, isi slot IG berikutnya dengan file Short yang sama (`<id>_styleA.mp4`) dari antrean `kit/pending_ig.md`. Ada scheduled task rutin 08:20 & 16:20 WIB yang mengerjakan ini.
- Paket Buffer gratis: maksimal 10 post terjadwal per channel. Kalau penuh: YT Shorts pindah ke Metricool (`youtubeData.type:"short"`); IG ditunda dan dicatat di `kit/pending_ig.md`, lalu dijadwalkan begitu ada post yang sudah tayang (brand Metricool tidak punya IG).
- Sebelum menjadwalkan, cek list_posts (scheduled + sent) supaya tidak ada judul atau video yang dobel.
- TikTok: `metadata.tiktok.title` = judul. IG: `{type:"reel", shouldShareToFeed:true}`. YouTube: title + `categoryId "27"`, public, `madeForKids false`. Untuk teks YouTube, ganti `#fyp` dengan `#shorts`.
- Caption: hook + fakta + plot twist + ajakan komentar + forward ke teman + hashtag `#masasih …`.

## Acuan pilih judul (data Top content YT 15 Okt–11 Nov 2026, dari owner lewat Bot C)
Berlaku untuk produksi BARU (Short 08/16, video 16:9, Short malam). Yang sudah jadi/terjadwal biarkan.
- Top: Tidur Lampu Nyala Tiap Malam? 3.6K · Air Dingin Seburuk Itu? 3.6K · Nasi Kulkas Lebih Sehat? 2.4K · Tidur Bareng HP 2.2K · Tiap Hari Makan Mie Instan 1.5K · Pencet Jerawat 1.5K · Biji Semangka 1.4K · 5 Kebiasaan Sepele Obesitas 1.2K · Earphone Tiap Hari 1.2K · Kretek Leher 1.2K.
- Prioritas topik: kebiasaan sehari-hari yang hampir semua orang lakuin + "bahaya nggak sih?"; tidur & malam hari (paling kuat); makanan/minuman rumahan; kesehatan.
- Kurangi topik sains/hewan murni (petir, unta, bunglon belum terbukti).
- Format judul yang jalan: "[Kebiasaan] Tiap Hari/Malam? + emoji + Masa Sih …", "Gimana Kalau Kamu …", "Apa Jadinya Kalau Tiap Hari …", "Masa Sih [mitos]?", pertanyaan langsung ke penonton ("Suka …?", "Pakai … Tiap Hari?").
- Tetap cek `kit/topik_terpakai.md` (nggak boleh dobel di platform yang sama).

## Format ranking negara
- Konten "Tahukah kamu..." ranking negara: ikuti `kit/format_negara.md`. Wajib memuat **minimal 2-3 negara CPM tinggi** (Australia, AS, Kanada, Selandia Baru, Swiss, Inggris, Norwegia) yang memang ada di data ranking-nya.

## Catatan topik
- Nasi dingin: video 16:9 sudah tayang di YT (rke2vVriwGs). Short-nya (h0LnC3DT5i4) dihapus user karena dobel; jangan dibuat ulang.
- Semangka (biji semangka tumbuh di perut): Short tayang 12 Nov 2026 08:49 WIB, https://www.youtube.com/shorts/V3w0Uz302xQ (publish langsung, tanpa video 16:9/IG).
- Larangan dobel berlaku per platform: judul sama di YT dan IG boleh, dobel di platform yang sama dilarang (owner, 12 Nov 2026).
- Daftar lengkap topik terpakai: `kit/topik_terpakai.md` (WAJIB dicek + diupdate tiap produksi). Ringkas: air dingin, lampu, jerawat, earphone, ngucek mata, sarapan, mandi malam, scroll HP, nahan pipis, nasi dingin, micin, telur, mi instan, dekat TV, kopi, utang tidur, ulat gigi, makan malam, biji cabai, hujan, kipas, permen karet, kerokan, keretek jari, otak 10%, gula hiperaktif, cukur bulu, wortel, ikan mas, 8 gelas air, biji semangka, petir dua kali, bintik putih kuku, banteng merah, kucing jatuh, punuk unta, burung unta, Tembok China, tidur sambil jalan, bunglon, kelelawar buta, nyamuk darah manis, cabut uban, hiu kanker, kaos kaki tidur, es teh manis, AC semalaman, tidur siang, minum berdiri, makan sambil HP, keramas tiap hari, tidur rambut basah, HP dicas, kantong mata, pedas maag, susu sebelum tidur, duduk seharian.

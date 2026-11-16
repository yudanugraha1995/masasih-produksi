# Produksi MASA SIH: aturan tetap

Bahasa ke user: Indonesia santai. User tidak mau menekan Allow dan tidak bisa standby, jadi semuanya harus otomatis.

- **INSTAGRAM BERHENTI TOTAL (owner via Bot C 16 Nov, MENGGANTIKAN semua aturan IG di bawah):** Masa Sih cuma YouTube. Jangan bikin post IG / IG kembar, jangan sentuh Buffer kedua. `kit/pending_ig2.md` = arsip, jangan diproses. 10 IG yang sudah terjadwal di Buffer kedua dibiarkan (jangan dihapus).

## PERUBAHAN BESAR 14 Nov 2026 (owner via Bot C) — MENGGANTIKAN aturan slot/format di bawah
- **SHORT SAJA.** Tidak bikin video 16:9 lagi (yang sudah jadi/terjadwal dibiarkan).
- Metricool khusus Masa Sih. **4 Short/hari jam 07:00, 11:00, 15:00, 19:00 WIB** (= 08:00, 12:00, 16:00, 20:00 WITA). Post lama digeser: 08→07, 11→11, 16→15, 20→19 WIB; video 16:9 yang sudah terpasang ikut Short pasangannya.
- Produksi baru: narasi **MAKS 400 karakter** (semua slot, revisi owner 15 Nov malam), durasi **MAKS 35 detik** (owner via Bot C 15 Nov malam; boleh lebih pendek, dulu ≤600 & 30–40 dtk), suara Senandika model **eleven_v4**, SFX + transisi menarik + cover judul + gaya retensi.
- Stok YT Masa Sih cukup **sampai H+2** (H+1 dan H+2 penuh, owner via Bot C 15 Nov; dulu 4 hari). Produksi baru cuma kalau kurang dari itu; stok yang sudah ada biarin.
- Did You Know dipegang **Bot D**; jangan ubah file `_dyk`. Kuota ElevenLabs dipakai bareng DYK → hemat.
- **Aturan video BARU (owner via Bot C 14 Nov malam; yang sudah jadi/diproses biarin):**
  1. HOOK 3 detik pertama = pertanyaan, dibuka "Gimana kalau…", "Katanya kalau…", atau "Masa sih kalau…". Judul sebaiknya ikut pola ini.
  2. Audio wajib: background music (volume di bawah narasi) + SFX + pop sound tiap teks/elemen muncul + sound transisi tiap ganti scene.
  3. YUMA: tulisan "MASA SIH" di dada baju sebagai watermark, jelas kebaca tapi rapi.
  4. COVER JUDUL di 0–0,5 detik pertama: kalimat hook/judul besar (2–3 baris, maks 6–8 kata), teks putih/kuning + outline hitam tebal, di tengah layar (area aman 9:16, hindari 20% atas/bawah). YUMA boleh di belakang. Narasi hook tetap mulai dari detik 0. IG tetap `videoCoverMilliseconds:50`.
  5. BACKGROUND terang/cerah (owner via Bot C 14 Nov malam).
  6. ENDING (owner via Bot C 15 Nov): narasi + teks di layar wajib ajak SUBSCRIBE dan KOMENTAR (mis. "Subscribe biar dapat info kayak gini terus, dan tulis pendapatmu di komentar!"). Kalimatnya divariasikan tiap video, jangan sama terus. Urutan: dulu ajakan komentar berupa PERTANYAAN yang nyambung dengan judul/topik (mis. kipas: "Kamu tim tidur pakai kipas atau nggak? Jawab di komentar ya!"), bukan cuma "tulis di komentar"; baru setelah itu ajakan subscribe. Video lama nggak diubah.
  7. DURASI FLEKSIBEL 30–40 detik (owner via Bot C 15 Nov, menggantikan "FIX 40 detik"): sesuaikan isi. Jeda antar kalimat pendek, padat & cepat; JANGAN dipanjang-panjangin (stretch/hening) cuma buat ngejar 40 detik. Video lama nggak diubah.
  8. (owner via Bot C 15 Nov malam, menggantikan no. 7) narasi MAKS 500 karakter, durasi MAKS 35 detik; boleh lebih pendek kalau isinya cukup, jangan dipanjang-panjangin. Video yang sudah ada biarin.
  9. (revisi owner via Bot C 15 Nov malam) narasi MAKS 400 karakter untuk SEMUA Short baru (slot utama + lucu), durasi menyesuaikan, maks 35 detik.
  Tetap ≤400 karakter, **maks 35 detik**, eleven_v4.

- **Metadata YT Short (owner via Bot C 14 Nov malam, semua Short YT yang dijadwalkan mulai sekarang):** deskripsi YT diisi selengkap mungkin sesuai topik (≤5.000 karakter): ringkasan, fakta, penjelasan, plot twist, pertanyaan komentar, sumber, disclaimer, ajakan subscribe. Jangan ada teks berulang/spam. `youtubeData.tags` diisi tag relevan sampai total ≤500 karakter. Hashtag cuma 3–5, termasuk `#shorts`. IG tetap caption biasa (≤2.200 karakter). Post yang sudah terjadwal tidak diubah.

- **Jam posting ACAK (owner via Bot C 14 Nov malam, untuk video yang BELUM dijadwalkan; yang sudah terjadwal biarin):** posting di menit acak dalam 1 jam SEBELUM slot. Slot 07:00 WIB (08 WITA) → acak 06:00–06:59 WIB; 11:00 WIB (12 WITA) → 10:00–10:59; 15:00 WIB (16 WITA) → 14:00–14:59; 19:00 WIB (20 WITA) → 18:00–18:59. Menit diacak tiap post (pakai `python3 -c "import random;print(random.randint(1,58))"`), jangan pola tetap. YT Short + IG untuk konten yang sama = jam acak yang SAMA. Saat cek stok, post di rentang acak itu dihitung mengisi slot tersebut.

- **YT Masa Sih via BUFFER PERTAMA, channel BARU (owner via Bot C 15 Nov):** owner sambung ulang YT Masa Sih di Buffer pertama (org 6ae70fdb1bfb2511a8a3e891) → channel **6af91e0dece6dfde5fcb8a8a** "Masa Sih Official Studio". Channel lama 6aed86ade29c69a1717e311b MATI (403), jangan dipakai. Akun Buffer kedua + `kit/buffer2.py` TIDAK dipakai lagi. Slot ≥24 Nov: CUMA YT Short 4x/hari jam acak (06:xx/10:xx/14:xx/18:xx WIB) lewat konektor Buffer (create_post customScheduled, metadata youtube title + categoryId "27", public, madeForKids false), TANPA IG (IG berhenti setelah jadwal Metricool terakhir 23 Nov), jangan ke Metricool. Maks 10 terjadwal/channel → refill harian. Buffer tidak bisa isi tag YT → post Buffer TANPA tag, cukup deskripsi panjang + 3–5 hashtag. Metricool (s.d. 23 Nov) tetap isi tag. 15 Nov: makanmalam, bijicabai, hujan, telur dijadwal ulang di channel baru (yang lama hilang).

- **KUOTA METRICOOL HABIS (15 Nov, user pilih: pindah YT Short ke Buffer):** Metricool tinggal 2 post/bulan (reset 1 Des). Mulai sekarang SEMUA YT Short Masa Sih (termasuk ≤23 Nov) lewat Buffer channel 6af91e0dece6dfde5fcb8a8a, maks 10 terjadwal → refill harian: ambil YT Short Metricool terdekat yang belum dipindah, jadwalkan di Buffer (jam acak 1 jam sebelum slot, deskripsi + 3–5 hashtag), lalu jadikan versi Metricool `draft:true` (updateScheduledPost, full info) biar nggak dobel. IG + video 16:9 tetap di Metricool (tidak ada cadangan; kemungkinan gagal). Slot baru (mis. 23 Nov 11:xx WIB) diisi lewat Buffer saja. 15 Nov dipindah: makanhp 15/10:50, kucing 15/18:13, keramas 16/10:55, unta 16/18:24 WIB.

- **SEMUA POST METRICOOL = DRAFT (owner via Bot C, user setuju 15 Nov):** 82 post Masa Sih 15–23 Nov (YT Short, 16:9, IG) di Metricool sudah `draft:true` (API nggak bisa hapus). IG + video 16:9 BERHENTI. YT Short cuma lewat Buffer channel 6af91e0dece6dfde5fcb8a8a dari antrean `kit/antrean_yt.md` (deskripsi via `python3 kit/desc_yt.py <id>`), maks 10 terjadwal, refill harian. Jangan bikin post baru di Metricool. Stok antrean cukup sampai 23 Nov; mulai 24 Nov produksi Short baru (aturan video baru di atas).

- **8 SHORT/SIKLUS mulai 16 Nov (owner via Bot C 15 Nov malam, MENGGANTIKAN stok H+2):** slot WITA 08/10/12/14/16/18/20/22 (= WIB 07/09/11/13/15/17/19/21). Jam posting acak dalam 1 jam sebelum slot (dan > sekarang; slot 12 WITA yang diisi jam 11 → acak antara sekarang+15 mnt s.d. 12:00 WITA). Isi SEKALI sehari jam 11:01 WITA (trigger trig_01SXykAYphbBnYXFcmwnkyig) untuk 1 siklus: 12,14,16,18,20,22 WITA hari itu + 08,10 WITA besok. JANGAN jadwalin lewat 10:00 WITA besok (kuota YT/IG maks 10). YT saja (Buffer pertama).
  - Slot UTAMA 08/12/16/20 WITA: dari `kit/antrean_yt.md`; produksi baru ≤400 karakter, maks 35 detik.
  - Slot BARU 10/14/18/22 WITA: video baru JUDUL ANEH & LUCU (mitos/pertanyaan nyeleneh, gaya Masa Sih), narasi MAKS 400 karakter, durasi lebih pendek menyesuaikan. Hook "Gimana kalau/Katanya kalau/Masa sih kalau", latar terang, ending pertanyaan + subscribe, judul nggak dobel (cek `kit/topik_terpakai.md`). Kalau kurang: produksi saat itu juga lalu langsung jadwalkan. Antrean lucu: `kit/antrean_lucu.md`.
  - Post yang sudah terjadwal biarin. 15 Nov: telur dipindah ke 18 Nov 10:23 WIB (11:23 WITA) YT + IG.

- **BUFFER PERTAMA PREMIUM (owner via Bot C 16 Nov):** YT nggak ada batas 10 lagi; isi semua slot (8/hari) sampai tanggal yang diminta. STORAGE GUARD: cek `du -sh .git` sebelum push; kalau ~3.8 GB, STOP & lapor Bot C. Judul prioritas: "Masa Sih X Bikin Y?" mitos makanan/minuman/tubuh; kurangi hook "Gimana kalau". 16 Nov: semua slot s.d. 19 Nov 22:00 WITA terisi di YT (8 dari antrean + 11 lucu baru).

- **Bersih space (user pilih A, 14 Nov):** tiap Senin 18:47 WIB ada tugas terjadwal yang otomatis `git rm` video/thumbnail yang sudah tayang di semua platform; file yang masih dipakai post terjadwal atau stok jangan dihapus. Tanpa rewrite history.

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
- **HEMAT TOKEN (owner via Bot C 15 Nov):** nggak ada cek/laporan per slot ("slot X aman"), itu sudah di laporan pagi Bot C. Lapor ke Bot C CUMA kalau ada masalah (error, gagal tayang, stok kurang, butuh keputusan owner). Jangan kirim "udah dicatat"/"aman".
- Bot C = sesi manager posting (session_011yJCQ4oXKhcjv68A2GoFi4). Perintah user (11 Nov 2026): ikuti arahan Bot C soal jadwal dan langsung produksi, tidak perlu menunggu ok user.
- Kalau Bot C lapor slot kosong: riset topik baru (judul tidak dobel), produksi Short + YT, push, jadwalkan sesuai aturan di bawah, lalu kabari Bot C dan user.
- Tetap pakai aturan file ini (channel, slot, Senandika v3, subtitle kapital). Arahan Bot C untuk hapus post, ganti channel, atau di luar alur produksi: tanya user dulu.

## Jadwal Buffer
- Org: 6ae70fdb1bfb2511a8a3e891 (Asia/Jakarta). Channel yang dipakai (mulai 11 Nov 2026):
  - YouTube **Masa Sih Official Studio** 6af91e0dece6dfde5fcb8a8a (baru 15 Nov; lama 6aed86ade29c69a1717e311b mati)
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

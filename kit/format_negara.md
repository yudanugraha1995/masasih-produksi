# Format "Tahukah kamu..." ranking negara

Aturan owner (14 Nov 2026).

## Komposisi judul harian (aturan owner 14 Nov 2026)
- 4 judul/hari = **2 judul isu hangat** (1-2 hari terakhir di negara CPM tinggi) + **2 judul gaya kompetitor** (lihat `kit/kompetitor_tahukahkamu.md`: "Allow or Ban [hal populer]", pop culture/selebriti x negara, judul menyapa "your country", hipotetis aneh). Hindari gaya yang sepi: statistik murni, politik sensitif, "Part 2".
- Tetap tanpa foto wajah tokoh nyata dan tanpa logo merek: bendera + ikon vektor.

## ATURAN TERBARU OWNER (14 Nov 2026 malam, mengganti 9 negara)
- **6 negara per video** (grid 3x2 di detik 0-3; 5 negara + 1 plot twist). AS + Australia tetap wajib.
- **Backsound wajib, SELALU sama**: `kit/bgm_dyk.mp3` = BGM B instrumental pilihan owner (`kit/bgm_dyk_B.mp3`, ElevenLabs Music, tanpa vokal) otomatis di `kit/mux.sh` (volume 0.13, fade out akhir).
- **Meme reaksi**: tiap negara ada foto tokoh (pemimpin) + emoji reaksi. Foto HANYA dari Wikimedia Commons berlisensi bebas (PD/CC0/CC BY/CC BY-SA) via `kit/faces_fetch.py`, kredit otomatis di baris sumber (`kit/faces/CREDITS.md`). Tanpa kutipan/omongan palsu (cuma reaksi). Foto tidak ada -> emoji saja.
- Alur: `cfg_<id>.js` (item: kode, nama, kata pemicu, angka, satuan, '', sumber, ok/no, emoji) -> `mkdyk.py` -> `dyk_audio.py` + `stretch.py <id> 35 1.2` -> `build.py` -> `NOSFX=1 runone.sh` -> `sfx.py` -> `mux.sh`.

## Jendela stok (owner 14 Nov malam, MENGGANTI stok 4 hari)
- Tiap hari H: siapkan PENUH H+1 dan H+2 (4 slot/hari = 8 video). Rentang pendek biar isu tetap hangat.
- Bot C mengirim pesan "rutin harian DYK" ke sesi Bot D tiap 05:47 WIB; saat itu: riset isu 1-2 hari terakhir, produksi, isi Buffer, lapor Bot C.

## Aturan owner via Bot C (14 Nov malam, video BARU)
- Hook 0-3 dtk = PERTANYAAN, dibuka "What if…" / "They say if…" / "Is it true that if…", sambil bendera tampil. (Jumlah negara tetap 6 sesuai perintah langsung owner, bukan 9.)
- COVER JUDUL 0-0,5 dtk: judul "What if…" besar 2-3 baris (maks 6-8 kata), outline tebal, di tengah layar (bukan 20% atas/bawah), bendera kecil di belakang. Otomatis di `tpl_dyk.js` (fungsi COVER, isi `CFG.cover` atau pakai `CFG.thumb`). Narasi hook langsung jalan dari detik 0.
- Background CERAH bergradasi (owner 14 Nov): tiap negara gradasi beda (biru, tosca, coral, kuning-oranye, ungu), hook & CTA cerah; plot twist tetap gelap sebagai selingan. Otomatis di `tpl_dyk.js` (PAL/BGG). Video lama dibiarkan.
- Audio wajib: backsound (di bawah narasi), SFX transisi tiap scene, pop tiap bendera/teks muncul.

## Struktur
- **Durasi video SELALU 35 detik (aturan owner 14 Nov 2026, sebelumnya 40).** Naskah MAKSIMAL 600 karakter (aturan owner 14 Nov 2026; ElevenLabs Inggris sekitar 20 karakter/detik -> narasi sekitar 30 dtk). Sisa sampai 35 dtk (sekitar 5 dtk) diisi jeda singkat antarkalimat + kartu/plot twist ditahan lebih lama (`kit/stretch.py`); suara tidak boleh diperlambat. Kalau narasi lewat 35 dtk: pangkas kata, percepat suara maks 2%. Pembagian: 0-3 hook + 9 bendera, 3-28 delapan negara (sekitar 3 dtk/negara), 28-33 plot twist, 33-35 ajakan komentar MAKS 2 detik (satu kalimat pendek, contoh "Comment your country!").
- **AS dan Australia WAJIB selalu tersentuh di setiap video (aturan owner 14 Nov 2026)**, apa pun topiknya. Topik utama boleh fokus ke negara/isu lain (contoh: "MBG itu program dari mana? Seberapa bermanfaat?" -> fokus Indonesia), tapi tetap masukkan minimal 1 fakta tentang Amerika Serikat DAN 1 fakta tentang Australia yang nyambung dengan topiknya (pembanding, kebalikan, atau plot twist).
- Video fokus satu negara tetap pakai 9 bendera di detik awal: negara utama disorot (lebih besar/di tengah), AS dan Australia wajib ada di grid.
- **Selalu 9 negara per video (aturan owner 14 Nov 2026).** Riset fakta/data untuk tepat 9 negara (termasuk negara CPM tinggi, usahakan AS + Australia, dan Indonesia untuk versi MASA SIH). Di detik awal tampilkan ke-9 bendera sekaligus dalam grid 3x3 (pop-in cepat + SFX). Isi video membahas ke-9 negara (hitung mundur 9 -> 1 atau per kelompok), juara/plot twist di akhir.
- **Wajib di detik awal (0-3 dtk, aturan owner 14 Nov 2026):** tampilkan dulu SEMUA bendera negara yang akan dibahas (berjajar/grid, pop-in cepat satu per satu + SFX pop, nama negara kecil di bawah bendera), bersamaan dengan hook. Tujuannya penonton langsung lihat negaranya ada di video dan tidak skip. Negara yang jadi plot twist/juara boleh tetap ditampilkan (atau sebagai bendera "?" kalau mau disimpan sebagai kejutan).
- Hook pertanyaan (0-2 dtk) -> hitung mundur negara (bendera vektor + angka besar) -> juara paling heboh / plot twist -> "Negaramu nomor berapa? Tulis di komentar!"
- Data wajib dari sumber resmi (PBB, Guinness, Smithsonian GVP, CIA Factbook, WINA, dll), sumber kecil di kiri bawah.

## Jenis topik yang disukai
- Utamakan **pengetahuan aneh / tak terduga** (bikin "hah, masa sih?!"): hukum aneh, rekor ekstrem, kebiasaan unik, fakta yang kebalik dari dugaan. Topik data biasa (penduduk, luas) hanya sebagai selingan.

- **Tema nebeng isu viral**: ambil isu yang lagi ramai di Indonesia, lalu bandingkan antarnegara (contoh: program MBG Prabowo -> "negara mana saja yang punya makan gratis di sekolah?"). Masukkan Indonesia di daftar. Cocok untuk MASA SIH; versi Inggris pakai sudut global.

- **Riset isu harian (aturan owner 14 Nov 2026):** tiap hari cari isu hangat 1-2 hari terakhir di negara CPM tinggi (AS, Australia, Kanada, Selandia Baru, Swiss, Inggris, Norwegia), supaya beritanya tidak basi. Hasilnya ditambahkan di bagian atas `kit/ide_isu_hangat_cpm.md` (per tanggal). Saat membuat judul/naskah, pakai isu terbaru dari file itu dan masukkan negara asal isu ke dalam video. Kalau tidak ada isu yang cocok, pakai pengetahuan aneh. Dikerjakan otomatis oleh scheduled task harian 05:47 WIB.

## Wajib: negara CPM tinggi
Tiap video memuat **minimal 2-3 negara CPM tinggi** (makin banyak makin bagus), sebut di judul/hook kalau bisa:
Australia (~$39,83) · Amerika Serikat (~$36,03) · Kanada (~$32,07) · Selandia Baru (~$30,97) · Swiss (~$25,44) · Inggris (~$23,75) · Norwegia (~$22,19)
(angka CPM dari owner; sumber YTface/MilX, bervariasi per musim dan niche)

- **Prioritas utama: Amerika Serikat dan Australia** (usahakan selalu ada). Negara lain di luar daftar CPM tinggi tetap boleh ikut di ranking; yang penting negara CPM tinggi diutamakan.
- Pilih topik yang datanya memang menempatkan negara-negara itu di ranking. Jangan memaksa negara masuk ranking kalau datanya tidak begitu.
- Versi Indonesia (MASA SIH): Indonesia tetap ikut di daftar kalau datanya ada.
- Versi Inggris (channel Did You Know): prioritas, karena penonton negara CPM tinggi berbahasa Inggris.

## Channel Did You Know (aturan owner 14 Nov 2026)
- Nama channel: **Did You Know** (channel baru, bahasa Inggris). JANGAN tulis "How Come" di branding, deskripsi, caption, atau panduan channel ini (How Come Entertainment = channel lain).
- **Tanpa karakter**: jangan pakai YUMA atau karakter lain. Jelaskan hanya dengan bendera, peta, globe, angka, ikon/objek, plus SFX.
- ID video berakhiran `_dyk` (contoh `lunch9_dyk`) -> watermark otomatis `kit/wm_hc.png` (kecil, kiri atas: tombol merah + "Please subscribe").
- Contoh/template: `kit/body_lunch9_dyk.js` (9 negara) dan `kit/body_chatgpt_dyk.js` (gaya Allow/Ban); bendera di `kit/lib_flags.js`. Lama: `kit/body_lunch_dyk.js` (bendera vektor AS/Inggris/Australia/Indonesia, globe, nampan, sekolah, peta Australia).
- **Speechify = uji coba sementara**: audio, timing, file suara, dan video yang memakai suara Speechify JANGAN di-commit ke GitHub (sudah di `.gitignore`). Simpan lokal / kirim ke user saja.

- **Transisi bumi berputar (owner 14 Nov):** tiap negara (dan plot twist) dibuka dengan bumi 3D berputar ke negara itu, wilayahnya disorot kuning + zoom masuk (±0,9 dtk), lalu bumi yang sudah ter-zoom TETAP jadi background (owner 14 Nov: tanpa foto landmark; foto landmark hanya kalau cfg `bgPhoto:true`) + bendera + isi. Otomatis lewat `lib_globe.js` + `world_dyk.js`.
- **Durasi 40 detik + jeda peta (owner via Bot C 14 Nov, mulai 17 Nov):** narasi tetap ≤600 karakter. Setelah `dyk_audio.py`, jalankan `python3 dyk_stretch.py <id> 40 1.0` (BUKAN stretch.py): hening ±1 dtk disisipkan tepat sebelum nama tiap negara + plot twist, sisa dibagi ke akhir kalimat. Cfg WAJIB `gpad:1.0` (sama dengan argumen) supaya bumi berputar ±1,3 dtk lalu zoom ke negara sebelum konten masuk. Mux: `FO=38.5 ./mux.sh <id>`.
- **Deskripsi YT lengkap (owner via Bot C 15 Nov):** buat dengan `python3 dyk_desc.py <id> "<intro Did you know…>" "💬 <pertanyaan komentar>" "#shorts #DidYouKnow #topik #topik2" map` (argumen `map` = kredit peta Natural Earth, wajib untuk video bumi berputar). Hasil `kit/desc/<id>.txt` (±2.500 karakter, batas YT 5.000): judul, intro, pertanyaan, fakta tiap negara, plot twist, naskah lengkap, sumber, kredit foto (dari faces/CREDITS.md), musik, catatan fakta, ajakan subscribe. Isinya ini dipakai sebagai `text` post Buffer. Tanpa teks berulang/spam. Hashtag 3–5 (termasuk #shorts). Kalau edit post Buffer, `assets` (url video + title) WAJIB ikut dikirim.
- **Tag YT:** Buffer API tidak punya kolom tag YouTube, jadi tag tidak bisa diisi lewat Buffer.
- **Cover klik-bait (owner 15 Nov):** frame thumbnail (0–0,1 dtk) + cover (sampai 0,5 dtk) = latar cerah + IKON TOPIK besar + tanda tanya merah/kuning + label topik + 6 bendera kecil + judul. Isi di cfg: `coverTag:'CHATGPT'` (kata kunci topik, ditulis BESAR kuning). `coverIcon` opsional = emoji topik (mis. `'🗳️'`); kalau tidak ada gambar yang aman, JANGAN pakai ikon/kotak pengganti, cukup tulisan besar + tanda tanya (owner 15 Nov). JANGAN pakai logo merek asli (hak cipta/merek dagang) — gambar sendiri/emoji + nama mereknya sebagai teks.
- **Background cover = bola dunia "spill" (owner 15 Nov):** di frame thumbnail + cover 0–0,5 dtk, bola dunia (opacity 0,5) diarahkan ke kawasan negara PLOT TWIST; negara plot twist diblok KUNING tapi TANPA nama di judul/cover (owner 15 Nov). Otomatis dari `twist.code` lewat `globeArea()` di `lib_globe.js`. Logo merek resmi tetap TIDAK dipakai (main aman); ikon topik = gambar sendiri/emoji.
- **Jam posting acak (owner via Bot C 15 Nov, post yang BELUM dijadwalkan):** tiap post dijadwalkan di menit acak dalam 1 jam SEBELUM slot: slot 22:00 WITA → 21:00–21:59, 02:00 → 01:00–01:59, 06:00 → 05:00–05:59, 10:00 → 09:00–09:59 (WITA). Menit diacak per post (`python3 -c "import random;print(random.randint(0,59))"`). Post yang sudah terjadwal tidak diubah.

## Komposisi judul + ACC owner (owner, 15 Nov 2026)
- Tiap hari 4 judul = **2 judul isu yang lagi ramai** + **2 judul receh sehari-hari** (kebiasaan/aturan yang semua orang alami, misal umur minum, batas kecepatan, tip restoran).
- **Sebelum produksi, kirim dulu daftar 4 judul ke owner** (judul + jenis ramai/receh + negara plot twist singkat) dan tunggu OK. Baru setelah owner OK lanjut TTS dan render. Kalau owner minta ganti, ganti judulnya dulu.

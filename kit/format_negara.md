# Format "Tahukah kamu..." ranking negara

Aturan owner (14 Nov 2026).

## Komposisi judul harian (aturan owner 14 Nov 2026)
- 4 judul/hari = **2 judul isu hangat** (1-2 hari terakhir di negara CPM tinggi) + **2 judul gaya kompetitor** (lihat `kit/kompetitor_tahukahkamu.md`: "Allow or Ban [hal populer]", pop culture/selebriti x negara, judul menyapa "your country", hipotetis aneh). Hindari gaya yang sepi: statistik murni, politik sensitif, "Part 2".
- Tetap tanpa foto wajah tokoh nyata dan tanpa logo merek: bendera + ikon vektor.

## Struktur
- **Durasi video SELALU 40 detik (aturan owner 14 Nov 2026).** Naskah MAKSIMAL 600 karakter (aturan owner 14 Nov 2026; ElevenLabs Inggris sekitar 20 karakter/detik -> narasi sekitar 30 dtk). Sisa sampai 40 dtk diisi jeda singkat antarkalimat + kartu/plot twist ditahan lebih lama (`kit/stretch.py`); suara tidak boleh diperlambat. Kalau narasi lewat 40 dtk: pangkas kata, percepat suara maks 2%. Pembagian: 0-4 hook + 9 bendera, 4-32 delapan negara (sekitar 3,5 dtk/negara), 32-37 plot twist, 37-40 ajakan komentar MAKS 2-3 detik (satu kalimat pendek, contoh "Comment your country!").
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

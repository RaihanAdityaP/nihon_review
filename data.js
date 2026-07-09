// ─────────────────────────────────────────────────────
// DATA: HIRAGANA
// ─────────────────────────────────────────────────────
const H={
"Vokal Dasar":[{c:"あ",r:"a"},{c:"い",r:"i"},{c:"う",r:"u"},{c:"え",r:"e"},{c:"お",r:"o"}],
"Baris K":[{c:"か",r:"ka"},{c:"き",r:"ki"},{c:"く",r:"ku"},{c:"け",r:"ke"},{c:"こ",r:"ko"}],
"Baris S":[{c:"さ",r:"sa"},{c:"し",r:"shi"},{c:"す",r:"su"},{c:"せ",r:"se"},{c:"そ",r:"so"}],
"Baris T":[{c:"た",r:"ta"},{c:"ち",r:"chi"},{c:"つ",r:"tsu"},{c:"て",r:"te"},{c:"と",r:"to"}],
"Baris N":[{c:"な",r:"na"},{c:"に",r:"ni"},{c:"ぬ",r:"nu"},{c:"ね",r:"ne"},{c:"の",r:"no"}],
"Baris H":[{c:"は",r:"ha"},{c:"ひ",r:"hi"},{c:"ふ",r:"fu"},{c:"へ",r:"he"},{c:"ほ",r:"ho"}],
"Baris M":[{c:"ま",r:"ma"},{c:"み",r:"mi"},{c:"む",r:"mu"},{c:"め",r:"me"},{c:"も",r:"mo"}],
"Baris Y":[{c:"や",r:"ya"},{c:"ゆ",r:"yu"},{c:"よ",r:"yo"}],
"Baris R":[{c:"ら",r:"ra"},{c:"り",r:"ri"},{c:"る",r:"ru"},{c:"れ",r:"re"},{c:"ろ",r:"ro"}],
"Baris W + N":[{c:"わ",r:"wa"},{c:"を",r:"wo"},{c:"ん",r:"n"}],
"Dakuten G":[{c:"が",r:"ga"},{c:"ぎ",r:"gi"},{c:"ぐ",r:"gu"},{c:"げ",r:"ge"},{c:"ご",r:"go"}],
"Dakuten Z":[{c:"ざ",r:"za"},{c:"じ",r:"ji"},{c:"ず",r:"zu"},{c:"ぜ",r:"ze"},{c:"ぞ",r:"zo"}],
"Dakuten D":[{c:"だ",r:"da"},{c:"ぢ",r:"ji*"},{c:"づ",r:"zu*"},{c:"で",r:"de"},{c:"ど",r:"do"}],
"Dakuten B":[{c:"ば",r:"ba"},{c:"び",r:"bi"},{c:"ぶ",r:"bu"},{c:"べ",r:"be"},{c:"ぼ",r:"bo"}],
"Handakuten P":[{c:"ぱ",r:"pa"},{c:"ぴ",r:"pi"},{c:"ぷ",r:"pu"},{c:"ぺ",r:"pe"},{c:"ぽ",r:"po"}],
"Combo KY":[{c:"きゃ",r:"kya"},{c:"きゅ",r:"kyu"},{c:"きょ",r:"kyo"}],
"Combo SH":[{c:"しゃ",r:"sha"},{c:"しゅ",r:"shu"},{c:"しょ",r:"sho"}],
"Combo CH":[{c:"ちゃ",r:"cha"},{c:"ちゅ",r:"chu"},{c:"ちょ",r:"cho"}],
"Combo NY":[{c:"にゃ",r:"nya"},{c:"にゅ",r:"nyu"},{c:"にょ",r:"nyo"}],
"Combo HY":[{c:"ひゃ",r:"hya"},{c:"ひゅ",r:"hyu"},{c:"ひょ",r:"hyo"}],
"Combo MY":[{c:"みゃ",r:"mya"},{c:"みゅ",r:"myu"},{c:"みょ",r:"myo"}],
"Combo RY":[{c:"りゃ",r:"rya"},{c:"りゅ",r:"ryu"},{c:"りょ",r:"ryo"}],
"Combo GY":[{c:"ぎゃ",r:"gya"},{c:"ぎゅ",r:"gyu"},{c:"ぎょ",r:"gyo"}],
"Combo JY":[{c:"じゃ",r:"ja"},{c:"じゅ",r:"ju"},{c:"じょ",r:"jo"}],
"Combo BY":[{c:"びゃ",r:"bya"},{c:"びゅ",r:"byu"},{c:"びょ",r:"byo"}],
"Combo PY":[{c:"ぴゃ",r:"pya"},{c:"ぴゅ",r:"pyu"},{c:"ぴょ",r:"pyo"}],
"Vokal Panjang":[{c:"おお",r:"oo",n:"panjang O"},{c:"ええ",r:"ee",n:"panjang E"},{c:"ああ",r:"aa",n:"panjang A"},{c:"いい",r:"ii",n:"panjang I"},{c:"うう",r:"uu",n:"panjang U"}],
"Konsonan Ganda (っ)":[{c:"っか",r:"kka",n:"contoh"},{c:"っさ",r:"ssa",n:"contoh"},{c:"った",r:"tta",n:"contoh"},{c:"っぱ",r:"ppa",n:"contoh"}]
};

// ─── DATA: KATAKANA ───
const K={
"Vokal Dasar":[{c:"ア",r:"a"},{c:"イ",r:"i"},{c:"ウ",r:"u"},{c:"エ",r:"e"},{c:"オ",r:"o"}],
"Baris K":[{c:"カ",r:"ka"},{c:"キ",r:"ki"},{c:"ク",r:"ku"},{c:"ケ",r:"ke"},{c:"コ",r:"ko"}],
"Baris S":[{c:"サ",r:"sa"},{c:"シ",r:"shi"},{c:"ス",r:"su"},{c:"セ",r:"se"},{c:"ソ",r:"so"}],
"Baris T":[{c:"タ",r:"ta"},{c:"チ",r:"chi"},{c:"ツ",r:"tsu"},{c:"テ",r:"te"},{c:"ト",r:"to"}],
"Baris N":[{c:"ナ",r:"na"},{c:"ニ",r:"ni"},{c:"ヌ",r:"nu"},{c:"ネ",r:"ne"},{c:"ノ",r:"no"}],
"Baris H":[{c:"ハ",r:"ha"},{c:"ヒ",r:"hi"},{c:"フ",r:"fu"},{c:"ヘ",r:"he"},{c:"ホ",r:"ho"}],
"Baris M":[{c:"マ",r:"ma"},{c:"ミ",r:"mi"},{c:"ム",r:"mu"},{c:"メ",r:"me"},{c:"モ",r:"mo"}],
"Baris Y":[{c:"ヤ",r:"ya"},{c:"ユ",r:"yu"},{c:"ヨ",r:"yo"}],
"Baris R":[{c:"ラ",r:"ra"},{c:"リ",r:"ri"},{c:"ル",r:"ru"},{c:"レ",r:"re"},{c:"ロ",r:"ro"}],
"Baris W + N":[{c:"ワ",r:"wa"},{c:"ヲ",r:"wo"},{c:"ン",r:"n"}],
"Dakuten G":[{c:"ガ",r:"ga"},{c:"ギ",r:"gi"},{c:"グ",r:"gu"},{c:"ゲ",r:"ge"},{c:"ゴ",r:"go"}],
"Dakuten Z":[{c:"ザ",r:"za"},{c:"ジ",r:"ji"},{c:"ズ",r:"zu"},{c:"ゼ",r:"ze"},{c:"ゾ",r:"zo"}],
"Dakuten D":[{c:"ダ",r:"da"},{c:"ヂ",r:"ji*"},{c:"ヅ",r:"zu*"},{c:"デ",r:"de"},{c:"ド",r:"do"}],
"Dakuten B":[{c:"バ",r:"ba"},{c:"ビ",r:"bi"},{c:"ブ",r:"bu"},{c:"ベ",r:"be"},{c:"ボ",r:"bo"}],
"Handakuten P":[{c:"パ",r:"pa"},{c:"ピ",r:"pi"},{c:"プ",r:"pu"},{c:"ペ",r:"pe"},{c:"ポ",r:"po"}],
"Combo KY":[{c:"キャ",r:"kya"},{c:"キュ",r:"kyu"},{c:"キョ",r:"kyo"}],
"Combo SH":[{c:"シャ",r:"sha"},{c:"シュ",r:"shu"},{c:"ショ",r:"sho"}],
"Combo CH":[{c:"チャ",r:"cha"},{c:"チュ",r:"chu"},{c:"チョ",r:"cho"}],
"Combo NY":[{c:"ニャ",r:"nya"},{c:"ニュ",r:"nyu"},{c:"ニョ",r:"nyo"}],
"Combo HY":[{c:"ヒャ",r:"hya"},{c:"ヒュ",r:"hyu"},{c:"ヒョ",r:"hyo"}],
"Combo MY":[{c:"ミャ",r:"mya"},{c:"ミュ",r:"myu"},{c:"ミョ",r:"myo"}],
"Combo RY":[{c:"リャ",r:"rya"},{c:"リュ",r:"ryu"},{c:"リョ",r:"ryo"}],
"Combo GY":[{c:"ギャ",r:"gya"},{c:"ギュ",r:"gyu"},{c:"ギョ",r:"gyo"}],
"Combo JY":[{c:"ジャ",r:"ja"},{c:"ジュ",r:"ju"},{c:"ジョ",r:"jo"}],
"Combo BY":[{c:"ビャ",r:"bya"},{c:"ビュ",r:"byu"},{c:"ビョ",r:"byo"}],
"Combo PY":[{c:"ピャ",r:"pya"},{c:"ピュ",r:"pyu"},{c:"ピョ",r:"pyo"}],
"Serapan Ti/Di":[{c:"ティ",r:"ti",n:"≈ ti (team)"},{c:"ディ",r:"di",n:"≈ di (disc)"},{c:"テゥ",r:"tu",n:"≈ tu"},{c:"デゥ",r:"du",n:"≈ du"}],
"Serapan WI/WE/WO":[{c:"ウィ",r:"wi"},{c:"ウェ",r:"we"},{c:"ウォ",r:"wo"}],
"Serapan FA/FI/FE/FO":[{c:"ファ",r:"fa"},{c:"フィ",r:"fi"},{c:"フェ",r:"fe"},{c:"フォ",r:"fo"}],
"Serapan VA/VI/VE/VO":[{c:"ヴァ",r:"va"},{c:"ヴィ",r:"vi"},{c:"ヴ",r:"vu"},{c:"ヴェ",r:"ve"},{c:"ヴォ",r:"vo"}],
"Serapan JE/CHE":[{c:"ジェ",r:"je"},{c:"チェ",r:"che"}],
"Vokal Panjang (ー)":[{c:"ケーキ",r:"keeki",n:"kue"},{c:"コーヒー",r:"koohii",n:"kopi"},{c:"ビール",r:"biiru",n:"bir"},{c:"ノート",r:"nooto",n:"buku catatan"}],
"Konsonan Ganda (ッ)":[{c:"ッカ",r:"kka"},{c:"ッサ",r:"ssa"},{c:"ッタ",r:"tta"},{c:"ッパ",r:"ppa"}]
};

// ─── DATA: KOTOBA ───
const KT={
"Hewan":{rows:[
{k:"ねこ",r:"neko",a:"kucing",kj:"猫",n:"Hewan peliharaan paling populer di Jepang, sering muncul dalam budaya pop."},
{k:"いぬ",r:"inu",a:"anjing",kj:"犬",n:"Lambang tahun anjing dalam kalender zodiak Jepang."},
{k:"きつね",r:"kitsune",a:"rubah",kj:"狐",n:"Makhluk mistis dalam mitologi Jepang, dianggap utusan dewa Inari."},
{k:"さかな",r:"sakana",a:"ikan",kj:"魚",n:"Awalnya berarti 'teman minum sake' karena ikan sering jadi camilan."},
{k:"にわとり",r:"niwatori",a:"ayam",kj:"鶏",n:"Secara harfiah 'burung halaman rumah'."},
{k:"ぞう",r:"zou",a:"gajah",kj:"象",n:"Sering ada di kebun binatang Jepang."},
{k:"パンダ",r:"panda",a:"panda",n:"Ditulis katakana karena kata serapan. Panda raksasa dari Cina sangat populer di Jepang."}
]},
"Orang & Keluarga":{rows:[
{k:"わたし",r:"watashi",a:"saya",kj:"私",n:"Kata ganti orang pertama paling netral/formal."},
{k:"あなた",r:"anata",a:"kamu",kj:"貴方",n:"Terdengar formal; dalam percakapan sehari-hari orang Jepang lebih suka menyebut nama langsung."},
{k:"ひと",r:"hito",a:"orang",kj:"人",n:"Kata dasar untuk manusia/orang."},
{k:"せんせい",r:"sensei",a:"guru",kj:"先生",n:"Dipakai juga untuk dokter, pengacara, atau siapapun yang ahli di bidangnya."},
{k:"がくせい",r:"gakusei",a:"siswa",kj:"学生",n:"Gabungan 学 (belajar) + 生 (orang)."},
{k:"いしゃ",r:"isha",a:"dokter",kj:"医者",n:"Disapa dengan 'sensei' dalam percakapan."},
{k:"ともだち",r:"tomodachi",a:"teman",kj:"友達",n:"Salah satu kata paling dikenal dari anime/manga."},
{k:"ふたり",r:"futari",a:"dua orang",kj:"二人",n:"Cara hitung orang: hitōri (1), futari (2), san-nin (3+)."},
{k:"かぞく",r:"kazoku",a:"keluarga",kj:"家族",n:"Gabungan 家 (rumah) + 族 (klan)."},
{k:"こども",r:"kodomo",a:"anak",kj:"子供",n:"Hari Anak-anak (Kodomo no Hi) dirayakan 5 Mei."},
{k:"はは",r:"haha",a:"ibu (sendiri)",kj:"母",n:"Dipakai saat membicarakan ibu sendiri kepada orang lain."},
{k:"おかあさん",r:"okaasan",a:"ibu",kj:"お母さん",n:"Dipakai untuk menyapa ibu sendiri atau menyebut ibu orang lain dengan hormat."},
{k:"おとうさん",r:"otousan",a:"ayah",kj:"お父さん",n:"Bentuk hormat. Tanpa 'お' (tousan) lebih santai."},
{k:"おとうと",r:"otouto",a:"adik laki-laki",kj:"弟",n:"Untuk menyebut adik sendiri. Untuk adik orang lain pakai 'otouto-san'."},
{k:"おにいさん",r:"oniisan",a:"kakak laki-laki",kj:"お兄さん",n:"Bentuk sopan untuk kakak laki-laki orang lain."},
{k:"おねえさん",r:"oneesan",a:"kakak perempuan",kj:"お姉さん",n:"Huruf 'ね' digandakan karena vokal panjang."},
{k:"いもうと",r:"imouto",a:"adik perempuan",kj:"妹",n:"Untuk menyebut adik sendiri. Untuk adik orang lain tambah '-san'."},
{k:"おばあさん",r:"obaasan",a:"nenek",kj:"お祖母さん",n:"Perhatikan vokal panjang 'ばあ'. Beda dengan 'obasan' (bibi)."},
{k:"おじいさん",r:"ojiisan",a:"kakek",kj:"お祖父さん",n:"Vokal panjang 'じい' penting. Beda dengan 'ojisan' (paman)."},
{k:"けいさつ",r:"keisatsu",a:"polisi",kj:"警察",n:"Polisi Jepang dikenal ramah; ada koban (pos polisi kecil) di tiap sudut."}
]},
"Tempat":{rows:[
{k:"いえ",r:"ie",a:"rumah",kj:"家",n:"Merujuk pada bangunan fisik rumah secara umum."},
{k:"うち",r:"uchi",a:"rumah (sendiri)",kj:"家",n:"Lebih personal dari 'ie'. Juga bisa berarti 'dalam kelompok'."},
{k:"えき",r:"eki",a:"stasiun",kj:"駅",n:"Stasiun kereta sangat penting; menjadi pusat komunitas kota."},
{k:"こうえん",r:"kouen",a:"taman",kj:"公園",n:"Tempat hanami (melihat bunga sakura) di musim semi."},
{k:"がっこう",r:"gakkou",a:"sekolah",kj:"学校",n:"Gabungan 学 (belajar) + 校 (lembaga)."},
{k:"だいがく",r:"daigaku",a:"universitas",kj:"大学",n:"Gabungan 大 (besar) + 学 (belajar)."},
{k:"びょういん",r:"byouin",a:"rumah sakit",kj:"病院",n:"Jangan tertukar dengan 'biyouin' (美容院) yang berarti salon kecantikan!"},
{k:"くうこう",r:"kuukou",a:"bandara",kj:"空港",n:"Gabungan 空 (langit) + 港 (pelabuhan). Harfiah: 'pelabuhan udara'."},
{k:"きっさてん",r:"kissaten",a:"kedai kopi",kj:"喫茶店",n:"Kedai kopi tradisional Jepang. Berbeda dengan kafe modern."},
{k:"うみ",r:"umi",a:"laut",kj:"海",n:"Jepang negara kepulauan; laut sangat penting dalam budayanya."},
{k:"かわ",r:"kawa",a:"sungai",kj:"川",n:"Juga dibaca 'gawa' saat digabung (contoh: Sumida-gawa)."},
{k:"こうこう",r:"koukou",a:"SMA",kj:"高校",n:"Kependekan dari こうとうがっこう. Wajib belajar di Jepang sampai SMP, SMA tidak wajib tapi 98% melanjutkan."},
{k:"にほんごがっこう",r:"nihongo gakkou",a:"sekolah bahasa Jepang",kj:"日本語学校",n:"Sekolah khusus bahasa Jepang untuk orang asing."},
{k:"としょかん",r:"toshokan",a:"perpustakaan",kj:"図書館",n:"Tosho (buku) + Kan (gedung). Perpustakaan umum di Jepang biasanya gratis dan buka sampai malam."},
{k:"オフィス／じむしょ",r:"ofisu / jimusho",a:"kantor",n:"オフィス = serapan 'office' (santai). じむしょ (事務所) = istilah asli Jepang, lebih formal."},
{k:"きょうしつ",r:"kyoushitsu",a:"kelas / ruang kelas",kj:"教室",n:"Kyou (mengajar) + Shitsu (ruangan). Dipakai di sekolah maupun tempat kursus."},
{k:"へや",r:"heya",a:"kamar / ruangan",kj:"部屋",n:"Kata umum untuk kamar/ruangan apapun. 'Watashi no heya' = kamar saya."},
{k:"きつえんじょ",r:"kitsuenjo",a:"area merokok",kj:"喫煙所",n:"Kitsu (menghisap) + En (asap) + Jo (tempat)."},
{k:"スーパー",r:"suupaa",a:"supermarket",n:"Serapan 'supermarket'. Di Jepang tutup cukup malam (22:00-23:00), ada area bento diskon jelang tutup."},
{k:"レストラン",r:"resutoran",a:"restoran",n:"Serapan 'restaurant'. Sering punya mesin pemesan tiket (食券) di pintu masuk."},
{k:"ビル",r:"biru",a:"gedung",n:"Serapan 'building'. Jangan tertukar dengan ビール (biiru = bir)!"},
{k:"トイレ",r:"toire",a:"toilet / kamar kecil",n:"Serapan 'toilet'. Di Jepang toilet terkenal canggih — ada toilet pintar (washlet). Selalu bersih dan tersedia di mana-mana."},
{k:"１００えんしょっぷ",r:"hyaku en shoppu",a:"toko serba 100 yen",n:"Toko dengan semua barang seharga 100 yen (±Rp 10.000). Daiso adalah yang paling terkenal."},
{k:"インフォメーション",r:"infomeeshon",a:"bagian informasi",n:"Serapan 'information'. Meja informasi biasanya ada di dekat pintu masuk gedung atau stasiun."},
{k:"エスカレーター",r:"esukareetaa",a:"eskalator / tangga berjalan",n:"Serapan 'escalator'. Di Jepang ada aturan tak tertulis: berdiri di sisi kiri (Osaka: kanan) agar orang buru-buru bisa lewat."},
{k:"エレベーター",r:"erebeetaa",a:"elevator / lift",n:"Serapan 'elevator'. Ada suara/musik saat pintu terbuka-tertutup. Sangat bersih dan terawat."},
{k:"レジ",r:"reji",a:"kasir",n:"Dari 'register' (mesin kasir). Di Jepang kasir menaruh kembalian di nampan kecil, bukan langsung ke tangan."},
{k:"ATM（エーティーエム）",r:"eetiiemu",a:"mesin ATM",n:"ATM di Jepang punya jam operasional (tidak 24 jam di semua tempat). ATM di 7-Eleven dan kantor pos paling mudah dipakai orang asing."},
{k:"ぎんこう",r:"ginkou",a:"bank",kj:"銀行",n:"Gin (perak/uang) + Kou (lembaga). Bank di Jepang umumnya tutup jam 3 sore untuk transaksi tunai walau kantornya buka lebih lama."},
{k:"たいいくかん",r:"taiikukan",a:"gedung olahraga",kj:"体育館",n:"Tai (tubuh) + Iku (mendidik) + Kan (gedung). Dipakai untuk olahraga indoor seperti basket, badminton, senam."},
{k:"ゆうびんきょく",r:"yuubinkyoku",a:"kantor pos",kj:"郵便局",n:"Yuubin (pos) + Kyoku (kantor/biro). Kantor pos Jepang juga berfungsi sebagai bank dan tempat penukaran uang."},
{k:"バス",r:"basu",a:"bus",n:"Serapan 'bus'. Moda transportasi umum yang melengkapi kereta di Jepang, terutama di area yang tidak terjangkau rel kereta."},
{k:"ふじさん",r:"fujisan",a:"Gunung Fuji",kj:"富士山",n:"Gunung tertinggi dan paling ikonik di Jepang (3.776 m), terdaftar sebagai Situs Warisan Dunia UNESCO."},
{k:"ほっかいどう",r:"hokkaidou",a:"Hokkaido",kj:"北海道",n:"Pulau paling utara Jepang, terkenal dengan salju, ski, dan hasil laut segar."},
{k:"コンビニ",r:"konbini",a:"mini market",n:"Singkatan dari 'convenience store'. Buka 24 jam — bisa bayar tagihan, ambil ATM, beli tiket, sampai print dokumen."},
{k:"デパート",r:"depaato",a:"department store / departemen",n:"Serapan 'department store'. Berbeda dari suupaa (supermarket) — depaato lebih mewah, biasanya multi-lantai, banyak butik dan restoran."},
{k:"（お）てら",r:"(o)tera",a:"wihara / kuil Buddha",kj:"（お）寺",n:"Tempat ibadah agama Buddha. Beda dari じんじゃ (kuil Shinto) — biasanya punya pagoda dan patung Buddha."},
{k:"きょうかい",r:"kyoukai",a:"gereja",kj:"教会",n:"Kyou (mengajar/ajaran) + Kai (pertemuan). Tempat ibadah Kristen — jumlahnya relatif sedikit di Jepang."},
{k:"じんじゃ",r:"jinja",a:"kuil Shinto",kj:"神社",n:"Jin (dewa) + Sha (kuil). Ciri khasnya gerbang torii merah di depan pintu masuk."},
{k:"おんせん",r:"onsen",a:"pemandian air panas alami",kj:"温泉",n:"On (hangat) + Sen (mata air). Budaya mandi air panas alami khas Jepang, banyak ditemukan di daerah pegunungan."},
{k:"ところ",r:"tokoro",a:"tempat",n:"Kata umum untuk 'tempat', lebih abstrak dari basho (場所) yang lebih spesifik."}
]},
"Hobi & Olahraga":{rows:[
{k:"しゅみ",r:"shumi",a:"hobi",kj:"趣味",n:"'Oshumi wa nan desu ka?' = Apa hobimu? Pertanyaan umum saat kenalan."},
{k:"サッカー",r:"sakkaa",a:"sepak bola",n:"Serapan 'soccer'. Tim nasional Jepang dijuluki 'Samurai Blue'."},
{k:"テニス",r:"tenisu",a:"tenis",n:"Serapan 'tennis'. Salah satu olahraga paling populer di Jepang."},
{k:"すいえい",r:"suiei",a:"renang",kj:"水泳",n:"Sui (air) + Ei (berenang). Pelajaran wajib di sekolah Jepang."},
{k:"どくしょ",r:"dokusho",a:"membaca buku",kj:"読書",n:"Doku (membaca) + Sho (tulisan/buku). Budaya membaca sangat tinggi di Jepang."},
{k:"りょうり",r:"ryouri",a:"masak / masakan",kj:"料理",n:"'Ryouri ga suki desu' = Saya suka memasak."},
{k:"たべあるき",r:"tabearuki",a:"wisata kuliner jalan kaki",kj:"食べ歩き",n:"Tabe (makan) + Aruki (berjalan). Berkeliling sambil mencicipi jajanan — populer di kawasan wisata Jepang."},
{k:"アルバイト",r:"arubaito",a:"kerja paruh waktu",n:"Dari bahasa Jerman 'Arbeit' (kerja). Sangat umum di kalangan pelajar dan mahasiswa Jepang, sering disingkat 'baito'."},
{k:"スキー",r:"sukii",a:"ski",n:"Serapan 'ski'. Olahraga musim dingin populer di Jepang, terutama di Hokkaido dan Nagano."},
{k:"バーベキュー",r:"baabekyuu",a:"barbeku",n:"Serapan 'barbecue'. Kegiatan populer saat musim panas, sering dilakukan di taman atau tepi sungai."},
{k:"はなび",r:"hanabi",a:"kembang api",kj:"花火",n:"Hana (bunga) + Bi (api). Harfiah 'bunga api'. Festival kembang api adalah acara musim panas paling ikonik di Jepang."},
{k:"（お）はなみ",r:"(o)hanami",a:"melihat bunga Sakura",kj:"（お）花見",n:"Hana (bunga) + Mi (melihat). Tradisi piknik di bawah pohon sakura saat musim semi."},
{k:"（お）まつり",r:"(o)matsuri",a:"festival",kj:"（お）祭り",n:"Festival tradisional Jepang, biasanya diadakan di kuil/wihara dengan stand makanan dan kembang api."},
{k:"（お）すし",r:"(o)sushi",a:"sushi",kj:"（お）寿司",n:"Salah satu makanan Jepang paling terkenal di dunia. Prefiks 'o' menambahkan kesan sopan/akrab."},
{k:"いいですね",r:"ii desu ne",a:"itu bagus, oke",n:"Ungkapan setuju/menyukai sesuatu yang diusulkan lawan bicara. 'ne' menambahkan nuansa mengajak setuju bersama."},
{k:"ホームステイ",r:"hoomusutei",a:"homestay",n:"Serapan 'homestay'. Populer di kalangan pelajar asing untuk merasakan kehidupan keluarga Jepang."}
]},
"Kendaraan":{rows:[
{k:"でんしゃ",r:"densha",a:"kereta",kj:"電車",n:"Gabungan 電 (listrik) + 車 (kendaraan). Kereta listrik, bukan uap."},
{k:"ひこうき",r:"hikouki",a:"pesawat",kj:"飛行機",n:"Gabungan 飛 (terbang) + 行 (pergi) + 機 (mesin)."},
{k:"くるま",r:"kuruma",a:"mobil",kj:"車",n:"Kata yang sama untuk 'kendaraan beroda' secara umum."},
{k:"じてんしゃ",r:"jitensha",a:"sepeda",kj:"自転車",n:"Gabungan 自 (sendiri) + 転 (berputar) + 車 (roda)."},
{k:"のりもの",r:"norimono",a:"kendaraan",kj:"乗り物",n:"Gabungan 乗り (naik) + 物 (benda). Harfiah: 'benda yang dinaiki'."},
{k:"しんかんせん",r:"shinkansen",a:"kereta peluru",kj:"新幹線",n:"Shin (baru) + Kan (utama) + Sen (jalur). Kereta cepat ikonik Jepang, bisa sampai 320 km/jam."},
{k:"バイク",r:"baiku",a:"sepeda motor",n:"Serapan 'bike/motorbike'. Beda dari jitensha (sepeda kayuh) — baiku pakai mesin."},
{k:"あるいて",r:"aruite",a:"dengan berjalan kaki",kj:"歩いて",n:"Bentuk te dari 'aruku' (berjalan). Beda dari kendaraan lain: TIDAK pakai partikel で, langsung diikuti keterangan waktu/kegiatan."}
]},
"Makanan & Minuman":{rows:[
{k:"たまご",r:"tamago",a:"telur",kj:"卵",n:"Dari kata kuno 'tama' (bulat) + 'ko' (anak). Artinya 'anak berbentuk bulat'."},
{k:"みかん",r:"mikan",a:"jeruk mandarin",kj:"蜜柑",n:"Buah khas musim dingin Jepang. Sering dimakan di bawah kotatsu."},
{k:"りんご",r:"ringo",a:"apel",kj:"林檎",n:"Apel Aomori terkenal sebagai yang terbaik di Jepang."},
{k:"じゃがいも",r:"jagaimo",a:"kentang",kj:"じゃが芋",n:"Dari 'Jaga' (Jakarta/Batavia) + 'imo' (ubi). Kentang dibawa dari Indonesia ke Jepang!"},
{k:"たべもの",r:"tabemono",a:"makanan",kj:"食べ物",n:"Gabungan 食べ (makan) + 物 (benda)."},
{k:"ごはん",r:"gohan",a:"nasi / makan",kj:"御飯",n:"Prefiks sopan 'go' + 'han' (nasi). Bisa berarti nasi matang atau waktu makan."},
{k:"おちゃ",r:"ocha",a:"teh hijau",kj:"お茶",n:"Teh hijau adalah minuman nasional Jepang."},
{k:"こうちゃ",r:"koucha",a:"teh hitam",kj:"紅茶",n:"Harfiah: 'teh merah'."},
{k:"ジュース",r:"juusu",a:"jus",n:"Serapan 'juice'. Ditulis katakana karena gairaigo (kata asing)."},
{k:"カレー",r:"karee",a:"kari",n:"Serapan 'curry'. Kari Jepang (wa-fu karee) lebih manis dan kental dari kari India."},
{k:"サンドイッチ",r:"sandoicchi",a:"sandwich",n:"Serapan 'sandwich'. 'ッチ' untuk bunyi konsonan ganda 'tch'."},
{k:"ワイン",r:"wain",a:"wine, anggur",n:"Serapan 'wine'. Konsumsi wine semakin populer di Jepang, terutama untuk acara formal."},
{k:"ビール",r:"biiru",a:"bir",n:"Serapan 'beer'. 'Kanpai!' (乾杯) diucapkan sebelum minum bersama."},
{k:"コーヒー",r:"koohii",a:"kopi",n:"Serapan 'coffee'. Kedai kopi tradisional (kissaten) maupun kafe modern sangat banyak di Jepang."},
{k:"ハンバーグ",r:"hanbaagu",a:"stik Hamburg, stik daging",n:"Dari 'Hamburg steak', beda dari 'hanbaagaa' (hamburger/burger). Daging cincang panggang gaya Barat ala Jepang."},
{k:"ごはん／ライス",r:"gohan / raisu",a:"nasi",n:"ごはん = kata asli Jepang. ライス (serapan 'rice') dipakai khusus di restoran gaya Barat, disajikan di piring bukan mangkuk."},
{k:"ぎゅうにゅう",r:"gyuunyuu",a:"susu sapi",kj:"牛乳",n:"Gyuu (sapi) + Nyuu (susu). Sering diminum saat sarapan atau makan siang sekolah."},
{k:"サラダ",r:"sarada",a:"salad",n:"Serapan 'salad'. Umum sebagai pendamping makanan di restoran keluarga atau konbini."},
{k:"チーズ",r:"chiizu",a:"keju",n:"Serapan 'cheese'. Tidak sepopuler di masakan tradisional Jepang, tapi umum di makanan gaya Barat/fusion."},
{k:"とりにく",r:"toriniku",a:"daging ayam",kj:"鶏肉",n:"Tori (ayam) + Niku (daging). Sangat umum dalam masakan Jepang — yakiniku, karaage, oyakodon."},
{k:"ぎゅうにく",r:"gyuuniku",a:"daging sapi",kj:"牛肉",n:"Gyuu (sapi) + Niku (daging). Wagyu (和牛) adalah daging sapi Jepang premium yang terkenal di seluruh dunia."},
{k:"ぶたにく",r:"butaniku",a:"daging babi",kj:"豚肉",n:"Buta (babi) + Niku (daging). Sangat umum dalam masakan Jepang — ramen, tonkatsu, kakuni."},
{k:"イチゴ",r:"ichigo",a:"stroberi",n:"Dari bahasa Inggris. Stroberi Jepang terkenal sangat manis dan besar — bisa sangat mahal untuk yang premium."},
{k:"スープ",r:"suupu",a:"sup",n:"Serapan 'soup'. Sup miso (みそしる) adalah sup paling ikonik — hampir selalu ada dalam set makan tradisional Jepang."},
{k:"とんかつ",r:"tonkatsu",a:"tonkatsu",n:"Dari ton (babi) + katsu (dari 'cutlet'). Potongan daging babi berlapis tepung roti yang digoreng. Menu populer di seluruh Jepang."}
]},
"Benda":{rows:[
{k:"かぎ",r:"kagi",a:"kunci",kj:"鍵",n:"'Kagi kakko' = tanda kurung siku [ ]."},
{k:"とけい",r:"tokei",a:"jam",kj:"時計",n:"Gabungan 時 (waktu) + 計 (mengukur)."},
{k:"かさ",r:"kasa",a:"payung",kj:"傘",n:"Ada budaya 'kasa no wasuremono' (payung tertinggal) di stasiun."},
{k:"でんわ",r:"denwa",a:"telepon",kj:"電話",n:"Gabungan 電 (listrik) + 話 (bicara)."},
{k:"ベッド",r:"beddo",a:"tempat tidur",n:"Serapan 'bed'. Konsonan ganda 'dd' ditulis 'ッド'."},
{k:"ふとん",r:"futon",a:"futon",kj:"布団",n:"Kasur lipat tradisional. Kata 'futon' sudah masuk kosakata Inggris!"},
{k:"まくら",r:"makura",a:"bantal",kj:"枕",n:"Ada tradisi 'makura-gaeshi' dalam cerita hantu Jepang."},
{k:"ドア",r:"doa",a:"pintu",n:"Serapan 'door'. Pintu geser tradisional disebut 'shoji' atau 'fusuma'."},
{k:"きっぷ",r:"kippu",a:"tiket",kj:"切符",n:"Gabungan 切 (memotong) + 符 (tanda)."},
{k:"くつ",r:"kutsu",a:"sepatu",kj:"靴",n:"Di Jepang ada sistem indoor shoes (uwabaki) — sepatu luar dilepas di pintu masuk."},
{k:"かばん",r:"kaban",a:"tas",kj:"鞄",n:"Tas umum. Siswa SD Jepang pakai randoseru (ransel kaku khas Jepang)."},
{k:"ふく",r:"fuku",a:"pakaian / baju",kj:"服",n:"Kata umum untuk pakaian. Seragam sekolah disebut seifuku (制服)."},
{k:"めがね",r:"megane",a:"kacamata",kj:"眼鏡",n:"Me (mata) + Kane (logam). 'Logam untuk mata'."},
{k:"とけい",r:"tokei",a:"jam tangan",kj:"時計",n:"Sama dengan jam dinding — konteks menentukan apakah jam tangan atau jam dinding."},
{k:"さいふ",r:"saifu",a:"dompet",kj:"財布",n:"Sai (harta) + Fu (kain/wadah). Di Jepang dompet sering dijadikan hadiah karena dipercaya membawa keberuntungan finansial."},
{k:"てがみ",r:"tegami",a:"surat",kj:"手紙",n:"Te (tangan) + Kami (kertas). 'Kertas yang ditulis tangan'. Budaya menulis surat tangan masih dihargai di Jepang."},
{k:"しんぶん",r:"shinbun",a:"koran / surat kabar",kj:"新聞",n:"Shin (baru) + Bun (berita/tulisan). Jepang salah satu negara dengan tingkat baca koran tertinggi di dunia."},
{k:"おかね",r:"okane",a:"uang",kj:"お金",n:"Prefiks sopan 'o' + Kane (logam/uang). Mata uang Jepang adalah yen (円)."},
{k:"はがき",r:"hagaki",a:"kartu pos",kj:"葉書",n:"Ha (daun) + Gaki (tulisan). Kartu pos sangat populer di Jepang, terutama untuk nengajou (kartu tahun baru)."},
{k:"にもつ",r:"nimotsu",a:"barang bawaan / koper",kj:"荷物",n:"Ni (beban) + Motsu (membawa). Kata umum untuk barang bawaan atau bagasi."},
{k:"プレゼント",r:"purezento",a:"hadiah",n:"Serapan 'present'. Memberi hadiah sangat penting dalam budaya Jepang — ada omiyage (oleh-oleh) dan ochugen/oseibo (hadiah musiman)."},
{k:"ケーキ",r:"keeki",a:"kue",n:"Serapan 'cake'. Kue Jepang terkenal halus dan tidak terlalu manis. Strawberry shortcake adalah kue natal tradisional Jepang."},
{k:"カメラ",r:"kamera",a:"kamera",n:"Serapan 'camera'. Merek kamera Jepang (Canon, Nikon, Sony, Fujifilm) mendominasi pasar global."},
{k:"でんしじしょ",r:"denshi jisho",a:"kamus elektronik",kj:"電子辞書",n:"Denshi (elektronik) + Jisho (kamus). Sebelum era smartphone, alat ini wajib dimiliki pelajar bahasa Jepang."},
{k:"ペン",r:"pen",a:"pena",n:"Serapan 'pen'. Untuk ballpoint: ボールペン (boorupen). Jepang terkenal dengan kualitas alat tulis yang sangat baik."},
{k:"トイレットペーパー",r:"toiretto peepaa",a:"tisu toilet",n:"Serapan 'toilet paper'. Di Jepang tisu toilet berkualitas sangat tinggi dan hampir selalu tersedia di toilet umum."},
{k:"この〜",r:"kono ~",a:"ini ~ (sebelum benda)",kj:"此の",n:"Dipakai langsung sebelum kata benda. この本 (kono hon) = buku ini. Tidak bisa berdiri sendiri."},
{k:"その〜",r:"sono ~",a:"itu ~ (dekat pendengar)",kj:"其の",n:"その鞄 (sono kaban) = tas itu (yang di dekatmu)."},
{k:"あの〜",r:"ano ~",a:"itu ~ (jauh, sebelum benda)",kj:"彼の",n:"あの人 (ano hito) = orang itu (yang jauh). Juga dipakai sebagai 'anu...' saat ragu."},
{k:"Ｔシャツ",r:"tii shatsu",a:"kaos",n:"Serapan 'T-shirt'. Di Jepang kaos dengan karakter anime/manga sangat populer."},
{k:"ブレスレット",r:"buresuretto",a:"gelang / bracelet",n:"Serapan 'bracelet'. Aksesoris pergelangan tangan. Bisa juga disebut 'udewa' (腕輪) dalam bahasa Jepang asli."},
{k:"つめきり",r:"tsumekiri",a:"gunting kuku",kj:"爪切り",n:"Tsume (kuku) + Kiri (memotong, dari 'kiru'). Alat kecil untuk memotong kuku."},
{k:"〜や",r:"~ya",a:"toko ~",kj:"〜屋",n:"Ditambahkan setelah jenis barang untuk menyebut tokonya. くつや = toko sepatu, はなや = toko bunga."},
{k:"くつや",r:"kutsuya",a:"toko sepatu",kj:"靴屋",n:"Kutsu (sepatu) + Ya (toko)."},
{k:"でんき",r:"denki",a:"alat elektronik / listrik",kj:"電気",n:"Juga berarti 'listrik'. Akihabara di Tokyo adalah surga belanja elektronik."},
{k:"インターネット",r:"intaanetto",a:"internet",n:"Serapan 'internet'. Kata dasar untuk jaringan internet."},
{k:"シーディー",r:"shiidii",a:"CD",n:"Singkatan 'compact disc' dilafalkan huruf Inggris ala Jepang."},
{k:"なにも",r:"nanimo",a:"apa pun",kj:"何も",n:"Nani (apa) + mo (pun/juga). SELALU diikuti bentuk negatif: 'nanimo tabemasen' = tidak makan apa pun."},
{k:"かいしゃ",r:"kaisha",a:"perusahaan",kj:"会社",n:"Kai (pertemuan/organisasi) + Sha (perusahaan). Dasar dari kata かいしゃいん (karyawan perusahaan)."},
{k:"テレビ",r:"terebi",a:"televisi, TV",n:"Singkatan dari 'terebijon' (television). Kata sehari-hari untuk TV."},
{k:"ディーブイディー",r:"diibuidii",a:"DVD",n:"Singkatan 'digital video disc' dilafalkan huruf Inggris ala Jepang."},
{k:"どこ（へ）も",r:"doko (e) mo",a:"ke mana pun",kj:"何処（へ）も",n:"Doko (mana) + e (partikel arah, opsional) + mo (pun). SELALU diikuti bentuk negatif: 'doko e mo ikimasen' = tidak pergi ke mana pun."}
]},
"Benda (di Kelas)":{rows:[
{k:"エアコン",r:"eakon",a:"AC / pendingin ruangan",n:"Serapan 'air conditioner' disingkat. Di Jepang hampir semua kelas dan kantor punya eakon — musim panasnya sangat terik."},
{k:"エアコンのリモコン",r:"eakon no rimokon",a:"remote AC",n:"Rimokon = serapan 'remote control'. Kombinasi eakon (AC) + no (partikel milik) + rimokon (remote). Di Jepang remote AC sering diperebutkan di kelas!"},
{k:"ほん",r:"hon",a:"buku",kj:"本",n:"Sudah ada di sub-bab Benda umum, tapi konteks kelas sangat relevan — buku pelajaran, buku teks."},
{k:"ノート",r:"nooto",a:"buku catatan",n:"Serapan 'note'. Di Jepang nooto-taking sangat serius; ada seni khusus menulis catatan yang rapi (bisa juga beli buku catatan premium)."},
{k:"ボールペン",r:"boorupen",a:"pulpen / ballpoint",n:"Serapan 'ball pen'. Disingkat dari ballpoint pen. Salah satu alat tulis paling umum di kelas Jepang."},
{k:"ボトル",r:"botoru",a:"botol minum",n:"Serapan 'bottle'. Di banyak sekolah Jepang, siswa membawa botol minum sendiri dari rumah."},
{k:"カーテン",r:"kaaten",a:"gorden / tirai",n:"Serapan 'curtain'. Di kelas Jepang, gorden sering dipakai untuk mengatur cahaya saat menonton proyektor atau saat panas."},
{k:"はさみ",r:"hasami",a:"gunting",kj:"鋏",n:"Alat tulis wajib di kelas. Beda dengan キッチンばさみ (gunting dapur) — ini hasami biasa untuk kertas."},
{k:"ホチキス",r:"hochikisu",a:"stapler / hekter",n:"Serapan dari merek 'Hotchkiss'. Dipakai untuk menyatukan kertas dengan staples, sama seperti hasami dan nori — alat tulis wajib di kelas."},
{k:"けいたいでんわ",r:"keitai denwa",a:"handphone",kj:"携帯電話",n:"Harfiah: 'telepon yang dibawa-bawa'. Biasa disingkat 'keitai'. Di sekolah Jepang umumnya dilarang atau wajib disimpan saat pelajaran."},
{k:"とけい",r:"tokei",a:"jam dinding",kj:"時計",n:"Sudah ada di Benda umum. Di kelas biasanya ada jam dinding besar di depan."},
{k:"まど",r:"mado",a:"jendela",kj:"窓",n:"Sudah ada di Benda umum. Di kelas Jepang biasanya punya jendela besar di sisi kiri (cahaya dari kiri untuk penulis tangan kanan)."},
{k:"じしゃ",r:"jisha",a:"penghapus (karet)",n:"Kanji: 字消し / 消しゴム lebih umum. 'Ji' (huruf/tulisan) + 'sha' (menghapus). Penghapus karet untuk pensil."},
{k:"くつした",r:"kutushita",a:"kaos kaki",kj:"靴下",n:"Kutsu (sepatu) + Shita (bawah). Harfiah: 'yang di bawah sepatu'. Di sekolah Jepang yang pakai indoor shoes, kaos kaki sangat penting."},
{k:"チョーク",r:"chooku",a:"kapur tulis",n:"Serapan 'chalk'. Dipakai di papan tulis hitam (kokuban). Meski banyak sekolah beralih ke whiteboard, chooku masih umum."},
{k:"かみ",r:"kami",a:"kertas",kj:"紙",n:"Sudah ada di Benda umum. Di kelas konteksnya: kertas soal, kertas tugas, kertas origami."},
{k:"せんぷうき",r:"senpuuki",a:"kipas angin",kj:"扇風機",n:"Sen (kipas) + Fuu (angin) + Ki (mesin). Di kelas yang belum punya AC, senpuuki jadi penyelamat di musim panas."},
{k:"コンピュータ",r:"konpyuuta",a:"komputer",n:"Serapan 'computer'. Untuk komputer desktop di lab komputer sekolah. Sehari-hari lebih sering disebut 'pasokon'."},
{k:"ふでばこ",r:"fudebako",a:"tempat pensil / kotak pensil",kj:"筆箱",n:"Fude (kuas/pena) + Hako/Bako (kotak). Di Jepang fudebako bisa sangat elaborate — ada yang multi-layer dengan cermin kecil di dalam!"},
{k:"パソコン",r:"pasokon",a:"laptop / PC",n:"Singkatan dari 'personal computer' dalam pengucapan Jepang. Lebih umum dari 'konpyuuta' untuk percakapan sehari-hari."},
{k:"つくえ",r:"tsukue",a:"meja (belajar)",kj:"机",n:"Sudah ada di Benda umum. Di kelas Jepang, meja siswa biasanya kecil dan individual, bukan meja panjang."},
{k:"こくばん",r:"kokuban",a:"papan tulis hitam",kj:"黒板",n:"Koku (hitam) + Ban (papan). Harfiah: 'papan hitam'. Dibersihkan dengan kokuban keshi. Piket membersihkan kokuban adalah tugas umum siswa Jepang."},
{k:"ホワイトボード",r:"howaitoboodo",a:"whiteboard",n:"Serapan 'whiteboard'. Mulai banyak menggantikan kokuban di sekolah dan kantor modern Jepang."},
{k:"けしごむ",r:"keshigomu",a:"penghapus karet",kj:"消しゴム",n:"Keshi (menghapus) + Gomu (dari Belanda 'gom' = karet). Harfiah: 'karet penghapus'. Lebih umum dari 'jisha'."},
{k:"こくばんけし",r:"kokuban keshi",a:"penghapus papan tulis",kj:"黒板消し",n:"Kokuban (papan hitam) + Keshi (penghapus). Penghapus bulu/spons khusus untuk membersihkan kokuban. Membersihkan ini adalah tugas piket klasik."},
{k:"えんぴつ",r:"enpitsu",a:"pensil",kj:"鉛筆",n:"En (timah/logam) + Pitsu (dari Portugis 'pito' = pipa). Harfiah: 'pipa timah'. Di Jepang pensil kayu masih sangat umum di sekolah dasar."},
{k:"ちず",r:"chizu",a:"peta",kj:"地図",n:"Chi (bumi/tanah) + Zu (gambar/diagram). Harfiah: 'gambar bumi'. Ada di kelas pelajaran geografi dan IPS."},
{k:"ほうき",r:"houki",a:"sapu",kj:"箒",n:"Di sekolah Jepang, siswa sendiri yang membersihkan kelas — tidak ada petugas kebersihan. Houki adalah alat piket wajib."},
{k:"くつ",r:"kutsu",a:"sepatu",kj:"靴",n:"Di sekolah Jepang ada sistem 'indoor shoes' (uwabaki) — sepatu luar dilepas di pintu masuk, ganti sandal khusus dalam ruangan."},
{k:"かばん",r:"kaban",a:"tas",kj:"鞄",n:"Tas sekolah. Di Jepang siswa SD pakai 'randoseru' (ransel kaku khas Jepang). SMP/SMA pakai kaban biasa."},
{k:"ゴミばこ",r:"gomibako",a:"tempat sampah",kj:"ゴミ箱",n:"Sudah ada di Perabot Dapur. Di kelas Jepang biasanya ada beberapa gomibako untuk memisahkan sampah (daur ulang, organik, dll)."},
{k:"ティッシュボックス",r:"tisshu bokkusu",a:"kotak tisu",n:"Serapan 'tissue box'. Di Jepang ada tisu khusus (pocketissue) yang sering dibagikan gratis sebagai promosi di jalanan!"},
{k:"いす",r:"isu",a:"kursi",kj:"椅子",n:"Sudah ada di Benda umum. Di kelas Jepang, kursi biasanya individual dan bisa diatur posisinya saat kerja kelompok."},
{k:"めがね",r:"megane",a:"kacamata",kj:"眼鏡",n:"Me (mata) + Kane/Gane (logam). Harfiah: 'logam untuk mata'. Di budaya pop Jepang, karakter berkacamata sering digambarkan sebagai pintar atau serius ('megane chara')."},
{k:"カレンダー",r:"karendaa",a:"kalender",n:"Serapan 'calendar'. Di kelas biasanya ada di dinding depan atau belakang. Kalender Jepang sering mencantumkan tahun era Jepang (Reiwa, dll) selain tahun Masehi."},
{k:"マーカー",r:"maakaa",a:"spidol / marker",n:"Serapan 'marker'. Dipakai untuk whiteboard atau menandai teks. Ada juga 'keikoo pen' (蛍光ペン) = highlighter/stabilo."},
{k:"えんぴつけずり",r:"enpitsu kezuri",a:"rautan pensil",kj:"鉛筆削り",n:"Enpitsu (pensil) + Kezuri (mengikis/meraut). Harfiah: 'peraut pensil'. Di Jepang ada yang manual dan elektrik."},
{k:"プロジェクター",r:"purojekutaa",a:"proyektor",n:"Serapan 'projector'. Makin umum di sekolah Jepang modern, sering dipasang di langit-langit kelas."},
{k:"ものさし / じょうぎ",r:"monosashi / jougi",a:"penggaris",n:"Kanji: 物差し / 定規. Monosashi (物差し) = penggaris untuk mengukur. Jougi (定規) = penggaris untuk menggaris lurus. Secara praktis dipakai bergantian."},
{k:"スピーカー",r:"supiikaa",a:"speaker",n:"Serapan 'speaker'. Di kelas untuk pengumuman sekolah lewat PA system, atau untuk pelajaran bahasa dengan audio."},
{k:"でんたく",r:"dentaku",a:"kalkulator",kj:"電卓",n:"Den (listrik) + Taku (meja kecil/tablet). Harfiah: 'tablet listrik'. Di Jepang kalkulator diperbolehkan di beberapa ujian tertentu."},
{k:"もんだな",r:"mondana",a:"rak buku / lemari kelas",n:"Tempat menyimpan buku dan perlengkapan di kelas. Setiap siswa Jepang biasanya punya laci/rak sendiri di kelas."},
{k:"モップ",r:"moppu",a:"mop / pel",n:"Serapan 'mop'. Dipakai saat piket membersihkan lantai kelas. Di Jepang siswa secara bergilir melakukan souji (掃除) = piket kebersihan."},
{k:"はたき",r:"hataki",a:"kemoceng",kj:"叩き/はたき",n:"Alat untuk mengibaskan debu dari permukaan. Dipakai saat piket membersihkan rak dan perabot kelas."},
{k:"のり",r:"nori",a:"lem",kj:"糊",n:"Lem kertas. Jangan tertukar dengan のり (海苔) yang berarti rumput laut! Beda kanji, beda makna, pengucapan sama."}
]},
"Alam":{rows:[
{k:"みず",r:"mizu",a:"air",kj:"水",n:"Khusus air dingin/biasa. Air panas = 'oyu' (お湯)."},
{k:"はな",r:"hana",a:"bunga",kj:"花",n:"Waspada homofon: 'hana' juga bisa berarti 'hidung' (鼻)!"},
{k:"たいよう",r:"taiyou",a:"matahari",kj:"太陽",n:"Tai (besar) + You (samudra/luas). Kata formal untuk matahari — sehari-hari lebih sering pakai 'ohisama' (お日様)."},
{k:"いし",r:"ishi",a:"batu",kj:"石",n:"Kata dasar untuk batu. Taman batu Jepang (karesansui) sangat terkenal, seperti di Ryoanji Kyoto."},
{k:"つち",r:"tsuchi",a:"tanah",kj:"土",n:"Tanah/bumi dalam konteks fisik, beda dari 'chikyuu' (地球) yang berarti planet Bumi."},
{k:"は",r:"ha (daun)",a:"daun",kj:"葉",n:"Homofon dengan は (歯) = gigi! Konteks kalimat sangat penting. Momiji (紅葉) = daun yang berubah warna di musim gugur."}
]},
"Musim":{rows:[
{k:"はる",r:"haru",a:"musim semi",kj:"春",n:"Musim sakura. Tahun ajaran/kerja Jepang dimulai April."},
{k:"なつ",r:"natsu",a:"musim panas",kj:"夏",n:"Musim festival (matsuri) dan kembang api (hanabi)."},
{k:"あき",r:"aki",a:"musim gugur",kj:"秋",n:"Musim daun merah (koyo) dan panen."},
{k:"ふゆ",r:"fuyu",a:"musim dingin",kj:"冬",n:"Musim salju. Natal dan tahun baru paling meriah."},
{k:"〜やすみ",r:"~yasumi",a:"libur~",kj:"〜休み",n:"Ditambahkan setelah kata untuk menyebut jenis libur: natsuyasumi (libur musim panas), fuyuyasumi (libur musim dingin)."},
{k:"ゴールデンウィーク",r:"goorudenwiiku",a:"Golden week",n:"Serapan 'golden week'. Rangkaian hari libur nasional akhir April-awal Mei, salah satu musim liburan terpanjang di Jepang."},
{k:"さくら",r:"sakura",a:"sakura",kj:"桜",n:"Bunga sakura (cherry blossom), simbol nasional Jepang yang mekar singkat di musim semi."},
{k:"（お）べんとう",r:"(o)bentou",a:"bekal makanan",kj:"（お）弁当",n:"Kotak bekal makanan khas Jepang, biasa dibawa ke sekolah/kantor atau dibeli di konbini/stasiun."}
]},
"Cuaca & Suhu":{rows:[
{k:"あつい",r:"atsui",a:"panas (cuaca)",kj:"暑い",n:"Khusus untuk suhu UDARA/CUACA. Beda kanji dari 'atsui' (熱い) yang berarti panas untuk BENDA (makanan/minuman) — bunyinya sama tapi konteksnya beda!"},
{k:"さむい",r:"samui",a:"dingin (cuaca)",kj:"寒い",n:"Khusus untuk suhu UDARA/CUACA. Beda kata (bukan cuma beda kanji) dari 'tsumetai' (冷たい) yang dipakai untuk BENDA."},
{k:"あたたかい",r:"atatakai",a:"hangat (cuaca)",kj:"暖かい",n:"Khusus untuk suhu UDARA/CUACA. Beda kanji dari 'atatakai' (温かい) yang berarti hangat untuk BENDA — bunyinya sama, kanji & konteks beda."},
{k:"すずしい",r:"suzushii",a:"sejuk",kj:"涼しい",n:"Suhu sejuk, biasanya dipakai untuk cuaca musim gugur/pagi hari."},
{k:"あたたかい",r:"atatakai",a:"hangat (benda)",kj:"温かい",n:"Khusus untuk suhu BENDA (makanan/minuman/air). Beda kanji dari 'atatakai' (暖かい) yang dipakai untuk cuaca — bunyi sama, kanji beda!"},
{k:"あつい",r:"atsui",a:"panas (benda)",kj:"熱い",n:"Khusus untuk suhu BENDA (makanan/minuman panas). Beda kanji dari 'atsui' (暑い) yang dipakai untuk cuaca — bunyi sama, kanji beda!"},
{k:"つめたい",r:"tsumetai",a:"dingin (benda)",kj:"冷たい",n:"Khusus untuk suhu BENDA (air/makanan/minuman dingin). Beda KATA (bukan cuma beda kanji) dari 'samui' (寒い) yang dipakai untuk cuaca."},
{k:"てんきがいい",r:"tenki ga ii",a:"cuacanya bagus",kj:"天気がいい",n:"Ungkapan tetap untuk menyatakan cuaca cerah/bagus secara umum."},
{k:"てんきがわるい",r:"tenki ga warui",a:"cuacanya buruk",kj:"天気が悪い",n:"Lawan kata dari てんきがいい. Dipakai saat cuaca mendung, hujan, dsb."},
{k:"いちねんじゅう",r:"ichinenjuu",a:"sepanjang tahun",kj:"一年中",n:"Ichinen (satu tahun) + juu (sepanjang/seluruh). Dipakai untuk cuaca/kondisi yang tidak berubah tiap musim, mis. daerah tropis."},
{k:"ゆき",r:"yuki",a:"salju",kj:"雪",n:"Turun terutama di daerah utara Jepang (Hokkaido, Tohoku) saat musim dingin."},
{k:"あめ",r:"ame",a:"hujan",kj:"雨",n:"'Ame ga furimasu' = hujan turun. Musim hujan (梅雨/tsuyu) di Jepang biasanya bulan Juni."}
]},
"Konsep Umum":{rows:[
{k:"やすみ",r:"yasumi",a:"libur / istirahat",kj:"休み",n:"'O-yasumi nasai' = selamat malam (harfiah: istirahatlah)."},
{k:"けいかく",r:"keikaku",a:"rencana",kj:"計画",n:"Gabungan 計 (mengukur) + 画 (rencana)."},
{k:"せいかつ",r:"seikatsu",a:"kehidupan",kj:"生活",n:"Gabungan 生 (hidup) + 活 (aktif). Kehidupan sehari-hari."},
{k:"せかい",r:"sekai",a:"dunia",kj:"世界",n:"Sering muncul dalam judul anime!"},
{k:"ちしき",r:"chishiki",a:"pengetahuan",kj:"知識",n:"Gabungan 知 (mengetahui) + 識 (mengenali)."},
{k:"けつえき",r:"ketsueki",a:"darah",kj:"血液",n:"Di Jepang ada kepercayaan golongan darah menentukan kepribadian."},
{k:"ちゅうもん",r:"chuumon",a:"pesanan",kj:"注文",n:"'Chuumon wo onegaishimasu' = tolong pesanannya (memanggil pelayan untuk memesan)."},
{k:"じゅぎょう",r:"jugyou",a:"pelajaran, kelas",kj:"授業",n:"Ju (memberi) + Gyou (pekerjaan/usaha). Merujuk pada sesi pelajaran, beda dari 'kyoushitsu' yang berarti ruang kelasnya."},
{k:"テスト",r:"tesuto",a:"tes, ulangan",n:"Serapan 'test'. Kata umum untuk ujian atau kuis di sekolah."},
{k:"しけん",r:"shiken",a:"ujian (formal)",kj:"試験",n:"Lebih formal dari 'tesuto'. Dipakai untuk ujian besar/resmi, misalnya ujian masuk sekolah (nyuugaku shiken) atau ujian sertifikasi (JLPT = nouryoku shiken)."},
{k:"じかん",r:"jikan",a:"jam, waktu",kj:"時間",n:"Ji (waktu) + Kan (interval). Berbeda dari 〜じ yang menunjuk jam spesifik — 'jikan' merujuk pada durasi/rentang waktu."},
{k:"スケジュール",r:"sukejuuru",a:"jadwal",n:"Serapan 'schedule'. Dipakai baik untuk jadwal sekolah, kerja, maupun acara pribadi."},
{k:"パーティー",r:"paatii",a:"pesta",n:"Serapan 'party'. Dipakai untuk berbagai jenis perayaan, dari ulang tahun sampai acara kantor."},
{k:"りゅうがくせい",r:"ryuugakusei",a:"pelajar asing",kj:"留学生",n:"Ryuu (tinggal) + Gaku (belajar) + Sei (orang). Merujuk pada pelajar yang belajar di luar negeri."},
{k:"いちねん",r:"ichinen",a:"satu tahun",kj:"一年",n:"Ichi (satu) + Nen (tahun). Dipakai untuk durasi maupun tingkatan ('kelas satu')."}
]},
"Kotoba N5":{rows:[
{k:"あめ",r:"ame",a:"hujan / permen",n:"Kanji: 雨 (hujan) / 飴 (permen). Beda kanji, beda makna! 'Ame ga futte iru' = sedang hujan."},
{k:"そら",r:"sora",a:"langit",kj:"空",n:"Juga bisa berarti 'kosong' (kara). Langit biru disebut 'aoi sora' — tapi ingat, 'ao' mencakup biru dan hijau!"},
{k:"やま",r:"yama",a:"gunung",kj:"山",n:"Fujisan (富士山) = Gunung Fuji, gunung paling terkenal di Jepang. Simbol nasional."},
{k:"き",r:"ki",a:"pohon",kj:"木",n:"Juga berarti 'kayu'. Kanji ini menjadi dasar banyak kanji lain: 森 (hutan), 林 (kebun pohon)."},
{k:"くに",r:"kuni",a:"negara / negeri",kj:"国",n:"'Nihon no kuni' = negeri Jepang. Kata dasar yang sangat sering muncul."},
{k:"まち",r:"machi",a:"kota kecil / kawasan",kj:"町",n:"Lebih kecil dari 'shi' (市 = kota besar). Seringkali merujuk pada kawasan atau distrik tertentu."},
{k:"むら",r:"mura",a:"desa",kj:"村",n:"Satuan administratif terkecil di Jepang, lebih kecil dari machi."},
{k:"ひ",r:"hi",a:"api / hari / matahari",n:"Kanji: 火 (api) / 日 (hari/matahari). Konteks menentukan! '火' dipakai untuk api, '日' untuk hari dan matahari."},
{k:"かぜ",r:"kaze",a:"angin / pilek",n:"Kanji: 風 (angin) / 風邪 (pilek). 'Kaze ga fuiteiru' = angin berhembus. 'Kaze wo hiku' = kena pilek."},
{k:"ゆき",r:"yuki",a:"salju",kj:"雪",n:"Salju di Jepang sangat lebat di bagian utara (Hokkaido). Nama perempuan populer di Jepang."},
{k:"つき",r:"tsuki",a:"bulan",kj:"月",n:"Juga berarti 'bulan' dalam kalender (ichigatsu = Januari). Festival bulan purnama disebut 'Otsukimi'."},
{k:"ほし",r:"hoshi",a:"bintang",kj:"星",n:"Festival Tanabata dirayakan tiap 7 Juli — legenda dua bintang yang hanya bisa bertemu setahun sekali."},
{k:"にわ",r:"niwa",a:"halaman / taman",kj:"庭",n:"Taman gaya Jepang (nihon teien) terkenal karena keindahan dan filosofinya."},
{k:"いけ",r:"ike",a:"kolam",kj:"池",n:"Kolam ikan mas (koi) adalah elemen klasik taman Jepang."},
{k:"はし",r:"hashi",a:"jembatan / sumpit",n:"Kanji: 橋 (jembatan) / 箸 (sumpit). Homofon berbeda kanji! Konteks sangat penting."},
{k:"みち",r:"michi",a:"jalan / jalur",kj:"道",n:"Juga berarti 'cara' atau 'jalan hidup'. Budo (武道) = jalan bela diri. Kado (華道) = jalan merangkai bunga."},
{k:"ひろば",r:"hiroba",a:"lapangan / alun-alun",kj:"広場",n:"Hiro (luas) + Ba (tempat). Tempat terbuka yang luas untuk berkumpul."},
{k:"こうじょう",r:"koujou",a:"pabrik",kj:"工場",n:"Kou (pekerjaan/manufaktur) + Jou (tempat). Jepang terkenal dengan industri manufaktur mobilnya."},
{k:"えいが",r:"eiga",a:"film / bioskop",kj:"映画",n:"Ei (memantulkan cahaya) + Ga (gambar). 'Eiga wo miru' = menonton film. 'Eigakan' = bioskop."},
{k:"おんがく",r:"ongaku",a:"musik",kj:"音楽",n:"On (suara) + Gaku (kesenangan/musik). 'Ongaku wo kiku' = mendengarkan musik."},
{k:"スポーツ",r:"supootsu",a:"olahraga",n:"Serapan 'sports'. Olahraga populer di Jepang: yakyuu (野球/baseball), sakaa (サッカー/sepakbola), kendou, judou."},
{k:"りょこう",r:"ryokou",a:"perjalanan / wisata",kj:"旅行",n:"Ryo (perjalanan) + Kou (pergi). 'Ryokou shimasu' = melakukan perjalanan. Wisata domestik sangat populer di Jepang."},
{k:"しゃしん",r:"shashin",a:"foto / fotografi",kj:"写真",n:"Sha (menyalin) + Shin (kebenaran/kenyataan). 'Shashin wo toru' = mengambil foto."},
{k:"てんき",r:"tenki",a:"cuaca",kj:"天気",n:"Ten (langit/surga) + Ki (energi/udara). 'Tenki wa dou desu ka?' = Bagaimana cuacanya?"},
{k:"いろ",r:"iro",a:"warna",kj:"色",n:"Kata dasar untuk warna. 'Nani iro?' = Warna apa? Juga bisa berarti 'nuansa/corak' secara kiasan."},
{k:"こえ",r:"koe",a:"suara / suara manusia",kj:"声",n:"Khusus untuk suara yang dihasilkan manusia/hewan. Suara benda pakai 'oto' (音)."},
{k:"おと",r:"oto",a:"suara / bunyi (benda)",kj:"音",n:"Suara yang dihasilkan benda atau alam. Berbeda dari 'koe' yang khusus suara makhluk hidup."}
]},
"Angka":{rows:[
{k:"いち",r:"ichi",a:"1",kj:"一",n:"Dasar sistem angka Jepang."},
{k:"に",r:"ni",a:"2",kj:"二",n:"Juga partikel 'ni' (ke/di), tapi beda konteks."},
{k:"さん",r:"san",a:"3",kj:"三",n:"Juga sapaan hormat '-san', tapi ini angka!"},
{k:"よん / し",r:"yon / shi",a:"4",n:"'Shi' dihindari karena homofon dengan 死 (mati). 'Yon' lebih umum."},
{k:"ご",r:"go",a:"5",kj:"五",n:"Bagian dari sistem hitungan Jepang yang dipakai konsisten untuk usia, waktu, dan jumlah benda."},
{k:"ろく",r:"roku",a:"6",kj:"六",n:"Baca 'roku'. Muncul lagi di 六月 (rokugatsu = Juni) dan 六時 (rokuji = jam 6)."},
{k:"なな / しち",r:"nana / shichi",a:"7",n:"'Shichi' mirip 'ichi' sehingga sering dipakai 'nana'."},
{k:"はち",r:"hachi",a:"8",kj:"八",n:"Angka keberuntungan di Jepang (kanji melebar ke bawah = kemakmuran)."},
{k:"きゅう / く",r:"kyuu / ku",a:"9",n:"'Ku' dihindari karena homofon dengan 苦 (penderitaan)."},
{k:"じゅう",r:"juu",a:"10",kj:"十",n:"Angka dasar sistem bilangan Jepang yang berkelompok per sepuluh, beda dari sistem Barat yang per seribu."},
{k:"ひゃく",r:"hyaku",a:"100",kj:"百",n:"Baca 'hyaku'. Kelipatannya: 二百 (nihyaku=200), tapi 三百 dibaca 'sanbyaku' (bukan sanhyaku) karena rendaku."},
{k:"せん",r:"sen",a:"1.000",kj:"千",n:"Baca 'sen'. Kelipatannya: 三千 dibaca 'sanzen' (bukan sansen) karena rendaku."},
{k:"まん",r:"man",a:"10.000",kj:"万",n:"Sistem angka Jepang berkelompok per 10.000."},
{k:"おく",r:"oku",a:"100.000.000",kj:"億",n:"Seratus juta."},
{k:"ちょう",r:"chou",a:"1 triliun",kj:"兆",n:"Anggaran negara Jepang sering dinyatakan dalam satuan ini."},
{k:"〜えん",r:"~en",a:"~yen (mata uang)",kj:"〜円",n:"Satuan mata uang Jepang. ¥100 ≈ Rp 10.000."}
]},
"Umur":{rows:[
{k:"いっさい",r:"issai",a:"1 tahun",kj:"一歳",n:"Ichi + Sai → Issai (konsonan ganda). Ulang tahun pertama disebut 'tanjoubi' (誕生日)."},
{k:"にさい",r:"nisai",a:"2 tahun",kj:"二歳",n:"に (2) + さい."},
{k:"さんさい",r:"sansai",a:"3 tahun",kj:"三歳",n:"さん (3) + さい."},
{k:"よんさい",r:"yonsai",a:"4 tahun",kj:"四歳",n:"よん (4) + さい. Hindari pakai し karena homofon 死 (mati)."},
{k:"ごさい",r:"gosai",a:"5 tahun",kj:"五歳",n:"ご (5) + さい."},
{k:"ろくさい",r:"rokusai",a:"6 tahun",kj:"六歳",n:"ろく (6) + さい."},
{k:"ななさい",r:"nanasai",a:"7 tahun",kj:"七歳",n:"なな (7) + さい."},
{k:"はっさい",r:"hassai",a:"8 tahun",kj:"八歳",n:"はち + さい → はっさい (konsonan ganda)."},
{k:"きゅうさい",r:"kyuusai",a:"9 tahun",kj:"九歳",n:"きゅう (9) + さい."},
{k:"じゅっさい",r:"jussai",a:"10 tahun",kj:"十歳",n:"じゅう + さい → じゅっさい (konsonan ganda)."},
{k:"じゅうごさい",r:"juugosai",a:"15 tahun",kj:"十五歳",n:"じゅうご (15) + さい. Usia SMA kelas 1 di Jepang."},
{k:"じゅうはっさい",r:"juuhassai",a:"18 tahun",kj:"十八歳",n:"Usia dewasa di Jepang sejak 2022 (sebelumnya 20)."},
{k:"じゅうきゅうさい",r:"juukyuusai",a:"19 tahun",kj:"十九歳",n:"じゅうきゅう (19) + さい."},
{k:"はたち",r:"hatachi",a:"20 tahun",kj:"二十歳",n:"Pengucapan KHUSUS — bukan 'nijussai'! Dulu usia dewasa resmi di Jepang. Perayaannya disebut Seijin-shiki (成人式)."},
{k:"にじゅういっさい",r:"nijuuissai",a:"21 tahun",kj:"二十一歳",n:"Kembali ke pola biasa setelah はたち yang spesial."},
{k:"にじゅうごさい",r:"nijuugosai",a:"25 tahun",kj:"二十五歳",n:"にじゅうご (25) + さい."},
{k:"にじゅうはっさい",r:"nijuuhassai",a:"28 tahun",kj:"二十八歳",n:"にじゅうはち + さい → にじゅうはっさい."},
{k:"さんじゅっさい",r:"sanjussai",a:"30 tahun",kj:"三十歳",n:"さんじゅう + さい → さんじゅっさい. Milestone penting — di Jepang usia 30 sering jadi tekanan sosial untuk menikah."},
{k:"さんじゅうごさい",r:"sanjuugosai",a:"35 tahun",kj:"三十五歳",n:"さんじゅうご (35) + さい."},
{k:"よんじゅっさい",r:"yonjussai",a:"40 tahun",kj:"四十歳",n:"よんじゅう + さい → よんじゅっさい."},
{k:"ごじゅっさい",r:"gojussai",a:"50 tahun",kj:"五十歳",n:"ごじゅう + さい → ごじゅっさい."},
{k:"ろくじゅっさい",r:"rokujussai",a:"60 tahun",kj:"六十歳",n:"ろくじゅう + さい → ろくじゅっさい. Usia pensiun umum di Jepang."},
{k:"ななじゅっさい",r:"nanajussai",a:"70 tahun",kj:"七十歳",n:"ななじゅう + さい → ななじゅっさい."},
{k:"なんさい",r:"nansai",a:"berapa tahun? (umur berapa?)",n:"なん (berapa) + さい. 'Nansai desu ka?' = Umurnya berapa? Untuk anak kecil bisa langsung, tapi untuk orang dewasa lebih sopan pakai 'おいくつ (oikutsu) desu ka?'."},
{k:"おいくつ",r:"oikutsu",a:"berapa usia Anda? (sopan)",n:"Bentuk sopan dari 'nansai'. Prefiks hormat 'o' + 'ikutsu' (berapa). Dipakai saat menanyakan usia orang yang lebih tua atau atasan."}
]},
"Lantai":{rows:[
{k:"いっかい",r:"ikkai",a:"lantai 1",kj:"一階",n:"いち + かい → いっかい (konsonan ganda)."},
{k:"にかい",r:"nikai",a:"lantai 2",kj:"二階",n:"に (2) + かい."},
{k:"さんがい",r:"sangai",a:"lantai 3",kj:"三階",n:"PENGECUALIAN! Bukan さんかい — bunyinya berubah jadi さんがい (rendaku)."},
{k:"よんかい",r:"yonkai",a:"lantai 4",kj:"四階",n:"よん (4) + かい. Hindari し karena homofon 死 (mati)."},
{k:"ごかい",r:"gokai",a:"lantai 5",kj:"五階",n:"ご (5) + かい."},
{k:"ろっかい",r:"rokkai",a:"lantai 6",kj:"六階",n:"ろく + かい → ろっかい (konsonan ganda)."},
{k:"ななかい",r:"nanakai",a:"lantai 7",kj:"七階",n:"なな (7) + かい."},
{k:"はっかい",r:"hakkai",a:"lantai 8",kj:"八階",n:"はち + かい → はっかい (konsonan ganda)."},
{k:"きゅうかい",r:"kyuukai",a:"lantai 9",kj:"九階",n:"きゅう (9) + かい."},
{k:"じゅっかい",r:"jukkai",a:"lantai 10",kj:"十階",n:"じゅう + かい → じゅっかい (konsonan ganda)."},
{k:"なんかい",r:"nankai",a:"lantai berapa?",kj:"何階",n:"なん (berapa) + かい. 'Resutoran wa nankai desu ka?' = Restorannya di lantai berapa?"},
{k:"ちか",r:"chika",a:"bawah tanah / basement",kj:"地下",n:"Chi (bumi/tanah) + Ka (bawah). Biasa digabung: ちかいっかい = basement lantai 1 (B1)."},
{k:"ちかいっかい",r:"chika ikkai",a:"basement lantai 1 (B1)",kj:"地下一階",n:"Gabungan ちか (basement) + いっかい (lantai 1). Sering ditulis 'B1' di gedung Jepang."},
{k:"おくじょう",r:"okujou",a:"atap / rooftop",kj:"屋上",n:"Oku (rumah/bangunan) + Jou (atas). Banyak department store Jepang punya taman bermain atau kafe di rooftop-nya."}
]},
"Waktu":{rows:[
{k:"〜じ",r:"~ji",a:"jam",kj:"〜時",n:"Penanda jam. ichiji = jam 1, niji = jam 2, dst."},
{k:"〜ふん／〜ぷん",r:"~fun / ~pun",a:"menit",kj:"〜分",n:"Bacaan berubah tergantung angka: 1=ippun, 3=sanpun, 6=roppun."},
{k:"びょう",r:"byou",a:"detik",kj:"秒",n:"Satuan waktu terkecil dalam hitungan Jepang, dipakai setelah 分 (menit) dan 時 (jam)."},
{k:"ごぜん",r:"gozen",a:"AM",kj:"午前",n:"Sebelum tengah hari."},
{k:"ごご",r:"gogo",a:"PM",kj:"午後",n:"Setelah tengah hari."},
{k:"いま",r:"ima",a:"sekarang",kj:"今",n:"'Ima nanji?' = Sekarang jam berapa?"},
{k:"はん",r:"han",a:"setengah (jam)",n:"ichiji han = jam 1:30."},
{k:"〜じはん",r:"~ji han",a:"jam~lebih 30 menit",kj:"〜時半",n:"Han (半) = setengah. 'Ichiji han' = jam 1:30."},
{k:"あさ",r:"asa",a:"pagi",kj:"朝",n:"Dipakai juga dalam 朝ご飯 (asagohan = sarapan) dan 毎朝 (maiasa = setiap pagi)."},
{k:"ひる",r:"hiru",a:"siang",kj:"昼",n:"'Hirune' = tidur siang."},
{k:"ゆうがた",r:"yuugata",a:"sore",kj:"夕方",n:"Sore menjelang malam (~17-18:00)."},
{k:"よる",r:"yoru",a:"malam",kj:"夜",n:"Dipakai juga dalam 夜中 (yonaka = tengah malam) dan 今夜 (kon'ya = malam ini)."},
{k:"ばん",r:"ban",a:"malam (santai)",kj:"晩",n:"'Konban wa' = Selamat malam."},
{k:"よなか",r:"yonaka",a:"tengah malam",kj:"夜中",n:"Gabungan 夜 (malam) + 中 (tengah). Lebih larut dari 'yoru' biasa, sekitar tengah malam ke atas."},
{k:"しんや",r:"shinya",a:"larut malam",kj:"深夜",n:"Lebih larut dari 'yonaka'."},
{k:"たんじょうび",r:"tanjoubi",a:"hari ulang tahun",kj:"誕生日",n:"Tanjou (lahir) + Bi (hari). 'Otanjoubi omedetou!' = Selamat ulang tahun!"},
{k:"〜さい",r:"~sai",a:"umur ~ tahun (counter)",kj:"〜歳",n:"Ditambahkan setelah angka untuk menyatakan usia. Lihat sub-bab Umur untuk detail lengkap tiap angka."},
{k:"〜がつ",r:"~gatsu",a:"bulan ~ (counter)",kj:"〜月",n:"Ditambahkan setelah angka 1-12. いちがつ = Januari, にがつ = Februari, dst."},
{k:"〜にち",r:"~nichi",a:"tanggal ~ (counter)",kj:"〜日",n:"Tanggal 1-10 punya pengucapan khusus (ついたち、ふつか、dll). Lihat sub-bab Tanggal."},
{k:"なん",r:"nan",a:"apa (bentuk pendek)",kj:"何",n:"Bentuk pendek dari なに (nani). Dipakai sebelum です/の/か. 'Oshumi wa nan desu ka?' = Hobinya apa?"}
]},
"Durasi":{rows:[
{k:"どのぐらい",r:"dono gurai",a:"berapa lama",kj:"どの位",n:"Pola tanya standar untuk menanyakan durasi. 'Densha de dono gurai kakarimasu ka?' = Naik kereta, berapa lama?"},
{k:"くらい／ぐらい",r:"kurai / gurai",a:"kira-kira, sekitar",n:"Ditambahkan setelah angka waktu/jumlah untuk memberi perkiraan, bukan angka pasti. Jadi 'gurai' kalau nempel setelah kata bervokal/nasal."},
{k:"いちじかん",r:"ichi jikan",a:"selama 1 jam",kj:"一時間",n:"Ichi (1) + Ji (jam) + Kan (interval/selama). Pola: angka + じかん untuk durasi jam."},
{k:"にじかん",r:"ni jikan",a:"selama 2 jam",kj:"二時間",n:"に (2) + じかん."},
{k:"さんじかん",r:"san jikan",a:"selama 3 jam",kj:"三時間",n:"さん (3) + じかん."},
{k:"いちにちかん",r:"ichi nichikan",a:"selama 1 hari",kj:"一日間",n:"Juga cukup pakai いちにち (ichinichi) tanpa かん. Perhatikan: ini DURASI (selama sehari penuh), beda dengan ついたち yang berarti tanggal 1."},
{k:"ふつかかん",r:"futsukakan",a:"selama 2 hari",kj:"二日間",n:"Menarik — pola hitungan hari untuk durasi sama dengan tanggal (futsuka, mikka, yokka, dst) + かん."},
{k:"みっかかん",r:"mikkakan",a:"selama 3 hari",kj:"三日間",n:"みっか (3 hari) + かん."},
{k:"いっしゅうかん",r:"isshuukan",a:"selama 1 minggu",kj:"一週間",n:"Isshuukan adalah bentuk baku — huruf っ muncul karena ichi + shuu mengalami perubahan bunyi. Kata ini sangat sering dipakai!"},
{k:"にしゅうかん",r:"nishuukan",a:"selama 2 minggu",kj:"二週間",n:"に (2) + しゅうかん."},
{k:"さんしゅうかん",r:"sanshuukan",a:"selama 3 minggu",kj:"三週間",n:"さん (3) + しゅうかん."},
{k:"いっかげつ",r:"ikkagetsu",a:"selama 1 bulan",kj:"一か月",n:"Perhatikan perubahannya: ichi + kagetsu → ikkagetsu (konsonan ganda). Berbeda dengan ichigatsu (Januari) yang menyebut nama bulan."},
{k:"にかげつ",r:"nikagetsu",a:"selama 2 bulan",kj:"二か月",n:"に (2) + かげつ."},
{k:"さんかげつ",r:"sankagetsu",a:"selama 3 bulan",kj:"三か月",n:"さん (3) + かげつ."},
{k:"いちねんかん",r:"ichinenkan",a:"selama 1 tahun",kj:"一年間",n:"Ichi (1) + Nen (tahun) + Kan (interval). Juga bisa cukup いちねん (ichininen) tanpa かん dalam percakapan santai."},
{k:"にねんかん",r:"ninenkan",a:"selama 2 tahun",kj:"二年間",n:"に (2) + ねんかん."}
]},
"Hari dalam Seminggu":{rows:[
{k:"げつようび",r:"getsuyoubi",a:"Senin",kj:"月曜日",n:"月 = bulan. Hari bulan."},
{k:"かようび",r:"kayoubi",a:"Selasa",kj:"火曜日",n:"火 = api. Hari api."},
{k:"すいようび",r:"suiyoubi",a:"Rabu",kj:"水曜日",n:"水 = air. Hari air."},
{k:"もくようび",r:"mokuyoubi",a:"Kamis",kj:"木曜日",n:"木 = pohon. Hari kayu."},
{k:"きんようび",r:"kinyoubi",a:"Jumat",kj:"金曜日",n:"金 = emas. Hari emas."},
{k:"どようび",r:"doyoubi",a:"Sabtu",kj:"土曜日",n:"土 = tanah. Hari tanah."},
{k:"にちようび",r:"nichiyoubi",a:"Minggu",kj:"日曜日",n:"日 = matahari. Hari matahari."}
]},
"Keterangan Hari":{rows:[
{k:"きょう",r:"kyou",a:"hari ini",kj:"今日",n:"Gabungan 今 (sekarang) + 日 (hari). Pembacaan khusus, bukan 'konnichi' seperti dalam こんにちは."},
{k:"あした",r:"ashita",a:"besok",kj:"明日",n:"Juga bisa 'asu' (lebih formal)."},
{k:"あさって",r:"asatte",a:"lusa",kj:"明後日",n:"Gabungan 明 (terang/besok) + 後 (setelah) + 日 (hari). Dua hari setelah hari ini."},
{k:"きのう",r:"kinou",a:"kemarin",kj:"昨日",n:"Gabungan 昨 (dulu/lampau) + 日 (hari). Pembacaan khusus 'kinou', bukan 'sakujitsu' yang lebih formal."},
{k:"おととい",r:"ototoi",a:"kemarin lusa",kj:"一昨日",n:"Gabungan 一 (satu) + 昨 (lampau) + 日 (hari). Dua hari sebelum hari ini."},
{k:"このあいだ",r:"konoaida",a:"tempo hari",n:"Waktu tidak spesifik di masa lalu."},
{k:"らいしゅう",r:"raishuu",a:"minggu depan",kj:"来週",n:"Gabungan 来 (akan datang) + 週 (minggu). Pola yang sama berlaku untuk 来月 (bulan depan) dan 来年 (tahun depan)."},
{k:"せんしゅう",r:"senshuu",a:"minggu lalu",kj:"先週",n:"Gabungan 先 (sebelum/terdahulu) + 週 (minggu). Pasangannya: 来週 (minggu depan)."},
{k:"けさ",r:"kesa",a:"tadi pagi",kj:"今朝",n:"Gabungan 今 (ini) + 朝 (pagi)."}
]},
"Keterangan Bulan & Tahun":{rows:[
{k:"せんせんげつ",r:"sensengetsu",a:"2 bulan lalu",kj:"先々月",n:"Sen + Sen + Gatsu. Dua bulan sebelum bulan ini."},
{k:"せんげつ",r:"sengetsu",a:"bulan lalu",kj:"先月",n:"Sen (sebelum/terdahulu) + Gatsu (bulan)."},
{k:"こんげつ",r:"kongetsu",a:"bulan ini",kj:"今月",n:"Kon (sekarang/ini) + Gatsu (bulan)."},
{k:"らいげつ",r:"raigetsu",a:"bulan depan",kj:"来月",n:"Rai (akan datang) + Gatsu (bulan)."},
{k:"さらいげつ",r:"saraigetsu",a:"2 bulan lagi",kj:"再来月",n:"Sa + Rai + Gatsu. Dua bulan dari sekarang."},
{k:"こんしゅう",r:"konshuu",a:"minggu ini",kj:"今週",n:"Kon (sekarang/ini) + Shuu (minggu). Pasangannya: senshuu (minggu lalu) dan raishuu (minggu depan) — sudah ada di Keterangan Hari."},
{k:"まいつき",r:"maitsuki",a:"setiap bulan",kj:"毎月",n:"Mai (setiap) + Tsuki (bulan). Dipakai untuk sesuatu yang berulang tiap bulan."},
{k:"おととし",r:"ototoshi",a:"2 tahun lalu",kj:"一昨年",n:"Dua tahun yang telah berlalu."},
{k:"きょねん",r:"kyonen",a:"tahun lalu",kj:"去年",n:"Kyo (pergi/lalu) + Nen (tahun)."},
{k:"ことし",r:"kotoshi",a:"tahun ini",kj:"今年",n:"Ko (sekarang) + Toshi (tahun)."},
{k:"らいねん",r:"rainen",a:"tahun depan",kj:"来年",n:"Rai (akan datang) + Nen (tahun)."},
{k:"さらいねん",r:"sarainen",a:"2 tahun lagi",kj:"再来年",n:"Dua tahun ke depan."},
{k:"ごねんご",r:"go nen go",a:"5 tahun lagi",kj:"5年後",n:"Go (5) + Nen (tahun) + Go (setelah/kemudian). Pola X年後 bisa dipakai untuk jarak tahun apapun."},
{k:"まいとし",r:"maitoshi",a:"setiap tahun",kj:"毎年",n:"Mai (setiap) + Toshi (tahun). Juga bisa dibaca 'maitoshi' atau 'mainen'."}
]},
"Jam":{rows:[
{k:"いちじ",r:"ichiji",a:"jam 1",kj:"一時",n:"いち (1) + じ (jam). Penulisan waktu: angka + じ."},
{k:"にじ",r:"niji",a:"jam 2",kj:"二時",n:"に (2) + じ (jam)."},
{k:"さんじ",r:"sanji",a:"jam 3",kj:"三時",n:"さん (3) + じ."},
{k:"よじ",r:"yoji",a:"jam 4",kj:"四時",n:"よん bukan し — pakai よ karena menghindari し (mati)."},
{k:"ごじ",r:"goji",a:"jam 5",kj:"五時",n:"ご (5) + じ."},
{k:"ろくじ",r:"rokuji",a:"jam 6",kj:"六時",n:"ろく (6) + じ."},
{k:"しちじ",r:"shichiji",a:"jam 7",kj:"七時",n:"しち (7) + じ. Pakai しち, bukan なな, untuk menyebut jam."},
{k:"はちじ",r:"hachiji",a:"jam 8",kj:"八時",n:"はち (8) + じ."},
{k:"くじ",r:"kuji",a:"jam 9",kj:"九時",n:"く (9) + じ. Pakai く, bukan きゅう, untuk menyebut jam."},
{k:"じゅうじ",r:"juuji",a:"jam 10",kj:"十時",n:"じゅう (10) + じ."},
{k:"じゅういちじ",r:"juuichiji",a:"jam 11",kj:"十一時",n:"じゅういち (11) + じ."},
{k:"じゅうにじ",r:"juuniji",a:"jam 12",kj:"十二時",n:"じゅうに (12) + じ."},
{k:"なんじ",r:"nanji",a:"jam berapa?",kj:"何時",n:"なん (berapa) + じ (jam). Dipakai untuk menanyakan waktu."},
{k:"いちじはん",r:"ichiji han",a:"jam 1 setengah",n:"Contoh penggunaan はん (setengah) setelah jam."},
{k:"ごぜんろくじ",r:"gozen rokuji",a:"jam 6 pagi",n:"ごぜん (AM) + ろくじ (jam 6). ごぜん selalu di depan."},
{k:"ごごさんじ",r:"gogo sanji",a:"jam 3 sore",n:"ごご (PM) + さんじ (jam 3)."}
]},
"Menit":{rows:[
{k:"いっぷん",r:"ippun",a:"1 menit",n:"いち + ふん → いっぷん. Berubah karena aturan fonologi (rendaku)."},
{k:"にふん",r:"nifun",a:"2 menit",n:"に (2) + ふん. Tidak berubah."},
{k:"さんぷん",r:"sanpun",a:"3 menit",n:"さん + ふん → さんぷん. Berubah menjadi ぷん."},
{k:"よんふん",r:"yonfun",a:"4 menit",n:"よん (4) + ふん. Tidak berubah."},
{k:"ごふん",r:"gofun",a:"5 menit",n:"ご (5) + ふん. Tidak berubah."},
{k:"ろっぷん",r:"roppun",a:"6 menit",n:"ろく + ふん → ろっぷん. Konsonan ganda + ぷ."},
{k:"ななふん",r:"nanafun",a:"7 menit",n:"なな (7) + ふん. Tidak berubah."},
{k:"はっぷん",r:"happun",a:"8 menit",n:"はち + ふん → はっぷん. Konsonan ganda + ぷ."},
{k:"きゅうふん",r:"kyuufun",a:"9 menit",n:"きゅう (9) + ふん. Tidak berubah."},
{k:"じゅっぷん",r:"juppun",a:"10 menit",n:"じゅう + ふん → じゅっぷん. Konsonan ganda + ぷ."},
{k:"じゅうごふん",r:"juugofun",a:"15 menit",n:"じゅうご (15) + ふん."},
{k:"にじゅっぷん",r:"nijuppun",a:"20 menit",n:"にじゅう (20) + ふん → にじゅっぷん."},
{k:"さんじゅっぷん",r:"sanjuppun",a:"30 menit",n:"さんじゅう (30) + ふん → さんじゅっぷん. Sama dengan はん (setengah)."},
{k:"よんじゅっぷん",r:"yonjuppun",a:"40 menit",n:"よんじゅう (40) + ふん."},
{k:"ごじゅっぷん",r:"gojuppun",a:"50 menit",n:"ごじゅう (50) + ふん."},
{k:"なんぷん",r:"nanpun",a:"berapa menit?",n:"なん (berapa) + ふん → なんぷん. Untuk menanyakan menit."}
]},
"Bulan (Nama)":{rows:[
{k:"いちがつ",r:"ichigatsu",a:"Januari",kj:"一月",n:"いち (1) + がつ (bulan). Semua bulan mengikuti pola: angka + がつ."},
{k:"にがつ",r:"nigatsu",a:"Februari",kj:"二月",n:"に (2) + がつ."},
{k:"さんがつ",r:"sangatsu",a:"Maret",kj:"三月",n:"さん (3) + がつ."},
{k:"しがつ",r:"shigatsu",a:"April",kj:"四月",n:"し (4) + がつ. Di sini pakai し (bukan よん) untuk bulan."},
{k:"ごがつ",r:"gogatsu",a:"Mei",kj:"五月",n:"ご (5) + がつ."},
{k:"ろくがつ",r:"rokugatsu",a:"Juni",kj:"六月",n:"ろく (6) + がつ."},
{k:"しちがつ",r:"shichigatsu",a:"Juli",kj:"七月",n:"しち (7) + がつ. Pakai しち untuk bulan."},
{k:"はちがつ",r:"hachigatsu",a:"Agustus",kj:"八月",n:"はち (8) + がつ."},
{k:"くがつ",r:"kugatsu",a:"September",kj:"九月",n:"く (9) + がつ. Pakai く untuk bulan."},
{k:"じゅうがつ",r:"juugatsu",a:"Oktober",kj:"十月",n:"じゅう (10) + がつ."},
{k:"じゅういちがつ",r:"juuichigatsu",a:"November",kj:"十一月",n:"じゅういち (11) + がつ."},
{k:"じゅうにがつ",r:"juunigatsu",a:"Desember",kj:"十二月",n:"じゅうに (12) + がつ."},
{k:"なんがつ",r:"nangatsu",a:"bulan berapa?",kj:"何月",n:"なん (berapa) + がつ. Untuk menanyakan bulan."}
]},
"Tanggal":{rows:[
{k:"ついたち",r:"tsuitachi",a:"tanggal 1",n:"Pengucapan khusus! Bukan 'ichiにち'. Berasal dari kata kuno untuk 'bulan penuh'."},
{k:"ふつか",r:"futsuka",a:"tanggal 2",n:"Pengucapan khusus. Tanggal 1-10 semuanya tidak beraturan, harus dihafal."},
{k:"みっか",r:"mikka",a:"tanggal 3",n:"Pengucapan khusus."},
{k:"よっか",r:"yokka",a:"tanggal 4",n:"Pengucapan khusus."},
{k:"いつか",r:"itsuka",a:"tanggal 5",n:"Pengucapan khusus. Juga bisa berarti 'suatu hari nanti' dalam konteks berbeda."},
{k:"むいか",r:"muika",a:"tanggal 6",n:"Pengucapan khusus."},
{k:"なのか",r:"nanoka",a:"tanggal 7",n:"Pengucapan khusus."},
{k:"ようか",r:"youka",a:"tanggal 8",n:"Pengucapan khusus."},
{k:"ここのか",r:"kokonoka",a:"tanggal 9",n:"Pengucapan khusus."},
{k:"とおか",r:"tooka",a:"tanggal 10",n:"Pengucapan khusus. Setelah tanggal 10, menjadi lebih teratur: angka + にち."},
{k:"じゅういちにち",r:"juuichinichi",a:"tanggal 11",n:"じゅういち (11) + にち. Mulai dari 11, pola angka + にち."},
{k:"じゅうにち",r:"juunichi",a:"tanggal 12",n:"じゅうに (12) + にち."},
{k:"じゅうさんにち",r:"juusannichi",a:"tanggal 13",n:"じゅうさん (13) + にち."},
{k:"じゅうよっか",r:"juuyokka",a:"tanggal 14",n:"Pengecualian! Pakai よっか (bukan じゅうよんにち)."},
{k:"じゅうごにち",r:"juugonichi",a:"tanggal 15",n:"じゅうご (15) + にち."},
{k:"はつか",r:"hatsuka",a:"tanggal 20",n:"Pengecualian! Pengucapan khusus, bukan にじゅうにち."},
{k:"にじゅうよっか",r:"nijuuyokka",a:"tanggal 24",n:"Pengecualian! Pakai よっか di akhir."},
{k:"にじゅうごにち",r:"nijuugonichi",a:"tanggal 25",n:"にじゅうご (25) + にち. Pola normal."},
{k:"さんじゅうにち",r:"sanjuunichi",a:"tanggal 30",n:"さんじゅう (30) + にち."},
{k:"さんじゅういちにち",r:"sanjuuichinichi",a:"tanggal 31",n:"Tanggal terakhir yang ada di kalender Jepang."},
{k:"なんにち",r:"nannichi",a:"tanggal berapa?",kj:"何日",n:"なん (berapa) + にち. Untuk menanyakan tanggal."}
]},
"Bagian Tubuh":{rows:[
{k:"からだ",r:"karada",a:"tubuh",kj:"体",n:"Kata umum untuk keseluruhan tubuh. 'Karada ga tsuyoi' = badannya kuat/sehat."},
{k:"かお",r:"kao",a:"wajah",kj:"顔",n:"Kanji ini menggambarkan seluruh bagian depan kepala, dari dahi sampai dagu."},
{k:"あたま",r:"atama",a:"kepala",kj:"頭",n:"Juga dipakai secara kiasan: 'atama ga ii' = pintar (harfiah: kepalanya bagus)."},
{k:"かみ / かみのけ",r:"kami / kami no ke",a:"rambut",kj:"髪",n:"Homofon dengan 'kami' = kertas (紙) dan dewa (神)!"},
{k:"め",r:"me",a:"mata",kj:"目",n:"Salah satu kanji paling sederhana dalam bahasa Jepang, menyerupai bentuk mata itu sendiri."},
{k:"はな",r:"hana (hidung)",a:"hidung",kj:"鼻",n:"Homofon dengan はな (花) = bunga!"},
{k:"みみ",r:"mimi",a:"telinga",kj:"耳",n:"Bentuk kanji ini secara visual menyerupai telinga dilihat dari samping."},
{k:"くち",r:"kuchi",a:"mulut",kj:"口",n:"Kanji berbentuk kotak, melambangkan mulut yang terbuka."},
{k:"は",r:"ha",a:"gigi",kj:"歯",n:"Dokter gigi dalam bahasa Jepang disebut 歯医者 (ha-isha), harfiah 'dokter gigi'."},
{k:"くび",r:"kubi",a:"leher",kj:"首",n:"Juga dipakai dalam ungkapan 'kubi ni naru' = dipecat dari pekerjaan (harfiah: menjadi leher)."},
{k:"かた",r:"kata",a:"bahu",kj:"肩",n:"Muncul dalam ungkapan 'kata wo motsu' = membantu seseorang (harfiah: menopang bahu)."},
{k:"むね",r:"mune",a:"dada",kj:"胸",n:"Selain bagian tubuh, juga bisa berarti 'perasaan/hati' secara kiasan."},
{k:"て",r:"te",a:"tangan",kj:"手",n:"Selain bagian tubuh, juga berarti 'cara/metode' — misalnya 'te ga nai' = tidak ada cara."},
{k:"ゆび",r:"yubi",a:"jari",kj:"指",n:"Kata umum untuk semua jenis jari, baik jari tangan maupun jari kaki."},
{k:"うで",r:"ude",a:"lengan",kj:"腕",n:"Selain bagian tubuh, juga bisa berarti 'kemampuan/keahlian' secara kiasan."},
{k:"あし",r:"ashi",a:"kaki",kj:"足",n:"Mencakup keseluruhan dari paha sampai telapak kaki, beda dari 'ashi' yang kadang spesifik ke bagian bawah saja."},
{k:"ひざ",r:"hiza",a:"lutut",kj:"膝",n:"Persendian di tengah kaki, penting dalam gerakan seperti berlutut atau jongkok."},
{k:"はだ",r:"hada",a:"kulit",kj:"肌",n:"Dipakai dalam ungkapan 'hada ga kirei' = kulitnya bagus/bersih, pujian umum dalam budaya Jepang."}
]},
"Warna":{rows:[
{k:"あか",r:"aka",a:"merah",kj:"赤",n:"Warna paling kuat dalam budaya Jepang."},
{k:"あお",r:"ao",a:"biru / hijau (tua)",kj:"青",n:"Secara historis mencakup biru DAN hijau."},
{k:"きいろ",r:"kiiro",a:"kuning",kj:"黄色",n:"Ki (kuning) + Iro (warna)."},
{k:"みどり",r:"midori",a:"hijau",kj:"緑",n:"Hijau yang lebih cerah/segar dari 'ao'."},
{k:"くろ",r:"kuro",a:"hitam",kj:"黒",n:"Warna formal dan elegan di Jepang. Sabuk hitam (kuro obi) melambangkan tingkat tertinggi dalam bela diri."},
{k:"しろ",r:"shiro",a:"putih",kj:"白",n:"Warna kesucian di Jepang, kebalikan dari budaya Barat di mana putih justru identik dengan pernikahan."},
{k:"ちゃいろ",r:"chairo",a:"coklat",kj:"茶色",n:"Cha (teh) + Iro (warna). 'Warna teh'."},
{k:"はいいろ",r:"haiiro",a:"abu-abu",kj:"灰色",n:"Hai (abu) + Iro (warna)."},
{k:"むらさき",r:"murasaki",a:"ungu",kj:"紫",n:"Warna bangsawan di Jepang kuno."},
{k:"オレンジ",r:"orenji",a:"oranye",n:"Serapan 'orange'."},
{k:"ピンク",r:"pinku",a:"merah muda / pink",n:"Serapan 'pink'. Identik dengan bunga sakura."},
{k:"きんいろ",r:"kiniro",a:"emas",kj:"金色",n:"Kin (emas) + Iro (warna)."},
{k:"ぎんいろ",r:"giniro",a:"perak",kj:"銀色",n:"Gin (perak) + Iro (warna)."}
]},
"Rasa":{rows:[
{k:"あまい",r:"amai",a:"manis",kj:"甘い",n:"Rasa manis pada makanan. Secara kiasan bisa berarti 'terlalu baik/naif' — 'amai kangae' = pemikiran naif."},
{k:"しょっぱい",r:"shoppai",a:"asin (terlalu asin)",n:"Dari 'shio' (garam)."},
{k:"にがい",r:"nigai",a:"pahit",kj:"苦い",n:"Rasa pahit. Secara kiasan juga dipakai untuk 'nigai keiken' = pengalaman pahit/menyakitkan."},
{k:"すっぱい",r:"suppai",a:"asam",kj:"酸っぱい",n:"Perhatikan huruf ganda 'っぱ' — penting untuk pengucapan yang benar, beda dari 'すはい' yang salah."},
{k:"からい",r:"karai",a:"pedas / gurih-asin",kj:"辛い",n:"Homofon dengan 'tsurai' (辛い, bacaan lain) yang berarti 'menyakitkan/berat' — beda baca, beda makna!"},
{k:"おいしい",r:"oishii",a:"enak / lezat (sopan)",kj:"美味しい",n:"Bentuk paling sopan untuk memuji makanan. Versi santai: 'umai' (旨い)."},
{k:"まずい",r:"mazui",a:"tidak enak",kj:"不味い",n:"Lawan kata dari 'oishii'."},
{k:"うまみ",r:"umami",a:"gurih (rasa ke-5)",n:"Rasa kelima — kini diakui secara ilmiah internasional."}
]},
"Kata Tanya":{rows:[
{k:"なに / なん",r:"nani / nan",a:"apa",kj:"何",n:"Kata tanya paling dasar dan sering dipakai, muncul di hampir semua pola pertanyaan bahasa Jepang."},
{k:"だれ",r:"dare",a:"siapa",kj:"誰",n:"Bentuk sopan: donata."},
{k:"どこ",r:"doko",a:"di mana",kj:"何処",n:"Bentuk formal/kanji dari 'doko', jarang ditulis kanji-nya dalam praktik sehari-hari."},
{k:"いつ",r:"itsu",a:"kapan",kj:"何時",n:"Bentuk formal/kanji dari 'itsu', jarang ditulis kanji-nya dalam praktik sehari-hari."},
{k:"なぜ / どうして",r:"naze / doushite",a:"mengapa",kj:"何故 / どうして",n:"'Naze' lebih formal. 'Doushite' lebih umum di percakapan."},
{k:"どう",r:"dou",a:"bagaimana",kj:"如何",n:"'Dou desu ka?' = bagaimana?"},
{k:"いくつ",r:"ikutsu",a:"berapa (jumlah / usia)",kj:"幾つ",n:"Bisa menanyakan jumlah benda ATAU usia seseorang, tergantung konteks kalimat."},
{k:"いくら",r:"ikura",a:"berapa harganya",kj:"幾ら",n:"'Ikura desu ka?' = berapa harganya?"},
{k:"どれ",r:"dore",a:"yang mana (dari banyak)",kj:"何れ",n:"Pilihan dari 3 atau lebih."},
{k:"どちら",r:"dochira",a:"yang mana (dari dua)",kj:"何方",n:"Pilihan dari 2 opsi."},
{k:"どんな",r:"donna",a:"seperti apa / jenis apa",kj:"どんな",n:"Menanyakan jenis atau sifat sesuatu."},
{k:"なんで",r:"nande",a:"kenapa (santai)",kj:"何で",n:"Versi santai dari naze/doushite."},
{k:"なんようび",r:"nan youbi",a:"hari apa",kj:"何曜日",n:"Menanyakan hari dalam seminggu. 'Kyou wa nan youbi desu ka?' = hari ini hari apa?"},
{k:"なんにち",r:"nan nichi",a:"tanggal berapa",kj:"何日",n:"Menanyakan tanggal. 'Kyou wa nan nichi desu ka?' = hari ini tanggal berapa?"},
{k:"なんぷん",r:"nan pun",a:"menit berapa",kj:"何分",n:"Menanyakan menit pada jam. 'Ima nan pun desu ka?' = sekarang menit berapa?"}
]},
"Kata Penunjuk (Ko-So-A-Do)":{rows:[
{k:"これ",r:"kore",a:"ini (dekat pembicara)",n:"Pola KO-SO-A-DO: ko=dekat aku, so=dekat kamu, a=jauh, do=tanya."},
{k:"それ",r:"sore",a:"itu (dekat pendengar)",n:"Benda dekat pendengar."},
{k:"あれ",r:"are",a:"itu (jauh dari keduanya)",n:"Benda jauh dari pembicara maupun pendengar."},
{k:"どれ",r:"dore",a:"yang mana?",n:"Bentuk tanya dari seri ini."},
{k:"この",r:"kono",a:"ini ~ (menerangkan benda)",n:"Dipakai sebelum kata benda."},
{k:"その",r:"sono",a:"itu ~ (dekat pendengar)",n:"Menerangkan benda dekat pendengar."},
{k:"あの",r:"ano",a:"itu ~ (jauh)",n:"Menerangkan benda jauh."},
{k:"どの",r:"dono",a:"yang mana ~ ?",n:"Bentuk tanya."},
{k:"ここ",r:"koko",a:"di sini (dekat pembicara)",n:"Tempat dekat pembicara."},
{k:"そこ",r:"soko",a:"di situ (dekat pendengar)",n:"Tempat dekat pendengar."},
{k:"あそこ",r:"asoko",a:"di sana (jauh)",n:"Tempat jauh dari keduanya."},
{k:"どこ",r:"doko",a:"di mana?",n:"Bentuk tanya untuk tempat."},
{k:"こちら",r:"kochira",a:"ke sini / ini (sopan)",n:"Versi sopan dari koko/kore."},
{k:"そちら",r:"sochira",a:"ke situ / itu (sopan)",n:"Versi sopan dari soko/sore."},
{k:"あちら",r:"achira",a:"ke sana / itu (sopan)",n:"Versi sopan dari asoko/are."}
]},
"Kata Keterangan Umum":{rows:[
{k:"とても",r:"totemo",a:"sangat / sekali",n:"Kata penguat paling umum."},
{k:"すごく",r:"sugoku",a:"sangat (santai)",n:"Lebih santai dari totemo."},
{k:"あまり",r:"amari",a:"tidak terlalu ~ (dengan negatif)",n:"Selalu dipakai dengan kalimat negatif."},
{k:"ぜんぜん",r:"zenzen",a:"sama sekali tidak (dengan negatif)",n:"Selalu dengan negatif dalam bahasa formal."},
{k:"もっと",r:"motto",a:"lebih (lagi)",n:"'Motto yukkuri' = lebih pelan lagi."},
{k:"もう",r:"mou",a:"sudah / lagi",n:"Dua arti: (1) sudah, (2) lagi."},
{k:"まだ",r:"mada",a:"masih / belum",n:"'Mada desu' = belum."},
{k:"すぐ",r:"sugu",a:"segera / langsung",n:"'Sugu kimasu' = segera datang."},
{k:"たくさん",r:"takusan",a:"banyak",n:"Untuk orang, benda, atau jumlah abstrak."},
{k:"すこし",r:"sukoshi",a:"sedikit",n:"'Sukoshi matte kudasai' = tolong tunggu sebentar."},
{k:"たぶん",r:"tabun",a:"mungkin / sepertinya",n:"Kemungkinan ~70-80%."},
{k:"もちろん",r:"mochiron",a:"tentu saja / sudah pasti",n:"Keyakinan 100%."},
{k:"ほんとうに",r:"hontouni",a:"sungguh / benar-benar",n:"'Hontou ni?' = Sungguh?"},
{k:"おなじ",r:"onaji",a:"sama",kj:"同じ",n:"'Onaji desu' = sama saja. 'Onaji kurasu' = kelas yang sama."},
{k:"わかりません",r:"wakarimasen",a:"tidak tahu / tidak mengerti",kj:"分かりません",n:"Bentuk negatif sopan."},
{k:"どこでもいい",r:"doko demo ii",a:"di mana saja boleh / bebas (tempat)",n:"どこ (di mana) + でも (pun/saja) + いい (bagus/boleh). Dipakai saat tidak punya preferensi tempat tertentu — 'terserah, di mana saja oke'."},
{k:"なんでもいい",r:"nan demo ii",a:"apa saja boleh / bebas (pilihan)",n:"なん (apa) + でも (pun/saja) + いい (bagus/boleh). Pola sama seperti どこでもいい tapi untuk pilihan benda/hal, bukan tempat."},
{k:"まえからうしろまで",r:"mae kara ushiro made",a:"dari depan sampai belakang",kj:"前から後ろまで",n:"Pola 〜から〜まで (dari〜sampai〜) dipakai untuk menyatakan rentang. Mae (depan) kara (dari) ushiro (belakang) made (sampai)."},
{k:"うえからしたまで",r:"ue kara shita made",a:"dari atas ke bawah",kj:"上から下まで",n:"Pola 〜から〜まで untuk rentang arah vertikal. Ue (atas) kara (dari) shita (bawah) made (sampai)."},
{k:"さいしょからさいごまで",r:"saisho kara saigo made",a:"dari awal sampai akhir",kj:"最初から最後まで",n:"Pola 〜から〜まで untuk rentang waktu/urutan. Saisho (awal) kara (dari) saigo (akhir) made (sampai)."},
{k:"はんぶん",r:"hanbun",a:"setengah (untuk cairan/benda)",kj:"半分",n:"Dipakai untuk menyatakan setengah bagian, misalnya setengah gelas cairan. 'Hanbun kudasai' = tolong setengah saja."},
{k:"そして",r:"soshite",a:"dan, lalu",n:"Menyambung DUA KALIMAT terpisah jadi satu cerita berlanjut — beda dari と yang cuma menyambung kata benda dalam satu kalimat. Contoh: 'Furui desu. Soshite, shizuka desu.' = Kuno. Dan lagi, sunyi."}
]},
"Kegiatan Rutin":{rows:[
{k:"おきます",r:"okimasu",a:"bangun tidur",kj:"起きます",n:"Dari 'okiru'. Lawan dari 'nemasu'."},
{k:"ねます",r:"nemasu",a:"tidur",kj:"寝ます",n:"Dari 'neru'."},
{k:"あらいます",r:"araimasu",a:"mencuci / membasuh",kj:"洗います",n:"'Te wo araimasu' = mencuci tangan."},
{k:"みがきます",r:"migakimasu",a:"menggosok / menyikat",kj:"磨きます",n:"'Ha wo migakimasu' = menggosok gigi."},
{k:"きがえます",r:"kigaemasu",a:"ganti baju",kj:"着替えます",n:"Ki (memakai pakaian) + Kaeru (mengganti)."},
{k:"あるきます",r:"arukimasu",a:"berjalan kaki",kj:"歩きます",n:"Dari 'aruku'."},
{k:"はしります",r:"hashirimasu",a:"berlari",kj:"走ります",n:"Dari 'hashiru'."},
{k:"べんきょうします",r:"benkyou shimasu",a:"belajar",kj:"勉強します",n:"'Nihongo wo benkyou shimasu' = belajar bahasa Jepang."},
{k:"はたらきます",r:"hatarakimasu",a:"bekerja",kj:"働きます",n:"Dari 'hataraku'."},
{k:"やすみます",r:"yasumimasu",a:"beristirahat / absen",kj:"休みます",n:"'Kyou wa yasumimasu' = hari ini tidak masuk."},
{k:"でかけます",r:"dekakemasu",a:"keluar / pergi keluar",kj:"出かけます",n:"'Chotto dekakemasu' = sebentar pergi keluar."},
{k:"かいものをします",r:"kaimono wo shimasu",a:"belanja",kj:"買い物をします",n:"Kai (membeli) + Mono (barang) + shimasu."},
{k:"りょうりをします",r:"ryouri wo shimasu",a:"memasak",kj:"料理をします",n:"Ryouri (masakan) + shimasu."},
{k:"そうじをします",r:"souji wo shimasu",a:"bersih-bersih",kj:"掃除をします",n:"Di sekolah Jepang, souji adalah piket harian."},
{k:"せんたくをします",r:"sentaku wo shimasu",a:"mencuci pakaian",kj:"洗濯をします",n:"Sentaku (laundry) + shimasu."},
{k:"かいます",r:"kaimasu",a:"membeli",kj:"買います",n:"Kata kerja golongan I. Bentuk kamus: kau. 'Kaimono' (買い物) = belanja, kata benda dari kata kerja ini."},
{k:"まいにち",r:"mainichi",a:"setiap hari",kj:"毎日",n:"Mai (setiap) + Nichi (hari). Pola まい〜 dipakai untuk menyatakan pengulangan."},
{k:"まいあさ",r:"maiasa",a:"setiap pagi",kj:"毎朝",n:"Mai (setiap) + Asa (pagi). 'Maiasa hashirimasu' = berlari setiap pagi."},
{k:"まいばん",r:"maiban",a:"setiap malam",kj:"毎晩",n:"Mai (setiap) + Ban (malam). 'Maiban benkyou shimasu' = belajar setiap malam."},
{k:"あさごはん",r:"asagohan",a:"sarapan",kj:"朝ご飯",n:"Asa (pagi) + Gohan (nasi/makan). Sarapan tradisional Jepang biasanya nasi, sup miso, dan lauk ikan."},
{k:"ひるごはん",r:"hirugohan",a:"makan siang",kj:"昼ご飯",n:"Hiru (siang) + Gohan (nasi/makan). Sering diganti dengan bentou atau makan di kantin."},
{k:"ひるやすみ",r:"hiruyasumi",a:"istirahat siang",kj:"昼休み",n:"Hiru (siang) + Yasumi (istirahat). Jam istirahat makan siang di sekolah maupun kantor."}
]},
"Profesi & Pekerjaan":{rows:[
{k:"いしゃ",r:"isha",a:"dokter",kj:"医者",n:"Disapa 'sensei' dalam percakapan, bukan 'isha-san'."},
{k:"かんごし",r:"kangoshi",a:"perawat",kj:"看護師",n:"Kango (merawat) + Shi (profesional). Profesi sangat dihormati di Jepang."},
{k:"せんせい",r:"sensei",a:"guru / sensei",kj:"先生",n:"Sen (sebelum/lebih dulu) + Sei (hidup). Dipakai juga untuk dokter, pengacara, atau siapapun yang ahli di bidangnya."},
{k:"きょうし",r:"kyoushi",a:"guru (jabatan formal)",kj:"教師",n:"Kyou (mengajar) + Shi (ahli). Lebih formal dari sensei — dipakai dalam dokumen resmi, bukan untuk menyapa."},
{k:"がくせい",r:"gakusei",a:"siswa / mahasiswa",kj:"学生",n:"Gaku (belajar) + Sei (orang). 'Daigakusei' = mahasiswa, 'koukosei' = siswa SMA."},
{k:"かいしゃいん",r:"kaishain",a:"karyawan perusahaan",kj:"会社員",n:"Kaisha (perusahaan) + In (anggota). Profesi paling umum di Jepang. Sering disebut 'sarariman' (サラリーマン)."},
{k:"しゃいん",r:"shain",a:"karyawan / staf perusahaan",kj:"社員",n:"Sha (perusahaan) + In (anggota). Lebih singkat dari kaishain, sama maknanya. Sering dipakai dalam percakapan sehari-hari."},
{k:"てんいん",r:"ten'in",a:"pramuniaga / staf toko",kj:"店員",n:"Ten (toko) + In (anggota). Orang yang bekerja di toko. 'Irasshaimase!' adalah sapaan khas ten'in di Jepang."},
{k:"さっか",r:"sakka",a:"pengarang / penulis",kj:"作家",n:"Saku (berkarya) + Ka (ahli). Penulis novel, cerpen, atau karya sastra. Berbeda dari 'raitaa' (ライター) yang lebih ke penulis artikel/konten."},
{k:"こうむいん",r:"koumuin",a:"pegawai negeri",kj:"公務員",n:"Kou (publik) + Mu (tugas) + In (anggota). Pegawai pemerintah Jepang dikenal sangat disiplin dan stabil."},
{k:"エンジニア",r:"enjinia",a:"insinyur / engineer",n:"Serapan 'engineer'. Profesi IT sangat berkembang di Jepang."},
{k:"けいさつかん",r:"keisatsukan",a:"polisi (petugas)",kj:"警察官",n:"Keisatsu (polisi) + Kan (petugas). Polisi Jepang dikenal ramah dan ada pos kecil 'koban' di tiap sudut."},
{k:"りょうりにん",r:"ryourinin",a:"juru masak / chef",kj:"料理人",n:"Ryouri (masakan) + Nin (orang). Chef restoran kelas atas disebut 'shefu' (シェフ)."},
{k:"のうか",r:"nouka",a:"petani",kj:"農家",n:"Nou (pertanian) + Ka (keluarga/rumah). Jepang sangat menghargai petani — beras Jepang dianggap terbaik di dunia."},
{k:"かしゅ",r:"kashu",a:"penyanyi",kj:"歌手",n:"Ka (lagu) + Shu (orang yang melakukan). Industri J-Pop sangat besar."},
{k:"べんごし",r:"bengoshi",a:"pengacara",kj:"弁護士",n:"Ujian pengacara di Jepang sangat sulit — tingkat kelulusannya sangat rendah."},
{k:"うんてんし",r:"untenshi",a:"pengemudi / sopir",kj:"運転手",n:"Unten (mengemudi) + Shi/Shu (orang). 'Takushii no untenshi' = sopir taksi."},
{k:"かんごふ",r:"kangofu",a:"perawat (wanita, istilah lama)",kj:"看護婦",n:"Kini digantikan 'kangoshi' yang netral gender. Masih dipakai dalam percakapan informal."},
{k:"〜さん",r:"~san",a:"Sdr. / Sdri. / Pak / Bu (gelar sopan)",kj:"〜さん",n:"Ditambahkan setelah nama seseorang sebagai penghormatan, atau setelah profesi (てんいんさん, isha-san dll. dalam percakapan santai). Tidak boleh dipakai untuk diri sendiri!"}
]},
"Negara & Bangsa":{rows:[
{k:"にほん",r:"nihon",a:"Jepang",kj:"日本",n:"Juga dibaca 'nippon' (lebih formal/nasionalis). Harfiah: 'asal matahari' atau 'negeri matahari terbit'."},
{k:"アメリカ",r:"amerika",a:"Amerika Serikat",n:"Dari 'America'. Nama resmi: アメリカがっしゅうこく (Amerika Gasshukoku)."},
{k:"イタリア",r:"itaria",a:"Italia",n:"Serapan 'Italia'. Dikenal di Jepang terutama karena mode dan masakan."},
{k:"オーストラリア",r:"oosutoraria",a:"Australia",n:"Serapan 'Australia'. Negara tetangga yang populer sebagai tujuan study abroad orang Jepang."},
{k:"かんこく",r:"kankoku",a:"Korea Selatan",kj:"韓国",n:"Budaya Korea (K-pop, drama) sangat populer di Jepang, disebut Hallyu (韓流)."},
{k:"ちゅうごく",r:"chuugoku",a:"China",kj:"中国",n:"Harfiah: 'negara tengah'. Hubungan sejarah dan budaya yang dalam dengan Jepang."},
{k:"タイ",r:"tai",a:"Thailand",n:"Serapan 'Thai'. Populer sebagai tujuan wisata orang Jepang."},
{k:"ロシア",r:"roshia",a:"Rusia",n:"Serapan 'Russia'. Berbatasan dekat dengan Jepang di bagian utara (Hokkaido)."},
{k:"ドイツ",r:"doitsu",a:"Jerman",n:"Dari bahasa Belanda 'Duits'. Jepang dan Jerman punya hubungan historis kuat sejak abad 19."},
{k:"フランス",r:"furansu",a:"Prancis",n:"Serapan 'France'. Mode Prancis sangat berpengaruh di Jepang."},
{k:"インド",r:"indo",a:"India",n:"Serapan 'India'. Kari India (カレー) sudah diadaptasi menjadi kari gaya Jepang."},
{k:"インドネシア",r:"indoneshia",a:"Indonesia",n:"Serapan 'Indonesia'. Negara dengan jumlah pelajar bahasa Jepang terbanyak di dunia!"},
{k:"〜じん",r:"~jin",a:"orang ~ / warga negara ~",kj:"〜人",n:"Ditambahkan setelah nama negara. にほんじん = orang Jepang, インドネシアじん = orang Indonesia."},
{k:"〜ご",r:"~go",a:"bahasa ~",kj:"〜語",n:"Ditambahkan setelah nama negara/bangsa. にほんご = bahasa Jepang, えいご = bahasa Inggris."},
{k:"えいご",r:"eigo",a:"bahasa Inggris",kj:"英語",n:"Ei (Inggris/Eropa) + Go (bahasa). Pelajaran wajib di sekolah Jepang."},
{k:"ペキン",r:"pekin",a:"Beijing (ibu kota China)",n:"Serapan nama kota 'Peking/Beijing'. Ibu kota Republik Rakyat China."},
{k:"プサン",r:"pusan",a:"Busan (kota di Korea Selatan)",n:"Serapan nama kota 'Busan'. Kota pelabuhan terbesar kedua di Korea Selatan setelah Seoul."}
]},
"Perkenalan Diri":{rows:[
{k:"なまえ",r:"namae",a:"nama",kj:"名前",n:"'Onamae wa?' = Siapa namamu? (bentuk sopan dengan prefiks 'o')."},
{k:"めいし",r:"meishi",a:"kartu nama",kj:"名刺",n:"Bertukar kartu nama (meishi koukan) adalah ritual penting dalam budaya bisnis Jepang."},
{k:"あくしゅ（します）",r:"akushu (shimasu)",a:"berjabat tangan",kj:"握手",n:"Jabat tangan tidak sepopuler di Indonesia — orang Jepang lebih sering membungkuk (お辞儀 / ojigi)."},
{k:"（お）しごと",r:"(o)shigoto",a:"pekerjaan / profesi",kj:"仕事",n:"Prefiks sopan 'o' ditambahkan saat bertanya pekerjaan orang lain: 'Oshigoto wa?' = Pekerjaannya apa?"}
]},
"Arah & Posisi":{rows:[
{k:"みぎ",r:"migi",a:"kanan",kj:"右",n:"Arah kanan. Di Jepang, orang berjalan/berdiri di sisi kiri eskalator (kecuali di Osaka yang sebaliknya)."},
{k:"ひだり",r:"hidari",a:"kiri",kj:"左",n:"Arah kiri. Lalu lintas di Jepang menggunakan sistem setir kanan dan jalur kiri, beda dari Indonesia... eh sama!"},
{k:"まっすぐ",r:"massugu",a:"lurus",kj:"真っ直ぐ",n:"'Massugu itte kudasai' = tolong jalan lurus."},
{k:"まえ",r:"mae",a:"depan / sebelum",kj:"前",n:"Selain arah 'depan', juga dipakai untuk 'sebelum' dalam konteks waktu: 'shokuji no mae' = sebelum makan."},
{k:"うしろ",r:"ushiro",a:"belakang",kj:"後ろ",n:"Arah belakang secara fisik. Untuk 'setelah' dalam waktu, dipakai kata 'ato' (後), bukan 'ushiro'."},
{k:"うえ",r:"ue",a:"atas / di atas",kj:"上",n:"Selain arah atas, dipakai juga dalam kata majemuk seperti 'jouzu' (上手) = terampil, harfiah 'tangan atas'."},
{k:"した",r:"shita",a:"bawah / di bawah",kj:"下",n:"Selain arah bawah, dipakai juga dalam kata majemuk seperti 'heta' (下手) = tidak terampil."},
{k:"なか",r:"naka",a:"dalam / di dalam",kj:"中",n:"Selain 'dalam', bisa berarti 'tengah' atau 'selama' — misalnya 'ichinichi juu' = sepanjang hari."},
{k:"そと",r:"soto",a:"luar / di luar",kj:"外",n:"Lawan dari 'naka' (dalam). 'Gaijin' (外人) = orang asing, harfiah 'orang dari luar'."},
{k:"となり",r:"tonari",a:"sebelah / di sebelah",kj:"隣",n:"Merujuk pada sesuatu yang bersebelahan langsung, lebih dekat dari 'chikaku' (sekitar/dekat)."},
{k:"ちかく",r:"chikaku",a:"dekat / di dekat",kj:"近く",n:"Area di sekitar suatu titik, tidak harus bersebelahan langsung seperti 'tonari'."},
{k:"ひがし",r:"higashi",a:"timur",kj:"東",n:"Arah mata angin timur. Tokyo, ibu kota Jepang, terletak di bagian timur negara ini."},
{k:"にし",r:"nishi",a:"barat",kj:"西",n:"Arah mata angin barat. Osaka dan Kyoto, kota-kota bersejarah Jepang, terletak di bagian barat."},
{k:"みなみ",r:"minami",a:"selatan",kj:"南",n:"Arah mata angin selatan. Okinawa, provinsi paling selatan Jepang, dikenal dengan iklim tropisnya."},
{k:"きた",r:"kita",a:"utara",kj:"北",n:"Arah mata angin utara. Hokkaido, pulau paling utara Jepang, terkenal dengan salju dan ski."},
{k:"まんなか",r:"mannaka",a:"tengah-tengah",kj:"真ん中",n:"Ma (benar-benar) + n + naka (dalam/tengah). Dipakai untuk posisi persis di tengah, bukan cuma 'dalam' seperti 'naka' biasa."}
]},
"Ekspresi di Kelas":{rows:[
{k:"わかりました",r:"wakarimashita",a:"saya mengerti",kj:"分かりました",n:"Bentuk lampau sopan dari 'wakaru'."},
{k:"わかりません",r:"wakarimasen",a:"saya tidak mengerti",kj:"分かりません",n:"Bentuk negatif sopan."},
{k:"もういちどおねがいします",r:"mou ichido onegaishimasu",a:"tolong ulangi sekali lagi",n:"Mou (lagi) + ichido (sekali) + onegaishimasu (tolong)."},
{k:"ゆっくりはなしてください",r:"yukkuri hanashite kudasai",a:"tolong bicara lebih pelan",n:"Yukkuri (pelan-pelan) + hanashite + kudasai."},
{k:"しつもんがあります",r:"shitsumon ga arimasu",a:"saya punya pertanyaan",kj:"質問があります",n:"Shitsumon (pertanyaan) + ga + arimasu (ada)."},
{k:"おしえてください",r:"oshiete kudasai",a:"tolong ajari saya",kj:"教えてください",n:"Oshiete (mengajari) + kudasai (tolong)."},
{k:"トイレにいってもいいですか",r:"toire ni itte mo ii desu ka",a:"boleh saya ke toilet?",n:"Cara sopan meminta izin ke kamar kecil di kelas."},
{k:"きょうのしゅくだいはなんですか",r:"kyou no shukudai wa nan desu ka",a:"apa PR hari ini?",n:"Shukudai (宿題) = PR/pekerjaan rumah."},
{k:"テストはいつですか",r:"tesuto wa itsu desu ka",a:"ujian kapan?",n:"Tesuto (serapan 'test') + wa itsu desu ka (kapan?)."},
{k:"ちょっとまってください",r:"chotto matte kudasai",a:"tolong tunggu sebentar",n:"Chotto (sedikit/sebentar) + matte + kudasai."}
]},
"Peralatan Masak":{rows:[
{k:"なべ",r:"nabe",a:"panci",n:"Kata asli Jepang kuno (鍋). Juga nama hidangan hot pot populer."},
{k:"フライパン",r:"furaipan",a:"wajan datar",n:"Fry + Pan."},
{k:"やかん",r:"yakan",a:"ketel air",n:"Dulu untuk merebus jamu, kini untuk air minum."},
{k:"オーブン",r:"oobun",a:"oven",n:"Serapan 'oven'."},
{k:"でんしレンジ",r:"denshi renji",a:"microwave",n:"'Denshi' (elektronik) + 'renji' (dari 'range')."},
{k:"トースター",r:"toosutaa",a:"pemanggang roti",n:"Serapan 'toaster'."},
{k:"ミキサー",r:"mikisaa",a:"blender",n:"Dari 'mixer'. Di Jepang maknanya bergeser jadi blender."},
{k:"すいはんき",r:"suihanki",a:"rice cooker",kj:"炊飯器",n:"'Mesin penanak nasi'."},
{k:"コンロ",r:"konro",a:"kompor",n:"Kata asli Jepang (焜炉). 'Tungku api'."}
]},
"Alat Dapur":{rows:[
{k:"ほうちょう",r:"houchou",a:"pisau dapur",kj:"包丁",n:"Dari nama koki legendaris Cina kuno."},
{k:"まないた",r:"manaita",a:"talenan",kj:"まな板",n:"'Papan untuk memotong ikan'."},
{k:"キッチンばさみ",r:"kitchin basami",a:"gunting dapur",n:"Kitchin (dapur) + Hasami (gunting)."},
{k:"おたま",r:"otama",a:"sendok sayur",n:"Singkatan dari Otamajakushi (kecebong). Bentuknya mirip kecebong."},
{k:"へら",r:"hera",a:"spatula",kj:"箆",n:"Bilah tipis/sudip datar."},
{k:"トング",r:"tongu",a:"penjepit",n:"Serapan 'tongs'."},
{k:"しゃもじ",r:"shamoji",a:"sendok nasi",kj:"杓文字",n:"Alat tradisional untuk mengambil nasi dari rice cooker atau panci, bentuknya pipih dan datar."},
{k:"スプーン",r:"supuun",a:"sendok",n:"Serapan 'spoon'."},
{k:"フォーク",r:"fooku",a:"garpu",n:"Serapan 'fork'."},
{k:"はし",r:"hashi",a:"sumpit",kj:"箸",n:"'Jembatan' antara makanan dan mulut."},
{k:"ざる",r:"zaru",a:"saringan bambu",n:"Keranjang anyaman bambu berlubang."},
{k:"おろしがね",r:"oroshigane",a:"parutan",kj:"おろし金",n:"Untuk memarut jahe, lobak, dsb."}
]},
"Wadah & Perabot":{rows:[
{k:"ボウル",r:"booru",a:"mangkuk besar",n:"Serapan 'bowl'."},
{k:"さら",r:"sara",a:"piring",kj:"皿",n:"Kata asli Jepang untuk piring. 'Kozara' (小皿) = piring kecil untuk saus atau lauk pendamping."},
{k:"ちゃわん",r:"chawan",a:"mangkuk nasi",kj:"茶碗",n:"Aslinya 'mangkuk teh', kini khusus mangkuk nasi."},
{k:"コップ",r:"koppu",a:"gelas",n:"Dari bahasa Belanda/Portugis. Gelas tanpa gagang."},
{k:"カップ",r:"kappu",a:"cangkir",n:"Serapan 'cup'."},
{k:"マグカップ",r:"magu kappu",a:"mug",n:"Mug + Cup. Cangkir mug besar bergagang."},
{k:"れいぞうこ",r:"reizouko",a:"kulkas",kj:"冷蔵庫",n:"'Kotak penyimpanan dingin'."},
{k:"れいとうこ",r:"reitouko",a:"freezer",kj:"冷凍庫",n:"'Kotak pembeku'."},
{k:"ゴミばこ",r:"gomibako",a:"tempat sampah",kj:"ゴミ箱",n:"'Kotak sampah'."},
{k:"たな",r:"tana",a:"rak",kj:"棚",n:"Papan penyangga horizontal untuk menyimpan barang, bisa berupa rak dinding atau rak buku."},
{k:"ひきだし",r:"hikidashi",a:"laci",kj:"引き出し",n:"'Kotak yang ditarik keluar'."}
]},
"Bumbu & Bahan":{rows:[
{k:"しお",r:"shio",a:"garam",n:"Kata asli Jepang kuno (塩)."},
{k:"さとう",r:"satou",a:"gula",kj:"砂糖",n:"'Gula pasir'."},
{k:"こしょう",r:"koshou",a:"merica / lada",kj:"胡椒",n:"Bumbu yang dibawa dari luar Jepang pada masa lampau, karena itu ada karakter 胡 yang berarti 'asing'."},
{k:"しょうゆ",r:"shouyu",a:"kecap asin",kj:"醤油",n:"Bumbu paling khas masakan Jepang."},
{k:"みそ",r:"miso",a:"pasta miso",kj:"味噌",n:"Pasta dari fermentasi kedelai."},
{k:"す",r:"su",a:"cuka",kj:"酢",n:"Salah satu kanji paling pendek dalam bahasa Jepang, dipakai dalam banyak masakan seperti sunomono."},
{k:"あぶら",r:"abura",a:"minyak",kj:"油",n:"Dipakai untuk semua jenis minyak masak, baik dari hewan maupun tumbuhan."},
{k:"こめ",r:"kome",a:"beras (mentah)",kj:"米",n:"Khusus beras belum dimasak."},
{k:"にく",r:"niku",a:"daging",kj:"肉",n:"Kata umum untuk daging apapun. Untuk jenis spesifik, tambahkan nama hewan di depannya (gyuu=sapi, buta=babi, tori=ayam)."},
{k:"やさい",r:"yasai",a:"sayuran",kj:"野菜",n:"'Sayuran yang tumbuh di ladang'."},
{k:"くだもの",r:"kudamono",a:"buah-buahan",kj:"果物",n:"'Benda hasil pohon'."},
{k:"パン",r:"pan",a:"roti",n:"Serapan dari bahasa Portugis 'Pão'."},
{k:"ごはん",r:"gohan",a:"nasi (matang)",kj:"御飯",n:"Beda dengan こめ (kome) yang masih mentah."}
]},
"Bahan Pelengkap":{rows:[
{k:"ラップ",r:"rappu",a:"plastik wrap",n:"Serapan 'wrap'. Plastik pembungkus makanan."},
{k:"アルミホイル",r:"arumi hoiru",a:"aluminium foil",n:"Serapan 'aluminum foil'."},
{k:"キッチンペーパー",r:"kitchin peepaa",a:"tisu dapur",n:"Serapan 'kitchen paper'."},
{k:"スポンジ",r:"suponji",a:"spons",n:"Serapan 'sponge'. Untuk mencuci piring."},
{k:"せんざい",r:"senzai",a:"sabun cuci / deterjen",kj:"洗剤",n:"'Bahan kimia pembersih'."}
]},
"Sapaan & Ekspresi":{rows:[
{k:"おはようございます",r:"ohayou gozaimasu",a:"selamat pagi (formal)",n:"Bentuk santai: 'ohayou'. Berlaku sampai ~10-11 pagi."},
{k:"こんにちは",r:"konnichiwa",a:"halo / selamat siang",n:"~10 pagi hingga ~6 sore. は dibaca 'wa'."},
{k:"こんばんは",r:"konbanwa",a:"selamat malam",n:"~6 sore ke atas. は dibaca 'wa'."},
{k:"おつかれさまです",r:"otsukaresama desu",a:"salam di tengah / akhir hari",n:"Salam kedua dan seterusnya, bukan salam pertama."},
{k:"よろしくおねがいします",r:"yoroshiku onegaishimasu",a:"mohon bantuannya",n:"Serbaguna: saat kenalan baru, meminta tolong, menitipkan sesuatu."},
{k:"しつれいします",r:"shitsureishimasu",a:"permisi",n:"Saat masuk ruangan, melewati orang, memulai gangguan."},
{k:"はじめまして",r:"hajimemashite",a:"senang berkenalan",n:"Selalu diikuti yoroshiku onegaishimasu."},
{k:"ありがとうございます",r:"arigatou gozaimasu",a:"terima kasih (formal)",n:"Bentuk santai: 'arigatou'."},
{k:"すみません",r:"sumimasen",a:"permisi / maaf (ringan)",n:"Serbaguna: memanggil pelayan, minta maaf ringan, permisi."},
{k:"ごめんなさい",r:"gomennasai",a:"maaf (tulus / informal)",n:"Lebih tulus dan personal dari sumimasen."},
{k:"いってきます",r:"ittekimasu",a:"saya pergi dulu",n:"'Saya pergi dan akan kembali'. Pasangan: 'itterasshai'."},
{k:"ただいま",r:"tadaima",a:"saya sudah pulang",n:"'Baru saja sekarang'. Pasangan: 'okaerinasai'."},
{k:"いただきます",r:"itadakimasu",a:"selamat makan (sebelum makan)",n:"Sangat penting dalam budaya makan Jepang."},
{k:"ごちそうさまでした",r:"gochisousama deshita",a:"terima kasih atas makanannya",n:"Diucapkan setelah selesai makan."},
{k:"さようなら",r:"sayounara",a:"selamat tinggal (formal)",n:"Perpisahan formal yang cukup final."},
{k:"じゃあね",r:"jaa ne",a:"dadah / sampai jumpa (santai)",n:"Paling santai. Hanya untuk teman dekat."},
{k:"またね",r:"mata ne",a:"sampai ketemu lagi",n:"Lebih hangat dari 'jaa ne'."},
{k:"おやすみなさい",r:"oyasuminasai",a:"selamat tidur / selamat malam",n:"'Istirahatlah'. Bentuk santai: 'oyasumi'."},
{k:"じゃ、また",r:"ja, mata",a:"sampai jumpa lagi",n:"Ungkapan perpisahan santai. Mirip 'jaa ne' tapi sedikit lebih netral."},
{k:"おさきにしつれいします",r:"osakini shitsureishimasu",a:"permisi, saya pulang duluan",n:"Wajib diucapkan saat pulang lebih awal dari rekan-rekan di lingkungan kerja Jepang."},
{k:"あのう",r:"anou",a:"anu... / hmm...",n:"Kata pengisi (filler word) saat ragu atau mau mulai bicara. Setara 'um' dalam bahasa Inggris."},
{k:"こちらこそ",r:"kochira koso",a:"sama-sama / saya juga",n:"Respons untuk よろしく atau ありがとう. Menyatakan perasaan yang sama balik ke lawan bicara."},
{k:"そうですか",r:"sou desu ka",a:"oh, begitu ya",n:"Respons saat menerima informasi baru. Intonasi naik = bertanya ulang, intonasi turun = 'oh begitu'."},
{k:"そうですね",r:"sou desu ne",a:"iya, ya / begitu ya (setuju)",n:"Beda dari そうですか (menerima info baru): そうですね dipakai untuk SETUJU/mengiyakan sesuatu, atau saat berpikir sebelum menjawab."},
{k:"はい",r:"hai",a:"ya",n:"Afirmasi formal. Dalam percakapan santai: うん (un)."},
{k:"いいえ",r:"iie",a:"tidak / bukan",n:"Negasi formal. Dalam percakapan santai: ううん (uun)."},
{k:"いらっしゃいませ",r:"irasshaimase",a:"selamat datang (di toko/restoran)",n:"Ungkapan wajib staf toko saat pelanggan masuk. Tidak perlu direspons — cukup angguk atau senyum."},
{k:"（どうも）ありがとうございます",r:"(doumo) arigatou gozaimasu",a:"terima kasih (banyak)",n:"どうも menambahkan penekanan 'sangat/banyak'. Sering diucapkan staf toko/restoran saat pelanggan membayar atau keluar."},
{k:"こころをこめて",r:"kokoro wo komete",a:"dengan sepenuh hati",kj:"心を込めて",n:"Kokoro (hati) + wo (partikel objek) + komete (dari 'komeru' = memasukkan/menuangkan). Dipakai untuk menyatakan sesuatu dilakukan dengan penuh perasaan/ketulusan, misal saat memasak atau memberi hadiah."}
]},
"Sampah & Lingkungan":{rows:[
{k:"ごみ",r:"gomi",a:"sampah",kj:"ゴミ",n:"Kata umum untuk sampah/limbah rumah tangga."},
{k:"かねんごみ",r:"kanen gomi",a:"sampah mudah terbakar",kj:"可燃ゴミ",n:"Biasanya dibuang 2x seminggu, misal Senin & Kamis atau Selasa & Jumat (tergantung wilayah)."},
{k:"ふねんごみ",r:"funen gomi",a:"sampah tidak mudah terbakar",kj:"不燃ゴミ",n:"Biasanya dibuang lebih jarang, misal setiap Rabu minggu ke-1 dan ke-3, atau 2x/bulan (tergantung wilayah)."},
{k:"リサイクル / しげんごみ",r:"risaikuru / shigen gomi",a:"sampah daur ulang",kj:"資源ゴミ",n:"Sampah yang bisa didaur ulang (botol, kaleng, kertas, dll), dipisah dari sampah biasa."},
{k:"そだいごみ",r:"sodai gomi",a:"sampah besar / berukuran besar",kj:"粗大ゴミ",n:"Untuk barang besar (perabot, elektronik, dll) biasanya harus menelepon dulu (denwa) ke pihak terkait untuk menjadwalkan pengambilan, tidak bisa ditaruh sembarangan seperti sampah biasa."},
{k:"だします",r:"dashimasu",a:"membuang / mengeluarkan (sampah)",kj:"出します",n:"Dari 'dasu'. 'Gomi wo dasu toki' = waktu membuang sampah. Setiap jenis sampah punya jadwal 'dasu' sendiri-sendiri."}
]}
};

// ─── DATA: KATA SIFAT — tab tersendiri sejajar Hiragana/Katakana/Kotoba/Kata Bantu Bilangan ───

const KATA_SIFAT = {
"Kata Sifat - い (i-keiyoushi)":{rows:[
{k:"たのしい",r:"tanoshii",a:"menyenangkan",kj:"楽しい"},
{k:"おおきい",r:"ookii",a:"besar",kj:"大きい",n:"Bentuk i-adjective. Ada juga 'ookina' (大きな) sebagai bentuk yang selalu langsung nempel di depan kata benda."},
{k:"ちいさい",r:"chiisai",a:"kecil",kj:"小さい",n:"Vokal panjang 'ちい'. Lawan kata dari 'ookii'."},
{k:"あたらしい",r:"atarashii",a:"baru",kj:"新しい",n:"Lawan kata dari 'furui'. Dipakai untuk barang, bangunan, atau hal yang belum lama ada."},
{k:"ふるい",r:"furui",a:"tua / lama / kuno",kj:"古い",n:"Dipakai untuk barang/bangunan (bukan usia orang!). Untuk usia orang pakai 'toshi wo totta' atau konteks lain."},
{k:"いい",r:"ii",a:"bagus / baik",n:"I-adjective TIDAK BERATURAN. Bentuk negatifnya BUKAN 'iikunai' tapi 'yokunai' (dari bentuk lama 'yoi'). Penting dihafal karena sering dipakai."},
{k:"わるい",r:"warui",a:"tidak bagus, tidak baik",kj:"悪い"},
{k:"あつい",r:"atsui",a:"panas",kj:"暑い",n:"Ada 3 kanji berbunyi sama 'atsui': 暑い (panas cuaca), 熱い (panas benda), dan 厚い (tebal) — beda kanji, beda arti, jangan ketuker!"},
{k:"さむい",r:"samui",a:"dingin (hawa)",kj:"寒い"},
{k:"つめたい",r:"tsumetai",a:"dingin (benda)",kj:"冷たい"},
{k:"やさしい",r:"yasashii",a:"ramah, mudah",kj:"優しい・易しい"},
{k:"むずかしい",r:"muzukashii",a:"sulit, sukar",kj:"難しい"},
{k:"たかい",r:"takai",a:"mahal / tinggi",kj:"高い",n:"Dua arti berbeda, satu kata! Konteks menentukan makna."},
{k:"ひくい",r:"hikui",a:"rendah",kj:"低い",n:"Lawan kata dari 'takai' (tinggi). Dipakai untuk gedung, gunung, suara, dsb."},
{k:"やすい",r:"yasui",a:"murah",kj:"安い"},
{k:"おもしろい",r:"omoshiroi",a:"menarik, menyenangkan",kj:"面白い"},
{k:"つまらない",r:"tsumaranai",a:"membosankan"},
{k:"おいしい",r:"oishii",a:"enak",kj:"美味しい"},
{k:"まずい",r:"mazui",a:"tidak enak"},
{k:"まぎらわしい",r:"magirawashii",a:"sulit dibedakan",kj:"紛らわしい"},
{k:"しろい",r:"shiroi",a:"putih",kj:"白い"},
{k:"くろい",r:"kuroi",a:"hitam",kj:"黒い"},
{k:"あかい",r:"akai",a:"merah",kj:"赤い"},
{k:"あおい",r:"aoi",a:"biru",kj:"青い"},
{k:"おもい",r:"omoi",a:"berat",kj:"重い"},
{k:"かるい",r:"karui",a:"ringan",kj:"軽い"},
{k:"ちかい",r:"chikai",a:"dekat",kj:"近い"},
{k:"とおい",r:"tooi",a:"jauh",kj:"遠い"},
{k:"はやい",r:"hayai",a:"cepat",kj:"速い",n:"Ada 'hayai' (早い) yang berarti 'pagi/lebih awal'. Beda kanji, beda makna."},
{k:"おそい",r:"osoi",a:"lambat",kj:"遅い",n:"Lawan kata dari 'hayai'. Juga berarti 'terlambat'."},
{k:"おおい",r:"ooi",a:"banyak",kj:"多い",n:"Khusus dipakai sebagai predikat (〜が おおいです), bukan langsung di depan kata benda seperti 'takusan'."},
{k:"すくない",r:"sukunai",a:"sedikit",kj:"少ない",n:"Lawan kata dari 'ooi'. Juga predikat, bukan langsung di depan kata benda."},
{k:"あたたかい",r:"atatakai",a:"Hangat",kj:"暖かい"},
{k:"すずしい",r:"suzushii",a:"sejuk",kj:"涼しい"},
{k:"ながい",r:"nagai",a:"panjang",kj:"長い"},
{k:"みじかい",r:"mijikai",a:"pendek",kj:"短い"},
{k:"あまい",r:"amai",a:"manis",kj:"甘い"},
{k:"からい",r:"karai",a:"pedas",kj:"辛い"},
{k:"いそがしい",r:"isogashii",a:"sibuk",kj:"忙しい"},
{k:"わかい",r:"wakai",a:"muda",kj:"若い"},
{k:"ほしい",r:"hoshii",a:"ingin",kj:"欲しい"},
{k:"あかるい",r:"akarui",a:"terang",kj:"明るい"},
{k:"くらい",r:"kurai",a:"gelap",kj:"暗い"},
{k:"ひろい",r:"hiroi",a:"luas",kj:"広い"},
{k:"せまい",r:"semai",a:"sempit",kj:"狭い"},
{k:"せがたかい",r:"segatakai",a:"Tinggi(badan)",kj:"背が高い"},
{k:"せがひくい",r:"segahikui",a:"rendah (badan)",kj:"背が低い"},
{k:"あぶない",r:"abunai",a:"berbahaya",kj:"危ない"},
{k:"うれしい",r:"ureshii",a:"senang",kj:"嬉しい",n:"Senang karena sesuatu terjadi. Beda dengan 'tanoshii' (menyenangkan)."},
{k:"かなしい",r:"kanashii",a:"sedih",kj:"悲しい",n:"Banyak muncul dalam lagu dan puisi Jepang."},
{k:"さびしい",r:"sabishii",a:"sepi",kj:"寂しい"},
{k:"ねむい",r:"nemui",a:"mengantuk",kj:"眠い"},
{k:"あさい",r:"asai",a:"dangkal",kj:"浅い"},
{k:"ふかい",r:"fukai",a:"dalam",kj:"深い"},
{k:"あつい",r:"atsui",a:"tebal",kj:"厚い",n:"Bunyinya sama kayak 暑い (panas cuaca) dan 熱い (panas benda), tapi ini kanji ketiga: 厚い = tebal (buku, kain, dsb)."},
{k:"くわしい",r:"kuwashii",a:"detail, teliti",kj:"詳しい"},
{k:"やわらかい",r:"yawarakai",a:"Lunak, lembut",kj:"柔らかい"},
{k:"かたい",r:"katai",a:"keras",kj:"硬い"},
{k:"にがい",r:"nigai",a:"pahit",kj:"苦い"},
{k:"しおからい",r:"shiokarai",a:"asin",kj:"塩辛い"},
{k:"きたない",r:"kitanai",a:"kotor",kj:"汚い"},
{k:"かわいい",r:"kawaii",a:"cantik, lucu",kj:"可愛い"},
{k:"こわい",r:"kowai",a:"menakutkan",kj:"怖い"},
{k:"うるさい",r:"urusai",a:"berisik",kj:"煩い"},
{k:"うつくしい",r:"utsukushii",a:"Cantik, indah",kj:"美しい"},
{k:"しぶい",r:"shibui",a:"sepat",kj:"渋い"},
{k:"すっぱい",r:"suppai",a:"asam",kj:"酸っぱい"},
{k:"くるしい",r:"kurushii",a:"sukar,susah hati, payah, menderita",kj:"苦しい"},
{k:"あらい",r:"arai",a:"kasar, galak, ganas",kj:"荒い"},
{k:"いたい",r:"itai",a:"sakit",kj:"痛い"},
{k:"にぶい",r:"nibui",a:"tumpul, lambat, lamban",kj:"鈍い"},
{k:"よわい",r:"yowai",a:"lemah",kj:"弱い"},
{k:"つよい",r:"tsuyoi",a:"kuat",kj:"強い"},
{k:"ふとい",r:"futoi",a:"tebal, gemuk, besar",kj:"太い"},
{k:"ほそい",r:"hosoi",a:"tipis, kurus, kecil",kj:"細い"},
{k:"かっこいい",r:"kakkoii",a:"keren, ganteng"},
{k:"みにくい",r:"minikui",a:"jelek",kj:"醜い"},
{k:"するどい",r:"surudoi",a:"tajam",kj:"鋭い"}
]},
"Kata Sifat - な (na-keiyoushi)":{rows:[
{k:"きれい",r:"kirei",a:"cantik / indah / bersih",n:"Na-adjective, walau berakhiran い — jangan tertukar sebagai i-adjective! Bisa berarti 'cantik' ATAU 'bersih' tergantung konteks."},
{k:"いけめん",r:"ikemen",a:"ganteng"},
{k:"ハンサム",r:"hansamu",a:"ganteng"},
{k:"げんき",r:"genki",a:"sehat, ceria, aktif",kj:"元気"},
{k:"きんべん",r:"kinben",a:"rajin",kj:"勤勉"},
{k:"ばか",r:"baka",a:"bodoh",kj:"馬鹿"},
{k:"しんせつ",r:"shinsetsu",a:"ramah",kj:"親切"},
{k:"びんぼう",r:"binbou",a:"miskin",kj:"貧乏"},
{k:"ひま",r:"hima",a:"senggang",kj:"暇"},
{k:"すてき",r:"suteki",a:"indah, bagus",kj:"素敵"},
{k:"じゅうよう",r:"juuyou",a:"penting",kj:"重要"},
{k:"すき",r:"suki",a:"suka",kj:"好き"},
{k:"ひつよう",r:"hitsuyou",a:"keperluan, penting",kj:"必要"},
{k:"しょうじき",r:"shoujiki",a:"jujur",kj:"正直"},
{k:"じょうず",r:"jouzu",a:"pintar, pandai, mahir",kj:"上手"},
{k:"へた",r:"heta",a:"tidak mahir, tidak pandai",kj:"下手"},
{k:"たいせつ",r:"taisetsu",a:"penting",kj:"大切"},
{k:"ぶれい",r:"burei",a:"tidak sopan",kj:"無礼"},
{k:"しつれい",r:"shitsurei",a:"tidak sopan, permisi",kj:"失礼"},
{k:"ていねい",r:"teinei",a:"sopan",kj:"丁寧"},
{k:"きらい",r:"kirai",a:"tidak suka, benci",kj:"嫌い"},
{k:"りっぱ",r:"rippa",a:"hebat, bagus, jempol",kj:"立派"},
{k:"じょうぶ",r:"joubu",a:"sehat, kuat, kokoh",kj:"丈夫"},
{k:"なまいき",r:"namaiki",a:"sombong, angkuh, congkak",kj:"生意気"},
{k:"にぎやか",r:"nigiyaka",a:"ramai",n:"Na-adjective. Lawan kata dari 'shizuka'. Dipakai untuk tempat yang rame orang/kegiatan."},
{k:"さいわい",r:"saiwai",a:"bahagia, beruntung, mujur",kj:"幸い"},
{k:"ふくざつ",r:"fukuzatsu",a:"sulit, sukar",kj:"複雑"},
{k:"あいまい",r:"aimai",a:"kabur, tidak jelas",kj:"曖昧"},
{k:"ゆうめい",r:"yuumei",a:"terkenal",kj:"有名",n:"Na-adjective. Yuu (punya) + Mei (nama) — harfiah 'punya nama (yang dikenal)'."},
{k:"まじめ",r:"majime",a:"rajin",kj:"真面目"},
{k:"べんり",r:"benri",a:"praktis",kj:"便利"},
{k:"ふべん",r:"fuben",a:"tidak praktis",kj:"不便"},
{k:"たいくつ",r:"taikutsu",a:"membosankan",kj:"退屈"},
{k:"しずか",r:"shizuka",a:"sunyi / sepi / tenang",kj:"静か",n:"Na-adjective — kalau di depan kata benda jadi 'shizuka na machi', tapi kalau jadi predikat cukup 'shizuka desu' (な hilang)."},
{k:"ふあん",r:"fuan",a:"cemas, gelisah, bimbang",kj:"不安"},
{k:"ぞんざい",r:"zonzai",a:"Kasar, kurang ajar"},
{k:"むだ",r:"muda",a:"Mubazir, sia-sia",kj:"無駄"},
{k:"だいじょうぶ",r:"daijoubu",a:"Tidak apa-apa",kj:"大丈夫"},
{k:"たいへん",r:"taihen",a:"Sulit, sukar",kj:"大変"},
{k:"へん",r:"hen",a:"Aneh",kj:"変"},
{k:"かいてき",r:"kaiteki",a:"Nyaman, nikmat, menyenangkan",kj:"快適"},
{k:"きよう",r:"kiyou",a:"Kecekatan tangan, cekatan",kj:"起用"},
{k:"ざんこく",r:"zankoku",a:"Kejam",kj:"残酷"},
{k:"かんたん",r:"kantan",a:"mudah",kj:"簡単"},
{k:"おおきな",r:"ookina",a:"besar",kj:"大きな",n:"Bentuk khusus (rentaikei) — cuma bisa nempel langsung di depan kata benda (おおきな いえ), TIDAK BISA jadi predikat (salah kalau bilang 'いえは おおきなです'). Beda dari おおきい (i-adjective biasa) yang bisa dua-duanya."}
]}
};

// ─── DATA: KATA KERJA — tab tersendiri sejajar Hiragana/Katakana/Kotoba/Kata Bantu Bilangan ───

const KATA_KERJA = {
"Kata Kerja - Kelompok I":{rows:[
{k:"あいます",r:"aimasu",a:"bertemu, berjumpa",kj:"会います"},
{k:"あそびます",r:"asobimasu",a:"bermain",kj:"遊びます",n:"Dari 'asobu'. Orang dewasa juga pakai kata ini untuk bersenang-senang."},
{k:"あらいます",r:"araimasu",a:"mencuci (tangan)",kj:"洗います"},
{k:"あります",r:"arimasu",a:"ada (benda mati)",kj:"有ります",n:"Dari 'aru'. Khusus benda mati/tidak bergerak. Sering ditulis hiragana saja dalam praktik sehari-hari."},
{k:"あるきます",r:"arukimasu",a:"berjalan kaki",kj:"歩きます"},
{k:"いいます",r:"iimasu",a:"berkata, mengatakan",kj:"言います"},
{k:"いきます",r:"ikimasu",a:"pergi",kj:"行きます",n:"Dari 'iku'. Partikel 'ni' atau 'e' menunjukkan tujuan."},
{k:"いそぎます",r:"isogimasu",a:"terburu-buru, tergesa-gesa",kj:"急ぎます"},
{k:"いります",r:"irimasu",a:"memerlukan",kj:"要ります"},
{k:"うごきます",r:"ugokimasu",a:"bergerak, berputar",kj:"動きます"},
{k:"うたいます",r:"utaimasu",a:"menyanyi",kj:"歌います"},
{k:"うります",r:"urimasu",a:"menjual",kj:"売ります"},
{k:"おきます",r:"okimasu",a:"meletakkan",kj:"置きます"},
{k:"おくります",r:"okurimasu",a:"mengirim, mengantar",kj:"送ります"},
{k:"おします",r:"oshimasu",a:"menekan, mendorong",kj:"押します"},
{k:"おもいます",r:"omoimasu",a:"mengira, merasa",kj:"思います"},
{k:"おもいだします",r:"omoida shimasu",a:"teringat",kj:"思い出します"},
{k:"およぎます",r:"oyogimasu",a:"berenang",kj:"泳ぎます",n:"Dari 'oyogu'. Kata kerja baris G."},
{k:"おわります",r:"owarimasu",a:"habis, selesai",kj:"終わります"},
{k:"かいます",r:"kaimasu",a:"membeli",kj:"買います"},
{k:"かえします",r:"kae shimasu",a:"mengembalikan",kj:"返します"},
{k:"かえります",r:"kaerimasu",a:"pulang",kj:"帰ります",n:"Dari 'kaeru'. Khusus pulang ke rumah/tempat asal."},
{k:"かかります",r:"kakarimasu",a:"memerlukan, memakan (waktu,uang)",kj:"掛かります"},
{k:"かきます",r:"kakimasu",a:"menulis",kj:"書きます",n:"Dari 'kaku'. Juga berarti 'menggambar' atau 'melukis'."},
{k:"かします",r:"kashimasu",a:"meminjamkan",kj:"貸します"},
{k:"かちます",r:"kachimasu",a:"menang",kj:"勝ちます"},
{k:"かぶります",r:"kaburimasu",a:"memakai (topi,dll)",kj:"被ります"},
{k:"ききます",r:"kikimasu",a:"mendengar",kj:"聞きます",n:"Dari 'kiku'. Juga berarti 'bertanya' (sensei ni kikimasu)."},
{k:"きります",r:"kirimasu",a:"memotong, menggunting",kj:"切ります"},
{k:"けします",r:"keshimasu",a:"mematikan, memadamkan",kj:"消します"},
{k:"さわります",r:"sawarimasu",a:"menyentuh, memegang",kj:"触ります"},
{k:"しります",r:"shirimasu",a:"tahu, mengetahui",kj:"知ります"},
{k:"すいます",r:"suimasu",a:"merokok, menghisap",kj:"吸います"},
{k:"すみます",r:"sumimasu",a:"tinggal, bermukim",kj:"住みます"},
{k:"すわります",r:"suwarimasu",a:"duduk",n:"Dari 'suwaru'."},
{k:"たちます",r:"tachimasu",a:"berdiri",kj:"立ちます",n:"Dari 'tatsu'. Juga berarti 'muncul' secara kiasan."},
{k:"だします",r:"dashimasu",a:"mengeluarkan, mengirim (surat), menyerahkan (laporan)",kj:"出します"},
{k:"つかいます",r:"tsukaimasu",a:"memakai, menggunakan",kj:"使います"},
{k:"つきます",r:"tsukimasu",a:"tiba, sampai",kj:"着きます"},
{k:"つくります",r:"tsukurimasu",a:"membuat, memproduksi",kj:"作ります"},
{k:"つれていきます",r:"tsureteikimasu",a:"pergi mengantar (orang lain)",kj:"連れていきます"},
{k:"てつだいます",r:"tetsudaimasu",a:"membantu",kj:"手伝います"},
{k:"とまります",r:"tomarimasu",a:"menginap, bermalam",kj:"止まります"},
{k:"とります",r:"torimasu",a:"mengambil, memotret, menjadi tua",kj:"取ります"},
{k:"なおします",r:"nao shimasu",a:"memperbaiki, membetulkan",kj:"直します"},
{k:"なくします",r:"naku shimasu",a:"hilang, kehilangan",kj:"亡くします"},
{k:"ならいます",r:"naraimasu",a:"belajar (keahlian/kemahiran)",kj:"習います",n:"Dari 'narau'. Belajar suatu keahlian/kemahiran dari orang lain (les musik, memasak, bela diri, dll), biasanya dengan guru/instruktur."},
{k:"なります",r:"narimasu",a:"menjadi"},
{k:"ぬぎます",r:"nugimasu",a:"membuka, melepaskan",kj:"脱ぎます"},
{k:"のぼります",r:"noborimasu",a:"mendaki",kj:"上ります"},
{k:"のみます",r:"nomimasu",a:"minum",kj:"飲みます",n:"Dari 'nomu'. Minum obat juga pakai kata ini."},
{k:"のります",r:"norimasu",a:"naik",kj:"乗ります"},
{k:"はいります",r:"hairimasu",a:"masuk",kj:"入ります",n:"Dari 'hairu'. Partikel 'ni' dipakai untuk tempat yang dimasuki."},
{k:"はきます",r:"hakimasu",a:"memakai (sepatu, celana, dll)",kj:"吐きます"},
{k:"はたらきます",r:"hatarakimasu",a:"bekerja",kj:"働きます"},
{k:"ひきます",r:"hikimasu",a:"menarik",kj:"引きます"},
{k:"ふります",r:"furimasu",a:"turun (hujan, salju)",kj:"降ります"},
{k:"はらいます",r:"haraimasu",a:"membayar",kj:"払います"},
{k:"はなします",r:"hanashimasu",a:"berbicara",kj:"話します",n:"Dari 'hanasu'. 'Hanashi' = cerita/pembicaraan."},
{k:"まがります",r:"magarimasu",a:"belok (kiri, kanan)",kj:"曲がります"},
{k:"まちます",r:"machimasu",a:"menunggu",kj:"待ちます"},
{k:"まわします",r:"mawa shimasu",a:"memutar",kj:"回します"},
{k:"もちます",r:"mochimasu",a:"memegang, membawa, memiliki",kj:"持ちます"},
{k:"もっていきます",r:"motteikimasu",a:"pergi membawa",kj:"持っていきます"},
{k:"もらいます",r:"moraimasu",a:"menerima",kj:"貰います"},
{k:"やくにたちます",r:"yakunitachimasu",a:"berguna, berfaedah, bermanfaat",kj:"役に立ちます"},
{k:"やすみます",r:"yasumimasu",a:"beristirahat",kj:"休みます"},
{k:"よびます",r:"yobimasu",a:"memanggil",kj:"呼びます"},
{k:"よみます",r:"yomimasu",a:"membaca",kj:"読みます",n:"Dari 'yomu'. Hon wo yomimasu = membaca buku."},
{k:"わかります",r:"wakarimasu",a:"mengerti",kj:"分かります"},
{k:"わたります",r:"watarimasu",a:"menyeberang",kj:"渡ります"},
{k:"まなびます",r:"manabimasu",a:"mempelajari (secara umum/mendalam)",kj:"学びます",n:"Dari 'manabu'. Mempelajari sesuatu secara lebih luas/mendalam tanpa harus terlalu 'ngoyo', bisa dari pengalaman atau observasi, bukan cuma dari buku."},
{k:"やります",r:"yarimasu",a:"melakukan, mengerjakan (santai)",kj:"やります",n:"Dari 'yaru'. Versi lebih santai/informal dari 'shimasu'. Sering dipakai untuk menawarkan diri mengerjakan sesuatu, contoh: 'watashi ga yarimasu' = saya (lah) yang akan melakukannya."}
]},
"Kata Kerja - Kelompok II":{rows:[
{k:"あけます",r:"akemasu",a:"membuka",kj:"開けます"},
{k:"あげます",r:"agemasu",a:"memberikan",kj:"挙げます"},
{k:"あつめます",r:"atsumemasu",a:"mengumpulkan",kj:"集めます"},
{k:"あびます",r:"abimasu",a:"mandi",kj:"浴びます"},
{k:"います",r:"imasu",a:"ada (makhluk hidup)",kj:"居ます",n:"Dari 'iru'. Untuk manusia dan hewan. Sering ditulis hiragana saja dalam praktik sehari-hari."},
{k:"いれます",r:"iremasu",a:"memasukkan",kj:"入れます"},
{k:"うまれます",r:"umaremasu",a:"lahir, dilahirkan",kj:"生まれます"},
{k:"おきます",r:"okimasu",a:"bangun",kj:"起きます"},
{k:"おしえます",r:"oshiemasu",a:"mengajar, memberitahukan (alamat)",kj:"教えます"},
{k:"おぼえます",r:"oboemasu",a:"mengingat, menghafal",kj:"覚えます"},
{k:"おります",r:"orimasu",a:"turun",kj:"降ります"},
{k:"かえます",r:"kaemasu",a:"mengganti, menukar, mengubah",kj:"変えます"},
{k:"かけます",r:"kakemasu",a:"menelepon, memakai",kj:"掛けます"},
{k:"かんがえます",r:"kangaemasu",a:"memikirkan",kj:"考えます"},
{k:"きをつけます",r:"kiwotsukemasu",a:"berhati-hati",kj:"気を付けます"},
{k:"きます",r:"kimasu",a:"datang",kj:"来ます",n:"Dari 'kuru' (tidak beraturan). Arah menuju pembicara."},
{k:"くれます",r:"kuremasu",a:"(kepada saya)",kj:"memberi"},
{k:"しめます",r:"shimemasu",a:"menutup",kj:"閉めます"},
{k:"しらべます",r:"shirabemasu",a:"memeriksa, menyelidiki",kj:"調べます"},
{k:"すてます",r:"sutemasu",a:"membuang",kj:"捨てます"},
{k:"たべます",r:"tabemasu",a:"makan",kj:"食べます",n:"Dari 'taberu'. Diikuti objek dengan partikel 'wo'."},
{k:"たります",r:"tarimasu",a:"cukup, mencukupi",kj:"足ります"},
{k:"つかれます",r:"tsukaremasu",a:"capek, lelah",kj:"疲れます"},
{k:"つけます",r:"tsukemasu",a:"menyalakan"},
{k:"でかけます",r:"dekakemasu",a:"pergi keluar, berangkat keluar",kj:"出かけます"},
{k:"できます",r:"dekimasu",a:"dapat, bisa, mampu",kj:"出来ます"},
{k:"でます",r:"demasu",a:"keluar",kj:"出ます",n:"Dari 'deru'. Juga berarti 'muncul' atau 'berangkat' (kereta)."},
{k:"とめます",r:"tomemasu",a:"menghentikan",kj:"止めます"},
{k:"ねます",r:"nemasu",a:"tidur",kj:"寝ます"},
{k:"のりかえます",r:"norikaemasu",a:"ganti kendaraan, pindah kendaraan",kj:"乗り換えます"},
{k:"はじめます",r:"hajimemasu",a:"memulai",kj:"始めます"},
{k:"まけます",r:"makemasu",a:"kalah",kj:"負けます"},
{k:"みせます",r:"misemasu",a:"memperlihatkan",kj:"見せます"},
{k:"みます",r:"mimasu",a:"melihat / menonton",kj:"見ます",n:"Dari 'miru'. Menonton film = eiga wo mimasu."},
{k:"むかえます",r:"mukaemasu",a:"menjemput",kj:"迎えます"},
{k:"やめます",r:"yamemasu",a:"berhenti, meninggalkan (perusahaan)",kj:"辞めます"},
{k:"わすれます",r:"wasuremasu",a:"lupa",kj:"忘れます"},
{k:"しています",r:"shiteimasu",a:"sedang melakukan",n:"Bentuk 'te-iru' menyatakan aksi sedang berlangsung."}
]},
"Kata Kerja - Kelompok III":{rows:[
{k:"あんないします",r:"annai shimasu",a:"mengantarkan untuk melihat-lihat",kj:"案内します"},
{k:"うんてんします",r:"unten shimasu",a:"mengemudikan, menjalankan",kj:"運転します"},
{k:"かいものします",r:"kaimono shimasu",a:"berbelanja",kj:"買い物します"},
{k:"きます",r:"kimasu",a:"datang",kj:"来ます",n:"Dari 'kuru' (tidak beraturan). Arah menuju pembicara."},
{k:"けっこんします",r:"kekkon shimasu",a:"menikah",kj:"結婚します"},
{k:"けんがくします",r:"kengaku shimasu",a:"meninjau",kj:"見学します"},
{k:"けんきゅうします",r:"kenkyuu shimasu",a:"meneliti",kj:"研究します"},
{k:"コピーします",r:"kopii shimasu",a:"mengkopi"},
{k:"さんぽします",r:"sanpo shimasu",a:"berjalan-jalan (di taman)",kj:"散歩します"},
{k:"ざんぎょうします",r:"zangyou shimasu",a:"lembur (kerja)",kj:"残業します"},
{k:"します",r:"shimasu",a:"melakukan, mengerjakan",n:"Kata kerja golongan III (tidak beraturan). Kata kerja paling serbaguna — sering digabung kata benda + shimasu untuk membentuk kata kerja baru (benkyou shimasu, dll)."},
{k:"しゅうりします",r:"shuuri shimasu",a:"memperbaiki",kj:"修理します"},
{k:"しゅっちょうします",r:"shutchou shimasu",a:"dinas keluar kota",kj:"出張します"},
{k:"しょうかいします",r:"shoukai shimasu",a:"memperkenalkan",kj:"紹介します"},
{k:"しょくじします",r:"shokuji shimasu",a:"makan",kj:"食事します"},
{k:"しんぱいします",r:"shinpai shimasu",a:"khawatir, cemas",kj:"心配します"},
{k:"せつめいします",r:"setsumei shimasu",a:"menjelaskan, menerangkan",kj:"説明します"},
{k:"せんたくします",r:"sentaku shimasu",a:"mencuci (pakaian)",kj:"洗濯します"},
{k:"そうじします",r:"souji shimasu",a:"membersihkan (kamar)",kj:"掃除します"},
{k:"つれてきます",r:"tsuretekimasu",a:"membawa, datang mangantar (orang)",kj:"連れてきます"},
{k:"でんわします",r:"denwa shimasu",a:"menelepon",kj:"電話します"},
{k:"ひっこしします",r:"hikkoshi shimasu",a:"pindah rumah",kj:"引っ越しします"},
{k:"べんきょうします",r:"benkyoushimasu",a:"belajar (akademis)",kj:"勉強します",n:"Belajar dalam konteks akademis/sekolah, misalnya belajar pelajaran atau bahasa untuk ujian."},
{k:"もってきます",r:"mottekimasu",a:"membawa, datang membawa",kj:"持ってきます"},
{k:"よやくします",r:"yoyaku shimasu",a:"memesan",kj:"予約します"},
{k:"りゅうがくします",r:"ryuugaku shimasu",a:"belajar di luar negeri",kj:"留学します"},
{k:"れんしゅうします",r:"renshuu shimasu",a:"berlatih",kj:"練習します"}
]}
};

// ─── DATA: KATA BANTU BILANGAN (助数詞) — tab tersendiri sejajar Hiragana/Katakana/Kotoba ───
const COUNTER = {

"〜つ (Benda Umum, Serbaguna)": { rows: [
{k:"ひとつ",r:"hitotsu",a:"1 buah",kj:"一つ",n:"Counter paling serbaguna untuk benda tanpa kategori khusus — dipakai kalau bingung counter mana yang tepat."},
{k:"ふたつ",r:"futatsu",a:"2 buah",kj:"二つ",n:"Pengucapan asli Jepang (bukan dari bahasa Cina seperti kebanyakan angka lain)."},
{k:"みっつ",r:"mittsu",a:"3 buah",kj:"三つ",n:"Konsonan ganda っ di tengah kata."},
{k:"よっつ",r:"yottsu",a:"4 buah",kj:"四つ",n:"Pakai よ, bukan し atau よん."},
{k:"いつつ",r:"itsutsu",a:"5 buah",kj:"五つ",n:"Semua vokal い-u-u dalam kata ini."},
{k:"むっつ",r:"muttsu",a:"6 buah",kj:"六つ",n:"Konsonan ganda っ seperti pola 3, 4, 8."},
{k:"ななつ",r:"nanatsu",a:"7 buah",kj:"七つ",n:"Pakai なな, konsisten dengan bentuk なな untuk angka 7 lainnya."},
{k:"やっつ",r:"yattsu",a:"8 buah",kj:"八つ",n:"Konsonan ganda っ."},
{k:"ここのつ",r:"kokonotsu",a:"9 buah",kj:"九つ",n:"Kata terpanjang dalam deret ini — 4 suku kata."},
{k:"とお",r:"too",a:"10 buah",kj:"十",n:"PENGECUALIAN! Pola つ berhenti di 9. Untuk 10, dipakai とお (bukan とうつ)."}
]},

"〜にん (Orang)": { rows: [
{k:"ひとり",r:"hitori",a:"1 orang",kj:"一人",n:"PENGECUALIAN! Bukan いちにん — bentuk khusus untuk 1 orang, juga berarti 'sendirian'."},
{k:"ふたり",r:"futari",a:"2 orang",kj:"二人",n:"PENGECUALIAN! Bukan ににん — bentuk khusus untuk 2 orang."},
{k:"さんにん",r:"sannin",a:"3 orang",kj:"三人",n:"Mulai dari sini pola beraturan: angka + にん."},
{k:"よにん",r:"yonin",a:"4 orang",kj:"四人",n:"Pakai よ (bukan し atau よん) + にん."},
{k:"ごにん",r:"gonin",a:"5 orang",kj:"五人",n:"ご + にん."},
{k:"ろくにん",r:"rokunin",a:"6 orang",kj:"六人",n:"ろく + にん."},
{k:"ななにん",r:"nananin",a:"7 orang",kj:"七人",n:"なな (bukan しち) + にん."},
{k:"はちにん",r:"hachinin",a:"8 orang",kj:"八人",n:"はち + にん. Tidak ada konsonan ganda di sini."},
{k:"きゅうにん",r:"kyuunin",a:"9 orang",kj:"九人",n:"きゅう (bukan く) + にん."},
{k:"じゅうにん",r:"juunin",a:"10 orang",kj:"十人",n:"じゅう + にん."}
]},

"〜ばん (Urutan / Nomor ke-)": { rows: [
{k:"いちばん",r:"ichiban",a:"nomor 1 / urutan pertama",kj:"一番",n:"'Ichiban' juga berarti 'paling/nomor satu' secara umum dalam percakapan sehari-hari, di luar konteks urutan."},
{k:"にばん",r:"niban",a:"nomor 2 / urutan kedua",kj:"二番",n:"に + ばん."},
{k:"さんばん",r:"sanban",a:"nomor 3 / urutan ketiga",kj:"三番",n:"さん + ばん."},
{k:"よんばん",r:"yonban",a:"nomor 4 / urutan keempat",kj:"四番",n:"よん + ばん."},
{k:"ごばん",r:"goban",a:"nomor 5 / urutan kelima",kj:"五番",n:"ご + ばん."},
{k:"ろくばん",r:"rokuban",a:"nomor 6 / urutan keenam",kj:"六番",n:"ろく + ばん."},
{k:"ななばん",r:"nanaban",a:"nomor 7 / urutan ketujuh",kj:"七番",n:"なな + ばん."},
{k:"はちばん",r:"hachiban",a:"nomor 8 / urutan kedelapan",kj:"八番",n:"はち + ばん."},
{k:"きゅうばん",r:"kyuuban",a:"nomor 9 / urutan kesembilan",kj:"九番",n:"きゅう + ばん."},
{k:"じゅうばん",r:"juuban",a:"nomor 10 / urutan kesepuluh",kj:"十番",n:"じゅう + ばん."}
]},

"〜まい (Lembar, Benda Tipis & Datar)": { rows: [
{k:"いちまい",r:"ichimai",a:"1 lembar",kj:"一枚",n:"Untuk kertas, piring, baju, foto, tiket, kaos."},
{k:"にまい",r:"nimai",a:"2 lembar",kj:"二枚",n:"に + まい."},
{k:"さんまい",r:"sanmai",a:"3 lembar",kj:"三枚",n:"さん + まい."},
{k:"よんまい",r:"yonmai",a:"4 lembar",kj:"四枚",n:"よん + まい."},
{k:"ごまい",r:"gomai",a:"5 lembar",kj:"五枚",n:"ご + まい."},
{k:"ろくまい",r:"rokumai",a:"6 lembar",kj:"六枚",n:"ろく + まい."},
{k:"ななまい",r:"nanamai",a:"7 lembar",kj:"七枚",n:"なな + まい."},
{k:"はちまい",r:"hachimai",a:"8 lembar",kj:"八枚",n:"はち + まい."},
{k:"きゅうまい",r:"kyuumai",a:"9 lembar",kj:"九枚",n:"きゅう + まい."},
{k:"じゅうまい",r:"juumai",a:"10 lembar",kj:"十枚",n:"じゅう + まい. Counter ini paling teratur, tidak ada perubahan bunyi sama sekali dari 1-10."}
]},

"〜だい (Mesin & Kendaraan)": { rows: [
{k:"いちだい",r:"ichidai",a:"1 buah (mesin/kendaraan)",kj:"一台",n:"Untuk mobil, TV, komputer, mesin, sepeda."},
{k:"にだい",r:"nidai",a:"2 buah",kj:"二台",n:"に + だい."},
{k:"さんだい",r:"sandai",a:"3 buah",kj:"三台",n:"さん + だい."},
{k:"よんだい",r:"yondai",a:"4 buah",kj:"四台",n:"よん + だい."},
{k:"ごだい",r:"godai",a:"5 buah",kj:"五台",n:"ご + だい."},
{k:"ろくだい",r:"rokudai",a:"6 buah",kj:"六台",n:"ろく + だい."},
{k:"ななだい",r:"nanadai",a:"7 buah",kj:"七台",n:"なな + だい."},
{k:"はちだい",r:"hachidai",a:"8 buah",kj:"八台",n:"はち + だい."},
{k:"きゅうだい",r:"kyuudai",a:"9 buah",kj:"九台",n:"きゅう + だい."},
{k:"じゅうだい",r:"juudai",a:"10 buah",kj:"十台",n:"じゅう + だい. Sama seperti まい, counter ini teratur tanpa perubahan bunyi."}
]},

"〜さい (Umur)": { rows: [
{k:"いっさい",r:"issai",a:"1 tahun",kj:"一歳",n:"いち + さい → いっさい (konsonan ganda)."},
{k:"にさい",r:"nisai",a:"2 tahun",kj:"二歳",n:"に + さい, tidak berubah."},
{k:"さんさい",r:"sansai",a:"3 tahun",kj:"三歳",n:"さん + さい, tidak berubah."},
{k:"よんさい",r:"yonsai",a:"4 tahun",kj:"四歳",n:"よん + さい. Hindari し karena homofon 死 (mati)."},
{k:"ごさい",r:"gosai",a:"5 tahun",kj:"五歳",n:"ご + さい, tidak berubah."},
{k:"ろくさい",r:"rokusai",a:"6 tahun",kj:"六歳",n:"ろく + さい, tidak berubah."},
{k:"ななさい",r:"nanasai",a:"7 tahun",kj:"七歳",n:"なな + さい, tidak berubah."},
{k:"はっさい",r:"hassai",a:"8 tahun",kj:"八歳",n:"はち + さい → はっさい (konsonan ganda)."},
{k:"きゅうさい",r:"kyuusai",a:"9 tahun",kj:"九歳",n:"きゅう + さい, tidak berubah."},
{k:"じゅっさい",r:"jussai",a:"10 tahun",kj:"十歳",n:"じゅう + さい → じゅっさい (konsonan ganda). Ingat juga はたち = 20 tahun, bentuk sangat khusus!"}
]},

"〜さつ (Buku, Majalah, Benda Dijilid)": { rows: [
{k:"いっさつ",r:"issatsu",a:"1 buah (buku)",kj:"一冊",n:"いち + さつ → いっさつ (konsonan ganda). Khusus buku, majalah, kamus, buku catatan."},
{k:"にさつ",r:"nisatsu",a:"2 buah",kj:"二冊",n:"に + さつ, tidak berubah."},
{k:"さんさつ",r:"sansatsu",a:"3 buah",kj:"三冊",n:"さん + さつ, tidak berubah."},
{k:"よんさつ",r:"yonsatsu",a:"4 buah",kj:"四冊",n:"よん + さつ, tidak berubah."},
{k:"ごさつ",r:"gosatsu",a:"5 buah",kj:"五冊",n:"ご + さつ, tidak berubah."},
{k:"ろくさつ",r:"rokusatsu",a:"6 buah",kj:"六冊",n:"ろく + さつ, tidak berubah."},
{k:"ななさつ",r:"nanasatsu",a:"7 buah",kj:"七冊",n:"なな + さつ, tidak berubah."},
{k:"はっさつ",r:"hassatsu",a:"8 buah",kj:"八冊",n:"はち + さつ → はっさつ (konsonan ganda)."},
{k:"きゅうさつ",r:"kyuusatsu",a:"9 buah",kj:"九冊",n:"きゅう + さつ, tidak berubah."},
{k:"じゅっさつ",r:"jussatsu",a:"10 buah",kj:"十冊",n:"じゅう + さつ → じゅっさつ (konsonan ganda)."}
]},

"〜ちゃく (Stel / Setelan Pakaian)": { rows: [
{k:"いっちゃく",r:"icchaku",a:"1 stel",kj:"一着",n:"いち + ちゃく → いっちゃく. Untuk pakaian lengkap seperti jas, setelan, gaun — beda dari 〜まい yang untuk lembaran pakaian tunggal."},
{k:"にちゃく",r:"nichaku",a:"2 stel",kj:"二着",n:"に + ちゃく, tidak berubah."},
{k:"さんちゃく",r:"sanchaku",a:"3 stel",kj:"三着",n:"さん + ちゃく, tidak berubah."},
{k:"よんちゃく",r:"yonchaku",a:"4 stel",kj:"四着",n:"よん + ちゃく, tidak berubah."},
{k:"ごちゃく",r:"gochaku",a:"5 stel",kj:"五着",n:"ご + ちゃく, tidak berubah."},
{k:"ろくちゃく",r:"rokuchaku",a:"6 stel",kj:"六着",n:"ろく + ちゃく, tidak berubah."},
{k:"ななちゃく",r:"nanachaku",a:"7 stel",kj:"七着",n:"なな + ちゃく, tidak berubah."},
{k:"はっちゃく",r:"hacchaku",a:"8 stel",kj:"八着",n:"はち + ちゃく → はっちゃく (konsonan ganda)."},
{k:"きゅうちゃく",r:"kyuuchaku",a:"9 stel",kj:"九着",n:"きゅう + ちゃく, tidak berubah."},
{k:"じゅっちゃく",r:"jucchaku",a:"10 stel",kj:"十着",n:"じゅう + ちゃく → じゅっちゃく (konsonan ganda)."}
]},

"〜かい (Kali / Frekuensi)": { rows: [
{k:"いっかい",r:"ikkai",a:"1 kali",kj:"一回",n:"いち + かい → いっかい. Menghitung berapa kali suatu aksi dilakukan. 'Nankaimo' = berkali-kali."},
{k:"にかい",r:"nikai",a:"2 kali",kj:"二回",n:"に + かい, tidak berubah."},
{k:"さんかい",r:"sankai",a:"3 kali",kj:"三回",n:"さん + かい. TIDAK berubah jadi さんがい di sini (beda dengan counter lantai!)."},
{k:"よんかい",r:"yonkai",a:"4 kali",kj:"四回",n:"よん + かい, tidak berubah."},
{k:"ごかい",r:"gokai",a:"5 kali",kj:"五回",n:"ご + かい, tidak berubah."},
{k:"ろっかい",r:"rokkai",a:"6 kali",kj:"六回",n:"ろく + かい → ろっかい (konsonan ganda)."},
{k:"ななかい",r:"nanakai",a:"7 kali",kj:"七回",n:"なな + かい, tidak berubah."},
{k:"はっかい",r:"hakkai",a:"8 kali",kj:"八回",n:"はち + かい → はっかい (konsonan ganda)."},
{k:"きゅうかい",r:"kyuukai",a:"9 kali",kj:"九回",n:"きゅう + かい, tidak berubah."},
{k:"じゅっかい",r:"jukkai",a:"10 kali",kj:"十回",n:"じゅう + かい → じゅっかい (konsonan ganda)."}
]},

"〜かい (Lantai Gedung)": { rows: [
{k:"いっかい",r:"ikkai",a:"lantai 1",kj:"一階",n:"Kanji beda dari 回 (kali) meski bacanya sama! いち + かい → いっかい."},
{k:"にかい",r:"nikai",a:"lantai 2",kj:"二階",n:"に + かい, tidak berubah."},
{k:"さんがい",r:"sangai",a:"lantai 3",kj:"三階",n:"PENGECUALIAN PENTING! Bukan さんかい — bunyinya berubah jadi さんがい (rendaku). Beda dengan counter 'kali' yang tetap さんかい."},
{k:"よんかい",r:"yonkai",a:"lantai 4",kj:"四階",n:"よん + かい, tidak berubah."},
{k:"ごかい",r:"gokai",a:"lantai 5",kj:"五階",n:"ご + かい, tidak berubah."},
{k:"ろっかい",r:"rokkai",a:"lantai 6",kj:"六階",n:"ろく + かい → ろっかい (konsonan ganda)."},
{k:"ななかい",r:"nanakai",a:"lantai 7",kj:"七階",n:"なな + かい, tidak berubah."},
{k:"はっかい",r:"hakkai",a:"lantai 8",kj:"八階",n:"はち + かい → はっかい (konsonan ganda)."},
{k:"きゅうかい",r:"kyuukai",a:"lantai 9",kj:"九階",n:"きゅう + かい, tidak berubah."},
{k:"じゅっかい",r:"jukkai",a:"lantai 10",kj:"十階",n:"じゅう + かい → じゅっかい (konsonan ganda)."}
]},

"〜こ (Benda Kecil, Umumnya Bulat)": { rows: [
{k:"いっこ",r:"ikko",a:"1 buah",kj:"一個",n:"いち + こ → いっこ. Untuk benda kecil seperti apel, telur, batu, kue, permen — alternatif lebih modern dari 〜つ. Juga dipakai khusus biji-bijian (kacang, biji kopi)."},
{k:"にこ",r:"niko",a:"2 buah",kj:"二個",n:"に + こ, tidak berubah."},
{k:"さんこ",r:"sanko",a:"3 buah",kj:"三個",n:"さん + こ, tidak berubah."},
{k:"よんこ",r:"yonko",a:"4 buah",kj:"四個",n:"よん + こ, tidak berubah."},
{k:"ごこ",r:"goko",a:"5 buah",kj:"五個",n:"ご + こ, tidak berubah."},
{k:"ろっこ",r:"rokko",a:"6 buah",kj:"六個",n:"ろく + こ → ろっこ (konsonan ganda)."},
{k:"ななこ",r:"nanako",a:"7 buah",kj:"七個",n:"なな + こ, tidak berubah."},
{k:"はっこ",r:"hakko",a:"8 buah",kj:"八個",n:"はち + こ → はっこ (konsonan ganda)."},
{k:"きゅうこ",r:"kyuuko",a:"9 buah",kj:"九個",n:"きゅう + こ, tidak berubah."},
{k:"じゅっこ",r:"jukko",a:"10 buah",kj:"十個",n:"じゅう + こ → じゅっこ (konsonan ganda)."}
]},

"〜そく (Pasang Alas Kaki)": { rows: [
{k:"いっそく",r:"issoku",a:"1 pasang",kj:"一足",n:"いち + そく → いっそく. Khusus untuk benda berpasangan yang dipakai di kaki: sepatu, kaos kaki, sandal."},
{k:"にそく",r:"nisoku",a:"2 pasang",kj:"二足",n:"に + そく, tidak berubah."},
{k:"さんぞく",r:"sanzoku",a:"3 pasang",kj:"三足",n:"さん + そく → さんぞく (berubah jadi ぞく)."},
{k:"よんそく",r:"yonsoku",a:"4 pasang",kj:"四足",n:"よん + そく, tidak berubah."},
{k:"ごそく",r:"gosoku",a:"5 pasang",kj:"五足",n:"ご + そく, tidak berubah."},
{k:"ろくそく",r:"rokusoku",a:"6 pasang",kj:"六足",n:"ろく + そく, tidak berubah."},
{k:"ななそく",r:"nanasoku",a:"7 pasang",kj:"七足",n:"なな + そく, tidak berubah."},
{k:"はっそく",r:"hassoku",a:"8 pasang",kj:"八足",n:"はち + そく → はっそく (konsonan ganda)."},
{k:"きゅうそく",r:"kyuusoku",a:"9 pasang",kj:"九足",n:"きゅう + そく, tidak berubah."},
{k:"じゅっそく",r:"jussoku",a:"10 pasang",kj:"十足",n:"じゅう + そく → じゅっそく (konsonan ganda)."}
]},

"〜ふうふ (Pasangan Suami-Istri)": { rows: [
{k:"いっぷうふ",r:"ippuufu",a:"1 pasang suami-istri",kj:"一夫婦",n:"Khusus menghitung pasangan suami-istri, bukan pasangan benda biasa. Jarang dipakai dengan angka — biasanya cukup disebut namanya langsung."},
{k:"にふうふ",r:"nifuufu",a:"2 pasang suami-istri",kj:"二夫婦",n:"に + ふうふ. Dipakai saat membicarakan beberapa pasangan sekaligus."},
{k:"さんふうふ",r:"sanfuufu",a:"3 pasang suami-istri",kj:"三夫婦",n:"さん + ふうふ."},
{k:"ごふうふ",r:"gofuufu",a:"beberapa pasang suami-istri",kj:"ご夫婦",n:"'Go-fuufu' — dengan prefiks ご (bukan angka 5!) berarti sapaan sopan untuk 'pasangan suami-istri (Anda)'. Beda pemakaian dari angka murni."}
]},

"〜けん (Unit / Rumah / Bangunan)": { rows: [
{k:"いっけん",r:"ikken",a:"1 unit (rumah/toko)",kj:"一軒",n:"いち + けん → いっけん. Untuk menghitung rumah, toko, atau bangunan berdiri sendiri."},
{k:"にけん",r:"niken",a:"2 unit",kj:"二軒",n:"に + けん, tidak berubah."},
{k:"さんげん",r:"sangen",a:"3 unit",kj:"三軒",n:"さん + けん → さんげん (berubah jadi げん)."},
{k:"よんけん",r:"yonken",a:"4 unit",kj:"四軒",n:"よん + けん, tidak berubah."},
{k:"ごけん",r:"goken",a:"5 unit",kj:"五軒",n:"ご + けん, tidak berubah."},
{k:"ろっけん",r:"rokken",a:"6 unit",kj:"六軒",n:"ろく + けん → ろっけん (konsonan ganda)."},
{k:"ななけん",r:"nanaken",a:"7 unit",kj:"七軒",n:"なな + けん, tidak berubah."},
{k:"はっけん",r:"hakken",a:"8 unit",kj:"八軒",n:"はち + けん → はっけん (konsonan ganda)."},
{k:"きゅうけん",r:"kyuuken",a:"9 unit",kj:"九軒",n:"きゅう + けん, tidak berubah."},
{k:"じゅっけん",r:"jukken",a:"10 unit",kj:"十軒",n:"じゅう + けん → じゅっけん (konsonan ganda)."}
]},

"〜ほん (Batang, Benda Kurus & Panjang)": { rows: [
{k:"いっぽん",r:"ippon",a:"1 batang",kj:"一本",n:"いち + ほん → いっぽん. Untuk pensil, botol, pohon, jalan, tali."},
{k:"にほん",r:"nihon",a:"2 batang",kj:"二本",n:"に + ほん, tidak berubah. (Catatan: bentuk ini sama tulisannya dengan 'Nihon' = Jepang, tapi beda konteks!)"},
{k:"さんぼん",r:"sanbon",a:"3 batang",kj:"三本",n:"さん + ほん → さんぼん (berubah jadi ぼん)."},
{k:"よんほん",r:"yonhon",a:"4 batang",kj:"四本",n:"よん + ほん, tidak berubah."},
{k:"ごほん",r:"gohon",a:"5 batang",kj:"五本",n:"ご + ほん, tidak berubah."},
{k:"ろっぽん",r:"roppon",a:"6 batang",kj:"六本",n:"ろく + ほん → ろっぽん (konsonan ganda + berubah bunyi). Nama daerah Roppongi di Tokyo berasal dari kata ini!"},
{k:"ななほん",r:"nanahon",a:"7 batang",kj:"七本",n:"なな + ほん, tidak berubah."},
{k:"はっぽん",r:"happon",a:"8 batang",kj:"八本",n:"はち + ほん → はっぽん (konsonan ganda + berubah bunyi)."},
{k:"きゅうほん",r:"kyuuhon",a:"9 batang",kj:"九本",n:"きゅう + ほん, tidak berubah."},
{k:"じゅっぽん",r:"juppon",a:"10 batang",kj:"十本",n:"じゅう + ほん → じゅっぽん (konsonan ganda + berubah bunyi)."}
]},

"〜はい (Gelas / Cangkir, Isi Cairan)": { rows: [
{k:"いっぱい",r:"ippai",a:"1 gelas",kj:"一杯",n:"いち + はい → いっぱい. Menghitung isi wadah berisi cairan: air, kopi, nasi di mangkuk. 'Ippai' juga berarti 'penuh' secara umum."},
{k:"にはい",r:"nihai",a:"2 gelas",kj:"二杯",n:"に + はい, tidak berubah."},
{k:"さんばい",r:"sanbai",a:"3 gelas",kj:"三杯",n:"さん + はい → さんばい (berubah jadi ばい)."},
{k:"よんはい",r:"yonhai",a:"4 gelas",kj:"四杯",n:"よん + はい, tidak berubah."},
{k:"ごはい",r:"gohai",a:"5 gelas",kj:"五杯",n:"ご + はい, tidak berubah."},
{k:"ろっぱい",r:"roppai",a:"6 gelas",kj:"六杯",n:"ろく + はい → ろっぱい (konsonan ganda + berubah bunyi)."},
{k:"ななはい",r:"nanahai",a:"7 gelas",kj:"七杯",n:"なな + はい, tidak berubah."},
{k:"はっぱい",r:"happai",a:"8 gelas",kj:"八杯",n:"はち + はい → はっぱい (konsonan ganda + berubah bunyi)."},
{k:"きゅうはい",r:"kyuuhai",a:"9 gelas",kj:"九杯",n:"きゅう + はい, tidak berubah."},
{k:"じゅっぱい",r:"juppai",a:"10 gelas",kj:"十杯",n:"じゅう + はい → じゅっぱい (konsonan ganda + berubah bunyi)."}
]},

"〜ひき (Ekor, Hewan Kecil)": { rows: [
{k:"いっぴき",r:"ippiki",a:"1 ekor",kj:"一匹",n:"いち + ひき → いっぴき. Untuk kucing, anjing, ikan, serangga — hewan kecil-sedang."},
{k:"にひき",r:"nihiki",a:"2 ekor",kj:"二匹",n:"に + ひき, tidak berubah."},
{k:"さんびき",r:"sanbiki",a:"3 ekor",kj:"三匹",n:"さん + ひき → さんびき (berubah jadi びき)."},
{k:"よんひき",r:"yonhiki",a:"4 ekor",kj:"四匹",n:"よん + ひき, tidak berubah."},
{k:"ごひき",r:"gohiki",a:"5 ekor",kj:"五匹",n:"ご + ひき, tidak berubah."},
{k:"ろっぴき",r:"roppiki",a:"6 ekor",kj:"六匹",n:"ろく + ひき → ろっぴき (konsonan ganda + berubah bunyi)."},
{k:"ななひき",r:"nanahiki",a:"7 ekor",kj:"七匹",n:"なな + ひき, tidak berubah."},
{k:"はっぴき",r:"happiki",a:"8 ekor",kj:"八匹",n:"はち + ひき → はっぴき (konsonan ganda + berubah bunyi)."},
{k:"きゅうひき",r:"kyuuhiki",a:"9 ekor",kj:"九匹",n:"きゅう + ひき, tidak berubah."},
{k:"じゅっぴき",r:"juppiki",a:"10 ekor",kj:"十匹",n:"じゅう + ひき → じゅっぴき (konsonan ganda + berubah bunyi)."}
]},

"〜とう (Ekor, Hewan Besar)": { rows: [
{k:"いっとう",r:"ittou",a:"1 ekor (hewan besar)",kj:"一頭",n:"いち + とう → いっとう. Untuk sapi, gajah, kuda, paus — hewan berukuran besar."},
{k:"にとう",r:"nitou",a:"2 ekor",kj:"二頭",n:"に + とう, tidak berubah."},
{k:"さんとう",r:"santou",a:"3 ekor",kj:"三頭",n:"さん + とう, tidak berubah."},
{k:"よんとう",r:"yontou",a:"4 ekor",kj:"四頭",n:"よん + とう, tidak berubah."},
{k:"ごとう",r:"gotou",a:"5 ekor",kj:"五頭",n:"ご + とう, tidak berubah."},
{k:"ろくとう",r:"rokutou",a:"6 ekor",kj:"六頭",n:"ろく + とう, tidak berubah."},
{k:"ななとう",r:"nanatou",a:"7 ekor",kj:"七頭",n:"なな + とう, tidak berubah."},
{k:"はっとう",r:"hattou",a:"8 ekor",kj:"八頭",n:"はち + とう → はっとう (konsonan ganda)."},
{k:"きゅうとう",r:"kyuutou",a:"9 ekor",kj:"九頭",n:"きゅう + とう, tidak berubah."},
{k:"じゅっとう",r:"juttou",a:"10 ekor",kj:"十頭",n:"じゅう + とう → じゅっとう (konsonan ganda)."}
]},

"〜わ (Ekor, Burung / Unggas)": { rows: [
{k:"いちわ",r:"ichiwa",a:"1 ekor (burung)",kj:"一羽",n:"いち + わ, tidak berubah. Khusus untuk burung dan unggas. 'Wa' juga berarti 'sayap'."},
{k:"にわ",r:"niwa",a:"2 ekor",kj:"二羽",n:"に + わ, tidak berubah. (Catatan: sama tulisannya dengan 'niwa' = halaman/taman, tapi beda konteks!)"},
{k:"さんわ／さんば",r:"sanwa / sanba",a:"3 ekor",kj:"三羽",n:"さん + わ, bisa berubah jadi さんば tergantung dialek/kebiasaan bicara."},
{k:"よんわ",r:"yonwa",a:"4 ekor",kj:"四羽",n:"よん + わ, tidak berubah."},
{k:"ごわ",r:"gowa",a:"5 ekor",kj:"五羽",n:"ご + わ, tidak berubah."},
{k:"ろくわ",r:"rokuwa",a:"6 ekor",kj:"六羽",n:"ろく + わ, tidak berubah."},
{k:"ななわ",r:"nanawa",a:"7 ekor",kj:"七羽",n:"なな + わ, tidak berubah."},
{k:"はちわ",r:"hachiwa",a:"8 ekor",kj:"八羽",n:"はち + わ, tidak berubah."},
{k:"きゅうわ",r:"kyuuwa",a:"9 ekor",kj:"九羽",n:"きゅう + わ, tidak berubah."},
{k:"じゅうわ",r:"juuwa",a:"10 ekor",kj:"十羽",n:"じゅう + わ, tidak berubah. Counter ini termasuk yang paling sedikit perubahan bunyinya."}
]},

"〜ど (Derajat, Suhu / Sudut)": { rows: [
{k:"いちど",r:"ichido",a:"1 derajat",kj:"一度",n:"Untuk suhu (cuaca, demam) dan sudut. 'Ichido' juga dipakai untuk 'kali' dalam konteks formal: 'sekali'."},
{k:"にど",r:"nido",a:"2 derajat",kj:"二度",n:"に + ど, tidak berubah."},
{k:"さんど",r:"sando",a:"3 derajat",kj:"三度",n:"さん + ど, tidak berubah."},
{k:"よんど",r:"yondo",a:"4 derajat",kj:"四度",n:"よん + ど, tidak berubah."},
{k:"ごど",r:"godo",a:"5 derajat",kj:"五度",n:"ご + ど, tidak berubah."},
{k:"ろくど",r:"rokudo",a:"6 derajat",kj:"六度",n:"ろく + ど, tidak berubah."},
{k:"ななど",r:"nanado",a:"7 derajat",kj:"七度",n:"なな + ど, tidak berubah."},
{k:"はちど",r:"hachido",a:"8 derajat",kj:"八度",n:"はち + ど, tidak berubah."},
{k:"きゅうど",r:"kyuudo",a:"9 derajat",kj:"九度",n:"きゅう + ど, tidak berubah."},
{k:"じゅうど",r:"juudo",a:"10 derajat",kj:"十度",n:"じゅう + ど, tidak berubah. 'Nando' (何度) = berapa derajat, atau berapa kali dalam konteks formal."}
]}

};

// ─── DATA: PARTIKEL ───
const PT=[
{sym:"は",r:"wa",name:"Topik (topic marker)",
desc:"Menandai topik kalimat. Ditulis 'ha' tapi dibaca 'wa'.",
ex:[
{jp:"わたし<b class='ph'>は</b>がくせいです。",id:"Saya adalah siswa."},
{jp:"これ<b class='ph'>は</b>ほんです。",id:"Ini adalah buku."},
{jp:"きょう<b class='ph'>は</b>さむいです。",id:"Hari ini dingin."}]},
{sym:"が",r:"ga",name:"Subjek (subject marker)",
desc:"Menandai subjek gramatikal. Dipakai saat subjek baru, menekankan siapa yang melakukan, atau kalimat eksistensial.",
ex:[
{jp:"ねこ<b class='ph'>が</b>います。",id:"Ada kucing."},
{jp:"だれ<b class='ph'>が</b>きましたか？",id:"Siapa yang datang?"},
{jp:"わたし<b class='ph'>が</b>やります。",id:"Saya (lah) yang akan melakukannya."}]},
{sym:"を",r:"wo/o",name:"Objek (object marker)",
desc:"Menandai objek langsung dari kata kerja transitif.",
ex:[
{jp:"ほん<b class='ph'>を</b>よみます。",id:"Membaca buku."},
{jp:"おちゃ<b class='ph'>を</b>のみます。",id:"Minum teh."},
{jp:"えき<b class='ph'>を</b>でます。",id:"Keluar dari stasiun."}]},
{sym:"に",r:"ni",name:"Tujuan / Lokasi / Waktu",
desc:"Serba guna: tujuan gerakan, lokasi keberadaan, titik waktu, atau penerima aksi.",
ex:[
{jp:"がっこう<b class='ph'>に</b>いきます。",id:"Pergi ke sekolah."},
{jp:"つくえのうえ<b class='ph'>に</b>あります。",id:"Ada di atas meja."},
{jp:"さんじ<b class='ph'>に</b>あいましょう。",id:"Mari bertemu jam 3."}]},
{sym:"で",r:"de",name:"Tempat Aksi / Cara / Alat",
desc:"Tempat suatu aksi berlangsung, alat/cara yang digunakan.",
ex:[
{jp:"こうえん<b class='ph'>で</b>あそびます。",id:"Bermain di taman."},
{jp:"でんしゃ<b class='ph'>で</b>いきます。",id:"Pergi dengan kereta."},
{jp:"にほんご<b class='ph'>で</b>はなします。",id:"Berbicara dalam bahasa Jepang."}]},
{sym:"へ",r:"e",name:"Arah (direction marker)",
desc:"Menunjukkan arah gerakan. Ditulis 'he' tapi dibaca 'e'.",
ex:[
{jp:"とうきょう<b class='ph'>へ</b>いきます。",id:"Pergi menuju Tokyo."},
{jp:"うち<b class='ph'>へ</b>かえります。",id:"Pulang ke rumah."},
{jp:"みぎ<b class='ph'>へ</b>まがります。",id:"Belok ke kanan."}]},
{sym:"の",r:"no",name:"Kepemilikan / Penghubung",
desc:"Seperti apostrophe-s (') dalam bahasa Inggris. Menghubungkan dua kata benda.",
ex:[
{jp:"わたし<b class='ph'>の</b>ほん",id:"buku saya"},
{jp:"にほん<b class='ph'>の</b>たべもの",id:"makanan Jepang"},
{jp:"がっこう<b class='ph'>の</b>せんせい",id:"guru sekolah"}]},
{sym:"と",r:"to",name:"Dan / Bersama",
desc:"Menghubungkan dua kata benda (dan), atau menyatakan menemani (bersama).",
ex:[
{jp:"ねこ<b class='ph'>と</b>いぬ",id:"kucing dan anjing"},
{jp:"ともだち<b class='ph'>と</b>いきます。",id:"Pergi bersama teman."},
{jp:"おちゃ<b class='ph'>と</b>コーヒー",id:"teh dan kopi"}]},
{sym:"も",r:"mo",name:"Juga / Pun",
desc:"Berarti 'juga' atau 'pun'. Menggantikan partikel は, が, atau を.",
ex:[
{jp:"わたし<b class='ph'>も</b>がくせいです。",id:"Saya juga siswa."},
{jp:"これ<b class='ph'>も</b>いいです。",id:"Ini juga bagus."},
{jp:"なに<b class='ph'>も</b>たべません。",id:"Tidak makan apapun."}]},
{sym:"か",r:"ka",name:"Partikel Tanya",
desc:"Di akhir kalimat untuk mengubahnya menjadi pertanyaan.",
ex:[
{jp:"これはほんです<b class='ph'>か</b>？",id:"Apakah ini buku?"},
{jp:"いきます<b class='ph'>か</b>？",id:"Apakah akan pergi?"},
{jp:"なんじです<b class='ph'>か</b>？",id:"Jam berapa?"}]},
{sym:"ね",r:"ne",name:"Konfirmasi / Persetujuan",
desc:"Di akhir kalimat untuk meminta konfirmasi. Seperti 'kan?' atau 'ya?' dalam Bahasa Indonesia.",
ex:[
{jp:"いいてんきです<b class='ph'>ね</b>。",id:"Cuacanya bagus ya."},
{jp:"むずかしいです<b class='ph'>ね</b>。",id:"Susah ya."},
{jp:"そうです<b class='ph'>ね</b>。",id:"Begitu ya."}]},
{sym:"よ",r:"yo",name:"Penegasan / Informasi Baru",
desc:"Menyatakan informasi yang diyakini pembicara. Seperti 'lho' atau 'tahu tidak' dalam Bahasa Indonesia.",
ex:[
{jp:"これはおいしいです<b class='ph'>よ</b>。",id:"Ini enak lho."},
{jp:"もうじかんです<b class='ph'>よ</b>。",id:"Sudah waktunya lho."},
{jp:"だいじょうぶです<b class='ph'>よ</b>。",id:"Tidak apa-apa kok."}]},
{sym:"から",r:"kara",name:"Dari / Karena",
desc:"(1) titik awal dalam ruang atau waktu ('dari'), (2) alasan ('karena').",
ex:[
{jp:"にほん<b class='ph'>から</b>きました。",id:"Datang dari Jepang."},
{jp:"くじ<b class='ph'>から</b>はじまります。",id:"Mulai dari jam 9."},
{jp:"つかれた<b class='ph'>から</b>、ねます。",id:"Karena lelah, tidur."}]},
{sym:"まで",r:"made",name:"Sampai / Hingga",
desc:"Batas akhir dalam ruang atau waktu. Sering berpasangan dengan 'kara'.",
ex:[
{jp:"えき<b class='ph'>まで</b>あるきます。",id:"Berjalan kaki sampai stasiun."},
{jp:"くじ<b class='ph'>まで</b>はたらきます。",id:"Bekerja sampai jam 9."},
{jp:"ここ<b class='ph'>まで</b>でいいです。",id:"Sampai sini saja cukup."}]}
];

// ─── DATA: PARTIKEL LANJUTAN & POLA GRAMATIKAL ───
// Dipisah dari PT (partikel dasar) dan KT (kotoba)
// karena statusnya berbeda: ada yg murni partikel, ada konjungsi, ada pola tata bahasa.
const PT_ADV = {
  "Partikel (助詞)": [
    {sym:"だけ",r:"dake",kind:"Partikel (助詞 / joshi)",
    desc:"Membatasi pada satu hal saja. Tidak ada nuansa kekurangan seperti しか.",
    ex:[
      {jp:"これ<b class='ph'>だけ</b>ください。",id:"Tolong berikan ini saja."},
      {jp:"すこし<b class='ph'>だけ</b>たべた。",id:"Makan sedikit saja."},
      {jp:"かれ<b class='ph'>だけ</b>がしっている。",id:"Hanya dia yang tahu."}]},
    {sym:"しか",r:"shika",kind:"Partikel (係助詞 / kakarijoshi)",
    desc:"Hanya... (dengan nuansa kekurangan). Selalu diikuti bentuk negatif.",
    ex:[
      {jp:"ひゃくえん<b class='ph'>しか</b>ない。",id:"Cuma punya 100 yen (kurang)."},
      {jp:"かれ<b class='ph'>しか</b>こなかった。",id:"Yang datang hanya dia."},
      {jp:"これ<b class='ph'>しか</b>できない。",id:"Ini satu-satunya yang bisa kulakukan."}]},
    {sym:"でも",r:"demo",kind:"Partikel (係助詞)",
    desc:"Multi-fungsi: (1) tapi/namun di awal kalimat, (2) bahkan ~pun, (3) atau semacamnya.",
    ex:[
      {jp:"こども<b class='ph'>でも</b>わかる。",id:"Bahkan anak kecil pun mengerti."},
      {jp:"おちゃ<b class='ph'>でも</b>のみますか？",id:"Mau minum teh atau apa gitu?"},
      {jp:"<b class='ph'>でも</b>、むずかしいです。",id:"Tapi, itu sulit."}]},
    {sym:"とか",r:"toka",kind:"Partikel (並立助詞 / heiretsu joshi)",
    desc:"Menyebutkan contoh dari daftar tidak lengkap. Lebih santai dari や.",
    ex:[
      {jp:"ねこ<b class='ph'>とか</b>いぬ<b class='ph'>とか</b>がすきです。",id:"Suka kucing, anjing, dan lain-lain."},
      {jp:"えいが<b class='ph'>とか</b>みたい。",id:"Pengen nonton film atau semacamnya."},
      {jp:"パン<b class='ph'>とか</b>かいてきて。",id:"Beliin roti atau apa gitu ya."}]},
    {sym:"し",r:"shi",kind:"Partikel (接続助詞 / setsuzoku joshi)",
    desc:"Menggabungkan beberapa alasan/fakta. Menyiratkan masih ada alasan lain yang tidak disebutkan.",
    ex:[
      {jp:"やすい<b class='ph'>し</b>、おいしい<b class='ph'>し</b>、いいです。",id:"Murah, enak, pokoknya bagus."},
      {jp:"あめだ<b class='ph'>し</b>、さむい<b class='ph'>し</b>、いきたくない。",id:"Hujan, dingin, pokoknya nggak mau pergi."},
      {jp:"かれはやさしい<b class='ph'>し</b>、かっこいい。",id:"Dia baik hati, lagipula tampan."}]}
  ],
  "Konjungsi Gramatikal (接続助詞)": [
    {sym:"ので",r:"node",kind:"Konjungsi gramatikal (接続助詞)",
    desc:"Menyatakan alasan dengan nada sopan/objektif. Lebih halus dari から.",
    ex:[
      {jp:"あめな<b class='ph'>ので</b>、いきません。",id:"Karena hujan, saya tidak pergi."},
      {jp:"びょうき<b class='ph'>ので</b>、やすみます。",id:"Karena sakit, saya absen."},
      {jp:"じかんがない<b class='ph'>ので</b>、はやくして。",id:"Karena tidak ada waktu, tolong cepat."}]},
    {sym:"のに",r:"noni",kind:"Konjungsi gramatikal (接続助詞)",
    desc:"Menyatakan kontras dengan nuansa kecewa atau tidak terduga. 'Padahal...'",
    ex:[
      {jp:"べんきょうした<b class='ph'>のに</b>、おちた。",id:"Padahal sudah belajar, tetap gagal."},
      {jp:"たかい<b class='ph'>のに</b>、まずい。",id:"Padahal mahal, tapi tidak enak."},
      {jp:"はやくきた<b class='ph'>のに</b>、もうおわった。",id:"Padahal datang lebih awal, sudah selesai."}]},
    {sym:"ながら",r:"nagara",kind:"Partikel penghubung (接続助詞)",
    desc:"Dua aksi berlangsung bersamaan oleh subjek yang sama. 'Sambil ~'",
    ex:[
      {jp:"おんがくをきき<b class='ph'>ながら</b>、べんきょうする。",id:"Belajar sambil mendengarkan musik."},
      {jp:"あるき<b class='ph'>ながら</b>、はなす。",id:"Berbicara sambil berjalan."},
      {jp:"テレビをみ<b class='ph'>ながら</b>、たべる。",id:"Makan sambil nonton TV."}]}
  ],
  "Pola Tata Bahasa (文型)": [
    {sym:"てから",r:"te kara",kind:"Pola tata bahasa (文型)",
    desc:"Gabungan bentuk て + から. Aksi A selesai dulu, baru aksi B. Bukan partikel tunggal.",
    ex:[
      {jp:"しゅくだいを し<b class='ph'>てから</b>、あそぶ。",id:"Setelah mengerjakan PR, baru bermain."},
      {jp:"てをあらっ<b class='ph'>てから</b>、たべる。",id:"Setelah cuci tangan, baru makan."},
      {jp:"そつぎょうし<b class='ph'>てから</b>、はたらく。",id:"Setelah lulus, baru bekerja."}]},
    {sym:"～たり～たり",r:"~tari ~tari",kind:"Pola tata bahasa (文型)",
    desc:"Partikel たり dipakai dua kali untuk memberi contoh aktivitas bergantian/tidak berurutan.",
    ex:[
      {jp:"よんだり かいたり した。",id:"Melakukan hal seperti membaca dan menulis."},
      {jp:"あめがふったり やんだり している。",id:"Hujan kadang turun, kadang berhenti."},
      {jp:"うたったり おどったり たのしんだ。",id:"Bernyanyi, menari, pokoknya bersenang-senang."}]}
  ]
};

// ─────────────────────────────────────────────────────
// DATA: BUKU — kosakata per bab dari buku pelajaran
// ─────────────────────────────────────────────────────
const BUKU = {

bab1: {
  "Sapaan & Ekspresi Dasar": { rows: [
    {k:"おはようございます",r:"ohayou gozaimasu",a:"Selamat pagi"},
    {k:"こんにちは",r:"konnichiwa",a:"Selamat siang / sore"},
    {k:"こんばんは",r:"konbanwa",a:"Selamat malam"},
    {k:"おやすみなさい",r:"oyasuminasai",a:"Selamat tidur",n:"Dipakai saat berpisah di malam hari atau sebelum tidur. Santai: おやすみ."},
    {k:"じゃ、また",r:"ja, mata",a:"Sampai jumpa lagi"},
    {k:"ありがとうございます",r:"arigatou gozaimasu",a:"Terima kasih"},
    {k:"すみません",r:"sumimasen",a:"Maaf / Permisi"},
    {k:"よろしくおねがいします",r:"yoroshiku onegaishimasu",a:"Tolong / Mohon bantuannya"},
    {k:"おつかれさまです",r:"otsukaresama desu",a:"Terima kasih atas kerja kerasnya"},
    {k:"おさきにしつれいします",r:"osakini shitsureishimasu",a:"Permisi, saya pulang duluan"},
    {k:"めいし",r:"meishi",a:"Kartu nama"},
    {k:"あくしゅ（します）",r:"akushu (shimasu)",a:"Berjabat tangan"},
    {k:"わたし",r:"watashi",a:"Saya"},
    {k:"なまえ",r:"namae",a:"Nama"},
    {k:"はじめまして",r:"hajimemashite",a:"Perkenalkan"},
    {k:"あのう",r:"anou",a:"Anu"},
    {k:"こちらこそ",r:"kochira koso",a:"Sama-sama"},
    {k:"こちらこそよろしくおねがいします",r:"kochira koso yoroshiku onegaishimasu",a:"Saya juga mohon bantuannya",n:"Gabungan こちらこそ (sama-sama) + よろしくおねがいします. Respons lengkap dan sopan saat seseorang mengucapkan よろしくおねがいします duluan."}
  ]},
  "Negara & Bangsa": { rows: [
    {k:"にほん",r:"nihon",a:"Jepang"},
    {k:"アメリカ",r:"amerika",a:"Amerika Serikat"},
    {k:"イタリア",r:"itaria",a:"Italia"},
    {k:"オーストラリア",r:"oosutoraria",a:"Australia"},
    {k:"かんこく",r:"kankoku",a:"Korea Selatan"},
    {k:"ちゅうごく",r:"chuugoku",a:"China"},
    {k:"タイ",r:"tai",a:"Thailand"},
    {k:"ロシア",r:"roshia",a:"Rusia"},
    {k:"〜じん",r:"~jin",a:"Orang ~"},
    {k:"どちら",r:"dochira",a:"Yang mana, di mana?"},
    {k:"くに",r:"kuni",a:"Negara"},
    {k:"おくにはどちらですか。",r:"okuni wa dochira desu ka?",a:"Anda berasal dari negara mana?",n:"Pola kalimat lengkap. Lihat juga Bunpou → Identitas Diri untuk pola serupa lainnya."}
  ]},
  "Profesi & Sekolah": { rows: [
    {k:"（お）しごと",r:"(o)shigoto",a:"Pekerjaan, profesi"},
    {k:"がくせい",r:"gakusei",a:"Siswa"},
    {k:"せんせい",r:"sensei",a:"Guru, profesor, dokter (panggilan)"},
    {k:"きょうし",r:"kyoushi",a:"Guru (profesi)"},
    {k:"かいしゃいん",r:"kaishain",a:"Karyawan Perusahaan"},
    {k:"しゃいん",r:"shain",a:"Karyawan"},
    {k:"〜さん",r:"~san",a:"Sdr./Sdri/Pak/Bu/Tuan/Nyonya"},
    {k:"そうですか",r:"sou desu ka",a:"Oh, begitu, ya."},
    {k:"はい",r:"hai",a:"Ya"},
    {k:"いいえ",r:"iie",a:"Tidak, bukan"},
    {k:"こうこう",r:"koukou",a:"SMA"},
    {k:"だいがく",r:"daigaku",a:"Universitas"},
    {k:"にほんごがっこう",r:"nihongo gakkou",a:"Sekolah Bahasa Jepang"}
  ]},
  "Data Diri & Hobi": { rows: [
    {k:"〜さい",r:"~sai",a:"Umur~"},
    {k:"たんじょうび",r:"tanjoubi",a:"Hari Ulang Tahun"},
    {k:"〜がつ",r:"~gatsu",a:"Bulan~"},
    {k:"〜にち",r:"~nichi",a:"Tanggal~"},
    {k:"いつ",r:"itsu",a:"Kapan"},
    {k:"しゅみ",r:"shumi",a:"Hobi"},
    {k:"スポーツ",r:"supootsu",a:"Olahraga"},
    {k:"サッカー",r:"sakkaa",a:"Sepak bola"},
    {k:"テニス",r:"tenisu",a:"Tenis"},
    {k:"すいえい",r:"suiei",a:"Renang"},
    {k:"えいが",r:"eiga",a:"Film"},
    {k:"おんがく",r:"ongaku",a:"Musik"},
    {k:"どくしょ",r:"dokusho",a:"Membaca buku"},
    {k:"りょこう",r:"ryokou",a:"Wisata, jalan-jalan"},
    {k:"りょうり",r:"ryouri",a:"Masak, masakan"},
    {k:"なん",r:"nan",a:"Apa"}
  ]}
},

bab2: {
  "Tempat & Fasilitas Umum": { rows: [
    {k:"きつえんじょ",r:"kitsuenjo",a:"Area untuk merokok"},
    {k:"トイレ",r:"toire",a:"Toilet"},
    {k:"きっさてん",r:"kissaten",a:"Kafe, warung kopi"},
    {k:"スーパー",r:"suupaa",a:"Super market, pasar swalayan"},
    {k:"１００えんしょっぷ",r:"hyaku en shoppu",a:"Toko serba 100 yen"},
    {k:"レストラン",r:"resutoran",a:"Restoran"},
    {k:"ちか",r:"chika",a:"Bawah tanah, basement"},
    {k:"ほん",r:"hon",a:"Buku"},
    {k:"ケーキ",r:"keeki",a:"Kue"},
    {k:"パン",r:"pan",a:"Roti"},
    {k:"てんいん",r:"ten'in",a:"Karyawan/pegawai toko"},
    {k:"〜かい",r:"~kai",a:"Lantai~"},
    {k:"〜や",r:"~ya",a:"Toko~"},
    {k:"くつや",r:"kutsuya",a:"Toko Sepatu"},
    {k:"でんき",r:"denki",a:"Alat elektronik"},
    {k:"ビル",r:"biru",a:"Gedung"},
    {k:"ここ",r:"koko",a:"Di sini"},
    {k:"そこ",r:"soko",a:"Di situ"},
    {k:"あそこ",r:"asoko",a:"Di sana"},
    {k:"どこ",r:"doko",a:"Di mana"},
    {k:"インフォメーション",r:"infomeeshon",a:"Bagian informasi"},
    {k:"エスカレーター",r:"esukareetaa",a:"Eskalator, tangga berjalan"},
    {k:"エレベーター",r:"erebeetaa",a:"Elevator, lift"},
    {k:"レジ",r:"reji",a:"Kasir"},
    {k:"ATM（エーティーエム）",r:"eetiiemu",a:"Mesin ATM"},
    {k:"（どうも）ありがとうございます",r:"(doumo) arigatou gozaimasu",a:"Terima kasih (banyak)"}
  ]},
  "Elektronik & Alat Tulis": { rows: [
    {k:"カメラ",r:"kamera",a:"Kamera"},
    {k:"けいたいでんわ",r:"keitai denwa",a:"Ponsel, telepon selular, HP"},
    {k:"でんしじしょ",r:"denshi jisho",a:"Kamus elektronik"},
    {k:"パソコン",r:"pasokon",a:"Laptop, PC"},
    {k:"けしごむ",r:"keshigomu",a:"Karet penghapus"},
    {k:"ペン",r:"pen",a:"Pena"},
    {k:"トイレットペーパー",r:"toiretto peepaa",a:"Tisu toilet"}
  ]},
  "Bahan Makanan": { rows: [
    {k:"あぶら",r:"abura",a:"Minyak goreng"},
    {k:"こめ",r:"kome",a:"Beras"},
    {k:"たまご",r:"tamago",a:"Telur"},
    {k:"みず",r:"mizu",a:"Air"}
  ]},
  "Kata Tunjuk & Harga": { rows: [
    {k:"いらっしゃいませ",r:"irasshaimase",a:"Selamat datang"},
    {k:"これ",r:"kore",a:"Ini (dekat dengan pembicara)"},
    {k:"それ",r:"sore",a:"Itu (dekat dengan lawan bicara)"},
    {k:"あれ",r:"are",a:"Itu (jauh dari lawan bicara dan pembicara)"},
    {k:"〜えん",r:"~en",a:"~yen",kj:"〜円",n:"Satuan mata uang Jepang."},
    {k:"いくら",r:"ikura",a:"Berapa (harga)"},
    {k:"この",r:"kono",a:"~ini"},
    {k:"その",r:"sono",a:"~itu (dekat)"},
    {k:"あの",r:"ano",a:"~itu (jauh)"}
  ]},
  "Pakaian & Daging": { rows: [
    {k:"Ｔシャツ",r:"tii shatsu",a:"Kaos"},
    {k:"にく",r:"niku",a:"Daging"},
    {k:"とりにく",r:"toriniku",a:"Daging ayam"},
    {k:"ぎゅうにく",r:"gyuuniku",a:"Daging sapi"},
    {k:"ぶたにく",r:"butaniku",a:"Daging babi"},
    {k:"さかな",r:"sakana",a:"Ikan"},
    {k:"スープ",r:"suupu",a:"Sup"},
    {k:"とんかつ",r:"tonkatsu",a:"Tonkatsu"},
    {k:"ジュース",r:"juusu",a:"Jus"},
    {k:"イチゴ",r:"ichigo",a:"Stroberi"},
    {k:"リンゴ",r:"ringo",a:"Apel",n:"Kata asli Jepang (林檎)."},
    {k:"やさい",r:"yasai",a:"Sayur-sayuran"},
    {k:"〜ご",r:"~go",a:"Bahasa~"},
    {k:"えいご",r:"eigo",a:"Bahasa Inggris"}
  ]}
},

bab3: {
  "Minuman": { rows: [
    {k:"おちゃ",r:"ocha",a:"Teh Jepang"},
    {k:"こうちゃ",r:"koucha",a:"Teh hitam"},
    {k:"ワイン",r:"wain",a:"Wine, anggur",n:"Serapan 'wine'."},
    {k:"ビール",r:"biiru",a:"Bir",n:"Serapan 'beer'. 'kanpai!' (乾杯) diucapkan sebelum minum bersama."},
    {k:"ドイツ",r:"doitsu",a:"Jerman"},
    {k:"フランス",r:"furansu",a:"Prancis"},
    {k:"インド",r:"indo",a:"India"},
    {k:"インドネシア",r:"indoneshia",a:"Indonesia"},
    {k:"カレー",r:"karee",a:"Kare"},
    {k:"コーヒー",r:"koohii",a:"Kopi",n:"Serapan 'coffee'."},
    {k:"ハンバーグ",r:"hanbaagu",a:"Stik Hamburg, stik daging",n:"Dari 'Hamburg steak', beda dari 'hanbaagaa' (hamburger)."},
    {k:"ごはん／ライス",r:"gohan / raisu",a:"Nasi",n:"ごはん = kata asli. ライス dipakai khusus di restoran gaya Barat."},
    {k:"〜つ",r:"~tsu",a:"~buah (hitungan benda kecil, bulat)"}
  ]},
  "Restoran & Belanja": { rows: [
    {k:"ちゅうもん",r:"chuumon",a:"Pesanan"},
    {k:"さいふ",r:"saifu",a:"Dompet"},
    {k:"ごちそうさまでした",r:"gochisousama deshita",a:"Terima kasih atas hidangannya"},
    {k:"かばん",r:"kaban",a:"Tas"},
    {k:"とけい",r:"tokei",a:"Jam"}
  ]},
  "Waktu & Jam": { rows: [
    {k:"いま",r:"ima",a:"Sekarang"},
    {k:"〜じ",r:"~ji",a:"Jam~",kj:"〜時",n:"Counter jam."},
    {k:"〜ふん／〜ぷん",r:"~fun / ~pun",a:"~menit",kj:"〜分",n:"Counter menit, bunyinya berubah tergantung angka."},
    {k:"〜じはん",r:"~ji han",a:"Jam~lebih 30 menit",kj:"〜時半",n:"Han (半) = setengah. 'Ichiji han' = jam 1:30."},
    {k:"ごぜん",r:"gozen",a:"A.M. (00.00 – 12.00)"},
    {k:"ごご",r:"gogo",a:"P.M. (12.00 – 00.00)"},
    {k:"ひる",r:"hiru",a:"Siang"}
  ]},
  "Tempat & Institusi": { rows: [
    {k:"ぎんこう",r:"ginkou",a:"Bank",kj:"銀行",n:"Gin (perak/uang) + Kou (lembaga)."},
    {k:"たいいくかん",r:"taiikukan",a:"Gedung olahraga",kj:"体育館",n:"Tai (tubuh) + Iku (mendidik) + Kan (gedung)."},
    {k:"としょかん",r:"toshokan",a:"Perpustakaan"},
    {k:"びょういん",r:"byouin",a:"Rumah sakit"},
    {k:"ゆうびんきょく",r:"yuubinkyoku",a:"Kantor pos",kj:"郵便局",n:"Yuubin (pos) + Kyoku (kantor/biro)."}
  ]},
  "Sekolah & Kegiatan": { rows: [
    {k:"じゅぎょう",r:"jugyou",a:"Pelajaran, kelas",kj:"授業",n:"Ju (memberi) + Gyou (pekerjaan/usaha)."},
    {k:"テスト",r:"tesuto",a:"Tes, ulangan",n:"Serapan 'test'."},
    {k:"やすみ",r:"yasumi",a:"Libur"},
    {k:"じかん",r:"jikan",a:"Jam, waktu",kj:"時間",n:"Ji (waktu) + Kan (interval). Merujuk pada durasi/rentang waktu."},
    {k:"スケジュール",r:"sukejuuru",a:"Jadwal",n:"Serapan 'schedule'."},
    {k:"パーティー",r:"paatii",a:"Pesta",n:"Serapan 'party'."},
    {k:"りゅうがくせい",r:"ryuugakusei",a:"Pelajar asing",kj:"留学生",n:"Ryuu (tinggal) + Gaku (belajar) + Sei (orang)."},
    {k:"いちねん",r:"ichinen",a:"Satu tahun",kj:"一年",n:"Ichi (satu) + Nen (tahun)."}
  ]},
  "Kata Kerja Dasar": { rows: [
    {k:"のみます",r:"nomimasu",a:"Meminum, minum"},
    {k:"たべます",r:"tabemasu",a:"Memakan, makan"},
    {k:"します",r:"shimasu",a:"Melakukan, mengerjakan",n:"Kata kerja golongan III (tidak beraturan)."},
    {k:"みます",r:"mimasu",a:"Melihat"}
  ]},
  "Liburan & Kegiatan": { rows: [
    {k:"アルバイト",r:"arubaito",a:"Kerja paruh waktu",n:"Dari bahasa Jerman 'Arbeit' (kerja). Sering disingkat 'baito'."},
    {k:"スキー",r:"sukii",a:"Ski",n:"Serapan 'ski'."},
    {k:"バーベキュー",r:"baabekyuu",a:"Barbeku",n:"Serapan 'barbecue'."},
    {k:"はなび",r:"hanabi",a:"Kembang api",kj:"花火",n:"Hana (bunga) + Bi (api). Harfiah 'bunga api'."},
    {k:"（お）はなみ",r:"(o)hanami",a:"Melihat bunga Sakura",kj:"（お）花見",n:"Hana (bunga) + Mi (melihat)."},
    {k:"（お）まつり",r:"(o)matsuri",a:"Festival",kj:"（お）祭り",n:"Festival tradisional Jepang."},
    {k:"（お）すし",r:"(o)sushi",a:"Sushi",kj:"（お）寿司",n:"Salah satu makanan Jepang paling terkenal di dunia."},
    {k:"いいですね",r:"ii desu ne",a:"Itu bagus, oke",n:"Ungkapan setuju/menyukai sesuatu yang diusulkan lawan bicara."},
    {k:"ホームステイ",r:"hoomusutei",a:"Homestay",n:"Serapan 'homestay'."}
  ]},
  "Alam & Transportasi": { rows: [
    {k:"うみ",r:"umi",a:"Laut"},
    {k:"こうえん",r:"kouen",a:"Taman publik"},
    {k:"バス",r:"basu",a:"Bus",n:"Serapan 'bus'."},
    {k:"ふじさん",r:"fujisan",a:"Gunung Fuji",kj:"富士山",n:"Gunung tertinggi dan paling ikonik di Jepang."},
    {k:"かえります",r:"kaerimasu",a:"Pulang"},
    {k:"いきます",r:"ikimasu",a:"Pergi"},
    {k:"きます",r:"kimasu",a:"Datang"}
  ]},
  "Musim": { rows: [
    {k:"はる",r:"haru",a:"Musim semi"},
    {k:"なつ",r:"natsu",a:"Musim panas"},
    {k:"あき",r:"aki",a:"Musim gugur"},
    {k:"ふゆ",r:"fuyu",a:"Musim dingin"},
    {k:"ひるやすみ",r:"hiruyasumi",a:"Istirahat siang",kj:"昼休み",n:"Hiru (siang) + Yasumi (istirahat)."},
    {k:"〜やすみ",r:"~yasumi",a:"Libur~",kj:"〜休み",n:"natsuyasumi (libur musim panas), fuyuyasumi (libur musim dingin)."},
    {k:"ゴールデンウィーク",r:"goorudenwiiku",a:"Golden week",n:"Serapan 'golden week'. Rangkaian hari libur nasional akhir April-awal Mei."},
    {k:"ほっかいどう",r:"hokkaidou",a:"Hokkaido",kj:"北海道",n:"Pulau paling utara Jepang."},
    {k:"さくら",r:"sakura",a:"Sakura",kj:"桜",n:"Bunga sakura (cherry blossom), simbol nasional Jepang."},
    {k:"（お）べんとう",r:"(o)bentou",a:"Bekal makanan",kj:"（お）弁当",n:"Kotak bekal makanan khas Jepang."}
  ]},
  "Rutinitas Harian": { rows: [
    {k:"あさ",r:"asa",a:"Pagi"},
    {k:"よる",r:"yoru",a:"Malam"},
    {k:"まいにち",r:"mainichi",a:"Setiap hari",kj:"毎日",n:"Mai (setiap) + Nichi (hari)."},
    {k:"まいあさ",r:"maiasa",a:"Setiap pagi",kj:"毎朝",n:"Mai (setiap) + Asa (pagi)."},
    {k:"まいばん",r:"maiban",a:"Setiap malam",kj:"毎晩",n:"Mai (setiap) + Ban (malam)."},
    {k:"あさごはん",r:"asagohan",a:"Sarapan",kj:"朝ご飯",n:"Asa (pagi) + Gohan (nasi/makan)."},
    {k:"ひるごはん",r:"hirugohan",a:"Makan siang",kj:"昼ご飯",n:"Hiru (siang) + Gohan (nasi/makan)."},
    {k:"コンビニ",r:"konbini",a:"Mini market",n:"Singkatan dari 'convenience store'. Buka 24 jam."},
    {k:"ぎゅうにゅう",r:"gyuunyuu",a:"Susu sapi",kj:"牛乳",n:"Gyuu (sapi) + Nyuu (susu)."},
    {k:"サラダ",r:"sarada",a:"Salad",n:"Serapan 'salad'."}
  ]},
  "Media & Belanja": { rows: [
    {k:"しんぶん",r:"shinbun",a:"Koran, surat kabar"},
    {k:"インターネット",r:"intaanetto",a:"Internet",n:"Serapan 'internet'."},
    {k:"よみます",r:"yomimasu",a:"Membaca"},
    {k:"べんきょうします",r:"benkyou shimasu",a:"Belajar, mempelajari"},
    {k:"ききます",r:"kikimasu",a:"Mendengarkan"},
    {k:"シーディー",r:"shiidii",a:"CD",n:"Singkatan 'compact disc' dilafalkan huruf Inggris ala Jepang."},
    {k:"なにも",r:"nanimo",a:"Apa pun",kj:"何も",n:"Nani (apa) + mo (pun/juga). SELALU diikuti bentuk negatif."},
    {k:"うち",r:"uchi",a:"Rumah"},
    {k:"くだもの",r:"kudamono",a:"Buah-buahan"},
    {k:"チーズ",r:"chiizu",a:"Keju",n:"Serapan 'cheese'."}
  ]},
  "Kehidupan Sehari-hari": { rows: [
    {k:"かいます",r:"kaimasu",a:"Membeli",kj:"買います",n:"Kata kerja golongan I. Bentuk kamus: kau."},
    {k:"かいしゃ",r:"kaisha",a:"Perusahaan",kj:"会社",n:"Kai (pertemuan/organisasi) + Sha (perusahaan)."},
    {k:"がっこう",r:"gakkou",a:"Sekolah"},
    {k:"ねます",r:"nemasu",a:"Tidur"},
    {k:"おきます",r:"okimasu",a:"Bangun"},
    {k:"テレビ",r:"terebi",a:"Televisi, TV",n:"Singkatan dari 'terebijon' (television)."},
    {k:"ディーブイディー",r:"diibuidii",a:"DVD",n:"Singkatan 'digital video disc' dilafalkan huruf Inggris ala Jepang."},
    {k:"はたらきます",r:"hatarakimasu",a:"Bekerja"},
    {k:"どこ（へ）も",r:"doko (e) mo",a:"Ke mana pun",n:"Doko (mana) + e (partikel arah) + mo (pun). SELALU diikuti bentuk negatif."}
  ]}
},

bab4: {
  "Arah Mata Angin & Durasi": { rows: [
    {k:"きた",r:"kita",a:"Utara",kj:"北"},
    {k:"みなみ",r:"minami",a:"Selatan",kj:"南"},
    {k:"ひがし",r:"higashi",a:"Timur",kj:"東"},
    {k:"にし",r:"nishi",a:"Barat",kj:"西"},
    {k:"まんなか",r:"mannaka",a:"Tengah-tengah",kj:"真ん中"},
    {k:"どのぐらい",r:"dono gurai",a:"Berapa lama"},
    {k:"〜じかん",r:"~jikan",a:"~jam",kj:"〜時間"},
    {k:"くらい",r:"kurai",a:"Kira-kira, sekitar"}
  ]},
  "Transportasi & Kota": { rows: [
    {k:"くるま",r:"kuruma",a:"Mobil",kj:"車"},
    {k:"しんかんせん",r:"shinkansen",a:"Kereta peluru, Shinkansen",kj:"新幹線"},
    {k:"でんしゃ",r:"densha",a:"Kereta listrik",kj:"電車"},
    {k:"ひこうき",r:"hikouki",a:"Pesawat",kj:"飛行機"},
    {k:"じてんしゃ",r:"jitensha",a:"Sepeda",kj:"自転車"},
    {k:"バイク",r:"baiku",a:"Sepeda motor",n:"Serapan 'bike' (khusus sepeda motor, bukan sepeda kayuh)."},
    {k:"えき",r:"eki",a:"Stasiun",kj:"駅"},
    {k:"まち",r:"machi",a:"Kota",kj:"町"},
    {k:"あるいて",r:"aruite",a:"Dengan berjalan kaki",kj:"歩いて"}
  ]},
  "Alam & Tempat Ibadah": { rows: [
    {k:"（お）てら",r:"(o)tera",a:"Wihara, kuil Buddha",kj:"（お）寺"},
    {k:"かわ",r:"kawa",a:"Sungai",kj:"川"},
    {k:"ひと",r:"hito",a:"Orang",kj:"人"},
    {k:"みどり",r:"midori",a:"Pepohonan, hijau",kj:"緑"},
    {k:"やま",r:"yama",a:"Gunung",kj:"山"},
    {k:"きょうかい",r:"kyoukai",a:"Gereja",kj:"教会"},
    {k:"（お）しろ",r:"(o)shiro",a:"Istana, kastil",kj:"（お）城"},
    {k:"じんじゃ",r:"jinja",a:"Kuil Shinto",kj:"神社"},
    {k:"ところ",r:"tokoro",a:"Tempat"},
    {k:"おんせん",r:"onsen",a:"Pemandian air panas alami",kj:"温泉"}
  ]},
  "Kata Sifat: Ukuran & Sifat Tempat": { rows: [
    {k:"あたらしい",r:"atarashii",a:"Baru",kj:"新しい"},
    {k:"ふるい",r:"furui",a:"Tua, lama, kuno",kj:"古い"},
    {k:"おおきい",r:"ookii",a:"Besar",kj:"大きい"},
    {k:"ちいさい",r:"chiisai",a:"Kecil",kj:"小さい"},
    {k:"たかい",r:"takai",a:"Tinggi, mahal",kj:"高い"},
    {k:"ひくい",r:"hikui",a:"Rendah",kj:"低い"},
    {k:"おおい",r:"ooi",a:"Banyak",kj:"多い"},
    {k:"すくない",r:"sukunai",a:"Sedikit",kj:"少ない"},
    {k:"しずか【な】",r:"shizuka (na)",a:"Sunyi, sepi",kj:"静か【な】",n:"Kata sifat-na (keiyoudoushi)."},
    {k:"にぎやか【な】",r:"nigiyaka (na)",a:"Ramai",n:"Kata sifat-na (keiyoudoushi)."},
    {k:"きれい【な】",r:"kirei (na)",a:"Cantik, indah, bersih",n:"Meski berakhiran い ini termasuk kata sifat-na, bukan keiyoushi biasa."},
    {k:"ゆうめい【な】",r:"yuumei (na)",a:"Terkenal",kj:"有名【な】",n:"Kata sifat-na (keiyoudoushi)."},
    {k:"いい",r:"ii",a:"Bagus, baik"},
    {k:"あります",r:"arimasu",a:"Ada, punya (benda mati)"},
    {k:"そして",r:"soshite",a:"Dan, lalu"}
  ]},
  "Cuaca & Musim": { rows: [
    {k:"あつい",r:"atsui",a:"Panas (cuaca, suhu)",kj:"暑い"},
    {k:"さむい",r:"samui",a:"Dingin (cuaca, suhu)",kj:"寒い"},
    {k:"あたたかい",r:"atatakai",a:"Hangat (cuaca, suhu)",kj:"暖かい"},
    {k:"すずしい",r:"suzushii",a:"Sejuk",kj:"涼しい"},
    {k:"てんきがいい",r:"tenki ga ii",a:"Cuacanya bagus",kj:"天気がいい"},
    {k:"てんきがわるい",r:"tenki ga warui",a:"Cuacanya buruk",kj:"天気が悪い"},
    {k:"いちねんじゅう",r:"ichinenjuu",a:"Sepanjang tahun",kj:"一年中"},
    {k:"ゆき",r:"yuki",a:"Salju",kj:"雪"},
    {k:"あめ",r:"ame",a:"Hujan",kj:"雨"},
    {k:"そうですね",r:"sou desu ne",a:"Iya, ya"}
  ]},
  "Kota Lain & Kadar": { rows: [
    {k:"ペキン",r:"pekin",a:"Beijing (China)"},
    {k:"とても",r:"totemo",a:"Sangat"},
    {k:"すこし",r:"sukoshi",a:"Agak, sedikit",kj:"少し"},
    {k:"あまり",r:"amari",a:"Tidak terlalu, tidak begitu"},
    {k:"プサン",r:"pusan",a:"Busan (Korea Selatan)"},
    {k:"どう",r:"dou",a:"Bagaimana"}
  ]},
  "Rasa & Suhu Benda": { rows: [
    {k:"あたたかい",r:"atatakai",a:"Hangat (benda)",kj:"温かい",n:"Beda kanji dengan 暖かい (hangat cuaca), tapi cara baca sama."},
    {k:"あつい",r:"atsui",a:"Panas (benda)",kj:"熱い",n:"Beda kanji dengan 暑い (panas cuaca), tapi cara baca sama."},
    {k:"つめたい",r:"tsumetai",a:"Dingin (benda)",kj:"冷たい"},
    {k:"おいしい",r:"oishii",a:"Enak, lezat"},
    {k:"あまい",r:"amai",a:"Manis",kj:"甘い"},
    {k:"からい",r:"karai",a:"Pedas",kj:"辛い"},
    {k:"にがい",r:"nigai",a:"Pahit",kj:"苦い"},
    {k:"すっぱい",r:"suppai",a:"Asam, kecut",kj:"酸っぱい"},
    {k:"ひ",r:"hi",a:"Hari",kj:"日"},
    {k:"サムゲタン",r:"samugetan",a:"Samgyetang (makanan Korea)"}
  ]}
},

bab5: {
  "Kata Kerja Aktivitas Harian": { rows: [
    {k:"あいます",r:"aimasu",a:"Bertemu",kj:"会います",n:"Kata kerja golongan I."},
    {k:"かいものします",r:"kaimono shimasu",a:"Berbelanja",kj:"買い物します",n:"Kata kerja golongan III."},
    {k:"せんたくします",r:"sentaku shimasu",a:"Mencuci baju",kj:"洗濯します",n:"Kata kerja golongan III."},
    {k:"そうじします",r:"souji shimasu",a:"Bebersih, membersihkan",kj:"掃除します",n:"Kata kerja golongan III."},
    {k:"つくります",r:"tsukurimasu",a:"Membuat",kj:"作ります",n:"Kata kerja golongan I."},
    {k:"しょくじします",r:"shokuji shimasu",a:"Makan",kj:"食事します",n:"Kata kerja golongan III."},
    {k:"のぼります",r:"noborimasu",a:"Mendaki, naik",kj:"登ります",n:"Kata kerja golongan I."},
    {k:"はいります",r:"hairimasu",a:"Masuk",kj:"入ります",n:"Kata kerja golongan I."},
    {k:"とります",r:"torimasu",a:"Memotret, mengambil (foto)",kj:"撮ります",n:"Kata kerja golongan I."},
    {k:"かります",r:"karimasu",a:"Meminjam",kj:"借ります",n:"Kata kerja golongan II."}
  ]},
  "Tempat & Orang": { rows: [
    {k:"うち／いえ",r:"uchi / ie",a:"Rumah",kj:"家"},
    {k:"へや",r:"heya",a:"Kamar, ruangan",kj:"部屋"},
    {k:"デパート",r:"depaato",a:"Departmen Store, mall",n:"Singkatan dari 'department store'."},
    {k:"ともだち",r:"tomodachi",a:"Teman",kj:"友達"},
    {k:"どこか",r:"dokoka",a:"Suatu tempat"},
    {k:"びじゅつかん",r:"bijutsukan",a:"Gedung kesenian",kj:"美術館"},
    {k:"かぞく",r:"kazoku",a:"Keluarga",kj:"家族"},
    {k:"こいびと",r:"koibito",a:"Pacar, kekasih",kj:"恋人"},
    {k:"ルームメイト",r:"ruumumeito",a:"Teman sekamar",n:"Serapan 'roommate'."},
    {k:"ひとりで",r:"hitori de",a:"Sendirian",kj:"一人で"},
    {k:"しんじゅく",r:"shinjuku",a:"Shinjuku",kj:"新宿",n:"Nama distrik terkenal di Tokyo."}
  ]},
  "Waktu (Hari, Minggu, Bulan, Tahun)": { rows: [
    {k:"きのう",r:"kinou",a:"Kemarin",kj:"昨日"},
    {k:"しゅうまつ",r:"shuumatsu",a:"Akhir pekan",kj:"週末"},
    {k:"きょう",r:"kyou",a:"Hari ini",kj:"今日"},
    {k:"あした",r:"ashita",a:"Besok",kj:"明日"},
    {k:"あさって",r:"asatte",a:"Lusa"},
    {k:"せんしゅう",r:"senshuu",a:"Minggu lalu",kj:"先週"},
    {k:"おととい",r:"ototoi",a:"Kemarin lusa"},
    {k:"それから",r:"sorekara",a:"Kemudian"},
    {k:"けさ",r:"kesa",a:"Tadi pagi",kj:"今朝"},
    {k:"せんげつ",r:"sengetsu",a:"Bulan lalu",kj:"先月"},
    {k:"きょねん",r:"kyonen",a:"Tahun lalu",kj:"去年"},
    {k:"こんど",r:"kondo",a:"Kali ini, lain kali",kj:"今度"},
    {k:"こんばん",r:"konban",a:"Malam ini",kj:"今晩"},
    {k:"ことし",r:"kotoshi",a:"Tahun ini",kj:"今年"},
    {k:"らいねん",r:"rainen",a:"Tahun depan",kj:"来年"}
  ]},
  "Kata Sifat: Perasaan & Kesulitan": { rows: [
    {k:"たかい",r:"takai",a:"Mahal",kj:"高い"},
    {k:"やすい",r:"yasui",a:"Murah",kj:"安い"},
    {k:"きもちがいい",r:"kimochi ga ii",a:"Enak (perasaan)",kj:"気持ちがいい"},
    {k:"たのしい",r:"tanoshii",a:"Menyenangkan",kj:"楽しい"},
    {k:"ひま【な】",r:"hima (na)",a:"Luang, senggang",n:"Kata sifat-na (keiyoudoushi)."},
    {k:"いそがしい",r:"isogashii",a:"Sibuk",kj:"忙しい"},
    {k:"むずかしい",r:"muzukashii",a:"Susah, sukar, sulit",kj:"難しい"},
    {k:"たいへん【な】",r:"taihen (na)",a:"Susah, berat",kj:"大変【な】",n:"Kata sifat-na (keiyoudoushi)."},
    {k:"かんたん【な】",r:"kantan (na)",a:"Mudah",kj:"簡単【な】",n:"Kata sifat-na (keiyoudoushi)."}
  ]},
  "Hobi, Perasaan & Benda Lain": { rows: [
    {k:"ゲーム",r:"geemu",a:"Gim, permainan",n:"Serapan 'game'."},
    {k:"てんき",r:"tenki",a:"Cuaca",kj:"天気"},
    {k:"ふく",r:"fuku",a:"Pakaian, baju",kj:"服"},
    {k:"ばんごはん",r:"bangohan",a:"Makan malam",kj:"晩ご飯"},
    {k:"どうして",r:"doushite",a:"Mengapa"},
    {k:"〜から",r:"~kara",a:"Karena~"},
    {k:"じてんしゃ",r:"jitensha",a:"Sepeda",kj:"自転車"},
    {k:"ほしい",r:"hoshii",a:"Ingin"},
    {k:"すき【な】",r:"suki (na)",a:"Suka",kj:"好き【な】",n:"Kata sifat-na (keiyoudoushi)."},
    {k:"きらい【な】",r:"kirai (na)",a:"Benci",kj:"嫌い【な】",n:"Kata sifat-na (keiyoudoushi)."},
    {k:"アニメ",r:"anime",a:"Anime, animasi Jepang"},
    {k:"けしき",r:"keshiki",a:"Pemandangan",kj:"景色"},
    {k:"しゃしん",r:"shashin",a:"Foto",kj:"写真"},
    {k:"え",r:"e",a:"Gambar, lukisan",kj:"絵"}
  ]}
}

}; // end BUKU

// ─────────────────────────────────────────────────────
// DATA: BUNPOU — pola kalimat & tata bahasa
// Format tiap item: { pola, romaji, arti, catatan, contoh: [{jp, id}] }
// ─────────────────────────────────────────────────────
const BUNPOU = [

  // ═══════════════════════════════════════════════
  // HARI 1
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 1",
    judul: "〜は　〜です (A adalah B)",
    sub: "Pola nominatif paling dasar — menyatakan identitas atau fakta, plus bentuk tanyanya.",
    items: [
      {
        pola: "〜は　〜です。",
        romaji: "~ wa ~ desu.",
        arti: "~ adalah ~. (pernyataan)",
        catatan: "は (wa) = partikel topik. です (desu) = kopula sopan setara 'adalah'. Ini pola paling dasar dalam bahasa Jepang.",
        contoh: [
          {jp:"わたしは　がくせいです。", id:"Saya adalah siswa."},
          {jp:"これは　ほんです。", id:"Ini adalah buku."},
          {jp:"せんせいは　たなかさんです。", id:"Gurunya adalah Tanaka-san."}
        ]
      },
      {
        pola: "〜は　〜ですか？",
        romaji: "~ wa ~ desu ka?",
        arti: "Apakah ~ adalah ~? (pertanyaan)",
        catatan: "Tambahkan か di akhir untuk membentuk kalimat tanya. Intonasi datar atau sedikit naik.",
        contoh: [
          {jp:"たなかさんは　がくせいですか？", id:"Apakah Tanaka-san siswa?"},
          {jp:"これは　にほんごですか？", id:"Apakah ini bahasa Jepang?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 1",
    judul: "〜じん (Menyatakan & menanyakan kewarganegaraan)",
    sub: "〜じん melabeli kewarganegaraan secara langsung — beda dari おくにはどちらですか yang menanyakan asal secara lebih halus.",
    items: [
      {
        pola: "〔国名〕＋　じん",
        romaji: "[negara] + jin",
        arti: "Orang ~ / Warga negara ~",
        catatan: "じん (人) = orang. Ditambahkan langsung setelah nama negara.",
        contoh: [
          {jp:"にほんじん", id:"orang Jepang"},
          {jp:"インドネシアじん", id:"orang Indonesia"}
        ]
      },
      {
        pola: "（わたしは）　〜じんです。",
        romaji: "(watashi wa) ~jin desu.",
        arti: "(Saya) orang ~. (pernyataan)",
        catatan: "Gabungan partikel は + 〜じん + です. Menyebutkan LABEL/identitas negaranya langsung.",
        contoh: [
          {jp:"わたしは　インドネシアじんです。", id:"Saya orang Indonesia."},
          {jp:"たなかさんは　にほんじんです。", id:"Tanaka-san orang Jepang."}
        ]
      },
      {
        pola: "〜は　なにじんですか？",
        romaji: "~ wa nani jin desu ka?",
        arti: "~ orang mana? (pertanyaan, langsung)",
        catatan: "Bentuk tanya langsung. Jawab dengan 〜じんです. Lebih to-the-point dibanding おくにはどちらですか — cocok untuk teman sebaya/situasi santai.",
        contoh: [
          {jp:"〜さんは　なにじんですか？", id:"~ orang mana?"},
          {jp:"あのひとは　なにじんですか？", id:"Orang itu orang mana?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 1",
    judul: "おしごとは？ (Menyatakan & menanyakan pekerjaan)",
    sub: "Pola menyebutkan profesi/pekerjaan diri sendiri atau orang lain.",
    items: [
      {
        pola: "（わたしの）　しごとは　〜です。",
        romaji: "(watashi no) shigoto wa ~ desu.",
        arti: "Pekerjaan (saya) adalah ~. (pernyataan)",
        catatan: "Bisa juga langsung pakai 〜は〜です tanpa kata しごと: わたしは　がくせいです (saya siswa).",
        contoh: [
          {jp:"わたしの　しごとは　かいしゃいんです。", id:"Pekerjaan saya karyawan perusahaan."},
          {jp:"わたしは　がくせいです。", id:"Saya (adalah) siswa."}
        ]
      },
      {
        pola: "おしごとは　なんですか？",
        romaji: "oshigoto wa nan desu ka?",
        arti: "Pekerjaannya apa? (pertanyaan)",
        catatan: "Bentuk tanya yang sopan, dengan prefiks お.",
        contoh: [
          {jp:"〜さんの　おしごとは　なんですか？", id:"Pekerjaan ~ apa? (sopan)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 1",
    judul: "〜は　〜じゃありません (Bentuk negatif)",
    sub: "Bentuk negatif dari 〜は〜です — formal (では ありません) dan santai (じゃありません), termasuk bentuk tanyanya.",
    items: [
      {
        pola: "〜は　〜では　ありません。",
        romaji: "~ wa ~ dewa arimasen.",
        arti: "~ bukan ~. (pernyataan negatif, formal)",
        catatan: "Bentuk negatif dari です. Percakapan santai: じゃないです (ja nai desu).",
        contoh: [
          {jp:"わたしは　せんせいでは　ありません。", id:"Saya bukan guru."},
          {jp:"これは　じしょじゃないです。", id:"Ini bukan kamus."}
        ]
      },
      {
        pola: "〜は　〜じゃありません。",
        romaji: "~ wa ~ja arimasen.",
        arti: "~ bukan ~. (pernyataan negatif, santai)",
        catatan: "じゃ adalah kontraksi santai dari では. Lebih sering dipakai dalam percakapan sehari-hari dibanding では　ありません yang lebih formal.",
        contoh: [
          {jp:"わたしは　せんせいじゃありません。", id:"Saya bukan guru."},
          {jp:"たなかさんは　がくせいじゃありません。かいしゃいんです。", id:"Tanaka-san bukan siswa. (Dia) karyawan perusahaan."}
        ]
      },
      {
        pola: "〜は　〜じゃありませんか？",
        romaji: "~ wa ~ja arimasen ka?",
        arti: "Bukankah ~ itu ~? (pertanyaan konfirmasi negatif)",
        catatan: "Menambahkan か mengubahnya jadi pertanyaan konfirmasi — menyiratkan pembicara cukup yakin tapi ingin memastikan.",
        contoh: [
          {jp:"これは　じしょじゃありませんか？", id:"Bukankah ini kamus?"},
          {jp:"〜さんは　がくせいじゃありませんか？", id:"Bukankah ~ siswa?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 1",
    judul: "〜の〜 (kepemilikan / penghubung kata benda)",
    sub: "Partikel の menghubungkan dua kata benda, setara apostrophe-s ('s) dalam bahasa Inggris tapi lebih luas fungsinya.",
    items: [
      {
        pola: "〔名詞A〕の　〔名詞B〕",
        romaji: "[meishi A] no [meishi B]",
        arti: "B dari A / B milik A / B tentang A",
        catatan: "の menghubungkan dua kata benda. A menerangkan B.",
        contoh: [
          {jp:"わたしの　ほん", id:"buku saya"},
          {jp:"にほんの　たべもの", id:"makanan Jepang"},
          {jp:"がっこうの　せんせい", id:"guru (di) sekolah"}
        ]
      }
    ]
  },
  {
    tema: "Hari 1",
    judul: "〜さいです (Menyatakan & menanyakan umur)",
    sub: "Pola menyebutkan usia memakai counter 〜さい.",
    items: [
      {
        pola: "（わたしは）　〜さいです。",
        romaji: "(watashi wa) ~sai desu.",
        arti: "(Saya) berumur ~ tahun. (pernyataan)",
        catatan: "〜さい (歳) ditambahkan setelah angka. Perhatikan pengucapan khusus: よんさい (4), はっさい (8), じゅっさい (10), はたち (20, BUKAN にじゅっさい!).",
        contoh: [
          {jp:"わたしは　にじゅっさいです。", id:"Saya berumur 20 tahun."},
          {jp:"おとうとは　じゅっさいです。", id:"Adik laki-laki (saya) berumur 10 tahun."}
        ]
      },
      {
        pola: "〜は　なんさいですか？ / おいくつですか？",
        romaji: "~ wa nansai desu ka? / oikutsu desu ka?",
        arti: "~ umur berapa? (pertanyaan)",
        catatan: "なんさい = santai/netral. おいくつ = sopan, dipakai untuk orang lebih tua atau atasan.",
        contoh: [
          {jp:"〜さんは　なんさいですか？", id:"~ umur berapa?"},
          {jp:"〜さんは　おいくつですか？", id:"~ umur berapa? (sopan)"}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 2
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 2",
    judul: "〜はいつですか？ (Menyatakan & menanyakan waktu)",
    sub: "Pola menyatakan dan menanyakan kapan suatu peristiwa terjadi.",
    items: [
      {
        pola: "〜は　〜です。",
        romaji: "~ wa ~ desu.",
        arti: "~ adalah (pada) ~. (pernyataan waktu)",
        catatan: "Pola pernyataan waktu memakai です langsung setelah keterangan waktu (tanggal/bulan/hari).",
        contoh: [
          {jp:"たんじょうびは　はちがつ　むいかです。", id:"Ulang tahun (saya) tanggal 6 Agustus."},
          {jp:"テストは　らいしゅうです。", id:"Ujiannya minggu depan."}
        ]
      },
      {
        pola: "〜は　いつですか？",
        romaji: "~ wa itsu desu ka?",
        arti: "~ kapan? (pertanyaan)",
        catatan: "いつ = kata tanya 'kapan'. Sering dipakai untuk ulang tahun, jadwal, atau acara.",
        contoh: [
          {jp:"たんじょうびは　いつですか？", id:"Ulang tahunnya kapan?"},
          {jp:"テストは　いつですか？", id:"Ujiannya kapan?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 2",
    judul: "しゅみは？ (Menyatakan & menanyakan hobi)",
    sub: "Pola memperkenalkan hobi, termasuk variasi の untuk merinci jenis hobi orang lain.",
    items: [
      {
        pola: "しゅみは　〜です。",
        romaji: "shumi wa ~ desu.",
        arti: "Hobi (saya) adalah ~. (pernyataan)",
        catatan: "Pola pernyataan dasar untuk memperkenalkan hobi sendiri.",
        contoh: [
          {jp:"しゅみは　どくしょです。", id:"Hobi (saya) adalah membaca buku."},
          {jp:"しゅみは　サッカーです。", id:"Hobi (saya) adalah sepak bola."}
        ]
      },
      {
        pola: "〜の　しゅみは　〜です。",
        romaji: "~ no shumi wa ~ desu.",
        arti: "Hobi (milik) ~ adalah ~. (orang lain)",
        catatan: "の menghubungkan pemilik hobi dengan kata しゅみ. Dipakai saat menyebut hobi orang lain secara spesifik.",
        contoh: [
          {jp:"たなかさんの　しゅみは　サッカーです。", id:"Hobi Tanaka-san adalah sepak bola."}
        ]
      },
      {
        pola: "しゅみは　なんですか？",
        romaji: "shumi wa nan desu ka?",
        arti: "Hobinya apa? (pertanyaan)",
        catatan: "Pertanyaan standar saat berkenalan di Jepang. Jawab dengan しゅみは〜です.",
        contoh: [
          {jp:"しゅみは　なんですか？", id:"Hobinya apa?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 2",
    judul: "〜と　〜 (dan, menggabungkan kata benda)",
    sub: "Partikel と menghubungkan dua kata benda — beda dari し yang menggabungkan alasan/kalimat.",
    items: [
      {
        pola: "〔名詞A〕と　〔名詞B〕",
        romaji: "[meishi A] to [meishi B]",
        arti: "A dan B",
        catatan: "と menghubungkan dua kata benda secara langsung, setara 'and' dalam bahasa Inggris untuk daftar barang/orang.",
        contoh: [
          {jp:"テニスと　すいえいが　すきです。", id:"(Saya) suka tenis dan renang."},
          {jp:"がくせいと　せんせい", id:"siswa dan guru"}
        ]
      }
    ]
  },
  {
    tema: "Hari 2",
    judul: "〜も　〜です (~ juga ~)",
    sub: "Partikel も (mo) menggantikan は untuk menyatakan kesamaan dengan topik sebelumnya.",
    items: [
      {
        pola: "〜も　〜です。",
        romaji: "~ mo ~ desu.",
        arti: "~ juga ~.",
        catatan: "も menggantikan は. Dipakai saat topik baru punya sifat yang sama dengan yang sudah disebut.",
        contoh: [
          {jp:"わたしも　がくせいです。", id:"Saya juga siswa."},
          {jp:"たなかさんも　にほんじんです。", id:"Tanaka-san juga orang Jepang."}
        ]
      },
      {
        pola: "〔名詞A〕も　〔名詞B〕も　〜",
        romaji: "[meishi A] mo [meishi B] mo ~",
        arti: "Baik A maupun B sama-sama ~",
        catatan: "Pola penekanan: も dipakai dua kali untuk menyebutkan dua hal yang sama-sama berlaku, beda dari と yang sekadar menggabungkan.",
        contoh: [
          {jp:"わたしも　たなかさんも　がくせいです。", id:"Saya maupun Tanaka-san sama-sama siswa."},
          {jp:"テニスも　すいえいも　すきです。", id:"Tenis maupun renang, sama-sama suka."}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 3
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 3",
    judul: "おくにはどちらですか？ (Menanyakan asal negara — sopan)",
    sub: "Versi lebih halus/sopan dari なにじんですか — menanyakan asal negara, bukan langsung melabeli kewarganegaraan.",
    items: [
      {
        pola: "おくには　どちらですか？",
        romaji: "okuni wa dochira desu ka?",
        arti: "Negara Anda yang mana? / Anda berasal dari negara mana? (sopan)",
        catatan: "Beda dengan なにじんですか yang langsung menanyakan LABEL kewarganegaraan, pola ini menanyakan ASAL secara lebih halus. Lebih cocok saat baru kenalan atau ke orang yang lebih dihormati.",
        contoh: [
          {jp:"すみません、おくには　どちらですか？", id:"Permisi, Anda berasal dari negara mana?"}
        ]
      },
      {
        pola: "（わたしの　くには）　〜です。",
        romaji: "(watashi no kuni wa) ~ desu.",
        arti: "(Negara saya) adalah ~. (jawaban formal)",
        catatan: "Jawaban yang sejalan dengan pertanyaan おくにはどちらですか — menyebutkan nama negara, bukan bentuk 〜じん. Bisa juga dijawab pakai 〜じんです biasa.",
        contoh: [
          {jp:"わたしの　くには　インドネシアです。", id:"Negara saya adalah Indonesia."}
        ]
      }
    ]
  },
  {
    tema: "Hari 3",
    judul: "おすまいはどちらですか？ (Menanyakan tempat tinggal — sopan)",
    sub: "Pola sopan untuk bertanya tempat tinggal seseorang.",
    items: [
      {
        pola: "おすまいは　どちらですか？",
        romaji: "osumai wa dochira desu ka?",
        arti: "Tinggal di mana? (sopan)",
        catatan: "'O' (hormat) + sumai (tempat tinggal) + wa + dochira. Lebih sopan dari どこにすんでいますか. Dipakai dalam konteks formal atau kepada orang yang baru dikenal.",
        contoh: [
          {jp:"おすまいは　どちらですか？", id:"Tinggal di mana?"},
          {jp:"じゃかるたに　すんでいます。", id:"(Saya) tinggal di Jakarta."}
        ]
      }
    ]
  },
  {
    tema: "Hari 3",
    judul: "これ／それ／あれ／どれ — untuk BENDA, berdiri sendiri",
    sub: "Menunjuk BENDA sebagai pengganti kata benda — BISA berdiri sendiri tanpa perlu diikuti kata benda lain. Beda dari この/その/あの/どの yang WAJIB diikuti kata benda.",
    items: [
      {
        pola: "これは　〜です。",
        romaji: "kore wa ~ desu.",
        arti: "Ini adalah ~. (benda dekat pembicara)",
        catatan: "これ dipakai untuk benda yang dekat dengan pembicara (aku), dan BISA berdiri sendiri sebagai subjek kalimat.",
        contoh: [
          {jp:"これは　ほんです。", id:"Ini adalah buku."},
          {jp:"これを　ください。", id:"Tolong berikan ini."},
          {jp:"これは　わたしの　かばんです。", id:"Ini adalah tas saya."}
        ]
      },
      {
        pola: "それは　〜です。",
        romaji: "sore wa ~ desu.",
        arti: "Itu adalah ~. (benda dekat pendengar)",
        catatan: "それ dipakai untuk benda yang lebih dekat ke pendengar daripada ke pembicara.",
        contoh: [
          {jp:"それは　じしょです。", id:"Itu (adalah) kamus."},
          {jp:"それは　なんですか？", id:"Itu apa?"},
          {jp:"それは　たなかさんの　えんぴつです。", id:"Itu pensil milik Tanaka-san."}
        ]
      },
      {
        pola: "あれは　〜です。",
        romaji: "are wa ~ desu.",
        arti: "Itu adalah ~. (benda jauh dari keduanya)",
        catatan: "あれ dipakai untuk benda yang jauh dari pembicara maupun pendengar. Juga jadi ekspresi kaget: 'Are?' = Eh?",
        contoh: [
          {jp:"あれは　えきです。", id:"Itu (yang jauh) adalah stasiun."},
          {jp:"あれは　わたしの　かばんです。", id:"Itu (yang jauh) tas saya."},
          {jp:"あれは　なんですか？", id:"Itu (yang jauh) apa?"}
        ]
      },
      {
        pola: "〜は　どれですか？",
        romaji: "~ wa dore desu ka?",
        arti: "~ yang mana? (bentuk tanya, pilihan 3+)",
        catatan: "Bentuk tanya dari seri ini. Dipakai saat memilih dari 3 pilihan atau lebih.",
        contoh: [
          {jp:"どれが　たなかさんの　かばんですか？", id:"Yang mana tas milik Tanaka-san?"},
          {jp:"どれに　しますか？", id:"Mau pilih yang mana?"},
          {jp:"すきなのは　どれですか？", id:"Yang kamu suka yang mana?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 3",
    judul: "この／その／あの／どの — untuk MENERANGKAN benda",
    sub: "WAJIB diikuti kata benda — tidak bisa berdiri sendiri! Beda dari これ/それ/あれ/どれ yang menggantikan kata benda, kelompok ini menerangkan/menempel pada kata benda. この本 (benar) vs この (salah, harus ada kata bendanya).",
    items: [
      {
        pola: "この〜",
        romaji: "kono ~",
        arti: "~ ini (benda dekat pembicara + kata benda)",
        catatan: "HARUS diikuti kata benda. Bandingkan: これは本です (ini buku) VS この本 (buku ini) — artinya beda struktur, これ berdiri sendiri, この menempel ke 本.",
        contoh: [
          {jp:"この　ほんは　いくらですか？", id:"Buku ini berapa harganya?"},
          {jp:"この　ひとは　だれですか？", id:"Orang ini siapa?"},
          {jp:"この　りょうりは　おいしいです。", id:"Masakan ini enak."}
        ]
      },
      {
        pola: "その〜",
        romaji: "sono ~",
        arti: "~ itu (dekat pendengar + kata benda)",
        catatan: "Menerangkan benda yang dekat dengan pendengar. Selalu diikuti kata benda.",
        contoh: [
          {jp:"その　かばんは　だれのですか？", id:"Tas itu punya siapa?"},
          {jp:"その　ほんを　とって　ください。", id:"Tolong ambilkan buku itu."},
          {jp:"その　みせは　どこですか？", id:"Toko itu di mana?"}
        ]
      },
      {
        pola: "あの〜",
        romaji: "ano ~",
        arti: "~ itu (jauh dari keduanya + kata benda)",
        catatan: "Menerangkan benda yang jauh dari pembicara dan pendengar. Juga dipakai sebagai 'anu...' saat ragu bicara.",
        contoh: [
          {jp:"あの　ひとは　だれですか？", id:"Orang itu (yang jauh) siapa?"},
          {jp:"あの　みせは　やすいです。", id:"Toko itu murah."},
          {jp:"あの　やまは　なんですか？", id:"Gunung itu (yang jauh) namanya apa?"}
        ]
      },
      {
        pola: "どの〜　ですか？",
        romaji: "dono ~ desu ka?",
        arti: "~ yang mana? (bentuk tanya, menerangkan)",
        catatan: "Bentuk tanya. Selalu diikuti kata benda — berbeda dari どれ yang berdiri sendiri.",
        contoh: [
          {jp:"どの　ほんですか？", id:"Buku yang mana?"},
          {jp:"どの　Tシャツが　いいですか？", id:"Kaos yang mana yang bagus?"},
          {jp:"どの　みせで　かいましたか？", id:"Beli di toko yang mana?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 3",
    judul: "ここ／そこ／あそこ／どこ — untuk TEMPAT",
    sub: "Menunjuk LOKASI/tempat secara langsung — bisa berdiri sendiri tanpa kata benda setelahnya. こ=dekat pembicara, そ=dekat pendengar, あ=jauh dari keduanya, ど=bentuk tanya.",
    items: [
      {
        pola: "ここです。",
        romaji: "koko desu.",
        arti: "Di sini. (dekat pembicara)",
        catatan: "Dipakai untuk tempat yang dekat dengan pembicara (aku). Bisa berdiri sendiri sebagai jawaban.",
        contoh: [
          {jp:"わたしの　せきは　ここです。", id:"Tempat duduk saya di sini."},
          {jp:"ここに　すわって　ください。", id:"Silakan duduk di sini."},
          {jp:"ここで　まって　ください。", id:"Tolong tunggu di sini."}
        ]
      },
      {
        pola: "そこです。",
        romaji: "soko desu.",
        arti: "Di situ. (dekat pendengar)",
        catatan: "Dipakai untuk tempat yang dekat dengan lawan bicara, bukan dengan pembicara.",
        contoh: [
          {jp:"かばんは　そこです。", id:"Tasnya ada di situ."},
          {jp:"そこに　おいて　ください。", id:"Tolong taruh di situ."},
          {jp:"そこは　どこですか？", id:"Situ itu di mana? (menanyakan nama tempat lawan bicara)"}
        ]
      },
      {
        pola: "あそこです。",
        romaji: "asoko desu.",
        arti: "Di sana. (jauh dari keduanya)",
        catatan: "Dipakai untuk tempat yang jauh dari pembicara MAUPUN pendengar.",
        contoh: [
          {jp:"としょかんは　あそこです。", id:"Perpustakaannya di sana."},
          {jp:"あそこに　みえるのが　やまです。", id:"Yang terlihat di sana itu gunung."},
          {jp:"あそこまで　あるきます。", id:"Berjalan kaki sampai ke sana."}
        ]
      },
      {
        pola: "〜は　どこですか？",
        romaji: "~ wa doko desu ka?",
        arti: "~ di mana? (bentuk tanya, netral/santai)",
        catatan: "PERBANDINGAN PENTING dengan どちら: どこ dipakai untuk pertanyaan lokasi yang NETRAL/SANTAI sehari-hari (toilet, stasiun, dll). どちら dipakai saat ingin lebih SOPAN, atau saat menanyakan ASAL/PILIHAN dari 2 opsi (lihat grup こちら/そちら/あちら/どちら). Bandingkan: 'toire wa doko desu ka' (netral, ke siapa saja) VS 'okuni wa dochira desu ka' (sopan, khusus menanyakan asal).",
        contoh: [
          {jp:"トイレは　どこですか？", id:"Toilet di mana? (netral)"},
          {jp:"としょかんは　どこですか？", id:"Perpustakaan di mana? (netral)"},
          {jp:"えきは　どこですか？", id:"Stasiun di mana? (netral, dipakai ke siapa saja termasuk orang asing)"}
        ]
      },
      {
        pola: "〜は　どこに　ありますか／いますか？",
        romaji: "~ wa doko ni arimasu ka / imasu ka?",
        arti: "~ ada di mana? (untuk benda mati / makhluk hidup)",
        catatan: "あります = untuk benda mati/tidak bergerak. います = untuk manusia dan hewan. に menandai lokasi.",
        contoh: [
          {jp:"じしょは　どこに　ありますか？", id:"Kamusnya ada di mana?"},
          {jp:"せんせいは　どこに　いますか？", id:"Gurunya ada di mana?"}
        ]
      },
      {
        pola: "〜は　〜に　あります／います。",
        romaji: "~ wa ~ ni arimasu / imasu.",
        arti: "~ ada di ~. (pernyataan lengkap dengan lokasi spesifik)",
        catatan: "Jawaban lengkap yang menyebutkan lokasi spesifik, bukan cuma ここ/そこ/あそこ.",
        contoh: [
          {jp:"じしょは　つくえの　うえに　あります。", id:"Kamusnya ada di atas meja."},
          {jp:"としょかんは　にかいに　あります。", id:"Perpustakaannya ada di lantai 2."}
        ]
      },
      {
        pola: "どこでも　いいです。",
        romaji: "doko demo ii desu.",
        arti: "Di mana saja boleh / terserah. (bebas pilihan)",
        catatan: "どこ + でも (pun/saja) + いいです (boleh/bagus). Dipakai saat tidak ada preferensi tempat tertentu.",
        contoh: [
          {jp:"どこで　たべますか？　－　どこでも　いいです。", id:"Makan di mana? — Di mana saja boleh."}
        ]
      }
    ]
  },
  {
    tema: "Hari 3",
    judul: "こちら／そちら／あちら／どちら — bentuk SOPAN",
    sub: "Versi lebih sopan/formal, serbaguna — bisa menggantikan ここ (tempat), これ (benda), bahkan menyapa orang secara halus. Sering dipakai di telepon, ke tamu, atau situasi resmi.",
    items: [
      {
        pola: "こちらへ　どうぞ。",
        romaji: "kochira e douzo.",
        arti: "Silakan ke sini. (sopan, tempat/arah)",
        catatan: "Versi sopan dari こっち/ここ. Dipakai saat mempersilakan tamu, atau memperkenalkan orang: 'Kochira wa Tanaka-san desu' = Ini adalah Tanaka-san.",
        contoh: [
          {jp:"こちらへ　どうぞ。", id:"Silakan ke sini."},
          {jp:"こちらは　たなかさんです。", id:"Ini adalah Tanaka-san. (perkenalan sopan)"},
          {jp:"うけつけは　こちらです。", id:"Resepsionisnya di sini."}
        ]
      },
      {
        pola: "そちらに　あります。",
        romaji: "sochira ni arimasu.",
        arti: "Ada di situ. (sopan, sering dipakai di telepon)",
        catatan: "Versi sopan dari そっち/そこ. 'Sochira wa?' di telepon = 'Ini siapa (di sana)?'",
        contoh: [
          {jp:"しょうひんは　そちらに　あります。", id:"Barangnya ada di situ."},
          {jp:"もしもし、そちらは　どなたですか？", id:"Halo, ini siapa (di sana)? (telepon)"},
          {jp:"そちらの　つごうは　どうですか？", id:"Bagaimana kondisi di sana? (sopan)"}
        ]
      },
      {
        pola: "あちらです。",
        romaji: "achira desu.",
        arti: "Di sana. (sopan)",
        catatan: "Versi sopan dari あっち/あそこ. Umum dipakai staf toko/hotel menunjukkan arah ke tamu.",
        contoh: [
          {jp:"トイレは　あちらです。", id:"Toiletnya di sana."},
          {jp:"エレベーターは　あちらです。", id:"Liftnya di sana."},
          {jp:"かいぎしつは　あちらです。", id:"Ruang rapatnya di sana."}
        ]
      },
      {
        pola: "〜は　どちらですか？",
        romaji: "~ wa dochira desu ka?",
        arti: "~ yang mana? / ~ di mana? (bentuk tanya, sopan)",
        catatan: "どちら dipakai untuk: (1) memilih dari 2 pilihan secara sopan, (2) menanyakan tempat/asal secara halus (lebih sopan dari どこ), (3) menanyakan siapa secara sopan di telepon. BEDA dengan どこ: どこ = netral/santai untuk lokasi sehari-hari ('toire wa doko?'), どちら = sopan, dan JUGA bisa untuk memilih 2 opsi (どこ tidak bisa dipakai untuk ini).",
        contoh: [
          {jp:"おくには　どちらですか？", id:"Anda berasal dari negara mana? (sopan)"},
          {jp:"コーヒーと　おちゃ、どちらが　いいですか？", id:"Kopi atau teh, yang mana yang lebih baik?"},
          {jp:"もしもし、どちらさまですか？", id:"Halo, ini siapa ya? (sopan, di telepon)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 3",
    judul: "いくらですか？ (Menanyakan harga)",
    sub: "Pola wajib saat berbelanja.",
    items: [
      {
        pola: "いくらですか？",
        romaji: "ikura desu ka?",
        arti: "Berapa harganya?",
        catatan: "Kata wajib saat belanja. Jawab: ～えんです (~ en desu).",
        contoh: [
          {jp:"これは　いくらですか？", id:"Ini berapa harganya?"},
          {jp:"ひゃくえんです。", id:"Seratus yen."}
        ]
      },
      {
        pola: "〜は　〜えんです。",
        romaji: "~ wa ~ en desu.",
        arti: "~ (harganya) ~ yen. (pernyataan)",
        catatan: "Pola dasar menyatakan harga.",
        contoh: [
          {jp:"このケーキは　ごひゃくえんです。", id:"Kue ini (harganya) 500 yen."},
          {jp:"せんえんです。", id:"(Harganya) seribu yen."}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 4
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 4",
    judul: "〜を　ください (Meminta satu benda)",
    sub: "Pola paling dasar untuk meminta sesuatu — cocok dipakai bersama semua kata tunjuk Ko-So-A-Do (これ/それ/あれ/どれ). Ganti 〜 dengan benda atau kata tunjuk yang dimaksud.",
    items: [
      {
        pola: "これを　ください。",
        romaji: "kore wo kudasai.",
        arti: "Tolong berikan ini.",
        catatan: "を menandai objek yang diminta. Dipakai saat menunjuk benda yang dekat dengan pembicara — misalnya sambil menunjuk barang di etalase toko.",
        contoh: [
          {jp:"これを　ください。", id:"Tolong berikan ini."},
          {jp:"すみません、これを　ください。", id:"Permisi, tolong berikan ini."}
        ]
      },
      {
        pola: "それを　ください。",
        romaji: "sore wo kudasai.",
        arti: "Tolong berikan itu.",
        catatan: "Dipakai saat benda yang diminta lebih dekat dengan lawan bicara — misalnya minta pelayan toko mengambilkan barang di dekat mereka.",
        contoh: [
          {jp:"それを　ください。", id:"Tolong berikan itu."},
          {jp:"すみません、その　あかい　シャツを　ください。", id:"Permisi, tolong berikan kemeja merah itu."}
        ]
      },
      {
        pola: "あれを　ください。",
        romaji: "are wo kudasai.",
        arti: "Tolong berikan itu (yang jauh).",
        catatan: "Dipakai saat benda yang diminta jauh dari pembicara maupun pendengar — biasanya sambil menunjuk dari kejauhan.",
        contoh: [
          {jp:"あれを　ください。", id:"Tolong berikan itu (yang jauh)."},
          {jp:"あの　あかい　かばんを　ください。", id:"Tolong berikan tas merah itu."}
        ]
      },
      {
        pola: "どれが　いいですか？／どれに　しますか？",
        romaji: "dore ga ii desu ka? / dore ni shimasu ka?",
        arti: "Yang mana yang bagus? / Mau pilih yang mana?",
        catatan: "どれ dipakai saat masih memilih di antara 3+ opsi — biasanya berbentuk pertanyaan dulu (どれが〜／どれに〜), baru dijawab pakai これ／それ／あれを　ください, bukan langsung 'どれを　ください' karena どれ itu sendiri masih berupa pertanyaan pilihan.",
        contoh: [
          {jp:"どれが　いいですか？", id:"Yang mana yang bagus?"},
          {jp:"どれに　しますか？　－　これを　ください。", id:"Mau pilih yang mana? — Tolong berikan yang ini."}
        ]
      }
    ]
  },
  {
    tema: "Hari 4",
    judul: "なんの〜ですか？ (Menanyakan jenis suatu benda)",
    sub: "Pola menanyakan jenis/kategori spesifik dari suatu benda, memakai なん (apa) + の (penghubung) + kata benda.",
    items: [
      {
        pola: "なんの　りょうりですか？",
        romaji: "nan no ryouri desu ka?",
        arti: "Masakan jenis apa?",
        catatan: "なん (apa) + の (penghubung kepemilikan/jenis) + りょうり (masakan). Pola なんの〜 dipakai untuk menanyakan jenis/kategori dari kata benda yang mengikutinya.",
        contoh: [
          {jp:"これは　なんの　りょうりですか？", id:"Ini masakan jenis apa?"},
          {jp:"にほんの　りょうりです。", id:"Ini masakan Jepang."}
        ]
      },
      {
        pola: "なんの〜ですか？ (pola umum)",
        romaji: "nan no ~ desu ka?",
        arti: "~ jenis apa? / ~ tentang apa?",
        catatan: "Pola serbaguna: bisa dipakai untuk buku (tentang apa), musik (jenis apa), pelajaran (tentang apa), dll — bukan cuma makanan.",
        contoh: [
          {jp:"これは　なんの　ほんですか？", id:"Ini buku tentang apa?"},
          {jp:"なんの　おんがくが　すきですか？", id:"Suka musik jenis apa?"},
          {jp:"それは　なんの　じゅぎょうですか？", id:"Itu pelajaran apa?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 4",
    judul: "どこの〜ですか？ (Menanyakan asal/negara pembuat)",
    sub: "Pola menanyakan asal geografis suatu benda — beda dari どこですか yang menanyakan lokasi benda itu sendiri.",
    items: [
      {
        pola: "どこの〜ですか？",
        romaji: "doko no ~ desu ka?",
        arti: "~ dari mana? / ~ buatan mana?",
        catatan: "どこ (mana) + の (penghubung asal) + kata benda. Dipakai untuk menanyakan negara/tempat asal suatu produk, bukan lokasi benda tersebut sekarang. Beda dari '〜はどこですか' yang menanyakan LOKASI benda.",
        contoh: [
          {jp:"これは　どこの　くるまですか？", id:"Ini mobil buatan mana?"},
          {jp:"どこの　わいんが　すきですか？", id:"Suka anggur dari mana?"},
          {jp:"それは　どこの　かばんですか？", id:"Itu tas buatan mana?"}
        ]
      },
      {
        pola: "〔国名〕の〜です。",
        romaji: "[negara] no ~ desu.",
        arti: "~ buatan/dari [negara]. (jawaban)",
        catatan: "Jawaban untuk pola どこの〜ですか — sebutkan nama negara/tempat, lalu の, lalu kata bendanya.",
        contoh: [
          {jp:"にほんの　くるまです。", id:"(Ini) mobil buatan Jepang."},
          {jp:"フランスの　わいんです。", id:"(Ini) anggur dari Prancis."}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 5
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 5",
    judul: "〜を　〜ください (Meminta dengan jumlah/detail)",
    sub: "Variasi 〜をください dengan menambahkan jumlah (counter) atau detail lain sebelum ください.",
    items: [
      {
        pola: "〔名詞〕を　〔数量〕　ください。",
        romaji: "[meishi] wo [suuryou] kudasai.",
        arti: "Tolong berikan [benda] sebanyak [jumlah].",
        catatan: "Sisipkan kata benda + partikel を, lalu jumlah/counter, baru ください di akhir. Urutan ini penting dan baku dalam bahasa Jepang.",
        contoh: [
          {jp:"りんごを　みっつ　ください。", id:"Tolong berikan apel tiga buah."},
          {jp:"みずを　いっぱい　ください。", id:"Tolong berikan air satu gelas."},
          {jp:"きっぷを　にまい　ください。", id:"Tolong berikan tiket dua lembar."}
        ]
      },
      {
        pola: "この／その／あの　〜を　〔数量〕　ください。",
        romaji: "kono / sono / ano ~ wo [suuryou] kudasai.",
        arti: "Tolong berikan [benda] ini/itu sebanyak [jumlah].",
        catatan: "Gabungan この／その／あの (menerangkan benda) + objek + jumlah + ください. Berguna saat menunjuk barang spesifik sambil memesan jumlahnya.",
        contoh: [
          {jp:"この　ケーキを　ひとつ　ください。", id:"Tolong berikan kue ini satu."},
          {jp:"その　ペンを　にほん　ください。", id:"Tolong berikan pena itu dua batang."},
          {jp:"あの　シャツを　いちまい　ください。", id:"Tolong berikan kemeja itu satu lembar."}
        ]
      }
    ]
  },
  {
    tema: "Hari 5",
    judul: "だれの〜ですか？ (Menanyakan kepemilikan)",
    sub: "Pola menanyakan siapa pemilik suatu benda, memakai だれ (siapa) + の (kepemilikan).",
    items: [
      {
        pola: "これは　だれの〜ですか？",
        romaji: "kore wa dare no ~ desu ka?",
        arti: "Ini ~ punya siapa?",
        catatan: "だれ (siapa) + の (partikel kepemilikan) + kata benda (opsional, boleh dihilangkan). Bisa juga tanpa kata benda: 'kore wa dare no desu ka' = ini punya siapa?",
        contoh: [
          {jp:"これは　だれの　かばんですか？", id:"Ini tas punya siapa?"},
          {jp:"これは　だれのですか？", id:"Ini punya siapa? (tanpa sebut nama bendanya)"},
          {jp:"その　ほんは　だれのですか？", id:"Buku itu punya siapa?"}
        ]
      },
      {
        pola: "〔名前〕の〜です。",
        romaji: "[nama] no ~ desu.",
        arti: "Punya [nama]. / ~ milik [nama]. (jawaban)",
        catatan: "Jawaban untuk だれの〜ですか — sebutkan nama pemilik + の + kata benda (atau tanpa kata benda kalau sudah jelas dari konteks).",
        contoh: [
          {jp:"たなかさんの　かばんです。", id:"(Ini) tas milik Tanaka-san."},
          {jp:"わたしのです。", id:"(Ini) punya saya."}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 6
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 6",
    judul: "なんじですか？ (Menanyakan jam)",
    sub: "Pola menanyakan waktu dalam jam.",
    items: [
      {
        pola: "なんじですか？ / いまなんじですか？",
        romaji: "nanji desu ka? / ima nanji desu ka?",
        arti: "Jam berapa? / Sekarang jam berapa?",
        catatan: "なんじ = jam berapa. いま = sekarang. Jawab: ～じ～ふんです.",
        contoh: [
          {jp:"いま　なんじですか？", id:"Sekarang jam berapa?"},
          {jp:"ごじはんです。", id:"(Sekarang) jam setengah enam."}
        ]
      }
    ]
  },
  {
    tema: "Hari 6",
    judul: "〜から〜までです (Pola gabungan lengkap)",
    sub: "から (titik awal) dan まで (titik akhir) dipakai BERSAMAAN dalam satu kalimat untuk menyebutkan rentang waktu/tempat secara lengkap.",
    items: [
      {
        pola: "〔titik awal〕から　〔titik akhir〕までです。",
        romaji: "~ kara ~ made desu.",
        arti: "Dari ~ sampai ~.",
        catatan: "から menandai titik awal, まで menandai titik akhir — dipakai berbarengan kalau mau menyebutkan rentang lengkap dari awal sampai akhir dalam satu kalimat.",
        contoh: [
          {jp:"じゅぎょうは　くじから　じゅうにじまでです。", id:"Pelajaran dari jam 9 sampai jam 12."},
          {jp:"デパートは　じゅうじから　にじゅういちじまでです。", id:"Departmen store buka dari jam 10 sampai jam 21."},
          {jp:"ぎんこうは　げつようびから　きんようびまでです。", id:"Bank buka dari hari Senin sampai Jumat."}
        ]
      }
    ]
  },
  {
    tema: "Hari 6",
    judul: "〜を〜 (Partikel penanda objek)",
    sub: "を (dibaca 'o') menandai objek langsung dari kata kerja transitif — benda yang menerima tindakan/aksi.",
    items: [
      {
        pola: "〔名詞〕を　〔動詞〕。",
        romaji: "[meishi] wo [doushi].",
        arti: "Melakukan [kata kerja] pada [benda].",
        catatan: "を ditulis dengan huruf を tapi dibaca 'o'. Menandai benda yang menerima langsung tindakan dari kata kerja — misalnya benda yang dimakan, dibaca, dibeli, dsb.",
        contoh: [
          {jp:"ほんを　よみます。", id:"Membaca buku."},
          {jp:"ごはんを　たべます。", id:"Makan nasi."},
          {jp:"みずを　のみます。", id:"Minum air."}
        ]
      },
      {
        pola: "〜を〜から〜まで　します。",
        romaji: "~ wo ~ kara ~ made shimasu.",
        arti: "Melakukan [aksi pada benda] dari ~ sampai ~.",
        catatan: "を (objek) digabung dengan から〜まで (rentang waktu) dalam satu kalimat — pola yang sering muncul saat menjelaskan jadwal atau durasi kegiatan.",
        contoh: [
          {jp:"べんきょうを　くじから　じゅうにじまで　します。", id:"Belajar dari jam 9 sampai jam 12."},
          {jp:"しごとを　げつようびから　きんようびまで　します。", id:"Bekerja dari hari Senin sampai Jumat."}
        ]
      },
      {
        pola: "〜と〜を　〔動詞〕。",
        romaji: "~ to ~ wo [doushi].",
        arti: "Melakukan [kata kerja] pada [benda A] dan [benda B].",
        catatan: "と menggabungkan dua kata benda menjadi satu objek gabungan sebelum を.",
        contoh: [
          {jp:"パンと　ぎゅうにゅうを　たべます。", id:"Makan roti dan (minum) susu."},
          {jp:"ほんと　ノートを　かいます。", id:"Membeli buku dan buku catatan."}
        ]
      },
      {
        pola: "なにを　〔動詞〕か？",
        romaji: "nani wo [doushi] ka?",
        arti: "Melakukan [kata kerja] apa?",
        catatan: "Pola tanya untuk menanyakan objek dari suatu tindakan. なに (apa) + を (partikel objek) + kata kerja + か.",
        contoh: [
          {jp:"なにを　たべますか？", id:"Makan apa?"},
          {jp:"なにを　のみますか？", id:"Minum apa?"},
          {jp:"なにを　かいましたか？", id:"Beli apa? (lampau)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 6",
    judul: "〜へ〜 (Partikel penanda arah)",
    sub: "へ (ditulis へ, dibaca 'e') menandai arah tujuan suatu gerakan. Untuk kata kerja gerak (iku/kuru/kaeru), に juga boleh dipakai menggantikan へ.",
    items: [
      {
        pola: "〔場所〕へ　〔動詞〕。",
        romaji: "[basho] e [doushi].",
        arti: "Pergi/datang/pulang ke [tempat].",
        catatan: "へ ditulis dengan huruf へ tapi dibaca 'e', bukan 'he'. Selalu diikuti kata kerja gerak (iku, kuru, kaeru).",
        contoh: [
          {jp:"がっこうへ　いきます。", id:"Pergi ke sekolah."},
          {jp:"うちへ　かえります。", id:"Pulang ke rumah."},
          {jp:"にほんへ　きます。", id:"Datang ke Jepang."}
        ]
      },
      {
        pola: "どこへ　〔動詞〕か？",
        romaji: "doko e [doushi] ka?",
        arti: "Pergi/datang/pulang ke mana?",
        catatan: "Pola tanya untuk menanyakan tujuan tempat dari suatu gerakan. どこ (mana) + へ (partikel arah) + kata kerja gerak + か.",
        contoh: [
          {jp:"どこへ　いきますか？", id:"Pergi ke mana?"},
          {jp:"らいしゅう　どこへ　いきますか？", id:"Minggu depan pergi ke mana?"}
        ]
      },
      {
        pola: "〔場所〕へ／に　〔動詞〕。 (へ dan に bisa saling gantikan)",
        romaji: "[basho] e/ni [doushi].",
        arti: "Pergi/datang/pulang ke [tempat]. (dua-duanya boleh)",
        catatan: "CATATAN PENTING: untuk kata kerja gerak, partikel に bisa menggantikan へ tanpa mengubah arti secara signifikan. に sedikit lebih menekankan TITIK tujuan yang spesifik, へ lebih menekankan ARAH/proses menuju ke sana — tapi dalam percakapan sehari-hari, keduanya sering dianggap sama saja dan bisa saling tukar.",
        contoh: [
          {jp:"がっこうへ　いきます。／がっこうに　いきます。", id:"Pergi ke sekolah. (dua-duanya benar)"},
          {jp:"うちへ　かえります。／うちに　かえります。", id:"Pulang ke rumah. (dua-duanya benar)"}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 7
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 7",
    judul: "〜ません (Bentuk negatif kata kerja ~ます)",
    sub: "Kalau kata benda, bentuk negatifnya pakai 〜じゃありません／では　ありません. Kalau kata kerja yang berakhiran 〜ます, cukup ganti akhiran ます jadi ません — partikelnya (を、へ、で、dst) tidak berubah sama sekali.",
    items: [
      {
        pola: "名詞：〜じゃありません／動詞：ます→ません",
        romaji: "meishi: ~ja arimasen / doushi: ~masu → ~masen",
        arti: "Perbandingan bentuk negatif kata benda vs kata kerja.",
        catatan: "Kata benda dan kata kerja punya bentuk negatif yang berbeda: kata benda tambahkan じゃありません (atau では　ありません) setelah kata bendanya, sedangkan kata kerja ~ます tinggal diganti langsung jadi ~ません tanpa tambahan kata lain.",
        contoh: [
          {jp:"がくせいじゃありません。", id:"Bukan siswa. (kata benda, negatif)"},
          {jp:"たべます　→　たべません", id:"makan → tidak makan (kata kerja, negatif)"},
          {jp:"のみます　→　のみません", id:"minum → tidak minum (kata kerja, negatif)"}
        ]
      },
      {
        pola: "〔名詞〕を　〔動詞ません〕。",
        romaji: "[meishi] wo [doushi-masen].",
        arti: "Tidak [kata kerja] [benda].",
        catatan: "Partikel を tetap dipakai persis seperti kalimat positif — yang berubah hanya akhiran kata kerjanya, dari ~ます jadi ~ません.",
        contoh: [
          {jp:"ごはんを　たべません。", id:"Tidak makan nasi."},
          {jp:"みずを　のみません。", id:"Tidak minum air."},
          {jp:"ほんを　よみません。", id:"Tidak membaca buku."}
        ]
      },
      {
        pola: "〔場所〕へ　〔動詞ません〕。",
        romaji: "[basho] e [doushi-masen].",
        arti: "Tidak pergi/datang/pulang ke [tempat].",
        catatan: "Partikel へ juga tetap sama di kalimat negatif — cuma kata kerjanya yang diubah ke bentuk ~ません, sama seperti pola を di atas.",
        contoh: [
          {jp:"がっこうへ　いきません。", id:"Tidak pergi ke sekolah."},
          {jp:"うちへ　かえりません。", id:"Tidak pulang ke rumah."},
          {jp:"にほんへ　きません。", id:"Tidak datang ke Jepang."}
        ]
      }
    ]
  },
  {
    tema: "Hari 7",
    judul: "〜で〜 (Partikel penanda tempat kegiatan)",
    sub: "で menandai tempat BERLANGSUNGNYA suatu kegiatan/aksi — beda dari へ／に yang menandai arah/tujuan dan に yang menandai tempat keberadaan (ada/tidak ada, dengan あります／います).",
    items: [
      {
        pola: "〔場所〕で　〔動詞〕。",
        romaji: "[basho] de [doushi].",
        arti: "Melakukan [kata kerja] di [tempat].",
        catatan: "で menandai lokasi tempat suatu aktivitas terjadi. Dipakai kalau ada kata kerja aktivitas (makan, belajar, bekerja, dsb) — bukan kata kerja keberadaan statis seperti あります／います yang pakai に.",
        contoh: [
          {jp:"がっこうで　べんきょうします。", id:"Belajar di sekolah."},
          {jp:"うちで　ごはんを　たべます。", id:"Makan (nasi) di rumah."},
          {jp:"かいしゃで　しごとを　します。", id:"Bekerja di kantor."}
        ]
      },
      {
        pola: "〔場所〕で　〔名詞Aの名詞B〕を　〔動詞〕。",
        romaji: "[basho] de [meishi A no meishi B] wo [doushi].",
        arti: "Melakukan [kata kerja] pada [benda B-nya A] di [tempat].",
        catatan: "Gabungan partikel で (tempat), の (penghubung dua kata benda), dan を (objek) dalam satu kalimat. Urutannya: tempat＋で → objek＋を → kata kerja di akhir.",
        contoh: [
          {jp:"としょかんで　ほんを　よみます。", id:"Membaca buku di perpustakaan."},
          {jp:"うちで　にほんごの　べんきょうを　します。", id:"Belajar bahasa Jepang di rumah."},
          {jp:"レストランで　ばんごはんを　たべます。", id:"Makan malam di restoran."}
        ]
      },
      {
        pola: "〔場所〕で　〔動詞ません〕。",
        romaji: "[basho] de [doushi-masen].",
        arti: "Tidak melakukan [kata kerja] di [tempat].",
        catatan: "Bentuk negatif tetap pakai partikel で yang sama — hanya kata kerjanya yang diubah ke ~ません, sama seperti pola dengan を dan へ.",
        contoh: [
          {jp:"きょうは　がっこうで　べんきょうしません。", id:"Hari ini tidak belajar di sekolah."},
          {jp:"うちで　テレビを　みません。", id:"Tidak menonton TV di rumah."}
        ]
      },
      {
        pola: "どこで　〔動詞〕か？",
        romaji: "doko de [doushi] ka?",
        arti: "Melakukan [kata kerja] di mana?",
        catatan: "どこ (mana) + で (tempat kegiatan) + kata kerja + か — pola tanya untuk menanyakan di mana suatu aktivitas berlangsung.",
        contoh: [
          {jp:"どこで　ひるごはんを　たべますか？", id:"Makan siang di mana?"},
          {jp:"どこで　にほんごを　べんきょうしますか？", id:"Belajar bahasa Jepang di mana?"},
          {jp:"としょかんで　べんきょうします。", id:"(Saya) belajar di perpustakaan. (jawaban)"}
        ]
      },
      {
        pola: "Kalimat gabungan：の／を／へ／で／〜ません",
        romaji: "(latihan menggabungkan beberapa partikel)",
        arti: "Menggabungkan の, を, へ, で, dan bentuk negatif ~ません dalam beberapa kalimat berurutan.",
        catatan: "Contoh singkat memakai semua partikel yang sudah dipelajari sekaligus, supaya kelihatan bagaimana masing-masing dipakai bersamaan dalam konteks nyata.",
        contoh: [
          {jp:"わたしは　あさ　がっこうへ　いきます。", id:"Saya pergi ke sekolah di pagi hari. (へ = arah)"},
          {jp:"がっこうで　にほんごの　ほんを　よみます。", id:"Di sekolah, membaca buku bahasa Jepang. (で = tempat, の = penghubung, を = objek)"},
          {jp:"ひるごはんは　しょくどうで　たべます。", id:"Makan siang di kantin. (で = tempat)"},
          {jp:"よるは　うちで　テレビを　みません。", id:"Malam hari, tidak menonton TV di rumah. (で = tempat, を = objek, ません = negatif)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 7",
    judul: "〜や〜など (menyebutkan sebagian, tidak lengkap)",
    sub: "や menggabungkan beberapa kata benda sebagai CONTOH SEBAGIAN (tidak menyebutkan semuanya), biasanya ditutup dengan など (dan lain-lain). Beda dari と yang menyebutkan SEMUA item secara lengkap/pasti.",
    items: [
      {
        pola: "〔名詞A〕や　〔名詞B〕など",
        romaji: "[meishi A] ya [meishi B] nado",
        arti: "A, B, dan lain-lain (sebagian contoh saja)",
        catatan: "や dipakai kalau yang disebutkan cuma SEBAGIAN CONTOH dari sesuatu yang lebih banyak — biasanya ditutup dengan など (dsb) di akhir daftar.",
        contoh: [
          {jp:"つくえのうえに　ほんや　ノートなどが　あります。", id:"Di atas meja ada buku, buku catatan, dan lain-lain."},
          {jp:"パンや　たまごなどを　かいます。", id:"Membeli roti, telur, dan lain-lain."}
        ]
      },
      {
        pola: "Perbandingan：と (lengkap) vs や〜など (sebagian)",
        romaji: "to (lengkap) vs ya ~ nado (sebagian)",
        arti: "Perbedaan makna と dan や〜など saat menggabungkan kata benda.",
        catatan: "と = daftar itu PASTI LENGKAP, hanya item yang disebutkan itu saja, tidak ada yang lain. や〜など = daftar itu CONTOH SAJA, masih ada barang lain yang tidak disebutkan satu-satu.",
        contoh: [
          {jp:"つくえのうえに　ほんと　ノートが　あります。", id:"Di atas meja ada buku dan buku catatan. (cuma dua itu, lengkap)"},
          {jp:"つくえのうえに　ほんや　ノートなどが　あります。", id:"Di atas meja ada buku, buku catatan, dan lain-lain. (masih ada barang lain)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 7",
    judul: "なにも　＋　ません (Negasi total — objek)",
    sub: "なにも menggantikan partikel を／が saat menyatakan 'tidak apa-apa'.",
    items: [
      {
        pola: "なにも　〔動詞ません〕。",
        romaji: "nanimo [doushi-masen].",
        arti: "Tidak [kata kerja] apa pun.",
        catatan: "も di sini MENGGANTIKAN partikel を sepenuhnya — bukan 'なにをも', tapi langsung 'なにも'. Selalu diikuti kata kerja bentuk ~ません.",
        contoh: [
          {jp:"なにも　たべません。", id:"Tidak makan apa-apa."},
          {jp:"なにも　のみません。", id:"Tidak minum apa-apa."},
          {jp:"なにも　かいません。", id:"Tidak membeli apa-apa."}
        ]
      }
    ]
  },
  {
    tema: "Hari 7",
    judul: "〔時間〕に　〔動詞〕 (Kata benda waktu + に)",
    sub: "に menandai TITIK WAKTU SPESIFIK (jam, hari, tanggal) tempat suatu kegiatan dilakukan. Kata waktu RELATIF (きょう, あした, きのう, dsb) TIDAK memakai に.",
    items: [
      {
        pola: "〔時刻／曜日／日付〕に　〔動詞〕。",
        romaji: "[jikoku/youbi/hizuke] ni [doushi].",
        arti: "Melakukan [kata kerja] pada [waktu spesifik].",
        catatan: "に dipakai setelah kata waktu yang SPESIFIK dan bisa ditunjuk pasti: jam (しちじ), hari dalam seminggu (げつようび), tanggal, bulan+tahun, dsb.",
        contoh: [
          {jp:"しちじに　おきます。", id:"Bangun jam 7."},
          {jp:"げつようびに　がっこうへ　いきます。", id:"Pergi ke sekolah hari Senin."},
          {jp:"じゅうじに　ねます。", id:"Tidur jam 10."}
        ]
      },
      {
        pola: "❌ 〔きょう／あした／きのう〕に　〜",
        romaji: "❌ kyou/ashita/kinou ni ~ (SALAH)",
        arti: "Kata waktu relatif TIDAK memakai に.",
        catatan: "Kata waktu RELATIF terhadap 'sekarang' (きょう=hari ini, あした=besok, きのう=kemarin, こんしゅう=minggu ini, らいげつ=bulan depan, dsb) TIDAK memakai に sama sekali — langsung diikuti kata kerja atau diletakkan di awal kalimat sebagai keterangan.",
        contoh: [
          {jp:"きょう　がっこうへ　いきます。", id:"Hari ini pergi ke sekolah. (tanpa に)"},
          {jp:"あした　テストが　あります。", id:"Besok ada tes. (tanpa に)"},
          {jp:"きのう　うちで　べんきょうしました。", id:"Kemarin belajar di rumah. (tanpa に)"}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 8
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 8",
    judul: "〜から／〜まで (Dipakai sendiri-sendiri)",
    sub: "から dan まで TIDAK harus selalu berpasangan — masing-masing bisa berdiri sendiri kalau cuma mau menyebutkan salah satu titiknya saja (cuma titik AWAL, atau cuma titik AKHIR).",
    items: [
      {
        pola: "〔titik awal〕からです。",
        romaji: "~ kara desu.",
        arti: "Mulai dari ~.",
        catatan: "PERNYATAAN. から dipakai sendiri (tanpa まで) kalau cuma mau nyebutin TITIK AWAL-nya doang, ditutup です. Contoh paling umum: nyebutin jam BUKA sesuatu tanpa perlu nyebutin jam tutupnya.",
        contoh: [
          {jp:"じゅぎょうは　くじからです。", id:"Pelajaran mulai dari jam 9."},
          {jp:"セールは　あしたからです。", id:"Sale mulai dari besok."},
          {jp:"としょかんは　くじからです。", id:"Perpustakaan buka mulai jam 9."}
        ]
      },
      {
        pola: "〔titik awal〕から　〔動詞ます〕。",
        romaji: "~ kara [doushi-masu].",
        arti: "Mulai dari ~, [kata kerja].",
        catatan: "PERNYATAAN. から juga bisa langsung diikuti kata kerja (bukan cuma です) buat nunjukin sejak kapan/dari mana suatu kegiatan dimulai.",
        contoh: [
          {jp:"くじから　べんきょうします。", id:"Belajar mulai jam 9."},
          {jp:"えきから　あるきます。", id:"Berjalan kaki mulai dari stasiun."}
        ]
      },
      {
        pola: "〔topik〕は　いつから／どこから　ですか？",
        romaji: "~ wa itsu kara / doko kara desu ka?",
        arti: "~ mulai dari kapan/mana?",
        catatan: "PERTANYAAN. いつから (sejak kapan) atau どこから (dari mana) dipakai buat nanya TITIK AWAL doang, tanpa perlu nyebutin titik akhirnya. Cocok banget buat nanya jam buka suatu tempat.",
        contoh: [
          {jp:"じゅぎょうは　いつからですか？", id:"Pelajaran mulai dari kapan?"},
          {jp:"セールは　いつからですか？", id:"Sale mulai kapan?"},
          {jp:"このでんしゃは　どこからですか？", id:"Kereta ini dari mana (asalnya)?"},
          {jp:"としょかんは　なんじからですか？", id:"Perpustakaan mulai buka jam berapa?"}
        ]
      },
      {
        pola: "〔titik akhir〕までです。",
        romaji: "~ made desu.",
        arti: "Sampai ~.",
        catatan: "PERNYATAAN. まで dipakai sendiri (tanpa から) kalau cuma mau nyebutin TITIK AKHIR-nya doang, ditutup です. Contoh paling umum: nyebutin jam TUTUP sesuatu (=buka SAMPAI jam segitu) tanpa perlu nyebutin jam bukanya.",
        contoh: [
          {jp:"じゅぎょうは　じゅうにじまでです。", id:"Pelajaran sampai jam 12."},
          {jp:"セールは　あしたまでです。", id:"Sale sampai besok."},
          {jp:"ぎんこうは　さんじまでです。", id:"Bank tutup jam 3. (buka sampai jam 3)"}
        ]
      },
      {
        pola: "〔titik akhir〕まで　〔動詞ます〕。",
        romaji: "~ made [doushi-masu].",
        arti: "[Kata kerja] sampai ~.",
        catatan: "PERNYATAAN. まで juga bisa langsung diikuti kata kerja buat nunjukin sampai kapan/mana suatu kegiatan berlangsung.",
        contoh: [
          {jp:"じゅうにじまで　べんきょうします。", id:"Belajar sampai jam 12."},
          {jp:"がっこうまで　あるきます。", id:"Berjalan kaki sampai sekolah."}
        ]
      },
      {
        pola: "〔topik〕は　いつまで／どこまで　ですか？",
        romaji: "~ wa itsu made / doko made desu ka?",
        arti: "~ sampai kapan/mana?",
        catatan: "PERTANYAAN. いつまで (sampai kapan) atau どこまで (sampai mana) dipakai buat nanya TITIK AKHIR doang, tanpa perlu nyebutin titik awalnya. Cocok banget buat nanya jam tutup suatu tempat.",
        contoh: [
          {jp:"じゅぎょうは　いつまでですか？", id:"Pelajaran sampai kapan?"},
          {jp:"このでんしゃは　どこまでですか？", id:"Kereta ini sampai mana?"},
          {jp:"ぎんこうは　なんじまでですか？", id:"Bank tutup jam berapa?"}
        ]
      },
      {
        pola: "Perbandingan：から〜まで (gabungan) vs から／まで (sendiri-sendiri)",
        romaji: "kara~made (gabungan) vs kara / made (sendiri)",
        arti: "Kapan digabung, kapan dipisah.",
        catatan: "Digabung (から〜まで) kalau kamu tau/mau nyebutin DUA-DUANYA (titik awal DAN akhir). Dipakai sendiri-sendiri kalau cuma tau/mau nyebutin SALAH SATU titiknya aja — dua-duanya sama-sama valid, tinggal sesuai konteks.",
        contoh: [
          {jp:"くじから　じゅうにじまでです。", id:"Dari jam 9 sampai jam 12. (gabungan, dua titik)"},
          {jp:"くじからです。", id:"Mulai dari jam 9. (cuma titik awal)"},
          {jp:"じゅうにじまでです。", id:"Sampai jam 12. (cuma titik akhir)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 8",
    judul: "どこへも／だれも　＋　ません (Negasi total — tempat & orang)",
    sub: "どこへも menggantikan partikel へ／に saat menyatakan 'tidak pergi ke mana-mana', だれも untuk 'tidak ada siapa-siapa'.",
    items: [
      {
        pola: "どこへも　〔動詞ません〕。",
        romaji: "doko e mo [doushi-masen].",
        arti: "Tidak pergi ke mana pun.",
        catatan: "PERNYATAAN. Beda dari なにも: partikel へ (atau に) TIDAK dihilangkan — も ditambahkan SETELAH へ／に, bukan menggantikannya. Jadi 'どこへも', bukan 'どこも' saja.",
        contoh: [
          {jp:"どこへも　いきません。", id:"Tidak pergi ke mana-mana."},
          {jp:"きょうは　どこへも　いきません。", id:"Hari ini tidak pergi ke mana-mana."},
          {jp:"どこにも　いません。", id:"Tidak ada di mana pun. (に+も, untuk keberadaan)"}
        ]
      },
      {
        pola: "きのう　どこへも　いきませんでした。",
        romaji: "kinou doko e mo ikimasen deshita.",
        arti: "Kemarin tidak pergi ke mana-mana.",
        catatan: "PERNYATAAN (bentuk lampau). ～ませんでした = bentuk negatif lampau dari ～ます. Dipakai kalau nyeritain kejadian yang SUDAH lewat.",
        contoh: [
          {jp:"きのう　どこへも　いきませんでした。", id:"Kemarin tidak pergi ke mana-mana."},
          {jp:"せんしゅう　どこへも　いきませんでした。", id:"Minggu lalu tidak pergi ke mana-mana."}
        ]
      },
      {
        pola: "どこか　いきましたか？　→　いいえ、どこへも　いきませんでした。",
        romaji: "dokoka ikimashita ka? → iie, doko e mo ikimasen deshita.",
        arti: "Pergi ke suatu tempat? → Tidak, tidak pergi ke mana-mana.",
        catatan: "PERTANYAAN + jawabannya. どこへも sendiri TIDAK dipakai buat nanya (gak ada 'どこへもですか？') — kalimat tanyanya pakai どこか (ke suatu tempat, entah mana) dulu, baru dijawab pakai どこへも kalau jawabannya negatif.",
        contoh: [
          {jp:"きょう　どこか　いきますか？", id:"Hari ini mau pergi ke suatu tempat?"},
          {jp:"いいえ、どこへも　いきません。", id:"Tidak, saya tidak pergi ke mana-mana."},
          {jp:"はい、がっこうへ　いきます。", id:"Ya, saya pergi ke sekolah. (jawaban positif, gak pakai どこへも)"}
        ]
      },
      {
        pola: "だれも　〔動詞ません〕。",
        romaji: "daremo [doushi-masen].",
        arti: "Tidak ada siapa pun yang [kata kerja]. / Tidak [kata kerja] dengan siapa pun.",
        catatan: "も di sini menggantikan partikel が — sama seperti なにも, langsung だれも tanpa partikel tambahan.",
        contoh: [
          {jp:"だれも　いません。", id:"Tidak ada siapa-siapa."},
          {jp:"だれも　しりません。", id:"Tidak ada yang tahu."}
        ]
      },
      {
        pola: "Rangkuman：を／が→hilang(も saja)／へ・に→tetap＋も",
        romaji: "(catatan gabungan)",
        arti: "Ringkasan aturan も menggantikan partikel lain.",
        catatan: "INGAT baik-baik: partikel を dan が DIHILANGKAN total lalu diganti も (なにを→なにも, だれが→だれも). Tapi partikel へ dan に TETAP DITULIS, も cuma ditambahkan setelahnya (どこへ→どこへも, どこに→どこにも).",
        contoh: [
          {jp:"なにも　かいません。", id:"Tidak membeli apa-apa. (を hilang total)"},
          {jp:"どこへも　かいものに　いきません。", id:"Tidak pergi belanja ke mana-mana. (へ tetap ada)"}
        ]
      },
      {
        pola: "Kalimat gabungan：へ／に・を・で・ません・や〜など・なにも／どこへも",
        romaji: "(latihan menggabungkan semua pola & partikel)",
        arti: "Menggabungkan pola-pola yang sudah dipelajari dalam beberapa kalimat.",
        catatan: "Contoh singkat memakai semua partikel & pola yang sudah dipelajari sekaligus — biar kelihatan bagaimana masing-masing nyambung satu sama lain dalam konteks nyata.",
        contoh: [
          {jp:"げつようびに　がっこうへ　いきます。", id:"Hari Senin pergi ke sekolah. (waktu+に, arah+へ)"},
          {jp:"がっこうで　ほんや　ノートなどを　よみます。", id:"Di sekolah membaca buku, buku catatan, dan lain-lain. (で=tempat, や〜など=sebagian, を=objek)"},
          {jp:"きょうは　どこへも　いきません。", id:"Hari ini tidak pergi ke mana-mana. (waktu relatif tanpa に, どこへも+ません)"},
          {jp:"うちで　なにも　たべません。", id:"Di rumah tidak makan apa-apa. (で=tempat, なにも+ません)"}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 9
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 9",
    judul: "〔tempat1〕の　〔tempat2〕は　〔方角〕です (Menyatakan letak/arah relatif)",
    sub: "Pola 〜の〜 dari Hari 1 (penghubung kata benda) dipakai lagi di sini, tapi sekarang buat nunjukin posisi suatu tempat relatif terhadap tempat lain, digabung sama kosakata arah mata angin (きた／みなみ／ひがし／にし) dari Bab 4.",
    items: [
      {
        pola: "〔tempat1〕の　〔tempat2〕は　〔方角〕です。",
        romaji: "[tempat1] no [tempat2] wa [houkou] desu.",
        arti: "[Arah dari tempat1] adalah [tempat2].",
        catatan: "Struktur: 'tempat2-nya tempat1 itu arah'. Jadi kalau mau bilang 'utara sekolah adalah stasiun', urutannya がっこうの　きたは　えきです (bukan きたの　がっこうは...). 〜の〜 di sini fungsinya sama kayak Hari 1 (menghubungkan 2 kata benda), cuma sekarang kata benda keduanya berupa arah.",
        contoh: [
          {jp:"がっこうの　きたは　えきです。", id:"Utara sekolah adalah stasiun."},
          {jp:"としょかんの　みなみは　こうえんです。", id:"Selatan perpustakaan adalah taman."},
          {jp:"うちの　ひがしは　かわです。", id:"Timur rumah adalah sungai."}
        ]
      }
    ]
  },
  {
    tema: "Hari 9",
    judul: "〜から〜まで　どのぐらいですか？ (Menanyakan jarak/durasi)",
    sub: "Gabungan から〜まで (Hari 6 & 8) dengan どのぐらい (Bab 4) — dipakai buat nanya seberapa jauh atau seberapa lama dari satu titik ke titik lain.",
    items: [
      {
        pola: "〔A〕から　〔B〕まで　どのぐらいですか？",
        romaji: "[A] kara [B] made dono gurai desu ka?",
        arti: "Dari [A] sampai [B] kira-kira berapa lama/jauh?",
        catatan: "から menandai titik awal, まで menandai titik akhir (persis kayak Hari 6 & 8) — cuma sekarang diikuti どのぐらい buat nanya jaraknya/lamanya, bukan cuma titik awal-akhirnya doang.",
        contoh: [
          {jp:"うちから　がっこうまで　どのぐらいですか？", id:"Dari rumah sampai sekolah kira-kira berapa lama?"},
          {jp:"えきから　こうえんまで　どのぐらいですか？", id:"Dari stasiun sampai taman kira-kira berapa jauh?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 9",
    judul: "〔のりもの〕で　〔動詞〕 (Naik apa — partikel で cara/alat)",
    sub: "Partikel で di sini beda fungsi sama で di Hari 7 (yang buat nunjukin TEMPAT kegiatan). Di sini で dipakai buat nunjukin CARA/ALAT — naik kendaraan apa buat pergi.",
    items: [
      {
        pola: "〔のりもの〕で　〔動詞〕。",
        romaji: "[norimono] de [doushi].",
        arti: "Pergi/dst dengan naik [kendaraan].",
        catatan: "で = partikel cara/alat (beda dari で Hari 7 yang berarti 'tempat kegiatan'). へ (arah, Hari 6) sering muncul bareng で di kalimat yang sama. Perkecualian: あるいて (jalan kaki) TIDAK pakai で — langsung あるいて　いきます, bukan あるいてで　いきます.",
        contoh: [
          {jp:"でんしゃで　がっこうへ　いきます。", id:"Pergi ke sekolah naik kereta. (で=alat, へ=arah)"},
          {jp:"くるまで　かいしゃへ　いきます。", id:"Pergi ke kantor naik mobil."},
          {jp:"あるいて　うちへ　かえります。", id:"Pulang ke rumah dengan jalan kaki. (あるいて tanpa で)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 9",
    judul: "〔じかん〕くらいです (Menjawab durasi)",
    sub: "Jawaban buat pertanyaan どのぐらいですか di atas — pakai 〜じかん (Bab 4) + くらい (Bab 4, 'kira-kira/sekitar').",
    items: [
      {
        pola: "〔すうじ〕じかんくらいです。",
        romaji: "[suuji] jikan kurai desu.",
        arti: "Kira-kira [angka] jam.",
        catatan: "くらい = kira-kira/sekitar, dipasang setelah durasi buat nunjukin itu perkiraan (bukan waktu pasti). Bisa juga dipakai buat satuan lain, bukan cuma じかん — contohnya ～ふんくらい (sekitar ~menit).",
        contoh: [
          {jp:"うちから　がっこうまで　どのぐらいですか？　－　いちじかんくらいです。", id:"Dari rumah sampai sekolah berapa lama? — Sekitar 1 jam."},
          {jp:"でんしゃで　にじかんくらいです。", id:"Naik kereta sekitar 2 jam. (で=alat dari pola sebelumnya)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 9",
    judul: "〔kata benda〕は　〔kata sifat〕です (Kata sifat sebagai predikat — beda い vs な)",
    sub: "い-keiyoushi (kata sifat-い, contoh: たかい) dan な-keiyoushi (kata sifat-な, contoh: しずか) sama-sama langsung diikuti です kalau posisinya jadi predikat (kata benda は 〜です). Bedanya ada di bentuk NEGATIF: い-keiyoushi buang い lalu tambah くないです, sedangkan な-keiyoushi negatifnya SAMA PERSIS kayak kata benda di Hari 1 (〜じゃありません／ではありません) — な-nya sendiri TIDAK dipakai di sini.",
    items: [
      {
        pola: "〔KB〕は　〔い形容詞〕です。／〜くないです。／〜ですか？",
        romaji: "[KB] wa [i-keiyoushi] desu. / ~kunai desu. / ~ desu ka?",
        arti: "[Benda] itu [sifat]. / [Benda] itu tidak [sifat]. / Apakah [benda] itu [sifat]?",
        catatan: "い-keiyoushi SELALU berakhiran い. Bentuk negatif: buang い di akhir, ganti くないです (たかい → たかくないです). Pengecualian: いい (bagus) negatifnya tidak beraturan, jadi よくないです, bukan いくないです.",
        contoh: [
          {jp:"あの　やまは　たかいです。", id:"Gunung itu tinggi. (positif)"},
          {jp:"あの　やまは　たかくないです。", id:"Gunung itu tidak tinggi. (negatif)"},
          {jp:"あの　やまは　たかいですか？", id:"Apakah gunung itu tinggi? (tanya)"}
        ]
      },
      {
        pola: "〔KB〕は　〔な形容詞〕です。／〜じゃありません。／〜ですか？",
        romaji: "[KB] wa [na-keiyoushi] desu. / ~ja arimasen. / ~ desu ka?",
        arti: "[Benda] itu [sifat]. / [Benda] itu tidak [sifat]. / Apakah [benda] itu [sifat]?",
        catatan: "な-keiyoushi kalau jadi predikat (posisi ini), な-nya HILANG — langsung 〜です, persis kayak kata benda biasa. Makanya bentuk negatifnya juga sama kayak kata benda di Hari 1: 〜じゃありません／ではありません, BUKAN 〜くないです (itu cuma buat い-keiyoushi).",
        contoh: [
          {jp:"この　まちは　にぎやかです。", id:"Kota ini ramai. (positif)"},
          {jp:"この　まちは　にぎやかじゃありません。", id:"Kota ini tidak ramai. (negatif, sama pola kayak Hari 1)"},
          {jp:"この　まちは　にぎやかですか？", id:"Apakah kota ini ramai? (tanya)"}
        ]
      }
    ]
  },
  {
    tema: "Hari 9",
    judul: "〔kata sifat〕＋〔kata benda〕です (Kata sifat menerangkan kata benda langsung — beda い vs な)",
    sub: "Beda sama pola sebelumnya (kata sifat jadi predikat), di sini kata sifat NEMPEL langsung di depan kata benda buat nerangin. い-keiyoushi nempel langsung (かっこいい　ひと), tapi な-keiyoushi WAJIB pake な di antaranya (しずかな　ところ) — な-nya justru MUNCUL di sini, kebalikan dari pola predikatif di atas.",
    items: [
      {
        pola: "〔い形容詞〕　〔KB〕です。／〜じゃありません。／〜ですか？",
        romaji: "[i-keiyoushi] [KB] desu. / ~ja arimasen. / ~ desu ka?",
        arti: "[Benda] yang [sifat]. (negasi & tanya menyasar keseluruhan frasanya, bukan sifat sendiri)",
        catatan: "い-keiyoushi langsung nempel di depan kata benda, tanpa tambahan apa pun (beda dari な-keiyoushi di item berikutnya). Karena '〔sifat〕〔KB〕' di sini jadi satu frasa benda utuh, negatif & tanyanya ikut pola kata benda biasa (〜じゃありません／ですか) yang nempel di です paling belakang, BUKAN くないです di tengah frasa.",
        contoh: [
          {jp:"あの　ひとは　かっこいい　ひとです。", id:"Orang itu orang yang keren. (positif)"},
          {jp:"あの　ひとは　かっこいい　ひとじゃありません。", id:"Orang itu bukan orang yang keren. (negatif)"},
          {jp:"あの　ひとは　かっこいい　ひとですか？", id:"Apakah orang itu orang yang keren? (tanya)"}
        ]
      },
      {
        pola: "〔な形容詞〕な　〔KB〕です。／〜じゃありません。／〜ですか？",
        romaji: "[na-keiyoushi] na [KB] desu. / ~ja arimasen. / ~ desu ka?",
        arti: "[Benda] yang [sifat].",
        catatan: "な-keiyoushi WAJIB tambah な sebelum kata benda yang diterangkan (しずか + な + ところ) — kalau なnya dihilangkan di sini, kalimatnya jadi salah. Ini kebalikan dari pola predikatif sebelumnya, di mana な justru hilang.",
        contoh: [
          {jp:"としょかんは　しずかな　ところです。", id:"Perpustakaan adalah tempat yang sunyi. (positif)"},
          {jp:"としょかんは　しずかな　ところじゃありません。", id:"Perpustakaan bukan tempat yang sunyi. (negatif)"},
          {jp:"としょかんは　しずかな　ところですか？", id:"Apakah perpustakaan tempat yang sunyi? (tanya)"}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // HARI 10
  // ═══════════════════════════════════════════════
  {
    tema: "Hari 10",
    judul: "〜か (Partikel tanya di akhir kalimat)",
    sub: "か bisa ditempel di akhir kalimat APA PUN (kata kerja, kata sifat, kata benda) untuk mengubahnya jadi pertanyaan — bukan cuma 〜ですか seperti di Hari 1, tapi bentuk umumnya.",
    items: [
      {
        pola: "〔kalimat〕＋　か。",
        romaji: "~ ka.",
        arti: "Apakah ~? (pertanyaan umum)",
        catatan: "か = partikel akhir kalimat yang menandai pertanyaan. Ditempel di akhir kalimat lengkap, apa pun jenis predikatnya (kata kerja, kata sifat-い, kata sifat-な, atau kata benda + です).",
        contoh: [
          {jp:"あした　がっこうに　いきますか。", id:"Apakah besok pergi ke sekolah?"},
          {jp:"この　ほんは　おもしろいですか。", id:"Apakah buku ini menarik?"},
          {jp:"つくえの　うえに　ねこが　いますか。", id:"Apakah ada kucing di atas meja?"}
        ]
      }
    ]
  },
  {
    tema: "Hari 10",
    judul: "〜ね (Partikel akhir: mengajak setuju / jeda saat menjawab)",
    sub: "ね ditempel di akhir kalimat untuk mengajak lawan bicara mengiyakan/menyetujui sesuatu yang pembicara sudah cukup yakin — beda dari か yang menanyakan info baru. Bentuk そうですね juga dipakai berdiri sendiri sebagai jeda sebelum menjawab.",
    items: [
      {
        pola: "〔kalimat〕＋　ね。",
        romaji: "~ ne.",
        arti: "~ ya? / ~ kan? (mengajak setuju)",
        catatan: "ね dipakai saat pembicara mengira lawan bicara akan setuju, mengajak konfirmasi kesamaan pendapat. か menanyakan info yang belum diketahui, ね mengonfirmasi apa yang sudah dirasa sama-sama.",
        contoh: [
          {jp:"きょうは　あついですね。", id:"Hari ini panas, ya."},
          {jp:"この　まちは　にぎやかですね。", id:"Kota ini ramai, ya."},
          {jp:"あの　やまは　たかいですね。", id:"Gunung itu tinggi, ya."}
        ]
      },
      {
        pola: "そうですね…",
        romaji: "sou desu ne...",
        arti: "Hmm, ya... / Begitu ya... (jeda sebelum menjawab)",
        catatan: "そうですね dipakai berdiri sendiri sebagai jeda saat berpikir sebelum menjawab, mirip 'hmm, gimana ya' dalam bahasa Indonesia. Beda dari そうですか yang dipakai untuk menerima/menanggapi info baru dari lawan bicara.",
        contoh: [
          {jp:"しゅみは　なんですか？　－　そうですね…　どくしょです。", id:"Hobinya apa? — Hmm, ya... membaca buku."},
          {jp:"どんな　ひとですか？　－　そうですね…　しんせつな　ひとです。", id:"Orangnya seperti apa? — Hmm, ya... orang yang baik hati."}
        ]
      }
    ]
  },
  {
    tema: "Hari 10",
    judul: "〜が〜 (tapi — menggabungkan dua kalimat yang berlawanan)",
    sub: "が sebagai penghubung antar-kalimat (bukan partikel subjek) berarti 'tapi', menggabungkan dua kalimat berkonteks berlawanan jadi satu kalimat. でも adalah versi santai/informalnya, ditulis terpisah di awal kalimat baru.",
    items: [
      {
        pola: "〔kalimat１〕が、〔kalimat２〕。",
        romaji: "~ga, ~.",
        arti: "~, tapi ~.",
        catatan: "が di sini menggabungkan dua kalimat penuh jadi satu, dengan isi kalimat kedua berlawanan/kontras dari kalimat pertama. Lebih formal, sering dipakai dalam kalimat tertulis atau sopan.",
        contoh: [
          {jp:"この　まちは　にぎやかですが、しずかな　ところも　あります。", id:"Kota ini ramai, tapi ada juga tempat yang sunyi."},
          {jp:"あの　やまは　たかいですが、きれいです。", id:"Gunung itu tinggi, tapi indah."}
        ]
      },
      {
        pola: "〔kalimat１〕。でも、〔kalimat２〕。",
        romaji: "~. Demo, ~.",
        arti: "~. Tapi, ~. (santai/informal)",
        catatan: "でも adalah versi santai dari 〜が〜, tapi ditulis sebagai kalimat BARU yang terpisah (setelah titik), bukan disambung di kalimat yang sama. Lebih sering dipakai dalam percakapan sehari-hari.",
        contoh: [
          {jp:"あの　ひとは　かっこいいです。でも、しんせつじゃありません。", id:"Orang itu keren. Tapi, tidak baik hati."},
          {jp:"テストは　むずかしいです。でも、おもしろいです。", id:"Ujiannya sulit. Tapi, menarik."}
        ]
      }
    ]
  },
  {
    tema: "Hari 10",
    judul: "〜そして〜 (dan lalu — menggabungkan dua kalimat yang selaras)",
    sub: "そして menyambung dua kalimat terpisah jadi satu cerita berlanjut dengan konteks yang SAMA/senada — kebalikan dari が／でも yang menghubungkan hal berlawanan.",
    items: [
      {
        pola: "〔kalimat１〕。そして、〔kalimat２〕。",
        romaji: "~. Soshite, ~.",
        arti: "~. Dan lagi, ~. (kalimat kedua selaras/senada dengan yang pertama)",
        catatan: "そして ditulis di awal kalimat baru yang terpisah (setelah titik), untuk melanjutkan informasi yang searah/senada dengan kalimat sebelumnya — bukan berlawanan seperti が／でも.",
        contoh: [
          {jp:"としょかんは　しずかです。そして、きれいです。", id:"Perpustakaan itu sunyi. Dan lagi, bersih."},
          {jp:"わたしは　がくせいです。そして、にほんごを　べんきょうしています。", id:"Saya siswa. Dan lagi, sedang belajar bahasa Jepang."}
        ]
      }
    ]
  },
  {
    tema: "Hari 10",
    judul: "〜が　あります (Menyatakan keberadaan & kepemilikan benda)",
    sub: "〜が　あります menyatakan ada suatu benda MATI di suatu tempat (keberadaan), atau bisa juga dipakai tanpa keterangan tempat untuk menyatakan kepemilikan benda oleh seseorang. Ingat: あります khusus benda mati, kalau makhluk hidup pakai います (Hari sebelumnya).",
    items: [
      {
        pola: "〔tempat〕に　〔KB〕が　あります。",
        romaji: "[tempat] ni [KB] ga arimasu.",
        arti: "Di [tempat] ada [benda]. (keberadaan)",
        catatan: "に menandai lokasi, が menandai benda yang keberadaannya dinyatakan, あります menyatakan 'ada' untuk benda mati/tak bergerak.",
        contoh: [
          {jp:"つくえの　うえに　ほんが　あります。", id:"Di atas meja ada buku."},
          {jp:"がっこうの　なかに　としょかんが　あります。", id:"Di dalam sekolah ada perpustakaan."}
        ]
      },
      {
        pola: "〔orang〕は　〔KB〕が　あります。",
        romaji: "[orang] wa [KB] ga arimasu.",
        arti: "~ punya ~. (kepemilikan)",
        catatan: "Pola sama, tapi tanpa keterangan tempat (に): は menandai orang si pemilik, が menandai benda yang dimiliki. Konteks kalimat yang membedakan makna 'keberadaan' vs 'kepemilikan'.",
        contoh: [
          {jp:"わたしは　じしょが　あります。", id:"Saya punya kamus."},
          {jp:"たなかさんは　くるまが　あります。", id:"Tanaka-san punya mobil."}
        ]
      }
    ]
  },
  {
    tema: "Hari 10",
    judul: "どんな　〔KB〕ですか？ (Menanyakan keadaan/sifat suatu hal)",
    sub: "どんな + kata benda + ですか menanyakan seperti apa/bagaimana sifat suatu benda, orang, tempat, atau kejadian. Jawabannya biasanya kata sifat yang menerangkan kata benda tersebut (lihat pola い/な-keiyoushi + KB di Hari 9).",
    items: [
      {
        pola: "どんな　〔KB〕ですか？",
        romaji: "donna [KB] desu ka?",
        arti: "[Benda] itu (seperti) apa/bagaimana?",
        catatan: "どんな selalu langsung nempel di depan kata benda (tanpa な terpisah seperti な-keiyoushi), lalu ditutup dengan ですか. Jawabannya biasanya pakai pola 〔kata sifat〕〔KB〕です dari Hari 9.",
        contoh: [
          {jp:"あの　やまは　どんな　やまですか？　－　たかい　やまです。", id:"Gunung itu gunung yang seperti apa? — Gunung yang tinggi."},
          {jp:"せんせいは　どんな　ひとですか？　－　しんせつな　ひとです。", id:"Gurunya orang yang seperti apa? — Orang yang baik hati."},
          {jp:"としょかんは　どんな　ところですか？　－　しずかな　ところです。", id:"Perpustakaan itu tempat yang seperti apa? — Tempat yang sunyi."}
        ]
      }
    ]
  },
  // ═══════════════════════════════════════════════
  // MATERI TAMBAHAN
  // ═══════════════════════════════════════════════
  {
    tema: "Materi Tambahan",
    judul: "おなまえは？ (Menanyakan & menyatakan nama)",
    sub: "Pola dasar berkenalan — menanyakan dan menyebutkan nama.",
    items: [
      {
        pola: "おなまえは？ / おなまえは　なんですか？",
        romaji: "onamae wa? / onamae wa nan desu ka?",
        arti: "Siapa namamu? / Namanya siapa?",
        catatan: "Prefiks 'o' (お) menambahkan kesan sopan. Tanpa 'o': なまえは？ lebih santai. Jawab: ～です.",
        contoh: [
          {jp:"おなまえは　なんですか？", id:"Namanya siapa?"},
          {jp:"わたしの　なまえは　レンディです。", id:"Nama saya Rendi."}
        ]
      }
    ]
  },
  {
    tema: "Materi Tambahan",
    judul: "なんにんですか？ (Menanyakan jumlah orang)",
    sub: "Pola menanyakan jumlah orang menggunakan counter khusus.",
    items: [
      {
        pola: "なんにんですか？",
        romaji: "nannin desu ka?",
        arti: "Berapa orang?",
        catatan: "Counter orang: ひとり (1), ふたり (2), さんにん (3), よにん (4)...",
        contoh: [
          {jp:"かぞくは　なんにんですか？", id:"Keluarganya berapa orang?"},
          {jp:"よにんです。", id:"(Ada) empat orang."}
        ]
      }
    ]
  },
  {
    tema: "Materi Tambahan",
    judul: "なんかいですか？ (Menanyakan lantai)",
    sub: "Pola menanyakan dan menyatakan posisi lantai gedung.",
    items: [
      {
        pola: "〜は　なんかいですか？",
        romaji: "~ wa nankai desu ka?",
        arti: "~ ada di lantai berapa?",
        catatan: "〜かい (階) = lantai. Perhatikan: いっかい (1), にかい (2), さんがい (3, PENGECUALIAN — bukan さんかい!), よんかい (4), ごかい (5).",
        contoh: [
          {jp:"レストランは　なんかいですか？", id:"Restorannya di lantai berapa?"},
          {jp:"さんがいです。", id:"Di lantai tiga."},
          {jp:"ちかいっかいに　スーパーが　あります。", id:"Di basement lantai 1 ada supermarket."}
        ]
      }
    ]
  }

]; // end BUNPOU

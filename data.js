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
{k:"ねこ",r:"neko",a:"kucing",n:"Kanji: 猫. Hewan peliharaan paling populer di Jepang, sering muncul dalam budaya pop."},
{k:"いぬ",r:"inu",a:"anjing",n:"Kanji: 犬. Lambang tahun anjing dalam kalender zodiak Jepang."},
{k:"きつね",r:"kitsune",a:"rubah",n:"Kanji: 狐. Makhluk mistis dalam mitologi Jepang, dianggap utusan dewa Inari."},
{k:"さかな",r:"sakana",a:"ikan",n:"Kanji: 魚. Awalnya berarti 'teman minum sake' karena ikan sering jadi camilan."},
{k:"にわとり",r:"niwatori",a:"ayam",n:"Kanji: 鶏. Secara harfiah 'burung halaman rumah'."},
{k:"ぞう",r:"zou",a:"gajah",n:"Kanji: 象. Sering ada di kebun binatang Jepang."},
{k:"パンダ",r:"panda",a:"panda",n:"Ditulis katakana karena kata serapan. Panda raksasa dari Cina sangat populer di Jepang."}
]},
"Orang & Keluarga":{rows:[
{k:"わたし",r:"watashi",a:"saya",n:"Kata ganti orang pertama paling netral/formal."},
{k:"あなた",r:"anata",a:"kamu",n:"Terdengar formal; dalam percakapan sehari-hari orang Jepang lebih suka menyebut nama langsung."},
{k:"ひと",r:"hito",a:"orang",n:"Kanji: 人. Kata dasar untuk manusia/orang."},
{k:"せんせい",r:"sensei",a:"guru",n:"Kanji: 先生. Dipakai juga untuk dokter, pengacara, atau siapapun yang ahli di bidangnya."},
{k:"がくせい",r:"gakusei",a:"siswa",n:"Kanji: 学生. Gabungan 学 (belajar) + 生 (orang)."},
{k:"いしゃ",r:"isha",a:"dokter",n:"Kanji: 医者. Disapa dengan 'sensei' dalam percakapan."},
{k:"ともだち",r:"tomodachi",a:"teman",n:"Kanji: 友達. Salah satu kata paling dikenal dari anime/manga."},
{k:"ふたり",r:"futari",a:"dua orang",n:"Kanji: 二人. Cara hitung orang: hitōri (1), futari (2), san-nin (3+)."},
{k:"かぞく",r:"kazoku",a:"keluarga",n:"Kanji: 家族. Gabungan 家 (rumah) + 族 (klan)."},
{k:"こども",r:"kodomo",a:"anak",n:"Kanji: 子供. Hari Anak-anak (Kodomo no Hi) dirayakan 5 Mei."},
{k:"はは",r:"haha",a:"ibu (sendiri)",n:"Dipakai saat membicarakan ibu sendiri kepada orang lain."},
{k:"おかあさん",r:"okaasan",a:"ibu",n:"Dipakai untuk menyapa ibu sendiri atau menyebut ibu orang lain dengan hormat."},
{k:"おとうさん",r:"otousan",a:"ayah",n:"Bentuk hormat. Tanpa 'お' (tousan) lebih santai."},
{k:"おとうと",r:"otouto",a:"adik laki-laki",n:"Untuk menyebut adik sendiri. Untuk adik orang lain pakai 'otouto-san'."},
{k:"おにいさん",r:"oniisan",a:"kakak laki-laki",n:"Bentuk sopan untuk kakak laki-laki orang lain."},
{k:"おねえさん",r:"oneesan",a:"kakak perempuan",n:"Huruf 'ね' digandakan karena vokal panjang."},
{k:"いもうと",r:"imouto",a:"adik perempuan",n:"Untuk menyebut adik sendiri. Untuk adik orang lain tambah '-san'."},
{k:"おばあさん",r:"obaasan",a:"nenek",n:"Perhatikan vokal panjang 'ばあ'. Beda dengan 'obasan' (bibi)."},
{k:"おじいさん",r:"ojiisan",a:"kakek",n:"Vokal panjang 'じい' penting. Beda dengan 'ojisan' (paman)."},
{k:"けいさつ",r:"keisatsu",a:"polisi",n:"Kanji: 警察. Polisi Jepang dikenal ramah; ada koban (pos polisi kecil) di tiap sudut."}
]},
"Tempat":{rows:[
{k:"いえ",r:"ie",a:"rumah",n:"Kanji: 家. Merujuk pada bangunan fisik rumah secara umum."},
{k:"うち",r:"uchi",a:"rumah (sendiri)",n:"Lebih personal dari 'ie'. Juga bisa berarti 'dalam kelompok'."},
{k:"えき",r:"eki",a:"stasiun",n:"Kanji: 駅. Stasiun kereta sangat penting; menjadi pusat komunitas kota."},
{k:"こうえん",r:"kouen",a:"taman",n:"Kanji: 公園. Tempat hanami (melihat bunga sakura) di musim semi."},
{k:"がっこう",r:"gakkou",a:"sekolah",n:"Kanji: 学校. Gabungan 学 (belajar) + 校 (lembaga)."},
{k:"だいがく",r:"daigaku",a:"universitas",n:"Kanji: 大学. Gabungan 大 (besar) + 学 (belajar)."},
{k:"びょういん",r:"byouin",a:"rumah sakit",n:"Kanji: 病院. Jangan tertukar dengan 'biyouin' (美容院) yang berarti salon kecantikan!"},
{k:"くうこう",r:"kuukou",a:"bandara",n:"Kanji: 空港. Gabungan 空 (langit) + 港 (pelabuhan). Harfiah: 'pelabuhan udara'."},
{k:"きっさてん",r:"kissaten",a:"kedai kopi",n:"Kanji: 喫茶店. Kedai kopi tradisional Jepang. Berbeda dengan kafe modern."},
{k:"うみ",r:"umi",a:"laut",n:"Kanji: 海. Jepang negara kepulauan; laut sangat penting dalam budayanya."},
{k:"かわ",r:"kawa",a:"sungai",n:"Kanji: 川. Juga dibaca 'gawa' saat digabung (contoh: Sumida-gawa)."},
{k:"こうこう",r:"koukou",a:"SMA",n:"Kanji: 高校. Kependekan dari こうとうがっこう. Wajib belajar di Jepang sampai SMP, SMA tidak wajib tapi 98% melanjutkan."},
{k:"にほんごがっこう",r:"nihongo gakkou",a:"sekolah bahasa Jepang",n:"Kanji: 日本語学校. Sekolah khusus bahasa Jepang untuk orang asing."},
{k:"としょかん",r:"toshokan",a:"perpustakaan",n:"Kanji: 図書館. Tosho (buku) + Kan (gedung). Perpustakaan umum di Jepang biasanya gratis dan buka sampai malam."},
{k:"オフィス／じむしょ",r:"ofisu / jimusho",a:"kantor",n:"オフィス = serapan 'office' (santai). じむしょ (事務所) = istilah asli Jepang, lebih formal."},
{k:"きょうしつ",r:"kyoushitsu",a:"kelas / ruang kelas",n:"Kanji: 教室. Kyou (mengajar) + Shitsu (ruangan). Dipakai di sekolah maupun tempat kursus."},
{k:"へや",r:"heya",a:"kamar / ruangan",n:"Kanji: 部屋. Kata umum untuk kamar/ruangan apapun. 'Watashi no heya' = kamar saya."},
{k:"きつえんじょ",r:"kitsuenjo",a:"area merokok",n:"Kanji: 喫煙所. Kitsu (menghisap) + En (asap) + Jo (tempat)."},
{k:"スーパー",r:"suupaa",a:"supermarket",n:"Serapan 'supermarket'. Di Jepang tutup cukup malam (22:00-23:00), ada area bento diskon jelang tutup."},
{k:"レストラン",r:"resutoran",a:"restoran",n:"Serapan 'restaurant'. Sering punya mesin pemesan tiket (食券) di pintu masuk."},
{k:"ビル",r:"biru",a:"gedung",n:"Serapan 'building'. Jangan tertukar dengan ビール (biiru = bir)!"},
{k:"トイレ",r:"toire",a:"toilet / kamar kecil",n:"Serapan 'toilet'. Di Jepang toilet terkenal canggih — ada toilet pintar (washlet). Selalu bersih dan tersedia di mana-mana."},
{k:"１００えんしょっぷ",r:"hyaku en shoppu",a:"toko serba 100 yen",n:"Toko dengan semua barang seharga 100 yen (±Rp 10.000). Daiso adalah yang paling terkenal."},
{k:"インフォメーション",r:"infomeeshon",a:"bagian informasi",n:"Serapan 'information'. Meja informasi biasanya ada di dekat pintu masuk gedung atau stasiun."},
{k:"エスカレーター",r:"esukareetaa",a:"eskalator / tangga berjalan",n:"Serapan 'escalator'. Di Jepang ada aturan tak tertulis: berdiri di sisi kiri (Osaka: kanan) agar orang buru-buru bisa lewat."},
{k:"エレベーター",r:"erebeetaa",a:"elevator / lift",n:"Serapan 'elevator'. Ada suara/musik saat pintu terbuka-tertutup. Sangat bersih dan terawat."},
{k:"レジ",r:"reji",a:"kasir",n:"Dari 'register' (mesin kasir). Di Jepang kasir menaruh kembalian di nampan kecil, bukan langsung ke tangan."},
{k:"ATM（エーティーエム）",r:"eetiiemu",a:"mesin ATM",n:"ATM di Jepang punya jam operasional (tidak 24 jam di semua tempat). ATM di 7-Eleven dan kantor pos paling mudah dipakai orang asing."}
]},
"Hobi & Olahraga":{rows:[
{k:"しゅみ",r:"shumi",a:"hobi",n:"Kanji: 趣味. 'Oshumi wa nan desu ka?' = Apa hobimu? Pertanyaan umum saat kenalan."},
{k:"サッカー",r:"sakkaa",a:"sepak bola",n:"Serapan 'soccer'. Tim nasional Jepang dijuluki 'Samurai Blue'."},
{k:"テニス",r:"tenisu",a:"tenis",n:"Serapan 'tennis'. Salah satu olahraga paling populer di Jepang."},
{k:"すいえい",r:"suiei",a:"renang",n:"Kanji: 水泳. Sui (air) + Ei (berenang). Pelajaran wajib di sekolah Jepang."},
{k:"どくしょ",r:"dokusho",a:"membaca buku",n:"Kanji: 読書. Doku (membaca) + Sho (tulisan/buku). Budaya membaca sangat tinggi di Jepang."},
{k:"りょうり",r:"ryouri",a:"masak / masakan",n:"Kanji: 料理. 'Ryouri ga suki desu' = Saya suka memasak."},
{k:"たべあるき",r:"tabearuki",a:"wisata kuliner jalan kaki",n:"Kanji: 食べ歩き. Tabe (makan) + Aruki (berjalan). Berkeliling sambil mencicipi jajanan — populer di kawasan wisata Jepang."}
]},
"Kendaraan":{rows:[
{k:"でんしゃ",r:"densha",a:"kereta",n:"Kanji: 電車. Gabungan 電 (listrik) + 車 (kendaraan). Kereta listrik, bukan uap."},
{k:"ひこうき",r:"hikouki",a:"pesawat",n:"Kanji: 飛行機. Gabungan 飛 (terbang) + 行 (pergi) + 機 (mesin)."},
{k:"くるま",r:"kuruma",a:"mobil",n:"Kanji: 車. Kata yang sama untuk 'kendaraan beroda' secara umum."},
{k:"じてんしゃ",r:"jitensha",a:"sepeda",n:"Kanji: 自転車. Gabungan 自 (sendiri) + 転 (berputar) + 車 (roda)."},
{k:"のりもの",r:"norimono",a:"kendaraan",n:"Kanji: 乗り物. Gabungan 乗り (naik) + 物 (benda). Harfiah: 'benda yang dinaiki'."}
]},
"Makanan & Minuman":{rows:[
{k:"たまご",r:"tamago",a:"telur",n:"Kanji: 卵. Dari kata kuno 'tama' (bulat) + 'ko' (anak). Artinya 'anak berbentuk bulat'."},
{k:"みかん",r:"mikan",a:"jeruk mandarin",n:"Buah khas musim dingin Jepang. Sering dimakan di bawah kotatsu."},
{k:"りんご",r:"ringo",a:"apel",n:"Kanji: 林檎. Apel Aomori terkenal sebagai yang terbaik di Jepang."},
{k:"じゃがいも",r:"jagaimo",a:"kentang",n:"Dari 'Jaga' (Jakarta/Batavia) + 'imo' (ubi). Kentang dibawa dari Indonesia ke Jepang!"},
{k:"たべもの",r:"tabemono",a:"makanan",n:"Kanji: 食べ物. Gabungan 食べ (makan) + 物 (benda)."},
{k:"ごはん",r:"gohan",a:"nasi / makan",n:"Kanji: 御飯. Prefiks sopan 'go' + 'han' (nasi). Bisa berarti nasi matang atau waktu makan."},
{k:"おちゃ",r:"ocha",a:"teh hijau",n:"Kanji: お茶. Teh hijau adalah minuman nasional Jepang."},
{k:"こうちゃ",r:"koucha",a:"teh hitam",n:"Kanji: 紅茶. Harfiah: 'teh merah'."},
{k:"ジュース",r:"juusu",a:"jus",n:"Serapan 'juice'. Ditulis katakana karena gairaigo (kata asing)."},
{k:"カレー",r:"karee",a:"kari",n:"Serapan 'curry'. Kari Jepang (wa-fu karee) lebih manis dan kental dari kari India."},
{k:"サンドイッチ",r:"sandoicchi",a:"sandwich",n:"Serapan 'sandwich'. 'ッチ' untuk bunyi konsonan ganda 'tch'."},
{k:"とりにく",r:"toriniku",a:"daging ayam",n:"Kanji: 鶏肉. Tori (ayam) + Niku (daging). Sangat umum dalam masakan Jepang — yakiniku, karaage, oyakodon."},
{k:"ぎゅうにく",r:"gyuuniku",a:"daging sapi",n:"Kanji: 牛肉. Gyuu (sapi) + Niku (daging). Wagyu (和牛) adalah daging sapi Jepang premium yang terkenal di seluruh dunia."},
{k:"ぶたにく",r:"butaniku",a:"daging babi",n:"Kanji: 豚肉. Buta (babi) + Niku (daging). Sangat umum dalam masakan Jepang — ramen, tonkatsu, kakuni."},
{k:"イチゴ",r:"ichigo",a:"stroberi",n:"Dari bahasa Inggris. Stroberi Jepang terkenal sangat manis dan besar — bisa sangat mahal untuk yang premium."},
{k:"スープ",r:"suupu",a:"sup",n:"Serapan 'soup'. Sup miso (みそしる) adalah sup paling ikonik — hampir selalu ada dalam set makan tradisional Jepang."},
{k:"とんかつ",r:"tonkatsu",a:"tonkatsu",n:"Dari ton (babi) + katsu (dari 'cutlet'). Potongan daging babi berlapis tepung roti yang digoreng. Menu populer di seluruh Jepang."}
]},
"Benda":{rows:[
{k:"かぎ",r:"kagi",a:"kunci",n:"Kanji: 鍵. 'Kagi kakko' = tanda kurung siku [ ]."},
{k:"とけい",r:"tokei",a:"jam",n:"Kanji: 時計. Gabungan 時 (waktu) + 計 (mengukur)."},
{k:"かさ",r:"kasa",a:"payung",n:"Kanji: 傘. Ada budaya 'kasa no wasuremono' (payung tertinggal) di stasiun."},
{k:"でんわ",r:"denwa",a:"telepon",n:"Kanji: 電話. Gabungan 電 (listrik) + 話 (bicara)."},
{k:"ベッド",r:"beddo",a:"tempat tidur",n:"Serapan 'bed'. Konsonan ganda 'dd' ditulis 'ッド'."},
{k:"ふとん",r:"futon",a:"futon",n:"Kanji: 布団. Kasur lipat tradisional. Kata 'futon' sudah masuk kosakata Inggris!"},
{k:"まくら",r:"makura",a:"bantal",n:"Kanji: 枕. Ada tradisi 'makura-gaeshi' dalam cerita hantu Jepang."},
{k:"ドア",r:"doa",a:"pintu",n:"Serapan 'door'. Pintu geser tradisional disebut 'shoji' atau 'fusuma'."},
{k:"きっぷ",r:"kippu",a:"tiket",n:"Kanji: 切符. Gabungan 切 (memotong) + 符 (tanda)."},
{k:"くつ",r:"kutsu",a:"sepatu",n:"Kanji: 靴. Di Jepang ada sistem indoor shoes (uwabaki) — sepatu luar dilepas di pintu masuk."},
{k:"かばん",r:"kaban",a:"tas",n:"Kanji: 鞄. Tas umum. Siswa SD Jepang pakai randoseru (ransel kaku khas Jepang)."},
{k:"ふく",r:"fuku",a:"pakaian / baju",n:"Kanji: 服. Kata umum untuk pakaian. Seragam sekolah disebut seifuku (制服)."},
{k:"めがね",r:"megane",a:"kacamata",n:"Kanji: 眼鏡. Me (mata) + Kane (logam). 'Logam untuk mata'."},
{k:"とけい",r:"tokei",a:"jam tangan",n:"Kanji: 時計. Sama dengan jam dinding — konteks menentukan apakah jam tangan atau jam dinding."},
{k:"さいふ",r:"saifu",a:"dompet",n:"Kanji: 財布. Sai (harta) + Fu (kain/wadah). Di Jepang dompet sering dijadikan hadiah karena dipercaya membawa keberuntungan finansial."},
{k:"てがみ",r:"tegami",a:"surat",n:"Kanji: 手紙. Te (tangan) + Kami (kertas). 'Kertas yang ditulis tangan'. Budaya menulis surat tangan masih dihargai di Jepang."},
{k:"しんぶん",r:"shinbun",a:"koran / surat kabar",n:"Kanji: 新聞. Shin (baru) + Bun (berita/tulisan). Jepang salah satu negara dengan tingkat baca koran tertinggi di dunia."},
{k:"おかね",r:"okane",a:"uang",n:"Kanji: お金. Prefiks sopan 'o' + Kane (logam/uang). Mata uang Jepang adalah yen (円)."},
{k:"はがき",r:"hagaki",a:"kartu pos",n:"Kanji: 葉書. Ha (daun) + Gaki (tulisan). Kartu pos sangat populer di Jepang, terutama untuk nengajou (kartu tahun baru)."},
{k:"にもつ",r:"nimotsu",a:"barang bawaan / koper",n:"Kanji: 荷物. Ni (beban) + Motsu (membawa). Kata umum untuk barang bawaan atau bagasi."},
{k:"プレゼント",r:"purezento",a:"hadiah",n:"Serapan 'present'. Memberi hadiah sangat penting dalam budaya Jepang — ada omiyage (oleh-oleh) dan ochugen/oseibo (hadiah musiman)."},
{k:"ケーキ",r:"keeki",a:"kue",n:"Serapan 'cake'. Kue Jepang terkenal halus dan tidak terlalu manis. Strawberry shortcake adalah kue natal tradisional Jepang."},
{k:"カメラ",r:"kamera",a:"kamera",n:"Serapan 'camera'. Merek kamera Jepang (Canon, Nikon, Sony, Fujifilm) mendominasi pasar global."},
{k:"でんしじしょ",r:"denshi jisho",a:"kamus elektronik",n:"Kanji: 電子辞書. Denshi (elektronik) + Jisho (kamus). Sebelum era smartphone, alat ini wajib dimiliki pelajar bahasa Jepang."},
{k:"ペン",r:"pen",a:"pena",n:"Serapan 'pen'. Untuk ballpoint: ボールペン (boorupen). Jepang terkenal dengan kualitas alat tulis yang sangat baik."},
{k:"トイレットペーパー",r:"toiretto peepaa",a:"tisu toilet",n:"Serapan 'toilet paper'. Di Jepang tisu toilet berkualitas sangat tinggi dan hampir selalu tersedia di toilet umum."},
{k:"この〜",r:"kono ~",a:"ini ~ (sebelum benda)",n:"Kanji: 此の. Dipakai langsung sebelum kata benda. この本 (kono hon) = buku ini. Tidak bisa berdiri sendiri."},
{k:"その〜",r:"sono ~",a:"itu ~ (dekat pendengar)",n:"Kanji: 其の. その鞄 (sono kaban) = tas itu (yang di dekatmu)."},
{k:"あの〜",r:"ano ~",a:"itu ~ (jauh, sebelum benda)",n:"Kanji: 彼の. あの人 (ano hito) = orang itu (yang jauh). Juga dipakai sebagai 'anu...' saat ragu."},
{k:"Ｔシャツ",r:"tii shatsu",a:"kaos",n:"Serapan 'T-shirt'. Di Jepang kaos dengan karakter anime/manga sangat populer."},
{k:"〜や",r:"~ya",a:"toko ~",n:"Kanji: 〜屋. Ditambahkan setelah jenis barang untuk menyebut tokonya. くつや = toko sepatu, はなや = toko bunga."},
{k:"くつや",r:"kutsuya",a:"toko sepatu",n:"Kanji: 靴屋. Kutsu (sepatu) + Ya (toko)."},
{k:"でんき",r:"denki",a:"alat elektronik / listrik",n:"Kanji: 電気. Juga berarti 'listrik'. Akihabara di Tokyo adalah surga belanja elektronik."}
]},
"Benda (di Kelas)":{rows:[
{k:"エアコン",r:"eakon",a:"AC / pendingin ruangan",n:"Serapan 'air conditioner' disingkat. Di Jepang hampir semua kelas dan kantor punya eakon — musim panasnya sangat terik."},
{k:"エアコンのリモコン",r:"eakon no rimokon",a:"remote AC",n:"Rimokon = serapan 'remote control'. Kombinasi eakon (AC) + no (partikel milik) + rimokon (remote). Di Jepang remote AC sering diperebutkan di kelas!"},
{k:"ほん",r:"hon",a:"buku",n:"Kanji: 本. Sudah ada di sub-bab Benda umum, tapi konteks kelas sangat relevan — buku pelajaran, buku teks."},
{k:"ノート",r:"nooto",a:"buku catatan",n:"Serapan 'note'. Di Jepang nooto-taking sangat serius; ada seni khusus menulis catatan yang rapi (bisa juga beli buku catatan premium)."},
{k:"ボールペン",r:"boorupen",a:"pulpen / ballpoint",n:"Serapan 'ball pen'. Disingkat dari ballpoint pen. Salah satu alat tulis paling umum di kelas Jepang."},
{k:"ボトル",r:"botoru",a:"botol minum",n:"Serapan 'bottle'. Di banyak sekolah Jepang, siswa membawa botol minum sendiri dari rumah."},
{k:"カーテン",r:"kaaten",a:"gorden / tirai",n:"Serapan 'curtain'. Di kelas Jepang, gorden sering dipakai untuk mengatur cahaya saat menonton proyektor atau saat panas."},
{k:"はさみ",r:"hasami",a:"gunting",n:"Kanji: 鋏. Alat tulis wajib di kelas. Beda dengan キッチンばさみ (gunting dapur) — ini hasami biasa untuk kertas."},
{k:"けいたいでんわ",r:"keitai denwa",a:"handphone",n:"Kanji: 携帯電話. Harfiah: 'telepon yang dibawa-bawa'. Biasa disingkat 'keitai'. Di sekolah Jepang umumnya dilarang atau wajib disimpan saat pelajaran."},
{k:"とけい",r:"tokei",a:"jam dinding",n:"Kanji: 時計. Sudah ada di Benda umum. Di kelas biasanya ada jam dinding besar di depan."},
{k:"まど",r:"mado",a:"jendela",n:"Kanji: 窓. Sudah ada di Benda umum. Di kelas Jepang biasanya punya jendela besar di sisi kiri (cahaya dari kiri untuk penulis tangan kanan)."},
{k:"じしゃ",r:"jisha",a:"penghapus (karet)",n:"Kanji: 字消し / 消しゴム lebih umum. 'Ji' (huruf/tulisan) + 'sha' (menghapus). Penghapus karet untuk pensil."},
{k:"くつした",r:"kutushita",a:"kaos kaki",n:"Kanji: 靴下. Kutsu (sepatu) + Shita (bawah). Harfiah: 'yang di bawah sepatu'. Di sekolah Jepang yang pakai indoor shoes, kaos kaki sangat penting."},
{k:"チョーク",r:"chooku",a:"kapur tulis",n:"Serapan 'chalk'. Dipakai di papan tulis hitam (kokuban). Meski banyak sekolah beralih ke whiteboard, chooku masih umum."},
{k:"かみ",r:"kami",a:"kertas",n:"Kanji: 紙. Sudah ada di Benda umum. Di kelas konteksnya: kertas soal, kertas tugas, kertas origami."},
{k:"せんぷうき",r:"senpuuki",a:"kipas angin",n:"Kanji: 扇風機. Sen (kipas) + Fuu (angin) + Ki (mesin). Di kelas yang belum punya AC, senpuuki jadi penyelamat di musim panas."},
{k:"コンピュータ",r:"konpyuuta",a:"komputer",n:"Serapan 'computer'. Untuk komputer desktop di lab komputer sekolah. Sehari-hari lebih sering disebut 'pasokon'."},
{k:"ふでばこ",r:"fudebako",a:"tempat pensil / kotak pensil",n:"Kanji: 筆箱. Fude (kuas/pena) + Hako/Bako (kotak). Di Jepang fudebako bisa sangat elaborate — ada yang multi-layer dengan cermin kecil di dalam!"},
{k:"パソコン",r:"pasokon",a:"laptop / PC",n:"Singkatan dari 'personal computer' dalam pengucapan Jepang. Lebih umum dari 'konpyuuta' untuk percakapan sehari-hari."},
{k:"つくえ",r:"tsukue",a:"meja (belajar)",n:"Kanji: 机. Sudah ada di Benda umum. Di kelas Jepang, meja siswa biasanya kecil dan individual, bukan meja panjang."},
{k:"こくばん",r:"kokuban",a:"papan tulis hitam",n:"Kanji: 黒板. Koku (hitam) + Ban (papan). Harfiah: 'papan hitam'. Dibersihkan dengan kokuban keshi. Piket membersihkan kokuban adalah tugas umum siswa Jepang."},
{k:"ホワイトボード",r:"howaitoboodo",a:"whiteboard",n:"Serapan 'whiteboard'. Mulai banyak menggantikan kokuban di sekolah dan kantor modern Jepang."},
{k:"けしごむ",r:"keshigomu",a:"penghapus karet",n:"Kanji: 消しゴム. Keshi (menghapus) + Gomu (dari Belanda 'gom' = karet). Harfiah: 'karet penghapus'. Lebih umum dari 'jisha'."},
{k:"こくばんけし",r:"kokuban keshi",a:"penghapus papan tulis",n:"Kanji: 黒板消し. Kokuban (papan hitam) + Keshi (penghapus). Penghapus bulu/spons khusus untuk membersihkan kokuban. Membersihkan ini adalah tugas piket klasik."},
{k:"えんぴつ",r:"enpitsu",a:"pensil",n:"Kanji: 鉛筆. En (timah/logam) + Pitsu (dari Portugis 'pito' = pipa). Harfiah: 'pipa timah'. Di Jepang pensil kayu masih sangat umum di sekolah dasar."},
{k:"ちず",r:"chizu",a:"peta",n:"Kanji: 地図. Chi (bumi/tanah) + Zu (gambar/diagram). Harfiah: 'gambar bumi'. Ada di kelas pelajaran geografi dan IPS."},
{k:"ほうき",r:"houki",a:"sapu",n:"Kanji: 箒. Di sekolah Jepang, siswa sendiri yang membersihkan kelas — tidak ada petugas kebersihan. Houki adalah alat piket wajib."},
{k:"くつ",r:"kutsu",a:"sepatu",n:"Kanji: 靴. Di sekolah Jepang ada sistem 'indoor shoes' (uwabaki) — sepatu luar dilepas di pintu masuk, ganti sandal khusus dalam ruangan."},
{k:"かばん",r:"kaban",a:"tas",n:"Kanji: 鞄. Tas sekolah. Di Jepang siswa SD pakai 'randoseru' (ransel kaku khas Jepang). SMP/SMA pakai kaban biasa."},
{k:"ゴミばこ",r:"gomibako",a:"tempat sampah",n:"Kanji: ゴミ箱. Sudah ada di Perabot Dapur. Di kelas Jepang biasanya ada beberapa gomibako untuk memisahkan sampah (daur ulang, organik, dll)."},
{k:"ティッシュボックス",r:"tisshu bokkusu",a:"kotak tisu",n:"Serapan 'tissue box'. Di Jepang ada tisu khusus (pocketissue) yang sering dibagikan gratis sebagai promosi di jalanan!"},
{k:"いす",r:"isu",a:"kursi",n:"Kanji: 椅子. Sudah ada di Benda umum. Di kelas Jepang, kursi biasanya individual dan bisa diatur posisinya saat kerja kelompok."},
{k:"めがね",r:"megane",a:"kacamata",n:"Kanji: 眼鏡. Me (mata) + Kane/Gane (logam). Harfiah: 'logam untuk mata'. Di budaya pop Jepang, karakter berkacamata sering digambarkan sebagai pintar atau serius ('megane chara')."},
{k:"カレンダー",r:"karendaa",a:"kalender",n:"Serapan 'calendar'. Di kelas biasanya ada di dinding depan atau belakang. Kalender Jepang sering mencantumkan tahun era Jepang (Reiwa, dll) selain tahun Masehi."},
{k:"マーカー",r:"maakaa",a:"spidol / marker",n:"Serapan 'marker'. Dipakai untuk whiteboard atau menandai teks. Ada juga 'keikoo pen' (蛍光ペン) = highlighter/stabilo."},
{k:"えんぴつけずり",r:"enpitsu kezuri",a:"rautan pensil",n:"Kanji: 鉛筆削り. Enpitsu (pensil) + Kezuri (mengikis/meraut). Harfiah: 'peraut pensil'. Di Jepang ada yang manual dan elektrik."},
{k:"プロジェクター",r:"purojekutaa",a:"proyektor",n:"Serapan 'projector'. Makin umum di sekolah Jepang modern, sering dipasang di langit-langit kelas."},
{k:"ものさし / じょうぎ",r:"monosashi / jougi",a:"penggaris",n:"Kanji: 物差し / 定規. Monosashi (物差し) = penggaris untuk mengukur. Jougi (定規) = penggaris untuk menggaris lurus. Secara praktis dipakai bergantian."},
{k:"スピーカー",r:"supiikaa",a:"speaker",n:"Serapan 'speaker'. Di kelas untuk pengumuman sekolah lewat PA system, atau untuk pelajaran bahasa dengan audio."},
{k:"でんたく",r:"dentaku",a:"kalkulator",n:"Kanji: 電卓. Den (listrik) + Taku (meja kecil/tablet). Harfiah: 'tablet listrik'. Di Jepang kalkulator diperbolehkan di beberapa ujian tertentu."},
{k:"もんだな",r:"mondana",a:"rak buku / lemari kelas",n:"Tempat menyimpan buku dan perlengkapan di kelas. Setiap siswa Jepang biasanya punya laci/rak sendiri di kelas."},
{k:"モップ",r:"moppu",a:"mop / pel",n:"Serapan 'mop'. Dipakai saat piket membersihkan lantai kelas. Di Jepang siswa secara bergilir melakukan souji (掃除) = piket kebersihan."},
{k:"はたき",r:"hataki",a:"kemoceng",n:"Kanji: 叩き/はたき. Alat untuk mengibaskan debu dari permukaan. Dipakai saat piket membersihkan rak dan perabot kelas."},
{k:"のり",r:"nori",a:"lem",n:"Kanji: 糊. Lem kertas. Jangan tertukar dengan のり (海苔) yang berarti rumput laut! Beda kanji, beda makna, pengucapan sama."}
]},
"Alam":{rows:[
{k:"みず",r:"mizu",a:"air",n:"Kanji: 水. Khusus air dingin/biasa. Air panas = 'oyu' (お湯)."},
{k:"はな",r:"hana",a:"bunga",n:"Kanji: 花. Waspada homofon: 'hana' juga bisa berarti 'hidung' (鼻)!"}
]},
"Kata Sifat":{rows:[
{k:"たかい",r:"takai",a:"mahal / tinggi",n:"Dua arti berbeda, satu kata! Konteks menentukan makna."},
{k:"はやい",r:"hayai",a:"cepat",n:"Kanji: 速い. Ada 'hayai' (早い) yang berarti 'pagi/lebih awal'. Beda kanji, beda makna."},
{k:"おそい",r:"osoi",a:"lambat",n:"Kanji: 遅い. Lawan kata dari 'hayai'. Juga berarti 'terlambat'."},
{k:"おおきな",r:"ookina",a:"besar",n:"Bentuk na-adjective. Ada juga 'ookii' (大きい) sebagai i-adjective."},
{k:"ちいさい",r:"chiisai",a:"kecil",n:"Kanji: 小さい. Vokal panjang 'ちい'. Lawan kata dari 'ookii'."},
{k:"うれしい",r:"ureshii",a:"senang",n:"Kanji: 嬉しい. Senang karena sesuatu terjadi. Beda dengan 'tanoshii' (menyenangkan)."},
{k:"かなしい",r:"kanashii",a:"sedih",n:"Kanji: 悲しい. Banyak muncul dalam lagu dan puisi Jepang."}
]},
"Musim":{rows:[
{k:"はる",r:"haru",a:"musim semi",n:"Kanji: 春. Musim sakura. Tahun ajaran/kerja Jepang dimulai April."},
{k:"なつ",r:"natsu",a:"musim panas",n:"Kanji: 夏. Musim festival (matsuri) dan kembang api (hanabi)."},
{k:"あき",r:"aki",a:"musim gugur",n:"Kanji: 秋. Musim daun merah (koyo) dan panen."},
{k:"ふゆ",r:"fuyu",a:"musim dingin",n:"Kanji: 冬. Musim salju. Natal dan tahun baru paling meriah."}
]},
"Kata Kerja":{rows:[
{k:"いきます",r:"ikimasu",a:"pergi",n:"Dari 'iku'. Partikel 'ni' atau 'e' menunjukkan tujuan."},
{k:"きます",r:"kimasu",a:"datang",n:"Dari 'kuru' (tidak beraturan). Arah menuju pembicara."},
{k:"かえります",r:"kaerimasu",a:"pulang",n:"Dari 'kaeru'. Khusus pulang ke rumah/tempat asal."},
{k:"でます",r:"demasu",a:"keluar",n:"Dari 'deru'. Juga berarti 'muncul' atau 'berangkat' (kereta)."},
{k:"はいります",r:"hairimasu",a:"masuk",n:"Dari 'hairu'. Partikel 'ni' dipakai untuk tempat yang dimasuki."},
{k:"たべます",r:"tabemasu",a:"makan",n:"Dari 'taberu'. Diikuti objek dengan partikel 'wo'."},
{k:"のみます",r:"nomimasu",a:"minum",n:"Dari 'nomu'. Minum obat juga pakai kata ini."},
{k:"みます",r:"mimasu",a:"melihat / menonton",n:"Dari 'miru'. Menonton film = eiga wo mimasu."},
{k:"ききます",r:"kikimasu",a:"mendengar",n:"Dari 'kiku'. Juga berarti 'bertanya' (sensei ni kikimasu)."},
{k:"はなします",r:"hanashimasu",a:"berbicara",n:"Dari 'hanasu'. 'Hanashi' = cerita/pembicaraan."},
{k:"よみます",r:"yomimasu",a:"membaca",n:"Dari 'yomu'. Hon wo yomimasu = membaca buku."},
{k:"かきます",r:"kakimasu",a:"menulis",n:"Dari 'kaku'. Juga berarti 'menggambar' atau 'melukis'."},
{k:"およぎます",r:"oyogimasu",a:"berenang",n:"Dari 'oyogu'. Kata kerja baris G."},
{k:"あそびます",r:"asobimasu",a:"bermain",n:"Dari 'asobu'. Orang dewasa juga pakai kata ini untuk bersenang-senang."},
{k:"すわります",r:"suwarimasu",a:"duduk",n:"Dari 'suwaru'."},
{k:"たちます",r:"tachimasu",a:"berdiri",n:"Dari 'tatsu'. Juga berarti 'muncul' secara kiasan."},
{k:"しています",r:"shiteimasu",a:"sedang melakukan",n:"Bentuk 'te-iru' menyatakan aksi sedang berlangsung."},
{k:"あります",r:"arimasu",a:"ada (benda mati)",n:"Dari 'aru'. Khusus benda mati/tidak bergerak."},
{k:"います",r:"imasu",a:"ada (makhluk hidup)",n:"Dari 'iru'. Untuk manusia dan hewan."}
]},
"Konsep Umum":{rows:[
{k:"やすみ",r:"yasumi",a:"libur / istirahat",n:"Kanji: 休み. 'O-yasumi nasai' = selamat malam (harfiah: istirahatlah)."},
{k:"けいかく",r:"keikaku",a:"rencana",n:"Kanji: 計画. Gabungan 計 (mengukur) + 画 (rencana)."},
{k:"せいかつ",r:"seikatsu",a:"kehidupan",n:"Kanji: 生活. Gabungan 生 (hidup) + 活 (aktif). Kehidupan sehari-hari."},
{k:"せかい",r:"sekai",a:"dunia",n:"Kanji: 世界. Sering muncul dalam judul anime!"},
{k:"ちしき",r:"chishiki",a:"pengetahuan",n:"Kanji: 知識. Gabungan 知 (mengetahui) + 識 (mengenali)."},
{k:"けつえき",r:"ketsueki",a:"darah",n:"Kanji: 血液. Di Jepang ada kepercayaan golongan darah menentukan kepribadian."}
]},
"Kotoba N5":{rows:[
{k:"あめ",r:"ame",a:"hujan / permen",n:"Kanji: 雨 (hujan) / 飴 (permen). Beda kanji, beda makna! 'Ame ga futte iru' = sedang hujan."},
{k:"そら",r:"sora",a:"langit",n:"Kanji: 空. Juga bisa berarti 'kosong' (kara). Langit biru disebut 'aoi sora' — tapi ingat, 'ao' mencakup biru dan hijau!"},
{k:"やま",r:"yama",a:"gunung",n:"Kanji: 山. Fujisan (富士山) = Gunung Fuji, gunung paling terkenal di Jepang. Simbol nasional."},
{k:"き",r:"ki",a:"pohon",n:"Kanji: 木. Juga berarti 'kayu'. Kanji ini menjadi dasar banyak kanji lain: 森 (hutan), 林 (kebun pohon)."},
{k:"くに",r:"kuni",a:"negara / negeri",n:"Kanji: 国. 'Nihon no kuni' = negeri Jepang. Kata dasar yang sangat sering muncul."},
{k:"まち",r:"machi",a:"kota kecil / kawasan",n:"Kanji: 町. Lebih kecil dari 'shi' (市 = kota besar). Seringkali merujuk pada kawasan atau distrik tertentu."},
{k:"むら",r:"mura",a:"desa",n:"Kanji: 村. Satuan administratif terkecil di Jepang, lebih kecil dari machi."},
{k:"ひ",r:"hi",a:"api / hari / matahari",n:"Kanji: 火 (api) / 日 (hari/matahari). Konteks menentukan! '火' dipakai untuk api, '日' untuk hari dan matahari."},
{k:"かぜ",r:"kaze",a:"angin / pilek",n:"Kanji: 風 (angin) / 風邪 (pilek). 'Kaze ga fuiteiru' = angin berhembus. 'Kaze wo hiku' = kena pilek."},
{k:"ゆき",r:"yuki",a:"salju",n:"Kanji: 雪. Salju di Jepang sangat lebat di bagian utara (Hokkaido). Nama perempuan populer di Jepang."},
{k:"つき",r:"tsuki",a:"bulan",n:"Kanji: 月. Juga berarti 'bulan' dalam kalender (ichigatsu = Januari). Festival bulan purnama disebut 'Otsukimi'."},
{k:"ほし",r:"hoshi",a:"bintang",n:"Kanji: 星. Festival Tanabata dirayakan tiap 7 Juli — legenda dua bintang yang hanya bisa bertemu setahun sekali."},
{k:"にわ",r:"niwa",a:"halaman / taman",n:"Kanji: 庭. Taman gaya Jepang (nihon teien) terkenal karena keindahan dan filosofinya."},
{k:"いけ",r:"ike",a:"kolam",n:"Kanji: 池. Kolam ikan mas (koi) adalah elemen klasik taman Jepang."},
{k:"はし",r:"hashi",a:"jembatan / sumpit",n:"Kanji: 橋 (jembatan) / 箸 (sumpit). Homofon berbeda kanji! Konteks sangat penting."},
{k:"みち",r:"michi",a:"jalan / jalur",n:"Kanji: 道. Juga berarti 'cara' atau 'jalan hidup'. Budo (武道) = jalan bela diri. Kado (華道) = jalan merangkai bunga."},
{k:"ひろば",r:"hiroba",a:"lapangan / alun-alun",n:"Kanji: 広場. Hiro (luas) + Ba (tempat). Tempat terbuka yang luas untuk berkumpul."},
{k:"こうじょう",r:"koujou",a:"pabrik",n:"Kanji: 工場. Kou (pekerjaan/manufaktur) + Jou (tempat). Jepang terkenal dengan industri manufaktur mobilnya."},
{k:"えいが",r:"eiga",a:"film / bioskop",n:"Kanji: 映画. Ei (memantulkan cahaya) + Ga (gambar). 'Eiga wo miru' = menonton film. 'Eigakan' = bioskop."},
{k:"おんがく",r:"ongaku",a:"musik",n:"Kanji: 音楽. On (suara) + Gaku (kesenangan/musik). 'Ongaku wo kiku' = mendengarkan musik."},
{k:"スポーツ",r:"supootsu",a:"olahraga",n:"Serapan 'sports'. Olahraga populer di Jepang: yakyuu (野球/baseball), sakaa (サッカー/sepakbola), kendou, judou."},
{k:"りょこう",r:"ryokou",a:"perjalanan / wisata",n:"Kanji: 旅行. Ryo (perjalanan) + Kou (pergi). 'Ryokou shimasu' = melakukan perjalanan. Wisata domestik sangat populer di Jepang."},
{k:"しゃしん",r:"shashin",a:"foto / fotografi",n:"Kanji: 写真. Sha (menyalin) + Shin (kebenaran/kenyataan). 'Shashin wo toru' = mengambil foto."},
{k:"てんき",r:"tenki",a:"cuaca",n:"Kanji: 天気. Ten (langit/surga) + Ki (energi/udara). 'Tenki wa dou desu ka?' = Bagaimana cuacanya?"},
{k:"いろ",r:"iro",a:"warna",n:"Kanji: 色. Kata dasar untuk warna. 'Nani iro?' = Warna apa? Juga bisa berarti 'nuansa/corak' secara kiasan."},
{k:"こえ",r:"koe",a:"suara / suara manusia",n:"Kanji: 声. Khusus untuk suara yang dihasilkan manusia/hewan. Suara benda pakai 'oto' (音)."},
{k:"おと",r:"oto",a:"suara / bunyi (benda)",n:"Kanji: 音. Suara yang dihasilkan benda atau alam. Berbeda dari 'koe' yang khusus suara makhluk hidup."}
]},
"Angka":{rows:[
{k:"いち",r:"ichi",a:"1",n:"Kanji: 一. Dasar sistem angka Jepang."},
{k:"に",r:"ni",a:"2",n:"Kanji: 二. Juga partikel 'ni' (ke/di), tapi beda konteks."},
{k:"さん",r:"san",a:"3",n:"Kanji: 三. Juga sapaan hormat '-san', tapi ini angka!"},
{k:"よん / し",r:"yon / shi",a:"4",n:"'Shi' dihindari karena homofon dengan 死 (mati). 'Yon' lebih umum."},
{k:"ご",r:"go",a:"5",n:"Kanji: 五."},
{k:"ろく",r:"roku",a:"6",n:"Kanji: 六."},
{k:"なな / しち",r:"nana / shichi",a:"7",n:"'Shichi' mirip 'ichi' sehingga sering dipakai 'nana'."},
{k:"はち",r:"hachi",a:"8",n:"Kanji: 八. Angka keberuntungan di Jepang (kanji melebar ke bawah = kemakmuran)."},
{k:"きゅう / く",r:"kyuu / ku",a:"9",n:"'Ku' dihindari karena homofon dengan 苦 (penderitaan)."},
{k:"じゅう",r:"juu",a:"10",n:"Kanji: 十."},
{k:"ひゃく",r:"hyaku",a:"100",n:"Kanji: 百."},
{k:"せん",r:"sen",a:"1.000",n:"Kanji: 千."},
{k:"まん",r:"man",a:"10.000",n:"Kanji: 万. Sistem angka Jepang berkelompok per 10.000."},
{k:"おく",r:"oku",a:"100.000.000",n:"Kanji: 億. Seratus juta."},
{k:"ちょう",r:"chou",a:"1 triliun",n:"Kanji: 兆. Anggaran negara Jepang sering dinyatakan dalam satuan ini."}
]},
"Umur":{rows:[
{k:"いっさい",r:"issai",a:"1 tahun",n:"Kanji: 一歳. Ichi + Sai → Issai (konsonan ganda). Ulang tahun pertama disebut 'tanjoubi' (誕生日)."},
{k:"にさい",r:"nisai",a:"2 tahun",n:"Kanji: 二歳. に (2) + さい."},
{k:"さんさい",r:"sansai",a:"3 tahun",n:"Kanji: 三歳. さん (3) + さい."},
{k:"よんさい",r:"yonsai",a:"4 tahun",n:"Kanji: 四歳. よん (4) + さい. Hindari pakai し karena homofon 死 (mati)."},
{k:"ごさい",r:"gosai",a:"5 tahun",n:"Kanji: 五歳. ご (5) + さい."},
{k:"ろくさい",r:"rokusai",a:"6 tahun",n:"Kanji: 六歳. ろく (6) + さい."},
{k:"ななさい",r:"nanasai",a:"7 tahun",n:"Kanji: 七歳. なな (7) + さい."},
{k:"はっさい",r:"hassai",a:"8 tahun",n:"Kanji: 八歳. はち + さい → はっさい (konsonan ganda)."},
{k:"きゅうさい",r:"kyuusai",a:"9 tahun",n:"Kanji: 九歳. きゅう (9) + さい."},
{k:"じゅっさい",r:"jussai",a:"10 tahun",n:"Kanji: 十歳. じゅう + さい → じゅっさい (konsonan ganda)."},
{k:"じゅうごさい",r:"juugosai",a:"15 tahun",n:"Kanji: 十五歳. じゅうご (15) + さい. Usia SMA kelas 1 di Jepang."},
{k:"じゅうはっさい",r:"juuhassai",a:"18 tahun",n:"Kanji: 十八歳. Usia dewasa di Jepang sejak 2022 (sebelumnya 20)."},
{k:"じゅうきゅうさい",r:"juukyuusai",a:"19 tahun",n:"Kanji: 十九歳. じゅうきゅう (19) + さい."},
{k:"はたち",r:"hatachi",a:"20 tahun",n:"Kanji: 二十歳. Pengucapan KHUSUS — bukan 'nijussai'! Dulu usia dewasa resmi di Jepang. Perayaannya disebut Seijin-shiki (成人式)."},
{k:"にじゅういっさい",r:"nijuuissai",a:"21 tahun",n:"Kanji: 二十一歳. Kembali ke pola biasa setelah はたち yang spesial."},
{k:"にじゅうごさい",r:"nijuugosai",a:"25 tahun",n:"Kanji: 二十五歳. にじゅうご (25) + さい."},
{k:"にじゅうはっさい",r:"nijuuhassai",a:"28 tahun",n:"Kanji: 二十八歳. にじゅうはち + さい → にじゅうはっさい."},
{k:"さんじゅっさい",r:"sanjussai",a:"30 tahun",n:"Kanji: 三十歳. さんじゅう + さい → さんじゅっさい. Milestone penting — di Jepang usia 30 sering jadi tekanan sosial untuk menikah."},
{k:"さんじゅうごさい",r:"sanjuugosai",a:"35 tahun",n:"Kanji: 三十五歳. さんじゅうご (35) + さい."},
{k:"よんじゅっさい",r:"yonjussai",a:"40 tahun",n:"Kanji: 四十歳. よんじゅう + さい → よんじゅっさい."},
{k:"ごじゅっさい",r:"gojussai",a:"50 tahun",n:"Kanji: 五十歳. ごじゅう + さい → ごじゅっさい."},
{k:"ろくじゅっさい",r:"rokujussai",a:"60 tahun",n:"Kanji: 六十歳. ろくじゅう + さい → ろくじゅっさい. Usia pensiun umum di Jepang."},
{k:"ななじゅっさい",r:"nanajussai",a:"70 tahun",n:"Kanji: 七十歳. ななじゅう + さい → ななじゅっさい."},
{k:"なんさい",r:"nansai",a:"berapa tahun? (umur berapa?)",n:"なん (berapa) + さい. 'Nansai desu ka?' = Umurnya berapa? Untuk anak kecil bisa langsung, tapi untuk orang dewasa lebih sopan pakai 'おいくつ (oikutsu) desu ka?'."},
{k:"おいくつ",r:"oikutsu",a:"berapa usia Anda? (sopan)",n:"Bentuk sopan dari 'nansai'. Prefiks hormat 'o' + 'ikutsu' (berapa). Dipakai saat menanyakan usia orang yang lebih tua atau atasan."}
]},
"Lantai":{rows:[
{k:"いっかい",r:"ikkai",a:"lantai 1",n:"Kanji: 一階. いち + かい → いっかい (konsonan ganda)."},
{k:"にかい",r:"nikai",a:"lantai 2",n:"Kanji: 二階. に (2) + かい."},
{k:"さんがい",r:"sangai",a:"lantai 3",n:"Kanji: 三階. PENGECUALIAN! Bukan さんかい — bunyinya berubah jadi さんがい (rendaku)."},
{k:"よんかい",r:"yonkai",a:"lantai 4",n:"Kanji: 四階. よん (4) + かい. Hindari し karena homofon 死 (mati)."},
{k:"ごかい",r:"gokai",a:"lantai 5",n:"Kanji: 五階. ご (5) + かい."},
{k:"ろっかい",r:"rokkai",a:"lantai 6",n:"Kanji: 六階. ろく + かい → ろっかい (konsonan ganda)."},
{k:"ななかい",r:"nanakai",a:"lantai 7",n:"Kanji: 七階. なな (7) + かい."},
{k:"はっかい",r:"hakkai",a:"lantai 8",n:"Kanji: 八階. はち + かい → はっかい (konsonan ganda)."},
{k:"きゅうかい",r:"kyuukai",a:"lantai 9",n:"Kanji: 九階. きゅう (9) + かい."},
{k:"じゅっかい",r:"jukkai",a:"lantai 10",n:"Kanji: 十階. じゅう + かい → じゅっかい (konsonan ganda)."},
{k:"なんかい",r:"nankai",a:"lantai berapa?",n:"Kanji: 何階. なん (berapa) + かい. 'Resutoran wa nankai desu ka?' = Restorannya di lantai berapa?"},
{k:"ちか",r:"chika",a:"bawah tanah / basement",n:"Kanji: 地下. Chi (bumi/tanah) + Ka (bawah). Biasa digabung: ちかいっかい = basement lantai 1 (B1)."},
{k:"ちかいっかい",r:"chika ikkai",a:"basement lantai 1 (B1)",n:"Kanji: 地下一階. Gabungan ちか (basement) + いっかい (lantai 1). Sering ditulis 'B1' di gedung Jepang."},
{k:"おくじょう",r:"okujou",a:"atap / rooftop",n:"Kanji: 屋上. Oku (rumah/bangunan) + Jou (atas). Banyak department store Jepang punya taman bermain atau kafe di rooftop-nya."}
]},
"Waktu":{rows:[
{k:"じ",r:"ji",a:"jam",n:"Kanji: 時. Penanda jam. ichiji = jam 1, niji = jam 2, dst."},
{k:"ふん / ぷん",r:"fun / pun",a:"menit",n:"Bacaan berubah tergantung angka: 1=ippun, 3=sanpun, 6=roppun."},
{k:"びょう",r:"byou",a:"detik",n:"Kanji: 秒."},
{k:"ごぜん",r:"gozen",a:"AM",n:"Kanji: 午前. Sebelum tengah hari."},
{k:"ごご",r:"gogo",a:"PM",n:"Kanji: 午後. Setelah tengah hari."},
{k:"いま",r:"ima",a:"sekarang",n:"Kanji: 今. 'Ima nanji?' = Sekarang jam berapa?"},
{k:"はん",r:"han",a:"setengah (jam)",n:"ichiji han = jam 1:30."},
{k:"あさ",r:"asa",a:"pagi",n:"Kanji: 朝."},
{k:"ひる",r:"hiru",a:"siang",n:"Kanji: 昼. 'Hirune' = tidur siang."},
{k:"ゆうがた",r:"yuugata",a:"sore",n:"Kanji: 夕方. Sore menjelang malam (~17-18:00)."},
{k:"よる",r:"yoru",a:"malam",n:"Kanji: 夜."},
{k:"ばん",r:"ban",a:"malam (santai)",n:"Kanji: 晩. 'Konban wa' = Selamat malam."},
{k:"よなか",r:"yonaka",a:"tengah malam",n:"Kanji: 夜中."},
{k:"しんや",r:"shinya",a:"larut malam",n:"Kanji: 深夜. Lebih larut dari 'yonaka'."},
{k:"たんじょうび",r:"tanjoubi",a:"hari ulang tahun",n:"Kanji: 誕生日. Tanjou (lahir) + Bi (hari). 'Otanjoubi omedetou!' = Selamat ulang tahun!"},
{k:"〜さい",r:"~sai",a:"umur ~ tahun (counter)",n:"Kanji: 〜歳. Ditambahkan setelah angka untuk menyatakan usia. Lihat sub-bab Umur untuk detail lengkap tiap angka."},
{k:"〜がつ",r:"~gatsu",a:"bulan ~ (counter)",n:"Kanji: 〜月. Ditambahkan setelah angka 1-12. いちがつ = Januari, にがつ = Februari, dst."},
{k:"〜にち",r:"~nichi",a:"tanggal ~ (counter)",n:"Kanji: 〜日. Tanggal 1-10 punya pengucapan khusus (ついたち、ふつか、dll). Lihat sub-bab Tanggal."},
{k:"なん",r:"nan",a:"apa (bentuk pendek)",n:"Kanji: 何. Bentuk pendek dari なに (nani). Dipakai sebelum です/の/か. 'Oshumi wa nan desu ka?' = Hobinya apa?"}
]},
"Durasi":{rows:[
{k:"いちじかん",r:"ichi jikan",a:"selama 1 jam",n:"Kanji: 一時間. Ichi (1) + Ji (jam) + Kan (interval/selama). Pola: angka + じかん untuk durasi jam."},
{k:"にじかん",r:"ni jikan",a:"selama 2 jam",n:"Kanji: 二時間. に (2) + じかん."},
{k:"さんじかん",r:"san jikan",a:"selama 3 jam",n:"Kanji: 三時間. さん (3) + じかん."},
{k:"いちにちかん",r:"ichi nichikan",a:"selama 1 hari",n:"Kanji: 一日間. Juga cukup pakai いちにち (ichinichi) tanpa かん. Perhatikan: ini DURASI (selama sehari penuh), beda dengan ついたち yang berarti tanggal 1."},
{k:"ふつかかん",r:"futsukakan",a:"selama 2 hari",n:"Kanji: 二日間. Menarik — pola hitungan hari untuk durasi sama dengan tanggal (futsuka, mikka, yokka, dst) + かん."},
{k:"みっかかん",r:"mikkakan",a:"selama 3 hari",n:"Kanji: 三日間. みっか (3 hari) + かん."},
{k:"いっしゅうかん",r:"isshuukan",a:"selama 1 minggu",n:"Kanji: 一週間. Isshuukan adalah bentuk baku — huruf っ muncul karena ichi + shuu mengalami perubahan bunyi. Kata ini sangat sering dipakai!"},
{k:"にしゅうかん",r:"nishuukan",a:"selama 2 minggu",n:"Kanji: 二週間. に (2) + しゅうかん."},
{k:"さんしゅうかん",r:"sanshuukan",a:"selama 3 minggu",n:"Kanji: 三週間. さん (3) + しゅうかん."},
{k:"いっかげつ",r:"ikkagetsu",a:"selama 1 bulan",n:"Kanji: 一か月. Perhatikan perubahannya: ichi + kagetsu → ikkagetsu (konsonan ganda). Berbeda dengan ichigatsu (Januari) yang menyebut nama bulan."},
{k:"にかげつ",r:"nikagetsu",a:"selama 2 bulan",n:"Kanji: 二か月. に (2) + かげつ."},
{k:"さんかげつ",r:"sankagetsu",a:"selama 3 bulan",n:"Kanji: 三か月. さん (3) + かげつ."},
{k:"いちねんかん",r:"ichinenkan",a:"selama 1 tahun",n:"Kanji: 一年間. Ichi (1) + Nen (tahun) + Kan (interval). Juga bisa cukup いちねん (ichininen) tanpa かん dalam percakapan santai."},
{k:"にねんかん",r:"ninenkan",a:"selama 2 tahun",n:"Kanji: 二年間. に (2) + ねんかん."}
]},
"Hari dalam Seminggu":{rows:[
{k:"げつようび",r:"getsuyoubi",a:"Senin",n:"Kanji: 月曜日. 月 = bulan. Hari bulan."},
{k:"かようび",r:"kayoubi",a:"Selasa",n:"Kanji: 火曜日. 火 = api. Hari api."},
{k:"すいようび",r:"suiyoubi",a:"Rabu",n:"Kanji: 水曜日. 水 = air. Hari air."},
{k:"もくようび",r:"mokuyoubi",a:"Kamis",n:"Kanji: 木曜日. 木 = pohon. Hari kayu."},
{k:"きんようび",r:"kinyoubi",a:"Jumat",n:"Kanji: 金曜日. 金 = emas. Hari emas."},
{k:"どようび",r:"doyoubi",a:"Sabtu",n:"Kanji: 土曜日. 土 = tanah. Hari tanah."},
{k:"にちようび",r:"nichiyoubi",a:"Minggu",n:"Kanji: 日曜日. 日 = matahari. Hari matahari."}
]},
"Keterangan Hari":{rows:[
{k:"きょう",r:"kyou",a:"hari ini",n:"Kanji: 今日."},
{k:"あした",r:"ashita",a:"besok",n:"Kanji: 明日. Juga bisa 'asu' (lebih formal)."},
{k:"あさって",r:"asatte",a:"lusa",n:"Kanji: 明後日."},
{k:"きのう",r:"kinou",a:"kemarin",n:"Kanji: 昨日."},
{k:"おととい",r:"ototoi",a:"kemarin lusa",n:"Kanji: 一昨日."},
{k:"このあいだ",r:"konoaida",a:"tempo hari",n:"Waktu tidak spesifik di masa lalu."},
{k:"らいしゅう",r:"raishuu",a:"minggu depan",n:"Kanji: 来週."},
{k:"せんしゅう",r:"senshuu",a:"minggu lalu",n:"Kanji: 先週."},
{k:"けさ",r:"kesa",a:"tadi pagi",n:"Kanji: 今朝. Gabungan 今 (ini) + 朝 (pagi)."}
]},
"Keterangan Bulan & Tahun":{rows:[
{k:"せんせんげつ",r:"sensengetsu",a:"2 bulan lalu",n:"Kanji: 先々月. Sen + Sen + Gatsu. Dua bulan sebelum bulan ini."},
{k:"せんげつ",r:"sengetsu",a:"bulan lalu",n:"Kanji: 先月. Sen (sebelum/terdahulu) + Gatsu (bulan)."},
{k:"こんげつ",r:"kongetsu",a:"bulan ini",n:"Kanji: 今月. Kon (sekarang/ini) + Gatsu (bulan)."},
{k:"らいげつ",r:"raigetsu",a:"bulan depan",n:"Kanji: 来月. Rai (akan datang) + Gatsu (bulan)."},
{k:"さらいげつ",r:"saraigetsu",a:"2 bulan lagi",n:"Kanji: 再来月. Sa + Rai + Gatsu. Dua bulan dari sekarang."},
{k:"こんしゅう",r:"konshuu",a:"minggu ini",n:"Kanji: 今週. Kon (sekarang/ini) + Shuu (minggu). Pasangannya: senshuu (minggu lalu) dan raishuu (minggu depan) — sudah ada di Keterangan Hari."},
{k:"まいつき",r:"maitsuki",a:"setiap bulan",n:"Kanji: 毎月. Mai (setiap) + Tsuki (bulan). Dipakai untuk sesuatu yang berulang tiap bulan."},
{k:"おととし",r:"ototoshi",a:"2 tahun lalu",n:"Kanji: 一昨年. Dua tahun yang telah berlalu."},
{k:"きょねん",r:"kyonen",a:"tahun lalu",n:"Kanji: 去年. Kyo (pergi/lalu) + Nen (tahun)."},
{k:"ことし",r:"kotoshi",a:"tahun ini",n:"Kanji: 今年. Ko (sekarang) + Toshi (tahun)."},
{k:"らいねん",r:"rainen",a:"tahun depan",n:"Kanji: 来年. Rai (akan datang) + Nen (tahun)."},
{k:"さらいねん",r:"sarainen",a:"2 tahun lagi",n:"Kanji: 再来年. Dua tahun ke depan."},
{k:"ごねんご",r:"go nen go",a:"5 tahun lagi",n:"Kanji: 5年後. Go (5) + Nen (tahun) + Go (setelah/kemudian). Pola X年後 bisa dipakai untuk jarak tahun apapun."},
{k:"まいとし",r:"maitoshi",a:"setiap tahun",n:"Kanji: 毎年. Mai (setiap) + Toshi (tahun). Juga bisa dibaca 'maitoshi' atau 'mainen'."}
]},
"Jam":{rows:[
{k:"いちじ",r:"ichiji",a:"jam 1",n:"いち (1) + じ (jam). Penulisan waktu: angka + じ."},
{k:"にじ",r:"niji",a:"jam 2",n:"に (2) + じ (jam)."},
{k:"さんじ",r:"sanji",a:"jam 3",n:"さん (3) + じ."},
{k:"よじ",r:"yoji",a:"jam 4",n:"よん bukan し — pakai よ karena menghindari し (mati)."},
{k:"ごじ",r:"goji",a:"jam 5",n:"ご (5) + じ."},
{k:"ろくじ",r:"rokuji",a:"jam 6",n:"ろく (6) + じ."},
{k:"しちじ",r:"shichiji",a:"jam 7",n:"しち (7) + じ. Pakai しち, bukan なな, untuk menyebut jam."},
{k:"はちじ",r:"hachiji",a:"jam 8",n:"はち (8) + じ."},
{k:"くじ",r:"kuji",a:"jam 9",n:"く (9) + じ. Pakai く, bukan きゅう, untuk menyebut jam."},
{k:"じゅうじ",r:"juuji",a:"jam 10",n:"じゅう (10) + じ."},
{k:"じゅういちじ",r:"juuichiji",a:"jam 11",n:"じゅういち (11) + じ."},
{k:"じゅうにじ",r:"juuniji",a:"jam 12",n:"じゅうに (12) + じ."},
{k:"なんじ",r:"nanji",a:"jam berapa?",n:"なん (berapa) + じ (jam). Dipakai untuk menanyakan waktu."},
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
{k:"いちがつ",r:"ichigatsu",a:"Januari",n:"いち (1) + がつ (bulan). Semua bulan mengikuti pola: angka + がつ."},
{k:"にがつ",r:"nigatsu",a:"Februari",n:"に (2) + がつ."},
{k:"さんがつ",r:"sangatsu",a:"Maret",n:"さん (3) + がつ."},
{k:"しがつ",r:"shigatsu",a:"April",n:"し (4) + がつ. Di sini pakai し (bukan よん) untuk bulan."},
{k:"ごがつ",r:"gogatsu",a:"Mei",n:"ご (5) + がつ."},
{k:"ろくがつ",r:"rokugatsu",a:"Juni",n:"ろく (6) + がつ."},
{k:"しちがつ",r:"shichigatsu",a:"Juli",n:"しち (7) + がつ. Pakai しち untuk bulan."},
{k:"はちがつ",r:"hachigatsu",a:"Agustus",n:"はち (8) + がつ."},
{k:"くがつ",r:"kugatsu",a:"September",n:"く (9) + がつ. Pakai く untuk bulan."},
{k:"じゅうがつ",r:"juugatsu",a:"Oktober",n:"じゅう (10) + がつ."},
{k:"じゅういちがつ",r:"juuichigatsu",a:"November",n:"じゅういち (11) + がつ."},
{k:"じゅうにがつ",r:"juunigatsu",a:"Desember",n:"じゅうに (12) + がつ."},
{k:"なんがつ",r:"nangatsu",a:"bulan berapa?",n:"なん (berapa) + がつ. Untuk menanyakan bulan."}
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
{k:"なんにち",r:"nannichi",a:"tanggal berapa?",n:"なん (berapa) + にち. Untuk menanyakan tanggal."}
]},
"Bagian Tubuh":{rows:[
{k:"からだ",r:"karada",a:"tubuh",n:"Kanji: 体."},
{k:"かお",r:"kao",a:"wajah",n:"Kanji: 顔."},
{k:"あたま",r:"atama",a:"kepala",n:"Kanji: 頭."},
{k:"かみ / かみのけ",r:"kami / kami no ke",a:"rambut",n:"Kanji: 髪. Homofon dengan 'kami' = kertas (紙) dan dewa (神)!"},
{k:"め",r:"me",a:"mata",n:"Kanji: 目."},
{k:"はな",r:"hana (hidung)",a:"hidung",n:"Kanji: 鼻. Homofon dengan はな (花) = bunga!"},
{k:"みみ",r:"mimi",a:"telinga",n:"Kanji: 耳."},
{k:"くち",r:"kuchi",a:"mulut",n:"Kanji: 口."},
{k:"は",r:"ha",a:"gigi",n:"Kanji: 歯."},
{k:"くび",r:"kubi",a:"leher",n:"Kanji: 首."},
{k:"かた",r:"kata",a:"bahu",n:"Kanji: 肩."},
{k:"むね",r:"mune",a:"dada",n:"Kanji: 胸."},
{k:"て",r:"te",a:"tangan",n:"Kanji: 手."},
{k:"ゆび",r:"yubi",a:"jari",n:"Kanji: 指."},
{k:"うで",r:"ude",a:"lengan",n:"Kanji: 腕."},
{k:"あし",r:"ashi",a:"kaki",n:"Kanji: 足."},
{k:"ひざ",r:"hiza",a:"lutut",n:"Kanji: 膝."},
{k:"はだ",r:"hada",a:"kulit",n:"Kanji: 肌."}
]},
"Warna":{rows:[
{k:"あか",r:"aka",a:"merah",n:"Kanji: 赤. Warna paling kuat dalam budaya Jepang."},
{k:"あお",r:"ao",a:"biru / hijau (tua)",n:"Kanji: 青. Secara historis mencakup biru DAN hijau."},
{k:"きいろ",r:"kiiro",a:"kuning",n:"Kanji: 黄色. Ki (kuning) + Iro (warna)."},
{k:"みどり",r:"midori",a:"hijau",n:"Kanji: 緑. Hijau yang lebih cerah/segar dari 'ao'."},
{k:"くろ",r:"kuro",a:"hitam",n:"Kanji: 黒."},
{k:"しろ",r:"shiro",a:"putih",n:"Kanji: 白."},
{k:"ちゃいろ",r:"chairo",a:"coklat",n:"Kanji: 茶色. Cha (teh) + Iro (warna). 'Warna teh'."},
{k:"はいいろ",r:"haiiro",a:"abu-abu",n:"Kanji: 灰色. Hai (abu) + Iro (warna)."},
{k:"むらさき",r:"murasaki",a:"ungu",n:"Kanji: 紫. Warna bangsawan di Jepang kuno."},
{k:"オレンジ",r:"orenji",a:"oranye",n:"Serapan 'orange'."},
{k:"ピンク",r:"pinku",a:"merah muda / pink",n:"Serapan 'pink'. Identik dengan bunga sakura."},
{k:"きんいろ",r:"kiniro",a:"emas",n:"Kanji: 金色. Kin (emas) + Iro (warna)."},
{k:"ぎんいろ",r:"giniro",a:"perak",n:"Kanji: 銀色. Gin (perak) + Iro (warna)."}
]},
"Rasa":{rows:[
{k:"あまい",r:"amai",a:"manis",n:"Kanji: 甘い."},
{k:"しょっぱい",r:"shoppai",a:"asin (terlalu asin)",n:"Dari 'shio' (garam)."},
{k:"にがい",r:"nigai",a:"pahit",n:"Kanji: 苦い."},
{k:"すっぱい",r:"suppai",a:"asam",n:"Kanji: 酸っぱい."},
{k:"からい",r:"karai",a:"pedas / gurih-asin",n:"Kanji: 辛い."},
{k:"おいしい",r:"oishii",a:"enak / lezat (sopan)",n:"Kanji: 美味しい."},
{k:"まずい",r:"mazui",a:"tidak enak",n:"Kanji: 不味い. Lawan kata dari 'oishii'."},
{k:"うまみ",r:"umami",a:"gurih (rasa ke-5)",n:"Rasa kelima — kini diakui secara ilmiah internasional."}
]},
"Kata Tanya":{rows:[
{k:"なに / なん",r:"nani / nan",a:"apa",n:"Kanji: 何."},
{k:"だれ",r:"dare",a:"siapa",n:"Kanji: 誰. Bentuk sopan: donata."},
{k:"どこ",r:"doko",a:"di mana",n:"Kanji: 何処."},
{k:"いつ",r:"itsu",a:"kapan",n:"Kanji: 何時."},
{k:"なぜ / どうして",r:"naze / doushite",a:"mengapa",n:"'Naze' lebih formal. 'Doushite' lebih umum di percakapan."},
{k:"どう",r:"dou",a:"bagaimana",n:"Kanji: 如何. 'Dou desu ka?' = bagaimana?"},
{k:"いくつ",r:"ikutsu",a:"berapa (jumlah / usia)",n:"Kanji: 幾つ."},
{k:"いくら",r:"ikura",a:"berapa harganya",n:"Kanji: 幾ら. 'Ikura desu ka?' = berapa harganya?"},
{k:"どれ",r:"dore",a:"yang mana (dari banyak)",n:"Kanji: 何れ. Pilihan dari 3 atau lebih."},
{k:"どちら",r:"dochira",a:"yang mana (dari dua)",n:"Kanji: 何方. Pilihan dari 2 opsi."},
{k:"どんな",r:"donna",a:"seperti apa / jenis apa",n:"Kanji: どんな. Menanyakan jenis atau sifat sesuatu."},
{k:"なんで",r:"nande",a:"kenapa (santai)",n:"Kanji: 何で. Versi santai dari naze/doushite."}
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
{k:"おなじ",r:"onaji",a:"sama",n:"Kanji: 同じ. 'Onaji desu' = sama saja. 'Onaji kurasu' = kelas yang sama."},
{k:"わかりません",r:"wakarimasen",a:"tidak tahu / tidak mengerti",n:"Bentuk sopan negatif dari wakaru (mengerti/tahu). 'Wakarimasen' bisa berarti 'saya tidak tahu' (jawaban) atau 'saya tidak mengerti' tergantung konteks."},
{k:"どこでもいい",r:"doko demo ii",a:"di mana saja boleh / bebas (tempat)",n:"どこ (di mana) + でも (pun/saja) + いい (bagus/boleh). Dipakai saat tidak punya preferensi tempat tertentu — 'terserah, di mana saja oke'."},
{k:"なんでもいい",r:"nan demo ii",a:"apa saja boleh / bebas (pilihan)",n:"なん (apa) + でも (pun/saja) + いい (bagus/boleh). Pola sama seperti どこでもいい tapi untuk pilihan benda/hal, bukan tempat."}
]},
"Kegiatan Rutin":{rows:[
{k:"おきます",r:"okimasu",a:"bangun tidur",n:"Dari 'okiru'. Lawan dari 'nemasu'."},
{k:"ねます",r:"nemasu",a:"tidur",n:"Dari 'neru'."},
{k:"あらいます",r:"araimasu",a:"mencuci / membasuh",n:"'Te wo araimasu' = mencuci tangan."},
{k:"みがきます",r:"migakimasu",a:"menggosok / menyikat",n:"'Ha wo migakimasu' = menggosok gigi."},
{k:"きがえます",r:"kigaemasu",a:"ganti baju",n:"Ki (memakai pakaian) + Kaeru (mengganti)."},
{k:"あるきます",r:"arukimasu",a:"berjalan kaki",n:"Dari 'aruku'."},
{k:"はしります",r:"hashirimasu",a:"berlari",n:"Dari 'hashiru'."},
{k:"べんきょうします",r:"benkyou shimasu",a:"belajar",n:"'Nihongo wo benkyou shimasu' = belajar bahasa Jepang."},
{k:"はたらきます",r:"hatarakimasu",a:"bekerja",n:"Dari 'hataraku'."},
{k:"やすみます",r:"yasumimasu",a:"beristirahat / absen",n:"'Kyou wa yasumimasu' = hari ini tidak masuk."},
{k:"でかけます",r:"dekakemasu",a:"keluar / pergi keluar",n:"'Chotto dekakemasu' = sebentar pergi keluar."},
{k:"かいものをします",r:"kaimono wo shimasu",a:"belanja",n:"Kai (membeli) + Mono (barang) + shimasu."},
{k:"りょうりをします",r:"ryouri wo shimasu",a:"memasak",n:"Ryouri (masakan) + shimasu."},
{k:"そうじをします",r:"souji wo shimasu",a:"bersih-bersih",n:"Di sekolah Jepang, souji adalah piket harian."},
{k:"せんたくをします",r:"sentaku wo shimasu",a:"mencuci pakaian",n:"Sentaku (laundry) + shimasu."}
]},
"Profesi & Pekerjaan":{rows:[
{k:"いしゃ",r:"isha",a:"dokter",n:"Kanji: 医者. Disapa 'sensei' dalam percakapan, bukan 'isha-san'."},
{k:"かんごし",r:"kangoshi",a:"perawat",n:"Kanji: 看護師. Kango (merawat) + Shi (profesional). Profesi sangat dihormati di Jepang."},
{k:"せんせい",r:"sensei",a:"guru / sensei",n:"Kanji: 先生. Sen (sebelum/lebih dulu) + Sei (hidup). Dipakai juga untuk dokter, pengacara, atau siapapun yang ahli di bidangnya."},
{k:"きょうし",r:"kyoushi",a:"guru (jabatan formal)",n:"Kanji: 教師. Kyou (mengajar) + Shi (ahli). Lebih formal dari sensei — dipakai dalam dokumen resmi, bukan untuk menyapa."},
{k:"がくせい",r:"gakusei",a:"siswa / mahasiswa",n:"Kanji: 学生. Gaku (belajar) + Sei (orang). 'Daigakusei' = mahasiswa, 'koukosei' = siswa SMA."},
{k:"かいしゃいん",r:"kaishain",a:"karyawan perusahaan",n:"Kanji: 会社員. Kaisha (perusahaan) + In (anggota). Profesi paling umum di Jepang. Sering disebut 'sarariman' (サラリーマン)."},
{k:"しゃいん",r:"shain",a:"karyawan / staf perusahaan",n:"Kanji: 社員. Sha (perusahaan) + In (anggota). Lebih singkat dari kaishain, sama maknanya. Sering dipakai dalam percakapan sehari-hari."},
{k:"てんいん",r:"ten'in",a:"pramuniaga / staf toko",n:"Kanji: 店員. Ten (toko) + In (anggota). Orang yang bekerja di toko. 'Irasshaimase!' adalah sapaan khas ten'in di Jepang."},
{k:"さっか",r:"sakka",a:"pengarang / penulis",n:"Kanji: 作家. Saku (berkarya) + Ka (ahli). Penulis novel, cerpen, atau karya sastra. Berbeda dari 'raitaa' (ライター) yang lebih ke penulis artikel/konten."},
{k:"こうむいん",r:"koumuin",a:"pegawai negeri",n:"Kanji: 公務員. Kou (publik) + Mu (tugas) + In (anggota). Pegawai pemerintah Jepang dikenal sangat disiplin dan stabil."},
{k:"エンジニア",r:"enjinia",a:"insinyur / engineer",n:"Serapan 'engineer'. Profesi IT sangat berkembang di Jepang."},
{k:"けいさつかん",r:"keisatsukan",a:"polisi (petugas)",n:"Kanji: 警察官. Keisatsu (polisi) + Kan (petugas). Polisi Jepang dikenal ramah dan ada pos kecil 'koban' di tiap sudut."},
{k:"りょうりにん",r:"ryourinin",a:"juru masak / chef",n:"Kanji: 料理人. Ryouri (masakan) + Nin (orang). Chef restoran kelas atas disebut 'shefu' (シェフ)."},
{k:"のうか",r:"nouka",a:"petani",n:"Kanji: 農家. Nou (pertanian) + Ka (keluarga/rumah). Jepang sangat menghargai petani — beras Jepang dianggap terbaik di dunia."},
{k:"かしゅ",r:"kashu",a:"penyanyi",n:"Kanji: 歌手. Ka (lagu) + Shu (orang yang melakukan). Industri J-Pop sangat besar."},
{k:"べんごし",r:"bengoshi",a:"pengacara",n:"Kanji: 弁護士. Ujian pengacara di Jepang sangat sulit — tingkat kelulusannya sangat rendah."},
{k:"うんてんし",r:"untenshi",a:"pengemudi / sopir",n:"Kanji: 運転手. Unten (mengemudi) + Shi/Shu (orang). 'Takushii no untenshi' = sopir taksi."},
{k:"かんごふ",r:"kangofu",a:"perawat (wanita, istilah lama)",n:"Kanji: 看護婦. Kini digantikan 'kangoshi' yang netral gender. Masih dipakai dalam percakapan informal."},
{k:"〜さん",r:"~san",a:"Sdr. / Sdri. / Pak / Bu (gelar sopan)",n:"Kanji: 〜さん. Ditambahkan setelah nama seseorang sebagai penghormatan, atau setelah profesi (てんいんさん, isha-san dll. dalam percakapan santai). Tidak boleh dipakai untuk diri sendiri!"}
]},
"Negara & Bangsa":{rows:[
{k:"にほん",r:"nihon",a:"Jepang",n:"Kanji: 日本. Juga dibaca 'nippon' (lebih formal/nasionalis). Harfiah: 'asal matahari' atau 'negeri matahari terbit'."},
{k:"アメリカ",r:"amerika",a:"Amerika Serikat",n:"Dari 'America'. Nama resmi: アメリカがっしゅうこく (Amerika Gasshukoku)."},
{k:"イタリア",r:"itaria",a:"Italia",n:"Serapan 'Italia'. Dikenal di Jepang terutama karena mode dan masakan."},
{k:"オーストラリア",r:"oosutoraria",a:"Australia",n:"Serapan 'Australia'. Negara tetangga yang populer sebagai tujuan study abroad orang Jepang."},
{k:"かんこく",r:"kankoku",a:"Korea Selatan",n:"Kanji: 韓国. Budaya Korea (K-pop, drama) sangat populer di Jepang, disebut Hallyu (韓流)."},
{k:"ちゅうごく",r:"chuugoku",a:"China",n:"Kanji: 中国. Harfiah: 'negara tengah'. Hubungan sejarah dan budaya yang dalam dengan Jepang."},
{k:"タイ",r:"tai",a:"Thailand",n:"Serapan 'Thai'. Populer sebagai tujuan wisata orang Jepang."},
{k:"ロシア",r:"roshia",a:"Rusia",n:"Serapan 'Russia'. Berbatasan dekat dengan Jepang di bagian utara (Hokkaido)."},
{k:"ドイツ",r:"doitsu",a:"Jerman",n:"Dari bahasa Belanda 'Duits'. Jepang dan Jerman punya hubungan historis kuat sejak abad 19."},
{k:"フランス",r:"furansu",a:"Prancis",n:"Serapan 'France'. Mode Prancis sangat berpengaruh di Jepang."},
{k:"インド",r:"indo",a:"India",n:"Serapan 'India'. Kari India (カレー) sudah diadaptasi menjadi kari gaya Jepang."},
{k:"インドネシア",r:"indoneshia",a:"Indonesia",n:"Serapan 'Indonesia'. Negara dengan jumlah pelajar bahasa Jepang terbanyak di dunia!"},
{k:"〜じん",r:"~jin",a:"orang ~ / warga negara ~",n:"Kanji: 〜人. Ditambahkan setelah nama negara. にほんじん = orang Jepang, インドネシアじん = orang Indonesia."},
{k:"〜ご",r:"~go",a:"bahasa ~",n:"Kanji: 〜語. Ditambahkan setelah nama negara/bangsa. にほんご = bahasa Jepang, えいご = bahasa Inggris."},
{k:"えいご",r:"eigo",a:"bahasa Inggris",n:"Kanji: 英語. Ei (Inggris/Eropa) + Go (bahasa). Pelajaran wajib di sekolah Jepang."}
]},
"Perkenalan Diri":{rows:[
{k:"なまえ",r:"namae",a:"nama",n:"Kanji: 名前. 'Onamae wa?' = Siapa namamu? (bentuk sopan dengan prefiks 'o')."},
{k:"めいし",r:"meishi",a:"kartu nama",n:"Kanji: 名刺. Bertukar kartu nama (meishi koukan) adalah ritual penting dalam budaya bisnis Jepang."},
{k:"あくしゅ（します）",r:"akushu (shimasu)",a:"berjabat tangan",n:"Kanji: 握手. Jabat tangan tidak sepopuler di Indonesia — orang Jepang lebih sering membungkuk (お辞儀 / ojigi)."},
{k:"（お）しごと",r:"(o)shigoto",a:"pekerjaan / profesi",n:"Kanji: 仕事. Prefiks sopan 'o' ditambahkan saat bertanya pekerjaan orang lain: 'Oshigoto wa?' = Pekerjaannya apa?"}
]},
"Arah & Posisi":{rows:[
{k:"みぎ",r:"migi",a:"kanan",n:"Kanji: 右."},
{k:"ひだり",r:"hidari",a:"kiri",n:"Kanji: 左."},
{k:"まっすぐ",r:"massugu",a:"lurus",n:"'Massugu itte kudasai' = tolong jalan lurus."},
{k:"まえ",r:"mae",a:"depan / sebelum",n:"Kanji: 前."},
{k:"うしろ",r:"ushiro",a:"belakang",n:"Kanji: 後ろ."},
{k:"うえ",r:"ue",a:"atas / di atas",n:"Kanji: 上."},
{k:"した",r:"shita",a:"bawah / di bawah",n:"Kanji: 下."},
{k:"なか",r:"naka",a:"dalam / di dalam",n:"Kanji: 中."},
{k:"そと",r:"soto",a:"luar / di luar",n:"Kanji: 外."},
{k:"となり",r:"tonari",a:"sebelah / di sebelah",n:"Kanji: 隣."},
{k:"ちかく",r:"chikaku",a:"dekat / di dekat",n:"Kanji: 近く."},
{k:"ひがし",r:"higashi",a:"timur",n:"Kanji: 東."},
{k:"にし",r:"nishi",a:"barat",n:"Kanji: 西."},
{k:"みなみ",r:"minami",a:"selatan",n:"Kanji: 南."},
{k:"きた",r:"kita",a:"utara",n:"Kanji: 北."}
]},
"Ekspresi di Kelas":{rows:[
{k:"わかりました",r:"wakarimashita",a:"saya mengerti",n:"Bentuk lampau sopan dari 'wakaru'."},
{k:"わかりません",r:"wakarimasen",a:"saya tidak mengerti",n:"Bentuk negatif sopan."},
{k:"もういちどおねがいします",r:"mou ichido onegaishimasu",a:"tolong ulangi sekali lagi",n:"Mou (lagi) + ichido (sekali) + onegaishimasu (tolong)."},
{k:"ゆっくりはなしてください",r:"yukkuri hanashite kudasai",a:"tolong bicara lebih pelan",n:"Yukkuri (pelan-pelan) + hanashite + kudasai."},
{k:"しつもんがあります",r:"shitsumon ga arimasu",a:"saya punya pertanyaan",n:"Shitsumon (pertanyaan) + ga + arimasu (ada)."},
{k:"おしえてください",r:"oshiete kudasai",a:"tolong ajari saya",n:"Oshiete (mengajari) + kudasai (tolong)."},
{k:"トイレにいってもいいですか",r:"toire ni itte mo ii desu ka",a:"boleh saya ke toilet?",n:"Cara sopan meminta izin ke kamar kecil di kelas."},
{k:"きょうのしゅくだいはなんですか",r:"kyou no shukudai wa nan desu ka",a:"apa PR hari ini?",n:"Shukudai (宿題) = PR/pekerjaan rumah."},
{k:"テストはいつですか",r:"tesuto wa itsu desu ka",a:"ujian kapan?",n:"Tesuto (serapan 'test') + wa itsu desu ka (kapan?)."},
{k:"ちょっとまってください",r:"chotto matte kudasai",a:"tolong tunggu sebentar",n:"Chotto (sedikit/sebentar) + matte + kudasai."}
]},
"Counter (Kata Bilangan)":{rows:[
{k:"〜ひき",r:"~hiki",a:"ekor (hewan kecil)",n:"Untuk kucing, anjing, ikan. 1=ippiki, 2=nihiki, 3=sanbiki."},
{k:"〜とう",r:"~tou",a:"ekor (hewan besar)",n:"Untuk sapi, gajah, kuda. 1=ittou, 2=nitou."},
{k:"〜わ",r:"~wa",a:"ekor (burung)",n:"Khusus untuk burung. 1=ichiwa, 2=niwa."},
{k:"〜まい",r:"~mai",a:"lembar (benda tipis datar)",n:"Untuk kertas, piring, baju, foto. 1=ichimai."},
{k:"〜ほん",r:"~hon",a:"batang (benda panjang)",n:"Untuk pensil, botol, pohon. 1=ippon, 2=nihon, 3=sanbon."},
{k:"〜さつ",r:"~satsu",a:"buah (buku / majalah)",n:"Khusus untuk buku dan majalah. 1=issatsu."},
{k:"〜だい",r:"~dai",a:"buah (mesin / kendaraan)",n:"Untuk kendaraan, peralatan. 1=ichidai."},
{k:"〜こ",r:"~ko",a:"buah (benda kecil bulat)",n:"Untuk apel, telur, batu. 1=ikko."},
{k:"〜はい",r:"~hai",a:"cangkir / gelas (cairan)",n:"Untuk cairan dalam wadah. 1=ippai."},
{k:"〜にん",r:"~nin",a:"orang",n:"1=hitori, 2=futari, 3=sannin."},
{k:"〜かい",r:"~kai",a:"kali / lantai",n:"(1) berapa kali (回), (2) lantai gedung (階). 1=ikkai."},
{k:"〜えん",r:"~en",a:"yen (mata uang)",n:"Counter untuk uang Jepang."}
]},

"Peralatan Masak":{rows:[
{k:"なべ",r:"nabe",a:"panci",n:"Kata asli Jepang kuno (鍋). Juga nama hidangan hot pot populer."},
{k:"フライパン",r:"furaipan",a:"wajan datar",n:"Fry + Pan."},
{k:"やかん",r:"yakan",a:"ketel air",n:"Dulu untuk merebus jamu, kini untuk air minum."},
{k:"オーブン",r:"oobun",a:"oven",n:"Serapan 'oven'."},
{k:"でんしレンジ",r:"denshi renji",a:"microwave",n:"'Denshi' (elektronik) + 'renji' (dari 'range')."},
{k:"トースター",r:"toosutaa",a:"pemanggang roti",n:"Serapan 'toaster'."},
{k:"ミキサー",r:"mikisaa",a:"blender",n:"Dari 'mixer'. Di Jepang maknanya bergeser jadi blender."},
{k:"すいはんき",r:"suihanki",a:"rice cooker",n:"Kanji: 炊飯器. 'Mesin penanak nasi'."},
{k:"コンロ",r:"konro",a:"kompor",n:"Kata asli Jepang (焜炉). 'Tungku api'."}
]},
"Alat Dapur":{rows:[
{k:"ほうちょう",r:"houchou",a:"pisau dapur",n:"Kanji: 包丁. Dari nama koki legendaris Cina kuno."},
{k:"まないた",r:"manaita",a:"talenan",n:"Kanji: まな板. 'Papan untuk memotong ikan'."},
{k:"キッチンばさみ",r:"kitchin basami",a:"gunting dapur",n:"Kitchin (dapur) + Hasami (gunting)."},
{k:"おたま",r:"otama",a:"sendok sayur",n:"Singkatan dari Otamajakushi (kecebong). Bentuknya mirip kecebong."},
{k:"へら",r:"hera",a:"spatula",n:"Kanji: 箆. Bilah tipis/sudip datar."},
{k:"トング",r:"tongu",a:"penjepit",n:"Serapan 'tongs'."},
{k:"しゃもじ",r:"shamoji",a:"sendok nasi",n:"Kanji: 杓文字."},
{k:"スプーン",r:"supuun",a:"sendok",n:"Serapan 'spoon'."},
{k:"フォーク",r:"fooku",a:"garpu",n:"Serapan 'fork'."},
{k:"はし",r:"hashi",a:"sumpit",n:"Kanji: 箸. 'Jembatan' antara makanan dan mulut."},
{k:"ざる",r:"zaru",a:"saringan bambu",n:"Keranjang anyaman bambu berlubang."},
{k:"おろしがね",r:"oroshigane",a:"parutan",n:"Kanji: おろし金. Untuk memarut jahe, lobak, dsb."}
]},
"Wadah & Perabot":{rows:[
{k:"ボウル",r:"booru",a:"mangkuk besar",n:"Serapan 'bowl'."},
{k:"さら",r:"sara",a:"piring",n:"Kanji: 皿."},
{k:"ちゃわん",r:"chawan",a:"mangkuk nasi",n:"Kanji: 茶碗. Aslinya 'mangkuk teh', kini khusus mangkuk nasi."},
{k:"コップ",r:"koppu",a:"gelas",n:"Dari bahasa Belanda/Portugis. Gelas tanpa gagang."},
{k:"カップ",r:"kappu",a:"cangkir",n:"Serapan 'cup'."},
{k:"マグカップ",r:"magu kappu",a:"mug",n:"Mug + Cup. Cangkir mug besar bergagang."},
{k:"れいぞうこ",r:"reizouko",a:"kulkas",n:"Kanji: 冷蔵庫. 'Kotak penyimpanan dingin'."},
{k:"れいとうこ",r:"reitouko",a:"freezer",n:"Kanji: 冷凍庫. 'Kotak pembeku'."},
{k:"ゴミばこ",r:"gomibako",a:"tempat sampah",n:"Kanji: ゴミ箱. 'Kotak sampah'."},
{k:"たな",r:"tana",a:"rak",n:"Kanji: 棚."},
{k:"ひきだし",r:"hikidashi",a:"laci",n:"Kanji: 引き出し. 'Kotak yang ditarik keluar'."}
]},
"Bumbu & Bahan":{rows:[
{k:"しお",r:"shio",a:"garam",n:"Kata asli Jepang kuno (塩)."},
{k:"さとう",r:"satou",a:"gula",n:"Kanji: 砂糖. 'Gula pasir'."},
{k:"こしょう",r:"koshou",a:"merica / lada",n:"Kanji: 胡椒."},
{k:"しょうゆ",r:"shouyu",a:"kecap asin",n:"Kanji: 醤油. Bumbu paling khas masakan Jepang."},
{k:"みそ",r:"miso",a:"pasta miso",n:"Kanji: 味噌. Pasta dari fermentasi kedelai."},
{k:"す",r:"su",a:"cuka",n:"Kanji: 酢."},
{k:"あぶら",r:"abura",a:"minyak",n:"Kanji: 油."},
{k:"こめ",r:"kome",a:"beras (mentah)",n:"Kanji: 米. Khusus beras belum dimasak."},
{k:"にく",r:"niku",a:"daging",n:"Kanji: 肉."},
{k:"やさい",r:"yasai",a:"sayuran",n:"Kanji: 野菜. 'Sayuran yang tumbuh di ladang'."},
{k:"くだもの",r:"kudamono",a:"buah-buahan",n:"Kanji: 果物. 'Benda hasil pohon'."},
{k:"パン",r:"pan",a:"roti",n:"Serapan dari bahasa Portugis 'Pão'."},
{k:"ごはん",r:"gohan",a:"nasi (matang)",n:"Kanji: 御飯. Beda dengan こめ (kome) yang masih mentah."}
]},
"Bahan Pelengkap":{rows:[
{k:"ラップ",r:"rappu",a:"plastik wrap",n:"Serapan 'wrap'. Plastik pembungkus makanan."},
{k:"アルミホイル",r:"arumi hoiru",a:"aluminium foil",n:"Serapan 'aluminum foil'."},
{k:"キッチンペーパー",r:"kitchin peepaa",a:"tisu dapur",n:"Serapan 'kitchen paper'."},
{k:"スポンジ",r:"suponji",a:"spons",n:"Serapan 'sponge'. Untuk mencuci piring."},
{k:"せんざい",r:"senzai",a:"sabun cuci / deterjen",n:"Kanji: 洗剤. 'Bahan kimia pembersih'."}
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
{k:"はい",r:"hai",a:"ya",n:"Afirmasi formal. Dalam percakapan santai: うん (un)."},
{k:"いいえ",r:"iie",a:"tidak / bukan",n:"Negasi formal. Dalam percakapan santai: ううん (uun)."},
{k:"いらっしゃいませ",r:"irasshaimase",a:"selamat datang (di toko/restoran)",n:"Ungkapan wajib staf toko saat pelanggan masuk. Tidak perlu direspons — cukup angguk atau senyum."},
{k:"（どうも）ありがとうございます",r:"(doumo) arigatou gozaimasu",a:"terima kasih (banyak)",n:"どうも menambahkan penekanan 'sangat/banyak'. Sering diucapkan staf toko/restoran saat pelanggan membayar atau keluar."}
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
    {k:"おはようございます",r:"ohayou gozaimasu",a:"Selamat pagi",n:"Dipakai saat pertama bertemu di pagi hari. Bentuk santai: おはよう (ohayou)."},
    {k:"こんにちは",r:"konnichiwa",a:"Selamat siang / sore",n:"Dipakai sekitar jam 10 pagi–6 sore. は ditulis tapi dibaca 'wa'."},
    {k:"こんばんは",r:"konbanwa",a:"Selamat malam",n:"Dipakai saat pertama bertemu di malam hari. は dibaca 'wa'."},
    {k:"おやすみなさい",r:"oyasumi nasai",a:"Selamat tidur",n:"Dipakai saat berpisah di malam hari atau sebelum tidur. Santai: おやすみ."},
    {k:"じゃ、また",r:"ja, mata",a:"Sampai jumpa lagi",n:"Ungkapan perpisahan santai. Juga bisa 'じゃあね' atau 'またね'."},
    {k:"ありがとうございます",r:"arigatou gozaimasu",a:"Terima kasih",n:"Bentuk formal. Santai: ありがとう. Sangat formal: どうもありがとうございます."},
    {k:"すみません",r:"sumimasen",a:"Maaf / Permisi",n:"Serbaguna — untuk meminta maaf ringan, memanggil orang, atau permisi melewati seseorang."},
    {k:"よろしくおねがいします",r:"yoroshiku onegaishimasu",a:"Tolong / Mohon bantuannya",n:"Dipakai saat kenalan baru, meminta bantuan, atau menitipkan sesuatu. Tidak ada padanan langsung dalam bahasa Indonesia."},
    {k:"おつかれさまです",r:"otsukaresama desu",a:"Terima kasih atas kerja kerasnya",n:"Salam di lingkungan kerja/sekolah saat bertemu rekan di tengah atau akhir hari. Bukan salam pertama pagi hari."},
    {k:"おさきにしつれいします",r:"osakini shitsureishimasu",a:"Permisi, saya pulang duluan",n:"Wajib diucapkan saat pulang lebih awal dari rekan-rekan di lingkungan kerja Jepang."},
    {k:"はじめまして",r:"hajimemashite",a:"Perkenalkan / Senang berkenalan",n:"Selalu diikuti よろしくおねがいします. Hanya dipakai saat bertemu pertama kali."},
    {k:"あのう",r:"anou",a:"Anu... / Hmm...",n:"Kata pengisi (filler word) saat ragu atau mau mulai bicara. Setara 'um' atau 'err' dalam bahasa Inggris."},
    {k:"こちらこそ",r:"kochira koso",a:"Sama-sama / Saya juga",n:"Respons untuk よろしく atau ありがとう. Menyatakan perasaan yang sama balik ke lawan bicara."},
    {k:"そうですか",r:"sou desu ka",a:"Oh, begitu ya",n:"Respons saat menerima informasi baru. Intonasi naik = bertanya ulang, intonasi turun = 'oh begitu'."},
    {k:"はい",r:"hai",a:"Ya",n:"Afirmasi formal. Dalam percakapan santai: うん (un)."},
    {k:"いいえ",r:"iie",a:"Tidak / Bukan",n:"Negasi formal. Dalam percakapan santai: ううん (uun). Orang Jepang sering menghindari iie langsung karena dianggap kurang sopan."}
  ]},
  "Perkenalan Diri": { rows: [
    {k:"わたし",r:"watashi",a:"Saya",n:"Kata ganti orang pertama paling netral. Pria di percakapan santai sering pakai ぼく (boku) atau おれ (ore)."},
    {k:"なまえ",r:"namae",a:"Nama",n:"Kanji: 名前. 'Onamae wa?' = Siapa namamu? (bentuk sopan dengan prefiks 'o')."},
    {k:"めいし",r:"meishi",a:"Kartu nama",n:"Kanji: 名刺. Bertukar kartu nama (meishi koukan) adalah ritual penting dalam budaya bisnis Jepang — ada tata cara khusus cara memberikan dan menerimanya."},
    {k:"あくしゅ（します）",r:"akushu (shimasu)",a:"Berjabat tangan",n:"Kanji: 握手. Jabat tangan tidak sepopuler di Indonesia — orang Jepang lebih sering membungkuk (お辞儀 / ojigi)."},
    {k:"〜じん",r:"~jin",a:"Orang ~ / Warga negara ~",n:"Kanji: 〜人. Ditambahkan setelah nama negara. にほんじん = orang Jepang, インドネシアじん = orang Indonesia."},
    {k:"くに",r:"kuni",a:"Negara / Negeri",n:"Kanji: 国. 'Okuni wa dochira desu ka?' = Anda berasal dari negara mana?"},
    {k:"どちら",r:"dochira",a:"Yang mana / Di mana (sopan)",n:"Kanji: 何方. Bentuk sopan dari どこ (doko). Dipakai untuk bertanya asal usul atau memilih di antara dua opsi."},
    {k:"おくにはどちらですか。",r:"okuni wa dochira desu ka?",a:"Anda berasal dari negara mana?",n:"Pola kalimat lengkap. Lihat juga Bunpou → Bab 1 → Pola Tanya Identitas untuk pola serupa lainnya."},
    {k:"（お）しごと",r:"(o)shigoto",a:"Pekerjaan / Profesi",n:"Kanji: 仕事. Prefiks sopan 'o' ditambahkan saat bertanya pekerjaan orang lain: 'Oshigoto wa?' = Pekerjaannya apa?"},
    {k:"こちらこそよろしくおねがいします",r:"kochira koso yoroshiku onegaishimasu",a:"Saya juga mohon bantuannya",n:"Gabungan こちらこそ (sama-sama) + よろしくおねがいします. Respons lengkap dan sopan saat seseorang mengucapkan よろしくおねがいします duluan."}
  ]},
  "Negara & Bangsa": { rows: [
    {k:"にほん",r:"nihon",a:"Jepang",n:"Kanji: 日本. Juga dibaca 'nippon' (lebih formal/nasionalis). Harfiah: 'asal matahari' atau 'negeri matahari terbit'."},
    {k:"アメリカ",r:"Amerika",a:"Amerika Serikat",n:"Dari 'America'. Nama resmi: アメリカがっしゅうこく (Amerika Gasshukoku)."},
    {k:"イタリア",r:"Itaria",a:"Italia",n:"Serapan 'Italia'. Dikenal di Jepang terutama karena mode dan masakan."},
    {k:"オーストラリア",r:"Oosutoraria",a:"Australia",n:"Serapan 'Australia'. Negara tetangga yang populer sebagai tujuan study abroad orang Jepang."},
    {k:"かんこく",r:"kankoku",a:"Korea Selatan",n:"Kanji: 韓国. Budaya Korea (K-pop, drama) sangat populer di Jepang, disebut Hallyu (韓流 / hanryuu)."},
    {k:"ちゅうごく",r:"chuugoku",a:"China",n:"Kanji: 中国. Harfiah: 'negara tengah'. Hubungan sejarah dan budaya yang dalam dengan Jepang."},
    {k:"タイ",r:"Tai",a:"Thailand",n:"Serapan 'Thai'. Populer sebagai tujuan wisata orang Jepang."},
    {k:"ロシア",r:"Roshia",a:"Rusia",n:"Serapan 'Russia'. Berbatasan dekat dengan Jepang di bagian utara (Hokkaido)."},
    {k:"ドイツ",r:"Doitsu",a:"Jerman",n:"Dari bahasa Belanda 'Duits'. Jepang dan Jerman punya hubungan historis kuat sejak abad 19."},
    {k:"フランス",r:"Furansu",a:"Prancis",n:"Serapan 'France'. Mode Prancis sangat berpengaruh di Jepang — Paris dianggap pusat fashion dunia."},
    {k:"インド",r:"Indo",a:"India",n:"Serapan 'India'. Kari India (カレー) sangat populer dan sudah diadaptasi menjadi kari gaya Jepang."},
    {k:"インドネシア",r:"Indoneshia",a:"Indonesia",n:"Serapan 'Indonesia'. Negara dengan jumlah pelajar bahasa Jepang terbanyak di dunia!"}
  ]},
  "Profesi (Bab 1)": { rows: [
    {k:"がくせい",r:"gakusei",a:"Siswa / Mahasiswa",n:"Kanji: 学生. Gaku (belajar) + Sei (orang). こうこうせい = siswa SMA, だいがくせい = mahasiswa."},
    {k:"せんせい",r:"sensei",a:"Guru / Profesor / Dokter (panggilan)",n:"Kanji: 先生. Dipakai sebagai PANGGILAN untuk guru, dokter, pengacara — siapapun yang ahli di bidangnya. Jangan pakai untuk diri sendiri."},
    {k:"きょうし",r:"kyoushi",a:"Guru (profesi/jabatan)",n:"Kanji: 教師. Lebih formal dari sensei — dipakai dalam dokumen resmi atau saat menyebut profesi. Tidak dipakai untuk menyapa."},
    {k:"かいしゃいん",r:"kaishain",a:"Karyawan perusahaan",n:"Kanji: 会社員. Kaisha (perusahaan) + In (anggota). Profesi paling umum di Jepang."},
    {k:"しゃいん",r:"shain",a:"Karyawan / Staf perusahaan",n:"Kanji: 社員. Lebih singkat dari かいしゃいん, makna sama. Lebih sering dipakai dalam percakapan sehari-hari."},
    {k:"〜さん",r:"~san",a:"Sdr. / Sdri. / Pak / Bu (gelar sopan)",n:"Kanji: 〜さん. Ditambahkan setelah nama seseorang sebagai penghormatan. Tidak boleh dipakai untuk diri sendiri!"}
  ]},
  "Sekolah & Institusi": { rows: [
    {k:"こうこう",r:"koukou",a:"SMA",n:"Kanji: 高校. Kependekan dari こうとうがっこう (koukou gakkou = sekolah menengah atas). Wajib belajar di Jepang sampai SMP, SMA tidak wajib tapi 98% melanjutkan."},
    {k:"だいがく",r:"daigaku",a:"Universitas",n:"Kanji: 大学. Dai (besar) + Gaku (belajar). Ujian masuk universitas Jepang sangat kompetitif."},
    {k:"にほんごがっこう",r:"nihongo gakkou",a:"Sekolah Bahasa Jepang",n:"Kanji: 日本語学校. Sekolah khusus bahasa Jepang untuk orang asing. Banyak tersebar di kota-kota besar Jepang."}
  ]},
  "Data Diri (Angka & Waktu)": { rows: [
    {k:"〜さい",r:"~sai",a:"Umur ~ tahun",n:"Kanji: 〜歳. Ditambahkan setelah angka untuk menyatakan usia. Lihat sub-bab Umur untuk detail lengkap tiap angka."},
    {k:"たんじょうび",r:"tanjoubi",a:"Hari ulang tahun",n:"Kanji: 誕生日. Tanjou (lahir) + Bi (hari). 'Otanjoubi omedetou!' = Selamat ulang tahun!"},
    {k:"〜がつ",r:"~gatsu",a:"Bulan ~",n:"Kanji: 〜月. Ditambahkan setelah angka 1-12. いちがつ = Januari, にがつ = Februari, dst."},
    {k:"〜にち",r:"~nichi",a:"Tanggal ~",n:"Kanji: 〜日. Tanggal 1-10 punya pengucapan khusus (ついたち、ふつか、dll). Lihat sub-bab Tanggal."},
    {k:"いつ",r:"itsu",a:"Kapan",n:"Kanji: 何時. Kata tanya waktu. 'Itsu desu ka?' = Kapan?"}
  ]},
  "Hobi & Kegiatan": { rows: [
    {k:"しゅみ",r:"shumi",a:"Hobi",n:"Kanji: 趣味. 'Oshumi wa nan desu ka?' = Apa hobimu? Pertanyaan umum saat kenalan di Jepang."},
    {k:"スポーツ",r:"supootsu",a:"Olahraga",n:"Serapan 'sports'. Olahraga populer di Jepang: 野球 (yakyuu/baseball), サッカー (sakaa/sepakbola), 剣道 (kendou)."},
    {k:"サッカー",r:"sakkaa",a:"Sepak bola",n:"Serapan 'soccer'. Tim nasional Jepang dijuluki 'Samurai Blue'."},
    {k:"テニス",r:"tenisu",a:"Tenis",n:"Serapan 'tennis'. Salah satu olahraga paling populer di Jepang."},
    {k:"すいえい",r:"suiei",a:"Renang",n:"Kanji: 水泳. Sui (air) + Ei (berenang). Pelajaran renang wajib di sekolah Jepang."},
    {k:"えいが",r:"eiga",a:"Film",n:"Kanji: 映画. 'Eiga wo miru' = menonton film. Studio Ghibli adalah studio film animasi Jepang paling terkenal di dunia."},
    {k:"おんがく",r:"ongaku",a:"Musik",n:"Kanji: 音楽. 'Ongaku wo kiku' = mendengarkan musik. J-Pop, J-Rock, dan City Pop sangat populer global."},
    {k:"どくしょ",r:"dokusho",a:"Membaca buku",n:"Kanji: 読書. Doku (membaca) + Sho (tulisan/buku). Budaya membaca sangat tinggi di Jepang — manga dan novel ringan sangat populer."},
    {k:"りょこう",r:"ryokou",a:"Wisata / Jalan-jalan",n:"Kanji: 旅行. Ryo (perjalanan) + Kou (pergi). Wisata domestik sangat populer — 'onsen ryokou' (wisata pemandian air panas) favorit orang Jepang."},
    {k:"りょうり",r:"ryouri",a:"Masak / Masakan",n:"Kanji: 料理. 'Ryouri ga suki desu' = Saya suka memasak. Masakan Jepang (washoku) terdaftar sebagai warisan budaya tak benda UNESCO."},
    {k:"なん",r:"nan",a:"Apa",n:"Kanji: 何. Bentuk pendek dari なに (nani). Dipakai sebelum です/の/か. 'Oshumi wa nan desu ka?' = Hobinya apa?"},
    {k:"たべあるき",r:"tabearuki",a:"Wisata kuliner jalan kaki / makan sambil jalan",n:"Kanji: 食べ歩き. Tabe (makan) + Aruki (berjalan). Aktivitas berkeliling sambil mencicipi berbagai jajanan/makanan kaki lima — populer di kawasan wisata Jepang seperti Osaka (Dotonbori) atau Asakusa."}
  ]},
},

bab2: {
  "Tempat & Fasilitas Umum": { rows: [
    {k:"トイレ",r:"toire",a:"Toilet / Kamar kecil",n:"Serapan 'toilet'. Di Jepang toilet terkenal karena canggih — ada toilet pintar (washlet) dengan berbagai fitur. Selalu bersih dan tersedia di mana-mana."},
    {k:"きつえんじょ",r:"kitsuenjo",a:"Area merokok",n:"Kanji: 喫煙所. Kitsu (menghisap) + En (asap) + Jo (tempat). Di Jepang merokok di luar area ini dilarang keras di banyak kota."},
    {k:"きっさてん",r:"kissaten",a:"Kafe / Warung kopi",n:"Kanji: 喫茶店. Kedai kopi tradisional Jepang, beda dari kafe modern. Sering punya suasana jadul dan tenang."},
    {k:"スーパー",r:"suupaa",a:"Supermarket / Pasar swalayan",n:"Serapan 'supermarket'. Di Jepang supermarket tutup cukup malam (22:00-23:00) dan punya area bento segar yang didiskon jelang tutup."},
    {k:"１００えんしょっぷ",r:"hyaku en shoppu",a:"Toko serba 100 yen",n:"Toko dengan semua barang seharga 100 yen (±Rp 10.000). Daiso adalah yang paling terkenal. Kualitasnya lebih baik dari yang dibayangkan!"},
    {k:"レストラン",r:"resutoran",a:"Restoran",n:"Serapan 'restaurant'. Di Jepang restoran sering punya mesin pemesan tiket (食券 shokken) di pintu masuk."},
    {k:"ちか",r:"chika",a:"Bawah tanah / Basement",n:"Kanji: 地下. Chi (bumi/tanah) + Ka (bawah). Pusat perbelanjaan Jepang punya 'depachika' (デパ地下) — food hall basement yang sangat mewah."},
    {k:"ビル",r:"biru",a:"Gedung",n:"Serapan 'building'. Gedung perkantoran dan perbelanjaan. Jangan tertukar dengan ビール (biiru = bir)!"},
    {k:"インフォメーション",r:"infomeeshon",a:"Bagian informasi",n:"Serapan 'information'. Meja informasi biasanya ada di dekat pintu masuk gedung atau stasiun."},
    {k:"エスカレーター",r:"esukareetaa",a:"Eskalator / Tangga berjalan",n:"Serapan 'escalator'. Di Jepang ada aturan tak tertulis: berdiri di sisi kiri (Osaka: kanan) agar orang yang buru-buru bisa lewat di sisi satunya."},
    {k:"エレベーター",r:"erebeetaa",a:"Elevator / Lift",n:"Serapan 'elevator'. Di gedung-gedung Jepang, ada suara atau musik saat pintu terbuka/tertutup. Sangat bersih dan terawat."},
    {k:"レジ",r:"reji",a:"Kasir",n:"Dari 'register' (mesin kasir). Area pembayaran di toko. Di Jepang kasir menaruh kembalian di nampan kecil, bukan langsung ke tangan."},
    {k:"ATM（エーティーエム）",r:"eetiiemu",a:"Mesin ATM",n:"ATM di Jepang punya jam operasional (tidak 24 jam di semua tempat). ATM di 7-Eleven dan kantor pos paling mudah dipakai oleh orang asing."},
    {k:"としょかん",r:"toshokan",a:"Perpustakaan",n:"Kanji: 図書館. Tosho (buku) + Kan (gedung). Perpustakaan umum di Jepang biasanya gratis dan buka sampai malam, sering jadi tempat belajar populer."},
    {k:"オフィス／じむしょ",r:"ofisu / jimusho",a:"Kantor",n:"オフィス = serapan 'office' (lebih umum/santai). じむしょ (事務所) = istilah asli Jepang, lebih formal — jimu (urusan/tugas) + sho (tempat)."},
    {k:"きょうしつ",r:"kyoushitsu",a:"Kelas / Ruang kelas",n:"Kanji: 教室. Kyou (mengajar) + Shitsu (ruangan). Dipakai di sekolah maupun tempat kursus."},
    {k:"へや",r:"heya",a:"Kamar / Ruangan",n:"Kanji: 部屋. Kata umum untuk kamar/ruangan apapun. 'Watashi no heya' = kamar saya. Di apartemen Jepang, jumlah kamar sering ditulis dengan kode seperti 1K, 2LDK, dst."}
  ]},
  "Posisi di Gedung": { rows: [
    {k:"ここ",r:"koko",a:"Di sini",n:"Dekat pembicara. Sistem Ko-So-A-Do: ここ (sini) → そこ (situ) → あそこ (sana)."},
    {k:"そこ",r:"soko",a:"Di situ",n:"Dekat pendengar/lawan bicara."},
    {k:"あそこ",r:"asoko",a:"Di sana",n:"Jauh dari kedua pihak."},
    {k:"どこ",r:"doko",a:"Di mana",n:"Bentuk tanya dari sistem Ko-So-A-Do untuk tempat. 'Toire wa doko desu ka?' = Toilet di mana?"},
    {k:"〜かい",r:"~kai",a:"Lantai ~",n:"Kanji: 〜階. いっかい = lantai 1, にかい = lantai 2, さんがい = lantai 3, ちか = basement. Perhatikan perubahan bunyi di lantai 3 (sangai, bukan sankai)."}
  ]},
  "Barang Belanjaan": { rows: [
    {k:"ほん",r:"hon",a:"Buku",n:"Kanji: 本. Juga berarti 'asal/asli'. Toko buku (本屋 / honya) masih sangat populer di Jepang meski era digital."},
    {k:"ケーキ",r:"keeki",a:"Kue",n:"Serapan 'cake'. Kue di Jepang terkenal halus dan tidak terlalu manis. Strawberry shortcake adalah kue natal tradisional Jepang."},
    {k:"パン",r:"pan",a:"Roti",n:"Dari bahasa Portugis 'pão'. Toko roti (パン屋 / panya) ada di mana-mana. Roti melon (メロンパン) adalah roti khas Jepang."},
    {k:"カメラ",r:"kamera",a:"Kamera",n:"Serapan 'camera'. Merek kamera Jepang (Canon, Nikon, Sony, Fujifilm) mendominasi pasar global."},
    {k:"けいたいでんわ",r:"keitai denwa",a:"Ponsel / HP",n:"Kanji: 携帯電話. Harfiah: 'telepon yang dibawa-bawa'. Biasa disingkat けいたい (keitai). Di Jepang ekosistem smartphone dominan: iPhone sangat populer."},
    {k:"でんしじしょ",r:"denshi jisho",a:"Kamus elektronik",n:"Kanji: 電子辞書. Denshi (elektronik) + Jisho (kamus). Sebelum era smartphone, alat ini wajib dimiliki pelajar bahasa Jepang."},
    {k:"パソコン",r:"pasokon",a:"Laptop / PC",n:"Singkatan 'personal computer' dalam lafal Jepang. Lebih umum dari コンピュータ dalam percakapan sehari-hari."},
    {k:"けしごむ",r:"keshigomu",a:"Karet penghapus",n:"Kanji: 消しゴム. Keshi (menghapus) + Gomu (dari Belanda 'gom' = karet). Di Jepang penghapus punya kualitas sangat baik — merek Mono sangat terkenal."},
    {k:"ペン",r:"pen",a:"Pena",n:"Serapan 'pen'. Kata umum untuk pena. Untuk ballpoint: ボールペン (boorupen). Jepang terkenal dengan kualitas alat tulis yang sangat baik."},
    {k:"トイレットペーパー",r:"toiretto peepaa",a:"Tisu toilet",n:"Serapan 'toilet paper'. Di Jepang tisu toilet berkualitas sangat tinggi dan hampir selalu tersedia di toilet umum."}
  ]},
  "Bahan & Makanan": { rows: [
    {k:"あぶら",r:"abura",a:"Minyak goreng",n:"Kanji: 油. Untuk minyak nabati/hewani. Minyak wijen (ごまあぶら / goma abura) sangat umum dalam masakan Jepang."},
    {k:"こめ",r:"kome",a:"Beras (mentah)",n:"Kanji: 米. Khusus beras belum dimasak. Setelah dimasak jadi ごはん (gohan). Beras Jepang varietas Japonica — pendek, pulen, agak lengket."},
    {k:"たまご",r:"tamago",a:"Telur",n:"Kanji: 卵. Bahan serbaguna dalam masakan Jepang. Telur mentah sering dimakan langsung di atas nasi (卵かけご飯 / tamago kake gohan = TKG)."},
    {k:"みず",r:"mizu",a:"Air",n:"Kanji: 水. Air dingin/biasa. Air panas = おゆ (oyu). Air keran di Jepang bisa langsung diminum — standar kualitasnya sangat tinggi."},
    {k:"にく",r:"niku",a:"Daging",n:"Kanji: 肉. Kata umum untuk daging. とりにく (tori niku) = daging ayam, ぎゅうにく (gyuu niku) = daging sapi, ぶたにく (buta niku) = daging babi."},
    {k:"とりにく",r:"toriniku",a:"Daging ayam",n:"Kanji: 鶏肉. Tori (ayam) + Niku (daging). Sangat umum dalam masakan Jepang — yakiniku, karaage (唐揚げ), oyakodon, dll."},
    {k:"ぎゅうにく",r:"gyuuniku",a:"Daging sapi",n:"Kanji: 牛肉. Gyuu (sapi) + Niku (daging). Wagyu (和牛) adalah daging sapi Jepang premium yang terkenal di seluruh dunia."},
    {k:"ぶたにく",r:"butaniku",a:"Daging babi",n:"Kanji: 豚肉. Buta (babi) + Niku (daging). Sangat umum dalam masakan Jepang — ramen, tonkatsu, kakuni semuanya pakai babi."},
    {k:"さかな",r:"sakana",a:"Ikan",n:"Kanji: 魚. Bahan utama masakan Jepang. Jepang adalah negara konsumen ikan terbesar di dunia per kapita."},
    {k:"やさい",r:"yasai",a:"Sayur-sayuran",n:"Kanji: 野菜. Ya (ladang) + Sai (sayur). Sayuran segar Jepang terkenal berkualitas tinggi dan mahal."},
    {k:"イチゴ",r:"ichigo",a:"Stroberi",n:"Dari bahasa Inggris. Stroberi Jepang terkenal sangat manis dan besar — bisa sangat mahal (1 buah bisa ribuan yen untuk yang premium)."},
    {k:"リンゴ",r:"ringo",a:"Apel",n:"Kata asli Jepang (林檎). Apel Aomori (青森) terkenal sebagai yang terbaik di Jepang. Jadi oleh-oleh khas daerah tersebut."},
    {k:"スープ",r:"suupu",a:"Sup",n:"Serapan 'soup'. Di Jepang sup miso (みそしる / miso shiru) adalah sup paling ikonik — hampir selalu ada dalam set makan tradisional Jepang."},
    {k:"とんかつ",r:"tonkatsu",a:"Tonkatsu",n:"Dari ton (babi) + katsu (singkatan katsuretsu dari 'cutlet'). Potongan daging babi berlapis tepung roti yang digoreng. Menu populer di seluruh Jepang."},
    {k:"ジュース",r:"juusu",a:"Jus",n:"Serapan 'juice'. Di Jepang ada berbagai jus buah dalam kemasan. 100% jus ditandai dengan '果汁100%' (kajuu hyaku paasento)."}
  ]},
  "Kata Tunjuk & Harga": { rows: [
    {k:"これ",r:"kore",a:"Ini (dekat pembicara)",n:"Sistem Ko-So-A-Do untuk benda: これ (ini, dekat aku) → それ (itu, dekat kamu) → あれ (itu, jauh)."},
    {k:"それ",r:"sore",a:"Itu (dekat lawan bicara)",n:"Benda yang lebih dekat ke pendengar daripada ke pembicara."},
    {k:"あれ",r:"are",a:"Itu (jauh dari keduanya)",n:"Benda yang jauh dari kedua pihak. Juga ekspresi kaget/bingung: 'Eh? あれ?'"},
    {k:"この〜",r:"kono ~",a:"Ini ~ (sebelum benda)",n:"Dipakai langsung sebelum kata benda. この本 (kono hon) = buku ini. Tidak bisa berdiri sendiri."},
    {k:"その〜",r:"sono ~",a:"Itu ~ (dekat pendengar)",n:"その鞄 (sono kaban) = tas itu (yang di dekatmu)."},
    {k:"あの〜",r:"ano ~",a:"Itu ~ (jauh, sebelum benda)",n:"あの人 (ano hito) = orang itu (yang jauh). Juga dipakai sebagai 'anu...' saat ragu."},
    {k:"〜えん",r:"~en",a:"~ yen",n:"Kanji: 〜円. Satuan mata uang Jepang. ¥100 ≈ Rp 10.000. Uang koin ada: 1, 5, 10, 50, 100, 500 yen. Uang kertas: 1.000, 5.000, 10.000 yen."},
    {k:"いくら",r:"ikura",a:"Berapa (harga)",n:"Kanji: 幾ら. Khusus untuk menanyakan harga. 'Ikura desu ka?' = Berapa harganya? Kata wajib saat belanja!"}
  ]},
  "Pakaian & Aksesoris": { rows: [
    {k:"Ｔシャツ",r:"tii shatsu",a:"Kaos",n:"Serapan 'T-shirt'. Salah satu item fashion paling umum. Di Jepang kaos dengan karakter anime/manga sangat populer."},
    {k:"〜や",r:"~ya",a:"Toko ~",n:"Kanji: 〜屋. Ditambahkan setelah jenis barang untuk menyebut tokonya. くつや (kutsuya) = toko sepatu, はなや (hanaya) = toko bunga, パンや (panya) = toko roti."},
    {k:"くつや",r:"kutsuya",a:"Toko sepatu",n:"Kanji: 靴屋. Kutsu (sepatu) + Ya (toko). Di Jepang toko sepatu sering spesifik — ada yang khusus sepatu sekolah, olahraga, atau fashion."},
    {k:"でんき",r:"denki",a:"Alat elektronik / Listrik",n:"Kanji: 電気. Denki juga berarti 'listrik'. Di sini konteksnya toko elektronik. Akihabara (秋葉原) di Tokyo adalah surga belanja elektronik."}
  ]},
  "Bahasa & Sapaan Toko": { rows: [
    {k:"〜ご",r:"~go",a:"Bahasa ~",n:"Kanji: 〜語. Ditambahkan setelah nama negara/bangsa. にほんご = bahasa Jepang, えいご = bahasa Inggris, インドネシアご = bahasa Indonesia."},
    {k:"えいご",r:"eigo",a:"Bahasa Inggris",n:"Kanji: 英語. Ei (Inggris/Eropa) + Go (bahasa). Pelajaran wajib di sekolah Jepang, tapi tingkat kemahiran orang Jepang rata-rata masih rendah karena kurang praktik."},
    {k:"てんいん",r:"ten'in",a:"Karyawan / Pegawai toko",n:"Kanji: 店員. Ten (toko) + In (anggota). Sudah ada juga di Materi → Kotoba → Profesi & Pekerjaan. Terkenal karena pelayanan prima (おもてなし / omotenashi)."},
    {k:"いらっしゃいませ",r:"irasshaimase",a:"Selamat datang (di toko/restoran)",n:"Ungkapan wajib staf toko saat pelanggan masuk. Tidak perlu direspons — cukup angguk atau senyum. Berasal dari kata kerja いらっしゃる (irassharu) = bentuk sangat sopan dari 'ada/datang/pergi'."},
    {k:"（どうも）ありがとうございます",r:"(doumo) arigatou gozaimasu",a:"Terima kasih (banyak)",n:"どうも menambahkan penekanan 'sangat/banyak'. Sering diucapkan staf toko/restoran saat pelanggan membayar atau keluar."}
  ]}
}

}; // end BUKU

// ─────────────────────────────────────────────────────
// DATA: BUNPOU — pola kalimat & tata bahasa
// Format tiap item: { pola, romaji, arti, catatan, contoh: [{jp, id}] }
// ─────────────────────────────────────────────────────
const BUNPOU = {

tanya: [
  {
    judul: "Pola Dasar: 〜は〜ですか？",
    sub: "Menanyakan identitas atau fakta tentang sesuatu/seseorang",
    items: [
      {
        pola: "〜は　なんですか？",
        romaji: "~ wa nan desu ka?",
        arti: "~ itu apa?",
        catatan: "Pola paling dasar untuk bertanya. Ganti ～ dengan topik yang ingin ditanyakan.",
        contoh: [
          {jp:"これは　なんですか？", id:"Ini apa?"},
          {jp:"おしごとは　なんですか？", id:"Pekerjaannya apa?"},
          {jp:"しゅみは　なんですか？", id:"Hobinya apa?"}
        ]
      },
      {
        pola: "〜は　だれですか？",
        romaji: "~ wa dare desu ka?",
        arti: "~ itu siapa?",
        catatan: "Untuk menanyakan orang. Bentuk sopan: どなたですか (donata desu ka).",
        contoh: [
          {jp:"あのひとは　だれですか？", id:"Orang itu siapa?"},
          {jp:"せんせいは　だれですか？", id:"Gurunya siapa?"}
        ]
      },
      {
        pola: "〜は　どこですか？",
        romaji: "~ wa doko desu ka?",
        arti: "~ di mana?",
        catatan: "Untuk menanyakan lokasi benda/tempat. Bentuk sopan: どちらですか (dochira desu ka).",
        contoh: [
          {jp:"トイレは　どこですか？", id:"Toilet di mana?"},
          {jp:"えきは　どこですか？", id:"Stasiunnya di mana?"},
          {jp:"おくには　どちらですか？", id:"Negaranya di mana? (sopan)"}
        ]
      },
      {
        pola: "〜は　いつですか？",
        romaji: "~ wa itsu desu ka?",
        arti: "~ kapan?",
        catatan: "Untuk menanyakan waktu kejadian suatu peristiwa atau jadwal.",
        contoh: [
          {jp:"テストは　いつですか？", id:"Ujiannya kapan?"},
          {jp:"たんじょうびは　いつですか？", id:"Ulang tahunnya kapan?"},
          {jp:"やすみは　いつですか？", id:"Liburnya kapan?"}
        ]
      },
      {
        pola: "〜は　どうですか？",
        romaji: "~ wa dou desu ka?",
        arti: "Bagaimana ~ nya?",
        catatan: "Untuk meminta pendapat, kondisi, atau menawarkan sesuatu.",
        contoh: [
          {jp:"にほんごは　どうですか？", id:"Bagaimana (pelajaran) bahasa Jepangnya?"},
          {jp:"おちゃは　どうですか？", id:"Bagaimana kalau minum teh?"},
          {jp:"てんきは　どうですか？", id:"Bagaimana cuacanya?"}
        ]
      }
    ]
  },
  {
    judul: "Menanyakan Identitas Diri",
    sub: "Pola pertanyaan umum saat berkenalan atau memperkenalkan orang",
    items: [
      {
        pola: "おなまえは？ / おなまえは　なんですか？",
        romaji: "onamae wa? / onamae wa nan desu ka?",
        arti: "Siapa namamu? / Namanya siapa?",
        catatan: "Prefiks 'o' (お) menambahkan kesan sopan. Tanpa 'o': なまえは？ lebih santai. Jawab: ～です (〜 desu).",
        contoh: [
          {jp:"おなまえは　なんですか？", id:"Namanya siapa?"},
          {jp:"わたしの　なまえは　レンディです。", id:"Nama saya Rendi."}
        ]
      },
      {
        pola: "おしごとは　なんですか？",
        romaji: "oshigoto wa nan desu ka?",
        arti: "Pekerjaannya apa?",
        catatan: "Prefiks 'o' pada shigoto (仕事) menambahkan kesan sopan. Jawab dengan profesi + です.",
        contoh: [
          {jp:"おしごとは　なんですか？", id:"Pekerjaannya apa?"},
          {jp:"わたしは　がくせいです。", id:"Saya (adalah) siswa."},
          {jp:"かいしゃいんです。", id:"(Saya) karyawan perusahaan."}
        ]
      },
      {
        pola: "おいくつですか？",
        romaji: "oikutsu desu ka?",
        arti: "Berapa usia Anda? (sopan)",
        catatan: "Bentuk sopan. Untuk teman sebaya cukup なんさいですか (nansai desu ka). Jawab: ～さいです.",
        contoh: [
          {jp:"おいくつですか？", id:"Berapa usia Anda?"},
          {jp:"にじゅうさんさいです。", id:"(Saya) 23 tahun."},
          {jp:"はたちです。", id:"(Saya) 20 tahun."}
        ]
      },
      {
        pola: "おくには　どちらですか？",
        romaji: "okuni wa dochira desu ka?",
        arti: "Anda berasal dari negara mana?",
        catatan: "どちら = bentuk sopan dari どこ. Jawab: ～じんです (saya orang ~) atau ～からきました (saya dari ~).",
        contoh: [
          {jp:"おくには　どちらですか？", id:"Anda dari negara mana?"},
          {jp:"インドネシアじんです。", id:"Saya orang Indonesia."},
          {jp:"インドネシアから　きました。", id:"Saya datang dari Indonesia."}
        ]
      },
      {
        pola: "おすまいは　どちらですか？",
        romaji: "osumai wa dochira desu ka?",
        arti: "Tinggal di mana? (sopan)",
        catatan: "Sumai (住まい) = tempat tinggal. Lebih sopan dari どこに　すんでいますか. Jawab: ～に　すんでいます.",
        contoh: [
          {jp:"おすまいは　どちらですか？", id:"Tinggal di mana?"},
          {jp:"じゃかるたに　すんでいます。", id:"(Saya) tinggal di Jakarta."}
        ]
      }
    ]
  },
  {
    judul: "Menanyakan Jumlah & Harga",
    sub: "Pola untuk bertanya tentang angka, harga, dan waktu",
    items: [
      {
        pola: "いくらですか？",
        romaji: "ikura desu ka?",
        arti: "Berapa harganya?",
        catatan: "Kata wajib saat belanja. Jawab: ～えんです (~ en desu).",
        contoh: [
          {jp:"これは　いくらですか？", id:"Ini berapa harganya?"},
          {jp:"ひゃくえんです。", id:"Seratus yen."},
          {jp:"このTシャツは　いくらですか？", id:"Kaos ini berapa?"}
        ]
      },
      {
        pola: "なんさいですか？ / おいくつですか？",
        romaji: "nansai desu ka? / oikutsu desu ka?",
        arti: "Umurnya berapa?",
        catatan: "なんさい = santai/netral. おいくつ = sopan (untuk orang lebih tua/atasan). Jawab: ～さいです.",
        contoh: [
          {jp:"なんさいですか？", id:"Umurnya berapa?"},
          {jp:"じゅうはっさいです。", id:"(Saya) 18 tahun."}
        ]
      },
      {
        pola: "なんじですか？ / いまなんじですか？",
        romaji: "nanji desu ka? / ima nanji desu ka?",
        arti: "Jam berapa? / Sekarang jam berapa?",
        catatan: "なんじ = jam berapa. いま = sekarang. Jawab: ～じ～ふんです.",
        contoh: [
          {jp:"いま　なんじですか？", id:"Sekarang jam berapa?"},
          {jp:"ごじはんです。", id:"(Sekarang) jam setengah enam."},
          {jp:"じゅうにじです。", id:"Jam dua belas."}
        ]
      },
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
    judul: "どこ (Menanyakan & menyatakan tempat/lokasi)",
    sub: "Pola lengkap seputar どこ — dari bertanya lokasi sampai menjawabnya dengan sistem ここ/そこ/あそこ",
    items: [
      {
        pola: "〜は　どこですか？",
        romaji: "~ wa doko desu ka?",
        arti: "~ di mana? (pertanyaan dasar)",
        catatan: "Pola paling dasar untuk menanyakan lokasi. Bentuk sopan: どちらですか (dochira desu ka).",
        contoh: [
          {jp:"トイレは　どこですか？", id:"Toilet di mana?"},
          {jp:"えきは　どこですか？", id:"Stasiunnya di mana?"},
          {jp:"としょかんは　どこですか？", id:"Perpustakaan di mana?"}
        ]
      },
      {
        pola: "〜は　ここ／そこ／あそこです。",
        romaji: "~ wa koko / soko / asoko desu.",
        arti: "~ ada di sini / situ / sana. (pernyataan, jawaban)",
        catatan: "Jawaban untuk 〜はどこですか. ここ = dekat pembicara, そこ = dekat pendengar, あそこ = jauh dari keduanya.",
        contoh: [
          {jp:"トイレは　そこです。", id:"Toiletnya di situ."},
          {jp:"レジは　あそこです。", id:"Kasirnya di sana."},
          {jp:"としょかんは　ここです。", id:"Perpustakaannya di sini."}
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
          {jp:"せんせいは　きょうしつに　います。", id:"Gurunya ada di ruang kelas."},
          {jp:"としょかんは　にかいに　あります。", id:"Perpustakaannya ada di lantai 2."}
        ]
      },
      {
        pola: "どこでも　いいです。",
        romaji: "doko demo ii desu.",
        arti: "Di mana saja boleh / terserah. (pernyataan, bebas pilihan)",
        catatan: "どこ + でも (pun/saja) + いいです (boleh/bagus). Dipakai saat tidak ada preferensi tempat tertentu — jawaban santai kalau ditanya mau di mana.",
        contoh: [
          {jp:"どこで　たべますか？　－　どこでも　いいです。", id:"Makan di mana? — Di mana saja boleh."},
          {jp:"どこに　いきたいですか？　－　どこでも　いいです。", id:"Mau pergi ke mana? — Terserah, di mana saja."}
        ]
      }
    ]
  },
  {
    judul: "ここ／そこ／あそこ／どこ (KO-SO-A-DO untuk TEMPAT)",
    sub: "Menunjuk LOKASI/tempat secara langsung — bisa berdiri sendiri tanpa kata benda setelahnya. こ=dekat pembicara, そ=dekat pendengar, あ=jauh dari keduanya, ど=bentuk tanya.",
    items: [
      {
        pola: "ここです。",
        romaji: "koko desu.",
        arti: "Di sini. (dekat pembicara)",
        catatan: "Dipakai untuk tempat yang dekat dengan pembicara (aku). Bisa berdiri sendiri sebagai jawaban.",
        contoh: [
          {jp:"わたしの　せきは　ここです。", id:"Tempat duduk saya di sini."},
          {jp:"ここに　すわって　ください。", id:"Silakan duduk di sini."}
        ]
      },
      {
        pola: "そこです。",
        romaji: "soko desu.",
        arti: "Di situ. (dekat pendengar)",
        catatan: "Dipakai untuk tempat yang dekat dengan lawan bicara, bukan dengan pembicara.",
        contoh: [
          {jp:"かばんは　そこです。", id:"Tasnya ada di situ."},
          {jp:"そこに　おいて　ください。", id:"Tolong taruh di situ."}
        ]
      },
      {
        pola: "あそこです。",
        romaji: "asoko desu.",
        arti: "Di sana. (jauh dari keduanya)",
        catatan: "Dipakai untuk tempat yang jauh dari pembicara MAUPUN pendengar.",
        contoh: [
          {jp:"としょかんは　あそこです。", id:"Perpustakaannya di sana."},
          {jp:"あそこに　みえるのが　やまです。", id:"Yang terlihat di sana itu gunung."}
        ]
      },
      {
        pola: "〜は　どこですか？",
        romaji: "~ wa doko desu ka?",
        arti: "~ di mana? (bentuk tanya)",
        catatan: "Bentuk tanya dari seri ini. Jawab dengan ここ/そこ/あそこ atau nama tempat spesifik.",
        contoh: [
          {jp:"トイレは　どこですか？", id:"Toilet di mana?"},
          {jp:"それは　どこですか？", id:"Itu di mana? (menanyakan lokasi suatu tempat)"}
        ]
      }
    ]
  },
  {
    judul: "これ／それ／あれ／どれ (KO-SO-A-DO untuk BENDA, berdiri sendiri)",
    sub: "Menunjuk BENDA sebagai pengganti kata benda — BISA berdiri sendiri tanpa perlu diikuti kata benda lain. Beda dari この/その/あの/どの yang WAJIB diikuti kata benda.",
    items: [
      {
        pola: "これは　〜です。",
        romaji: "kore wa ~ desu.",
        arti: "Ini adalah ~. (benda dekat pembicara)",
        catatan: "これ dipakai untuk benda yang dekat dengan pembicara (aku), dan BISA berdiri sendiri sebagai subjek kalimat.",
        contoh: [
          {jp:"これは　ほんです。", id:"Ini adalah buku."},
          {jp:"これを　ください。", id:"Tolong berikan ini."}
        ]
      },
      {
        pola: "それは　〜です。",
        romaji: "sore wa ~ desu.",
        arti: "Itu adalah ~. (benda dekat pendengar)",
        catatan: "それ dipakai untuk benda yang lebih dekat ke pendengar daripada ke pembicara.",
        contoh: [
          {jp:"それは　じしょです。", id:"Itu (adalah) kamus."},
          {jp:"それは　なんですか？", id:"Itu apa?"}
        ]
      },
      {
        pola: "あれは　〜です。",
        romaji: "are wa ~ desu.",
        arti: "Itu adalah ~. (benda jauh dari keduanya)",
        catatan: "あれ dipakai untuk benda yang jauh dari pembicara maupun pendengar. Juga jadi ekspresi kaget: 'Are?' = Eh?",
        contoh: [
          {jp:"あれは　えきです。", id:"Itu (yang jauh) adalah stasiun."},
          {jp:"あれは　わたしの　かばんです。", id:"Itu (yang jauh) tas saya."}
        ]
      },
      {
        pola: "〜は　どれですか？",
        romaji: "~ wa dore desu ka?",
        arti: "~ yang mana? (bentuk tanya, pilihan 3+)",
        catatan: "Bentuk tanya dari seri ini. Dipakai saat memilih dari 3 pilihan atau lebih.",
        contoh: [
          {jp:"どれが　たなかさんの　かばんですか？", id:"Yang mana tas milik Tanaka-san?"},
          {jp:"どれに　しますか？", id:"Mau pilih yang mana?"}
        ]
      }
    ]
  },
  {
    judul: "この／その／あの／どの (KO-SO-A-DO untuk MENERANGKAN benda)",
    sub: "WAJIB diikuti kata benda — tidak bisa berdiri sendiri! Beda dari これ/それ/あれ/どれ yang menggantikan kata benda, kelompok ini menerangkan/menempel pada kata benda. この本 (benar) vs この (salah, harus ada kata bendanya).",
    items: [
      {
        pola: "この〜",
        romaji: "kono ~",
        arti: "~ ini (benda dekat pembicara + kata benda)",
        catatan: "HARUS diikuti kata benda. Bandingkan: これは本です (ini buku) VS この本 (buku ini) — artinya beda struktur, これ berdiri sendiri, この menempel ke 本.",
        contoh: [
          {jp:"この　ほんは　いくらですか？", id:"Buku ini berapa harganya?"},
          {jp:"この　ひとは　だれですか？", id:"Orang ini siapa?"}
        ]
      },
      {
        pola: "その〜",
        romaji: "sono ~",
        arti: "~ itu (dekat pendengar + kata benda)",
        catatan: "Menerangkan benda yang dekat dengan pendengar. Selalu diikuti kata benda.",
        contoh: [
          {jp:"その　かばんは　だれのですか？", id:"Tas itu punya siapa?"},
          {jp:"その　ほんを　とって　ください。", id:"Tolong ambilkan buku itu."}
        ]
      },
      {
        pola: "あの〜",
        romaji: "ano ~",
        arti: "~ itu (jauh dari keduanya + kata benda)",
        catatan: "Menerangkan benda yang jauh dari pembicara dan pendengar. Juga dipakai sebagai 'anu...' saat ragu bicara.",
        contoh: [
          {jp:"あの　ひとは　だれですか？", id:"Orang itu (yang jauh) siapa?"},
          {jp:"あの　みせは　やすいです。", id:"Toko itu murah."}
        ]
      },
      {
        pola: "どの〜　ですか？",
        romaji: "dono ~ desu ka?",
        arti: "~ yang mana? (bentuk tanya, menerangkan)",
        catatan: "Bentuk tanya. Selalu diikuti kata benda — berbeda dari どれ yang berdiri sendiri.",
        contoh: [
          {jp:"どの　ほんですか？", id:"Buku yang mana?"},
          {jp:"どの　Tシャツが　いいですか？", id:"Kaos yang mana yang bagus?"}
        ]
      }
    ]
  },
  {
    judul: "こちら／そちら／あちら／どちら (KO-SO-A-DO bentuk SOPAN)",
    sub: "Versi lebih sopan/formal, serbaguna — bisa menggantikan ここ (tempat), これ (benda), bahkan menyapa orang secara halus. Sering dipakai di telepon, ke tamu, atau situasi resmi.",
    items: [
      {
        pola: "こちらへ　どうぞ。",
        romaji: "kochira e douzo.",
        arti: "Silakan ke sini. (sopan, tempat/arah)",
        catatan: "Versi sopan dari こっち/ここ. Dipakai saat mempersilakan tamu, atau memperkenalkan orang: 'Kochira wa Tanaka-san desu' = Ini adalah Tanaka-san.",
        contoh: [
          {jp:"こちらへ　どうぞ。", id:"Silakan ke sini."},
          {jp:"こちらは　たなかさんです。", id:"Ini adalah Tanaka-san. (perkenalan sopan)"}
        ]
      },
      {
        pola: "そちらに　あります。",
        romaji: "sochira ni arimasu.",
        arti: "Ada di situ. (sopan, sering dipakai di telepon)",
        catatan: "Versi sopan dari そっち/そこ. 'Sochira wa?' di telepon = 'Ini siapa (di sana)?'",
        contoh: [
          {jp:"しょうひんは　そちらに　あります。", id:"Barangnya ada di situ."},
          {jp:"もしもし、そちらは　どなたですか？", id:"Halo, ini siapa (di sana)? (telepon)"}
        ]
      },
      {
        pola: "あちらです。",
        romaji: "achira desu.",
        arti: "Di sana. (sopan)",
        catatan: "Versi sopan dari あっち/あそこ. Umum dipakai staf toko/hotel menunjukkan arah ke tamu.",
        contoh: [
          {jp:"トイレは　あちらです。", id:"Toiletnya di sana."},
          {jp:"エレベーターは　あちらです。", id:"Liftnya di sana."}
        ]
      },
      {
        pola: "〜は　どちらですか？",
        romaji: "~ wa dochira desu ka?",
        arti: "~ yang mana? / ~ di mana? (bentuk tanya, sopan)",
        catatan: "Ya, ada bentuk tanyanya! どちら dipakai untuk: (1) memilih dari 2 pilihan secara sopan, (2) menanyakan tempat/asal secara halus (おくにはどちらですか), (3) menanyakan siapa secara sopan di telepon.",
        contoh: [
          {jp:"おくには　どちらですか？", id:"Anda berasal dari negara mana? (sopan)"},
          {jp:"コーヒーと　おちゃ、どちらが　いいですか？", id:"Kopi atau teh, yang mana yang lebih baik?"},
          {jp:"もしもし、どちらさまですか？", id:"Halo, ini siapa ya? (sopan, di telepon)"}
        ]
      }
    ]
  }
],

bab1: [
  {
    judul: "〜は　〜です (A adalah B)",
    sub: "Pola kalimat nominatif dasar — menyatakan identitas atau fakta",
    items: [
      {
        pola: "〜は　〜です。",
        romaji: "~ wa ~ desu.",
        arti: "~ adalah ~.",
        catatan: "は (wa) = partikel topik. です (desu) = kopula sopan setara 'adalah'. Ini pola paling dasar dalam bahasa Jepang.",
        contoh: [
          {jp:"わたしは　がくせいです。", id:"Saya adalah siswa."},
          {jp:"これは　ほんです。", id:"Ini adalah buku."},
          {jp:"せんせいは　たなかさんです。", id:"Gurunya adalah Tanaka-san."}
        ]
      },
      {
        pola: "〜は　〜では　ありません。",
        romaji: "~ wa ~ dewa arimasen.",
        arti: "~ bukan ~.",
        catatan: "Bentuk negatif dari です. Percakapan santai: じゃないです (ja nai desu).",
        contoh: [
          {jp:"わたしは　せんせいでは　ありません。", id:"Saya bukan guru."},
          {jp:"これは　じしょじゃないです。", id:"Ini bukan kamus."}
        ]
      },
      {
        pola: "〜は　〜ですか？",
        romaji: "~ wa ~ desu ka?",
        arti: "Apakah ~ adalah ~?",
        catatan: "Tambahkan か di akhir untuk membentuk kalimat tanya. Intonasi datar atau sedikit naik.",
        contoh: [
          {jp:"たなかさんは　がくせいですか？", id:"Apakah Tanaka-san siswa?"},
          {jp:"これは　にほんごですか？", id:"Apakah ini bahasa Jepang?"}
        ]
      }
    ]
  },
  {
    judul: "〜も　〜です (~ juga ~)",
    sub: "Partikel も (mo) untuk menyatakan kesamaan",
    items: [
      {
        pola: "〜も　〜です。",
        romaji: "~ mo ~ desu.",
        arti: "~ juga ~.",
        catatan: "も menggantikan は. Dipakai saat topik baru punya sifat yang sama dengan yang sudah disebut.",
        contoh: [
          {jp:"わたしも　がくせいです。", id:"Saya juga siswa."},
          {jp:"たなかさんも　にほんじんです。", id:"Tanaka-san juga orang Jepang."},
          {jp:"これも　いいです。", id:"Ini juga bagus."}
        ]
      }
    ]
  },
  {
    judul: "〜の〜 (kepemilikan / penghubung kata benda)",
    sub: "Partikel の (no) menghubungkan dua kata benda",
    items: [
      {
        pola: "〔名詞A〕の　〔名詞B〕",
        romaji: "[meishi A] no [meishi B]",
        arti: "B dari A / B milik A / B tentang A",
        catatan: "の menghubungkan dua kata benda. A menerangkan B. Setara apostrophe-s ('s) dalam bahasa Inggris, tapi lebih luas fungsinya.",
        contoh: [
          {jp:"わたしの　なまえ", id:"nama saya"},
          {jp:"にほんの　たべもの", id:"makanan Jepang"},
          {jp:"がっこうの　せんせい", id:"guru (di) sekolah"},
          {jp:"たなかさんの　めいし", id:"kartu nama Tanaka-san"}
        ]
      }
    ]
  },
  {
    judul: "〜じん／〜ご (orang~ / bahasa~)",
    sub: "Sufiks untuk kewarganegaraan dan bahasa",
    items: [
      {
        pola: "〔国名〕＋　じん",
        romaji: "[negara] + jin",
        arti: "Orang ~ / Warga negara ~",
        catatan: "じん (人) = orang. Ditambahkan langsung setelah nama negara.",
        contoh: [
          {jp:"にほんじん", id:"orang Jepang"},
          {jp:"インドネシアじん", id:"orang Indonesia"},
          {jp:"アメリカじん", id:"orang Amerika"}
        ]
      },
      {
        pola: "〔国名〕＋　ご",
        romaji: "[negara] + go",
        arti: "Bahasa ~",
        catatan: "ご (語) = bahasa. Ditambahkan setelah nama negara/bangsa.",
        contoh: [
          {jp:"にほんご", id:"bahasa Jepang"},
          {jp:"えいご", id:"bahasa Inggris"},
          {jp:"インドネシアご", id:"bahasa Indonesia"}
        ]
      }
    ]
  },
  {
    judul: "〜は　〜じんです (Menyatakan kewarganegaraan)",
    sub: "Pola lengkap memakai 〜じん dalam kalimat 〜は〜です — fokus pada LABEL kewarganegaraan",
    items: [
      {
        pola: "（わたしは）　〜じんです。",
        romaji: "(watashi wa) ~jin desu.",
        arti: "(Saya) orang ~. (pernyataan)",
        catatan: "Gabungan partikel は + 〜じん + です. Dipakai untuk memperkenalkan asal kewarganegaraan diri sendiri atau orang lain — menyebutkan LABEL/identitas negaranya langsung.",
        contoh: [
          {jp:"わたしは　インドネシアじんです。", id:"Saya orang Indonesia."},
          {jp:"たなかさんは　にほんじんです。", id:"Tanaka-san orang Jepang."},
          {jp:"わたしは　アメリカじんです。", id:"Saya orang Amerika."}
        ]
      },
      {
        pola: "〜は　なにじんですか？",
        romaji: "~ wa nani jin desu ka?",
        arti: "~ orang mana? (pertanyaan, langsung)",
        catatan: "Bentuk tanya langsung dari pola di atas. Jawab dengan 〜じんです. Lebih to-the-point dibanding おくにはどちらですか di bawah — cocok untuk teman sebaya/situasi santai.",
        contoh: [
          {jp:"〜さんは　なにじんですか？", id:"~ orang mana?"},
          {jp:"あのひとは　なにじんですか？", id:"Orang itu orang mana?"}
        ]
      }
    ]
  },
  {
    judul: "おくには　どちらですか？ (Menanyakan asal negara — sopan)",
    sub: "Versi lebih halus/sopan dari なにじんですか — menanyakan asal negara, bukan langsung melabeli kewarganegaraan",
    items: [
      {
        pola: "おくには　どちらですか？",
        romaji: "okuni wa dochira desu ka?",
        arti: "Negara Anda yang mana? / Anda berasal dari negara mana? (pertanyaan, sopan)",
        catatan: "Beda dengan なにじんですか yang langsung menanyakan LABEL kewarganegaraan, pola ini menanyakan ASAL secara lebih halus — harfiah 'negara Anda yang mana?'. Prefiks お (hormat) + くに (negara) + どちら (bentuk sopan dari どこ). Lebih cocok dipakai saat baru kenalan atau ke orang yang lebih tua/dihormati.",
        contoh: [
          {jp:"すみません、おくには　どちらですか？", id:"Permisi, Anda berasal dari negara mana?"},
          {jp:"〜さんは　おくには　どちらですか？", id:"~ berasal dari negara mana?"}
        ]
      },
      {
        pola: "（わたしの　くには）　〜です。",
        romaji: "(watashi no kuni wa) ~ desu.",
        arti: "(Negara saya) adalah ~. (pernyataan, jawaban formal)",
        catatan: "Jawaban yang sejalan dengan pertanyaan おくにはどちらですか — menyebutkan nama negara, bukan bentuk 〜じん. Bisa juga dijawab pakai 〜じんです biasa, keduanya diterima.",
        contoh: [
          {jp:"わたしの　くには　インドネシアです。", id:"Negara saya adalah Indonesia."},
          {jp:"くには　にほんです。", id:"Negaranya Jepang."}
        ]
      }
    ]
  },
  {
    judul: "〜は　（お）しごとは　〜です (Menyatakan pekerjaan)",
    sub: "Pola menyebutkan profesi/pekerjaan diri sendiri atau orang lain",
    items: [
      {
        pola: "（わたしの）　しごとは　〜です。",
        romaji: "(watashi no) shigoto wa ~ desu.",
        arti: "Pekerjaan (saya) adalah ~. (pernyataan)",
        catatan: "Bisa juga langsung pakai 〜は〜です tanpa kata しごと: わたしは　がくせいです (saya siswa).",
        contoh: [
          {jp:"わたしの　しごとは　かいしゃいんです。", id:"Pekerjaan saya karyawan perusahaan."},
          {jp:"わたしは　がくせいです。", id:"Saya (adalah) siswa."},
          {jp:"たなかさんは　せんせいです。", id:"Tanaka-san adalah guru."}
        ]
      },
      {
        pola: "おしごとは　なんですか？",
        romaji: "oshigoto wa nan desu ka?",
        arti: "Pekerjaannya apa? (pertanyaan)",
        catatan: "Bentuk tanya yang sopan, dengan prefiks お. Jawab dengan 〜は〜です atau しごとは〜です.",
        contoh: [
          {jp:"〜さんの　おしごとは　なんですか？", id:"Pekerjaan ~ apa? (sopan)"},
          {jp:"おしごとは　なんですか？", id:"Pekerjaannya apa?"}
        ]
      }
    ]
  },
  {
    judul: "〜は　〜じゃありません (Negatif santai)",
    sub: "Variasi bentuk negatif yang lebih santai dari 〜では　ありません",
    items: [
      {
        pola: "〜は　〜じゃありません。",
        romaji: "~ wa ~ja arimasen.",
        arti: "~ bukan ~. (pernyataan negatif)",
        catatan: "じゃ adalah kontraksi santai dari では. Lebih sering dipakai dalam percakapan sehari-hari dibanding では　ありません yang lebih formal.",
        contoh: [
          {jp:"わたしは　せんせいじゃありません。", id:"Saya bukan guru."},
          {jp:"これは　ペンじゃありません。", id:"Ini bukan pena."},
          {jp:"たなかさんは　がくせいじゃありません。かいしゃいんです。", id:"Tanaka-san bukan siswa. (Dia) karyawan perusahaan."}
        ]
      },
      {
        pola: "〜は　〜じゃありませんか？",
        romaji: "~ wa ~ja arimasen ka?",
        arti: "Bukankah ~ itu ~? (pertanyaan negatif/konfirmasi)",
        catatan: "Menambahkan か mengubahnya jadi pertanyaan konfirmasi — menyiratkan pembicara cukup yakin tapi ingin memastikan.",
        contoh: [
          {jp:"これは　じしょじゃありませんか？", id:"Bukankah ini kamus?"},
          {jp:"〜さんは　がくせいじゃありませんか？", id:"Bukankah ~ siswa?"}
        ]
      }
    ]
  },
  {
    judul: "〜は　〜さいです (Menyatakan umur)",
    sub: "Pola menyebutkan usia memakai counter 〜さい",
    items: [
      {
        pola: "（わたしは）　〜さいです。",
        romaji: "(watashi wa) ~sai desu.",
        arti: "(Saya) berumur ~ tahun. (pernyataan)",
        catatan: "〜さい (歳) ditambahkan setelah angka. Perhatikan pengucapan khusus: よんさい (4), はっさい (8), じゅっさい (10), はたち (20, BUKAN にじゅっさい!).",
        contoh: [
          {jp:"わたしは　にじゅっさいです。", id:"Saya berumur 20 tahun."},
          {jp:"たなかさんは　じゅうはっさいです。", id:"Tanaka-san berumur 18 tahun."},
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
  {
    judul: "〜は　〜です (Menyatakan & menanyakan waktu)",
    sub: "Pola menyatakan dan menanyakan kapan suatu peristiwa terjadi",
    items: [
      {
        pola: "〜は　〜です。",
        romaji: "~ wa ~ desu.",
        arti: "~ adalah (pada) ~. (pernyataan waktu)",
        catatan: "Pola pernyataan waktu memakai です langsung setelah keterangan waktu (tanggal/bulan).",
        contoh: [
          {jp:"たんじょうびは　はちがつ　むいかです。", id:"Ulang tahun (saya) tanggal 6 Agustus."},
          {jp:"テストは　らいしゅうです。", id:"Ujiannya minggu depan."},
          {jp:"やすみは　にちようびです。", id:"Liburnya hari Minggu."}
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
    judul: "しゅみは　〜です (Menyatakan & menanyakan hobi)",
    sub: "Pola memperkenalkan hobi, termasuk variasi の untuk merinci jenis hobi",
    items: [
      {
        pola: "しゅみは　〜です。",
        romaji: "shumi wa ~ desu.",
        arti: "Hobi (saya) adalah ~. (pernyataan)",
        catatan: "Pola pernyataan dasar untuk memperkenalkan hobi sendiri.",
        contoh: [
          {jp:"しゅみは　どくしょです。", id:"Hobi (saya) adalah membaca buku."},
          {jp:"しゅみは　りょこうです。", id:"Hobi (saya) adalah jalan-jalan."},
          {jp:"しゅみは　サッカーです。", id:"Hobi (saya) adalah sepak bola."}
        ]
      },
      {
        pola: "〜の　しゅみは　〜です。",
        romaji: "~ no shumi wa ~ desu.",
        arti: "Hobi (milik) ~ adalah ~. (pernyataan, orang lain)",
        catatan: "の menghubungkan pemilik hobi dengan kata しゅみ. Dipakai saat menyebut hobi orang lain secara spesifik.",
        contoh: [
          {jp:"たなかさんの　しゅみは　サッカーです。", id:"Hobi Tanaka-san adalah sepak bola."},
          {jp:"わたしの　しゅみは　おんがくです。", id:"Hobi saya adalah musik."}
        ]
      },
      {
        pola: "しゅみは　なんですか？",
        romaji: "shumi wa nan desu ka?",
        arti: "Hobinya apa? (pertanyaan)",
        catatan: "Pertanyaan standar saat berkenalan di Jepang. Jawab dengan しゅみは〜です.",
        contoh: [
          {jp:"しゅみは　なんですか？", id:"Hobinya apa?"},
          {jp:"〜さんの　しゅみは　なんですか？", id:"Hobi ~ apa?"}
        ]
      }
    ]
  },
  {
    judul: "〜と　〜 (dan, menggabungkan kata benda)",
    sub: "Partikel と menghubungkan dua kata benda — beda dari し yang menggabungkan alasan/kalimat",
    items: [
      {
        pola: "〔名詞A〕と　〔名詞B〕",
        romaji: "[meishi A] to [meishi B]",
        arti: "A dan B",
        catatan: "と menghubungkan dua kata benda secara langsung, setara 'and' dalam bahasa Inggris untuk daftar barang/orang.",
        contoh: [
          {jp:"テニスと　すいえいが　すきです。", id:"(Saya) suka tenis dan renang."},
          {jp:"がくせいと　せんせい", id:"siswa dan guru"},
          {jp:"にほんと　インドネシア", id:"Jepang dan Indonesia"}
        ]
      }
    ]
  },
  {
    judul: "〜も　〜も (~ pun juga ~ pun)",
    sub: "Mengulang partikel も pada dua kata benda berurutan",
    items: [
      {
        pola: "〔名詞A〕も　〔名詞B〕も　〜",
        romaji: "[meishi A] mo [meishi B] mo ~",
        arti: "Baik A maupun B sama-sama ~",
        catatan: "Pola penekanan: も dipakai dua kali untuk menyebutkan dua hal yang sama-sama berlaku, beda dari と yang sekadar menggabungkan.",
        contoh: [
          {jp:"わたしも　たなかさんも　がくせいです。", id:"Saya maupun Tanaka-san sama-sama siswa."},
          {jp:"テニスも　すいえいも　すきです。", id:"Tenis maupun renang, sama-sama suka."},
          {jp:"これも　それも　いいです。", id:"Ini maupun itu, sama-sama bagus."}
        ]
      }
    ]
  }
],

bab2: [
  {
    judul: "これ／それ／あれ／どれ (Ko-So-A-Do untuk benda)",
    sub: "Kata tunjuk untuk benda berdasarkan jarak dari pembicara dan pendengar",
    items: [
      {
        pola: "これは　〜ですか？",
        romaji: "kore wa ~ desu ka?",
        arti: "Ini ~ (ya)?",
        catatan: "これ = benda dekat pembicara. それ = dekat pendengar. あれ = jauh dari keduanya. どれ = yang mana?",
        contoh: [
          {jp:"これは　なんですか？", id:"Ini apa?"},
          {jp:"それは　じしょです。", id:"Itu (adalah) kamus."},
          {jp:"あれは　えきです。", id:"Itu (yang jauh) adalah stasiun."},
          {jp:"どれが　たなかさんの　かばんですか？", id:"Yang mana tas milik Tanaka-san?"}
        ]
      },
      {
        pola: "この〜／その〜／あの〜／どの〜",
        romaji: "kono~ / sono~ / ano~ / dono~",
        arti: "~ ini / ~ itu (dekat) / ~ itu (jauh) / ~ yang mana",
        catatan: "Berbeda dari これ/それ/あれ — この/その/あの/どの HARUS diikuti kata benda. Tidak bisa berdiri sendiri.",
        contoh: [
          {jp:"このほんは　いくらですか？", id:"Buku ini berapa harganya?"},
          {jp:"そのかばんは　だれのですか？", id:"Tas itu punya siapa?"},
          {jp:"あのひとは　だれですか？", id:"Orang itu siapa?"},
          {jp:"どのTシャツが　いいですか？", id:"Kaos yang mana yang bagus?"}
        ]
      }
    ]
  },
  {
    judul: "ここ／そこ／あそこ／どこ (Ko-So-A-Do untuk tempat)",
    sub: "Kata tunjuk untuk lokasi/tempat",
    items: [
      {
        pola: "〜は　どこですか？",
        romaji: "~ wa doko desu ka?",
        arti: "~ di mana?",
        catatan: "ここ = di sini. そこ = di situ. あそこ = di sana. どこ = di mana? Sangat berguna saat berbelanja atau bepergian.",
        contoh: [
          {jp:"トイレは　どこですか？", id:"Toilet di mana?"},
          {jp:"ここは　なんかいですか？", id:"Di sini lantai berapa?"},
          {jp:"レジは　そこです。", id:"Kasirnya di situ."},
          {jp:"エレベーターは　あそこです。", id:"Liftnya di sana."}
        ]
      }
    ]
  },
  {
    judul: "〜は　〜えんです (harga)",
    sub: "Menyatakan dan menanyakan harga",
    items: [
      {
        pola: "〜は　〜えんです。",
        romaji: "~ wa ~ en desu.",
        arti: "~ (harganya) ~ yen.",
        catatan: "Pola dasar menyatakan harga. Untuk menanya: いくらですか (ikura desu ka)?",
        contoh: [
          {jp:"このケーキは　ごひゃくえんです。", id:"Kue ini (harganya) 500 yen."},
          {jp:"あのTシャツは　いくらですか？", id:"Kaos itu berapa?"},
          {jp:"せんえんです。", id:"(Harganya) seribu yen."}
        ]
      }
    ]
  },
  {
    judul: "〜は　なんかいですか？ (lantai berapa?)",
    sub: "Menanyakan dan menyatakan posisi lantai gedung",
    items: [
      {
        pola: "〜は　なんかいですか？",
        romaji: "~ wa nankai desu ka?",
        arti: "~ ada di lantai berapa?",
        catatan: "〜かい (階) = lantai. Perhatikan: いっかい (1), にかい (2), さんがい (3), よんかい (4), ごかい (5). Lantai 3 bunyinya さんがい, bukan さんかい!",
        contoh: [
          {jp:"レストランは　なんかいですか？", id:"Restaurannya di lantai berapa?"},
          {jp:"さんがいです。", id:"Di lantai tiga."},
          {jp:"でんきは　ごかいです。", id:"(Toko) elektronik ada di lantai lima."},
          {jp:"ちかいっかいに　スーパーが　あります。", id:"Di basement lantai 1 ada supermarket."}
        ]
      }
    ]
  }
]

}; // end BUNPOU
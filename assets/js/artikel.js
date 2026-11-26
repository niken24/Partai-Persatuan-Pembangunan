
/* =========================================
   PPP — RUANG BERSAMA
   JAVASCRIPT DETAIL ARTIKEL
========================================= */


/* =========================================
   DATA PROGRAM TERKAIT
========================================= */

const relatedPrograms = {

    pendidikan: {

        title: 'Beasiswa Pendidikan Pemuda',

        description:
            'Kenali konsep program yang berfokus pada perluasan kesempatan pendidikan, pengembangan potensi, dan pendampingan generasi muda.',

        link: 'beasiswa.html'

    },

    lingkungan: {

        title: 'PPP Peduli Bumi dan Kemanusiaan',

        description:
            'Kenali konsep program yang mengajak masyarakat berpartisipasi dalam menjaga lingkungan, membangun kepedulian sosial, dan menciptakan perubahan positif melalui aksi bersama.',

        link: 'peduli-bumi.html'

    }

};


/* =========================================
   DATABASE ARTIKEL
========================================= */

const articleData = {


    /* =====================================
       ARTIKEL 1
       RUANG BELAJAR BERSAMA
    ===================================== */

    'ruang-belajar': {

        category: 'Pendidikan',

        title:
            'Ruang Belajar Bersama, Ketika Pengetahuan Tumbuh dari Warga',

        date: '2026-11-06',

        dateLabel: '06 November 2026',

        image:
            'assets/images/artikel-ruang-belajar.jpg',

        alt:
            'Anak-anak mengikuti kegiatan belajar bersama',

        lead:
            'Belajar tidak selalu membutuhkan ruang kelas yang besar. Dari sudut permukiman hingga balai warga, semangat berbagi pengetahuan dapat membuka kesempatan baru bagi masyarakat.',

        related: 'pendidikan',

        intro: [

            'Pendidikan sering kali dikaitkan dengan sekolah, buku pelajaran, dan ruang kelas. Namun, proses belajar sesungguhnya juga dapat berlangsung di tengah kehidupan masyarakat. Sebuah ruang sederhana, beberapa buku, dan kemauan untuk berbagi pengetahuan bisa menjadi awal terciptanya lingkungan belajar yang lebih terbuka.',

            'Gagasan inilah yang mendasari pentingnya ruang belajar berbasis komunitas. Ketika masyarakat terlibat sebagai penggerak, kegiatan belajar tidak lagi terbatas pada hubungan antara guru dan murid, tetapi berkembang menjadi proses saling berbagi pengalaman dan keterampilan.'

        ],

        sections: [

            {

                id: 'belajar-lingkungan-terdekat',

                heading:
                    'Belajar dari Lingkungan Terdekat',

                paragraphs: [

                    'Ruang belajar masyarakat dapat diwujudkan melalui berbagai kegiatan, seperti membaca bersama, pendampingan tugas sekolah, pelatihan literasi digital, hingga diskusi mengenai persoalan sehari-hari.',

                    'Anak-anak dapat memperoleh pendampingan belajar, sementara remaja dan orang dewasa memiliki kesempatan untuk berbagi kemampuan yang mereka miliki. Kegiatan sederhana ini juga dapat memperkuat hubungan antarwarga.',

                    'Namun, membangun ruang belajar tidak cukup hanya dengan menyediakan buku dan tempat berkumpul. Keberlanjutan kegiatan membutuhkan pendamping, bahan pembelajaran yang relevan, dan keterlibatan masyarakat secara konsisten.'

                ]

            },

            {

                id: 'pengetahuan-berkembang',

                heading:
                    'Pengetahuan yang Terus Berkembang',

                paragraphs: [

                    'Ruang belajar komunitas juga dapat menjadi sarana memperluas kesempatan pendidikan bagi masyarakat yang memiliki keterbatasan akses terhadap fasilitas belajar.',

                    'Melalui kolaborasi antara warga, relawan, dan komunitas pendidikan, kegiatan pembelajaran dapat disesuaikan dengan kebutuhan masing-masing lingkungan.',

                    'Pada akhirnya, keberhasilan ruang belajar tidak hanya diukur dari banyaknya buku yang tersedia atau jumlah peserta yang hadir, tetapi juga dari meningkatnya kesempatan masyarakat untuk memperoleh pengetahuan. Sebab, ketika satu orang bersedia berbagi ilmu, kesempatan belajar bagi orang lain ikut terbuka.'

                ]

            }

        ]

    },


    /* =====================================
       ARTIKEL 2
       MERAWAT BUMI
    ===================================== */

    'merawat-bumi': {

        category: 'Lingkungan',

        title:
            'Perubahan Dimulai dari Rumah: Langkah Kecil Merawat Bumi',

        date: '2026-11-04',

        dateLabel: '04 November 2026',

        image:
            'assets/images/artikel-merawat-bumi.jpg',

        alt:
            'Tangan merawat tanaman kecil di atas tanah',

        lead:
            'Menjaga lingkungan tidak harus dimulai dengan gerakan besar. Kebiasaan sederhana di rumah justru dapat menjadi langkah awal membangun kepedulian bersama.',

        related: 'lingkungan',

        intro: [

            'Sampah plastik yang menumpuk, penggunaan barang sekali pakai, dan kurangnya ruang hijau merupakan persoalan lingkungan yang dekat dengan kehidupan sehari-hari. Di tengah berbagai tantangan tersebut, perubahan dapat dimulai melalui kebiasaan kecil yang dilakukan secara konsisten.',

            'Membawa tas belanja sendiri, memilah sampah, mengurangi penggunaan plastik, hingga menanam tanaman di halaman rumah merupakan beberapa langkah yang dapat diterapkan masyarakat.',

            'Meski terlihat sederhana, kebiasaan tersebut menjadi bagian penting dalam membangun pola hidup yang lebih bertanggung jawab terhadap lingkungan.'

        ],

        sections: [

            {

                id: 'kebiasaan-pribadi',

                heading:
                    'Dari Kebiasaan Pribadi Menjadi Gerakan Bersama',

                paragraphs: [

                    'Upaya menjaga lingkungan akan lebih kuat apabila dilakukan secara kolektif. Kegiatan kerja bakti, pengelolaan bank sampah, dan penghijauan lingkungan dapat menjadi ruang partisipasi masyarakat.',

                    'Misalnya, warga dapat menyepakati jadwal kebersihan lingkungan, menyediakan tempat pemilahan sampah, atau memanfaatkan lahan kosong untuk tanaman produktif.',

                    'Langkah-langkah tersebut tidak hanya membantu menjaga kebersihan, tetapi juga mendorong kerja sama dan rasa tanggung jawab terhadap fasilitas bersama.'

                ]

            },

            {

                id: 'kepedulian-berkelanjutan',

                heading:
                    'Kepedulian yang Berkelanjutan',

                paragraphs: [

                    'Tantangan terbesar dalam gerakan lingkungan bukan hanya mengajak masyarakat memulai perubahan, tetapi juga menjaga konsistensinya.',

                    'Edukasi mengenai pengelolaan sampah, pengurangan limbah, dan pemanfaatan ruang hijau perlu dilakukan secara berkelanjutan agar kebiasaan baik dapat menjadi bagian dari kehidupan sehari-hari.',

                    'Dukungan komunitas, sekolah, dan berbagai organisasi masyarakat juga dapat memperluas jangkauan kegiatan tersebut.',

                    'Merawat bumi bukan semata tentang melakukan aksi besar dalam satu hari, melainkan membangun kebiasaan baik yang terus dilakukan. Karena lingkungan yang lebih sehat berawal dari keputusan sederhana yang kita ambil setiap hari.'

                ]

            }

        ]

    },


    /* =====================================
       ARTIKEL 3
       KEPEDULIAN DAN KEMANUSIAAN
    ===================================== */

    'kepedulian': {

        category: 'Sosial dan Kemanusiaan',

        title:
            'Bukan Sekadar Bantuan, Kepedulian yang Menjaga Martabat',

        date: '2026-11-02',

        dateLabel: '02 November 2026',

        image:
            'assets/images/artikel-kepedulian.jpg',

        alt:
            'Ilustrasi pemberian bantuan kepada warga',

        lead:
            'Di balik setiap bantuan, terdapat manusia dengan cerita, kebutuhan, dan harapan yang berbeda. Kepedulian sosial seharusnya tidak hanya berfokus pada apa yang diberikan, tetapi juga bagaimana bantuan disampaikan.',

        related: 'pendidikan',

        intro: [

            'Bantuan sosial kerap digambarkan melalui penyerahan paket kebutuhan pokok, penggalangan donasi, atau kegiatan relawan. Namun, terdapat aspek penting yang tidak boleh diabaikan dalam setiap kegiatan kemanusiaan, yaitu penghormatan terhadap martabat penerima bantuan.',

            'Memberikan bantuan bukan sekadar memenuhi kebutuhan material. Kegiatan sosial juga memerlukan empati, komunikasi yang baik, serta pemahaman terhadap kondisi masyarakat.'

        ],

        sections: [

            {

                id: 'mendengar-sebelum-membantu',

                heading:
                    'Mendengar Sebelum Membantu',

                paragraphs: [

                    'Setiap individu atau keluarga memiliki kebutuhan yang berbeda. Ada yang membutuhkan bahan pangan, perlengkapan pendidikan, layanan kesehatan, atau sekadar akses terhadap informasi yang dapat membantu kehidupan sehari-hari.',

                    'Karena itu, kegiatan kemanusiaan sebaiknya diawali dengan identifikasi kebutuhan agar bantuan yang diberikan benar-benar sesuai dengan kondisi penerima.',

                    'Pendekatan ini juga dapat mengurangi risiko bantuan yang tidak tepat sasaran. Di sisi lain, proses penyaluran perlu menjaga kenyamanan dan privasi masyarakat. Dokumentasi kegiatan, misalnya, seharusnya dilakukan dengan persetujuan pihak yang bersangkutan dan tidak menampilkan penerima bantuan secara merendahkan.'

                ]

            },

            {

                id: 'solidaritas-bermakna',

                heading:
                    'Membangun Solidaritas yang Bermakna',

                paragraphs: [

                    'Kepedulian sosial dapat diwujudkan melalui berbagai bentuk, mulai dari pengumpulan kebutuhan pokok, pendampingan masyarakat, hingga kolaborasi dengan komunitas lokal.',

                    'Keterlibatan warga juga membantu menciptakan hubungan yang lebih setara antara pihak pemberi dan penerima bantuan.',

                    'Bantuan yang baik bukan hanya yang sampai kepada masyarakat, tetapi juga yang diberikan dengan cara menghormati hak, kebutuhan, dan pilihan penerimanya.',

                    'Pada akhirnya, kemanusiaan tidak diukur dari seberapa banyak bantuan yang terlihat, melainkan dari seberapa besar kepedulian mampu menghadirkan manfaat tanpa mengurangi martabat sesama.'

                ]

            }

        ]

    },


    /* =====================================
       ARTIKEL 4
       EKONOMI MASYARAKAT
    ===================================== */

    'usaha-kecil': {

        category: 'Ekonomi Masyarakat',

        title:
            'Dari Usaha Kecil, Tumbuh Peluang Besar bagi Masyarakat',

        date: '2026-10-30',

        dateLabel: '30 Oktober 2026',

        image:
            'assets/images/artikel-usaha-kecil.jpg',

        alt:
            'Pedagang kecil menjajakan produk di pasar',

        lead:
            'Di balik warung sederhana dan usaha rumahan, terdapat kerja keras yang menggerakkan perekonomian masyarakat. Dengan pengetahuan dan dukungan yang tepat, usaha kecil memiliki kesempatan untuk terus berkembang.',

        related: 'pendidikan',

        intro: [

            'Warung makan, usaha kerajinan, pedagang keliling, dan bisnis rumahan merupakan bagian dari kehidupan ekonomi masyarakat Indonesia. Meski beroperasi dalam skala kecil, kegiatan usaha tersebut dapat menjadi sumber penghasilan keluarga sekaligus membuka peluang pekerjaan di lingkungan sekitarnya.',

            'Namun, menjalankan usaha kecil bukanlah perkara mudah. Persaingan pasar, keterbatasan modal, perubahan harga bahan baku, hingga kurangnya pengetahuan pemasaran menjadi tantangan yang kerap dihadapi pelaku usaha.'

        ],

        sections: [

            {

                id: 'pengetahuan-modal-usaha',

                heading:
                    'Pengetahuan sebagai Modal untuk Berkembang',

                paragraphs: [

                    'Selain dukungan finansial, pelaku usaha juga membutuhkan akses terhadap informasi dan keterampilan yang relevan.',

                    'Pelatihan pencatatan keuangan sederhana, pengemasan produk, pemasaran digital, dan pelayanan pelanggan dapat membantu pelaku usaha mengelola bisnis secara lebih terarah.',

                    'Pemanfaatan teknologi digital juga membuka kesempatan untuk memperkenalkan produk kepada pasar yang lebih luas. Melalui media sosial dan platform perdagangan elektronik, pelaku usaha dapat menjangkau konsumen di luar lingkungan tempat tinggalnya.',

                    'Meski demikian, penerapan teknologi perlu disesuaikan dengan kemampuan dan kebutuhan masing-masing pelaku usaha.'

                ]

            },

            {

                id: 'kolaborasi-ekonomi',

                heading:
                    'Kolaborasi Memperkuat Ekonomi Lokal',

                paragraphs: [

                    'Ruang belajar komunitas juga dapat menjadi sarana memperluas kesempatan pendidikan bagi masyarakat yang memiliki keterbatasan akses terhadap fasilitas belajar.',

                    'Penguatan ekonomi masyarakat tidak harus dilakukan secara individual. Kerja sama antarpelaku usaha, komunitas, dan lembaga pendamping dapat membuka kesempatan untuk berbagi pengalaman, memperluas jaringan, serta memasarkan produk bersama.',

                    'Kegiatan seperti bazar komunitas, pelatihan kewirausahaan, dan forum diskusi usaha menjadi contoh ruang kolaborasi yang dapat dikembangkan.',

                    'Ketika pelaku usaha memperoleh akses terhadap pengetahuan dan kesempatan yang lebih luas, manfaatnya berpotensi dirasakan bukan hanya oleh pemilik usaha, tetapi juga masyarakat sekitarnya.',

                    'Sebab, usaha yang kecil dalam ukuran belum tentu kecil dalam kontribusinya bagi kehidupan banyak orang.'

                ]

            }

        ]

    },


    /* =====================================
       ARTIKEL 5
       BELAJAR TANPA BATAS
    ===================================== */

    'belajar-tanpa-batas': {

        category: 'Pendidikan',

        title:
            'Belajar Tanpa Batas: Kesempatan yang Layak untuk Semua',

        date: '2026-10-28',

        dateLabel: '28 Oktober 2026',

        image:
            'assets/images/artikel-belajar-tanpa-batas.jpg',

        alt:
            'Guru mendampingi murid dalam kegiatan belajar',

        lead:
            'Setiap orang berhak memperoleh kesempatan belajar. Namun, perbedaan kondisi ekonomi, fasilitas, dan lingkungan membuat akses pendidikan belum selalu dirasakan secara setara.',

        related: 'lingkungan',

        intro: [

            'Bagi sebagian orang, belajar merupakan kegiatan yang dapat dilakukan dengan mudah melalui sekolah, buku, dan perangkat digital. Namun, bagi sebagian lainnya, keterbatasan biaya, fasilitas, atau pendampingan dapat menjadi hambatan untuk mengembangkan kemampuan.',

            'Kondisi tersebut menunjukkan bahwa pemerataan pendidikan bukan hanya persoalan menyediakan tempat belajar, tetapi juga memastikan setiap individu memiliki kesempatan untuk memanfaatkannya.'

        ],

        sections: [

            {

                id: 'kebutuhan-berbeda',

                heading:
                    'Setiap Anak Memiliki Kebutuhan Berbeda',

                paragraphs: [

                    'Sebagian pelajar membutuhkan akses buku dan perlengkapan sekolah, sementara yang lain memerlukan pendampingan untuk memahami pelajaran atau mengembangkan keterampilan tertentu.',

                    'Karena itu, pendekatan pendidikan sebaiknya mempertimbangkan kebutuhan peserta didik, bukan menerapkan satu bentuk bantuan untuk semua keadaan.',

                    'Kegiatan pendampingan belajar, kelas literasi, pelatihan keterampilan, hingga dukungan pendidikan dapat menjadi alternatif dalam memperluas kesempatan belajar.',

                    'Partisipasi masyarakat juga memiliki peran penting. Komunitas pendidikan, mahasiswa, relawan, dan warga dapat saling berkolaborasi untuk menghadirkan lingkungan belajar yang lebih mendukung.'

                ]

            },

            {

                id: 'belajar-tanpa-batas-ruang',

                heading:
                    'Belajar Tidak Mengenal Batas Ruang',

                paragraphs: [

                    'Perkembangan teknologi memungkinkan masyarakat memperoleh pengetahuan melalui berbagai media. Namun, akses digital juga memerlukan perangkat, koneksi internet, serta kemampuan menggunakan teknologi secara tepat.',

                    'Oleh karena itu, peningkatan literasi digital perlu berjalan beriringan dengan upaya memperluas akses pendidikan.',

                    'Kesempatan belajar yang setara bukan berarti semua orang mendapatkan bantuan yang sama, melainkan memperoleh dukungan sesuai kebutuhan agar mampu berkembang.',

                    'Pendidikan yang inklusif memberi ruang bagi setiap individu untuk belajar tanpa merasa tertinggal.',

                    'Karena masa depan yang lebih baik seharusnya tidak ditentukan oleh seberapa banyak kesempatan yang dimiliki seseorang sejak awal.'

                ]

            }

        ]

    },


    /* =====================================
       ARTIKEL 6
       RUANG HIJAU
    ===================================== */

    'ruang-hijau': {

        category: 'Lingkungan',

        title:
            'Lebih dari Sekadar Taman, Ruang Hijau yang Menyatukan Warga',

        date: '2026-10-26',

        dateLabel: '26 Oktober 2026',

        image:
            'assets/images/artikel-ruang-hijau.jpg',

        alt:
            'Ilustrasi kebun komunitas di lingkungan permukiman',

        lead:
            'Ruang hijau bukan hanya tempat tumbuhnya pepohonan. Di tengah kehidupan masyarakat, taman dan kebun komunitas juga dapat menjadi ruang bertemu, belajar, dan membangun kebersamaan.',

        related: 'pendidikan',

        intro: [

            'Di tengah permukiman yang semakin padat, keberadaan ruang terbuka hijau memiliki arti penting bagi kehidupan masyarakat. Pepohonan, taman lingkungan, dan kebun komunitas tidak hanya memperindah kawasan, tetapi juga menyediakan tempat bagi warga untuk melakukan berbagai aktivitas.',

            'Mulai dari anak-anak yang bermain, warga yang berolahraga, hingga kegiatan berkebun bersama, ruang hijau dapat menghadirkan kesempatan interaksi sosial yang sederhana tetapi bermakna.'

        ],

        sections: [

            {

                id: 'lahan-kosong',

                heading:
                    'Ketika Lahan Kosong Menjadi Ruang Bersama',

                paragraphs: [

                    'Lahan yang sebelumnya tidak dimanfaatkan dapat dikembangkan menjadi kebun komunitas melalui kesepakatan dan kerja sama warga.',

                    'Penanaman tanaman sayur, penyediaan tempat duduk, serta pengaturan jalur berjalan kaki merupakan beberapa bentuk pengembangan yang dapat dipertimbangkan sesuai kondisi lingkungan.',

                    'Kegiatan berkebun juga dapat menjadi sarana pembelajaran. Anak-anak dapat mengenal proses pertumbuhan tanaman, sementara masyarakat memperoleh kesempatan berbagi pengetahuan mengenai perawatan lingkungan.',

                    'Namun, pengembangan ruang hijau tetap membutuhkan perencanaan yang memperhatikan kepemilikan lahan, kebutuhan warga, aksesibilitas, dan keberlanjutan perawatan.'

                ]

            },

            {

                id: 'rasa-memiliki',

                heading:
                    'Menumbuhkan Rasa Memiliki',

                paragraphs: [

                    'Salah satu tantangan ruang publik adalah menjaga fasilitas agar tetap dapat digunakan dalam jangka panjang.',

                    'Keterlibatan masyarakat dalam proses perencanaan dan pemeliharaan dapat membantu menumbuhkan rasa tanggung jawab bersama.',

                    'Melalui jadwal perawatan, kegiatan kebersihan, dan diskusi warga, ruang hijau dapat berkembang menjadi tempat yang bukan hanya nyaman secara fisik, tetapi juga memperkuat hubungan sosial.',

                    'Ruang hijau yang baik bukan semata-mata dinilai dari luas tanah atau banyaknya tanaman. Nilainya juga terlihat dari seberapa besar ruang tersebut mampu memberikan manfaat bagi kehidupan masyarakat.',

                    'Karena terkadang, kebersamaan dapat tumbuh dari tempat yang sesederhana taman kecil di tengah permukiman.'

                ]

            }

        ]

    }

};


/* =========================================
   RENDER ARTICLE
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    const $ = id => document.getElementById(id);


    /* =====================================
       AMBIL PARAMETER ID
    ===================================== */

    const params = new URLSearchParams(
        window.location.search
    );

    const articleId = params.get('id') || 'ruang-belajar';


    /* =====================================
       VALIDASI ARTIKEL
    ===================================== */

    const articleExists =
        Object.prototype.hasOwnProperty.call(
            articleData,
            articleId
        );

    if (!articleExists) {

        $('articlePage').hidden = true;

        $('articleNotFound').hidden = false;

        document.title =
            'Artikel Tidak Ditemukan | PPP — Ruang Bersama';

        return;

    }

    const article = articleData[articleId];


    /* =====================================
       UPDATE TITLE BROWSER
    ===================================== */

    document.title =

        article.title + ' | PPP — Ruang Bersama';


    /* =====================================
       UPDATE ARTICLE HEADER
    ===================================== */

    $('breadcrumbCategory').textContent =
        article.category;

    $('articleCategory').textContent =
        article.category.toUpperCase();

    $('articleTitle').textContent =
        article.title;

    $('articleLead').textContent =
        article.lead;

    $('articleDate').textContent =
        article.dateLabel;

    $('articleDate').dateTime =
        article.date;


    /* =====================================
       UPDATE IMAGE
    ===================================== */

    const articleImage = $('articleImage');

    articleImage.alt = article.alt;

    articleImage.addEventListener('error', () => {

        articleImage.hidden = true;

        const message = document.createElement('p');

        message.className = 'article-image-error';

        message.textContent =
            'Foto ilustrasi belum tersedia.';

        articleImage.parentElement.insertBefore(
            message,
            articleImage.nextSibling
        );

    }, { once: true });

    articleImage.src = article.image;


    /* =====================================
       RENDER CONTENT
    ===================================== */

    const content = $('articleContent');

    const toc = $('articleToc');

    content.replaceChildren();

    toc.replaceChildren();


    /* FUNGSI MEMBUAT PARAGRAF */

    function createParagraph(text) {

        const paragraph =
            document.createElement('p');

        paragraph.textContent = text;

        return paragraph;

    }


    /* PARAGRAF PEMBUKA */

    article.intro.forEach(text => {

        content.appendChild(
            createParagraph(text)
        );

    });


    /* SUBJUDUL DAN ISI ARTIKEL */

    article.sections.forEach(section => {

        // Membuat subjudul.

        const heading =
            document.createElement('h2');

        heading.id = section.id;

        heading.textContent = section.heading;

        content.appendChild(heading);


        // Membuat paragraf artikel.

        section.paragraphs.forEach(text => {

            content.appendChild(
                createParagraph(text)
            );

        });


        // Membuat daftar isi sidebar.

        const listItem =
            document.createElement('li');

        const link =
            document.createElement('a');

        link.href = '#' + section.id;

        link.textContent = section.heading;

        listItem.appendChild(link);

        toc.appendChild(listItem);

    });


    /* =====================================
       RENDER RELATED PROGRAM
    ===================================== */

    const related =
        relatedPrograms[article.related];

    $('relatedTitle').textContent =
        related.title;

    $('relatedDescription').textContent =
        related.description;

    $('relatedLink').href =
        related.link;


    /* =====================================
       TAMPILKAN ARTIKEL
    ===================================== */

    $('articlePage').hidden = false;

    $('articleNotFound').hidden = true;


    /* =====================================
       SCROLL DAFTAR ISI
    ===================================== */

    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    toc.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', event => {

            event.preventDefault();

            const sectionId =
                link.getAttribute('href').slice(1);

            const target =
                document.getElementById(sectionId);

            if (target) {

                target.scrollIntoView({

                    behavior:
                        reducedMotion ? 'auto' : 'smooth',

                    block: 'start'

                });

                history.replaceState(
                    null,
                    '',
                    '#' + sectionId
                );

            }

        });

    });


    /* SCROLL JIKA URL MEMILIKI ANCHOR */

    if (window.location.hash) {

        const target = document.getElementById(
            window.location.hash.slice(1)
        );

        if (target) {

            target.scrollIntoView({
                behavior: 'auto',
                block: 'start'
            });

        }

    }


    /* =====================================
       SALIN TAUTAN ARTIKEL
    ===================================== */

    const copyButton = $('copyArticleLink');

    const copyStatus = $('copyStatus');

    copyButton.addEventListener('click', async () => {

        const url = new URL(window.location.href);

        url.searchParams.set('id', articleId);

        url.hash = '';

        try {

            if (!navigator.clipboard) {

                throw new Error(
                    'Clipboard tidak tersedia'
                );

            }

            await navigator.clipboard.writeText(
                url.href
            );

            copyStatus.textContent =
                'Tautan artikel berhasil disalin.';

        } catch (error) {

            window.prompt(
                'Salin tautan artikel berikut:',
                url.href
            );

            copyStatus.textContent =
                'Silakan salin tautan secara manual.';

        }

    });

});

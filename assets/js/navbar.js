
document.addEventListener('DOMContentLoaded', () => {

    /* ========================================
       HALAMAN YANG SEDANG DIBUKA
    ========================================= */

    const currentPage =
        window.location.pathname.split('/').pop()
        || 'index.html';


    /* ========================================
       KELOMPOK HALAMAN NAVBAR
    ========================================= */

    const pageGroups = {

        'BERANDA': [

            'index.html'

        ],

        'TENTANG PPP': [

            'tentang.html',
            'struktur.html',
            'kaba.html'

        ],

        'PROGRAM & AKSI': [

            'program.html',
            'peduli-bumi.html',
            'beasiswa.html',
            'pendaftaran-beasiswa.html',
            'talkshow.html'

        ],

        'INFORMASI': [

            'kabar.html',
            'artikel.html',
            'pernyataan.html',
            'opini.html',
            'transparansi.html'

        ],

        'PARTISIPASI': [

            'aspirasi.html',
            'bergabung.html',
            'faq.html'

        ]

    };


    /* ========================================
       ACTIVE NAVBAR OTOMATIS
    ========================================= */

    const navLinks = document.querySelectorAll(

        '.site-nav .nav-list > .nav-item > .nav-link'

    );


    navLinks.forEach(link => {

        const menuName = link.textContent

            .trim()
            .replace(/\s+/g, ' ')
            .toUpperCase();


        const pages = pageGroups[menuName] || [];


        link.classList.toggle(

            'active',

            pages.includes(currentPage)

        );

    });


    /* ========================================
       ACTIVE DROPDOWN OTOMATIS
    ========================================= */

    function updateDropdownActive() {

        const currentHash = window.location.hash;

        const parentPages = {

            'artikel.html': 'kabar.html',

            'pendaftaran-beasiswa.html': 'beasiswa.html'

        };

        const effectivePage =
            parentPages[currentPage] || currentPage;


        document.querySelectorAll(

            '.site-nav .dropdown-item[href]'

        ).forEach(link => {

            const href = link.getAttribute('href');

            const [page, anchor] = href.split('#');

            let active = false;


            if (page === effectivePage) {

                if (page === 'tentang.html') {

                    if (
                        currentHash === '#stakeholder' ||
                        currentHash === '#ekosistem-stakeholder' ||
                        currentHash === '#stakeholder-internal' ||
                        currentHash === '#organisasi-sayap' ||
                        currentHash === '#stakeholder-eksternal' ||
                        currentHash === '#akar-historis'
                    ) {

                        active = anchor === 'stakeholder';

                    } else if (
                        currentHash === '#visi-misi' ||
                        currentHash === '#lima-khidmat'
                    ) {

                        active = anchor === 'visi-misi';

                    } else {

                        active = anchor === 'profil-sejarah';

                    }

                } else {

                    active = true;

                }

            }


            link.classList.toggle('active', active);


            if (active) {

                link.setAttribute('aria-current', 'page');

            } else {

                link.removeAttribute('aria-current');

            }

        });

    }


    updateDropdownActive();


    window.addEventListener(

        'hashchange',

        updateDropdownActive

    );


    document.querySelectorAll(

        '.site-nav .dropdown-item[href]'

    ).forEach(link => {

        link.addEventListener('click', () => {

            setTimeout(updateDropdownActive, 0);

        });

    });


    /* ========================================
       DATA PENCARIAN GLOBAL
    ========================================= */

    const searchData = [

        {
            keywords: [
                'beranda',
                'home'
            ],

            url: 'index.html'
        },

        {
            keywords: [
                'profil',
                'sejarah',
                'identitas',
                'tentang ppp'
            ],

            url: 'tentang.html#profil-sejarah'
        },

        {
            keywords: [
                'visi',
                'misi',
                'khidmat',
                'lima khidmat'
            ],

            url: 'tentang.html#visi-misi'
        },

        {
            keywords: [
                'struktur',
                'organisasi',
                'pengurus',
                'ketua umum',
                'mardiono'
            ],

            url: 'struktur.html'
        },

        {
            keywords: [
                'stakeholder',
                'ekosistem',
                'pemangku kepentingan'
            ],

            url: 'tentang.html#stakeholder'
        },

        {
            keywords: [
                'organisasi sayap',
                'wpp',
                'gpk',
                'gmpi',
                'amk'
            ],

            url: 'tentang.html#organisasi-sayap'
        },

        {
            keywords: [
                'stakeholder internal',
                'majelis',
                'mahkamah partai'
            ],

            url: 'tentang.html#stakeholder-internal'
        },

        {
            keywords: [
                'stakeholder eksternal'
            ],

            url: 'tentang.html#stakeholder-eksternal'
        },

        {
            keywords: [
                'kaba',
                'maskot',
                'kenalan dengan kaba'
            ],

            url: 'kaba.html'
        },

        {
            keywords: [
                'program',
                'program dan aksi'
            ],

            url: 'program.html'
        },

        {
            keywords: [
                'peduli bumi',
                'kemanusiaan',
                'lingkungan',
                'penghijauan',
                'penanaman pohon',
                'bantuan sosial'
            ],

            url: 'peduli-bumi.html'
        },

        {
            keywords: [
                'beasiswa',
                'pendidikan',
                'beasiswa pendidikan pemuda'
            ],

            url: 'beasiswa.html'
        },

        {
            keywords: [
                'pendaftaran beasiswa',
                'persyaratan beasiswa',
                'persyaratan',
                'dokumen beasiswa'
            ],

            url: 'pendaftaran-beasiswa.html'
        },

        {
            keywords: [
                'talkshow',
                'talk show',
                'seminar',
                'kolaborasi',
                'habib jafar',
                "habib ja'far",
                'after report',
                'finding god',
                'finding yourself',
                'lost in your 20'
            ],

            url: 'talkshow.html'
        },

        {
            keywords: [
                'kabar',
                'berita',
                'artikel',
                'kabar ppp'
            ],

            url: 'kabar.html'
        },

        {
            keywords: [
                'pernyataan',
                'pernyataan resmi'
            ],

            url: 'pernyataan.html'
        },

        {
            keywords: [
                'opini',
                'forum opini',
                'ruang perspektif',
                'opini masyarakat'
            ],

            url: 'opini.html'
        },

        {
            keywords: [
                'karhutla',
                'kebakaran hutan'
            ],

            url: 'opini.html#opini-karhutla'
        },

        {
            keywords: [
                'informasi publik',
                'keterbukaan informasi'
            ],

            url: 'opini.html#opini-informasi'
        },

        {
            keywords: [
                'media sosial',
                'dialog publik'
            ],

            url: 'opini.html#opini-media-digital'
        },

        {
            keywords: [
                'transparansi',
                'transparansi data',
                'transparansi dan data',
                'statistik',
                'ppp dalam angka',
                'data ppp'
            ],

            url: 'transparansi.html'
        },

        {
            keywords: [
                'pemilu',
                'suara pemilu',
                'riwayat pemilu'
            ],

            url: 'transparansi.html#riwayat-pemilu'
        },

        {
            keywords: [
                'dpr',
                'dprd',
                'kursi',
                'representasi legislatif'
            ],

            url: 'transparansi.html#representasi'
        },

        {
            keywords: [
                'jumlah anggota',
                'jumlah kader',
                'data anggota',
                'statistik anggota'
            ],

            url: 'transparansi.html#keanggotaan'
        },

        {
            keywords: [
                'aspirasi',
                'kritik',
                'saran',
                'jaring aspirasi rakyat'
            ],

            url: 'aspirasi.html'
        },

        {
            keywords: [
                'bergabung',
                'daftar anggota',
                'menjadi anggota',
                'menjadi kader',
                'keanggotaan'
            ],

            url: 'bergabung.html'
        },

        {
            keywords: [
                'faq',
                'bank data faq',
                'bank data',
                'pertanyaan'
            ],

            url: 'faq.html#bank-data-faq'
        },

        {
            keywords: [
                'kontak',
                'email',
                'whatsapp',
                'telepon'
            ],

            url: 'faq.html#kanal-informasi'
        },

        {
            keywords: [
                'lokasi',
                'alamat',
                'kantor',
                'kantor ppp',
                'kantor pusat'
            ],

            url: 'faq.html#lokasi-kantor'
        },

        {
            keywords: [
                'formulir kontak',
                'kirim pesan'
            ],

            url: 'faq.html#formulir-kontak'
        }

    ];


    /* ========================================
       SEARCH FORM GLOBAL
    ========================================= */

    const searchForm = document.querySelector(

        '.site-nav .site-search'

    );

    if (!searchForm) return;


    const searchInput = searchForm.querySelector(

        'input[type="search"]'

    );

    if (!searchInput) return;


    /* ========================================
       NORMALISASI TEKS
    ========================================= */

    function normalizeText(text) {

        return String(text)

            .toLocaleLowerCase('id')

            .replace(/&/g, ' dan ')

            .replace(/['’]/g, '')

            .replace(/[^\p{L}\p{N}\s]/gu, ' ')

            .replace(/\s+/g, ' ')

            .trim();

    }


    /* ========================================
       FUNGSI PENCARIAN
    ========================================= */

    searchForm.addEventListener('submit', event => {

        const keyword = normalizeText(

            searchInput.value

        );


        if (!keyword) {

            event.preventDefault();

            return;

        }


        const matches = searchData.flatMap(item =>

            item.keywords

                .filter(word => {

                    const normalized = normalizeText(word);

                    return (' ' + keyword + ' ').includes(

                        ' ' + normalized + ' '

                    );

                })

                .map(word => ({

                    url: item.url,

                    score: normalizeText(word).length

                }))

        );


        matches.sort((a, b) => b.score - a.score);


        if (matches.length > 0) {

            const result = matches[0];

            const destinationPage = result.url.split('#')[0];


            /*
                Pada halaman FAQ, Opini, dan Transparansi,
                pertahankan pencarian lokal jika hasil
                mengarah ke halaman yang sama dan form lama
                masih digunakan.
            */

            const hasLocalSearch =

                searchForm.id !== 'globalSearchForm' &&

                [
                    'faq.html',
                    'opini.html',
                    'transparansi.html'
                ].includes(currentPage);


            if (
                hasLocalSearch &&
                destinationPage === currentPage
            ) {

                return;

            }


            event.preventDefault();

            event.stopImmediatePropagation();

            window.location.href = result.url;

        } else if (

            searchForm.id === 'globalSearchForm'

        ) {

            event.preventDefault();

            event.stopImmediatePropagation();

            alert(

                'Informasi tidak ditemukan. ' +

                'Coba kata kunci profil, program, ' +

                'beasiswa, opini, transparansi, atau FAQ.'

            );

        }

        /*
            Jika memakai form lama dan kata kunci tidak
            ditemukan secara global, JavaScript pencarian
            lokal tetap dapat memprosesnya.
        */

    }, true);

});

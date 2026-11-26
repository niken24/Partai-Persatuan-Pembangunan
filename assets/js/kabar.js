
/* =========================================
   PPP — RUANG BERSAMA
   JAVASCRIPT KABAR PPP
========================================= */

document.addEventListener('DOMContentLoaded', () => {


    /* =====================================
       DOM ELEMENT
    ===================================== */

    const searchForm =
        document.getElementById('kabarSearchForm');

    const searchInput =
        document.getElementById('kabarSearchInput');

    const categoryButtons =
        document.querySelectorAll('.kabar-category');

    const articleGrid =
        document.getElementById('articleGrid');

    const articleCount =
        document.getElementById('articleCount');

    const articleSort =
        document.getElementById('articleSort');

    const emptyArticles =
        document.getElementById('emptyArticles');

    const resetArticles =
        document.getElementById('resetArticles');

    const pageInformation =
        document.getElementById('pageInformation');

    const displayInformation =
        document.getElementById('displayInformation');


    // Mencegah error apabila script dipanggil
    // pada halaman selain Kabar PPP.

    if (
        !articleGrid ||
        !searchForm ||
        !searchInput ||
        !articleCount ||
        !articleSort ||
        !emptyArticles ||
        !resetArticles ||
        !pageInformation ||
        !displayInformation
    ) {
        return;
    }


    /* =====================================
       DATA ARTIKEL
    ===================================== */

    const articles = Array.from(
        articleGrid.querySelectorAll('.kabar-card')
    );


    /* =====================================
       NAMA KATEGORI
    ===================================== */

    const categoryNames = {

        semua: 'Semua kategori',

        pendidikan: 'Pendidikan',

        lingkungan: 'Lingkungan',

        sosial: 'Sosial dan Kemanusiaan',

        ekonomi: 'Ekonomi Masyarakat'

    };


    /* =====================================
       FILTER STATE
    ===================================== */

    let currentCategory = 'semua';

    let currentSearch = '';

    let currentSort = 'newest';


    /* =====================================
       NORMALISASI TEKS
    ===================================== */

    function normalizeText(text) {

        return text

            .toLocaleLowerCase('id')

            .replace(/\s+/g, ' ')

            .trim();

    }


    /* =====================================
       FILTER DAN SORTING ARTIKEL
    ===================================== */

    function updateArticles() {

        const keyword = normalizeText(currentSearch);


        /* FILTER ARTIKEL */

        const filteredArticles = articles.filter(article => {

            const articleCategory =
                article.dataset.category;

            const articleText =
                normalizeText(article.textContent);


            // Filter berdasarkan kategori

            const matchesCategory =

                currentCategory === 'semua' ||

                articleCategory === currentCategory;


            // Filter berdasarkan kata kunci

            const matchesSearch =

                keyword === '' ||

                keyword.split(' ').every(word =>
                    articleText.includes(word)
                );


            return matchesCategory && matchesSearch;

        });


        /* SORTING ARTIKEL */

        filteredArticles.sort((a, b) => {

            const dateA = new Date(a.dataset.date);

            const dateB = new Date(b.dataset.date);


            if (currentSort === 'oldest') {

                return dateA - dateB;

            }

            return dateB - dateA;

        });


        /* SEMBUNYIKAN SEMUA ARTIKEL */

        articles.forEach(article => {

            article.hidden = true;

        });


        /* TAMPILKAN ARTIKEL SESUAI HASIL FILTER */

        filteredArticles.forEach(article => {

            article.hidden = false;

            articleGrid.appendChild(article);

        });


        /* UPDATE JUMLAH ARTIKEL */

        const total = filteredArticles.length;

        const categoryLabel =
            categoryNames[currentCategory];

        articleCount.textContent =

            `${total} artikel contoh · ${categoryLabel}`;


        /* UPDATE INFORMASI PENCARIAN */

        if (keyword !== '') {

            articleCount.textContent +=

                ` · Pencarian "${currentSearch}"`;

        }


        /* EMPTY STATE */

        if (total === 0) {

            articleGrid.hidden = true;

            emptyArticles.hidden = false;

            pageInformation.textContent =

                'Tidak ada halaman';

            displayInformation.textContent =

                'Tidak ada artikel ditampilkan';

        } else {

            articleGrid.hidden = false;

            emptyArticles.hidden = true;

            pageInformation.textContent =

                'Halaman 1 dari 1';


            if (total === articles.length) {

                displayInformation.textContent =

                    'Seluruh contoh ditampilkan';

            } else {

                displayInformation.textContent =

                    `${total} dari ${articles.length} artikel ditampilkan`;

            }

        }

    }


    /* =====================================
       SEARCH ARTIKEL
    ===================================== */

    searchForm.addEventListener('submit', event => {

        event.preventDefault();

        currentSearch = searchInput.value.trim();

        updateArticles();

    });


    /* =====================================
       LIVE SEARCH
    ===================================== */

    searchInput.addEventListener('input', () => {

        currentSearch = searchInput.value.trim();

        updateArticles();

    });


    /* =====================================
       FILTER KATEGORI
    ===================================== */

    categoryButtons.forEach(button => {

        button.addEventListener('click', () => {

            currentCategory =
                button.dataset.category;


            // Hapus class active dari semua tombol

            categoryButtons.forEach(item => {

                item.classList.remove('active');

                item.setAttribute(
                    'aria-pressed',
                    'false'
                );

            });


            // Aktifkan kategori yang dipilih

            button.classList.add('active');

            button.setAttribute(
                'aria-pressed',
                'true'
            );


            // Update daftar artikel

            updateArticles();

        });

    });


    /* =====================================
       SORTING ARTIKEL
    ===================================== */

    articleSort.addEventListener('change', () => {

        currentSort = articleSort.value;

        updateArticles();

    });


    /* =====================================
       RESET FILTER
    ===================================== */

    resetArticles.addEventListener('click', () => {

        currentCategory = 'semua';

        currentSearch = '';

        currentSort = 'newest';


        // Reset search input

        searchInput.value = '';


        // Reset dropdown sorting

        articleSort.value = 'newest';


        // Reset kategori

        categoryButtons.forEach(button => {

            const isAll =
                button.dataset.category === 'semua';

            button.classList.toggle(
                'active',
                isAll
            );

            button.setAttribute(
                'aria-pressed',
                String(isAll)
            );

        });


        // Tampilkan seluruh artikel

        updateArticles();

        searchInput.focus();

    });


    /* =====================================
       INITIAL RENDER
    ===================================== */

    updateArticles();

});

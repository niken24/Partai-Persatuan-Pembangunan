
(() => {

    // ================= DATA CAROUSEL =================

    const slides = [
        {
            eyebrow: 'IDENTITAS TETAP, NARASI DIPERLUAS',
            title: 'PARTAI PERSATUAN',
            accent: 'PEMBANGUNAN',
            lead: 'Berakar pada Nilai, Bergerak untuk Rakyat.',
            description: 'Ruang informasi dan dialog publik yang menghadirkan gagasan, aspirasi masyarakat, serta berbagai inisiatif untuk masa depan bersama.',
            image: 'hero-ppp.jpg',
            credit: 'Arwani Thomafi · Arsip ppp.or.id · 7 Mei 2025'
        },

        {
            eyebrow: 'ASPIRASI RAKYAT',
            title: 'SUARA ANDA LAYAK',
            accent: 'MENDAPAT RUANG',
            lead: 'Jaring Aspirasi Rakyat — prototipe akademik.',
            description: 'Setiap aspirasi menjadi bagian penting dalam membangun komunikasi yang terbuka.',
            image: 'kabar-dpp.jpg',
            credit: 'Kantor DPP PPP, Jakarta · Foto: SINDOnews (sesuai desain)'
        },

        {
            eyebrow: 'PROGRAM & AKSI',
            title: 'DARI KEPEDULIAN,',
            accent: 'MENJADI GAGASAN',
            lead: 'PPP — Ruang Bersama.',
            description: 'Temukan rancangan program lingkungan, kemanusiaan, dan pendidikan dalam prototipe akademik ini.',
            image: 'program-bumi.jpg',
            credit: 'Foto ilustrasi dari desain prototipe akademik'
        }
    ];

    // ================= ELEMENT =================

    const $ = id => document.getElementById(id);

    const tabs = [
        ...document.querySelectorAll('[data-slide]')
    ];

    const hero = document.querySelector('.hero');

    const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    let current = 0;
    let timer = null;
    let paused = reduced;
    let hover = false;
    let focus = false;

    // ================= TAMPILKAN SLIDE =================

    function show(index) {

        current = (index + slides.length) % slides.length;

        const s = slides[current];

        $('heroEyebrow').textContent = s.eyebrow;
        $('heroTitle').textContent = s.title;
        $('heroAccent').textContent = s.accent;
        $('heroLead').textContent = s.lead;
        $('heroDescription').textContent = s.description;
        $('heroCredit').textContent = s.credit;

        $('heroPhoto').style.backgroundImage =
            `url("assets/beranda/${s.image}")`;

        $('heroPhoto').style.backgroundSize =
            current === 0 ? 'auto 100%' : 'cover';

        tabs.forEach((tab, i) => {

            tab.classList.toggle(
                'selected',
                i === current
            );

            tab.setAttribute(
                'aria-pressed',
                String(i === current)
            );

        });
    }

    // ================= AUTO SLIDE =================

    function restart() {

        clearInterval(timer);
        timer = null;

        if (
            !paused &&
            !hover &&
            !focus &&
            !document.hidden
        ) {

            timer = setInterval(() => {
                show(current + 1);
            }, 5000);

        }
    }

    // ================= PAUSE DAN PLAY =================

    function updatePause() {

        $('pauseSlide').setAttribute(
            'aria-label',
            paused ? 'Putar carousel' : 'Jeda carousel'
        );

        $('pauseSlide').innerHTML =
            `<i class="bi bi-${paused ? 'play-fill' : 'pause-fill'}"></i>`;
    }

    function go(i) {
        show(i);
        restart();
    }

    // ================= PILIH SLIDE =================

    tabs.forEach(tab => {

        tab.addEventListener('click', () => {
            go(Number(tab.dataset.slide));
        });

    });

    // ================= PREVIOUS =================

    $('prevSlide').addEventListener('click', () => {
        go(current - 1);
    });

    // ================= NEXT =================

    $('nextSlide').addEventListener('click', () => {
        go(current + 1);
    });

    // ================= PAUSE BUTTON =================

    $('pauseSlide').addEventListener('click', () => {

        paused = !paused;

        updatePause();
        restart();

    });

    // ================= PAUSE ON HOVER =================

    hero.addEventListener('mouseenter', () => {

        hover = true;
        restart();

    });

    hero.addEventListener('mouseleave', () => {

        hover = false;
        restart();

    });

    hero.addEventListener('focusin', () => {

        focus = true;
        restart();

    });

    hero.addEventListener('focusout', e => {

        if (!hero.contains(e.relatedTarget)) {

            focus = false;
            restart();

        }

    });

    document.addEventListener(
        'visibilitychange',
        restart
    );

    updatePause();
    restart();

    // ================= SEARCH BERANDA =================

    $('siteSearch').addEventListener('submit', e => {

        e.preventDefault();

        const q = $('searchInput')
            .value
            .trim()
            .toLocaleLowerCase('id');

        if (!q) return;

        const sections = [
            ...document.querySelectorAll('main section')
        ];

        const match = sections.find(section =>

            section.textContent
                .toLocaleLowerCase('id')
                .includes(q)

        );

        if (match) {

            match.scrollIntoView({
                behavior: reduced ? 'auto' : 'smooth',
                block: 'start'
            });

        } else {

            alert(
                'Tidak ditemukan di Beranda. ' +
                'Coba kata kunci seperti pendidikan, aspirasi, atau kabar.'
            );

        }
    });

})();

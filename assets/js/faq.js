
/* =========================================
   PPP — RUANG BERSAMA
   JAVASCRIPT FAQ & KONTAK
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* =====================================
       FAQ SEARCH ELEMENT
    ===================================== */

    const faqSearch =
        document.getElementById('faqSearch');

    const faqItems =
        document.querySelectorAll('.faq-item');

    const faqCount =
        document.getElementById('faqCount');

    const faqEmpty =
        document.getElementById('faqEmpty');

    const resetFaq =
        document.getElementById('resetFaq');


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
       FILTER FAQ
    ===================================== */

    function filterFaq() {

        const keyword =
            normalizeText(faqSearch.value);

        const words = keyword
            .split(' ')
            .filter(Boolean);

        let visibleCount = 0;

        faqItems.forEach(item => {

            const itemText =
                normalizeText(item.textContent);

            const matches = words.every(word =>
                itemText.includes(word)
            );

            item.hidden = !matches;

            if (matches) {

                visibleCount++;

            } else {

                item.open = false;

            }

        });


        // UPDATE JUMLAH FAQ

        faqCount.textContent =

            `${visibleCount} pertanyaan tersedia`;


        // EMPTY STATE

        faqEmpty.hidden = visibleCount !== 0;

    }


    /* =====================================
       LIVE SEARCH
    ===================================== */

    if (faqSearch && faqCount && faqEmpty) {

        faqSearch.addEventListener(
            'input',
            filterFaq
        );

        filterFaq();

    }


    /* =====================================
       RESET SEARCH
    ===================================== */

    if (resetFaq && faqSearch && faqCount && faqEmpty) {

        resetFaq.addEventListener('click', () => {

            faqSearch.value = '';

            filterFaq();

            faqSearch.focus();

        });

    }


    /* =====================================
       ACCORDION FAQ
       Hanya satu pertanyaan terbuka.
    ===================================== */

    faqItems.forEach(item => {

        item.addEventListener('toggle', () => {

            if (!item.open) return;

            faqItems.forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.open = false;

                }

            });

        });

    });


    /* =====================================
       CONTACT FORM ELEMENT
    ===================================== */

    const contactForm =
        document.getElementById('contactForm');

    const contactSubject =
        document.getElementById('contactSubject');

    const contactMessage =
        document.getElementById('contactMessage');

    const messageCount =
        document.getElementById('messageCount');

    const contactSubmit =
        document.getElementById('contactSubmit');

    const formFeedback =
        document.getElementById('formFeedback');


    /* =====================================
       VALIDASI ELEMENT
    ===================================== */

    if (
        !contactForm ||
        !contactSubject ||
        !contactMessage ||
        !messageCount ||
        !contactSubmit ||
        !formFeedback
    ) {

        return;

    }


    /* =====================================
       CHARACTER COUNTER
    ===================================== */

    function updateCharacterCount() {

        messageCount.textContent =
            contactMessage.value.length;

    }

    contactMessage.addEventListener(
        'input',
        updateCharacterCount
    );

    updateCharacterCount();


    /* =====================================
       FEEDBACK FUNCTION
    ===================================== */

    function showFeedback(message, isError = false) {

        formFeedback.hidden = false;

        formFeedback.textContent = message;

        formFeedback.classList.toggle(
            'is-error',
            isError
        );

    }


    /* =====================================
       SUBMIT FORM
       Simulasi tanpa backend.
    ===================================== */

    contactForm.addEventListener('submit', event => {

        // Mencegah pengiriman ke server.

        event.preventDefault();


        // AMBIL SUBJEK DAN PESAN

        const subject =
            contactSubject.value.trim();

        const message =
            contactMessage.value.trim();


        // VALIDASI SUBJEK

        if (!subject) {

            showFeedback(
                'Silakan masukkan subjek pesan.',
                true
            );

            contactSubject.focus();

            return;

        }


        // VALIDASI PESAN

        if (!message) {

            showFeedback(
                'Silakan masukkan pesan atau pertanyaan.',
                true
            );

            contactMessage.focus();

            return;

        }


        // VALIDASI EMAIL DAN INPUT HTML

        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();

            return;

        }


        /* =================================
           SIMULASI BERHASIL

           Tidak menyimpan data.
           Tidak mengirim email.
           Tidak menghubungi server.
        ================================== */

        showFeedback(

            'Simulasi berhasil! Formulir telah diisi dengan benar. ' +
            'Pesan ini tidak dikirim atau disimpan karena website ' +
            'merupakan prototipe akademik.'

        );


        // RESET FORM

        contactForm.reset();

        updateCharacterCount();

    });


    /* =====================================
       SEMBUNYIKAN FEEDBACK SAAT EDIT
    ===================================== */

    contactForm.addEventListener('input', () => {

        formFeedback.hidden = true;

    });


    /* =====================================
       AKTIFKAN SUBMIT SETELAH JS SIAP
    ===================================== */

    contactSubmit.disabled = false;

});

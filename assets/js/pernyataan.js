
/* =========================================
   PPP — RUANG BERSAMA
   JAVASCRIPT PERNYATAAN RESMI
========================================= */

(() => {

    /* =====================================
       DATA PROGRAM TERKAIT
    ===================================== */

    const relatedPrograms = {

        bumi: {

            title:
                'PPP Peduli Bumi dan Kemanusiaan',

            description:
                'Kenali konsep program yang mengajak masyarakat berpartisipasi dalam menjaga lingkungan, membangun kepedulian sosial, dan menciptakan perubahan positif melalui aksi bersama.',

            link:
                'peduli-bumi.html'

        },

        pendidikan: {

            title:
                'Beasiswa Pendidikan Pemuda',

            description:
                'Kenali konsep program yang berfokus pada perluasan kesempatan pendidikan, pengembangan potensi, dan pendampingan generasi muda.',

            link:
                'beasiswa.html'

        }

    };


    /* =====================================
       DATABASE PERNYATAAN
       Sumber: mockup akademik Figma.
    ===================================== */

    const statements = [


        /* =================================
           PERNYATAAN 1
           SERUAN PERSATUAN
        ================================== */

        {

            id: 'senior',

            filter: 'organisasi',

            category: 'Seruan Persatuan',

            date: '2026-11-09',

            dateLabel: '09 November 2026',

            title:
                'Senior PPP Serukan Persatuan dan Penyelesaian Konflik Internal',

            image:
                'assets/images/pernyataan-senior.jpg',

            alt:
                'Foto ilustrasi seseorang menyampaikan keterangan dalam rapat',

            lead:
                'Sejumlah tokoh senior PPP yang tergabung dalam Kesatuan Aksi Menyelamatkan PPP (KAM PPP) mengimbau seluruh pihak agar menahan diri dan menjaga keutuhan partai. Mereka mendorong penyelesaian konflik internal demi keberlangsungan organisasi serta kesiapan PPP menghadapi Pemilu 2029.',

            related: 'bumi',

            intro: [

                'Upaya menjaga persatuan dan soliditas organisasi menjadi perhatian dalam dinamika internal Partai Persatuan Pembangunan (PPP).'

            ],

            sections: [

                {

                    id: 'persatuan-organisasi',

                    heading:
                        'Pentingnya Persatuan Organisasi',

                    paragraphs: [

                        'Sejumlah tokoh senior PPP yang tergabung dalam Kesatuan Aksi Menyelamatkan PPP (KAM PPP), sebagaimana disebutkan dalam materi pemberitaan, menyerukan pentingnya penyelesaian perbedaan pandangan melalui komunikasi, musyawarah, dan pendekatan yang mengutamakan kepentingan bersama.'

                    ]

                },

                {

                    id: 'dialog-musyawarah',

                    heading:
                        'Dialog dan Musyawarah',

                    paragraphs: [

                        'Perbedaan pandangan dalam organisasi politik merupakan bagian dari dinamika demokrasi. Namun, proses penyelesaiannya perlu diarahkan pada penguatan kelembagaan agar tidak menghambat pelaksanaan agenda organisasi.'

                    ]

                },

                {

                    id: 'solidaritas-kader',

                    heading:
                        'Penguatan Solidaritas Kader',

                    paragraphs: [

                        'Semangat persatuan diharapkan menjadi dasar dalam membangun kembali kepercayaan, memperkuat hubungan antarkader, serta menjaga kesinambungan perjuangan politik PPP.',

                        'Melalui dialog yang terbuka dan konstruktif, berbagai pihak diharapkan dapat menemukan titik temu demi kepentingan organisasi dan masyarakat luas.'

                    ]

                }

            ]

        },


        /* =================================
           PERNYATAAN 2
           KLARIFIKASI KEPENGURUSAN
        ================================== */

        {

            id: 'mardiono',

            filter: 'klarifikasi',

            category: 'Klarifikasi Kepengurusan',

            date: '2026-11-02',

            dateLabel: '02 November 2026',

            title:
                'Mardiono Tegaskan Penataan Kepengurusan PPP sebagai Langkah Restrukturisasi',

            image:
                'assets/images/pernyataan-mardiono.jpg',

            alt:
                'Foto ilustrasi kegiatan kepengurusan PPP',

            lead:
                'Ketua Umum PPP Muhamad Mardiono menjelaskan bahwa perubahan sejumlah posisi kepengurusan merupakan bagian dari restrukturisasi organisasi untuk meningkatkan efektivitas kerja partai. Mardiono menegaskan bahwa langkah tersebut merupakan proses politik internal, bukan pencabutan keanggotaan partai.',

            related: 'bumi',

            intro: [

                'Partai Persatuan Pembangunan (PPP) menempatkan penataan kepengurusan sebagai bagian penting dalam upaya memperkuat struktur organisasi dan meningkatkan efektivitas kerja partai.'

            ],

            sections: [

                {

                    id: 'penataan-organisasi',

                    heading:
                        'Penataan Struktur Organisasi',

                    paragraphs: [

                        'Dalam penjelasan yang menjadi dasar pemberitaan mengenai restrukturisasi, Ketua Umum PPP Muhamad Mardiono menekankan bahwa perubahan sejumlah posisi kepengurusan perlu dipahami sebagai langkah penyesuaian organisasi untuk menghadapi dinamika politik dan kebutuhan internal partai.'

                    ]

                },

                {

                    id: 'koordinasi-internal',

                    heading:
                        'Penguatan Koordinasi Internal',

                    paragraphs: [

                        'Penataan tersebut diarahkan untuk memperjelas pembagian tugas, memperkuat koordinasi antarpengurus, serta mendorong kesinambungan pelaksanaan program organisasi.'

                    ]

                },

                {

                    id: 'konsolidasi-kepengurusan',

                    heading:
                        'Konsolidasi Kepengurusan',

                    paragraphs: [

                        'Melalui proses restrukturisasi, PPP diharapkan mampu memperkuat konsolidasi internal sekaligus meningkatkan perannya dalam memperjuangkan aspirasi masyarakat.',

                        'Penataan kepengurusan menjadi momentum bagi organisasi untuk terus melakukan evaluasi, menjaga soliditas, dan membangun tata kelola kelembagaan yang lebih efektif.'

                    ]

                }

            ]

        },


        /* =================================
           PERNYATAAN 3
           EKONOMI DAN KESEJAHTERAAN
        ================================== */

        {

            id: 'ekonomi',

            filter: 'organisasi',

            category: 'Pernyataan Organisasi',

            date: '2026-10-28',

            dateLabel: '28 Oktober 2026',

            title:
                'PPP Tegaskan Dukungan terhadap Penguatan Ekonomi dan Kesejahteraan Rakyat',

            image:
                'assets/images/pernyataan-ekonomi.jpg',

            alt:
                'Foto ilustrasi kegiatan masyarakat dan bantuan sosial',

            lead:
                'Melalui Rakornas III, PPP menyatakan dukungan terhadap pelaksanaan Pasal 33 dan 34 UUD 1945. Dukungan tersebut menekankan pentingnya kedaulatan ekonomi, pengelolaan sumber daya alam untuk kepentingan nasional, serta peningkatan kesejahteraan rakyat.',

            related: 'pendidikan',

            intro: [

                'Partai Persatuan Pembangunan (PPP) menempatkan penguatan ekonomi dan peningkatan kesejahteraan masyarakat sebagai salah satu isu penting dalam pembangunan nasional.'

            ],

            sections: [

                {

                    id: 'penguatan-ekonomi',

                    heading:
                        'Penguatan Ekonomi Rakyat',

                    paragraphs: [

                        'Sebagaimana tercantum dalam materi pernyataan organisasi, PPP menyoroti pentingnya pelaksanaan Pasal 33 dan Pasal 34 Undang-Undang Dasar 1945 sebagai landasan dalam mewujudkan perekonomian yang berorientasi pada kepentingan rakyat dan perlindungan sosial.'

                    ]

                },

                {

                    id: 'pemerataan-kesejahteraan',

                    heading:
                        'Pemerataan Kesejahteraan',

                    paragraphs: [

                        'Penguatan ekonomi nasional perlu diiringi dengan pemerataan kesempatan usaha, pemberdayaan ekonomi masyarakat, serta perhatian terhadap kelompok yang membutuhkan dukungan sosial.',

                        'Selain itu, kebijakan pembangunan diharapkan dapat memberikan manfaat yang merata melalui peningkatan akses terhadap pendidikan, lapangan pekerjaan, dan pelayanan publik.'

                    ]

                },

                {

                    id: 'pembangunan-berkeadilan',

                    heading:
                        'Pembangunan Berkeadilan',

                    paragraphs: [

                        'Komitmen terhadap kesejahteraan rakyat menjadi bagian dari upaya mendorong pembangunan yang berkeadilan, berkelanjutan, dan berpihak pada kepentingan masyarakat.'

                    ]

                }

            ]

        },


        /* =================================
           PERNYATAAN 4
           AMBANG BATAS PARLEMEN
        ================================== */

        {

            id: 'parlemen',

            filter: 'politik',

            category: 'Sikap Politik',

            date: '2026-09-16',

            dateLabel: '16 September 2026',

            title:
                'PPP Nyatakan Kesiapan Menghadapi Perubahan Ambang Batas Parlemen',

            image:
                'assets/images/pernyataan-parlemen.jpg',

            alt:
                'Foto ilustrasi penyampaian keterangan dalam kegiatan politik',

            lead:
                'Wakil Sekretaris Jenderal PPP Jabbar Idris menyampaikan bahwa PPP siap menghadapi besaran ambang batas parlemen yang disepakati dalam revisi Undang-Undang Pemilu. PPP juga menjadikan hasil Pemilu 2024 sebagai bahan evaluasi untuk memperkuat organisasi menghadapi pemilu mendatang.',

            related: 'bumi',

            intro: [

                'Partai Persatuan Pembangunan (PPP) memberikan perhatian terhadap pembahasan perubahan ketentuan ambang batas parlemen dalam sistem pemilihan umum Indonesia.'

            ],

            sections: [

                {

                    id: 'perubahan-aturan-pemilu',

                    heading:
                        'Perubahan Aturan Pemilu',

                    paragraphs: [

                        'Dalam materi pemberitaan, Wakil Sekretaris Jenderal PPP Jabbar Idris menyampaikan bahwa PPP siap menghadapi berbagai kemungkinan perubahan aturan ambang batas parlemen yang menjadi bagian dari evaluasi sistem kepemiluan nasional.'

                    ]

                },

                {

                    id: 'keterwakilan-politik',

                    heading:
                        'Keterwakilan Politik',

                    paragraphs: [

                        'Pembahasan mengenai ambang batas parlemen perlu mempertimbangkan prinsip keterwakilan politik, efektivitas sistem pemerintahan, serta kesempatan bagi masyarakat untuk menyalurkan aspirasi melalui partai politik.'

                    ]

                },

                {

                    id: 'persiapan-organisasi',

                    heading:
                        'Persiapan Organisasi',

                    paragraphs: [

                        'Bagi PPP, dinamika regulasi pemilu juga menjadi dorongan untuk memperkuat konsolidasi organisasi, meningkatkan komunikasi dengan masyarakat, dan mempersiapkan strategi politik yang lebih adaptif.',

                        'Ke depan, partisipasi aktif dalam proses demokrasi dan penguatan hubungan dengan masyarakat menjadi aspek penting dalam menghadapi perkembangan sistem politik nasional.'

                    ]

                }

            ]

        }

    ];


    /* =====================================
       INITIALIZATION
    ===================================== */

    document.addEventListener('DOMContentLoaded', () => {

        const $ = id => document.getElementById(id);

        const archive = $('statementArchive');

        const detail = $('statementDetail');

        const notFound = $('statementNotFound');

        const archiveList = $('statementArchiveList');

        const statementCount = $('statementCount');

        const emptyState = $('statementEmpty');

        const filterButtons = document.querySelectorAll(
            '.statement-filter'
        );

        if (!archive || !detail || !archiveList) {

            return;

        }


        /* =================================
           AMBIL PARAMETER URL
        ================================== */

        const params = new URLSearchParams(
            window.location.search
        );

        const statementId = params.get('id');


        /* =================================
           HELPER MEMBUAT ELEMENT
        ================================== */

        function createElement(tag, className, text) {

            const element = document.createElement(tag);

            if (className) {

                element.className = className;

            }

            if (text !== undefined) {

                element.textContent = text;

            }

            return element;

        }


        /* =================================
           MEMBUAT BARIS PERNYATAAN
        ================================== */

        function createStatementCard(statement) {

            const article = createElement(
                'article',
                'statement-archive-item'
            );

            const detailUrl =
                'pernyataan.html?id=' +
                encodeURIComponent(statement.id);


            // KOLOM TANGGAL KIRI

            const dateColumn = createElement(
                'div',
                'statement-date-column'
            );

            const date = createElement(
                'time',
                '',
                statement.dateLabel
            );

            date.dateTime = statement.date;

            const category = createElement(
                'p',
                '',
                statement.category
            );

            dateColumn.append(date, category);


            // KOLOM INFORMASI KANAN

            const information = createElement(
                'div',
                'statement-information'
            );

            const meta = createElement(
                'p',
                'statement-information-meta',
                `${statement.dateLabel} · ${statement.category}`
            );

            const heading = createElement('h2');

            const titleLink = createElement(
                'a',
                '',
                statement.title
            );

            titleLink.href = detailUrl;

            heading.appendChild(titleLink);

            const excerpt = createElement(
                'p',
                'statement-excerpt',
                statement.lead
            );

            const readLink = createElement(
                'a',
                'statement-read-link',
                'Baca pernyataan'
            );

            readLink.href = detailUrl;

            const icon = createElement(
                'i',
                'bi bi-arrow-right'
            );

            icon.setAttribute('aria-hidden', 'true');

            readLink.appendChild(icon);

            information.append(
                meta,
                heading,
                excerpt,
                readLink
            );

            article.append(
                dateColumn,
                information
            );

            return article;

        }


        /* =================================
           RENDER ARSIP PERNYATAAN
        ================================== */

        function renderArchive(category = 'semua') {

            const filtered = statements

                .filter(statement => {

                    return category === 'semua' ||
                        statement.filter === category;

                })

                .sort((a, b) => {

                    return b.date.localeCompare(a.date);

                });


            // HAPUS DAFTAR SEBELUMNYA

            archiveList.replaceChildren();


            // TAMPILKAN PERNYATAAN

            filtered.forEach(statement => {

                archiveList.appendChild(
                    createStatementCard(statement)
                );

            });


            // UPDATE JUMLAH

            statementCount.textContent =

                `${filtered.length} PERNYATAAN · TERBARU DAHULU`;


            // EMPTY STATE

            emptyState.hidden = filtered.length !== 0;

            archiveList.hidden = filtered.length === 0;


            // UPDATE STATUS FILTER

            filterButtons.forEach(button => {

                const active =
                    button.dataset.filter === category;

                button.classList.toggle(
                    'active',
                    active
                );

                button.setAttribute(
                    'aria-pressed',
                    String(active)
                );

            });

        }


        /* =================================
           FILTER PERNYATAAN
        ================================== */

        filterButtons.forEach(button => {

            button.addEventListener('click', () => {

                renderArchive(button.dataset.filter);

            });

        });


        /* =================================
           RENDER DETAIL PERNYATAAN
        ================================== */

        function renderDetail(statement) {


            // GUNAKAN CSS ARTIKEL SEBELUMNYA

            document.body.classList.add('ppp-artikel');

            archive.hidden = true;

            detail.hidden = false;

            notFound.hidden = true;


            // UPDATE TITLE BROWSER

            document.title =
                statement.title + ' | PPP — Ruang Bersama';


            // UPDATE KONTEN HEADER

            $('detailCategory').textContent =
                statement.category.toUpperCase();

            $('detailTitle').textContent =
                statement.title;

            $('detailLead').textContent =
                statement.lead;

            $('detailDate').textContent =
                statement.dateLabel;

            $('detailDate').dateTime =
                statement.date;


            // UPDATE FOTO

            const image = $('detailImage');

            image.alt = statement.alt;

            image.addEventListener('error', () => {

                image.hidden = true;

                const placeholder = createElement(
                    'div',
                    'statement-image-error',
                    'Foto ilustrasi belum tersedia.'
                );

                image.after(placeholder);

            }, { once: true });

            image.src = statement.image;


            /* =============================
               ISI ARTIKEL
            ============================== */

            const content = $('detailContent');

            const toc = $('detailToc');

            content.replaceChildren();

            toc.replaceChildren();


            // PARAGRAF PEMBUKA

            statement.intro.forEach(text => {

                content.appendChild(
                    createElement('p', '', text)
                );

            });


            // BAGIAN ISI PERNYATAAN

            statement.sections.forEach(section => {


                // MEMBUAT BLOK PARAGRAF

                const block = createElement(
                    'div',
                    'statement-text-block'
                );

                block.id = section.id;

                block.tabIndex = -1;


                // JUDUL AKSESIBILITAS
                // Tidak terlihat secara visual,
                // mengikuti desain asli Figma.

                const heading = createElement(
                    'h2',
                    'visually-hidden',
                    section.heading
                );

                block.appendChild(heading);


                // TAMBAHKAN PARAGRAF

                section.paragraphs.forEach(text => {

                    block.appendChild(
                        createElement('p', '', text)
                    );

                });

                content.appendChild(block);


                // MEMBUAT DAFTAR ISI

                const item = createElement('li');

                const link = createElement(
                    'a',
                    '',
                    section.heading
                );

                link.href = '#' + section.id;

                item.appendChild(link);

                toc.appendChild(item);

            });


            /* =============================
               PROGRAM TERKAIT
            ============================== */

            const related =
                relatedPrograms[statement.related];

            $('detailRelatedTitle').textContent =
                related.title;

            $('detailRelatedDescription').textContent =
                related.description;

            $('detailRelatedLink').href =
                related.link;


            /* =============================
               SCROLL DAFTAR ISI
            ============================== */

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

                        target.focus({
                            preventScroll: true
                        });

                        target.scrollIntoView({

                            behavior:
                                reducedMotion
                                    ? 'auto'
                                    : 'smooth',

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


            // SCROLL JIKA URL MEMILIKI ANCHOR

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


            /* =============================
               SALIN TAUTAN
            ============================== */

            $('copyStatementLink').addEventListener(
                'click',
                async () => {

                    const url = new URL(
                        window.location.href
                    );

                    url.searchParams.set(
                        'id',
                        statement.id
                    );

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

                        $('statementCopyStatus').textContent =
                            'Tautan berhasil disalin.';

                    } catch (error) {

                        window.prompt(
                            'Salin tautan berikut:',
                            url.href
                        );

                        $('statementCopyStatus').textContent =
                            'Silakan salin tautan secara manual.';

                    }

                }
            );

        }


        /* =================================
           TAMPILKAN HALAMAN
        ================================== */

        if (statementId === null) {


            // TAMPILKAN ARSIP

            archive.hidden = false;

            detail.hidden = true;

            notFound.hidden = true;

            renderArchive();


        } else {


            // CARI PERNYATAAN BERDASARKAN ID

            const selectedStatement = statements.find(
                statement => statement.id === statementId
            );

            if (selectedStatement) {

                renderDetail(selectedStatement);

            } else {


                // PERNYATAAN TIDAK DITEMUKAN

                document.body.classList.add('ppp-artikel');

                archive.hidden = true;

                detail.hidden = true;

                notFound.hidden = false;

                document.title =
                    'Pernyataan Tidak Ditemukan | PPP — Ruang Bersama';

            }

        }

    });

})();

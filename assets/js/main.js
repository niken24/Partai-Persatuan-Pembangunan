document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".demo-form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const feedback = form.querySelector(".form-feedback");
      if (feedback) {
        feedback.textContent = "Simulasi berhasil. Data tidak disimpan atau dikirim.";
        feedback.classList.add("text-success");
      }
      form.reset();
    });
  });
});

/* ===== NAVBAR PPP: menu aktif + pencarian halaman ===== */
document.addEventListener("DOMContentLoaded", function () {
  const current = location.pathname.split("/").pop() || "index.html";
  const activePage = current === "artikel.html" ? "kabar.html" : current;
  document.querySelectorAll(".ppp-head-menu a").forEach(function (link) {
    if (link.getAttribute("href") === activePage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const form = document.getElementById("pppSiteSearch");
  const field = document.getElementById("pppSearchInput");
  const results = document.getElementById("pppSearchResults");
  if (!form || !field || !results) return;

  // Search sederhana: daftar halaman dan topik, bukan full-text database.
  const pages = [
    { name: "Beranda", url: "index.html", terms: "home landing utama carousel" },
    { name: "Tentang PPP", url: "tentang.html", terms: "profil sejarah visi misi ideologi khidmat organisasi" },
    { name: "Program & Aksi", url: "program.html", terms: "program lingkungan beasiswa pendidikan peduli bumi kemanusiaan" },
    { name: "Aspirasi Rakyat", url: "aspirasi.html", terms: "aspirasi rakyat formulir saran masukan pelacakan" },
    { name: "Kabar PPP", url: "kabar.html", terms: "berita kabar editorial terbaru artikel" },
    { name: "Pernyataan Resmi", url: "pernyataan.html", terms: "pernyataan resmi informasi klarifikasi arsip" },
    { name: "FAQ & Kontak", url: "faq.html", terms: "faq kontak whatsapp email pertanyaan bantuan" },
    { name: "Bergabung", url: "bergabung.html", terms: "bergabung partisipasi relawan komunitas" }
  ];

  function matches() {
    const query = field.value.trim().toLocaleLowerCase("id");
    if (!query) return [];
    return pages.filter(function (page) {
      return (page.name + " " + page.terms).toLocaleLowerCase("id").includes(query);
    });
  }
  function showResults() {
    const q = field.value.trim();
    results.replaceChildren();
    if (!q) { results.hidden = true; return; }
    const found = matches();
    if (!found.length) {
      const message = document.createElement("span");
      message.className = "ppp-no-results";
      message.textContent = "Tidak ada halaman yang sesuai.";
      results.appendChild(message);
    } else {
      found.forEach(function (page) {
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.name;
        results.appendChild(link);
      });
    }
    results.hidden = false;
  }
  field.addEventListener("input", showResults);
  field.addEventListener("focus", showResults);
  field.addEventListener("keydown", function (event) {
    if (event.key === "Escape") results.hidden = true;
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const found = matches();
    if (!field.value.trim()) { field.focus(); return; }
    if (found.length) location.href = found[0].url;
    else showResults();
  });
  document.addEventListener("click", function (event) {
    if (!form.contains(event.target)) results.hidden = true;
  });
});


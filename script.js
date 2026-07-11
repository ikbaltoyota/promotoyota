// ===============================
// TOYOTA LANDING PAGE
// script.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Efek muncul saat halaman dimuat
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .5s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Smooth scroll untuk menu
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});

// ===============================
// Header berubah saat discroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "0 2px 8px rgba(0,0,0,.08)";

    }

});

// ===============================
// Animasi card saat muncul
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .car-card").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = ".5s ease";

    observer.observe(item);

});

// ===============================
// Tahun Footer Otomatis
// ===============================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if (footer) {
    footer.innerHTML = `&copy; ${year} Toyota Promotion. All Rights Reserved.`;
}

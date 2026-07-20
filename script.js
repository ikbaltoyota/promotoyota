// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// =========================================
// STICKY HEADER
// =========================================

const header = document.querySelector(".header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
}

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            if (navbar) {
                navbar.classList.remove("active");
            }

        }

    });

});

// =========================================
// SCROLL ANIMATION
// =========================================

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section, .promo-card, .item, .card")
    .forEach(el => observer.observe(el));

}

// =========================================
// GTM EVENT
// =========================================

window.dataLayer = window.dataLayer || [];

function pushEvent(eventName, data = {}) {

    window.dataLayer.push({
        event: eventName,
        ...data
    });

}

// =========================================
// TRACKING
// =========================================

function trackWhatsApp() {
    pushEvent("click_whatsapp", {
        location: window.location.pathname
    });
}

function trackCall() {
    pushEvent("click_call", {
        location: window.location.pathname
    });
}

function trackInstagram() {
    pushEvent("click_instagram", {
        location: window.location.pathname
    });
}

function trackTikTok() {
    pushEvent("click_tiktok", {
        location: window.location.pathname
    });
}

function trackLihatMobil() {
    pushEvent("click_lihat_mobil", {
        location: window.location.pathname
    });
}

// =========================================
// SCROLL 90%
// =========================================

let scrollSent = false;

window.addEventListener("scroll", () => {

    if (scrollSent) return;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) return;

    const percent = (window.scrollY / docHeight) * 100;

    if (percent >= 90) {

        scrollSent = true;

        pushEvent("scroll_90", {
            percent: 90
        });

    }

});

// =========================================
// PAGE LOAD
// =========================================

window.addEventListener("load", () => {

    pushEvent("page_loaded", {
        page: document.title
    });

});

// =========================================
// WHATSAPP FORM
// =========================================

const waForm = document.getElementById("waForm");

if (waForm) {

    waForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const hp = document.getElementById("hp").value;
        const mobil = document.getElementById("mobil").value;
        const pesan = document.getElementById("pesan").value;

        const text =
`Halo Pak Ikbal,

Nama : ${nama}

No HP : ${hp}

Mobil : ${mobil}

Pesan : ${pesan}`;

        window.open(
            "https://wa.me/6285147851507?text=" + encodeURIComponent(text),
            "_blank"
        );

    });

}

console.log("Ikbal Toyota Premium Website Loaded");

* ==========================================================
   TOYOTA PREMIUM LANDING PAGE V3
   script.js
========================================================== */

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 500);

    }

});

/* ==========================================
   HEADER SCROLL
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ==========================================
   BACK TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});
/* ==========================================
   ACTIVE MENU
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + sectionId) {

                    link.classList.add("active");

                }

            });

        }

    });

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const fadeElements = document.querySelectorAll(

    ".fade-up,.produk-card,.promo-card,.why-card,.testi-card,.faq-item,.about-image,.about-content"

);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    fadeElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==========================================
   HERO FLOAT EFFECT
========================================== */

const heroCard = document.querySelector(".hero-card");

if (heroCard) {

    let angle = 0;

    setInterval(() => {

        angle += 0.02;

        heroCard.style.transform =
            `translateY(${Math.sin(angle) * 8}px)`;

    }, 20);

}

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
/* ==========================================
   GOOGLE ANALYTICS EVENT TRACKING
========================================== */

function sendGAEvent(eventName, parameters = {}) {

    if (typeof gtag === "function") {

        gtag("event", eventName, parameters);

    }

}

/* ==========================================
   WHATSAPP TRACKING
========================================== */

document.querySelectorAll('a[href*="wa.me"]').forEach(button => {

    button.addEventListener("click", () => {

        sendGAEvent("whatsapp_click", {

            event_category: "Contact",
            event_label: "WhatsApp Button",
            value: 1

        });

    });

});

/* ==========================================
   PHONE TRACKING
========================================== */

document.querySelectorAll('a[href^="tel:"]').forEach(button => {

    button.addEventListener("click", () => {

        sendGAEvent("phone_click", {

            event_category: "Contact",
            event_label: "Phone Button",
            value: 1

        });

    });

});

/* ==========================================
   GOOGLE ADS CONVERSION
========================================== */

function sendAdsConversion() {

    if (typeof gtag === "function") {

        gtag("event", "conversion", {

            send_to: "AW-17417997745/AbCdEfGhIjKlMnOp"

        });

    }

}

document.querySelectorAll('a[href*="wa.me"]').forEach(button => {

    button.addEventListener("click", sendAdsConversion);

});

/* ==========================================
   SCROLL DEPTH TRACKING
========================================== */

let scroll25 = false;
let scroll50 = false;
let scroll75 = false;
let scroll100 = false;

window.addEventListener("scroll", () => {

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    if (pageHeight <= 0) return;

    const percent =
        Math.round((window.scrollY / pageHeight) * 100);

    if (percent >= 25 && !scroll25) {

        scroll25 = true;

        sendGAEvent("scroll_25");

    }

    if (percent >= 50 && !scroll50) {

        scroll50 = true;

        sendGAEvent("scroll_50");

    }

    if (percent >= 75 && !scroll75) {

        scroll75 = true;

        sendGAEvent("scroll_75");

    }

    if (percent >= 100 && !scroll100) {

        scroll100 = true;

        sendGAEvent("scroll_100");

    }

});

/* ==========================================
   PAGE VIEW TIMER
========================================== */

setTimeout(() => {

    sendGAEvent("engaged_30_seconds", {

        event_category: "Engagement"

    });

}, 30000);

/* ==========================================
   OUTBOUND LINK TRACKING
========================================== */

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function () {

        const href = this.getAttribute("href");

        if (!href) return;

        if (
            href.startsWith("http") &&
            !href.includes(location.hostname)
        ) {

            sendGAEvent("outbound_click", {

                event_category: "Navigation",
                event_label: href

            });

        }

    });

});
/* ==========================================================
   TOYOTA PREMIUM V3
   FINAL INITIALIZATION
========================================================== */

/* ==========================================
   FAQ ACCORDION
========================================== */

document.querySelectorAll(".faq-item").forEach(item => {

    const answer = item.querySelector("p");

    if (!answer) return;

    answer.style.display = "none";

    item.addEventListener("click", () => {

        const opened = answer.style.display === "block";

        document.querySelectorAll(".faq-item p").forEach(p => {

            p.style.display = "none";

        });

        if (!opened) {

            answer.style.display = "block";

        }

    });

});

/* ==========================================
   IMAGE LAZY FALLBACK
========================================== */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", function () {

        this.src = "images/no-image.webp";

    });

});

/* ==========================================
   BUTTON DISABLE DOUBLE CLICK
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function () {

        this.style.pointerEvents = "none";

        setTimeout(() => {

            this.style.pointerEvents = "auto";

        }, 1200);

    });

});

/* ==========================================
   CURRENT YEAR
========================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* ==========================================
   PAGE READY
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Toyota Premium Landing Page V3 Loaded");

});

/* ==========================================
   SAFE MODE
========================================== */

window.onerror = function (message, source, line, column, error) {

    console.error(
        "Website Error:",
        message,
        "Line:",
        line
    );

};

/* ==========================================
   PERFORMANCE
========================================== */

window.addEventListener("pageshow", () => {

    if ("requestIdleCallback" in window) {

        requestIdleCallback(() => {

            console.log("Idle Loaded");

        });

    }

});

/* ==========================================
   FINAL INIT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM Ready");

}) ;

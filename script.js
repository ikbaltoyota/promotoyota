/* ======================================
   TOYOTA LANDING PAGE V3
   Author : Muhamad Ikbal
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    // =============================
    // HEADER SHADOW
    // =============================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";
            header.style.background = "#ffffff";
        } else {
            header.style.boxShadow = "none";
            header.style.background = "#ffffff";
        }

    });

    // =============================
    // SMOOTH SCROLL
    // =============================
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function(btn){
        btn.addEventListener("click", function(){

            if(typeof gtag === "function"){
                gtag("event","whatsapp_click",{
                    event_category:"Contact",
                    event_label:"WhatsApp Button"
                });
            }

        });
    });

    document.querySelectorAll('a[href^="tel:"]').forEach(function(btn){
        btn.addEventListener("click", function(){

            if(typeof gtag === "function"){
                gtag("event","phone_click",{
                    event_category:"Contact",
                    event_label:"Phone Button"
                });
            }

        });
    });

});

    // =============================
    // ANIMATION ON SCROLL
    // =============================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(
        ".promo-card,.car-card,.why-box,.testi-card,.contact-box,.box"
    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    // =============================
    // ACTIVE MENU
    // =============================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    // =============================
    // CARD HOVER EFFECT
    // =============================

    document.querySelectorAll(".car-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    // =============================
    // BUTTON RIPPLE EFFECT
    // =============================

    document.querySelectorAll(".btn-primary").forEach(button => {

        button.addEventListener("click", function(e){

            let circle = document.createElement("span");

            circle.classList.add("ripple");

            this.appendChild(circle);

            let x = e.clientX - this.offsetLeft;
            let y = e.clientY - this.offsetTop;

            circle.style.left = x + "px";
            circle.style.top = y + "px";

            setTimeout(() => {

                circle.remove();

            },600);

        });

    });

});
<script src="script.js" defer></script>
/* ===============================
   GA4 Event Tracking
================================= */

// Tracking Klik WhatsApp
document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function(btn){
    btn.addEventListener("click", function(){

        if (typeof gtag === "function") {
            gtag("event", "whatsapp_click", {
                event_category: "Contact",
                event_label: "WhatsApp Button"
            });
        }

    });
});

// Tracking Klik Telepon
document.querySelectorAll('a[href^="tel:"]').forEach(function(btn){
    btn.addEventListener("click", function(){

        if (typeof gtag === "function") {
            gtag("event", "phone_click", {
                event_category: "Contact",
                event_label: "Phone Button"
            });
        }

    });
});
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hide");

    }

});

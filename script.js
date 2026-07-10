/* =====================================================
   TOYOTA PREMIUM V4
   script.js
===================================================== */

"use strict";

/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader = document.querySelector(".loader");

    if (preloader) {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }

});

/* =====================================================
   STICKY HEADER
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* =====================================================
   SMOOTH SCROLL MENU
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});
/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}

/* =====================================================
   CLOSE MENU AFTER CLICK
===================================================== */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

        if (menuToggle) {

            menuToggle.classList.remove("active");

        }

    });

});
/* =====================================================
   ACTIVE MENU ON SCROLL
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

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
/* =====================================================
   SIMULASI KREDIT
===================================================== */

const carType = document.getElementById("carType");
const dpInput = document.getElementById("dp");
const tenor = document.getElementById("tenor");
const calculateBtn = document.getElementById("calculateBtn");

const priceResult = document.getElementById("priceResult");
const dpResult = document.getElementById("dpResult");
const installmentResult = document.getElementById("installmentResult");

function rupiah(number){

    return "Rp " + number.toLocaleString("id-ID");

}

function calculateSimulation(){

    if(!carType || !dpInput || !tenor) return;

    const price = Number(carType.value);

let defaultDP = 30000000;

switch(price){

case 240000000:
defaultDP = 20000000;
break;

case 277000000:
defaultDP = 25000000;
break;

case 303000000:
defaultDP = 30000000;
break;

case 315000000:
defaultDP = 35000000;
break;

case 430000000:
defaultDP = 50000000;
break;

case 580000000:
defaultDP = 80000000;
break;

}

if(dpInput.value == "" || Number(dpInput.value) <= 0){

    dpInput.value = defaultDP;

}

const loan = price - dp;

const installment = Math.round(loan / months);

}

if(calculateBtn){

    calculateBtn.addEventListener("click", calculateSimulation);

}

if(carType){

    carType.addEventListener("change", calculateSimulation);

}

if(dpInput){

    dpInput.addEventListener("input", calculateSimulation);

}

if(tenor){

    tenor.addEventListener("change", calculateSimulation);

}

calculateSimulation();
/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if(answer){

        answer.style.display = "none";

    }

    item.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other !== item){

                const p = other.querySelector("p");

                if(p){

                    p.style.display = "none";

                }

            }

        });

        if(answer){

            answer.style.display =
            answer.style.display === "block"
            ? "none"
            : "block";

        }

    });

});
/* =====================================================
   COUNTER
===================================================== */

const counters = document.querySelectorAll(".stat-box h3");

let counterStarted = false;

function startCounter(){

    if(counterStarted) return;

    counterStarted = true;

    counters.forEach(counter=>{

        const target =
        parseInt(counter.innerText);

        let count = 0;

        const speed = target / 60;

        function update(){

            count += speed;

            if(count < target){

                counter.innerText =
                Math.floor(count) + "+";

                requestAnimationFrame(update);

            }else{

                counter.innerText =
                target + "+";

            }

        }

        update();

    });

}

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    if(!hero) return;

    if(window.scrollY > hero.offsetTop){

        startCounter();

    }

});
/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealItems = document.querySelectorAll(

".promo-card,.car-card,.testimonial-card,.faq-item,.stat-box"

);

function reveal(){

    const trigger = window.innerHeight * .85;

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();
/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=e.clientX-rect.left-size/2+"px";
        ripple.style.top=e.clientY-rect.top-size/2+"px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/* =====================================================
   LAZY IMAGE
===================================================== */

const lazyImages=document.querySelectorAll("img[loading='lazy']");

if("IntersectionObserver" in window){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const img=entry.target;

                img.src=img.dataset.src || img.src;

                observer.unobserve(img);

            }

        });

    });

    lazyImages.forEach(img=>observer.observe(img));

}

/* =====================================================
   COPYRIGHT YEAR
===================================================== */

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}

/* =====================================================
   PAGE LOADED
===================================================== */

console.log("Toyota Premium V4 Loaded Successfully");

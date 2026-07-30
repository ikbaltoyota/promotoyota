/*=========================================
TOYOTA LANDING PAGE SCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
    MOBILE MENU
    =====================================*/

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if(menuToggle){

        menuToggle.addEventListener("click",()=>{

            navbar.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });

    }

    document.querySelectorAll(".navbar a").forEach(link=>{

        link.addEventListener("click",()=>{

            navbar.classList.remove("active");

        });

    });

    /*=====================================
    STICKY HEADER
    =====================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

    /*=====================================
    SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*=====================================
    SCROLL REVEAL
    =====================================*/

    const reveals=document.querySelectorAll(".reveal");

    function reveal(){

        reveals.forEach(item=>{

            const top=item.getBoundingClientRect().top;

            const visible=120;

            if(top < window.innerHeight-visible){

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll",reveal);

    reveal();

    /*=====================================
    FAQ
    =====================================*/

    document.querySelectorAll(".faq-item h3").forEach(item=>{

        item.addEventListener("click",()=>{

            const parent=item.parentElement;

            parent.classList.toggle("open");

        });

    });

    /*=====================================
    COUNTER
    =====================================*/

    const counters=document.querySelectorAll(".counter-box h3");

    counters.forEach(counter=>{

        const text=counter.innerText;

        const target=parseInt(text.replace(/\D/g,""));

        if(isNaN(target)) return;

        let count=0;

        const speed=target/80;

        function update(){

            count+=speed;

            if(count<target){

                counter.innerText=Math.floor(count)+"+";

                requestAnimationFrame(update);

            }else{

                counter.innerText=text;

            }

        }

        update();

    });

    /*=====================================
    FORM WHATSAPP
    =====================================*/

    const form=document.getElementById("waForm");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const nama=document.getElementById("nama").value;
            const hp=document.getElementById("hp").value;
            const mobil=document.getElementById("pilihanmobil").value;
            const pesan=document.getElementById("pesan").value;

            const text=
`Halo Pak Ikbal,

Nama : ${nama}
No HP : ${hp}
Mobil : ${mobil}

Pesan :
${pesan}`;

            window.open(

"https://wa.me/6285147851507?text="+encodeURIComponent(text),

"_blank"

            );

        });

    }

});

/*=====================================
TRACKING
=====================================*/

function trackWhatsApp(){

    console.log("WhatsApp Click");

}

function trackCall(){

    console.log("Call Click");

}

function trackInstagram(){

    console.log("Instagram Click");

}

function trackTikTok(){

    console.log("TikTok Click");

}

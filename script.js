document.addEventListener("DOMContentLoaded", (event) => {
    
    gsap.registerPlugin(ScrollTrigger);
    console.log("Portfolio System: Online");

    // ANIMACIÓN 1: HERO
    
    gsap.from(".hero-content", {
        duration: 1.5,
        y: 50,          
        opacity: 0,     
        ease: "power3.out"
    });

 
    gsap.to(".subtitle", {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom center",
            scrub: true 
        },
        y: 100, 
        opacity: 0
    });

   
    // ANIMACIÓN 2: PROYECTOS 
    const projects = gsap.utils.toArray('.project-card');

    projects.forEach(card => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%", 
                toggleActions: "play none none reverse" 
            },
            y: 0,        
            opacity: 1,  
            duration: 0.8,
            ease: "power3.out"
        });
    });

});


// PROYECTO 2: Monografías (App vs Excel)
function toggleProject2(view) {
    const imgApp = document.getElementById('p2-img-app');
    const imgExcel = document.getElementById('p2-img-excel');
    const btns = event.target.parentElement.querySelectorAll('.toggle-btn');
    
    if (view === 'app') {
        imgApp.classList.add('active');
        imgExcel.classList.remove('active');
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        imgApp.classList.remove('active');
        imgExcel.classList.add('active');
        btns[0].classList.remove('active');
        btns[1].classList.add('active');
    }
}

// PROYECTO 4: Fintrack (Dashboard vs Reportes)
function toggleProject4(view) {
    const imgDash = document.getElementById('p4-img-dash');
    const imgReport = document.getElementById('p4-img-report');
    const btns = event.target.parentElement.querySelectorAll('.toggle-btn');
    
    if (view === 'dash') {
        imgDash.classList.add('active');
        imgReport.classList.remove('active');
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        imgDash.classList.remove('active');
        imgReport.classList.add('active');
        btns[0].classList.remove('active');
        btns[1].classList.add('active');
    }
}

// PROYECTO 5: Erizos (Mascota vs Juego)
function toggleProject5(view) {
    const imgPet = document.getElementById('p5-img-pet');
    const imgGame = document.getElementById('p5-img-game');
    const btns = event.target.parentElement.querySelectorAll('.toggle-btn');
    
    if (view === 'pet') {
        imgPet.classList.add('active');
        imgGame.classList.remove('active');
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        imgPet.classList.remove('active');
        imgGame.classList.add('active');
        btns[0].classList.remove('active');
        btns[1].classList.add('active');
    }
}
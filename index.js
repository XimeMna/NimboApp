var click = document.getElementById("click");
function sonido(){
    click.play();
}

function aceptar (){
    click.play();
    var aceptar = document.getElementById('aviso');
    var sombreado = document.getElementById('capa');
    sombreado.style.display = "none";
    aceptar.style.display = "none";
    
}
function instrucciones(){
    click.play();
    window.location.href = "instrucciones.html";
}

const slides = document.querySelectorAll('.fotos');
let currentIndex = 0;
const interval = 3000; // Intervalo en milisegundos (3 segundos en este caso)

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Función para mover automáticamente el carrusel
function autoPlay() {
  setInterval(nextSlide, interval);
}

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);

// Iniciar movimiento automático al cargar la página
autoPlay();



const arrowBtns = document.querySelectorAll('.arrow-btn');
const cardBtns = document.querySelectorAll('.card');
let currentCard = 4;
let dir = 1;
let initialTouchX = null;
moveCards();

arrowBtns.forEach((btn, i) => {
    // Eventos para los botones de flecha
    btn.onpointerenter = (e) => gsap.to(btn, {
        ease: 'expo',
        'box-shadow': '0 3px 4px #00000050'
    });

    btn.onpointerleave = (e) => gsap.to(btn, {
        ease: 'expo',
        'box-shadow': '0 6px 8px #00000030'
    });

    btn.onclick = (e) => {
        dir = (i == 0) ? 1 : -1;
        if (i == 0) {
            currentCard--;
            currentCard = Math.max(0, currentCard);
        } else {
            currentCard++;
            currentCard = Math.min(7, currentCard);
        }
        moveCards(0.75);
    };
});

cardBtns.forEach((btn, i) => {
    // Eventos para las tarjetas
    btn.onpointerenter = (e) => gsap.to(btn, {
        ease: 'power3',
        overwrite: 'auto',
        'box-shadow': () => (i == currentCard) ? '0 6px 11px #00000030' : '0 6px 11px #00000030'
    });

    btn.onpointerleave = (e) => gsap.to(btn, {
        ease: 'power3',
        overwrite: 'auto',
        'box-shadow': () => (i == currentCard) ? '0 6px 11px #00000030' : '0 0px 0px #00000030'
    });

    btn.onclick = (e) => {
        dir = (i < currentCard) ? 1 : -1;
        currentCard = i;
        moveCards(0.75);
    };
});

// Agregar eventos táctiles a las tarjetas para deslizarlas
cardBtns.forEach((card, index) => {
    card.addEventListener('touchstart', handleTouchStart, false);
    card.addEventListener('touchmove', handleTouchMove, false);
    card.addEventListener('touchend', handleTouchEnd, false);
});

function handleTouchStart(event) {
    initialTouchX = event.touches[0].clientX; // Guardar la posición inicial del toque
}

function handleTouchMove(event) {
    if (!initialTouchX) return; // Salir si la posición inicial del toque es nula
    let currentX = event.touches[0].clientX;
    let deltaX = initialTouchX - currentX;
    if (Math.abs(deltaX) > 50) { // Deslizamiento horizontal mínimo requerido
        // Determinar la dirección del deslizamiento
        dir = (deltaX > 0) ? 1 : -1;
        // Actualizar la tarjeta actual basada en la dirección del deslizamiento
        currentCard += dir;
        currentCard = Math.max(0, Math.min(currentCard, 7)); // Asegurarse de que currentCard esté dentro del rango
        moveCards(0.5); // Mover las tarjetas con una duración de 0.5 segundos
        initialTouchX = null; // Restablecer la posición inicial del toque
    }
}

function handleTouchEnd(event) {
    initialTouchX = null; // Restablecer la posición inicial del toque al finalizar el toque
}

function moveCards(dur = 0) {
    gsap.timeline({ defaults: { duration: dur, ease: 'power3', stagger: { each: -0.03 * dir } } })
        .to('.card', {
            x: -270 * currentCard,
            y: (i) => (i == currentCard) ? 0 : 15,
            height: (i) => (i == currentCard) ? 250 : 250,
            ease: 'elastic.out(0.4)'
        }, 0)
        .to('.card', {
            cursor: (i) => (i == currentCard) ? 'default' : 'pointer',
            'box-shadow': (i) => (i == currentCard) ? '0 6px 11px #00000030' : '0 0px 0px #00000030',
            border: (i) => (i == currentCard) ? '3px solid #fff' : '0px solid #fff',
            ease: 'expo'
        }, 0)
        .to('.arrow-btn-prev', {
            autoAlpha: (currentCard == 0) ? 0 : 1
        }, 0)
        .to('.arrow-btn-next', {
            autoAlpha: (currentCard == 7) ? 0 : 1
        }, 0)
        .to('.card h4', {
            y: (i) => (i == currentCard) ? 0 : 8,
            opacity: (i) => (i == currentCard) ? 1 : 0,
        }, 0)
        .to('.card h3', {
            opacity: (i) => (i == currentCard) ? 0 : 1,
            duration: 0.1,
        }, 0);
}



document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
       redirectToPage(index);
    });
});

function redirectToPage(index) {
    switch (index) {
        case 0:
            click.play();
            var Opcion = 1;
            window.location.href = `InicioDeCartas.html?Opcion=${encodeURIComponent(Opcion)}`;
            break;
        case 1:
            click.play();
            var Opcion = 2;
            window.location.href = `InicioDeCartas.html?Opcion=${encodeURIComponent(Opcion)}`;
            break;
        case 2:
            click.play();
            var Opcion = 3;
            window.location.href = `InicioDeCartas.html?Opcion=${encodeURIComponent(Opcion)}`;
            break;
        case 3:
            click.play();
            var Opcion = 4;
            window.location.href = `InicioDeCartas.html?Opcion=${encodeURIComponent(Opcion)}`;
            break;
        case 4:
            click.play();
            var Opcion = 5;
            window.location.href = `InicioDeCartas.html?Opcion=${encodeURIComponent(Opcion)}`;
            break;
        case 5:
            click.play();
            var Opcion = 6;
            window.location.href = `InicioDeCartas.html?Opcion=${encodeURIComponent(Opcion)}`;
            break;
        case 6:
            click.play();
            var Opcion = 7;
            window.location.href = `InicioDeCartas.html?Opcion=${encodeURIComponent(Opcion)}`;
            break;
        case 7:
            click.play();
            var Opcion = 8;
            window.location.href = `InicioDeCartas.html?Opcion=${encodeURIComponent(Opcion)}`;
            break;
    }
}

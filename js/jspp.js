// // INTERACCIÓN CARRUSEL DE IMAGENES


let imagenes = [
  "img/BrochetaDeLangostinosyArroz.jpg",
  "img/CaliforniaRoll.jpg",
  "img/CevicheMixto.jpg",
  "img/EnsaladaAsiatica.jpg",
  "img/GyozaFrita.jpg",
  "img/Mesa.jpg",
  "img/MesaConComida.jpg",
  "img/MesaConGente.jpg",
  "img/PadThaiMarisco.jpg",
  "img/PescadoAlaBrasa.jpg",
  "img/RamenDeCarne.jpg",
  "img/TacosConFrijoles.jpg",
];


let imagenElement = document.getElementById('imagen');
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Asegúrate de que esta función esté dentro del evento "DOMContentLoaded"
  function mostrarImagen(index) {
    if (index >= 0 && index < imagenes.length) {
      imagenElement.src = imagenes[index];
      currentIndex = index;
    }
  }

  
  function mostrarSiguienteImagen() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    mostrarImagen(currentIndex);
  }

  mostrarImagen(currentIndex);
  ;

  // Evento para mostrar la imagen anterior
  document.getElementById('anterior').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(currentIndex);
  });

  // Evento para mostrar la siguiente imagen
  document.getElementById('siguiente').addEventListener('click', mostrarSiguienteImagen);

  setInterval(mostrarSiguienteImagen, 3000)
});


//EVENTO PARA EL NAVEGADOR. CUANDO SCROLLEAS SE VUELVE COLOR SOLIDO

// document.addEventListener('scroll', function() {
//   var header = document.querySelector('header');

//   var scrollPosition = window.scrollY;

//   if (scrollPosition > 50) {
//       header.style.backgroundColor = '#1e1f22';
      

//   } else {
//       header.style.backgroundColor = 'transparent';
     
//   }


// });

document.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  // Verificar si no es un dispositivo móvil y el ancho de la ventana es mayor o igual a 1140px
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && window.innerWidth >= 1140 && scrollPosition > 50) {
    header.style.backgroundColor = '#1e1f22';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});







//INTERACCIÓN CARRUSEL DE RESEÑAS

const reviews = document.querySelectorAll('.review');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.style.display = i === index ? 'block' : 'none';
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

function prevReview() {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview(currentReview);
}

showReview(currentReview);
nextButton.addEventListener('click', nextReview);
prevButton.addEventListener('click', prevReview);



// POP UP FORMULARIO

const showPopupLink = document.getElementById('show-popup-link');
  const closePopup = document.getElementById('close-popup');
  const popup = document.getElementById('popup-container');

  showPopupLink.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'block';
  });

  closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
  });


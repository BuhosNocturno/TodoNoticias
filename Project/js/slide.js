document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0; // Índice del slide actualmente visible

  // Mostrar el primer slide y ocultar los demás
  for (var i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }

  // Agregar evento click a los enlaces del menú
  var menuLinks = document.querySelectorAll(".menu a");
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function(event) {
      event.preventDefault();

      // Obtener el índice del slide al que se ha hecho clic
      var slideIndex = parseInt(this.getAttribute("data-slide-index"));

      // Mostrar el slide correspondiente y ocultar los demás
      for (var j = 0; j < slides.length; j++) {
        if (j === slideIndex) {
          slides[j].style.display = "block";
        } else {
          slides[j].style.display = "none";
        }
      }

      // Actualizar el índice del slide actualmente visible
      currentSlide = slideIndex;
    });
  }
});

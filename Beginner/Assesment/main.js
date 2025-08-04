const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
  });
// Close nav after clicking a link
document.querySelectorAll('.nav-list a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// Slideshow functionality
let slideIndex = 0;
let timer; // Track timeout so we can reset it

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (typeof n !== "undefined") {
    slideIndex = n;
  } else {
    slideIndex++;
  }

  // Loop back to the first slide if slideIndex exceed the number of slides
   if (slideIndex > slides.length) slideIndex = 1;

  // Hide all slides and remove active class from dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and activate current dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Reset timer
  clearTimeout(timer);
  timer = setTimeout(() => showSlides(), 3000); // Auto-change every 3 seconds
}

function currentSlide(n) {
  showSlides(n);
}

// Start slideshow
showSlides();
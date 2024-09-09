let slideIndex = 0;
let slides = document.getElementsByClassName('slideshow-image');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = '0';  // Hide all images
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.opacity = '1';  // Show the current image

  setTimeout(showSlides, 5000);  // Change every 5 seconds
}

showSlides();

var slideIndex = 1;

window.addEventListener("load",function() {
    showSlides(slideIndex);
})


//Controls the current slide and resets interval if needed
function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Slideshow Gallery

var slideIndexGallery = 1;

window.addEventListener("load",function() {
    showSlidesGallery(slideIndexGallery);
})

// NEXT AND PREVIOUS CONTROL
function plusSlidesGallery(n){
  if (n < 0){
    showSlidesGallery(slideIndexGallery -= 1);
  } else {
   showSlidesGallery(slideIndexGallery += 1);
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1){
    plusSlides(n + 2);
  } else {
    plusSlides(n + 1);
  }
}

//Controls the current slide and resets interval if needed
function currentSlideGallery(n){
  showSlidesGallery(slideIndex = n);
}

function showSlidesGallery(n){
  var j;
  var slidesGallery = document.getElementsByClassName("slides-gallery");
  if (n > slidesGallery.length) {slideIndexGallery = 1}
  if (n < 1) {slideIndexGallery = slidesGallery.length}
  for (j = 0; j < slidesGallery.length; j++) {
      slidesGallery[j].style.display = "none";
  }
  slidesGallery[slideIndexGallery-1].style.display = "block";
}

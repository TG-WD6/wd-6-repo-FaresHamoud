const slides = document.querySelectorAll(".slide");


slides.forEach((slide, SlideIndex) => {
    slide.style.transform = `translateX(${SlideIndex * 100}%)`;
});






// Next button
const nextSlide = document.querySelector(".next-btn");
let currentSlide = 0;
let maxSlideNumber = slides.length - 1;

nextSlide.addEventListener("click", function () {

    if (currentSlide === maxSlideNumber) { currentSlide = 0; }
    else { currentSlide++; }
    slides.forEach((slide, SlideIndex) => {
        slide.style.transform = `translateX(${100 * (SlideIndex - currentSlide)}%)` });

});



// previous button

const prevSlide = document.querySelector(".prev-btn");

prevSlide.addEventListener("click", function(){
    if (currentSlide === 0){ currentSlide = maxSlideNumber;}
    else
    {currentSlide --; }

    slides.forEach((slide, SlideIndex) => {
        slide.style.transform = `translateX(${100 * (SlideIndex - currentSlide)}%)`;
    })
}

);
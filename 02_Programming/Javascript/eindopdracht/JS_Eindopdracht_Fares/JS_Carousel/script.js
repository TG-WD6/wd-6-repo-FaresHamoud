const images = document.querySelectorAll(".slides img");
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelector(".slides");



const prevBtn = docuemnt.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");



let currentSlide = 1;
const imageSize = images[0].clientWidth


slides.style.transform = `translateX(${-imageSize}px)`;


prevBtn.addEventListener('click', () => 
{
    if (currentSlide <=0) return;
    slides.style.transition = '1s ease-in-out transform'; 
    currentSlide--;
    slides.style.transform = `translateX(${-imageSize * currentSlide}px)`;
}
)


nextBtn.addEventListener('click', () => 
{
    slides.style.transition = '1s ease-in-out transform'; 
    currentSlide++;
    slides.style.transform = `translateX(${-imageSize * currentSlide}px)`;
}
)


slides.addEventListener('transitioned', () => {
    if (images[current].classList.contains('first-slide')){
        slides.style.transition = 'none';
        currentSlide = images.length -2;
        slides.style.transform = `translateX(${-imageSize * current}px)`;
    }
if 
(images[currentSlide].classList.contains('last-slide')){
    slides.style.transition = 'none';
    currentSlide = images.length - currentSlide;
    slides.style.transform = `translateX(${-imageSize * currentSlide}px)`;
}


})
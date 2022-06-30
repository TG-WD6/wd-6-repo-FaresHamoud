const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

console.log(prevBtn, nextBtn);




prevBtn.onclick = () => nextSlide(-1);
nextBtn.onclick = () => nextSlide(1);


let slideIndex = 1;

showSlides(slideIndex);
function nextSlide(n) {
    showSlides((slideIndex += n));
}


function currentSlide(n) {
    showSlides((slideIndex = n));

}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".slide");
    console.log(slides);
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
const slides = document.querySelector('.slides');
const slidesImages = document.querySelectorAll('.slides img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// to keep track of where are we now in relation to slides
let counter = 1;


// we need to figure out the size of image so we could use that value and move images with translate x , so they mouve out of view as if they were sliding
const size = slidesImages[0].clientWidth;

slides.style.transform = 'translateX(' + (-size * counter) + 'px)';



nextBtn.addEventListener('click', () => {

    if(counter >= slidesImages.length -1) return; // to resolve a bug when switching so fast between slides goes ahead of the transition 
 
    slides.style.transition = "transform 0.4s ease-in-out";
    counter++
    // console.log(counter); testing 
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {

    if (counter <= 0) return;      // to resolve a bug when switching so fast between slides goes ahead of the transition speed
    slides.style.transition = "transform 0.3s ease-in-out";
    counter--;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



// to loop back to start we use an event listener that detects reaching the end of slides , we need to reset the transition efffect on the last slide so it would be a loop instead

slides.addEventListener('transitionend', () => {
    if (slidesImages[counter].id === "last-slide") {
        slides.style.transition = 'none';
        counter = slidesImages.length - 2;         //   (we created a duplicate images of first and last so we use -2 on the counter)
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (slidesImages[counter].id === "first-slide") {
        slides.style.transition = 'none';
        counter = slidesImages.length - counter; 
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }


});





// document.querySelector(".btn").onclick = function(){
//     const h1 = document.querySelector(".title");
//     console.log(h1.style);
//     h1.style.backgroundColor = "#00FF00"
// }
// const slides = document.querySelectorAll('.slide'); // Select all slides
// let counter = 0;

// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`; // Position slides side by side
// });

// const goprev = () => {
//     counter--; // Move to the previous slide
//     slideImage();
// };

// const gonext = () => {
//     counter++; // Move to the next slide
//     slideImage();
// };

// const slideImage = () => {
//     if (counter >= slides.length) {
//         counter = 0; // Loop back to the first slide
//     } else if (counter < 0) {
//         counter = slides.length - 1; // Loop back to the last slide
//     }
    
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`; // Move slides horizontally
//     });
// };
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

// Show the first slide initially
updateSlider();

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSlider();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Loop to the last slide
    }
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

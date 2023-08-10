// Select element from DOM
const slider = document.querySelector('.slider');
let isDown = false; // Our flag variable for when mouse moves
let startx;
let scrollLeft;

slider.addEventListener('mousedown', () => {
    isDown = true;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mousemove', () => {

});

slider.addEventListener('mousedown', () => {
    console.log(isDown)
    console.log('Do work')
});



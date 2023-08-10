// Select element from DOM
const slider = document.querySelector('.slider');
let isDown = false; // Our flag variable for when mouse moves
let startx;
let scrollLeft;

slider.addEventListener('mousedown', () => {
    isDown = true;
    slider.classList.add('active'); // Pops up slides abit
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
    if(!isDown){
        return; // stops function from running
    }
    console.log(isDown)
    console.log('Do work')
});



// Select element from DOM
const slider = document.querySelector('.slider');
let isDown = false; // Our flag variable for when mouse moves
let startX;     //Records initial clickdown on x-axis (i.e. horizontally)
let scrollLeft;  // Records position of initial scroll

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active'); // Pops up slides abit
    // console.log(e)
    startX = e.pageX - slider.offsetLeft; //Takes away any extra space between point of clickx and image of interest
    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown){
        return; // stops function from running
    };
    e.preventDefault(); //Prevents selecting of text within slides
    const x = e.pageX - slider.offsetLeft; // Gives position of cursor when moved from left to right and vice versa
    const movement = (x - startX) * 3; // Displays 3 images per slide movement
    slider.scrollLeft = scrollLeft - movement;
});



// Select element from DOM
const slider = document.querySelector('.slider');
let isDown = false; // Our flag variable for when mouse moves
let startx;     //Records initial clickdown on x-axis (i.e. horizontally)
let scrollLeft;  // Records position of initial scroll

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active'); // Pops up slides abit
    // console.log(e)
    startx = e.pagex - slider.offsetleft; //Takes away any extra space between point of clickx and image of interest
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

slider.addEventListener('mousemove', () => {
    if(!isDown){
        return; // stops function from running
    };
    e.preventDefault(); //Prevents selecting of text within slides
    const x = e.pagex - slider.offsetleft; // Gives position of cursor when moved from left to right and vice versa
    const movement = x - startx;
    slider.scrollLeft = scrollLeft - movement;
    console.log(isDown);
    console.log(x,startx);
});



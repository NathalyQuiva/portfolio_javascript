const slider = document.getElementById('slider');

let sliderPress = false;
let initialDistance;
let scrollLeft;

const mouseDown = (e) => {
    sliderPress = true;

    initialDistance = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

const mouseMove = (e) => {
    if(!sliderPress) {
        return;
    } 

    const space = e.pageX - slider.offsetLeft;
    const distanceTraveled = space - initialDistance;

    slider.scrollLeft = scrollLeft - distanceTraveled;
};

const mouseUp = (e) => {
    sliderPress = false;
};

slider.addEventListener('mousedown', mouseDown);
slider.addEventListener('mousemove', mouseMove);
slider.addEventListener('mouseup', mouseUp);
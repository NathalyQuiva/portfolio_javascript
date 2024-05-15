const slider = document.getElementById('slider');

let sliderPress = false;
let initialDistance;
let scrollLeft;

const mouseDown = (e) => {
    sliderPress = true;

    initialDistance = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    console.log('pageX', e.pageX);
    console.log('slider.offsetLeft', slider.offsetLeft);
    console.log('scrollLeft', slider.scrollLeft);
};

const mouseMove = (e) => {
    if(!sliderPress) {
        return;
    } 

    const space = e.pageX - slider.offsetLeft;
    const distanceTraveled = space - initialDistance;

    slider.scrollLeft = scrollLeft - distanceTraveled;
    console.log('sliderfinal', slider.scrollLeft);
};

const mouseUp = (e) => {
    sliderPress = false;
    console.log(" No presionado");
};

slider.addEventListener('mousedown', mouseDown);
slider.addEventListener('mousemove', mouseMove);
slider.addEventListener('mouseup', mouseUp);
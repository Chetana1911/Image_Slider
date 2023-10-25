const slides = document.querySelectorAll(".slide")
var counter = 0;

const goPrev = () => {
    if (counter === 0) {
        counter === slides.length - 1;
    } else {
        counter--;
    };
    slideImages();
};
const goNext = () => {
    if (counter === slides.length - 1) {
        counter === 0;
    } else {
        counter++;
    };
    slideImages();
};

const slideImages = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`

        }
    )
}
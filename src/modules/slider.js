const slider = () => {
    const slides = document.querySelectorAll('.item');
    let currentSlide = 0;

 
function nextSlide() {
    slides[currentSlide].className = 'item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'activeslide';
} 
setInterval(nextSlide,2000);
nextSlide()
}
export default slider
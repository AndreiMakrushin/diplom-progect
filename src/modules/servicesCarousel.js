const servicesCarousel = () => {
    const swiper = new Swiper(".mySwiper", {
       
        loop: true,
         
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },
        breakpoints:{
            1300:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            900:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            765:{
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
 
    });
}

export default servicesCarousel
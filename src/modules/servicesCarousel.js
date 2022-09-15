const servicesCarousel = () => {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,

        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },
    });
}

export default servicesCarousel
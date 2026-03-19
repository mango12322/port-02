const visualSwiper = new Swiper(".visual-swiper", {
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const onlineSwiper = new Swiper(".online-product-slider", {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".online-next",
    prevEl: ".online-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

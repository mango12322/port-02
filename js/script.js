const visualSwiper = new Swiper(".visual-swiper", {
  loop: true,
  slidesPerView: 1,

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
  spaceBetween: 10,
  autoplay: true,

  navigation: {
    nextEl: ".online-next",
    prevEl: ".online-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 4.5,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

const storeSwiper = new Swiper(".store-slider", {
  slidesPerView: 1.2,
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },

    768: {
      slidesPerView: 3,
    },
  },
});

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

dropdownToggle.addEventListener("click", () => {
  dropdown.classList.toggle("on");
});

const banner = document.querySelector(".banner");
const closeBox = document.querySelector("#check");
const closeBtn = document.querySelector(".banner-close span");

if (localStorage.getItem("hideBanner") === "true") {
  banner.style.display = "none";
}

closeBtn.addEventListener("click", () => {
  banner.style.display = "none";

  if (closeBox.checked) {
    localStorage.setItem("hideBanner", "true");
  }
});

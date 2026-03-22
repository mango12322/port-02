// Swiper
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

// banner remve
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

// dropdownToggle
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

dropdownToggle.addEventListener("click", () => {
  dropdown.classList.toggle("on");
});

// scroll
const navbox = document.querySelector(".navbox");
const initNavTop = navbox.offsetTop;
const navTop = navbox.offsetTop;
let lastScrollY = window.scrollY;
const bottomNav = document.querySelector(".bottom-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > initNavTop) {
    navbox.classList.add("fixed");
  } else {
    navbox.classList.remove("fixed");
  }

  const currentScrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (
    currentScrollY <= 0 ||
    currentScrollY + windowHeight >= documentHeight - 20
  ) {
    bottomNav.classList.remove("hide");
  } else if (currentScrollY > lastScrollY) {
    bottomNav.classList.add("hide");
  } else {
    bottomNav.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

// side-menu
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".side-overlay");
const sideCloseBth = document.querySelector(".side-close");
const bottomOnBtn = document.querySelector(".open-side");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "unset";
});

sideCloseBth.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "unset";
});
bottomOnBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

const sideBtns = document.querySelectorAll(".side-btn");

sideBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    const dropmenu = btn.parentElement.querySelector(".side-dropmenu");
    if (dropmenu) {
      dropmenu.classList.toggle("open");
    }
  });
});

// go-top
const topBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

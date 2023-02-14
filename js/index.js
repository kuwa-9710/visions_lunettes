// Swiperの初期化
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 44,
  grabCursor: true,

  breakpoints: {
    350: {
      slidesPerView: 1.2,
    },
    450: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    700: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    900: {
      slidesPerView: 2.8,
    },
    1025: {
      slidesPerView: "auto",
      spaceBetween: 55,
    },
  },
});

// headerの背景色を変更するメソッド
$(function () {
  $(window).on("scroll", function () {
    if ($(".mv").height() < $(this).scrollTop()) {
      $(".header").addClass("change-color");
    } else {
      $(".header").removeClass("change-color");
    }
  });
});

// スマホメニュー
$(function () {
  $(".header__nav__button").on("click", function () {
    $(".header__nav__button").toggleClass("active");
    $(".header__menu").toggleClass("active");
  });
});

//ローディングアニメーション
$(function () {
  $(".loader").delay(2500).fadeOut("slow");
  $(".loader__logo").delay(2300).fadeOut("slow");
  // $(".wrap").delay(3000).fadeIn("slow");
  if (window.matchMedia("(max-width: 1024px)").matches) {
  } else {
    $(".grasses").delay(4000).fadeIn("slow");
  }
});

/*
  GSAPのアニメーション関連は以下に記述
*/
gsap.registerPlugin(ScrollTrigger);

// news
gsap.from(".news__content", {
  x: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".news__content",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "news__content",    
  },
});

// about
gsap.from("#about__box__title", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about__box__title",
    start: "center 80%",
    toggleActions: "play none none none",
    id: "about__box__title",    
  },
});
gsap.from("#about__box__sub", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about__box__sub",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "about__box__sub",
  },
});
gsap.from(".about__title", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about__title",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "about__title",    
  },
});
gsap.from("#about__cta", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about__cta",
    start: "center 80%",
    toggleActions: "play none none none",
    id: "about__cta",    
  },
});
gsap.from("#about__thumbnail", {
  x: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about__thumbnail",
    start: "center 80%",
    toggleActions: "play none none none",
    id: "about__thumbnail",    
  },
});

// business
gsap.from(".business__title", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".business__title",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "business__title",    
  },
});
gsap.from(".business__content", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".business__content",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "business__content",    
  },
});
gsap.from("#business__box__title", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#business__box__title",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "business__box__title",    
  },
});
gsap.from("#business__box__text", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#business__box__text",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "business__box__text",    
  },
});
gsap.from("#business__thumbnail", {
  x: -100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#business__thumbnail",
    start: "center 80%",
    toggleActions: "play none none none",
    id: "business__thumbnail",    
  },
});
gsap.from("#business__cta", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#business__cta",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "business__cta",    
  },
});

// brand
gsap.from(".brand__title", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".brand__title",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "brand__title",    
  },
});

gsap.from(".brand__sub", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".brand__sub",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "brand__sub",    
  },
});

gsap.from(".brand__container", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".brand__container",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "brand__container",    
  },
});

gsap.from("#brand__thumbnail__box", {
  x: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#brand__thumbnail__box",
    start: "center 80%",
    toggleActions: "play none none none",
    id: "brand__thumbnail__box",    
  },
});

// recruit
gsap.from("#recruit__title", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#recruit__title",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "recruit__title",    
  },
});
gsap.from("#recruit__sub", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#recruit__sub",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "recruit__sub",    
  },
});
gsap.from("#recruit__text", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#recruit__text",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "recruit__text",    
  },
});
gsap.from("#recruit__buttons", {
  y: 50,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#recruit__buttons",
    start: "top 80%",
    toggleActions: "play none none none",
    id: "recruit__buttons",    
  },
});
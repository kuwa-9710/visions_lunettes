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
  if ($(".wrap").hasClass("top-page")) {
    $(window).on("scroll", function () {
      if ($(".mv").height() < $(this).scrollTop()) {
        $(".header").addClass("change-color");
      } else {
        $(".header").removeClass("change-color");
      }
    });
  } else {
    $(window).on("scroll", function () {
      if ($(".top").height() < $(this).scrollTop()) {
        $(".header").addClass("change-color");
      } else {
        $(".header").removeClass("change-color");
      }
    });
  }
});

// headerの背景色を変更するメソッド
// $(function () {
//   $(window).on("scroll", function () {
//     if ($(".top").height() < $(this).scrollTop()) {
//       $(".header").addClass("change-color");
//     } else {
//       $(".header").removeClass("change-color");
//     }
//   });
// });

// スマホメニュー
$(function () {
  $(".header__nav__button").on("click", function () {
    $(".header__nav__button").toggleClass("active");
    $(".header__menu").toggleClass("active");
  });
  $("header__nav__menu").on("click"),
    function () {
      if ($("header__nav__button").hasClass("active")) {
        $(".header__nav__button").toggleClass("active");
        $(".header__menu").toggleClass("active");
      }
    };
});

//ローディングアニメーション
$(function () {
  $(".loader").delay(2000).fadeOut("slow");
  $(".loader__logo").delay(1800).fadeOut("slow");
  if (window.matchMedia("(max-width: 1024px)").matches) {
  } else {
    $(".grasses").delay(2500).fadeIn("slow");
  }
});

/*
  GSAPのアニメーション関連は以下に記述
*/
gsap.registerPlugin(ScrollTrigger);

const fadeInRights = gsap.utils.toArray(".fadeInRight");

fadeInRights.forEach((fadeInRight) => {
  gsap.from(fadeInRight, {
    x: 100,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: fadeInRight,
      start: "top 80%",
      toggleActions: "play none none none",
      id: "fadeInRight",
    },
  });
});

const fadeInLefts = gsap.utils.toArray(".fadeInLeft");

fadeInLefts.forEach((fadeInLeft) => {
  gsap.from(fadeInLeft, {
    x: -100,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: fadeInLeft,
      start: "center 80%",
      toggleActions: "play none none none",
      id: "fadeInLeft",
    },
  });
});

const fadeInUps = gsap.utils.toArray(".fadeInUp");

fadeInUps.forEach((fadeInUp) => {
  gsap.from(fadeInUp, {
    y: 50,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: fadeInUp,
      start: "top 80%",
      toggleActions: "play none none none",
      id: "fadeInUp",
    },
  });
});

// about
gsap.from(".leaf", {
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".leaf",
    start: "center 80%",
    toggleActions: "play none none none",
    id: "leaf",
  },
});

// business
gsap.from(".leaf-white", {
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".leaf-white",
    start: "center 80%",
    toggleActions: "play none none none",
    id: "leaf-white",
  },
});

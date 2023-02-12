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
      slidesPerView: 1.5
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
    }
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
  $(".loader").delay(1500).fadeOut('slow');
  $(".loader__logo").delay(1200).fadeOut('slow');  
});

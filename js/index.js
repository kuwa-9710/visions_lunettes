// Swiperの初期化
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  breakpoints: {
    1025: {
      spaceBetween: 32,
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

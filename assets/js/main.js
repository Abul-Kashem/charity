// $(function () {

//   $(".popup-video").magnificPopup({
//     type: "iframe", // this is default type
//   });
// });

(function ($) {
  "use strict";

  $(".popup-video").magnificPopup({
    type: "iframe",
    // other options
  });

  // data border color
  $("[data-border-color]").each(function () {
    $(this).css("border-color", $(this).attr("data-border-color"));
  });

  // data bg color
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // data color
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  // data bg img


  // $("[data-bg-img]").each(function () {
  //   $(this).css("background-image", `url(${$(this).attr("data-bg-img")})`);
  // });

$("[data-bg-img]").each(function () {
    $(this).css("background-image", `url(${this.dataset.bgImg})`);
});

  // swiper slider

  var swiper = new Swiper(".ahncauses-slider-active", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".ahn-arrow-next",
      prevEl: ".ahn-arrow-prev",
    },
  });

  // ahn text slider

  var swiper = new Swiper(".ahn-text-slider-active", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freeMode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });
})(jQuery);

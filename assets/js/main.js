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

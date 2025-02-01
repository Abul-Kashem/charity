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
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
})(jQuery);

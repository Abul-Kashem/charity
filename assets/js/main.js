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
})(jQuery);

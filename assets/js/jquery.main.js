$(window).on("load", function () {
  // Hide and Seek Handles
  $(".show-form").on("click", function (e) {
    e.preventDefault();
    $("#form-wrapper").addClass("active");
    $("body").addClass("overflow-hidden");
    $(".close-overlay").removeClass("hide");
  });

  $(".article-show").on("click", function (e) {
    e.preventDefault();
    $("#article-wrapper").addClass("active");
    $("body").addClass("overflow-hidden");
    $(".close-overlay").removeClass("hide");
  });

  $(".close-overlay").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("hide");
    $("#form-wrapper").removeClass("active");
    $("#article-wrapper").removeClass("active");
    $("body").removeClass("overflow-hidden");
  });

  $(".article-wrapper").mCustomScrollbar({
    theme: "minimal-dark",
  });
});

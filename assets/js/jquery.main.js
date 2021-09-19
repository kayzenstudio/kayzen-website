// Show and Hide Form Handles
$("#show-form").on("click", function (e) {
  e.preventDefault();
  $("#form-wrapper").addClass("active");
  $(".close-overlay").removeClass("hide");
});

$(".close-overlay").on("click", function (e) {
  e.preventDefault();
  $(this).addClass("hide");
  $("#form-wrapper").removeClass("active");
  console.log("hide form");
});

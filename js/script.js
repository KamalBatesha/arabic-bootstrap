$(document).ready(function () {
  $("#back-to-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
});

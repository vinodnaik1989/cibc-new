$(function() {
  $(".dropdown").hover(
    function() { $(this).addClass('open') },
    function() { $(this).removeClass('open') }
  );
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var objectSelect = $("#sec2");
      var objectPosition = objectSelect.offset();
      if (scroll > objectPosition) {
        alert();
          $("header").addClass("head-font");
      } else {
          $("header").removeClass("head-font");
      }
  });
})


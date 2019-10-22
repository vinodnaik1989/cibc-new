// SMOOTH SCROLLING SECTIONS
$(document).ready(function(){
  var isIE11 = !!navigator.userAgent.match(/Trident\/7.0; rv 11/);


  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top-(-10)
            }, 1000);
            return false;
        }
    }
  });
  if(isIE11){
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
          $("#header").addClass("sticky");
      } else if(scroll < 200){
        $("#header").removeClass("sticky");
      }
    });
  }

   // $(window).resize(function() {
  //   $('iframe').height($(window).height());
  //   $('iframe').width($(window).width());
  // });

  // $(window).trigger('resize');
})

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
                 scrollTop: target.offset().top
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

  var nav = $("body");
  var content = $("#04").offset();
  var content2 = $('.left-imge').offset();
  var sol = $('.sol').offset();
  var news = $('.news').offset();
  // $( window ).resize(function() {
    $(window).scroll(function(){
      var screenPosition = $(document).scrollTop() + 10;
      if (screenPosition < content.top) {
        nav.removeClass( "lightcolor" );
      }
      if ((screenPosition >= content.top)) {
        nav.addClass("lightcolor");
      }
      if (screenPosition > content2.top) {
        nav.removeClass("lightcolor");
      }
      if (screenPosition >= sol.top) {
        nav.addClass("lightcolor");
      }
      if (screenPosition > news.top) {
        nav.removeClass("lightcolor");
      }
    });
    $( window ).resize(function() {
      $(window).scroll(function(){
        var screenPosition = $(document).scrollTop() + 100;
        if (screenPosition < content.top) {
          nav.removeClass( "lightcolor" );
        }
        if ((screenPosition >= content.top)) {
          console.log('1');
          nav.addClass("lightcolor");
        }
        if (screenPosition > content2.top) {
          console.log('2');
          nav.removeClass("lightcolor");
        }
        if (screenPosition >= sol.top) {
          console.log('3');
          nav.addClass("lightcolor");
        }
        if (screenPosition > news.top) {
          console.log('4');
          nav.removeClass("lightcolor");
        }
      });
    });
  // });

})

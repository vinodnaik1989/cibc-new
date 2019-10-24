// SMOOTH SCROLLING SECTIONS
$(document).ready(function(){

  // var isIE11 = !!navigator.userAgent.match(/Trident\/7.0; rv 11/);
  var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
  if(isIE11){
    console.log('ie 11');
    // $(document.body).css({'zoom':'175%'});
    // document.body.style.transform = 'scale(1.5)';
    // document.body.style.overflowX = 'hidden';
  }

  // $('a[href*=\\#]:not([href=\\#])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  //       || location.hostname == this.hostname) {

  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //          if (target.length) {
  //            $('html,body').animate({
  //                scrollTop: target.offset().top
  //           }, 1000);
  //           return false;
  //       }
  //   }
  // });

  // var nav = $("body");
  // var content = $("#04").offset();
  // var content2 = $('.left-imge').offset();
  // var sol = $('.sol').offset();
  // var news = $('.news').offset();
  // $( window ).resize(function() {
    // $(window).scroll(function(){
    //   var screenPosition = $(document).scrollTop() + 10;
    //   if (screenPosition < content.top) {
    //     nav.removeClass( "lightcolor" );
    //   }
    //   if ((screenPosition >= content.top)) {
    //     nav.addClass("lightcolor");
    //   }
    //   if (screenPosition > content2.top) {
    //     nav.removeClass("lightcolor");
    //   }
    //   if (screenPosition >= sol.top) {
    //     nav.addClass("lightcolor");
    //   }
    //   if (screenPosition > news.top) {
    //     nav.removeClass("lightcolor");
    //   }
    // });
    // $( window ).resize(function() {
    //   $(window).scroll(function(){
    //     var screenPosition = $(document).scrollTop() + 100;
    //     if (screenPosition < content.top) {
    //       nav.removeClass( "lightcolor" );
    //     }
    //     if ((screenPosition >= content.top)) {
    //       nav.addClass("lightcolor");
    //     }
    //     if (screenPosition > content2.top) {
    //       nav.removeClass("lightcolor");
    //     }
    //     if (screenPosition >= sol.top) {
    //       nav.addClass("lightcolor");
    //     }
    //     if (screenPosition > news.top) {
    //       nav.removeClass("lightcolor");
    //     }
    //   });
    // });
  // });

})

$(window).load(function() {
  $('#status').delay(500).fadeOut();
  $('#preloader').delay(500).fadeOut('slow');
  $('body').delay(850).css({'overflow':'visible'});
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 50){
    $('nav').addClass("sticky");
    $('#logo').removeClass("hidden");
  }
  else{
    $('nav').removeClass("sticky");
    $('#logo').addClass("hidden");
  }
});

$('#logo').hover(
  function(){
    $(this).addClass("animated rubberBand");},
  function(){
    $(this).removeClass("animated rubberBand")}
);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

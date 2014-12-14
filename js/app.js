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

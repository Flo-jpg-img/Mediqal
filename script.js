console.log($('.nav-link '))
$('.drop ').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay().fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay().fadeOut(500);
  });
  
$('.drop2 ').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay().fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay().fadeOut(500);
  });
  
  $(document).ready(function(){
    $('.responsive').slick({
      
      dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  prevArrow: false,
    nextArrow: false
    });
      
  })

 $('.boo').mouseover(function(){
   $('#titre_carte').addClass("couleur")
   $('.img1').addClass("img11")
   
 })
 $('.boo').mouseout(function(){
  $('#titre_carte').removeClass("couleur")
  $('.img1').removeClass("img11")

})

$('.boo1').mouseover(function(){
  $('#titre_carte1').addClass("couleur")
  $('.img2').addClass("img22")
})
$('.boo1').mouseout(function(){
 $('#titre_carte1').removeClass("couleur")
 $('.img2').removeClass("img22")
})

$('.boo2').mouseover(function(){
  $('#titre_carte2').addClass("couleur")
  $('.img3').addClass("img33")

})
$('.boo2').mouseout(function(){
 $('#titre_carte2').removeClass("couleur")
 $('.img3').removeClass("img33")
})
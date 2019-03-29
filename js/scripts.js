(function(){
  $('.banner').slick({
  	arrows: true,
  	dots: false,
  	// autoplay: true,
  	autoplaySpeed: 2000
  });

$('.slider-forg').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider-forg',
   dots: false,
   arrows: false,
   focusOnSelect: true,
   vertical: true



 });
 
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
// ======================
$('.members').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// =======================
// $('.members').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   arrows: true
// });
$('.tem-slider').slick({
  arrows: true,
  dots: false,
  fade: true,
  // autoplay: true,
  autoplaySpeed: 2000
});

// $('a.gallery').colorbox({rel:'gal'});
$('.latest-images').find('a').colorbox();
   
})(jQuery);
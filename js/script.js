$(function(){
    $( ".button_su_inner" ).mouseenter(function(e){
        var parentOffset = $(this).offset(); 
       
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
        $(this).prev(".su_button_circle").removeClass("desplode-circle");
        $(this).prev(".su_button_circle").addClass("explode-circle");
     
     });
     
     $( ".button_su_inner" ).mouseleave(function(e){
     
          var parentOffset = $(this).offset(); 
     
          var relX = e.pageX - parentOffset.left;
          var relY = e.pageY - parentOffset.top;
          $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
          $(this).prev(".su_button_circle").removeClass("explode-circle");
          $(this).prev(".su_button_circle").addClass("desplode-circle");
     
     });
    
     var mixer = mixitup('.marzuk');

     // Venobox
     new VenoBox();
})
$('.counter').counterUp({
     delay: 10,
     time: 1000
 });

 
$('.slider').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
     nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
     prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
     responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
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
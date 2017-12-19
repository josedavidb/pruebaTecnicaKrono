
$(document).ready(function(){

$('.center').slick({
centerMode: true,
  centerPadding: '250px',
  slidesToShow: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$(document).on("click",function(){
  console.log("Hola");
});
});
$('.header-slider').slick({
  dots:true,
  prevArrow:'<button type="button" class="header-slider_arrow header-slider_arrow--left"><span class="glyphicon glyphicon-chevron-left"></span></button>',
  nextArrow:'<button type="button" class="header-slider_arrow header-slider_arrow--right"><span class="glyphicon glyphicon-chevron-right"></span></button>',
  dotsClass: 'clearfix header-slider__dots'
});
$('.common-slider').slick({
dots:true,
arrows:false,
dotsClass: 'clearfix common-slider__dots'
});

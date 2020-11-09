document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  //slider
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    autoWidth: true,
    dots: true,
    responsive: {
      0: {
        items: 1.5,
        margin: 10,
      },
      768: {
        items: 3,
        margin: 15
      },
      1000: {
        margin: 20,
        items: 4
      }
    }
  });

  $('.slider__next').click(function() {
    owl.trigger('next.owl.carousel');
  })
  $('.slider__prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  
  //range
  var range = $(".range");
    
  range.each(function(i) {
    $(this).on('input', function() {
      $('.bar .fill')[i].style.width = this.value + '%';
    })
  })
});
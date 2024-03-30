
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    
    breakpoints: {
      992: {
        perpage: 4,
      },
      768: {
        perpage: 3,
      },
      400: {
        perpage: 2,

      },
    },

    perPage: 5,
    rewind: true,
    pagination: false,
  });
  splide.mount();
});




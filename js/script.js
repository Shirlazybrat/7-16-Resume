// Initialize Isotope with jQuery
// You can use Isotope as a jQuery plugin: $('selector').isotope().

$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('body').scrollspy({ target: '#bs-example-navbar-collapse-1' })
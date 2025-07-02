$(document).ready(function () {
  $('.nav-toggler').click(function (e) {
    e.preventDefault();
    $('.navbar-collapse').toggleClass('active');
    $('body').toggleClass('menu-open');
    $('.container1').toggleClass('active');
  });
});





document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
})
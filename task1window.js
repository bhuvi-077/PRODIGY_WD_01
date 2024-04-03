window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0.1) {
    navbar.style.backgroundColor='Rgb(0,255,0)'; // Change background color on scroll
  } else {
    navbar.style.backgroundColor= 'rgba(0,2555,0,0.5)'; // Reset background color
  }
});

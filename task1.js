window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

var navItems = document.querySelectorAll('.nav-item');
navItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.style.color = 'blue';
    });
    item.addEventListener('mouseout', function() {
        this.style.color = 'black';
    });
});

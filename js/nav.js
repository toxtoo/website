// JS nav
document.documentElement.className += ' js';
var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');
if (menuToggle && menu) {
    menuToggle.onclick = function() {
        if (menu.className === 'menu menu-open') {
            menu.className = 'menu';
            menuToggle.className = 'menu-toggle';
        } else {
            menu.className = 'menu menu-open';
            menuToggle.className = 'menu-toggle menu-active';
        }
    };
}
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('toggle_menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const menu = document.getElementById('menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
            menuToggle.style.display = 'none';
            menuClose.style.display = 'block';
        });

        menuClose.addEventListener('click', () => {
            menu.classList.remove('show');
            menuToggle.style.display = 'block';
            menuClose.style.display = 'none';
        });
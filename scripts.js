function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('toggle-theme');
    const themeIcon = document.getElementById('theme-icon');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            themeIcon.src = 'icons/LightMode.svg'; 
        } else {
            themeIcon.src = 'icons/DarkMode.svg';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    themeToggleButton.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const grids = document.querySelectorAll('.bento-grid ');
    let currentIndex = 0;

    document.getElementById('left').addEventListener('click', function() {
        if (currentIndex > 0) {
            grids[currentIndex].style.display = 'none';
            currentIndex--;
            grids[currentIndex].style.display = 'grid';
        }
    });

    document.getElementById('right').addEventListener('click', function() {
        if (currentIndex < grids.length - 1) {
            grids[currentIndex].style.display = 'none';
            currentIndex++;
            grids[currentIndex].style.display = 'grid';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    let currentPage = 0;

    function showPage(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
        updateButtons();
    }

    function updateButtons() {
        document.getElementById('prev').disabled = currentPage === 0;
        document.getElementById('next').disabled = currentPage === items.length - 1;
    }

    document.getElementById('prev').addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById('next').addEventListener('click', function() {
        if (currentPage < items.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Initial setup
    showPage(currentPage);
});

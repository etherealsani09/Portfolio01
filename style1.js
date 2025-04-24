let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Fungsi utk mengatur tema
    function setTheme(isDark) {
        if (isDark) {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggle.checked = true;
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.removeAttribute('data-theme');
            themeToggle.checked = false;
            localStorage.setItem('theme', 'light');
        }
    }
    
    // preferensi tema yang tersimpan
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        setTheme(true);
    } else if (savedTheme === 'light') {
        setTheme(false);
    } else {
        // check preferensi sistem jika tidak ada preferensi tersimpan
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(prefersDarkScheme.matches);
    }
    
    // event listener untuk toggle
    themeToggle.addEventListener('change', function() {
        setTheme(this.checked);
    });

    
const check = document.getElementById("click");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const menu = document.getElementById("menu");
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.content-section');

check.addEventListener("click", () => {
    if (check.checked) {
        header.style.backgroundColor = "#02153f";
        logo.style.color = "#fff";
        menu.style.color = "#fff";
    } else {
        header.style.backgroundColor = "transparent";
        logo.style.color = "#02153f";
        menu.style.color = "#02153f";
    }
});

// Function to show the selected section and hide the others
function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Event listeners for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('data-section');
        showSection(sectionId);
    });
});

// Show the home section by default
showSection('home');

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('click');
    const nav = document.querySelector('nav');
    
    function closeMenu() {
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    }

    let closeMenuTimeout;
    nav.addEventListener('mouseenter', () => {
        clearTimeout(closeMenuTimeout);
    });

    nav.addEventListener('mouseleave', () => {
        closeMenuTimeout = setTimeout(closeMenu, 3000); // Задаваме времето на 3 секунди
    });
});

// Utility functions to handle favorites
function addFavorite(item) {
    const favorites = document.querySelector('.favorites');
    const clone = item.cloneNode(true);
    clone.querySelector('.like-button').classList.add('liked');
    favorites.appendChild(clone);
    addLikeButtonEvent(clone.querySelector('.like-button'));
}

function removeFavorite(item) {
    const favorites = document.querySelector('.favorites');
    const itemId = item.getAttribute('data-id');
    const favoriteItem = favorites.querySelector(`.displayphotondlike[data-id="${itemId}"]`);
    if (favoriteItem) {
        favorites.removeChild(favoriteItem);
    }
}

function addLikeButtonEvent(button) {
    button.addEventListener('click', function () {
        this.classList.toggle('liked');
        const item = this.closest('.displayphotondlike');
        if (this.classList.contains('liked')) {
            addFavorite(item);
        } else {
            removeFavorite(item);
        }
    });
}

document.querySelectorAll('.like-button').forEach(addLikeButtonEvent);

document.querySelector("#toggleFavorites").addEventListener("click", function () {
    document.querySelector(".favorites").classList.toggle('favshow');
});

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const HiddenElements = document.querySelectorAll('.photodisplay');
HiddenElements.forEach((el) => observer1.observe(el));

document.getElementById("enterbtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector('.images').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('headnav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

    const toggleButton = document.getElementById('modetoggle');
    const divider = document.getElementById('line');
    const body = document.body;
    const icon = document.getElementById('icon');
    const text = document.getElementById('togtext');
    const headnav = document.getElementById('headnav');
    const herosec = document.querySelector('.maindiv');
    const writing = document.querySelector('.herowrite');

    const setDarkMode = () => {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        icon.src = 'icons/lightmode.png';
        text.innerText = 'Light mode';
        headnav.style.backgroundColor = 'black';
        headnav.style.borderBottom = 'solid 1px white';
        divider.style.backgroundColor = 'white';
        herosec.style.backgroundImage = "url('ART6-dark.JPG')";
        writing.style.color = 'white';
        localStorage.setItem('mode', 'dark-mode');
    };

    const setLightMode = () => {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        icon.src = 'icons/night-mode.png';
        text.innerText = 'Dark mode';
        headnav.style.backgroundColor = 'grey';
        headnav.style.borderBottom = 'solid 1px black';
        divider.style.backgroundColor = 'black';
        herosec.style.backgroundImage = "url('ART6-light.JPG')";
        writing.style.color = 'black';
        localStorage.setItem('mode', 'light-mode');
    };

    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark-mode') {
        setDarkMode();
    } else {
        setLightMode();
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            setDarkMode();
        } else {
            setLightMode();
        }
    });
});

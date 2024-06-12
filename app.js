document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
        const item = this.closest('.displayphotondlike');
        const favorites = document.querySelector('.favorites');

        if (this.classList.contains('liked')) {
            // Add item to favorites
            const clone = item.cloneNode(true);
            clone.querySelector('.like-button').classList.add('liked');
            favorites.appendChild(clone);
            addLikeButtonEvent(clone.querySelector('.like-button'));
        } else {
            // Remove item from favorites
            const itemId = item.getAttribute('data-id');
            const favoriteItem = favorites.querySelector(`.displayphotondlike[data-id="${itemId}"]`);
            if (favoriteItem) {
                favorites.removeChild(favoriteItem);
            }
        }
    });
});
document.querySelector(".favorites").addEventListener("click", function(event) {
    document.querySelector(".favorites").classList.toggle('shownav')
});

function addLikeButtonEvent(button) {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
        const item = this.closest('.displayphotondlike');
        const favorites = document.querySelector('.favorites');

        if (!this.classList.contains('liked')) {
            // Remove item from favorites
            const itemId = item.getAttribute('data-id');
            const favoriteItem = favorites.querySelector(`.displayphotondlike[data-id="${itemId}"]`);
            if (favoriteItem) {
                favorites.removeChild(favoriteItem);
            }
        }
    });
}

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

document.getElementById("enterbtn").addEventListener("click", function(event) {
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
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('modetoggle');
    const divider = document.getElementById('line');
    const body = document.body;
    const icon = document.getElementById('icon');
    const text = document.getElementById('togtext');
    const headnav = document.getElementById('headnav');
    const herosec = document.querySelector('.maindiv');
    const writing = document.querySelector('.herowrite');

    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
        if (savedMode === 'dark-mode') {
            icon.src = 'icons/lightmode.png';
            text.innerText = 'Light mode';
            headnav.style.backgroundColor = 'black';
            headnav.style.borderBottom = 'solid 1px white';
            divider.style.backgroundColor = 'white';
            herosec.style.backgroundImage = "url('ART6-dark.JPG')";
            writing.style.color = 'white';
        }
    } else {
        body.classList.add('light-mode');
        icon.src = 'icons/night-mode.png';
        text.innerText = 'Dark mode';
        headnav.style.backgroundColor = 'grey';
        headnav.style.borderBottom = 'solid 1px black';
        divider.style.backgroundColor = 'black';
        herosec.style.backgroundImage = "url('ART6-light.JPG')";
        writing.style.color = 'black';
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            icon.src = 'icons/lightmode.png';
            text.innerText = 'Light mode';
            headnav.style.backgroundColor = 'black';
            headnav.style.borderBottom = 'solid 1px white';
            divider.style.backgroundColor = 'white';
            herosec.style.backgroundImage = "url('ART6-dark.JPG')";
            writing.style.color = 'white';
            localStorage.setItem('mode', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            icon.src = 'icons/night-mode.png';
            text.innerText = 'Dark mode';
            headnav.style.backgroundColor = 'grey';
            headnav.style.borderBottom = 'solid 1px black';
            divider.style.backgroundColor = 'black';
            herosec.style.backgroundImage = "url('ART6-light.JPG')";
            writing.style.color = 'black';
            localStorage.setItem('mode', 'light-mode');
        }
    });
});
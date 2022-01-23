/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabcontent => {
            tabcontent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".portfolio__container", {
    effect: "coverflow",
    grbCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 35,
    loop: true,
    coverflowEffect: {
        rotate: 0,
    },

});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
        // When the scroll is greater than  viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const up = document.getElementById('Up')
        // When the scroll is greater than  viewport height, add the scroll-up class to the scrool tag
    if (this.scrollY >= 80) up.classList.add('show-scrool');
    else up.classList.remove('show-scrool')
}
window.addEventListener('scroll', scrollUp)



/*==================== SCROLL SMOOTH ====================*/
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a.smooth").on('click', function(event) {

        var hash = this.hash;
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "1") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*==================== WAIT TO LOAD PAGE ====================*/
window.onload = function() {
    setTimeout(function() {
        document.getElementById('body').style.opacity = "100";
        document.getElementById('fade').style.opacity = "100";
    }, 200);
}



/*==================== EFFECT TYPE ====================*/
const textDisplay = document.getElementById('text')
const phrases = ['I am Simone', 'I love to code.', 'My hobby is photography.']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i === phrases.length) {
                i = 0
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()
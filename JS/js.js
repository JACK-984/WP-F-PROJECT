$('.collaspe-btn').click(function(e) {
    $('.collapse').collapse('hide');
});
$('.hamburger-menu').click(function(e) {
    $('.collapse').collapse('hide');
}); // switch state for document loading and completed loading states

// window on load event for loading screen
// while window is still loading
// scrolling is disabled
document.body.classList.add('loading');
const loader = document.querySelector('.loading-screen');
window.addEventListener('load', () => {
        // loader.style.display = "none";
        loader.classList.add('transition');
        // once document is fully loaded enables scrolling
        document.body.classList.remove('loading');
    })
    // audio player
const audioBtn = document.querySelector('.audio-btn');
const audio = document.querySelector('.audio');
const audioIcon = document.querySelector('.audio-icon');
const audioImg = document.querySelector('.audio-img');
let isPaused = true;
audioBtn.addEventListener('click', () => {
    if (isPaused) {
        audio.play();
        audioIcon.classList.remove('fa-play');
        audioIcon.classList.add('fa-pause');
        audioImg.classList.add('active');
        isPaused = false;
    } else {
        audio.pause();
        audioIcon.classList.remove('fa-pause');
        audioIcon.classList.add('fa-play');
        audioImg.classList.remove('active');
        isPaused = true;
    }
})

const darkThemeBtn = document.querySelector(".dark-mode_btn");
const darkIcon = document.querySelector(".dark-icon");
const collapseClass = document.querySelectorAll(".collapse");
const MAX768 = window.matchMedia("(max-width: 768px)");
const MIN768 = window.matchMedia("(min-width: 768px)");
const navBtn = document.querySelector(".nav-btn");
const nav = document.getElementById("nav-container");
const carouselNext = document.querySelector(".carousel-control-next");
const carouselPrev = document.querySelector(".carousel-control-prev");
const carouselIndicators = document.querySelector(".carousel-indicators");

// logo mouseOver event
const logo = document.getElementById("logo")
const logoName = document.querySelector(".logo-name")
logo.addEventListener("mouseover", () => {
    logoName.innerHTML = "Move up";
})
logo.addEventListener("mouseleave", () => {
    logoName.innerHTML = "Cube-64";
})

// hamburger menu 
const navMenu = document.getElementById("nav-menu");
const hamBurgerMenu = document.querySelector(".hamburger-menu");
const overLayNav = document.querySelector(".overlay");
hamBurgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamBurgerMenu.classList.toggle("active");
    nav.classList.toggle("active");
    overLayNav.classList.toggle("active");
    document.body.classList.toggle("active");
})

// >= 768px media query for collapse class animation change
function collapseChange() {
    collapseClass.forEach(collapse => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            collapse.classList.add("collapse-horizontal");
        } else if (window.matchMedia("(min-width: 768px)").matches) {
            collapse.classList.remove("collapse-horizontal");
        }
    });
}
collapseChange();
// calls the collapseChange() when the window is resized
window.addEventListener("resize", collapseChange);
// darkTheme function
darkThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode"); //toggle darkMode on body
    // carouselNext.classList.toggle("active");
    // carouselPrev.classList.toggle("active");
    // carouselIndicators.classList.toggle("active");
    if (darkIcon.classList.contains("fa-moon")) {
        darkIcon.classList.remove("fa-moon");
        darkIcon.classList.add("fa-sun");
    } else {
        darkIcon.classList.remove("fa-sun");
        darkIcon.classList.add("fa-moon");
    }
})

// hover for each product 

const allProduct = document.querySelectorAll(".each-product");
const eachProduct = document.querySelector(".each-product");
const priceInfo = document.querySelector(".price-info");
const learnMore = document.querySelector(".learn-more");
allProduct.forEach(product => {
        product.addEventListener('mouseover', () => {
            product.classList.add('active')
        })
        product.addEventListener('mouseleave', () => {
            product.classList.remove('active')
        })
    })
    // products section
const featuredBtn = document.querySelector('.featured-btn');
const forYouBtn = document.querySelector('.forYou-btn');
const featuredSection = document.querySelector('.featured-section');
const forYouSection = document.querySelector('.forYou-section');
let featuredOpen = false;
// let forYouOpen = true;
featuredBtn.addEventListener('click', () => {
    if (featuredOpen === false) {
        forYouBtn.classList.remove('active');
        featuredBtn.classList.add('active');
        forYouSection.classList.remove('show');
        featuredSection.classList.remove('hide');
        forYouSection.classList.add('hide');
        featuredSection.classList.add('show');
        featuredOpen = true;
    }
    if (featuredOpen === true) {
        forYouBtn.addEventListener('click', () => {
            featuredBtn.classList.remove('active');
            forYouBtn.classList.add('active');
            forYouSection.classList.remove('hide');
            featuredSection.classList.remove('show');
            forYouSection.classList.add('show');
            featuredSection.classList.add('hide');
            featuredOpen = false;
        })
    }
})


// accordian footer
const supBtn = document.querySelector('.support .accord-btn');
const abtBtn = document.querySelector('.about-us .accord-btn');
const footerCon = document.querySelectorAll('.footer-container');
const supAccord = document.querySelector('.support .footer-accord');
const abtAccord = document.querySelector('.about-us .footer-accord');
// supBtn.addEventListener('click', () => {
//     supAccord.classList.toggle('show')
//     abtAccord.classList.remove('show');
// })
// abtBtn.addEventListener('click', () => {
//     abtAccord.classList.toggle('show');
//     supAccord.classList.remove('show');
// })

footerCon.forEach(footer => {
    footer.addEventListener('click', () => {
        footer.classList.toggle('active');
    })
})

// team box socials 
const teamBox = document.querySelectorAll('.team-box');
const teamSocials = document.querySelector('.team-socials');

teamBox.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('active');
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('active');
    })
})
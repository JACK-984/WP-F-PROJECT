// selects all the .collapse-btn classes
// makes it so that when you click a collapse
// it will close the other collapses
$('.collaspe-btn').click(function(e) {
    $('.collapse').collapse('hide');
});
$('.hamburger-menu').click(function(e) {
    $('.collapse').collapse('hide');
});

// switch state for document loading and completed loading states
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
        // if audio is paused click listener will enable
        // audio to play when it is clicked
        audio.play();
        audioIcon.classList.remove('fa-play');
        audioIcon.classList.add('fa-pause');
        audioImg.classList.add('active');
        isPaused = false;
    } else {
        // if audio is not paused click listener will enable
        // audio to pause when it is clicked
        audio.pause();
        audioIcon.classList.remove('fa-pause');
        audioIcon.classList.add('fa-play');
        audioImg.classList.remove('active');
        isPaused = true;
    }
})


const collapseClass = document.querySelectorAll(".collapse");
const MAX768 = window.matchMedia("(max-width: 768px)");
const MIN768 = window.matchMedia("(min-width: 768px)");


// 3 unused variables
const navBtn = document.querySelector(".nav-btn");
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
const nav = document.getElementById("nav-container");
let burgerOpen = false;
hamBurgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamBurgerMenu.classList.toggle("active");
    nav.classList.toggle("active");
    overLayNav.classList.toggle("active");
    document.body.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
        burgerOpen = true;
    } else {
        burgerOpen = false;
    }
    // document.body.classList.toggle("active");
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
const darkThemeBtn = document.querySelector(".dark-mode_btn");
const darkIcon = document.querySelector(".dark-icon");
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
    if (!featuredOpen) {
        forYouBtn.classList.remove('active');
        featuredBtn.classList.add('active');
        forYouSection.classList.remove('show');
        featuredSection.classList.remove('hide');
        forYouSection.classList.add('hide');
        featuredSection.classList.add('show');
        featuredOpen = true;
    }
    if (featuredOpen) {
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

footerCon.forEach(footer => {
    footer.addEventListener('click', () => {
        footer.classList.toggle('active');
    })
})

// team box socials 
const teamBox = document.querySelectorAll('.team-box');
const teamSocials = document.querySelector('.team-socials');

teamBox.forEach(box => {
    // when hovered will show social links
    box.addEventListener('mouseover', () => {
            box.classList.add('active');
        })
        // when not in hover state will remove social links
    box.addEventListener('mouseleave', () => {
        box.classList.remove('active');
    })
})


// contact section
const contactBtn = document.querySelector('.contact-btn');
const backBtn = document.querySelector('.back-btn');
const contactContainer = document.querySelector('.contacts-container');
const collapse = document.querySelectorAll('.collapse');
// makes it so that when you open contact section
// if collapse is open it will auto close the collapse
$('.contact-btn').click(function(e) {
    $('.collapse').collapse('hide');
});

function contactChange() {
    contactBtn.addEventListener('click', () => {
        if (burgerOpen && window.matchMedia("(max-width: 768px)").matches) {
            contactContainer.classList.add('active');
            navMenu.classList.toggle("active");
            hamBurgerMenu.classList.toggle("active");
            nav.classList.toggle("active");
            overLayNav.classList.toggle("active");
            document.body.classList.toggle('active');
            document.body.classList.add('active');
            if (navMenu.classList.contains('active')) {
                burgerOpen = true;
            } else {
                burgerOpen = false;
            }
        } else {
            contactContainer.classList.add('active');
            document.add('active');
        }
    })
    backBtn.addEventListener('click', () => {
        document.body.classList.remove('active');
        contactContainer.classList.remove('active');
    })
}
contactChange();
window.addEventListener("resize", contactChange);


// section button function
$('.section-btn').click(function(e) {
    $('.collapse').collapse('hide');
});
const sectionBtn = document.querySelectorAll('.section-btn');

function OverlayChange() {
    sectionBtn.forEach(button => {
        button.addEventListener('click', () => {
            if (burgerOpen && window.matchMedia("(max-width: 768px)").matches) {
                navMenu.classList.toggle("active");
                hamBurgerMenu.classList.toggle("active");
                nav.classList.toggle("active");
                overLayNav.classList.toggle("active");
                document.body.classList.toggle('active');
                if (navMenu.classList.contains('active')) {
                    burgerOpen = true;
                } else {
                    burgerOpen = false;
                }
            }
        })
    })
}
OverlayChange();
// when window resizes call the OverlayChange()
window.addEventListener('resize', OverlayChange);

// buggy code

// sectionBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         if (burgerOpen && window.matchMedia("(max-width: 768px)").matches) {
//             navMenu.classList.toggle("active");
//             hamBurgerMenu.classList.toggle("active");
//             nav.classList.toggle("active");
//             overLayNav.classList.toggle("active");
//             document.body.classList.toggle('active');
//             if (navMenu.classList.contains('active')) {
//                 burgerOpen = true;
//             } else {
//                 burgerOpen = false;
//             }
//         }
//     })
// })
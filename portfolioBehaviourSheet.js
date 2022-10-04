/* =================================================================
* Template for JS
* 
* Template:    Internal Projects - HTML Website Template
* Author:      Thomas Hawkins
* URL:         no live link yet
*
================================================================= */

// Table of Content
// =================
// Detect browser
// Detect mobile device
// Page transitions
// Smooth Scrollbar
// Magic cursor
// Image lazy loading
// Header tools
// Main menu (classic)
// Overlay menu
// tt-Search
// Portfolio slider (full screen slider)
// Portfolio carousel (full screen carousel)
// Content carousel
// Testimonials slider
// Isotope
// lightGallery (lightbox plugin)
// Page header
// GSAP ScrollTrigger plugin
// Portfolio list
// Portfolio interactive
// Portfolio grid
// tt-Gallery
// tt-Accordion
// tt-Tabs
// Page nav
// Sidebar
// Sliding sidebar
// Scrolling text
// Scroll between anchors
// Scroll to top
// Defer videos (Youtube, Vimeo)
// Forms
// Miscellaneous 
//

// Table of Content
// =================
//Name Card Border animation
//Scroll Down reminder
//menu interaction
//Thumbnail interactions






// ========================================
// Name Card Border Animation
// ========================================

//Get variables from <body>
const titleContainer = document.getElementById("titleSection");
const borderAnimationHover = document.getElementById("titleCard");

const topBorder = titleContainer.getElementsByClassName("tlBorder")[0];
const bottomBorder = titleContainer.getElementsByClassName("brBorder")[0];

//Animation function
borderAnimation = () =>{

    borderAnimationPlay=()=>{
        
        topBorder.style.animationPlayState = "running";
        bottomBorder.style.animationPlayState = "running";
        
        topBorder.classList.add("tlChanged");
        bottomBorder.classList.add("brChanged"); 
        
        topBorder.classList.remove("topAnimate");
        bottomBorder.classList.remove("bottomAnimate")
        setTimeout(function(){
            topBorder.classList.add("topAnimate"); 
            bottomBorder.classList.add("bottomAnimate")
            , 1000
        });
         
    }

    reverseBorderAnimationPlay=()=>{
        topBorder.style.animationDirection = "reverse";
        bottomBorder.style.animationDirection = "reverse";

        topBorder.classList.remove("tlChanged");
        bottomBorder.classList.remove("brChanged"); 

        topBorder.classList.remove("topAnimate");
        bottomBorder.classList.remove("bottomAnimate");
        setTimeout(function(){
            topBorder.classList.add("topAnimate"); 
            bottomBorder.classList.add("bottomAnimate");
            
        },1500);

    }

    let reverse = false;
    if(reverse===false)
    {
        borderAnimationHover.onmouseover = borderAnimationPlay;
        reverse = true;
    } else {
        borderAnimationHover.onmouseover = reverseBorderAnimationPlay;
        reverse = false;
    }

    topBorder.animationName="";
    bottomBorder.animationName="";
    
}
borderAnimationHover.onmouseover = borderAnimation;

// ========================================
// Scroll Down Reminder Animation
// ========================================

//Find element from document
const scrollDown = document.getElementsByClassName("scrollReminder")[0];

let intervalTime = 5000;
let timeoutTime = 1000;
function shakeScrollReminder(){
    setTimeout(function(){
    scrollDown.style.transform= "translate(10px,0px)";
    }, timeoutTime);
    setTimeout(function(){
        scrollDown.style.transform= "translate(0px,0px)";
        }, (timeoutTime+200));
}

let scrollshake = setInterval( shakeScrollReminder, intervalTime);

scrollDown.onmouseover = function(){
    clearInterval(scrollshake);
}
scrollDown.onmouseleave = function(){
    scrollshake = setInterval( shakeScrollReminder, intervalTime);
}

function scrollReminderAction(){
    if(window.pageYOffset> 400){
        scrollDown.classList.add("scrollBarGone");
    } else if (window.pageYOffset<400){
        scrollDown.classList.remove("scrollBarGone");
    }
}
window.onscroll= scrollReminderAction;

scrollDown.addEventListener("click",function(){
    let scrollSpeed = 5 ;
    var i = 10;
    var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 1150) clearInterval(int);
  }, scrollSpeed);
})

// ========================================
// Menu interactions
// ========================================

//set menu var from body

let navMenuContainer = document.getElementById("headerNav");
let menuNav = document.getElementById("mainMenuText");
let altMenuNav = document.getElementById("menuAltText");


menuHover = () => {
    altMenuNav.classList.add("menuAltTextHover");
    menuNav.classList.add("menuHover")
}
menuNormal = () => {
    altMenuNav.classList.remove("menuAltTextHover");
    menuNav.classList.remove("menuHover")
}
navMenuContainer.onmouseover = menuHover;
navMenuContainer.onmouseleave = menuNormal;

// ========================================
// Social icon interactions
// ========================================

// Get icon and hidden icons from body.

let socialHover = document.getElementById("socialTags");
let footerNavBarDOM = document.getElementById("footerNavid");


socialHoverChange = () =>{
    socialHover.classList.add("socialChanges");
    footerNavBarDOM.classList.add("socialSymbolChanges");
    
}
reveSocialHoverChange=()=>{
    socialHover.classList.remove("socialChanges");
    footerNavBarDOM.classList.remove("socialSymbolChanges");
}

socialHover.onmouseover = socialHoverChange;
footerNavBarDOM.onmouseleave = reveSocialHoverChange;

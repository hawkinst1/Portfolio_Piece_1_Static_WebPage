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
//Name Card Border animation
//Logo Glow
//Scroll Down reminder
//menu interaction
//menu expand on click
//Thumbnail interactions
//Back to top press
//Line transition
//Contact hover effect



// ========================================
// Name Card Border Animation
// ========================================

//Get variables from <body>
/* const titleContainer = document.getElementById("titleSection");
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
 */


// ========================================
// Logo Glow
// ========================================

const logoImage = document.getElementsByClassName("homepage__container_portfolio_img")[0];
let isGlowing = false;

const MakeLogoGlow = () => {
    if((window.innerWidth >= 300) && (window.innerHeight <= 1200)){
        return null;
    }
    if(isGlowing){        
        logoImage.classList.remove("logo-glow-effects");
        isGlowing = false
    } else{    
        logoImage.classList.add("logo-glow-effects");
        isGlowing = true;
    }
}

logoImage.onmouseover = MakeLogoGlow;
logoImage.onmouseleave = MakeLogoGlow;

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

 window.onscroll =scrollReminderAction = () =>{
    if(window.pageYOffset> 400){
        scrollDown.classList.add("scrollBarGone");
    } else if (window.pageYOffset<400){
        scrollDown.classList.remove("scrollBarGone");
    }
}

const documentHeight = document.body.scrollHeight;


scrollDown.onmouseup = () => {
    window.scrollTo({ 
        top: documentHeight,
        behavior:"smooth"
    })
}


// ========================================
// Menu interactions
// ========================================

//set menu var from body

let navMenuContainer = document.getElementsByClassName("Homepage__container-header-navBar_nav")[0];
let menuNav = document.getElementById("navBar-menu");
let altMenuNav = document.getElementById("navbar-expand");


menuHover = () => {
    menuNav.classList.add("Homepage__container-header-navBar_navHover");
    altMenuNav.classList.add("Homepage__container-header-navBar_navHoverExpand")
}
menuNormal = () => {
    menuNav.classList.remove("Homepage__container-header-navBar_navHover");
    altMenuNav.classList.remove("Homepage__container-header-navBar_navHoverExpand")
}
navMenuContainer.onmouseover = menuHover;
navMenuContainer.onmouseleave = menuNormal;

// ========================================
// menu expand on click effect
// ========================================

//each menu item needs to move out further than its previous
const menuClicker = document.getElementById("navbar-expand");
const menuItems = document.getElementsByClassName("menuItemsText");
const sizeOfScreen = window.innerWidth;
let menuOpen = false;
// Holders for the loop distances for each menu item.

let loopCounter = 0;
const distanceholder = () =>{
  
    switch(loopCounter){
        case 0:
            return distanceCalculator(sizeOfScreen);
        case 1:
            return distanceCalculator(sizeOfScreen) +35;
        case 2:
            return distanceCalculator(sizeOfScreen) + 70;
    }
}

const distanceCalculator = (windowSize) =>{
    if(windowSize >= 1600 && windowSize < 1900){
        return 180
    } else if (windowSize > 2000){
        return 300
    }
}

const menuDistanceIterator=()=>{
    let percentHolder = "%";
    let stringDistanceHolder = distanceholder().toString(); // decides the distance to move based on loop number and returns a string
    let menuItemMovementString = stringDistanceHolder+percentHolder;

    return menuItemMovementString;
}
function menuShutter(){
    menuOpen = false;
    menuClicker.innerHTML ="Expand";

        for (menuText of menuItems){
            menuText.style.removeProperty("left"); // reset the position to its initial css value.
            menuText.style.opacity = "0";       
        }  
}
function menuOpener(){
    menuOpen = true;
    menuClicker.innerHTML ="Collapse";
  
        for (menuText of menuItems){       
            menuText.style.left = menuDistanceIterator(); // depending on position in loop different values required
            menuText.style.opacity = "1";       
            loopCounter++;
        }  
    
}
// check the menu to see if it is open or closed 
menuItemSweep=()=>{
    loopCounter = 0;
    if(!menuOpen){    
        menuOpener(); // menu is closed so move to open       
    } else {      
        menuShutter(); // menu is open so move to close
   }
}
// go to checker of menu status
menuClicker.onmouseup = menuItemSweep;


// ========================================
// Social icon interactions
// ========================================

// Get icon and hidden icons from body.

let socialHover = document.getElementById("socialTags");
let footerNavBarDOM = document.getElementById("footerNavid");

socialHoverChange = () =>{
    socialHover.classList.add("footer__socialMedia_change");
    footerNavBarDOM.classList.add("footer__socialMedia_change-icons");
    
}
reveSocialHoverChange=()=>{
    socialHover.classList.remove("footer__socialMedia_change");
    footerNavBarDOM.classList.remove("footer__socialMedia_change-icons");
}

socialHover.onmouseover = socialHoverChange;
footerNavBarDOM.onmouseleave = reveSocialHoverChange;

// ========================================
// Back to Top interactions
// ========================================

//get variables from body

let backtoTopbtn = document.getElementById("returnToTop");

scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // need to add throttling
}
backtoTopbtn.onmouseup = scrollUp;

// ========================================
// Line transition effect
// ========================================

// get line class
const lineDiv = document.getElementsByClassName("lineholder")[0];

lineStretcher=()=>{
if(window.pageYOffset > 1650){
    lineDiv.classList.add("lineholderChange");
}
}
 window.addEventListener("scroll",lineStretcher);
 
// ========================================
// Contact hover effect
// ========================================

const contactWindow = document.getElementsByClassName("Homepage__container-footer_Contact")[0];

const contactWindowChange = ()=>{
   
   if((window.innerWidth >= 300) && (window.innerHeight <= 1200)){ 
       return null;
    }
    contactWindow.classList.add("Homepage__container-footer_Contact-hover");
    
}
const removeclass = ()=> {
 
    if((window.innerWidth >= 300) && (window.innerHeight <= 1200)){
       //window is bigger than 300 and smaller than 1200
       return null;        
    }
    contactWindow.classList.remove("Homepage__container-footer_Contact-hover");
}

    contactWindow.addEventListener("mouseover", contactWindowChange);
    contactWindow.addEventListener("mouseleave",removeclass); 



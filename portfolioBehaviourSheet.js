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

 window.onscroll =scrollReminderAction = () =>{
    if(window.pageYOffset> 400){
        scrollDown.classList.add("scrollBarGone");
    } else if (window.pageYOffset<400){
        scrollDown.classList.remove("scrollBarGone");
    }
}


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
// menu expand on click effect
// ========================================

//each menu item needs to move out further than its previous
const menuClicker = document.getElementById("menuAltText");
const menuItems = document.getElementsByClassName("menuItemsText");
let menuOpen = false;
// Holders for the loop distances for each menu item.

let loopCounter = 0;

const distanceholder = () =>{
    
    switch(loopCounter){
        case 0:
            return 2;
        case 1:
            return 7.7;
        case 2:
            return 12;
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
       menuText.style.right = "0"; // reset the position to its initial css value.
       menuText.style.opacity = "0";
    }  
}
function menuOpener(){
    menuOpen = true;
    menuClicker.innerHTML ="Collapse";
    for (menuText of menuItems){
        menuText.style.right = menuDistanceIterator(); // depending on position in loop different values required
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
    socialHover.classList.add("socialChanges");
    footerNavBarDOM.classList.add("socialSymbolChanges");
    
}
reveSocialHoverChange=()=>{
    socialHover.classList.remove("socialChanges");
    footerNavBarDOM.classList.remove("socialSymbolChanges");
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

const contactWindow = document.getElementsByClassName("footerContact")[0];

const contactWindowChange = ()=>{
    contactWindow.classList.add("contactTransition");
}
const removeclass = ()=> {
    contactWindow.classList.remove("contactTransition");
}

contactWindow.addEventListener("mouseover", contactWindowChange);
contactWindow.addEventListener("mouseleave",removeclass); //should be able to chain together?


let body = document.body;
let cursor = document.querySelector("#cursor");
function cursorMovement(dets) {
  cursor.style.display = "block";
  cursor.style.top = `${dets.clientY}px`;
  cursor.style.left = `${dets.clientX}px`;
  cursor.style.transition = "all 100ms linear";
}
function touchMovement(ev) {
  //   console.log("tocuh");
  cursor.style.left = `${ev.touches[0].clientX}px`;
  cursor.style.top = `${ev.touches[0].clientY}px`;
  cursor.style.transition = "all 0.2s linear";
}
function cursorScaleUp() {
  cursor.style.transform = "scale(3)";
  //   console.log("hello")
}
function cursorScaleDown() {
  cursor.style.transform = "scale(1)";
}
document.addEventListener("load", cursorMovement);
document.addEventListener("mousemove", cursorMovement);
document.addEventListener("touchstart", touchMovement);
let navImg = document.querySelector("nav img");
let navCart = document.querySelector("nav p");
let navHam = document.querySelector("nav .hamburger");
navImg.addEventListener("mouseenter", cursorScaleUp);
navImg.addEventListener("mouseleave", cursorScaleDown);
navCart.addEventListener("mouseenter", cursorScaleUp);
navCart.addEventListener("mouseleave", cursorScaleDown);
navHam.addEventListener("mouseenter", cursorScaleUp);
navHam.addEventListener("mouseleave", cursorScaleDown);
let exploreImages = document.querySelectorAll(".explore .images");
exploreImages[0].addEventListener("mouseenter", cursorScaleUp);
exploreImages[0].addEventListener("mouseleave", cursorScaleDown);
exploreImages[1].addEventListener("mouseenter", cursorScaleUp);
exploreImages[1].addEventListener("mouseleave", cursorScaleDown);


let footerWrap=document.querySelectorAll("footer .wrap");
for(let i=0;i<footerWrap.length;i++){
  footerWrap[i].addEventListener("mouseover",cursorScaleUp);
  footerWrap[i].addEventListener("mouseleave",cursorScaleDown);
}

// SLIDER COED GOES HERE
// let slide = document.querySelector(".slide");
// let cont3 = document.querySelector(".cont3");
// let x = 0;
// let pressed = false;
// slide.addEventListener("mousedown", pressedTrue);
// slide.addEventListener("mouseup", pressedFalse);
// slide.addEventListener("mousemove",draggingSlider);
// slide.addEventListener("touchstart", pressedTrue);
// slide.addEventListener("touchend", pressedFalse);
// slide.addEventListener("touchmove", draggingSlider);
// function pressedTrue(){
//   pressed=true;
// }
// function pressedFalse(){
//   pressed=false;
// }
// function draggingSlider(ev) {
//   if (pressed) {
//     if (event.type === "mousemove") {
//       slide.style.transform = `translateX(${ev.clientX}px)`;
//     } else {
//       slide.style.transform = `translateX(${ev.touches[0].clientX}px)`;
//     }
//   }
// }
// SLIDER COED GOES HERE
const onmouse = document.getElementById('navToggle'),
      onmousemanu = document.getElementById('navManu'),
      onmouseclose= document.getElementById('toggleclose');
onmouse.addEventListener('click',()=>{
onmousemanu.classList.toggle('nActive');
});

onmouseclose.addEventListener('click',()=>{
onmousemanu.classList.remove('nActive');
});

const navLink = document.querySelectorAll('.nav-itm');

function linkAction(){
    onmousemanu.classList.remove('nActive');
};

navLink.forEach(n => n.addEventListener('click',linkAction));

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["PhotoShop Expert", "UI / UX Designer", "Graphics Designer", "Illustratior Expert"];
const typingDelay = 40;
const erasingDelay = 40;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
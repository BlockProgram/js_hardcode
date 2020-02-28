const title = document.querySelector("div h1"); 

const frame = document.querySelector("div"); 
const maxHeight = frame.clientHeight; 
const maxWidth  = frame.clientWidth; 

title.style.position = "relative"; 
let topPos  = 0; 
let leftPos = 0; 
let forceHeight = -2; 
let forceWidth  = -2; 

function animation() {  
    if (topPos == 0) { forceHeight *= -1 } 
    else if (topPos == maxHeight - title.offsetHeight) { forceHeight *= -1 }

    if (leftPos == 0) { forceWidth *= -1 }  
    else if (leftPos == maxWidth - title.offsetWidth) { forceWidth *= -1 } 

    topPos  += forceHeight; 
    leftPos += forceWidth; 

    title.style.top  = topPos + "px"; 
    title.style.left = leftPos + "px";

    requestAnimationFrame(animation); 
} 

requestAnimationFrame(animation); 
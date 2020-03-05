const input = document.querySelector("input"); 

input.addEventListener("focus", function() {  
    input.style.backgroundColor = "pink"; 
}); 

input.addEventListener("blur", function() {  
    input.style.backgroundColor = "#fff"; 
}); 

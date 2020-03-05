let b         = [2, 5, 54, 493]; 
const divHtml = document.querySelector(".calc-wrapper"); 
const firstP  = document.createElement("p"); 
const secondP = document.createElement("p"); 
const thirdP  = document.createElement("p"); 


function mapIt(element) {  
   return element.map(number => number * number); 
} 
divHtml.appendChild(firstP); 
firstP.innerHTML = mapIt(b);


 function filterIt(element) {  
     return element.filter(number => number * number === 25); 
 } 

 divHtml.appendChild(secondP); 
secondP.innerHTML = filterIt(b);


 function reduceIt(element) {  
     return element.reduce((total, n) => total += n)
 } 

 divHtml.appendChild(thirdP); 
thirdP.innerHTML = reduceIt(b);


let phrase = "honey badger".split("");
for (let i = 0; i < phrase.length; i++) { 
    console.log(phrase[i]); 
 } 
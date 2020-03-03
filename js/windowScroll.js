const bar            = document.querySelector(".bar");
const percentageHtml = document.querySelector(".percentage-html")

addEventListener("scroll", function() { 
    const maxHeight              = document.body.scrollHeight - innerHeight; 
    const rawPercentageScroll    = Math.round((pageYOffset) / maxHeight * 100); 
    const actualPercentageScroll = rawPercentageScroll + "%"; 
  
    // Fix 102% bug
    if (rawPercentageScroll > 100) { 
        rawPercentageScroll = 100; 
      };
    
    bar.style.width = actualPercentageScroll;    
    percentageHtml.innerHTML = actualPercentageScroll; 

    console.log(pageYOffset, maxHeight, rawPercentageScroll)
 }); 


// ForEach, map, filter, reduce exercices 

// 1) forEach loop 
// data.forEach(function(number) {  
// results.push(number * 0.9); 
// console.log(results)
// })  


// 2) Map 

let   data          = [1, 2, 4, 8, 16, 32, 64, 128]; 
let   results       = [];    
const dataField     = document.querySelector(".data-field"); 
const resultsField  = document.querySelector(".results-field"); 

dataField.innerHTML = data; 

data.map((number) => {  
    results.push(number * 0.9); 
})
resultsField.innerHTML = results; 

// 3) Filter 
const filterField   = document.querySelector(".filter-field"); 
const filteredResults  = results.filter( n => n > 50);  
filterField.innerHTML  = filteredResults; 

function imperativeSum(element) { 
    element.reduce((total, n)=> { 
        total += n; 
        return total;     
 }, 0); 
}

// 4) Reduce  
const reducedField   = document.querySelector(".reduced-field"); 

const reducedResults = data.reduce((total, n) => {  
    total += n; 
    return total; 
},0 ); 

reducedField.innerHTML = reducedResults; 

 console.log(reducedResults); 


// Add new Text on click inside window 
addEventListener("click", function() {  
    const newText     = document.createElement("p");
    const textContent = "hello sir milli"; 

    newText.innerHTML = textContent; 
    document.body.appendChild(newText); 
}); 


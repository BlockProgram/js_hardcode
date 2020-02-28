// 1st version 
const array = [1, 2, 3, 4, 5]; 

function randomize(arr) {  
    var temporary = 0; 
    var random    = 0; 

    for ( var i = 0; i < arr.length; i++ ) { 
        random      = Math.floor(Math.random() * arr.length); 
        temporary   = arr[i]; 
        arr[i]      = arr[random]; 
        arr[random] = temporary; 
     } 
    return arr; 
} 

// ES6 shorthand version using destructuring
function randomizeES6(arr) {  

    for ( var i = 0; i < arr.length; i++ ) { 
        const random = Math.floor(Math.random() * arr.length); 
        [arr[i], arr[random]] = [arr[random], arr[i]]
     } 
    return arr; 
} 


console.log(randomizeES6(array)); 




 

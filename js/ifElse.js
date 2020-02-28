var grade1  = 17; 
var grade2  = 14; 
var average =  calculate(grade1, grade2);

function calculate(a, b) {  
    return (a + b)/2; 
} 

console.log(average); 

function areYouStrong(strength) { 
    if (strength >= 15) { 
        return "Extremely strong"; 
     } 
    else if (strength >= 10) {
        return "Quite strong"
     } 
      else if (strength >= 5) {
        return "Not so Strong"
     } 
    else { 
        return "Not strong man";
     } 
 } 

 console.log(areYouStrong(13))


// Exercise IF, ELSE IF, ELSE 
 function level(array) {  
    var average = (array[0] + array[1] +array[2]) /3; 
  
    if (average >= 15) {
        return "Very good son"; 
      } 
    else if (average >= 10) {  
        return "Alright"; 
    } 
    else { 
        return "You're getting a punishment"; 
     } 
} 

console.log(level([12, 8, 16])); 


// Exercise FOR LOOP 
function moyenne(array) {  
    var total = 0; 

    for (var i = 0; i < array.length; i++) {  
        total += array[i]; 
    } 
    return total / array.length; 
} 

console.log(moyenne([15, 7, 8, 14])); 
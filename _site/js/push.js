// Create an array with 3 elements : firstName, lastName, Initials 
var firstName = "Ahmad"; 
var lastName  = "Barnes"; 
var initials  = firstName[0] + lastName[0]; 

var results = [firstName, lastName, initials]; 

console.log(results); 

// Alternative way to Create an array with 3 elements : firstName, lastName, Initials 
var results2 = []; 

results2.push(firstName, lastName, firstName[0] + lastName[0]); 

console.log(results2)


const arr = [1, 2, 3, 4, 5]; 

// const arrPlusOne = arr.map(function(number) {  
//     return `${number} + 1 = ${number + 1}`; 
// });

// const arrPlusOne = arr.map((number) => {  
//     return `${number} + 1 = ${number + 1}`; 
// });

// const arrPlusOne = arr.map(number => {  
//     return `${number} + 1 = ${number + 1}`; 
// });

const arrPlusOne = arr.map(number => `${number} + 1 = ${number + 1}`);


// When no arguments, here is the shortest version 
const arrPlusOne = arr.map(() => `5`); 

console.log(arrPlusOne); 
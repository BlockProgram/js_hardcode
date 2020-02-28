const arr = [1, 2, 3, 4, 5]; 

// const arrPlusOne = arr.map(function(nombre) {  
//     return `${nombre} + 1 = ${nombre + 1}`; 
// });

// const arrPlusOne = arr.map((nombre) => {  
//     return `${nombre} + 1 = ${nombre + 1}`; 
// });

// const arrPlusOne = arr.map(nombre => {  
//     return `${nombre} + 1 = ${nombre + 1}`; 
// });

const arrPlusOne = arr.map(nombre => `${nombre} + 1 = ${nombre + 1}`);


// When no arguments, here is the shortest version 
const arrPlusOne = arr.map(() => `5`); 


console.log(arrPlusOne)
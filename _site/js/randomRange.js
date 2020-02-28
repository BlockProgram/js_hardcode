function rankRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min); 
 } 

 console.log(rankRandom(5, 10)); 

let a = [3, 44, 48, 485, 34]; 

function distribute(numbers) {  

    numbers.forEach(function(number) {  
        let newLi = document.createElement("li"); 
        newLi.innerHTML = number;  
        document.getElementById("list").appendChild(newLi); 
        console.log(number)
    }); 
} 

distribute(a); 


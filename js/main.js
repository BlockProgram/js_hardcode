const title = document.querySelector("h1"); 

function goToTitle(title) { 
    const distance = title.offsetTop; 
    console.log(title.offsetTop); 

    window.scrollTo(0, distance)
 } 

 goToTitle(title); 
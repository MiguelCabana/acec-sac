'use strict'





window.addEventListener('load',()=>{


    var sliderVw = document.querySelector('.sliderVw');




    function greet() {
        
        sliderVw += 400 + "px";


    }
    
    setInterval(greet, 1000);





});


function pintar(ele1, color='green'){

    document.getElementById(ele1).style.backgroundColor = color    
    } 
    document.getElementById("ele1").addEventListener("click", function(){pintar("ele1","yellow");
});
pintar("ele1")
       
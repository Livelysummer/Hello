let count = 0;
function push(){
    count ++;
    let Presses = document.getElementById("Presses");
    Presses.innerText = count;
    if (count == 100){
        window.location.href = "https://livelysummer.github.io/Hello/Heaven.html";
    }
    if(count >= 101){
        window.location.href = "https://livelysummer.github.io/Hello/Too_Far.html";
    }
    
}
function unpush(){
    count --;
    let Presses = document.getElementById("Presses");
    Presses.innerText = count;
    if (count == -100){
        window.location.href = "https://livelysummer.github.io/Hello/Hell.html";
    }
    if (count <= -101){
        window.location.href = "https://livelysummer.github.io/Hello/Too_Far.html";
    }
}


    


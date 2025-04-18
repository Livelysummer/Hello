let count = 0;
function push(){
    count ++;
    let Presses = document.getElementById("Presses");
    Presses.innerText = count;
    if (count == 100){
        window.location.href = "https://livelysummer.github.io/Hello/Heaven.html";
    }
    
}
function unpush(){
    count --;
    let Presses = document.getElementById("Presses");
    Presses.innerText = count;
    if (count == -100){
        window.location.href = "https://livelysummer.github.io/Hello/wip.html";
    }
}


    


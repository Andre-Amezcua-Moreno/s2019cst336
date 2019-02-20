var bton = document.querySelector('.checker');

bton.addEventListener('click', dissabling);

function dissabling() {
    bton.disabled = true;
    document.getElementById("1opt1").disabled=true;
    document.getElementById("1opt2").disabled=true;
    document.getElementById("1opt3").disabled=true;
    
    document.getElementById("2opt1").disabled=true;
    document.getElementById("2opt2").disabled=true;
    document.getElementById("2opt3").disabled=true;
    document.getElementById("2opt4").disabled=true;
    
    document.getElementById("3opt1").disabled=true;
    document.getElementById("3opt2").disabled=true;
    document.getElementById("3opt3").disabled=true;
    document.getElementById("3opt4").disabled=true;
    
    document.getElementById("guessField").disabled=true;
}


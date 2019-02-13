
        
            var randomNumber =  Math.floor(Math.random() * 99) + 1;
            var guesses = document.querySelector('#guesses');
            var lastResult = document.querySelector('#lastResult');
            var lowOrHi = document.querySelector('#lowOrHi');
            
            var guessSubmit = document.querySelector('.guessSubmit');
            var guessField = document.querySelector('.guessField');
            
            var guessCount = 1;
            var resetButton = document.querySelector('#reset');
            resetButton.style.display = 'none';
            guessField.focus();
            
            var win = document.querySelector('#win');
            var winCounter = 0;
            var lose = document.querySelector('#lose');
            var loseCounter = 0;
            //var winLose = document.querySelector('#winLose');
            //winLose.style.backgroundColor = 'lightBlue';
            
            win.innerHTML = "Win: ";
            win.innerHTML += winCounter + ' ';
            
            lose.innerHTML = "Lose: ";
            lose.innerHTML += loseCounter + ' ';
            
            
            function checkGuess() {
                
                var userGuess = Number(guessField.value);
                
                if(userGuess > 99  || isNaN(userGuess)){
                    lastResult.innerHTML = 'Error';
                    lastResult.style.backgroundColor = 'red';
                    lowOrHi.innerHTML = 'Wrong Input';
                    guessField.value = '';
                    guessField.focus();
                }else{
                    if(guessCount === 1) {
                    guesses.innerHTML = 'Previous guesses: ';
                    }
                    guesses.innerHTML += userGuess + ' ';
                    if(userGuess === randomNumber) {
                        lastResult.innerHTML = 'Congratulations! You got it right!';
                        lastResult.style.backgroundColor = 'green';
                        lowOrHi.innerHTML = '';
                        winCounter++;
                        setGameOver();
                    }else if(guessCount === 7) {
                        lastResult.innerHTML = 'Sorry, you lost!';
                        loseCounter++;
                        setGameOver();
                    }else {
                        lastResult.innerHTML = 'Wrong';
                        lastResult.style.backgroundColor = 'red';
                        if(userGuess < randomNumber) {
                            lowOrHi.innerHTML = 'Last guess was too low!';
                        }else if(userGuess > randomNumber) {
                            lowOrHi.innerHTML = 'Last guess wat too high!';
                        }
                    }
                    
                    guessCount++;
                    guessField.value = '';
                    guessField.focus();
                }
            }
            
            guessSubmit.addEventListener('click', checkGuess);
            
            function setGameOver() {
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton.style.display = 'inline';
                win.innerHTML = "Win: ";
                win.innerHTML += winCounter + ' ';
            
                lose.innerHTML = "Lose: ";
                lose.innerHTML += loseCounter + ' ';
                
                resetButton.addEventListener('click', resetGame);
            }
            
            function resetGame() {
                guessCount = 1;
                
                var resetParas = document.querySelectorAll('.resultParas p');
                for(var i = 0; i < resetParas.length; i++){
                    resetParas[i].textContent = '';
                }
                
                resetButton.style.display = 'none';
                
                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = '';
                guessField.focus();
                
                lastResult.style.backgroundColor = 'white';
                
                win.innerHTML = "Win: ";
                win.innerHTML += winCounter + ' ';
            
                lose.innerHTML = "Lose: ";
                lose.innerHTML += loseCounter + ' ';
                
                randomNumber = Math.floor(Math.random() * 99) + 1;
            }
            
            //console.log(randomNumber);
           // document.getElementById("numberToGuess").innerHTML = randomNumber;
            
    
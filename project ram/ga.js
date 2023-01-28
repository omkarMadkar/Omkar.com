let  randomNumber = Math.floor( Math.random() * 20);

console.log(randomNumber);

const checkButton = document.getElementById('check');
const againButton = document.getElementById('again');

const userInput = document.getElementById('user-input');
const messagebox =  document.getElementById('message');
const main = document.getElementById('main'); 
const scoreElement = document.getElementById('score');


let scoreValue=10;
scoreElement.textContent = scoreValue;




function checkNumber(){

console.log('checking number.......');


if(userInput.value > 20){
   messagebox.textContent = 'Please enter a number between 1 and 20';

}else if (userInput.value < 0)
{
    messagebox.textContent = 'Please enter a number between 1 and 20';
}


if(randomNumber == userInput.value){
   messagebox.textContent = 'You guessed the number !'
    main.style.backgroundColor = 'green';


    
} else {

    if(scoreValue == 0){

        messagebox.textContent = 'You lost the game !';
        main.style.backgroundColor = ' red ';
        return;
    }

    if(randomNumber > userInput.value){
       
        messagebox.textContent = 'You guessed is too low !! !'
        main.style.backgroundColor = 'red';

    }
    if(randomNumber < userInput.value){
        
        messagebox.textContent = 'You guessed is too high  !!'
        main.style.backgroundColor = 'red';

    }

    scoreValue--;
    scoreElement.textContent = scoreValue;
   
    


}

}
 
checkButton.addEventListener('click', checkNumber);


function resetGame(){
    randomNumber = Math.floor( Math.random() * 20);
    messagebox.textContent = 'Start guessing...';
    scoreValue = 10;
    scoreElement.textContent = scoreValue;
    userInput.value ='';
    

}

againButton.addEventListener('click',resetGame);
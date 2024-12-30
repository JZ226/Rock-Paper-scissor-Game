 let userscore=0;
 let compscore=0;
let Choices = document.querySelectorAll('.choices');
let MsgBox = document.querySelector('#msg_box');
let UserScore = document.querySelector('#user');
let CompScore = document.querySelector('#comp');
Choices.forEach(choice =>{
    choice.addEventListener('click',() =>{
     const userChoice = choice.getAttribute('id');
     Playgame(userChoice);
    });
});
const gamedraw = () => {
   console.log('The Game Is Draw');
   MsgBox.innerText = 'The Game Is Draw';
   MsgBox.style.backgroundColor = 'black';
};
const ShowWinner = (userWin,userChoice,CompChoice) => {
 if(userWin){
    userscore++;
    console.log('The Winner Is User');
    MsgBox.innerText = `Your ${userChoice} beats the Computer ${CompChoice}`;
    MsgBox.style.backgroundColor = 'green';
    UserScore.innerText=userscore;
 }
 else{
    compscore++;
    console.log('The Winner Is Computer');
    MsgBox.innerText = `Computer ${CompChoice} beats your ${userChoice} `;
    MsgBox.style.backgroundColor = 'red';
    CompScore.innerText=compscore;
 }
};
const genCompChoice = () =>{
   const option = ["rock", "paper", "seasor"];
   const rindex =  Math.floor(Math.random()*3);
   return  option[rindex];
};
const Playgame = (userChoice) => {
    console.log('Userchoice is:',userChoice);
    const CompChoice = genCompChoice();
    console.log('Computer Choice is:',CompChoice);
    let userWin =true;
    if(userChoice===CompChoice){
        gamedraw();
    }
    else  {
        if(userChoice==='rock'){  // When User Choice Rock
     if (CompChoice === 'seasor'){
        userWin=true;
     }
     else if(CompChoice==='paper'){
        userWin=false;
     }
    }
    else if(userChoice==='paper'){ // When User Choice Paper
        if (CompChoice === 'seasor'){
           userWin=false;
        }
        else if(CompChoice==='rock'){
           userWin=true;
        }
       }
       else if(userChoice==='seasor'){  // When User Choice Seasor
        if (CompChoice === 'rock'){
           userWin=false;
        }
        else if(CompChoice==='paper'){
           userWin=true;
        }
       }
       ShowWinner(userWin,userChoice,CompChoice);
    }
};
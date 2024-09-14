let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
//accessing the element of html
const showing=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const comscore=document.querySelector("#computer-score");
const genComputerChoice=() =>{
    const option=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};
const drawgame=()=>{
    console.log("Game was draw");
    showing.innerText="Ops! Draw this game";
    showing.style.backgroundColor="yellow";
    showing.style.color="#081b31";
}
const showWinner=(userWin,userChoice,comchoice)=>{
     if(userWin){
        userScore++;
        userscore.innerText=userScore;
        console.log("You Win");
        showing.innerText=`You Win ! your  ${userChoice} beats ${comchoice}`;
        showing.style.backgroundColor="green";
        showing.style.color="White";

     }
     else{
        console.log("You Loose");
        showing.innerText=`You Loose ! ${comchoice} beats your ${userChoice}`;
        showing.style.backgroundColor="red";
        computerScore++;
        comscore.innerText=computerScore;

     }
};

const playGame=(userChoice)=>{
    console.log("User Choice is",userChoice)
    //Generate computer choice
    const comchoice=genComputerChoice();
    console.log("Computer Choice is",comchoice);

    if(userChoice==comchoice){
        //draw game
        drawgame();
    }
    else{
        let userWin=true;
            if(userChoice==="rock"){
                userWin=comchoice==="paper" ? false:true;
            }
            else if(userChoice==="paper"){
                userWin=comchoice==="scissors" ? false:true;
            }
            else {
                userWin=comchoice==="rock" ? false : true;
            }
            showWinner(userWin,userChoice,comchoice);

        
    }
};
choices.forEach((choice)=>{
  

    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
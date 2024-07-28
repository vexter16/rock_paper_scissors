function getComputerChoice(){
    let m = Math.random();
    if(m < 0.33) return "rock";
    else if(m<0.66) return "paper";
    else return "scissors";
}
function getHumanChoice(){
    let s;
    while(true){
        s = prompt("Enter your choice");
        if(s.toUpperCase() == "ROCK" || s.toUpperCase() == "PAPER" || s.toUpperCase() == "SCISSOR") break;
        else alert("Wrong Input....Enter correct choice");
    }
return s;
}
function playGame(){
    let HumanScope = 0;
    let ComputerScope = 0;
    function playRound(h,comp){
        let v;
        h = h.toLowerCase()
        if(h == 'rock'){
            if(comp == 'scissor') v = 1;
            else if(comp == 'paper') v = -1;
            else v = 0;
        }
        if(h == 'paper'){
            if(comp == 'rock') v = 1;
            else if(comp == 'scissor') v = -1;
            else v = 0;
        }
        if(h == 'scissor'){
            if(comp == 'paper') v = 1;
            else if(comp == 'rock') v = -1;
            else v = 0;
        }
        if(v==1){
            console.log("You Win! "+h+" beats "+comp);
            HumanScope++;
        }
        if(v==0) console.log("Tied");
        if(v==-1) { 
            console.log("You Lose! "+comp+" beats "+h);
            ComputerScope++;
    }
    }
    for(let i = 1; i<=5;i++){
    let h = getHumanChoice();
    let c = getComputerChoice();
    playRound(h,c);
    }
    console.log("Your score : "+HumanScope);
    console.log("Computer score : "+ComputerScope);
    if(HumanScope > ComputerScope) console.log("YOU WIN!! :]");
    else if(HumanScope < ComputerScope) console.log("YOU LOSE :<");
    else console.log("Tie :|");
}

playGame();





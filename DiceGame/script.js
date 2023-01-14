let players=document.querySelectorAll("input");
let rollDice_btns=document.querySelectorAll(".roll_dice");
let scores=document.getElementsByClassName("score");
let winner_btn=document.getElementById("declare_winner");
winner_btn.disabled=true;
let noOfRollDiceButtonsClicked=0;

for(let i=0;i<rollDice_btns.length;i++){
    rollDice_btns[i].addEventListener("click", ()=>{rollDice(rollDice_btns[i].id)});
}

rollDice = (btn_id) => {
    noOfRollDiceButtonsClicked++;
    rollDice_btns[btn_id].disabled=true;
    let num = Math.ceil(Math.random()*6);
    scores[btn_id].innerText=num;
    if(noOfRollDiceButtonsClicked==rollDice_btns.length)  winner_btn.disabled=false;
}



winner_btn.addEventListener("click",()=>{
    let highestScore=0;
    for(let i of scores){
        if(i.innerText>highestScore) highestScore=i.innerText;
    }
    let winnersIds=[];
    let winnersList="";
    for(let i in scores){
       if(scores[i].innerText==highestScore){
        winnersIds.push(i);
        if(winnersList==="") winnersList+=players[i].value;
        else winnersList+=", "+players[i].value;
       }
    }
    document.getElementById("winner").innerText=winnersList;
    winner_btn.disabled=true;
})


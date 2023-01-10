let players=document.querySelectorAll("input");
let rollDice_btns=document.querySelectorAll(".roll_dice");
let scores=document.getElementsByTagName("span");
let winner_btn=document.getElementById("declare_winner");
winner_btn.disabled=true;

for(let i=0;i<rollDice_btns.length;i++){
    rollDice_btns[i].addEventListener("click", ()=>{rollDice(rollDice_btns[i].id)});
}

rollDice = (btn_id) => {
    rollDice_btns[btn_id].disabled=true;
    let num = Math.ceil(Math.random()*6);
    scores[btn_id].innerText=num;
    canWinnerEnabled();
}

canWinnerEnabled=()=>{
    for(let i=0;i<rollDice_btns.length;i++){
        if(rollDice_btns[i].disabled===false){
            break;
        }
        else if(i===rollDice_btns.length-1){
            winner_btn.disabled=false;
        }
    }
}

winner_btn.addEventListener("click",()=>{
    largestNum_index=0;
    for(let i=0;i<scores.length;i++){
        if(scores[i].innerText>scores[largestNum_index].innerText)
            largestNum_index=i;
    }
    document.getElementById("winner").innerText=players[largestNum_index].value;
    winner_btn.disabled=true;
})


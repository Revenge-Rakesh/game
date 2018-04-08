var scores, activeplayer, roundScore, gameStatus;

initialization();
 document.querySelector(".btn-roll").addEventListener("click",function(){ 
if(gameStatus){
 var dice = Math.floor(Math.random()*6) + 1;
document.querySelector(".dice").style.display = "block";  
document.querySelector(".dice").src = "dice-" + dice +  ".PNG";   
if(dice !== 1){
    roundScore = roundScore + dice;
    document.querySelector("#score-"+ activeplayer).textContent = roundScore; 
}else{
    if(activeplayer === 0){
        activeplayer = 1;
    }else{
       activeplayer = 0;}
       roundScore = 0;
     document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.querySelector(".player-0-pannel").classList.toggle("active");  //indicate the player turn in user interface
     document.querySelector(".player-1-pannel").classList.toggle("active");  
}
}
});


//functioning of hold button

document.querySelector(".btn-hold").addEventListener("click",function(){
    
if(gameStatus){
     scores[activeplayer] = scores[activeplayer] + roundScore;
     document.querySelector("#rscore-" + activeplayer).textContent = scores[activeplayer];
     if(scores[activeplayer] >= 20){ //winning condition
      document.querySelector(".player-name-" + activeplayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" +activeplayer + "-pannel").classList.add("Winner!");
     document.querySelector(".player-" + activeplayer + "-pannel").classList.remove("active");
         gameStatus = false;
     }
    else{
       activeplayer = 0;
       roundScore = 0;
    document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
 document.querySelector(".player-1-pannel").classList.toggle("active");  //indicate the player turn in user interface
   document.querySelector(".player-0-pannel").classList.toggle("active");
document.querySelector(".dice").style.display = "none";
}  
    }
});


//functionality of new button

document.querySelector(".btn-new").addEventListener("click",initialization)
    
function initialization(){     
    
    scores = [0,0];
    roundScore = 0;
    activeplayer = 0;
    gameStatus = true;
 document.querySelector(".dice").style.display = "none"
document.getElementById("rscore-0").textContent = 0;
document.getElementById("rscore-1").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
  document.querySelector(".player-name-0").textContent = "Player 1";
 document.querySelector(".player-name-1").textContent = "Player 2";
  document.querySelector(".player-0-pannel").classList.add("active")//indicate the player turn in user interface
  document.querySelector(".player-1-pannel").classList.remove("active");
};


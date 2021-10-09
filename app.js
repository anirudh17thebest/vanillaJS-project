const game=function(){
    let pScore=0;
    let cScore=0;
    const initials=function(){
        const playBtn=document.querySelector(".intro button");
        const a=document.querySelector(".intro");
        const b=document.querySelector(".match");
        playBtn.addEventListener("click",function(){
            a.classList.add("fadeOut");
            b.classList.add("fadeIn");
        });
    };
    const play=function(){
        const options=document.querySelectorAll(".options button");
        const playerHand=document.querySelector(".player-hand");
        const computerHand=document.querySelector(".computer-hand");
        const computerOption=["rock", "paper", "scissors"];
        options.forEach(option =>{
            option.addEventListener("click", function(){
                const computerNumber=Math.floor(Math.random()*3);
                const computerChoice=computerOption[computerNumber];
                compareHands(this.textContent,computerChoice);
                playerHand.src=`./images/${this.textContent}.png`;
                computerHand.src=`./images/${computerChoice}.png`;
            });
        });
    };
    const updateScore=function(){
        const playerScore=document.querySelector(".player-score p");
        const computerScore=document.querySelector(".computer-score p");
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }
    const compareHands=function(playerChoice,computerChoice){
        const winner=document.querySelector(".winner");
        if(playerChoice === computerChoice)
        {
            winner.textContent="It's a tie";
            return;
        }
        if(playerChoice === "rock")
        {
            if(computerChoice ==="paper")
            {
                winner.textContent="Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "paper")
        {
            if(computerChoice ==="scissor")
            {
                winner.textContent="Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "scissors")
        {
            if(computerChoice ==="paper")
            {
                winner.textContent="Player Wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
    };
    initials();
    play();
};
game();
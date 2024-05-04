function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let resultMessage;
  
    if (playerChoice === computerChoice) {
      resultMessage = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultMessage = "You win!";
    } else {
      resultMessage = "Computer wins!";
    }
  
    document.getElementById('result').innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${resultMessage}`;
  }
  
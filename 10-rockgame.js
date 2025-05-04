 let score = JSON.parse( localStorage.getItem('score')) || {
          wins: 0,
          losses: 0,
          ties: 0
        };

        //document.querySelector('.js-score').innerHTML=   `Wins: ${score.wins},Losses: ${score.losses}, Ties: ${score.ties}`; o am calling it out instead
        updateScoreELement();
     
      //you can use !score insted of === null
     /* you can use this instead of || above 
      if (score === null) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
        */

      
     // let computerMove = '';

      function playGame (playerMove)   {
            // if its inside the function how to fix the error
          //   const computerMove pickComputerMove ();
          //console.log(pickComputerMove ());

          const computerMove = pickComputerMove ();
      

      
      // console the computer move
      // console.log(computerMove);
        
        let result = '';
       if (playerMove === 'scissors')  {

          if ( computerMove === 'rock') { result = 'You lose';
          } else if (computerMove=== 'paper') {
            result= 'You win';
          } else if ( computerMove === 'scissors')  {
          result = 'Tie';
          }

       }  else if (playerMove === 'paper') {
         if ( computerMove === 'rock') { result = 'You win';
        } else if (computerMove=== 'paper') {
          result= 'Tie';
        } else if ( computerMove === 'scissors')  {
        result = 'You lose';
        }
        
       } else if (playerMove=== 'rock') {
        
          if ( computerMove === 'rock') { result = 'Tie';
          } else if (computerMove=== 'paper') {
            result= 'You lose';
          } else if ( computerMove === 'scissors')  {
          result = 'You win';
          }
       }
        // updating the score
       if (result === 'You win') {
        score.wins += 1;
       } else if (result === 'You lose') {
        score.losses += 1;
       } else if (result === 'Tie') {
        score.ties += 1;
       }


       localStorage.setItem('score', JSON.stringify(score));

       //callling the elemt
       // document.querySelector('.js-score').innerHTML=   `Wins: ${score.wins},Losses: ${score.losses}, Ties: ${score.ties}`;
       updateScoreELement();  
       
       document.querySelector('.js-result').innerHTML = result;

       document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        computer`;
        
     // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins},Losses: ${score.losses}, Ties: ${score.ties}`); for the pop up 
            }  

        function updateScoreELement () {
          document.querySelector('.js-score').innerHTML=   `Wins: ${score.wins},Losses: ${score.losses}, Ties: ${score.ties}`;
            }

   function pickComputerMove ()  {
    const randomNumber = Math.random();
     let computerMove = '';
    //  SHA No forget i rewrote it so i can use it in the other buttons
    // let computerMove = '';
    if (randomNumber >=0 && randomNumber < 1/3) {
      computerMove ='rock';
    }  else if ( randomNumber >= 1/3 && 
    randomNumber < 2/3)  {
      computerMove = 'paper';
    } else if (randomNumber >=2/3 && 
      randomNumber < 1 ) {
        computerMove ='scissors';
      }

     // return 5; 
      return computerMove;
      // to make use of a variable inside a functon
      //  return computerMove;
      // sha no forget i rewrote it so i can use it in the other buttons (rock and paper)
   }
  
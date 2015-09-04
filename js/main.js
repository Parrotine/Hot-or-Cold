
$(document).ready(function(){
  
    /* Get the number at web page load */
    console.log("ready");
    var answer = Math.floor((Math.random()*100)+1);
    console.log (answer);
    var tries = 0;
    var guesses = [];
    var howfar = 0;
    var prevhowfar = 0;
    var guess = 0;
  
    /* Get hidden number and start game on new buton */
    $(".new").click(function() {
        location.reload();
    });
	
	  /*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  
  /* Take in user guess */
  function getGuess() {
    $("#guessButton").click(function(enter) {
          console.log("submit button");
          check();
          $("#userGuess").val("");
          game();
    });
  };  
  
  getGuess();
  
  
  /* Check if valid entry */
  function check() {
      guess = parseInt($("#userGuess").val());
      if ( guess < 0 || guess > 100 ) {
          $("#feedback").text("Must be a number between 1 and 100, try again")
          alert("You must enter a number between 1 and 100. Try again")
          enter.preventdefault();
      };
  };
  
  
  /* Tracking function */
    function far() {
        howfar = Math.abs(answer-guess);
        prevhowfar = Math.abs(answer-guesses);
        guesses=[];
        guesses.push(guess);
    };
  
  
    /* Play the Game */

function game() {
    tries += 1;
    $("#count").text(tries);
    far();
  
    if (guess === answer) {
        $("#feedback").text("Yahoo! You got the right answer!")
        tries = 0;

    } else if (tries == 1) {
        $("#feedback").text ("Good guess, try again!");

    } else if (howfar >= 1 && howfar <= 10) {
        $("#feedback").text ("You are so close it's bananas!");

    } else if (howfar >= 11 && howfar <= 20) {
        $("#feedback").text ("You are pretty close");

    } else if (howfar >= 21 && howfar <= 30) {
        $("#feedback").text ("Getting a bit chilly in here");

    } else {
        $("#feedback").text ("You are frozen solid");
    };
    $("#guessList").append ('<li class="guessBox">'+guess+ '</li>');

  }; 
  
  
});
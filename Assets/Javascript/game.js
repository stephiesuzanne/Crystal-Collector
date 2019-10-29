//set global variables
$(document).ready(function() {
	var randomNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystalOne;
	var crystalTwo;
	var crystalThree;
	var crystalFour;


//random numbers for each of the crystals and for the random number
	function newNumbers() {
//The random number shown at the start of the game should be between 19 - 120
        randomNumber = Math.floor(Math.random()*(120-19) + 19);
//Each crystal should have a random hidden value between 1 - 12
		crystalOne = Math.ceil(Math.random() * 12);
		crystalTwo = Math.ceil(Math.random() * 12);
		crystalThree= Math.ceil(Math.random() * 12);
		crystalFour = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#randomNumber").text(randomNumber);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalvalue", crystalOne);
		$("#crystal2").attr("data-crystalvalue", crystalTwo);
		$("#crystal3").attr("data-crystalvalue", crystalThree);
		$("#crystal4").attr("data-crystalvalue", crystalFour);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

	}
// creates function for a game win
	function youWin() {
		$("#winOrLose").text("You Win!");
		wins++;
		$("#wins").text(wins);
	}
// creates function for a game loss
	function youLose() {
		$("#winOrLose").text("You Lose!");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".crystalimg").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	
	$(".crystalimg").on("click", function() {
		if (totalScore >= randomNumber) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === randomNumber) {
			youWin();
		} else if (totalScore > randomNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});
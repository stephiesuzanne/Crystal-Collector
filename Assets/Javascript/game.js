$(document).ready(function() {
	var targetNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystal1Num;
	var crystal2Num;
	var crystal3Num;
	var crystal4Num;

	function newNumbers() {
		targetNumber = Math.floor(Math.random() * 102) + 19;
		crystal1Num = Math.ceil(Math.random() * 12);
		crystal2Num = Math.ceil(Math.random() * 12);
		crystal3Num = Math.ceil(Math.random() * 12);
		crystal4Num = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#targetNumber").text(targetNumber);
		$("#totalScore").text(totalScore);
		$("#crystal1").attr("data-crystalvalue", crystal1Num);
		$("#crystal2").attr("data-crystalvalue", crystal2Num);
		$("#crystal3").attr("data-crystalvalue", crystal3Num);
		$("#crystal4").attr("data-crystalvalue", crystal4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

	}

	function youWin() {
		$("#winOrLose").text("Congratulations! You win!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("Haha! You Lose!");
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
		if (totalScore >= targetNumber) {
			return;
		}

		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === targetNumber) {
			youWin();
		} else if (totalScore > targetNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});
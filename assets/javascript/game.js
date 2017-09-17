// My PseudoCode 

$(document).ready(function() {

// Step 1
// Randomly Generate a number for user to match
	
	var minNumber = 19;
    var maxNumber = 101; 
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

	// Random Number Generator
    function getNumber() {
        $('#randomNumberGen').html(randomNumber);
    }  
    // Display Random Number
	var randomNumberGen = $("#randomNumberGen"); 
    randomNumberGen = getNumber();

    console.log("random number is " + randomNumber); 
    

// Assign each crystal a random value.

	var scoreTally = 0;
	$("#theTotalScore").html(scoreTally);

	var crystal1 = (Math.floor(Math.random() * 12) +1);
	var crystal2 = (Math.floor(Math.random() * 12) +1);
	var crystal3 = (Math.floor(Math.random() * 12) +1);
	var crystal4 = (Math.floor(Math.random() * 12) +1);

	var wins = 0; 
	var loses = 0;

	$("#wins").html(wins);
	$("#loses").html(loses);

	// If the numbers match, add a win to the win count.
	function win() {

		if (scoreTally === randomNumber) {
			wins++;
			$("#wins").html(wins);
			reset();
		}
	}

	// If the number do not match, add a lose to the lose count. 
	function lose() {
		if (scoreTally > randomNumber) {
			loses++;
			$("#loses").html(loses);
			reset();
		}
	}
 	
 	var winCounter = $("#wins");
 	var loseCounter = $("#loses");
	winCounter = win();
	loseCounter = lose();

// When clicking a crystal, show the number in the total score box. 
// When another crystal is clicked, add that value to the value shown.

	$("#crystal1").on("click", function(){
		scoreTally = scoreTally + crystal1;
		$("#theTotalScore").html(scoreTally);
		if (scoreTally == randomNumber) {
			win();
		} else if (scoreTally > randomNumber) {
			lose();
		}

	});

	$("#crystal2").on("click", function(){
		scoreTally = scoreTally + crystal2;
		$("#theTotalScore").html(scoreTally);
		if (scoreTally == randomNumber) {
			win();
		} else if (scoreTally > randomNumber) {
			lose();
		}

	});

	$("#crystal3").on("click", function(){
		scoreTally = scoreTally + crystal3;
		$("#theTotalScore").html(scoreTally);
		if (scoreTally == randomNumber) {
			win();
		} else if (scoreTally > randomNumber) {
			lose();
		}

	});

	$("#crystal4").on("click", function(){
		scoreTally = scoreTally + crystal4;
		$("#theTotalScore").html(scoreTally);
		if (scoreTally == randomNumber) {
			win();
		} else if (scoreTally > randomNumber) {
			lose();
		}

	});

// After a win or lose, reset the total score, the random number, and the crystals.

function reset() {

	minNumber = 19;
    maxNumber = 101; 
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    getNumber();
    var randomNumberGen = $("#randomNumberGen"); 
    randomNumberGen = getNumber();

    scoreTally = 0;
	$("#theTotalScore").html(scoreTally);

	crystal1 = (Math.floor(Math.random() * 12) +1);
	crystal2 = (Math.floor(Math.random() * 12) +1);
	crystal3 = (Math.floor(Math.random() * 12) +1);
	crystal4 = (Math.floor(Math.random() * 12) +1);

}

});
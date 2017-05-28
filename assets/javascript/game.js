// My PseudoCode 

$(document).ready(function() {

// Step 1
// Randomly Generate a number for user to match
	
	// Random Number Generator
    function getNumber() {
        var minNumber = 19; // le minimum
        var maxNumber = 101; // le maximum
        var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $('#randomNumberGen').html(randomNumber);
    }  
    // Display Random Number
	var randomNumberGen = $("#randomNumberGen"); 
    randomNumberGen = getNumber(); 
    

// Step 2
// Assign each crystal a random value. 
// Step 3
// When clicking a crystal, show the number in the total score box. 

	$(".btn").on("click", function() {
		var crystalNumber = (Math.floor(Math.random() * 12) +1);
		$("#theTotalScore").html(crystalNumber);
	});

// Step 4
// When another crystal is clicked, add that value to the value shown.

// Step 5
// If the numbers match, add a win to the win count.

// Step 6
// After the numbers match, reset the number to match, and assign
// the crystals a new number. 

// Step 7
// If the number do not match, add a lose to the lose count. 

// Step 8
// After a number is added to the lose count, reset the number to match, and
// assign the crystals a new number.

});
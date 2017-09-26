
/*	INITIAL NOTES...

 Win condition is matching TotalScore to RandomNum

 Lose condition is if TotalScore goes above (in numerical value) RandomNum */

/* Will be using:

Math.random() for GENERATING random number

Math.floor() to round it and

Math.ceiling() to ____

Need to use:

Comparisons:
If statements

Else statements

IfElse statements

Objects

more...     */

/* Need to append each color crystal number (value) to corresponding image in index

Need to Check Out jQuery Calculator

lets test to see if button will fill up (come to) the page
	
	END INTIAL NOTES...
*/


$(document).ready(function() {

// Math.random() is 0 - 1
// Math.floor() is Rounding Downward
// Math.ceiling() is Rounding Upward
// '* 11 + 1' will include the number 12
//     question: How do I test the code to see if it works in the browser?
// 			solved. StackOverflow


  // Make our variables global to the runtime of our application


var startingRandomNum = Math.floor(Math.random() * 101 + 1) + 19;
// Correct code: var startingRandomNum = Math.floor(Math.random() * 120 - 19 + 1) + 1;
// Incorrect code used: Math.ceiling(Math.random() * 12 + 1)
// Problem #1: Getting Negative numbers
// Fixed: Math.floor(Math.random() * 101 + 1) + 19; via StackOverflow

var redCrystalNum = redCrystalCompPick;
// The computer's choice will be assigned to redCrystalNum, which is connected to image.

var blueCrystalNum = blueCrystalCompPick;
// The computer's choice will be assigned to blueCrystalNum, which is connected to image

var yellowCrystalNum = yellowCrystalCompPick;
// The computer's choice will be assigned to yellowCrystalNum, which is connected to image

var greenCrystalNum = greenCrystalCompPick;
// The computer's choice will be assigned to greenCrystalNum, which is connected to image

var winCounter = 0;
// Win Counter will begin at 0, increment by 1, each completed game, depending on result

var loseCounter = 0;
// Lose Counter will begin at 0, increment by 1, each completed game, depending on result

var userTotalScore = 0;
// Total Score counter will begin at 0, is updated with a Numerical value, based on user click on crystal


redCrystalCompPick = Math.floor(Math.random() * 11 + 1) + 1;

blueCrystalCompPick = Math.floor(Math.random() * 11 + 1) + 1;

yellowCrystalCompPick = Math.floor(Math.random() * 11 + 1) + 1;

greenCrystalCompPick = Math.floor(Math.random() * 11 + 1) + 1;
// Setting the values for each crystal



console.log("Red Crystal Pick: " + redCrystalNum);
console.log("Blue Crystal Pick: " + blueCrystalNum);
console.log("Yellow Crystal Pick: " + yellowCrystalNum);
console.log("Green Crystal Pick: " + greenCrystalNum); 
// Logging computer choice's to console - Easier to troubleshoot


$("#button-red").on("click", function() {
	redCrystalCompPick = $(this).attr("value");   // ** This could be wrong!
	console.log("Red Crystal Pick: " + redCrystalCompPick);
	console.log("My Total Score is now: " + redCrystalCompPick + userTotalScore)

	});

// Creating the on click event that adds the value from image to userTotalScore



if (userTotalScore === startingRandomNum) {
	console.log("Your Total Score is " + userTotalScore + "Your Random Number was: " + startingRandomNum)
	winCount++;
} else {
	console.log("Your Total Score is " + userTotalScore + "Your Random Number was: " + startingRandomNum)
	loseCount--;
}
// Winning Condition and Losing Condition!		** Needs more work for other situations




// ***** Conditions: *****

// If userTotalScore === startingRandomNum, then increment WinCount, else if userTotalScore
// is below startingRandomNum, then continue, else if userTotalScore is above or greater than startingRandomNum
// then increment LoseCount

// 

// ** Function to 


// ** 


console.log(startingRandomNum); // Testing the starting variable here.


// ****** Function Requirements ******

// ** SCORING SYSTEM **
// 1. redCrystal, blueCrystal, greenCrystal, yelowCrystal, when CLICKED, must add (its) corresponding value to userTotalScore
// 2. Total Score must be upadted with value from crystalNums
// 3. startingRandomNum must EQUAL userTotalScore to increment winCount by +1, if not, increment loseCount by +1
// 4. All color crystal values must remain the same value duration of the game (randomValues assigned to each)







});
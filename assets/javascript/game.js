var randResult
var score = 0;

// var restart = function () {
// a universal function that generates a random integer(must clarify the two numbers when used)
var rand = function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

// this variable will be used only for the starting random number
randResult = rand(19,120);

//displays the random starting result for the user when the html loads
$(".randomNum").append('Random Result: ' + randResult);

for (var i = 0; i < 4; i++) {
  // Using the universal var rand this generates a random number between 1-12, 4 times
  gemRand = rand(1,12);

// adds 4 buttons on the html
// sets gemData to gemRand so that it holds the value
var button = $("<button>gem</button>");
    button.attr({
      "class": 'button',
      "gemData": gemRand
    });

$(".gems").append(button);

//display your score when html loads
$(".score").html("Your Score " + 0);

// }
};
// reset();

$(".button").on('click', function () {
  // grabing the data from gemData to create a variable "gemScore"
  var gemScore = parseInt($(this).attr('gemData'));
  //This console log is to show which numbers were allocated to each button
  console.log(gemScore);

  score += gemScore;
  //Update score every button click
  $(".score").html("Your Score: " + score);

  //if your score is greater than the random starting result you lost
  if(score > randResult) {
    $(".lose").html("You Lost..")
    score = 0;
    // reset();
  }
//if your score is equal to the random starting result you won
  else if(score === randResult) {
    $(".win").html("You Win!!")
    score = 0;
    // reset();
  }

});


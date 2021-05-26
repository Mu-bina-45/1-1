
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
//4-3
var userClickedPattern = [];

var started = false;

var level = 0;


$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }
});
//4-1
$(".btn").click(function() {
//4-2
var userChosenColour = $(this).attr("id");
//4-4
userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

   if (userClickedPattern.length === gamePattern.length){
     setTimeout(function() {
       nextSequence();
     }, 1000);
    }

  } else {
    console.log("wrong!");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("level-title").text("Game Over Press Any Key to Restart");
  }
}


//1
function nextSequence() {
userClickedPattern = [];

 level++;

 $("#level-title").text("level " + level);


 var randomNumber = Math.floor(Math.random() * 4);
 var randomChoosenColour =  buttonColours[randomNumber];
 gamePattern.push(randomChoosenColour);

//3-1 makes the flashing effect
$("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChoosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver(wrong) {
  level = 0;
  gamepattern = [];
  started = false;
}

var colors=["red", "blue", "green", "yellow"];
var totcolors=[];
var usercolors=[];
var level=0;
var flag=false;

function playsound(ranchosen){
    var audio=new Audio("./sounds/"+ranchosen+".mp3");
    audio.play();
}

function animatepress(currentcolor){
    var string="#"+currentcolor;
    $(string).addClass("pressed");
    setTimeout(function () {
        $(string).removeClass("pressed");
      }, 100);
}

function nextsequence(){
    usercolors=[];
    var str="Level "+level;
    $("#level-title").text(str);
    level++;
    var n=Math.floor(Math.random()*4);
    var ranchosen=colors[n];
    totcolors.push(ranchosen);
    var colorid="#"+ranchosen;
    $(colorid).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(ranchosen);
    //animatepress(ranchosen);
}

function checkanswer(currentlevel){
    if(usercolors[currentlevel]===totcolors[currentlevel]){
        if(usercolors.length===totcolors.length){
            setTimeout(function(){
                nextsequence();
            },1000 );
        }
    }
    else{
        var audio=new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        $("h1").text("Wrong Answer! Press any key to restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startover();
    }
}

function startover() {
    level = 0;
    totcolors = [];
    flag = false;
  }

$(document).keypress(function(){
    if(!flag){
        nextsequence();
        flag=true;
    }
})

$(".btn").click(function(){
            var userchosencolor=$(this).attr("id");
            usercolors.push(userchosencolor);
            playsound(userchosencolor);
            animatepress(userchosencolor);
            checkanswer(usercolors.length-1);
        })


// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }


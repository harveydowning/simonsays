gamePattern = [];
userClickedPattern = [];

buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence() {
    num = Math.random()
    randomNumber = Math.floor(num * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("h1").text("Level " + gamePattern.length)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100); 
}

function checkAnswer() {
    arrayLength = gamePattern.length

    if (gamePattern === userClickedPattern) return true;
    if (gamePattern == null || userClickedPattern == null) return false;
    if (gamePattern.length !== userClickedPattern.length) return false;

    for (var i = 0; i < gamePattern.length; ++i) {
        if (gamePattern[i] !== userClickedPattern[i]) return false;
      }
      return true;

}



$(".btn").click(function() {
    $(this).fadeOut(100).fadeIn(100);
    color = this.getAttribute("id")
    var audio = new Audio("sounds/"+ color + ".mp3");
    audio.play();
    userClickedPattern.push(color)
    if (userClickedPattern.length === gamePattern.length) {
        if (checkAnswer() === false) {
            alert("you lost!")
            gamePattern = [];
            location.reload()
          } else {
                  setTimeout(function (){
                      userClickedPattern = [];
                      nextSequence();
                  }, 1000)
              }  
        
    } 
});


function handleKeyPress(event) {
    if (event.key === 'a') {
      nextSequence();
      document.removeEventListener('keydown', handleKeyPress);
    }
  }
  
  document.addEventListener('keydown', handleKeyPress);

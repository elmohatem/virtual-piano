for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {

  document.querySelectorAll(".btn")[i].addEventListener('click', function() {

    var music = {
      letter: ["q","2","w","3","e","r","5","t","6","y","7","u"],
      sound: ["sounds/q.mp3","sounds/2.mp3","sounds/w.mp3","sounds/3.mp3","sounds/e.mp3","sounds/r.mp3","sounds/5.mp3","sounds/t.mp3","sounds/6.mp3","sounds/y.mp3","sounds/7.mp3","sounds/u.mp3"],
    }
    for (var i = 0; i<music.sound.length; i++) {
      if (this.innerHTML === music.letter[i]) {
        var audio = new Audio(music.sound[i]);
        audio.play();
      };
    }
  })
}


  document.addEventListener("keydown", function(event){
    var keyPressed = event.key;
    var audioFile = "sounds/"+keyPressed+".mp3"
    var audio2 = new Audio(audioFile);
  audio2.play();


});

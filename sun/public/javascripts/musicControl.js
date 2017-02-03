 var audioElm = document.getElementById("myaudio"); // Audio element
  function togglePlay() {
         if (document.getElementById("myaudio")) {

           if (audioElm.paused == true) {
             playAudio(audioElm);    //  if player is paused, then play the file
           } else {
             pauseAudio(audioElm);   //  if player is playing, then pause
           }
         }
       }

  function playAudio(audioElm) {
         document.getElementById("playbutton").innerHTML = "Pause"; // Set button text == Pause
         // Get file from text box and assign it to the source of the audio element 
         audioElm.src = document.getElementById('audioflile').value;
         audioElm.play();
       }

  function pauseAudio(audioElm) {
         document.getElementById("playbutton").innerHTML = "play"; // Set button text == Play
         audioElm.pause();
       }
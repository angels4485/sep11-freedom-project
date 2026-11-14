 const button = document.getElementById("play-button");

    button.addEventListener("click", async () => {
    
        await Tone.start();
       
        const synth = new Tone.Synth().toDestination();

        const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
        synth.connect(feedbackDelay);
    
        
        
        synth.triggerAttackRelease("C4", "8n");
    });
  
    const synth = new Tone.Synth().toDestination();

// Flag to stop the note from stuttering if you hold the spacebar down
let isPlaying = false;

window.addEventListener("keydown", async (event) => {
  // 1. Start Tone.js on the first press
  await Tone.start();

  // 2. Check if the key pressed is the Spacebar
  if (event.code === "Space" && !isPlaying) {
    isPlaying = true;
    
    // 3. Attack: Hold the note down
    synth.triggerAttack("C4");
  }
});

window.addEventListener("keyup", (event) => {
  // 4. Check if the key released is the Spacebar
  if (event.code === "Space") {
    isPlaying = false;
    
    // 5. Release: Let the note go
    synth.triggerRelease();
  }
});
  
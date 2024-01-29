/*
console.log("Massandje, Emma, and Gabriel");
*/

var audio = document.getElementById("myAudio");


function playAudio() {
    audio.play();
}


function pauseAudio() {
    audio.pause();
}


function setVolume(volume) {
    audio.volume = volume; 
}



const button = document.querySelector("#button");
const canvas = document.querySelector("#canvas");

button.addEventListener("click", () => {
  
    // Ensure JSConfetti is loaded before using it
    if (typeof JSConfetti !== "undefined") {
        const JsConfetti = new JSConfetti.default();
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        }).then(() => console.log('Confetti animation completed!'));
    } else {
        console.error('JSConfetti is not defined. Make sure the library is properly loaded.');
    }
});





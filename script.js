let bpm = 120;
let audio_src = new Audio("./sounds/tick.wav");
let currentText = "\\";

function playAudio() {
    metronomeInterval = setInterval(() => {
        audio_src.play();
        if(currentText == "\\") {
            currentText = "/";
        } else {
            currentText = "\\";
        }
        document.getElementById("tick-tok-text").textContent = currentText;
    }, Math.round(60000 / bpm));
}

function stopAudio() {
    clearInterval(metronomeInterval);
    document.getElementById("tick-tok-text").textContent = "-";
}

function updateBpmText(_bpm) {
    let bpmText = document.getElementById("bpm-text");
    bpmText.textContent = _bpm;
}

function onStart() {
    playAudio();
    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "block";
}
function onStop() {
    stopAudio();
    document.getElementById("start").style.display = "block";
    document.getElementById("stop").style.display = "none";
}

function onPlusBpm() {
    bpm += 1;
    updateBpmText(bpm);
    if(document.getElementById("start").style.display == "none") {
        stopAudio();
        playAudio();
    }
}
function onMinusBpm() {
    bpm -= 1;
    updateBpmText(bpm);
    if(document.getElementById("start").style.display == "none") {
        stopAudio();
        playAudio();
    }
}

document.getElementById("start").addEventListener("click", onStart);
document.getElementById("stop").addEventListener("click", onStop);

let bpm_minus = document.getElementById("bpm-minus");
bpm_minus.style.cursor = 'pointer';
bpm_minus.addEventListener("click",onMinusBpm);

let bpm_plus = document.getElementById("bpm-plus");
bpm_plus.style.cursor = 'pointer';
bpm_plus.addEventListener("click",onPlusBpm);
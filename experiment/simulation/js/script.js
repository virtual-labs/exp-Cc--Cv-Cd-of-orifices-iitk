const steps = [
    "Complete demonstration of setup with labelled diagram",
    "First ensure all valve  are closed.",
    "Ensure Water level is sufficient in sump tank so that suction pipe of pump is completely immersed, if not fill it with tap water connected to tap.",
    "Open main valve of the pipeline.",
    "Open ball valve of the orifice and manometer.",
    "Switch on pump.",
    "Wait for steady state flow (flow is not changing with time) .",
    "Note down the readings of manometer and time required using stop watch for 10cm rise in measuring tank measure via level indicator connected to it to determine discharge flowrate (Q) .",
    "Repeat experiment by changing/adjusting flowrate using valve (No-2) or by valve No- 04 . ",
  ];
  
  let currentStep = 0;
  let isMuted = false;
  
  const stepText = document.getElementById("step-text");
  const nextBtn = document.getElementById("next-btn");
  const speakerBtn = document.getElementById("speaker-btn");
  
  function speak(text) {
    if (!isMuted && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // "hi-IN" if needed
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    stepText.textContent = steps[0];
    speak(steps[0]);
  });
  
  nextBtn.addEventListener("click", () => {
    currentStep++;
   if (currentStep < steps.length - 1) {
  stepText.textContent = steps[currentStep];
  speak(steps[currentStep]);
} else if (currentStep === steps.length - 1) {
  // Last step
  stepText.textContent = steps[currentStep];
  speak(steps[currentStep]);
  nextBtn.style.display = "none";          // hide next
  document.getElementById("submit-btn").style.display = "inline-block";  // show submit
}

  });
  
  speakerBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    speakerBtn.textContent = isMuted ? "🔇" : "🔊";
    if (!isMuted) {
      speak(steps[currentStep]);
    } else {
      speechSynthesis.cancel();
    }
  });
  


  function rotateValve() {
    const valveButton = document.getElementById("openValveBtn");
    const valveImage = document.getElementById("valveCircularPart").querySelector(".circular-valve-image");
  
    valveImage.style.transform = "rotate(90deg)"; 
  
    
    valveButton.innerText = "Valve Opened";
    valveButton.disabled = true;  
  }
  document.addEventListener('DOMContentLoaded', function () {
    const valve = document.querySelector('.valve2');
    const valveSound = document.getElementById('valveSound');
  
    if (valve && valveSound) {
      valve.addEventListener('click', () => {
        // Toggle rotated class for animation
        valve.classList.toggle('rotated');
  
        // Play sound
        valveSound.currentTime = 0; // Restart sound if played again
        valveSound.play();
      });
    }
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const ballClasses = ['ball1', 'ball2', 'ball3'];
  
    ballClasses.forEach(cls => {
      const ball = document.querySelector(`.${cls}`);
      
      // Check localStorage for saved state
      const isOpen = localStorage.getItem(cls) === 'open';
      if (isOpen) {
        ball.classList.add('ball-open');
      }
  
      // Toggle on click
      ball.addEventListener('click', () => {
        const currentlyOpen = ball.classList.contains('ball-open');
        if (currentlyOpen) {
          ball.classList.remove('ball-open');
          localStorage.setItem(cls, 'closed');
        } else {
          ball.classList.add('ball-open');
          localStorage.setItem(cls, 'open');
        }
      });
    });
  });
  


const toggleBtn = document.getElementById("toggleBtn");
const water = document.getElementById("waterlevel");
const waterSound = document.getElementById("waterSound"); // ← sound element

let isRunning = false;
let currentHeight = parseFloat(localStorage.getItem("waterlevel")) || 10;
let interval;

water.style.height = `${currentHeight}%`;

toggleBtn.addEventListener("click", () => {
  isRunning = !isRunning;

  if (isRunning) {
    toggleBtn.classList.remove("red");
    toggleBtn.classList.add("green");

    // Play sound
    waterSound.play();

    interval = setInterval(() => {
      if (currentHeight < 100) {
        currentHeight += 0.2;
        water.style.height = `${currentHeight}%`;
        localStorage.setItem("waterlevel", currentHeight.toFixed(1));
      } else {
        clearInterval(interval);
        waterSound.pause(); // ← sound stop if water is full
        waterSound.currentTime = 0;
      }
    }, 100);
  } else {
    toggleBtn.classList.remove("green");
    toggleBtn.classList.add("red");

    clearInterval(interval);

    // Pause sound
    waterSound.pause();
    waterSound.currentTime = 0; // reset to start
  }
});


//yeah utube shape ke containe rke liye h
const motorBtn = document.getElementById("motorBtn");
const utubeWater = document.getElementById("utubeWater");
const measurementTank = document.getElementById("waterlevel"); // ✅ fix here

let motorRunning = false;
let waterTransferInterval = null;

let measurementTankHeight = parseFloat(localStorage.getItem("waterlevel")) || 10;
let utubeTubeHeight = parseFloat(localStorage.getItem("utubeWaterLevel")) || 10;

window.addEventListener("DOMContentLoaded", () => {
  measurementTank.style.height = `${measurementTankHeight}%`;
  utubeWater.style.height = `${utubeTubeHeight}%`;
});

motorBtn.addEventListener("click", () => {
  motorRunning = !motorRunning;

  const isAnyBallOpen = ['ball1', 'ball2', 'ball3'].some(cls =>
    document.querySelector(`.${cls}`).classList.contains("ball-open")
  );

  if (motorRunning && isAnyBallOpen) {
    motorBtn.classList.add("running");

    waterTransferInterval = setInterval(() => {
      if (measurementTankHeight > 0) {
        measurementTankHeight -= 0.2;
        utubeTubeHeight += 0.2;

        measurementTank.style.height = `${measurementTankHeight}%`;
        utubeWater.style.height = `${utubeTubeHeight}%`;

        localStorage.setItem("waterlevel", measurementTankHeight.toFixed(1));
        localStorage.setItem("utubeWaterLevel", utubeTubeHeight.toFixed(1));
      } else {
        clearInterval(waterTransferInterval);
      }
    }, 100);
  } else {
    clearInterval(waterTransferInterval);
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  // Remove saved values
  localStorage.removeItem("waterlevel");
  localStorage.removeItem("utubeWaterLevel");
  ['ball1', 'ball2', 'ball3'].forEach(key => localStorage.removeItem(key));

  // Reset visuals
  document.getElementById("waterlevel").style.height = "0%";
  document.getElementById("utubeWater").style.height = "0%";
  document.getElementById("submit-btn").style.display = "none";
document.getElementById("next-btn").style.display = "inline-block";
document.getElementById("submit-btn").disabled = false;
document.getElementById("left-result-table").style.display = "none";
currentStep = 0;
stepText.textContent = steps[0];


  ['ball1', 'ball2', 'ball3'].forEach(cls => {
    const ball = document.querySelector(`.${cls}`);
    ball?.classList.remove("ball-open");
  });

  alert("Experiment reset successfully!");
});



document.getElementById("submit-btn").addEventListener("click", () => {
  // Example static values
  const D1 = 2.5;
  const D2 = 1.5;
  const A = 100;
  const h = 20;
  const timeTaken = 25; // example: time in seconds for 10cm rise

  const Q = (A * 10) / timeTaken;
  const a1 = (Math.PI * D1 * D1) / 4;
  const a0 = (Math.PI * D2 * D2) / 4;
  const g = 981;
  const Qt = a0 * Math.sqrt((2 * g * h) / (1 - Math.pow(a0 / a1, 2)));
  const Cd = Q / Qt;

  document.getElementById("timeTakenLeft").textContent = timeTaken.toFixed(2) + " sec";
  document.getElementById("qValueLeft").textContent = Q.toFixed(2) + " cm³/s";
  document.getElementById("qtValueLeft").textContent = Qt.toFixed(2) + " cm³/s";
  document.getElementById("cdValueLeft").textContent = Cd.toFixed(4);
  document.getElementById("left-result-table").style.display = "block";

  // Optionally disable Submit after 1 click
  document.getElementById("submit-btn").disabled = true;
});

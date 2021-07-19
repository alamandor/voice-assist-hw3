// Create new instance - speech synthesis
const synthesis = window.speechSynthesis;

// Establish that browser has speech recognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

window.SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
window.SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
// Create new instance - speech recognition
const recognition1 = new SpeechRecognition();
const recognition2 = new SpeechRecognition();
const recognition3 = new SpeechRecognition();
recognition1.interimResults = true;
recognition1.continuous = false;
recognition1.lang = "en-US";

recognition2.interimResults = true;
recognition2.continuous = false;
recognition2.lang = "en-US";

recognition3.interimResults = true;
recognition3.continuous = false;
recognition3.lang = "en-US";

// Grab elements from the DOM
let errorBox = document.querySelector("#error");
let recordDepart = document.querySelector("#departButton");
let recordDest = document.querySelector("#destinationButton");
let recordBag = document.querySelector("#carryOnButton");
let submit = document.querySelector("#subBtn");

const field1 = document.querySelector("#field1");
const field2 = document.querySelector("#field2");
const field3 = document.querySelector("#field3");

// Add event listeners
recordDepart.addEventListener("click", handleRecordDepart);
recordDest.addEventListener("click", handleRecordDestination);
recordBag.addEventListener("click", handleRecordCarryOn);
submit.addEventListener("click", handlePlaySpeech);
btns = document.getElementsByClassName("stop");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleStopRecognition);
}

function handleRecordDepart(event) {
  event.preventDefault();
  console.log("depart button pressed");
  console.log("start speech recognition");

  recognition1.addEventListener("error", (event) => {
    console.log("an error occurred");
  });
  recognition1.addEventListener("onnomatch", (event) => {
    errorBox.textContent = "I didnt recognize that phrase.";
  });

  recognition1.addEventListener("result", (event) => {
    const results = Array.from(event.results)
      .map((item) => {
        console.log(item);
        item[0].transcript;
        field1.value = item[0].transcript;
      })
      .join("");

    console.log(results);
  });

  recognition1.start();
  recognition1.addEventListener("onend", (event) => {
    recognition1.stop();
  });
}
function handleRecordDestination(event) {
  event.preventDefault();
  console.log("destination button pressed");
  console.log("start speech recognition");

  recognition2.addEventListener("error", (event) => {
    console.log("an error occurred");
  });
  recognition2.addEventListener("onnomatch", (event) => {
    errorBox.textContent = "I didnt recognize that phrase.";
  });

  recognition2.addEventListener("result", (event) => {
    const results = Array.from(event.results)
      .map((item) => {
        item[0].transcript;
        field2.value = item[0].transcript;
      })
      .join("");

    console.log(results);
  });

  recognition2.start();
}
function handleRecordCarryOn(event) {
  event.preventDefault();
  console.log("Carry on button pressed");
  console.log("start speech recognition");

  recognition3.addEventListener("error", (event) => {
    console.log("an error occurred");
  });
  recognition3.addEventListener("onnomatch", (event) => {
    errorBox.textContent = "I didnt recognize that phrase.";
  });

  recognition3.addEventListener("result", (event) => {
    const results = Array.from(event.results)
      .map((item) => {
        item[0].transcript;
        if (item[0].transcript === "yes") {
          document.getElementById("bagTrue").checked = true;
        }
        if (item[0].transcript === "no") {
          document.getElementById("bagFalse").checked = true;
        }
      })
      .join("");

    console.log(results);
  });

  recognition3.start();
}

function handleStopRecognition(event) {
  event.preventDefault();
  console.log("stop speech recognition");
  recognition1.stop();
  recognition2.stop();
  recognition3.stop();
}

function handleClearTranscript(event) {
  transcript.textContent = "";
}

function handlePlaySpeech(event) {
  event.preventDefault();
  console.log("speech synthesis");
  let field1Text = field1.value;
  let field2Text = field2.value;
  let field3Text = "";
  if (document.getElementById("bagTrue").checked === true) {
    field3Text = "With a Carry on Bag";
  }
  if (document.getElementById("bagFalse").checked === true) {
    field3Text = "Without a Carry on Bag";
  }

  let utterance1 = new SpeechSynthesisUtterance("departing from " + field1Text);
  let utterance2 = new SpeechSynthesisUtterance("destination " + field2Text);
  let utterance3 = new SpeechSynthesisUtterance(field3Text);
  synthesis.speak(utterance1);
  synthesis.speak(utterance2);
  synthesis.speak(utterance3);
}

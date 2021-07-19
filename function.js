// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// const recognition = new SpeechRecognition();
// recognition.continuous = true;
// recognition.lang = 'en-US';
// recognition.interimResults = true;

// // const synthesis = new speechSynthesis();
// let speechArea = document.getElementById('field3');

// let recording = false;
// let startRecognition = (event) => {
// 	console.log("Speech Recognition Started")
// 	recognition.continuous = true

// 	recognition.addEventListener('result', event => {
// 		const transcript = Array.from(event.results)
// 		.map((result) => result[0])
// 		.map((result) => result.transcript)
// 		.join("");
// 	console.log(transcript)
// 	speechArea.innerHTML = transcript;
// 	});
// 	recording = true;
// 	recognition.start();
// }
// function handleStartRecognition(event) {
// 	console.log('start speech recognition');

// 	recognition.addEventListener('error', (event) => {
// 	  console.log('an error occurred');
// 	});

// 	recognition.addEventListener('result', (event) => {
// 	  const results = Array.from(event.results)
// 	    .map((item) => item[0].transcript)
// 	    .join('');

// 	  console.log(results);
// 	  transcript.textContent = results;
// 	});

// 	recognition.start();
//       }
// const stopRecognition = (event) => {
// 	recognition.stop();
// 	recording = false;

// }

// document.getElementById('subBtn').addEventListener("click", handleStartRecognition)

// // recognition.onresult = function(event) {
// // 	var result = event.results[0][0].transcript;
// // 	console.log("result recieved: ", result)
// // 	console.log('Confidence: ' + event.results[0][0].confidence);
// //       }

// Create new instance - speech synthesis
const synthesis = window.speechSynthesis;

// Establish that browser has speech recognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

window.SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
window.SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

// var formOptions = ["Departing", "Destination", "Bag", "Carry On"];
// var grammar =
//   "#JSGF V1.0; grammar colors; public <formOptions> = " +
//   formOptions.join(" | ") +
//   " ;";

// let speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);

// Create new instance - speech recognition
const recognition1 = new SpeechRecognition();
const recognition2 = new SpeechRecognition();
const recognition3 = new SpeechRecognition();
// recognition.grammars = speechRecognitionList;
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
// let startRecognition = document.querySelector("#start");
// let stopRecognition = document.querySelector("stop");
// let clearTranscript = document.querySelector("#clear");
// let playSpeech = document.querySelector("#play");
// let transcript = document.querySelector("#transcript");
let errorBox = document.querySelector("#error");
let recordDepart = document.querySelector("#departButton");
let recordDest = document.querySelector("#destinationButton");
let recordBag = document.querySelector("#carryOnButton");

const field1 = document.querySelector("#field1");
const field2 = document.querySelector("#field2");
const field3 = document.querySelector("#field3");

// Add event listeners
// startRecognition.addEventListener("click", handleStartRecognition);
// stopRecognition.addEventListener("click", handleStopRecognition);
// clearTranscript.addEventListener("click", handleClearTranscript);
// playSpeech.addEventListener("click", handlePlaySpeech);
recordDepart.addEventListener("click", handleRecordDepart);
recordDest.addEventListener("click", handleRecordDestination);
recordBag.addEventListener("click", handleRecordCarryOn);
btns = document.getElementsByClassName("stop");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleStopRecognition);
}

// function handleStartRecognition(event) {
//   console.log("start speech recognition");

//   recognition.addEventListener("error", (event) => {
//     console.log("an error occurred");
//   });
//   recognition.addEventListener("onnomatch", (event) => {
//     errorBox.textContent = "I didnt recognize that phrase.";
//   });

//   recognition.addEventListener("result", (event) => {
//     const results = Array.from(event.results)
//       .map((item) => {
//         item[0].transcript;
//       })
//       .join("");

//     console.log(results);
//     transcript.textContent = results;
//   });

//   recognition.start();
// }

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
    // transcript.textContent = results;
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
    // transcript.textContent = results;
    // field2.value = results;
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
    // transcript.textContent = results;
    // field3.value = results;
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
  console.log("speech synthesis");

  let utterance = new SpeechSynthesisUtterance(transcript.textContent);
  synthesis.speak(utterance);
}

// recognition.onspeechend = function (event) {
//   console.log("speech end");
//   recognition.stop();
// };

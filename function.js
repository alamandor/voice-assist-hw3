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

// Create new instance - speech recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
recognition.lang = 'en-US';

// Grab elements from the DOM
let startRecognition = document.querySelector('#start');
let stopRecognition = document.querySelector('#stop');
let clearTranscript = document.querySelector('#clear');
let playSpeech = document.querySelector('#play');
let transcript = document.querySelector('#transcript');

// Add event listeners
startRecognition.addEventListener('click', handleStartRecognition);
stopRecognition.addEventListener('click', handleStopRecognition);
clearTranscript.addEventListener('click', handleClearTranscript);
playSpeech.addEventListener('click', handlePlaySpeech);

function handleStartRecognition(event) {
  console.log('start speech recognition');

  recognition.addEventListener('error', (event) => {
    console.log('an error occurred');
  });

  recognition.addEventListener('result', (event) => {
    const results = Array.from(event.results)
      .map((item) => item[0].transcript)
      .join('');

    console.log(results);
    transcript.textContent = results;
  });

  recognition.start();
}

function handleStopRecognition(event) {
  console.log('stop speech recognition');
  recognition.stop();
}

function handleClearTranscript(event) {
  transcript.textContent = '';
}

function handlePlaySpeech(event) {
  console.log('speech synthesis');

  let utterance = new SpeechSynthesisUtterance(transcript.textContent);
  synthesis.speak(utterance);
}
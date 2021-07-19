var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var formOptions = ['departure', 'destination', 'carry on'];
var grammar = '#JSGF V1.0; grammar formOptions; public <formOptions> = ' + formOptions.join(' | ') + ' ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;


const startRecognition = () => {
	console.log("Speech Recognition Started")
	recognition.start();
}

document.getElementById('subBtn').addEventListener("click", startRecognition)
// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();


recognition.addEven
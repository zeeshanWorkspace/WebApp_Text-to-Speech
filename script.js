const input = document.getElementById('inputField');
const button = document.getElementById('button');

button.addEventListener('click', function(){
    text = input.value;
    let data = new SpeechSynthesisUtterance();
    data.text = text;
    speechSynthesis.speak(data);
})
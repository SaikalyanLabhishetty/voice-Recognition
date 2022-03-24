const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that.";

    if (message.includes('Hi')) {
      speech.text = "Hi! how can i help you?";
    }
    if (message.includes('hi')) {
      speech.text = "Hi! how can i help you?";
    }
    if (message.includes('hi there')) {
      speech.text = "Hi! how can i help you?";
    }
    if (message.includes('hai')) {
      speech.text = "Hi! how can i help you?";
    }
    if (message.includes('Hai')) {
      speech.text = "Hi! how can i help you?";
    }
    if (message.includes('hello')) {
      speech.text = "Hi! how can i help you?";
    }
    if (message.includes('Hello')) {
      speech.text = "Hi! how can i help you?";
    }
    if (message.includes('Hey')) {
      speech.text = "Hi! how can i help you?";
    }
    if (message.includes('Who are you?')) {
      speech.text = "I'm a bot.I'm here to help you";
    }
    if (message.includes('Who are you')) {
      speech.text = "I'm a bot.I'm here to help you";
    }
    if (message.includes('who are you')) {
      speech.text = "I'm a bot.I'm here to help you";
    }
    if (message.includes('How can you help me?')) {
      speech.text = "You can ask your query I'm trained to answer them.";
    }
    if (message.includes('how can you help me')) {
      speech.text = "You can ask your query I'm trained to answer them.";
    }

    if (message.includes('How are you?')) {
      speech.text = "I'm good!how can i help you?";
    }
    if (message.includes('how are you')) {
      speech.text = "I'm good!how can i help you?";
    }

    if (message.includes('Who is Virat Kohli?')) {
      speech.text = "He is an Indian cricketer.Currently Captian of Team India and royal challengers banglore.";
    }
    if (message.includes('Who is Virat Kohli')) {
      speech.text = "He is an Indian cricketer.Currently Captian of Team India and royal challengers banglore.";
    }
    if (message.includes('who is Virat Kohli')) {
      speech.text = "He is an Indian cricketer.Currently Captian of Team India and royal challengers banglore.";
    }

    if (message.includes('Thank you')) {
      speech.text = "You are Welcome!";
    }
    if (message.includes('thank you')) {
      speech.text = "You are Welcome!";
    }
    if (message.includes('Who is Prime Minister of India?')) {
      speech.text = "Narendra Modi";
    }
    if (message.includes('who is Prime Minister of India')) {
      speech.text = "Narendra Modi";
    }
    if (message.includes('Prime Minister of India')) {
      speech.text = "Narendra Modi";
    }
    if (message.includes('prime minister of India')) {
      speech.text = "Narendra Modi";
    }
    if (message.includes('Goodnight')) {
      speech.text = "goodnight";
    }
    if (message.includes('goodnight')) {
      speech.text = "goodnight";
    }
    if (message.includes('Good morning')) {
      speech.text = "Good morning";
    }
    if (message.includes('good morning')) {
      speech.text = "Good morning";
    }
    if (message.includes('Good afternoon')) {
      speech.text = "good afternoon";
    }
    if (message.includes('good afternoon')) {
      speech.text = "good afternoon";
    }
    if (message.includes('Good evening')) {
      speech.text = "good evening";
    }
    if (message.includes('good evening')) {
      speech.text = "good evening";
    }
    if (message.includes('joke')) {
      speech.text = "why can't elephants use computers because they are scared of mouse";
    }
    if (message.includes('say me a joke')) {
      speech.text = "why can't elephants use computers because they are scared of mouse";
    }
    if (message.includes('Open Google.')) {
      speech.text = "<a href=https://https://www.google.com/></a>";
    }



    

    speech.volume = 5;
    speech.rate = 0.9;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});

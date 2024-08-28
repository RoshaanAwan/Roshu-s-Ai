const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1.5;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  const hour = new Date().getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning Boss...");
  } else if (hour >= 12 && hour < 17) {
    speak("Good Afternoon Master...");
  } else {
    speak("Good Evening Sir...");
  }
}

window.addEventListener("load", () => {
  speak("Welcome To Roshaan Bot");
  wishMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const transcript =
    event.results[event.resultIndex][0].transcript.toLowerCase();
  content.textContent = transcript;
  takeCommand(transcript);
};

recognition.onerror = (event) => {
  content.textContent = "Error occurred in speech recognition.";
  speak("Sorry, there was an error with speech recognition.");
};

btn.addEventListener("click", () => {
  content.textContent = "Listening...";
  recognition.start();
});

function takeCommand(message) {
  if (message.includes("increase volume")) {
    speak("Increasing volume.");
  } else if (message.includes("decrease volume")) {
    speak("Decreasing volume.");
  } else if (message.includes("mute")) {
    speak("Muting the sound.");
  } else if (message.includes("increase brightness")) {
    speak("Increasing brightness.");
  } else if (message.includes("decrease brightness")) {
    speak("Decreasing brightness.");
  } else if (message.includes("reset brightness")) {
    speak("Resetting brightness to normal.");
  } else if (message.includes("what is") || message.includes("calculate")) {
    const expression = message
      .replace(
        /what is|calculate|plus|minus|times|by|divided by|over|minus|plus|multiplied by/g,
        ""
      )
      .replace(/times/g, "*")
      .replace(/divided by|over/g, "/")
      .trim();
    try {
      const result = new Function("return " + expression)();
      speak(`${message} equals ${result}`);
    } catch (error) {
      speak("I’m sorry, I didn’t understand the math expression.");
    }
  } else if (message.includes("hey") || message.includes("hello")) {
    speak("Hello Sir, It's Me Roshaan AI?");
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("tell me about my friends")) {
    speak(
      "Chutiyaan hainn saarry. Or my friend yahya have big hips and tits and sameer have small dick and usman have nothing"
    );
  } else if (
    message.includes("how are you?") ||
    message.includes("what's up?")
  ) {
    speak("I am Fine. What About You?");
  } else if (
    message.includes("i am also fine") ||
    message.includes("i am perfect")
  ) {
    speak("Good. Nice");
  } else if (
    message.includes("who are you?") ||
    message.includes("what can you do")
  ) {
    speak(
      "I’m the bot of Roshaan AI, your personal assistant. I can help you browse the web, tell you the time, and more."
    );
  } else if (message.includes("play a song")) {
    window.open("https://www.youtube.com/watch?v=QxddU3sjVRY", "_blank");
    speak("Playing A Song");
  } else if (
    message.includes("what's the weather today?") ||
    message.includes("is it going to rain tomorrow?") ||
    message.includes("is it going to rain today?")
  ) {
    window.open(
      "https://search.brave.com/search?q=google+weather&source=desktop",
      "_blank"
    );
    speak("Opening Weather Forecast");
  } else if (message.includes("tell me a joke")) {
    speak("Apni shakal dekh lo ja kr hahaha");
  } else if (message.includes("open twitter")) {
    window.open("https://twitter.com", "_blank");
    speak("Opening Twitter...");
  } else if (message.includes("open instagram")) {
    window.open("https://instagram.com", "_blank");
    speak("Opening Instagram...");
  } else if (message.includes("open whatsapp")) {
    window.open("https://whatsapp.com", "_blank");
    speak("Opening WhatsApp...");
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening YouTube...");
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (message.includes("wikipedia")) {
    const searchTerm = message.replace("wikipedia", "").trim();
    window.open(`https://en.wikipedia.org/wiki/${searchTerm}`, "_blank");
    speak(`This is what I found on Wikipedia regarding ${searchTerm}`);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    speak(`The current time is ${time}`);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleDateString([], {
      month: "short",
      day: "numeric",
    });
    speak(`Today's date is ${date}`);
  } else if (message.includes("calculator")) {
    window.open("./calculator.html");
    speak("Opening Calculator");
  } else {
    const searchQuery = message.replace(" ", "+");
    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
    speak(`I found some information for ${message} on Google`);
  }
}

// M E N U

const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", function () {
  menu.classList.toggle("visible");
});

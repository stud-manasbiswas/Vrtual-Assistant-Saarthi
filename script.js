const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Good Morning manas...");
  } else if (hour >= 12 && hour < 17) {
    speak("Good Afternoon manas...");
  } else {
    speak("Good Evening manas...");
  }
}

window.addEventListener("load", () => {
  speak("hi i am  Saarthi your virtual assistant...");
  wishMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  content.textContent = "Listening to you...";
  recognition.start();
});

function takeCommand(message) {
  if (message.includes("hi") || message.includes("hello Saarthi")) {
    speak("Hello Sir, How May I Help You?");
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("Saarthi")) {
    speak("Saarthi ready – where shall we go?");
  } else if (message.includes("who made you")) {
    speak("Manas Biswas");
  } else if (message.includes("manas") && message.includes("linkedin")) {
    window.open("https://www.linkedin.com/in/manas-biswas214/", "_blank");
    speak("Here is Manas's LinkedIn profile");
  } else if (message.includes("manas") && message.includes("github")) {
    window.open("https://github.com/stud-manasbiswas", "_blank");
    speak("Here is Manas's GitHub profile");
  } else if (message.includes("instagram") && message.includes("manas")) {
    window.open("https://www.instagram.com/_manas_1720/", "_blank");
    speak("Here is Manas's Instagram profile");
  } else if (message.includes("instagram")) {
    window.open("https://instagram.com", "_blank");
    speak("Opening Instagram");
  } else if (
    message.includes("who is your owner") ||
    message.includes("your creator")
  ) {
    speak("I was created by Manas Biswas.");
  } else if (message.includes("you are made using")) {
    speak("I was built using HTML, CSS, and JavaScript.");
  } else if (
    message.includes("who are you") ||
    message.includes("hu r u") ||
    message.includes("tell me about yourself")
  ) {
    speak(
      "I am Saarthi, your virtual assistant — here to guide and help you with anything you need."
    );
  } else if (message.includes("who is manas")) {
    speak(
      "Hi, I’m Manas Biswas — a passionate and driven tech enthusiast, currently pursuing my degree with a deep focus on full-stack development, data structures & algorithms, and AI-powered web solutions. I thrive on building real-world applications and participating in hackathons."
    );
  } else if (message.includes("who is") || message.includes("what is")) {
    
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText =
      "This is what I found on the internet regarding " + message;
    speak(finalText);
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...");
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText =
      "This is what I found on the internet regarding " + message;
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message
        .replace("wikipedia", "")
        .trim()}`,
      "_blank"
    );
    const finalText = "This is what I found on Wikipedia regarding " + message;
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = "The current time is " + time;
    speak(finalText);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = "Today's date is " + date;
    speak(finalText);
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on Google";
    speak(finalText);
  }
}

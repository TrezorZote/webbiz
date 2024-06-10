

window.onload=function(){

function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 3;

    window.speechSynthesis.speak(text_speak);
}
//wish me good ...
function wishMe(){
    var day = new Date();
    var hour = day.getHours();
    
    if(hour>=0 && hour<12){
    speak("Good Morning ...");
    }
    
    else if(hour>12 && hour<17){
    speak("Good Afternoon ...");
    }
    
    else{
    speak("Good Evenining ...");
    }
    
    }

const jarvisBtn = document.getElementById('idtalk');
const content = document.getElementById('idcontent');





wishMe();
speak(" I am the Tamliz chatbot...");
    


// Check if the browser supports SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
 const recognition =  new SpeechRecognition();


 const radioButtons = document.getElementsByName('language');
 let selectedLanguage = '';

 // Iterate through radio buttons to find the checked one
 radioButtons.forEach((radio) => {
   if (radio.checked) {
     selectedLanguage = radio.value;
   }
  
 });
 // Set the language based on the selected radio button
  //Set recognition language
 recognition.lang = selectedLanguage;
 
 
 
/* Set properties
recognition.continuous = true; // Keep recognition going even after pauses
recognition.interimResults = true; // Show interim results as they are recognized
 */


recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    
    takeCommand(transcript.toLowerCase());
}

function startRecognition(){
    
    content.textContent = "Listening....";
    recognition.start();
   
} 
/*
onstart: Fired when the speech recognition service starts.
onresult: Fired when speech recognition results are returned.
onerror: Fired when there is a recognition error.
onend: Fired when the speech recognition service has disconnected. 
*/

jarvisBtn.addEventListener('click', startRecognition);


 

//take command                      
function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello, How May I Help You today?");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    }
    //explain temliz
    else if(message.includes("about this app")){
        let explain ="temliz was made to display the programming basics of the developer in Angular. visit the other pages to learn more";
        speak(explain);
    }
    else if(message.includes("event")){
        let event ="the event page simulates a web application which shows upcoming events, you could also add your own event";
        speak(event);
    }
    else if(message.includes("worker")){
        let worker ="the worker page simulates an app which shows job applicants, you could also add your profile";
        speak(worker);
    }
    else if(message.includes("ecommerce")){
        let ecomm ="the ecommerce page simulates an Ecommerce platform, you could also add products for sale, and add products to your corb";
        speak(ecomm);
    }
    else if(message.includes("hotel")){
        let hotel ="the hotel page simulates a hotel or airbnb booking web application, you can also add your hotel or airbnb ";
        speak(hotel);
    }
    else if(message.includes("account")){
        let explain ="the account page simulates a bankaccount web application , you can sign in and carry out transactions";
        speak(explain);
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"});
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }

}

//take  Germancommand  
/*                    
function takeGermanCommand(message){
    if(message.includes('hey') || message.includes('hallo')){
        speak("Hallo, wie kann ich hilfreich sein?");
    }
    else if(message.includes("öffne google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }
    else if(message.includes("öffne youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"});
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }

}
*/

}
else{
    console.log("webbrowser does not support speaking chatbot")
        
}
}
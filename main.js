// Mood check: Positive mental health quotes
const wordsOfAffirmation = [
    "Hi there! Don't forget to dehydrate :)", 
    "Take a little walk sometimes!"]; 

// For reminding user of tasks at hand; saves both the 'timer' and 'task (link to read)'
// const timedTaskReminder = []; // Maybe should be an object, so that it can store the time as well?
let timedTaskReminder = {};

// For character image
let character = ["https://cdn.wikirby.com/thumb/0/0d/KARs_Kirby.png/1293px-KARs_Kirby.png?20250819145246"];

// For character image changing/update
//"Animate" character by looping through a number of poses/images of character?  ---> Could be a stretch goal
const imgs = document.getElementsByClassName("characs")

for (image of imgs) {
    const index = Math.floor(Math.random() * character.length);
    image.src = character[index];
}



// Loop through words randomly

// for (quotes in wordsOfAffirmation) {
//     const index = Math.floor(Math.random() * wordsOfAffirmation.length);
//     return wordsOfAffirmation[index]; // Need to display words
// } 


//For letting user manually input task links & timer they want to be reminded of later
let userTaskLink;
let userTaskTime;

// timedTaskReminder.push(userTaskLink)
timedTaskReminder[userTaskTime] = userTaskLink; // As a key-pair value?

// function taskInputPopup() { // Maybe could be done via DOM manipulation
//     if (!userTaskTime) {
//      console.log("Hi! Please add a link that you'd like to be reminded to revisit later :)");
    
//     }

//     else {
//     console.log("Hi! Please let us know when you'd like to be reminded by! The format should be HH:MM."); // Set timer
//     if (userTaskTime ) // if input time has already passed that day {
//     console.log("Sorry, seems like it's already past that time today!")

// } else if ()
//     }
// }


document.addEventListener('DOMContentLoaded', function(){
    const focusInput = document.getElementById("focusInput");
    const saveFocusButton = document.getElementById("saveFocus");
    const promptUser = document.getElementById("prompt");

    saveFocusButton.addEventListener('click', function() {
        const focusLink = focusInput.value;
        if(focusLink) {
            chrome.storage.sync.set({"savedLink": focusLink}, function() {
            promptUser.textContent = "Link to remind you later, saved!";
            setTimeout(() => promptUser.textContent = '', 850);
          });
        } else {
            promptUser.textContent = "Please save a link you'd like to revisit later!"
        }
    });

    //   // Optionally, load a previously saved value
    //   chrome.storage.sync.get('savedLink', function(data) {
    //     if (data.savedValue) {
    //       focusInput.value = data.savedLink;
    //     }
    //   });

})



function taskRemindPopup() { // Should do via DOM
    return "Hey, seems like it's time to check this link out:" + userTaskLink;
}



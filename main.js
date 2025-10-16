// Mood check: Positive mental health quotes
const wordsOfAffirmation = [
    "Hi there! Don't forget to dehydrate :)", 
    "Take a little walk sometimes!",
    "Did you know? You're doing an awesome job!",
    "Don't forget to treat yourself every now and then!"]; 

// For reminding user of tasks at hand; saves both the 'timer' and 'task (link to read)'
// const timedTaskReminder = []; // Maybe should be an object, so that it can store the time as well?
let timedTaskReminder = {};

// For character image
let character = [
    "https://cdn.wikirby.com/thumb/0/0d/KARs_Kirby.png/1293px-KARs_Kirby.png?20250819145246",
    "https://static.wikia.nocookie.net/character-stats-and-profiles/images/3/3c/8-2-kirby-free-download-png.png/revision/latest/scale-to-width-down/300?cb=20171219034937",
    "https://ssb.wiki.gallery/images/thumb/0/07/Kirby_SSBU.png/250px-Kirby_SSBU.png"];

// For character image changing/update
//"Animate" character by looping through a number of poses/images of character?  ---> Could be a stretch goal
// const imgs = document.getElementsByClassName("characs");

// for (image of imgs) {
//     const index = Math.floor(Math.random() * character.length);
//     image.src = character[index];
// }



// Loop through words randomly

// for (quotes in wordsOfAffirmation) {
//     const index = Math.floor(Math.random() * wordsOfAffirmation.length);
//     return wordsOfAffirmation[index]; // Need to display words
// } 

// <----- Very initial pilot(?) draft of code
// //For letting user manually input task links & timer they want to be reminded of later
// let userTaskLink;
// let userTaskTime;

// // timedTaskReminder.push(userTaskLink)
// timedTaskReminder[userTaskTime] = userTaskLink; // As a key-pair value?

// // function taskInputPopup() { // Maybe could be done via DOM manipulation
// //     if (!userTaskTime) {
// //      console.log("Hi! Please add a link that you'd like to be reminded to revisit later :)");
    
// //     }

// //     else {
// //     console.log("Hi! Please let us know when you'd like to be reminded by! The format should be HH:MM."); // Set timer
// //     if (userTaskTime ) // if input time has already passed that day {
// //     console.log("Sorry, seems like it's already past that time today!")

// // } else if ()
// //     }
// // }



function taskReminderTimer(totalMS, key) {
// // const hour = parseInt(document.getElementById("intervalHours").value);
// const minutes = parseInt(document.getElementById("intervalMinutes").value);

// //For converting the input time to millisecs
// const totalMS = (/*hours * 3600 + */ minutes * 60) * 1000;

if (totalMS > 0) {
    let remainingTime = totalMS;
    const timingInterval = setInterval(() => {
        remainingTime -= 1000; // Decrements a second
        if (remainingTime < 0) {
            clearInterval(timingInterval);
            document.getElementById("charaMessage").textContent = "Hey, seems like it's time to check this link out:" + chrome.storage.sync.get(key);
        }
    }, 1000) // Updates every second
}
}


// For having the button open the settings menu
    const openMenu = document.getElementById("toggleTray");
    const focusMenu = document.getElementById("focusMenu");
    openMenu.addEventListener('click', function(){
        focusMenu.classList.toggle('is-hidden');
})

//For letting users add a focus (link to be reminded of)
document.addEventListener('DOMContentLoaded', function(){
    const focusInput = document.getElementById("focusInput"); // For inputting name for link
    const linkInput = document.getElementById("linkInput"); // For the actual link to be studied
    const saveFocusButton = document.getElementById("saveFocus");
    const promptUser = document.getElementById("prompt");


    saveFocusButton.addEventListener('click', function() {
        const focusName = focusInput.value;
        const focusLink = linkInput.value;

        timedTaskReminder[focusName] = focusLink; // Saving as key-pair value (Name of task is Key, the actual link is Value)

        if(focusLink) {
            chrome.storage.sync.set({"savedLink": timedTaskReminder[focusName]}, function() {
            promptUser.textContent = "Alright! I remembered that link for you. Your link is safe with me now! I'll remind you later.";
            setTimeout(() => promptUser.textContent = '', 950);
          });
        } else {
            promptUser.textContent = "Please let me know a link you'd like to revisit in the future!"
        }
    });

    //For calculating the timer to alert user of link
    // const hour = parseInt(document.getElementById("intervalHours").value);
    const minutes = parseInt(document.getElementById("intervalMinutes").value);

    //For converting the input time to millisecs
    const totalMS = (/*hours * 3600 + */ minutes * 60) * 1000;

    taskReminderTimer(totalMS, savedLink) 
})




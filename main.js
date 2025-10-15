const wordsOfAffirmation = []; // Mood check: Positive mental health quotes
// const timedTaskReminder = []; // Maybe should be an object, so that it can store the time as well?
let timedTaskReminder = {};

let character = [];

// Loop through words randomly
for (quotes in wordsOfAffirmation) {
    const index = Math.floor(Math.random() * coverUp.length);
    return wordsOfAffirmation[index]; // Need to display words
} 

//"Animate" character by looping through random poses/images of character?  ---> Could be a stretch goal

//For letting user manually input task links & timer they want to be reminded of later
let userTaskLink;
let userTaskTime;

// timedTaskReminder.push(userTaskLink)
timedTaskReminder[userTaskTime] = userTaskLink; // As a key-pair value?

function taskInputPopup() { // Maybe could be done via DOM manipulation
    if (!userTaskTime) {
     console.log("Hi! Please add a link that you'd like to be reminded to revisit later :)");
    
    }

    else {
    console.log("Hi! Please let us know when you'd like to be reminded by! The format should be HH:MM."); // Set timer
    if (userTaskTime ) // if input time has already passed that day {
    console.log("Sorry, seems like it's already past that time today!")

} else if ()
    }
}


function taskRemindPopup() { // Should do via DOM
    return "Hey, seems like it's time to check this link out:" + userTaskLink;
}



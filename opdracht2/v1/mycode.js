// Check if JavaScript file is loaded into the HTML fillred
console.log('The JavaScript file mycode.js have been succesfully loaded into the index.html file')

// Selecting DIV elements by IDs involving javascript code
//QuerySelector werkt niet, waarom niet? Get ElementbyID werkt wel!

var song1 = document.getElementById("song1");
console.log('Class song1 selected')
var song2 = document.getElementById("song2");
 console.log('Class song2 selected')
var song3 = document.getElementById("song3");
console.log('Class song3 selected')
var song4 = document.getElementById("song4");
console.log('Class song4 selected')
var song5 = document.getElementById("song5");
console.log('Class song5 selected')

// Selecting the QUEUE and PLAY symbols //

// Song 1 Symbols
var hidequeuebutton1 = document.querySelector(".song1queuehidden");
console.log('found the variable hidequeuebutton')
var showqueuebutton1 = document.querySelector(".song1queueshow");
console.log('found the variable showqueuebutton')
var hideplaybutton1 = document.querySelector(".song1playhidden");
console.log('found the variable hideplaybutton')
var showplaybutton1 = document.querySelector(".song1playshow");
console.log('found the variable showplaybutton')

// Song 2 Symbols
var hidequeuebutton2 = document.querySelector(".song2queuehidden");
console.log('found the variable hidequeuebutton')
var showqueuebutton2 = document.querySelector(".song2queueshow");
console.log('found the variable showqueuebutton')
var hideplaybutton2 = document.querySelector(".song2playhidden");
console.log('found the variable hideplaybutton')
var showplaybutton2 = document.querySelector(".song2playshow");
console.log('found the variable showplaybutton')


// Song 3 Symbols
var hidequeuebutton3 = document.querySelector(".song3queuehidden");
console.log('found the variable hidequeuebutton')
var showqueuebutton3 = document.querySelector(".song3queueshow");
console.log('found the variable showqueuebutton')
var hideplaybutton3 = document.querySelector(".song3playhidden");
console.log('found the variable hideplaybutton')
var showplaybutton3 = document.querySelector(".song3playshow");
console.log('found the variable showplaybutton')


// Song 4 Symbols
var hidequeuebutton4 = document.querySelector(".song4queuehidden");
console.log('found the variable hidequeuebutton')
var showqueuebutton4 = document.querySelector(".song4queueshow");
console.log('found the variable showqueuebutton')
var hideplaybutton4 = document.querySelector(".song4playhidden");
console.log('found the variable hideplaybutton')
var showplaybutton4 = document.querySelector(".song4playshow");
console.log('found the variable showplaybutton')


// Song 5 Symbols
var hidequeuebutton5 = document.querySelector(".song5queuehidden");
console.log('found the variable hidequeuebutton')
var showqueuebutton5 = document.querySelector(".song5queueshow");
console.log('found the variable showqueuebutton')
var hideplaybutton5 = document.querySelector(".song5playhidden");
console.log('found the variable hideplaybutton')
var showplaybutton5 = document.querySelector(".song5playshow");
console.log('found the variable showplaybutton')


// Eventlistener click (appearing playlist symbol)

// SONG 1 //
song1.addEventListener('click', function (event) {
 console.log('Song 1 is selected by a mouseclick and will be added to queue');
hidequeuebutton1.classList.toggle("song1queueshow");
});

// SONG 2 //
song2.addEventListener('click', function (event) {
 console.log('Song 2 is selected by a mouseclick and will be added to queue');
hidequeuebutton2.classList.toggle("song2queueshow")
});

// SONG 3 //
song3.addEventListener('click', function (event) {
 console.log('Song 3 is selected by a mouseclick and will be added to queue');
hidequeuebutton3.classList.toggle("song3queueshow")
});

// SONG 4 //
song4.addEventListener('click', function (event) {
 console.log('Song 4 is selected by a mouseclick and will be added to queue');
hidequeuebutton4.classList.toggle("song4queueshow")
});

// SONG 5 //
song5.addEventListener('click', function (event) {
 console.log('Song 5 is selected by a mouseclick and will be added to queue');
hidequeuebutton5.classList.toggle("song5queueshow")
});


// Keyboard input (appearing play symbol)

//recognize keydown and dedicated function to that key
function onKeyDown(event) {

    // Keycode 49 represents the number 1
    if (event.keyCode == "49") {
      console.log('Number 1 is pressed and song 1 will be played');
      hideplaybutton1.classList.toggle("song1playshow");
    }
    // Keycode 50 represents the number 2
    if (event.keyCode == "50") {
      console.log('Number 2 is pressed and song 2 will be played');
      hideplaybutton2.classList.toggle("song2playshow");
    }
    // Keycode 51 represents the number 3
    if (event.keyCode == "51") {
      console.log('Number 3 is pressed and song 3 will be played');
      hideplaybutton3.classList.toggle("song3playshow");
    }
    // Keycode 52 represents the number 4
    if (event.keyCode == "52") {
      console.log('Number 4 is pressed and song 4 will be played');
      hideplaybutton4.classList.toggle("song4playshow");
    }
    // Keycode 53 represents the number 5
    if (event.keyCode == "53") {
      console.log('Number 5 is pressed and song 5 will be played');
      hideplaybutton5.classList.toggle("song5playshow");
    }
    }

// EventListener keydown event
window.addEventListener("keydown", onKeyDown, false);









/* eerste faalpoging

function pressOne() {
  console.log('keyboard input 1');
}

window.onKeyDown = function(event) {
  switch (event.keyCode) {
    case 49: // Key "1"
            pressOne();
      break;
    case 50: // Key "2"

      break;
    case 51: // Key "3"

      break;
    case 52: // Key "4"

      break;
    case 53: // Key "5"

      break;

    default:

  }
}
*/


/* derde faalpoging
eventTarget.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 49) {
    return;
  }
  console.log('number 1 is pressed')
});
*/

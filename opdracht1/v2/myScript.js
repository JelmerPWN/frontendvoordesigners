console.log('The JavaScript file myScript.js have been succefully loaded into the index.html file');


// This is where the magic will happen and I have no clue how //

// Have to use these 5 magic things in order to fullfill the exercise //

// QuerySelector: Select the object //
var favicon = document.querySelector('.favoritebutton');
console.log("we hebben een favicon",favicon);
var menufavicon = document.querySelector('.menufavoritebutton');
console.log("we hebben een favicon in het menu",menufavicon);

// EventListener: Make changes to the object //
favicon.addEventListener('click', function (event) {
  console.log('Element clicked through function!');
  favicon.classList.toggle("fillred")
  menufavicon.classList.toggle("fillred")
});

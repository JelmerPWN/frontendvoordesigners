# frontend voor designers - opdracht 2
De opdracht is om een webpagina te maken waarop twee vormen van input kunnen worden verwerkt. In mijn geval wordt een muisklik en toetsaanslagen (nummers 1 t/m 5 herkent). Bij een muisklik symboliseert het plus-teken dat het nummer is toegevoegd aan een wachtrij. Bij een toetsaanslag wordt een play-teken weergegeven wat symboliseert dat het nummer direct wordt afgespeeld.

Eerst een simpel html file gemaakt met de benodigde elementen en deze elementen voorzien van opmaak in het css bestand.

Bij javascript selecteren we eerst 5 verschillende nummers zodat deze div elementen kunnen worden aangeklikt:

```javascript
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
```

Hierna selecteren we de classes van de symbolen (play en plus) zodat deze later door middel van een toggle kunnen worden weergegeven en weer verstopt.

per nummer:
```javascript
var hidequeuebutton1 = document.querySelector(".song1queuehidden");
console.log('found the variable hidequeuebutton')
var showqueuebutton1 = document.querySelector(".song1queueshow");
console.log('found the variable showqueuebutton')
var hideplaybutton1 = document.querySelector(".song1playhidden");
console.log('found the variable hideplaybutton')
var showplaybutton1 = document.querySelector(".song1playshow");
console.log('found the variable showplaybutton')
```

Hierna maken we de klik functie aan zodat deze gebruik kan worden om het plus symbool (welke illustreerd dat het nummer is toegevoegd aan een wachtrij) weer te geven.

per nummer:
```javascript
song1.addEventListener('click', function (event) {
 console.log('Song 1 is selected by a mouseclick and will be added to queue');
hidequeuebutton1.classList.toggle("song1queueshow");
});
```

Als laatste voegen we keyboard input toe zodat een nummer direct kan worden afgespeeld (geïllustreerd door een play symbool). De keyboard input voegen we toe als functie:

```javascript
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
```

Hiermee hebben we twee verschillende vormen van input toegepast op deze webpagina.

[Bekijk versie 1](https://JelmerPWN.github.io/frontendvoordesigners/opdracht2/v1/index.html)
[Bekijk de brondcode van versie 1](https://github.com/JelmerPWN/frontendvoordesigners/blob/master/opdracht2/v1/)


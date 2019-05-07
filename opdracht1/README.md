# frontend voor designers - opdracht 1
De opdracht is om een webpagina te maken waarop een lijstje met films staan welke je kunt toevoegen aan je favoriete door op het hartje te drukken. 

Ik heb het lijstje met films via de 'old-school' table methode te gebruiken in het html bestand. In het css bestand staat de opmaak voor de webpagina waarbij uitgelicht dit stukje code gebruikt wordt om een kleine animatie af te spelen zodra er op het hartje wordt geklikt bij een film:

```css
.favoritebutton{
  transition: all 1.5s ease;
}
```
Bij versie 1 is het mogelijk om het hartje bij een film rood te laten kleuren. Echter verandert het hartje in de menubalk nog niet mee. 

[Bekijk versie 1](https://JelmerPWN.github.io/frontendvoordesigners/opdracht1/v1/)
[Bekijk de brondcode van versie 1](https://github.com/JelmerPWN/frontendvoordesigners/blob/master/opdracht1/v1/)

Bij versie 2 kleurt ook het hartje in de menubalk mee indien bij de eerste film het hartje is rood gekleurd. Helaas is het mij niet gelukt om voor de overige twee films het hartje werkend te maken. 

[Bekijk versie 1](https://JelmerPWN.github.io/frontendvoordesigners/opdracht1/v2/)
[Bekijk de brondcode van versie 1](https://github.com/JelmerPWN/frontendvoordesigners/blob/master/opdracht1/v2/)

Het javascript gedeelte is opgebouwd uit twee delen. Namelijk het selecteren van het object en een eventlistener, toggle aan te maken voor het object. 
```javascript
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
```




// Check if the javascript file is loaded in the html file
// console.log('The javascript file have been succesfully loaded into the html page')

// Create variables and selecting header and section
var header = document.querySelector('header');
// console.log('Header selected')
var section = document.querySelector('section');
// console.log('Section selected')

// Create variable requestURL and use JSON file as value
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
// console.log('JSON url found')

// Create variable request
var request = new XMLHttpRequest();
// console.log('Make a request')

// Use above variables to eventually request the data inside the JSON file
request.open('GET', requestURL);
// console.log('Requesting open access to JSON file on the specified JSON url')

// Convert JSON to Javascript Object
request.responseType = 'json';
request.send();
// console.log('Convert JSON file to a Javasript Object')

// Waiting for server return
request.onload = function () {
    var superMovies = request.response;
    showMovies(superMovies);
    showSlides(slideIndex);
    keyboardInput();
    // console.log('Server returns data')
};

// Creating movies
function showMovies(jsonObj) {
    var movies = jsonObj;

// For loop from tutorial changed by Sebastian Weiland (Awesome Austrian Guy)
    for (var i = 0; i < Object.keys(jsonObj).length; i++) {

// Create variables with document elements
        var myArticle = document.createElement('div');
        var moviePoster = document.createElement('img');
        var movieTitle = document.createElement('div');
        var movieShortPlot = document.createElement('div');

        var moreInfo = document.createElement('div');
        var moviePosterInfo = document.createElement('img');
        var movieTitleInfo = document.createElement('div');
        var moviePlot = document.createElement('p');
        var movieReleaseDate = document.createElement('p');
        var movieRatings = document.createElement('p');
        var movieGenres = document.createElement('p');
        var movieDirectors = document.createElement('div');
        var movieStars = document.createElement('div');

        var closeBtn = document.createElement('button');


// Retrieve corresponding data
        myArticle.className = "mySlides fade";
        moviePoster.className = "movieposter";
        moviePoster.setAttribute("onClick", "showMore()");
        movieTitle.className = "text";
        movieShortPlot.className = "short_plot";

        moviePoster.src = movies[i].cover;
        movieTitle.textContent = movies[i].title;
        movieShortPlot.textContent = movies[i].simple_plot;

        moreInfo.className = "movieinfocard";
        moviePlot.className = "inforcard_plot";
        movieReleaseDate.className = "infocard_release";
        movieRatings.className = "inforcard_reviews";
        movieGenres.className = "infocard_genre";
        moviePosterInfo.className = "infocard_movieposter";
        moviePosterInfo.src = movies[i].cover;
        movieTitleInfo.className = "infocard_text";
        movieTitleInfo.textContent = movies[i].title;

        moviePlot.textContent = 'Plot: ' + movies[i].plot;
        movieReleaseDate.textContent = 'Release Date: ' + movies[i].release_date;
        movieRatings.textContent = 'Reviews:';
        movieGenres.textContent = 'Genres:';
        movieDirectors.textContent = 'Director:';
        movieStars.textContent = 'Stars:';
        closeBtn.type = 'button';
        closeBtn.setAttribute("onClick", "closeInfo()");
        closeBtn.innerHTML = 'Close';


// for-loop for ratings
        var superRatings = movies[i].reviews;
        for (var j = 0; j < superRatings.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superRatings[j].score;
            movieRatings.appendChild(listItem);
        }

// for-loop for genres
        var superGenres = movies[i].genres;
        for (var k = 0; k < superGenres.length; k++) {
            var listItem2 = document.createElement('li');
            listItem2.textContent = superGenres[k];
            movieGenres.appendChild(listItem2);
        }

// for-loop for directors
        var superDirectors = movies[i].directors;
        for (var l = 0; l < superDirectors.length; l++) {
            var listItem3 = document.createElement('li');
            listItem3.textContent = superDirectors[l].name;
            movieDirectors.appendChild(listItem3);
        }

// for-loop for acters
        var superStars = movies[i].actors;
        for (var m = 0; m < superStars.length; m++) {
            var listItem4 = document.createElement('img');
            var listItem5 = document.createElement('li');
            listItem4.src = superStars[m].url_photo;
            listItem5.textContent = superStars[m].actor_name;
            movieStars.appendChild(listItem4);
            movieStars.appendChild(listItem5);
        }

// display information
        myArticle.appendChild(moviePoster);
        myArticle.appendChild(movieTitle);
        myArticle.appendChild(movieShortPlot);

        moreInfo.appendChild(closeBtn);
        moreInfo.appendChild(moviePosterInfo);
        moreInfo.appendChild(movieTitleInfo);
        moreInfo.appendChild(moviePlot);
        moreInfo.appendChild(movieReleaseDate);
        moreInfo.appendChild(movieRatings);
        moreInfo.appendChild(movieGenres);
        moreInfo.appendChild(movieDirectors);
        moreInfo.appendChild(movieStars);

        myArticle.appendChild(moreInfo);

        document.getElementById("slideshow-container").appendChild(myArticle);
    }
}


// JAVASCRIPT FOR carrousel
var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className = " active";
}

// Event listener Keydown Arrow Left and Arrow Rigth to control carrousel
function keyboardInput() {
    document.getElementById("listen").addEventListener("keydown", e => e.key === "ArrowRight" ? plusSlides(1) : e.key === "ArrowLeft" ? plusSlides(-1) : currentSlide(slideIndex))
}

var cards;

// If clicked on a movie poster execute the following code
function showMore() {
    cards = document.getElementsByClassName("movieinfocard");
    cards[slideIndex - 1].style.display = "block";
}

function closeInfo() {
    cards[slideIndex - 1].style.display = "none";
}

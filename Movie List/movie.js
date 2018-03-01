document.querySelector('#createMovie').addEventListener('click', function(event) {

    var movieTitle = document.getElementById('title').value;
    var movieLength = document.getElementById('length').value;
    var movieGenre = document.getElementById('select').value;
    document.getElementById('length').addEventListener('click', function(event) {

        document.getElementById('length').value = "";

    });
    document.getElementById('title').addEventListener('click', function(event) {

        document.getElementById('title').value = "";
    });

    if (isNaN(parseInt(movieLength))) {
        alert("length must be a number!");
        console.log("sdsdkj");
    }


    function Movie(movieTitle, movieLength, movieGenre) {
        this.movieTitle = movieTitle;
        this.movieLength = movieLength;
        this.movieGenre = movieGenre;
        this.genreInitials = function() {
            var genre = this.movieGenre.toUpperCase();

            var initials = genre[0] + genre[genre.length - 1];

            return initials;
        };
        this.getData = function() {
            return this.movieTitle + ", " + this.movieLength + "min, " + this.genreInitials();
        };
        // console.log(this.getData());
    }

    var movie = new Movie(movieTitle, movieLength, movieGenre);

    allMovies.push(movie);

    // console.log(allMovies)


    // new element with all information about the movie
    var newP = document.createElement('li');
    var pText = document.createTextNode(movie.getData());
    newP.appendChild(pText);
    var someList = document.querySelector('ul');
    someList.appendChild(newP);


    // new text node with total movies length
    var allMoviesLength = function() {
        var total = 0;
        for (var i in allMovies) {
            total += parseInt(allMovies[i].movieLength);
        }
        return total;
    }

    var totalLength = document.createTextNode(allMoviesLength());
    document.getElementById('allmovieslength').replaceChild(totalLength, document.getElementById('allmovieslength').childNodes[0]);




});
var allMovies = [];
document.querySelector('#createMovie').addEventListener('click', createNewMovie);

function createNewMovie() {
    var lengthInput = document.getElementById('length');
    var titleInput = document.getElementById('title');
    var movieTitle = titleInput.value;
    var movieLength = lengthInput.value;
    var movieGenre = document.getElementById('select').value;
    lengthInput.addEventListener('click', function(event) {

        lengthInput.value = "";

    });
    titleInput.addEventListener('click', function(event) {

        titleInput.value = "";
    });





    var movie = new Movie(movieTitle, movieLength, movieGenre);
    if (!isNaN(parseInt(movieLength))) {
        allMovies.push(movie);

    }

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

    if (isNaN(parseInt(movieLength))) {
        alert("length must be a number!");

        someList.removeChild(newP);
    }
}
var allMovies = [];
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
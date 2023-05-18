const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("один из последних просмотренных фильмов?", ""),
  b = prompt("на сколько вы его оцениваете?", ""),
  c = prompt("один из последних просмотренных фильмов?", ""),
  d = prompt("на сколько вы его оцениваете?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

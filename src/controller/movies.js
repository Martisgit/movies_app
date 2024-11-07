import { v4 as uuidv4 } from "uuid";

let movies = [];

const GET_RESPONSE = (req, res) => {
  res.status(200).json({ response: "heyoo" });
};

const GENERATE_ID = (req, res) => {
  return res.status(200).json({ id: uuidv4() });
};

const INSERT_MOVIE = (req, res) => {
  const movie = {
    id: uuidv4(),
    title: req.body.title,
    genre: req.body.genre,
    rating: req.body.rating,
    releaseDate: req.body.releaseDate,
  };

  const isTitleExists = movies.some((movie) => movie.title === req.body.title);

  if (isTitleExists) {
    return res.status(409).json({ message: "this movie already exists" });
  }

  movies.push(movie);

  return res
    .status(201)
    .json({ response: "movie was added successfully", movie: movie });
};

const GET_ALL_MOVIES = (req, res) => {
  if (movies.length > 0) {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

    return res.status(200).json({ movies: sortedMovies });
  }
  return res.status(200).json({ message: "no movies available" });
};

const GET_MOVIE_BY_ID = (req, res) => {
  const movie = movies.find((m) => m.id === req.params.id);

  if (!movie) {
    return res.status(404).json({ message: "movie does not exist" });
  }

  return res.status(200).json({ movie: movie });
};

const UPDATE_MOVIE_BY_ID = (req, res) => {
  const movie = movies.find((m) => m.id === req.params.id);

  if (!movie) {
    return res.status(404).json({ message: "movie does not exist" });
  }

  const index = movies.findIndex((t) => t.id === req.params.id);

  movies[index] = { ...movies[index], ...req.body };

  return res.status(200).json({ message: "movie was updated" });
};

const DELETE_MOVIE_BY_ID = (req, res) => {
  const movie = movies.find((m) => m.id === req.params.id);

  if (!movie) {
    return res
      .status(404)
      .json({ response: `movie ${req.params.id} does not exist` });
  }

  const filteredMovies = movies.filter((m) => m.id !== req.params.id);
  movies = filteredMovies;

  return res.status(200).json({ response: "movie was deleted" });
};

export {
  INSERT_MOVIE,
  GET_ALL_MOVIES,
  GENERATE_ID,
  GET_MOVIE_BY_ID,
  GET_RESPONSE,
  DELETE_MOVIE_BY_ID,
  UPDATE_MOVIE_BY_ID,
};

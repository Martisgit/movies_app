import express from "express";
import {
  INSERT_MOVIE,
  GET_ALL_MOVIES,
  GET_MOVIE_BY_ID,
  UPDATE_MOVIE_BY_ID,
  DELETE_MOVIE_BY_ID,
} from "../controller/movies.js";

const router = express.Router();

router.post("/movies", INSERT_MOVIE);
router.get("/movies", GET_ALL_MOVIES);
router.get("/movies/:id", GET_MOVIE_BY_ID);
router.put("/movies/:id", UPDATE_MOVIE_BY_ID);
router.delete("/movies/:id", DELETE_MOVIE_BY_ID);

export default router;

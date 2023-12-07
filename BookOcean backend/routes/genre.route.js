const express = require("express");
const genreController = require("../controllers/genre.controller");
const auth = require("../middleware/auth");
const verifyToken = require("../middleware/verifyToken");
const genreRoute = express.Router();

genreRoute
  .route("/")
  .post(verifyToken, auth("admin"), genreController.createGenre)
  .get(genreController.getGenres);
genreRoute.route("/:id").get(genreController.getGenreById);

module.exports = genreRoute;

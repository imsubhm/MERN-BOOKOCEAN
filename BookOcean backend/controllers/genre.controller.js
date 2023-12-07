const {
  createGenreServices,
  getGenreServices,
  getGenreServicesById,
} = require("../services/genre.services");

exports.createGenre = async (req, res, next) => {
  try {
    const result = await createGenreServices(req.body);
    res.status(200).send({
      status: "success",
      message: "Genre created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Could not create the Genre",
      error: error.message,
    });
  }
};
exports.getGenres = async (req, res, next) => {
  try {
    const result = await getGenreServices();
    res.status(200).send({
      status: "success",
      message: "Genre get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Could not find any Genre",
      error: error.message,
    });
  }
};
exports.getGenreById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await getGenreServicesById(id);
    if (!result) {
      return res.status(400).send({
        status: fail,
        message: "Could not find any Genre with this ID",
        error: error.message,
      });
    }
    res.status(200).send({
      status: "success",
      message: "Genre get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Could not find any Genre",
      error: error.message,
    });
  }
};

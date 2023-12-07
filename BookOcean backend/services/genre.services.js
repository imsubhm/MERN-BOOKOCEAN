const Genre = require("../models/Genre");

exports.createGenreServices = async (data) => {
  const result = await Genre.create(data);
  return result;
};
exports.getGenreServices = async () => {
  const result = await Genre.find({});
  const count = await Genre.count();
  return { count, result };
};
exports.getGenreServicesById = async (id) => {
  const result = await Genre.findOne({ _id: id });
  return result;
};

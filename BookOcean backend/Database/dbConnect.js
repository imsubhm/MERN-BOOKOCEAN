const mongoose = require("mongoose");
const colors = require("colors");

const dbconnect = () => {
  mongoose.connect(process.env.DATABASE, { dbName: "bookocean" }).then(() => {
    console.log(`Database connection successful`.red.bold);
  });
};

module.exports = dbconnect;

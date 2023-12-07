const express = require("express");
require("dotenv").config();
const cors = require("cors");

const dbconnect = require("./Database/dbConnect");
const productRoute = require("./routes/product.route");
const categoryRoute = require("./routes/category.route");
const genreRoute = require("./routes/genre.route");
const orderRoute = require("./routes/shipping.route");
const userRoute = require("./routes/user.route");
const port = process.env.PORT || 7000;
const reviewRoute = require("./routes/review.route");
const paymentRoute = require("./routes/payment.route");

const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

dbconnect();

app.get("/", (req, res) => {
  res.send("Bookocean bookstore...");
});

app.use("/products", productRoute);
app.use("/categories", categoryRoute);
app.use("/genres", genreRoute);
app.use("/orders", orderRoute);
app.use("/users", userRoute);
app.use("/reviews", reviewRoute);
app.use("/payment", paymentRoute);

app.listen(port, () => {
  console.log(`App is running on port ${port}`.white.bold);
});

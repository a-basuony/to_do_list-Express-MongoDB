const mongoose = require("mongoose");

const connection = () => {
  return mongoose
    .connect("mongodb://localhost:27017/to_do_list")
    .then((result) => {
      console.log("Connected DB!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connection;

const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://richard:2024@cluster0.xdqhz.mongodb.net/RichardDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });

  const itemSchema = new mongoose.Schema({
    
  })

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listening...");
  }
});

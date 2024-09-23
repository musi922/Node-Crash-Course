const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://richard:2024@cluster0.xdqhz.mongodb.net/RichardDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("conected  to  db"))
  .catch(() => console.log("error"));

const dataschema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const datamodal = new mongoose.model("Data", dataschema);

app.get("/data", async (req, res) => {
  try {
    const data = await datamodal.find();
    res.json(data);
  } catch (err) {
    console.log("error");
  }
});
app.get("/data/:id", async (req, res) => {
  try {
    const data = await datamodal.findById(req.params.id);
    res.json(data);
  } catch (err) {
    console.log("error");
  }
});
app.post("/data", async (req, res) => {
  try {
    const data = await datamodal(req.body);
    await data.save();
    res.json(data);
  } catch (err) {
    console.log("error");
  }
});

app.put("/data/:id", async (req, res) => {
    try {
      const data = await datamodal.findByIdAndUpdate(req.params.id,req.body);
      res.json(data);
    } catch (err) {
      console.log("error");
    }
  });

app.delete("/data/:id", async (req, res) => {
  try {
    const data = await datamodal.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (err) {
    console.log("error");
  }
});app.listen(4000, () => console.log("server is running to server"));

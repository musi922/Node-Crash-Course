const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://richard:2024@cluster0.xdqhz.mongodb.net/RichardDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("got error");
  });

const dataSchema = new mongoose.Schema({
  id: Number,
  name: String,
  stadescriptiontus: String,
  price: Number,
});

const dataModal = new mongoose.model("Data", dataSchema);

app.use(express.json());

app.get("/items", async (req, res) => {
  try {
    const item = await dataModal.find();
    res.status(200).send(item);
  } catch (error) {
    res.status(404).send("Not Found");
  }
});
app.get("/items/:id", async (req, res) => {
  try {
    const item = await dataModal.findById(req.params.id);
    res.status(200).send(item);
  } catch (error) {
    res.status(404).send("Not Found");
  }
});

app.post("/items", async (req, res) => {
  try {
    console.log(req.body);
    const item = new dataModal(req.body);
    await item.save();
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send("there was an error");
  }
});

app.put("/items/:id", async (req, res) => {
  try {
    const item = await dataModal.findByIdAndUpdate(req.params.id, req.body);
    if (!item) res.status(404).send("item not found");
    res.status(200).send(item);
  } catch (error) {
    if (error) res.status(404).send("Not Found");
  }
});

app.delete("/items/:id", async (req, res) => {
  try {
    const item = await dataModal.findByIdAndDelete(req.params.id);
    if (!item) res.status(404).send("item not found");
    res.status(200).send(item);
  } catch (error) {
    if (error) res.status(404).send("Not Found");
  }
});

app.listen(3000, () => console.log("server is running to server"));
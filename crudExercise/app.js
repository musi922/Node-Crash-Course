const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.get("/data", (req, res) => {
  fs.readFile("../data.json", (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/data/:id", (req, res) => {
  const id = Number(req.params.id);
  fs.readFile("../data.json", (err, data) => {
    if (err) console.log(err);
    const parsedData = JSON.parse(data);
    const item = parsedData.find((item) => item.id === id);

    if (item) {
      res.status(200).send(item);
    } else {
      res.status(404).send("Item not found");
    }
  });
});

app.post("/data/new", (req, res) => {
  fs.readFile("../data.json", (err, data) => {
    if (err) res.status(404).console.log(err);
    const prevData = JSON.parse(data);
    prevData.push(req.body);
    console.log(req.body);

    fs.writeFile("../data.json", JSON.stringify(prevData), (err) => {
      if (err) res.status(400).send(err);
      res.send("data sent");
    });
  });
});

app.put("/data/:id", (req, res) => {
  const id = Number(req.params.id);

  fs.readFile("../data.json", (err, data) => {
    if (err) res.status(500).send("Server error");

    const parsedData = JSON.parse(data);
    const itemIndex = parsedData.findIndex((item) => item.id === id);

    if (itemIndex === -1) return res.status(404).send("Item not found");

    parsedData[itemIndex] = req.body;

    fs.writeFile("../data.json", JSON.stringify(parsedData, null, 2), (err) => {
      if (err) res.status(500).send("Error saving data");

      res.status(200).send("Item updated successfully");
    });
  });
});

app.delete("/data/:id", (req, res) => {
  const id = Number(req.params.id);
  fs.readFile("../data.json", (err, data) => {
    if (err) res.status(404).send(err);
    const parsedData = JSON.parse(data);
    const result = parsedData.filter((post) => post.id !== id);
    fs.writeFile("../data.json", JSON.stringify(result), (err) => {
      if (err) res.status(404).send("there was an error");
      res.send("deleted buddy");
    });
  });
});

app.listen(3000, () => {
  console.log("listening to server");
});

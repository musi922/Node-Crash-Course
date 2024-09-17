const express = require("express");
const app = express();
const fs = require("fs");

app.get("/data", (req, res) => {
  fs.readFile("./data.json", (err, data) => {
    res.setHeader("Content-Type","application/json")
    if (err) {
      console.log(err);
    }
    res.send(data); 
  });
});

app.post("/data/new", (req, res) => {
  fs.readFile("./data.json", (err, data) => {
    if (err) {
      console.log(err);
    }
    let prevData = JSON.parse(data);
    prevData.push({
      title: "Richard",
      author: "Rich Kid In the House",
      year: 1923,
    });
    fs.writeFile("./data.json", JSON.stringify(prevData), (err, data) => {
      if (err) {
        console.log(err);
      }
      res.end("success");
    });
  });
});

app.listen(3000, () => console.log("started the server"));

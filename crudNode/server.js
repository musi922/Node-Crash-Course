const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
app.get("/data", (req, res) => {
  fs.readFile("./data.json", (err, data) => {
    if (err) console.log("no data found");
    res.send(data);
  });
});
app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./data.json", (err, data) => {
    if (err) console.log("no data found");
    const pardata = JSON.parse(data);
    const parseddata = pardata.find((data) => data.id === id);
    res.send(parseddata);
  });
});

app.post("/data/new", (req, res) => {
  fs.readFile("./data.json", (err, data) => {
    if (err) console.log("bther  was  errror");
    const parseddata = JSON.parse(data);
    parseddata.push(req.body);
    fs.writeFile("./data.json", JSON.stringify(parseddata), (err) => {
      if (err) res.status(404).send("error");
      res.send("sent");
    });
  });
});
app.put("/data/:id", (req, res) => {
  const id = Number(req.params.id);
  fs.readFile("./data.json", (err, data) => {
    if (err) console.log("no data found");
    const pardatas = JSON.parse(data);
    const parseddata = pardatas.findIndex((data) => data.id === id);
    pardatas[parseddata] = req.body;
    console.log(pardatas[parseddata]);

    fs.writeFile("./data.json", JSON.stringify(pardatas), (err) => {
      if (err) res.status(404).send("error");
      res.send("sent");
    });
  });
});

app.delete("/data/:id", (req, res) => {
  const id = Number(req.params.id);
  fs.readFile("./data.json", (err, data) => {
    if (err) console.log("no data found");
    const parsedData = JSON.parse(data);
    const prevData = parsedData.filter((data) => data.id !== id);
    fs.writeFile("./data.json", JSON.stringify(prevData), (err) => {
      if (err) res.status(404).send("error");
      res.send("delebted");
    });
  });
});
app.listen(3000, () => {
  console.log("the  server run");
});

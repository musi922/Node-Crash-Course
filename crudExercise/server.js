const express = require("express")
const app = express()
const fs = require("fs")


app.use(express.json())
//getting all posts
app.get("/", (req,res)=>{
    fs.readFile("../data.json", (err,data)=>{
        if(err) res.status(404).send(err)
        res.send(data)
    })
})

//getting single post
app.get("/:id", (req,res)=>{
    const id = Number(req.params.id)
    fs.readFile("../data.json", (err,data)=>{
        if(err) res.status(404).send(err)
        const parseData = JSON.parse(data)
        const items = parseData.find(data=>data.id === id)
        res.send(items)
    })    
})

//posting a post
app.post("/new", (req,res)=>{
    fs.readFile("../data.json", (err,data)=>{
        if(err) res.status(404).send("there was an error")
        const parsedPrevdata = JSON.parse(data)
       parsedPrevdata.push(req.body)

       fs.writeFile("../data.json", JSON.stringify(parsedPrevdata), (err) => {
        if (err) res.status(400).send(err);
        res.send("data sent");
      });
    })

})


//updating a post

app.put("/:id", (req,res)=>{
    const id = Number(req.params.id)
    fs.readFile("../data.json",(err,data)=>{
        if(err) res.send(404).send("there was an error")
        const parsedData = JSON.parse(data)
        const itemIndex = parsedData.findIndex(item=>item.id === id)
        parsedData[itemIndex] = req.body
        console.log(parsedData);
        

        fs.writeFile("../data.json", JSON.stringify(parsedData), (err)=>{
            if(err) res.status(404).send("not found")
          res.send("successfully changed ")
        })

    })
})

//deleting a post 
app.delete("/:id", (req,res)=>{
    const id = Number(req.params.id)
    fs.readFile("../data.json", (err,data)=>{
        if(err) res.status(404).send("there was an error")
        const parseData = JSON.parse(data)
        const result = parseData.filter((post) => post.id !== id);
      fs.writeFile("../data.json", JSON.stringify(result), (err) => {
      if (err) res.status(404).send("there was an error");
      res.send("deleted buddy");
    });
    })
})

app.listen(4000, ()=>console.log("server is running on 4000"))
const express = require("express")
const app = express()

app.set("view engine", "ejs")

//listen for request

app.listen(3000)
app.get("/", (req,res)=>{
    // res.send('<p>Homepage</p>')
    const blogs = [
        {title:"pirlo gang;", snippet:"Iam the first snippet"},
        {title:"pirlo boy;", snippet:"Iam the sec snippet"},
        {title:"pirlo ric;", snippet:"Iam the third snippet"}

    ]
    res.render("index", {title:"home",blogs}); 
})

app.get("/about", (req,res)=>{
    // res.send("<p>About page</p>")
    res.render("about",{title:"about"})
})

app.get("/blogs/create", (req,res)=>{
    res.render("create",{title:"create"})
})

app.use((req,res)=>{
    res.status(404).render("404",{title:"404"})
})

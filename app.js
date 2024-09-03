const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const Blog = require("./models/blog")
const { render } = require("ejs")

const app = express()

const dbUrl = "mongodb+srv://richardo:richard123@cluster0.xdqhz.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(dbUrl)
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));


app.set("view engine", "ejs")

//listen for request



app.use(morgan("dev"))
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

//mongoose and mongo data
app.get("/add-blog",(req,res)=>{   
const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "more about my new blog"
})
 blog.save()
 .then(result =>{
     res.send(result)
 })
.catch(err => console.log(err)) 
})

//get blogs
app.get("/all-blogs", (req,res)=>{
    Blog.find()
    .then(result =>{
        res.send(result)
    })
    .catch(err => console.log(err))
})


//get single blog
 app.get("/single-blog", (req,res)=>{
     Blog.findById("66ce13adf0746441754ffb58")
     .then(result =>{
         res.send(result)
     })
     .catch(err => console.log(err))
 })

//morgan and static files

app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.redirect("/blogs")
}) 

app.get("/about", (req,res)=>{
    // res.send("<p>About page</p>")
    res.render("about",{title:"about"})
})


app.get("/blogs", (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then(result =>{
        res.render("index",{title: "all blogs", blogs:result})
    })
    .catch(err => console.log(err))
})

app.post("/blogs", (req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then(result =>{
        res.redirect("/blogs")
    })
    .catch(err => console.log(err))
})

//get single blog

app.get("/blogs/:id", (req,res)=>{
    const id = req.params.id
    Blog.findById(id)
    .then(result =>{
       res.render("details", {blog:result, title:"Blog Details"})
    })
    .catch(err => console.log(err))
})
//delete single
app.delete("/blogs/:id", (req,res)=>{
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result =>{
        res.json({redirect: "/blogs"})
    })
    .catch(err => console.log(err))
})


app.get("/blogs/create", (req,res)=>{
    res.render("create",{title:"create"})
})

app.use((req,res)=>{
    res.status(404).render("404",{title:"404"})
})

const http =  require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);

    //set header content type
    res.setHeader("Content-Type", "text/html")

    let path = "./views/";
    switch(req.url){
        case "/":
            path += "index.html"
            break;
        case "/about":
            path += "about.html"
            res.statusCode = 200
            break;
        case "/about-me":
            res.setHeader("Location", "/about")
            res.statusCode = 301
            res.end()
            break;
        default: 
            path += "404.html"
            break;
    }


    //send Html file
    fs.readFile(path,(err,data)=>{
        if (err) {
            console.log(err); 
            res.end()         
        }
        else{
            // res.write(data)
            res.end(data)
        }
    })

    // res.write("My first node project")
    // res.end()
})

server.listen(3000,"localhost",()=>{
    console.log("listening to our request on port 3000");
})
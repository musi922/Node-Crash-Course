const http =  require("http")
const fs = require("fs")
const _ = require("lodash")

const server = http.createServer((req,res)=>{
    const num = _.random(0, 20)
    console.log(num);

    const greet = _.once(()=>{
        console.log("damn");
        
    }
    )
 
    greet()

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
            res.setHeader("Location","/about")
            res.statusCode = 301
            res.e
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
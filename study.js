// const http = require("http")

// const server = http.createServer((req,res)=>{
//   if (req.url === "/") {
//     res.writeHead(200,{"Content-Type":"text/html"})
//     res.end("<h1>Hello worlds!</h1>")
//   }
//   else if (req.url === "/error") {
//     res.writeHead(404,{"Content-Type":"text/html"})
//     res.end("<h1>Not Found!</h1>")
//   }
// })

// server.listen(3000,()=>{console.log("server started");
// })

const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.url==="/data") {
        res.writeHead(200,  {"Content-Type":"text/html"})
        res.end("<h1>hello</h1>")
    }
    else if(req.url==="/error"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>there was error</h1>")
    }
});

server.listen(3000,()=>console.log("bthe  server  is  running")
)

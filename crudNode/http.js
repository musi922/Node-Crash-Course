const  http=require("http")
const  server=http.createServer((req,res)=>{
    if (req.url==="/home") {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>home</h1>")}
})

server.listen(3000,()=>console.log("there is error"))
const fs = require("fs")

const readStream = fs.createReadStream("./docs/blog3.txt")
const writestream = fs.createWriteStream("./docs/blog4.txt")
// we use on as event handle like onclick but here is on()

// readStream.on("data",(chunk)=>{
//     console.log("---new Chunk---");
//     console.log(chunk);
//     writestream.write("\n New chunk \n")
//     writestream.write(chunk)
// })

//piping
readStream.pipe(writestream)
const fs = require("fs")

//reading files {we add ()=>{} because it is asynchronous. function is called after finished}

// fs.readFile("./docs/blog1.txt",(err,data)=>{
//     if (err) {
//         console.log(err); 
//     }
//     console.log(data.toString());
// })


//writing files it erases what we had in file

// fs.writeFile("./docs/blog1.txt", "hello rich-kid",()=>{
//     console.log("file created"); 
// })
// fs.writeFile("./docs/blog2.txt", "hello iam going to create new blog2",()=>{
//     console.log("file was added"); 
// })



//directories {if file exists it will throw error that file already exists hence first check if exists}

// if (!fs.existsSync("./assets")) {
//     fs.mkdir("./assets",(err)=>{
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder created");
//     })
// }

// else {
//     fs.rmdir("./assets", (err)=>{
//         if (err) {
//             console.log(err); 
//         }
//         console.log("folder deleted");
//     })
// }


//deleting files {THis is different from removing directory one is folder anothe file}

if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err)=>{
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
        
    })
}

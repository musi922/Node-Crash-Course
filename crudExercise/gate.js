const EventEmitter = require("events")
const myEmitter = new EventEmitter()

//registers and event and event listerner a call back
myEmitter.on("event",(name)=>{
    console.log(`event occured ${name}`);
    
})

//calls , triggers events or invokes an event and calls all listerner

myEmitter.emit("event","richard")


//hello richard
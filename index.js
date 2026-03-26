//Server
const http = require("http")
const fs = require("fs")

const myServer =http.createServer((req,res)=> {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
    switch(req.url){
        case '/': res.end("Homepage");
        break
        case '/about': res.end("Hello My name is devansh");
        break
        case '/register': res.end("You want to register huh?");
        break
        case '/login': res.end("You want to login huh?");
        break
        default : res.end("Error 404");
    }

    })
});

myServer.listen(8000,()=> console.log("Server Started"));


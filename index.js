//Server
const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer =http.createServer((req,res)=> {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    const myurl = url.parse(req.url,true)
    // console.log(myurl);
    fs.appendFile("log.txt",log,(err,data)=>{
    switch(myurl.pathname){
        case '/': res.end("Homepage");
        break
        case '/about': 
        const username = myurl.query.myname
        res.end(`Hi,${username}`);
        break
        case '/search':
        const search = myurl.query.search_query;
        res.end('Here are your results for '+search)
        break
        case '/register': res.end("You want to register huh?");
        break
        case '/login': res.end("You want to login huh?");
        break
        case '/signup': 
        if(req.method === "GET") res.end("This is a signup form");
        else if( req.method ==="POST") {
            //DB query
            res.end("Success")
        }
        default : res.end("Error 404");
    }

    })
});

myServer.listen(8000,()=> console.log("Server Started"));


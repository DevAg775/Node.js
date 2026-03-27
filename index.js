const http = require("http");
const fs = require("fs");
const url = require("url");

function myhandler(req, res) { // Fixed: changed (req, req) to (req, res)
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    const myurl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err) => {
        // The switch logic should stay inside this callback to ensure logging happens
        switch (myurl.pathname) {
            case '/': 
                res.end("Homepage");
                break;
            case '/about':
                const username = myurl.query.myname || "Guest";
                res.end(`Hi, ${username}`);
                break;
            case '/search':
                const search = myurl.query.search_query;
                res.end('Here are your results for ' + search);
                break;
            case '/register': 
                res.end("You want to register huh?");
                break;
            case '/login': 
                res.end("You want to login huh?");
                break;
            case '/signup':
                if (req.method === "GET") {
                    res.end("This is a signup form");
                } else if (req.method === "POST") {
                    // DB query logic would go here
                    res.end("Success");
                }
                break;
            default:
                res.statusCode = 404;
                res.end("Error 404: Page Not Found");
                break;
        }
    }); // Added missing closing brace for appendFile
} // Added missing closing brace for myhandler

const myServer = http.createServer(myhandler);

myServer.listen(8000, () => console.log("Server Started on http://localhost:8000"));
const http = require("http");

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("Welcome to the world of Genius")
    } else if (req.url === "/about"){
        req.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("This is a start up company promising great things")
    } else {
        res.statusCode = 404
        res.setHeader("Content-Type", "text/plain")
        res.end("404 Page not found")
    }
})

server.listen(port)
console.log(`Server running on ${hostname}:${port}`);


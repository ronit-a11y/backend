const http = require("http");
const fs = require("fs");

const user = {
    id: "ronit",
    age: 19,
}

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    if (method === "GET" && url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the Home Page");
    }

    if (method === "POST" && url === "/") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            fs.writeFile("./file.txt", body, () => {
                res.writeHead(201, { "Content-Type": "text/plain" });
                res.end();
            })
        })
    }
    
})

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

import http from "http";

let movies = [];
let nextId = 1;

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");
  if (request.url === "/movies") {
    if (request.method === "GET") {
      response.statusCode = 200;
      response.end(JSON.stringify(movies));
    } else if (request.method === "POST") {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
        // console.log(chunk.length);
      });
      request.on("end", () => {
        response.end("End");
      });
    } else if (request.method === "PUT") {
    } else if (request.method === "DELETE") {
    } else {
      response.end("Methods not Allowed");
    }
  } else {
    response.statusCode(404);
    response.end("URL not Allowed");
  }
});

server.listen(3000, () => {
  console.log("welcome!");
});

import http, { request } from "http";

// 1

// const server = http.createServer((request, response) => {
//   const hourNow = new Date().getHours();
//   console.log(hourNow);
//   if (6 <= hourNow && hourNow <= 11) {
//     response.end("good morning\n");
//   } else if (17 <= hourNow && hourNow <= 22) {
//     response.end("good evening\n");
//   }
//   response.end("bye\n");
// });

// server.listen(3000, () => {
//   console.log("Hello from my server");
// });

// 2

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.end("Home Page\n");
//   } else if (request.url === "/about") {
//     response.end("About Page\n");
//   } else if (request.url === "/contact") {
//     response.end("Contact Page\n");
//   } else {
//     response.end("Page Not Found\n");
//   }
// });

// server.listen(3000, () => {
//   console.log("welcome!");
// });

// 3

const server = http.createServer((request, response) => {
  if (request.url === "/users") {
    if (request.method === "GET") {
      response.end("Users list\n");
    } else if (request.method === "POST") {
      response.end("User created\n");
    } else {
      response.end("Method Not Allowed\n");
    }
  } else {
    response.end("URL Not Allowed\n");
  }
});

server.listen(3000, () => {
  console.log("welcome!");
});

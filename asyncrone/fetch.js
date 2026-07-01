import fs from "fs/promises";

// 1

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((response) => console.log(response.title))
//   .catch((err) => console.error(err.message));

// 2

// fetch("https://jsonplaceholder.typicode.com/notfound")
//   .then((response) => {
//     console.log(response.status);
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   })
//   .catch((err) => console.error(err.message));

// 3

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((posts) => {
//     for (const post of posts) {
//       console.log(post["title"]);
//     }
//   })
//   .catch((err) => console.error(err));

// 4

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "new title",
//     body: "bla bla bla",
//     userId: "1",
//   }),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((response) => console.log(response));

// 5

// function getUserById(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })
//     .then((body) => console.log(body))
//     .catch((err) => {
//       console.error(err.message);
//     });
// }
// getUserById(565646);

// 6

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((res) => {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${res.userId}`);
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((user) => {
//     console.log(user.name);
//   });

// 7

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users/1"),
  fetch("https://jsonplaceholder.typicode.com/posts/1"),
  fetch("https://jsonplaceholder.typicode.com/todos/1"),
]).then((x) => console.log(x));

// 8

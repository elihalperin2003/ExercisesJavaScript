// // 5

// // async function getTodos1() {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// //   const data = await response.json();
// //   console.log(data);
// // }
// // getTodos1();

// // 6

// // async function getDone() {
// //   return "Done";
// // }

// // console.log(await getDone());

// // 7

// // async function getMultBySelf(num) {
// //   return num * num;
// // }

// // console.log(await getMultBySelf(6));

// // 14

// // async function get2GetApiReading() {
// //   const read1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
// //   const read2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
// // //   console.log(await read1.json(), await read2.json());
// // }
// // get2GetApiReading();

// // 15, 16

// // async function get3GetApiReading() {
// //   try {
// //     let data = await Promise.all([
// //       fetch("https://jsonplaceholder.typicode.com/posts/1"),
// //       fetch("https://jsonplaceholder.typicode.com/posts/2"),
// //       fetch("https://jsonplaceholder.typicode.com/posts/3"),
// //     ]);
// //     for (const reading of data) {
// //       if (!reading.ok) {
// //         throw new Error(reading.statusText);
// //       }
// //     }
// //     return data;
// //   } catch (err) {
// //     console.error(err.message);
// //   }
// // }

// // await get3GetApiReading();

// // 18

// const URLs = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];
// // async function read18() {
// //   const data = [];
// //   for (const url of URLs) {
// //     const d = await fetch(url);
// //     data.push(d);
// //   }
// //   //   await console.log(data);
// //   return data;
// // }
// // read18();

// // 19

// // const URLs19 = [
// //   fetch("https://jsonplaceholder.typicode.com/users/1"),
// //   fetch("https://jsonplaceholder.typicode.com/users/2"),
// //   fetch("https://jsonplaceholder.typicode.com/users/3"),
// // ];

// // async function read19() {
// //   const data = [];
// //   const listURLs = await Promise.all(URLs19);
// //   for (const url of listURLs) {
// //     data.push(await url.json());
// //   }
// //   console.log(data);
// //   return data;
// // }
// // read19();

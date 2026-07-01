import fs from "fs";

// 1;

// const writeFileAsPromise = (filePath, content) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filePath, content, (err) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve();
//     });
//   });
// };

// writeFileAsPromise("data/message.txt", "hi")
//   .then(() => console.log("end"))
//   .catch(console.error);

// 2;

// function readFileAsPromise(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) {
//         return reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// readFileAsPromise("data/message.txt")
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log("end 2"));

// 3;

// function readFileAndCount(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) {
//         return reject(err);
//       } else {
//         return resolve(data.length);
//       }
//     });
//   });
// }

// readFileAndCount("data/message.txt")
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log("end 3"));

// 4

// function appendFileAsPromise(filePath, content) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filePath, content, (err) => {
//       if (err) {
//         return reject(err);
//       } else {
//         return resolve(content);
//       }
//     });
//   });
// }

// appendFileAsPromise("data/step1.txt", "step 1")
//   .then((content) => console.log(content))
//   .then(() => appendFileAsPromise("data/step2.txt", "step 2"))
//   .then((content) => console.log(content))
//   .catch(console.error);

// 5

// function read3Files(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) {
//         return reject(err);
//       } else {
//         return resolve(data);
//       }
//     });
//   });
// }

// const list = [];
// read3Files("data/message.txt")
//   .then((data) => {
//     list.push(data);
//   })
//   .then(() => read3Files("data/step2.txt"))
//   .then((data) => {
//     list.push(data);
//   })
//   .then(() => read3Files("data/step1.txt"))
//   .then((data) => {
//     list.push(data);
//   })
//   .then(() => console.log(list));

// 6

// fs.writeFile("data/report-title.txt", "Daily Report", (err) => {
//   if (err) return console.log(err);
// });
// fs.writeFile("data/report-body.txt", "Everything is working", (err) => {
//   if (err) return console.log(err);
// });

function readFiles(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
}

const finalReport = [];
readFiles("data/report-title.txt")
  .then((data) => finalReport.push(data))
  .then(() => readFiles("data/report-body.txt"))
  .then((data) => finalReport.push(data))
  .then(() => console.log(finalReport))
  .then(() =>
    fs.writeFile("data/final-report.txt", finalReport.join("\n"), (err) => {
      if (err) return console.log(err);
    }),
  );

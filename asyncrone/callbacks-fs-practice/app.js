import fs from "fs";

// const text = "Hello from Node fs\n";
// fs.writeFile("data/message.txt", text, (err) => {
//   if (err) return console.log(err);
//   console.log("File was created successfully");
// });

// const line2 = "his line was added later";
// fs.appendFile("data/message.txt", line2, (err) => {
//   if (err) return console.log(err);
// });

// fs.readFile("data/message.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error:", err);
//     return;
//   }
//   console.log(data);
// });

//
//
//
// const readTextFile = (filePath, callback) => {
//   fs.readFile(filePath, "utf-8", (err, content) => {
//     if (err) return callback(err);
//     callback(null, content);
//   });
// };

//
//
//
const line1log = "Log started\n";
const line2log = "First action completed\n";
const line3log = "Second action completed\n";
fs.writeFile("data/log.txt", line1log, (err) => {
  if (err) return console.log(err);
  fs.appendFile("data/log.txt", line2log, (err) => {
    if (err) return console.log(err);
    fs.appendFile("data/log.txt", line3log, (err) => {
      if (err) return console.log(err);
      fs.readFile("data/log.txt", "utf-8", (err, data) => {
        if (err) return console.log(err);
        console.log(data);
      });
    });
  });
});

import fs from "fs";

const text = "Hello from Node fs";
fs.writeFile("data/message.txt", JSON.stringify(text), (err) => {
  if (err) return console.log(err);
  console.log("File was created successfully");
});

fs.readFile("data/message.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

import fs from "fs";

// fs.access("data/users", (err) => {
//   if (err) {
//     fs.mkdir("data/users", { recursive: true }, (err) => {
//       if (err) {
//         return "Error";
//       }
//     });
//     return;
//   } else {
//     return console.log("the dir is exists");
//   }
// });

// fs.mkdir("data/users", { recursive: true }, (err, newPath) => {
//   if (err) {
//     return console.log(err);
//   }
//   if (!newPath) {
//     return console.log("The dir exists");
//   }
//   return console.log("Users folder created");
// });

// const txt1 = "Name: David\n Age: 25\n";
// fs.access("data/users/", (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   return fs.writeFile("data/users/user1", txt1, (err) => {
//     if (err) return console.log(err);
//   });
// });

// fs.readdir("data", "utf-8", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(data);
// });

// const step1 = "Step 1 completed";
// const step2 = "Step 2 completed";
// const step3 = "Step 3 completed";

// fs.writeFile("data/step1.txt", step1, (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   return fs.writeFile("data/step2.txt", step2, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     return fs.writeFile("data/step3.txt", step3, (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       return console.log("All steps completed");
//     });
//   });
// });

// fs.readFile("data/step1.txt", "utf-8", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   const txtstep1 = data;
//   return fs.readFile("data/step2.txt", "utf-8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }
//     const txtstep2 = data;
//     return fs.readFile("data/step3.txt", "utf-8", (err, data) => {
//       if (err) {
//         return console.log(err);
//       }
//       const txtstep3 = data;
//       console.log(txtstep1);
//       console.log(txtstep2);
//       console.log(txtstep3);
//     });
//   });
// });

fs.writeFile("data/report-title.txt", "Daily Report", (err) => {
  if (err) {
    return console.log(err);
  }
  return fs.writeFile(
    "data/report-body.txt",
    "Everything is working",
    (err) => {
      if (err) {
        return console.log(err);
      }
      return fs.readFile("data/report-title.txt", "utf-8", (err, data) => {
        if (err) {
          return console.log(err);
        }
        const txtTitle = data;
        return fs.readFile("data/reprt-body", "utf-8", (err, data) => {
          if (err) {
            return console.log(err);
          }
          const txtBody = data;
          const finalText = txtTitle + txtBody;
          fs.writeFile("data/final-report.txt", finalText, err);
        });
      });
    },
  );
});

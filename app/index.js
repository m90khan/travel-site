console.log("hello");
let fs = require("fs");
let https = require("https");

fs.writeFile(__dirname + "/index.html", "<h1>HTML is ok</h1>", (error) => {
  if (error) {
    return console.log(error);
  } else {
    return console.log("done");
  }
});

const myPhoto =
  "https://raw.githubusercontent.com/m90khan/travel-site/master/app/assets/images/first-trip.jpg";

https.get(myPhoto, (res) => {
  res.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});

const fs = require("fs");
let text = fs.readFileSync("ak.txt","utf-8");
text = text.replace("file", "files");

console.log("this content of the file is")
console.log(text);

console.log("creating a new file...")
fs.writeFileSync("ashvin.txt", text);

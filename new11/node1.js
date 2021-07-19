// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// const fs= require("fs");
// let text=fs.readFileSync("note1.txt","utf-8");
// text=text.replace("content","sahil");
// console.log(text);
// console.log("creating new file");
// fs.writeFileSync("new2.txt",text);




const fs= require("fs");
let text=fs.readFile("note1.txt","utf-8",(err,data)=>{
console.log(data);
});
console.log("this is comment")
// console.log("creating new file");
// fs.writeFileSync("new2.txt",text);
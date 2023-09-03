// core module
//*file system
const fs = require("fs");

//*menuliskan string ke file (synchronous)
// try{
//     fs.writeFileSync("test.txt", "Hello World secara synchronous!");
// }catch(err){
//     console.log(err);
// }

//*menuliskan string ke file (asynchronous)
// fs.writeFile("test.txt", "Hello World secara asynchronous!", (err) => {
//     console.log(err);
// });

//*membaca isi file (synchronous)
// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);

//*membaca isi file (asynchronous)
// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });
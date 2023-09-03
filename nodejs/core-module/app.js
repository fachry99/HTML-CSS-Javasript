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

//*readLine 
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Masukkan nama anda: ", (nama) => {
    rl.question("Masukkan no HP anda: ", (noHP) => {
        rl.question("Masukkan hobi anda: ", (hobi) => {
            const contact = { nama, noHP, hobi };
            const file = fs.readFileSync("contacts.json", "utf-8");
            const contacts = JSON.parse(file); //mengubah string menjadi objek javascript

            contacts.push(contact);

            fs.writeFileSync("contacts.json", JSON.stringify(contacts));
            console.log("Terima Kasih sudah memasukkan data.");
            rl.close();
    });});
}
);

// Path: nodejs/core-module/contacts.json
// [
//     {
//         "nama": "Rizky",
//         "noHP": "08123456789"
//     },
//     {
//         "nama": "Rizky",
//         "noHP": "08123456789"

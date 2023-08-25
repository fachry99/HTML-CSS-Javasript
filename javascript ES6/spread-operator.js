//* Spread Operator
//? memecah (expand / unpack) iterables menjadi single element.
//? Spread Operator is used to expand an array or object into its elements
//? Spread Operator is used to copy an array or object
//? Spread Operator is used to merge two or more arrays or objects
//? Spread Operator is used to pass an array or object as an argument to a function

// const mhs = ["Riki", "Ridho", "Rizky"];
// console.log(mhs); //? versi biasa
// console.log(...mhs); //? versi spread operator

//* example: menggabungkan 2 array atau lebih
// const mhs1 = ["Riki", "Ridho", "Rizky"];
// const dosen = ["Ade", "Ardi", "Ari"];
// const orang = [...mhs1, "Aji", ...dosen];

// console.log(orang);

//* example: meng-copy array
// const mhs = ["Riki", "Ridho", "Rizky"];
// const mhs1 = [...mhs];
// mhs1[0] = "Aji";
// console.log(mhs1);

const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i =0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

const mhs =[...liMhs].map((m) => m.textContent);


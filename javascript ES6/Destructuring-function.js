//*Destructuring function

// function operator(a, b) {
//   return [a + b, a - b, a * b, a / b];
// } 
// const jumlah = penjumlahanPerkalian(2, 3)[0];  //? cara biasa
// const kali = penjumlahanPerkalian(2, 3)[1];    //? cara biasa
// console.log(jumlah + " " + kali);

// const [jumlah, kali] = penjumlahanPerkalian(2, 3); //? cara destructuring
// console.log(jumlah + " " + kali);

// const [jumlah, kurang, kali, bagi = "tidak ada"] = operator(2, 3); //? cara destructuring
// console.log(jumlah + " " + kurang + " " + kali + " " + bagi);


//* function return object
// function newOperator(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { kali, bagi, tambah, kurang } = newOperator(2, 3); //? cara destructuring
// console.log(kali + " " + bagi + " " + tambah + " " + kurang);

//* destructuring function arguments
const mhs1 = {
    nama: "Riki Widiantoro",
    umur: 23,
    email: "riki@gmail.com",
    nilai: {
        tugas: 80,  //? nilai.tugas
        uts: 85,    //? nilai.uts
        uas: 75     //? nilai.uas
    }
}

function cetakMhs({ nama, umur, email, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, email saya adalah ${email}, nilai ujian saya adalah UTS: ${uts} dan UAS: ${uas}`;
}

console.log(cetakMhs(mhs1));
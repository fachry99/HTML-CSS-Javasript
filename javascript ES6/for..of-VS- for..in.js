//* for..of

// const mhs = ['Sandhika', 'Doddy', 'Erik'];

// for(let i= 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

//? versi forEnch
//mhs.forEach(m => console.log(m));


//? versi for..of
// for(const m of mhs) {
//     console.log(m);
// }       

//? for of versi string
// const nama =  'Sandhika';
// for (const s of nama) {
//     console.log(s);
// }

// const mhs = ['Sandhika', 'Doddy', 'Erik'];
//mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));

//for of tidak bisa mengambil index, jadi harus menggunakan method entries agar bisa mengambil index
// for (const[i, m]of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

//* Node list
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.textContent));

// for (n of liNama) {
//     console.log(n.innerHTML);
// }

//* arguments
// function jumlahkanAngka() {
    // return arguments.reduce((a, i) => a + i); //? arguments tidak bisa menggunakan method reduce
    //? arguments tidak bisa menggunakan method map, filter, dan reduce
    //arguments.forEach(a => jumlah += a); //? arguments juga tidak bisa menggunakan method forEach
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// } 

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

//* for..in
// const mhs = {
//     nama: 'Sandhika',
//     umur: 33,
//     email: 'sandhikagalih@.gmail.com'
// }

// for (m in mhs) {
//     console.log(mhs[m]); //? mhs[m] untuk mengambil value
// }

//* for..in bisa digunakan untuk mengambil index pada array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];

// for (m in mhs) {
//     console.log(mhs[m]); //? mhs[m] untuk mengambil value
// }

//* for..in bisa digunakan untuk mengambil index pada string
// const nama = 'Sandhika';

// for (n in nama) {
//     console.log(nama[n]); //? nama[n] untuk mengambil value
// }

//* for..in bisa digunakan untuk mengambil index pada nodelist
// const liNama = document.querySelectorAll('.nama');

// for (n in liNama) {
//     console.log(liNama[n].textContent);
// }



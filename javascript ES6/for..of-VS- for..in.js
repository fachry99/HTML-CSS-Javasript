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

//? versi string
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
const liNama = document.querySelectorAll('.nama');
console.log(liNama);

liNama.forEach(n => console.log(n.textContent));
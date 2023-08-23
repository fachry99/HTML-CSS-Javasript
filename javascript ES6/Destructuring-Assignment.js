//*Destructuring variable / assignment

//Destructuring Array

const perkenalan = ['Halo', 'nama', 'saya', 'Rizky'];

//const [salam, satu, dua, nama] = perkenalan;
//skip items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//*swap items / tukar nilai
// let a = 1;
// let b = 2;
// console.log(a);
// [a, b] = [b, a];
// console.log(a);

//*return value pada function
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

//*pake rest parameter kalo array nya banyak
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

//*Destructuring Object
// const mhs = {
//     nama: 'Rizky',
//     umur: 20,
//     tinggal: "Jakarta"
// }

// const { nama, umur, tinggal } = mhs;
// console.log(tinggal);

//*Assignment tanpa deklarasi object = harus ada dalam kurung
// ({ nama, umur, tinggal } = {nama: 'Rizky', umur: 20, tinggal: "Jakarta"});
// console.log(nama);

//*Assign ke variable baru
// const mhs = {
//     nama: 'Rizky',
//     umur: 20,
//     tinggal: "Jakarta"
// }

// const {nama: n, umur: u, tinggal} = mhs;
// console.log(n);

//*memberikan default value
// const mhs = {
//     nama: 'Rizky',
//     umur: 20,
//     tinggal: "Jakarta"
// }

// const {nama: n, umur: u, tinggal: t, email: e = 'email@default.com'} = mhs;
// console.log(e);

//*rest parameter
// const mhs = {
//     nama: 'Rizky',
//     umur: 20,
//     tinggal: "Jakarta"
// }

// const {nama: n, ...value} = mhs;
// console.log(n);
// console.log(value);

//*mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Rizky',
    umur: 20,
    tinggal: "Jakarta"
}

function getIdMhs({id}) {
    return id;
}

console.log(getIdMhs(mhs));

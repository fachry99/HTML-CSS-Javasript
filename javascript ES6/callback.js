//* callback
// Synchronous Callback
// function halo(nama) {
//   alert(`halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt("masukkan nama : ");
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`halo, ${nama}`));

// Asynchronous Callback
//const mhs = [
//   {
//     nama: "Sandhika Galih",
//     nrp: "043040023",
//     email: "sandhikagalih@unpas",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Doddy Ferdiansyah",
//     nrp: "133050321",
//     email: "doddy@unpas",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Erik",
//     nrp: "133050321",
//     email: "erik@unpas",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 3,
//   },
//];

// console.log("mulai");
// mhs.forEach(a => console.log(a.nama));
// console.log("selesai");

//* Asynchronous Callback (Ajax valilla javascript)
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// } 


// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');

//* Asynchronous Callback (Ajax jquery)
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');
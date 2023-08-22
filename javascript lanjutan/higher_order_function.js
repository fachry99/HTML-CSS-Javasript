const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka => 3 pake for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// };

// console.log(newAngka);

//*filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

//*Map
//kalikan semua angka pada array dengan 2
// const kaliDua =  angka.map(a => a * 2);
// console.log(angka);
// console.log(kaliDua);

//*reduce
//jumlahkan seluruh elemen pada array
// let ten = 10;
// const jumlahkan = angka.reduce((accumulator, currentValue) => 
// accumulator + currentValue, ten);

// console.log(jumlahkan);

//*method chaining
// cari angka lebih besar 5 dan kali 3 
// const hasil = angka.filter(a => a > 5)
// .map(a => a * 3)
// .reduce((acc, cur) => acc + cur);

// console.log(hasil);

//* Latihan 
//ambil semua elemen video 
const myVideo = Array.from(document.querySelectorAll("[data-duration]")); //menargetkan selektor yang mempunyai atribute data-duration

//pilih hanya yang javascirpt lanjutan
let jsLanjut = myVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
//ambil durasi video
    .map(item => item.dataset.duration)
//ubah durasi jadi float, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(":").map(part => parseFloat(part));
        return (parts[0] * 60 + parts[1]);
    })

//jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik 
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;


//simpan dalam DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = myVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJumlahVideo = document.querySelector(".jumlah-video");
pJumlahVideo.textContent = `${jmlVideo} Video`;

console.log(jsLanjut);
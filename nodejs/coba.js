// console.log("Hello from coba.js");
//function
function cetakNama(nama) {
    return `Hi, nama saya ${nama}`;
}

//variable
const pi = 3.14;

//object
const mahasiswa = {
    nama: "Rizky",
    umur: 20,
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    }
};

//class
class Orang {
    constructor() {
        console.log("Objek orang telah dibuat.");
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.pi = pi;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {cetakNama, pi, mahasiswa, Orang}; // versi ES6 lebih singkat
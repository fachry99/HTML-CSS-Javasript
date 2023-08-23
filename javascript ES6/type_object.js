//* cara untuk membuat object
// TODO: Object Literal
//*(-) tidak efektif untuk object banyak
/*let mahasiswa = {
    nama: "fachry",
    energy: 10,
    makan: function(porsi){
        this.energy = this.energy + porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }
}*/
/*let mahasiswa2 = {
    nama: "anton",
    energy: 10,
    makan: function(porsi){
        this.energy = this.energy + porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }
}*/

// TODO: Function Declaration
//* (-) harus menggunakan 2 object
/*const methodMahasiswa = {
    makan: function(porsi){
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    },

    main: function(jam){
        this.energy -= jam;
        console.log(`hey ${this.nama}, Main Mulu LU!`);
    },

    tidur: function(jam){
        this.energy += jam*2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
};

function Mahasiswa(nama, energy){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    return mahasiswa;
}

let fachry = Mahasiswa('fachry', 10);
let kelfin = Mahasiswa('kelfin', 15);*/


// TODO: Constructor Function (keyword New)
/*function Mahasiswa(nama, energy){
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi){
        this.energy += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    }

    this.main = function(jam){
        this.energy -= jam;
        console.log(`hey ${this.nama}, Main Mulu LU!`);
    }
}

let fachry = new Mahasiswa('fachry', 10);
let kelfin = new Mahasiswa('kelfin', 15);*/


// TODO: Object.prototype
/*function Mahasiswa(nama, energy){
    this.nama = nama;
    this.energy = energy;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energy += porsi;
    return `halo ${this.nama}, selamat makan`;
}

Mahasiswa.prototype.main = function(jam){
    this.energy -= jam;
    return `halo ${this.nama}, selamat bermain ya`;
}

Mahasiswa.prototype.tidur = function(jam){
    this.energy += jam * 2;
    return `halo ${this.nama}, jangan lupa beristirahat!`;
}

let fachry = new Mahasiswa('fachry', 10); //nilai 10 bisa + dan - sesuai perintah yang kita jalankan
let kelfin = new Mahasiswa('kelfin', 15); */

// TODO: bikin versi class
/*class Mahasiswa {
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    }
    makan(porsi){
        this.energy += porsi;
        return `halo ${this.nama}, selamat makan`;
    }
    
    main(jam){
        this.energy -= jam;
        return `halo ${this.nama}, selamat bermain ya`;
    }
    
    tidur(jam){
        this.energy += jam * 2;
        return `halo ${this.nama}, jangan lupa beristirahat!`;
    }
} let fachry = new Mahasiswa('fachry', 10);*/






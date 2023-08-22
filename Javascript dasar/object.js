//membuat object literal
var mahasiswa = {
    nama : 'fahri',
    nim : '207064516098',
    email : '151fachry@gmail.com',
    jurusan : 'informatika',
};

// membuat object (function declaration)
function buatObjectMahasiswa(nama, nim, email,jurusan){
    var mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.nim = nim;
    mahasiswa.email = email;
    mahasiswa.jurusan = jurusan;
    return mahasiswa;
}

var mahasiswa2 = buatObjectMahasiswa('adit', '20706333', 'adit@gmail.com', 'hukum');

//constructor
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}
var mahasiswa3 = new Mahasiswa('kelfin', '2088399', 'kelfin@gmail.com', 'informatika');


//mengenal this
console.log(window === this);

// cara 1 - pada function declaration
function halo(){
    console,log(this)
    console.log('halo');
}
this.halo();
// This mengembalikan object global


// cara 2 - pada object literal
var obj ={a : 10, nama : 'fahri' };
obj.halo = function(){
    console.log(this);
    console.log('halo');
}
obj.halo();
// this mengembalikan object yang bersangkutan


// cara 3 - constructor
function halo(){
    console.log(this);
    console.log('halo');
}
var obj1= new halo();
var obj2= new halo();
// this mengembalikan obcject yang baru dibuat 
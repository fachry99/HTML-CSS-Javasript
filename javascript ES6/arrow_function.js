// // arrow function dengan 1 parameter + hasil pake return / (implisit return) 
// const tampilPesan = nama => `halo ${nama}`;

// console.log(tampilPesan("fahri"));

// // arrow function dengan 2 parameter + hasil pake return / (implisit return) 
// const duaParameter = (waktu, lokasi) => `${lokasi} saat ini pada ${waktu} hari`;

// console.log(duaParameter("Malam", "Jakarta"));

// // tanpa parameter
// const tanpaParameter = () => `halo World`;

// console.log(tanpaParameter());

// let mahasiswa = ["fahri", "kelfin", "guing"];
// //* versi basic array
// let jumlaHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlaHuruf);

// //*versi as object
// let jumlaHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.table(jumlaHuruf); //(.table = berbentuk table sehingga berbentuk rapi)

//* konsep this pada arrow function

// Construction function
// const Mahasiswa = function(){
//     this.nama = 'fahri';
//     this.umur = 21;
//     this.sayHello = function(){
//         console.log(`Ini contoh dari this pada arrow function ${this.nama} berumur ${this.umur}`);
//     }
// }

// const fahri = new Mahasiswa();

// arrow function
// const Mahasiswa = function(){
//     this.nama = 'fahri';
//     this.umur = 21;
//     this.sayHello = () => {
//         console.log(`Ini contoh dari this pada arrow function ${this.nama} berumur ${this.umur}`);
//     }
// }

// const fahri = new Mahasiswa();

//object literal
// const mhs1 = {
//     nama: "fahri",
//     umur: 21,
//     sayHello:() => {
//         console.log(`Ini contoh dari this pada arrow function ${this.nama} berumur ${this.umur}`);
//     }
// }


// const Mahasiswa = function(){
//     this.nama = 'fahri';
//     this.umur = 21;
//     this.sayHello = function(){
//         console.log(`Ini contoh dari this pada arrow function ${this.nama} berumur ${this.umur}`);
//     }

//     setInterval(() => {
//         console.log(this.umur++)
//     }, 500);
// }

// const fahri = new Mahasiswa();


const box = document.querySelector(".box");
box.addEventListener("click", function(){
    let satu = "size";
    let dua = "caption";

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle("size");
    setTimeout(() => {
        this.classList.toggle("caption");
    }, 600);
});


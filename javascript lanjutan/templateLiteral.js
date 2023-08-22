//pada template literal anda bisa kasih spasi dibawah dengan click enter
//*Multi-line string
// console.log(`srting 1
// string 2`);

// //*HTML Fragments
// const mhs = {
//     nama: "Fachry",
//     umur: 20,
//     npm: 209876661
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="npm">${mhs.npm}</span>
// </div>`;

//*looping 
// const mhs = [{
//     nama: "Fachry",
//     email: "151fachry@gmail.com"
// },
// {
//     nama: "Ahmad",
//     email: "ahmad@gmail.com"
// },
// {
//     nama: "Rizal",
//     email: "rizal@gmail.com"
// }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`; 

//* Conditionals
//ternary
// const lagu = {
//     judul: "Arjuna",
//     penyanyi: "Dewa 19",
//     feat: "Ari-lasso"
// }

// const el = `<div class="lagu">
//     <ul>
//     <li>Judul Lagu: ${lagu.judul}</li>
//     <li>Nama Penyanyi: ${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

//*nested
//html fragments bersarang

const mahasiswa ={
    nama: "Fachry",
    semester: 5,
    mataKuliah: [
        'rekayasa web',
        'pemrograman web',
        'blockcain',
        'kalkulus'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`;
}


const el = `<div class="mahasiswa">
     <h2>${mahasiswa.nama}</h2>
     <span class="semester">Semester: ${mahasiswa.semester}</span>
     <h4>Mata Kuliah :</h4>
     ${cetakMataKuliah(mahasiswa.mataKuliah)}
</div>`;

document.body.innerHTML = el;


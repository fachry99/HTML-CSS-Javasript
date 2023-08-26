//* rest prameter
//function jumlahkan(...angka){
    // let total = 0;
    // for(const a of angka){
    // total += a;
    // }
    // return total; //?versi biasa
    //return angka.reduce((a, b) => a + b); //?versi hight order function
//}

//console.log(jumlahkan(1, 2, 3, 4, 5));

//* array destructuring
// const kelompok1 = ['Doda', 'Dofa', 'Dumang', 'asep', 'Dodi'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

//* object destructuring
// const team = {
//     pm: 'Doda',
//     frontEnd1: 'Dofa',
//     frontEnd2: 'Dumang',
//     backEnd: 'asep',
//     ux: 'Dodi',
//     devOps: 'Dadang'
// }
// const { pm, ...myTeam} = team;
// console.log(myTeam);

//* filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}
console.log(filterBy('boolean', 1, 2, 'Doda', false, 10, true, 'Dofa'));
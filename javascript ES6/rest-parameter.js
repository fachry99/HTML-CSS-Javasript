//* rest prameter
function jumlahkan(...angka){
    let total = 0;
    for(const a of angka){
    total += a;
    }
    return total;
    return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1, 2, 3, 4, 5));
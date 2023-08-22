//array adalah variabel yang lebih sakti dari var karna bisa disi oleh berbagai tipe data dalam satu variable
var pertama =['text', 2, false, [3,4,5,6]];

console.log (pertama[3][1]);

/*menambah isi array manual
var arr = [];
arr[0] = "fahri";
arr[1] = "lagi";
arr[2] = "coba array";

console.log (arr);*/

/*menghapus isi array
var arr =['text', 2, false, [3,4,5,6]];
arr[1] = undefined;
console.log (arr);*/

/*menampilkan isi array
var arr = ['fachri','aja','nofa','doddy','test'];

for(var i = 0; i < arr.length; i++){
    console.log('mahasiswa ke-' + (i+1) + ' : '+ arr[i]);
}*/

//method pada array
//var arr = ['fachri','aja','nofa','doddy','test'];
//1. join
//console.log(arr.join(' - '));

//2. push & pop= menambah elemen akhir & (spop)menghapus elemen akhir
//arr.push('tambah array')
//arr.pop();
//console.log(arr.join(' - '));

//3. unsift & shift= menambah elemen diawal 
//arr.unshift();
//arr.shift();
//console.log(arr.join(' - '));

//4. slice= membuat array baru
//slice(indexawal,akhir)
//var arr = ['fachri','aja','nofa','doddy','test'];
//var arr2 = arr.slice(1,3);
//console.log(arr2.join(' - '));

//5. splice = menambahkan elemen di tengah antrian
//splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2,...)
//arr.splice(1,2,'taro', 'sini');
//console.log(arr.join(' - ')); 

//6. forEarch
//var angka = [1,2,3,4,5,6,7,8,9,10];
//var nama = ['fachry', 'adit', 'fajar'];
//angka.forEach(function(e){
//    console.log(e);
//});

/*nama.forEach(function(e, i){
    console.log('mahasiswa ke-' + (i + 1) + ' adalah: '+ e);
})*/

//7. map = mengembalikan nilai array (lebih canggih dari forEach)
/*var angka = [1,2,3,4,5,6,7,8,9,10];
var angka2 = angka.map(function(e){
    return e * 2;
});
console.log(angka2.join(" - "));*/

//8. sort
/*var angka = [1,2,4,5,3,7,8,6];
angka.sort();
console.log(angka.join(' - '));*/

//9. filter = mencari nilai dalam array
var angka = [1,2,4,5,3,7,8,6];
var angka2 = angka.filter(function(x){
    return x == 5;
});
console.log(angka2);
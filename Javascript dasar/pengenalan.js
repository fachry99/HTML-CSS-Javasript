//karna perintah prompt ada data jika ingin dapat akses datanya tambahkan variabel
var lagi = true;

while( lagi === true){
    var nama = prompt('Masukan Nama:');
    alert('halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih');
var jumlah_angkot = 10;
var angkotberoperasi = 6;
var noangkot = 1;

while( noangkot <= angkotberoperasi) {
    console.log("Angkot No. " + noangkot + " beroperasi dengan baik.");
    noangkot++;
}

for( noangkot = angkotberoperasi + 1; noangkot <= jumlah_angkot; noangkot++){
    console.log("Angkot No. " + noangkot + " sedang tidak beroperasi.");
}
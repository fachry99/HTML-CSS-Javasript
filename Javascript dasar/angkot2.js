var jumlah_angkot = 10;
var angkot_beroperasi = 6;

for( var noangkot = 1; noangkot <= jumlah_angkot; noangkot++){
    
    if( noangkot <= 6 && noangkot !== 5){
        console.log('angkot no. ' + noangkot + ' beroperasi dengan baik.');
    }
    else if( noangkot == 8 || noangkot == 10 || noangkot == 5){
        console.log('angkot no. ' + noangkot + ' sedang lembur.');

    } else{
        console.log('angkot no. ' + noangkot + ' sedang tidak beroperasi');
    }
}

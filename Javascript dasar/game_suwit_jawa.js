var ulangi = true;
while(ulangi){
    //pilihan dari player
    var player = prompt(' pilih antara: gajah, semut, orang');

    //pilihan dari komputer
    //membakitkan bilangan random
    var komputer = Math.random();
    
    if(komputer < 0.34){
        komputer= 'gajah';
    }else if(komputer >= 0.34 && komputer < 0,67) {
        komputer ='orang';
    } else{
        komputer= 'semut';
    }

    var hasil = '';
    //membuat peraturan
    if (player == komputer){
        hasil = 'SERI!!';
    } else if (player =='gajah'){
        hasil = (komputer == 'orang') ? 'MENANG!!' : 'KALAH';
    } else if (player == 'semut'){
        hasil = (komputer == 'orang') ? 'KALAH' : 'MENANG!!'
    } else if( player == 'orang'){
        hasil = (komputer == 'gajah') ? 'KALAH' : 'MENANG!!'
    } else {
        hasil = 'memasukan pilihan yang salah!!';
    }
    //tampilkan hasil
    alert('Kamu memilih: ' + player + ' Dan komputer memilih: ' + komputer + '\nMaka hasilnya: kamu ' + hasil);
    
    ulangi = confirm('lagi?');
}
alert(' terima kasih sudah bermain');



//timing event pada javascript terdari dari 2: settimeout & setinterval
//setTimeout() = akan menjalankan program setelah beberapa waktu sesuai yang kita set
//contoh simpel
/*setTimeout(function(){
    console.log('program jalan');    
}, 3000);

//advance
const tes = setTimeout(function(){
    console.log('program jalan!');
}, 5000);

const tombol = document.getElementById('tombol');
tombol.addEventListener('click', function(){
    clearTimeout(tes);
    console.log('Program berhasil distop!');
});*/


//setInterval() = sesuatu dijalankan nunggu beberapa detik di akan mengulang jalan program
/*const tes2= setInterval(function(){
    console.log('oke');
},2000);

const tombol = document.getElementById('tombol');
tombol.addEventListener('click', function(){
    clearInterval(tes2);
    console.log('Program berhasil distop!');
});*/

//program hitung mundur
const tanggalTujuan = new Date('Jul 17, 2023 16:46:00').getTime();

const hitungMundur = setInterval(function(){
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor (selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor (selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor (selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor (selisih % (1000 * 60) / 1000);

    const teks = document.getElementById('teks');
    teks.innerHTML = 'Waktu anda tersisa : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik!! ';

    //kondisi ketika waktu abis maka berhenti
    if(selisih < 0){
        clearInterval(hitungMundur);
        teks.innerHTML = 'Waktu Habis !!';
    }
}, 1000);


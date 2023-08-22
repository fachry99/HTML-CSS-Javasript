/*var nilaiawal = 1;
while( nilaiawal <=10) {
    console.log("heloo dek " + nilaiawal + "x");
    nilaiawal++;
}*/

/*
for( var nilaiawal =1; nilaiawal <= 10; nilaiawal++){
    console.log('hello word '+ nilaiawal +'x');
}*/

var angka = prompt('Silahkan Masukan Angka: ');
if(angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP');
    } else if (angka % 2 == 1){
        alert(angka + ' adalah bilangan Ganjil');
    }
else{
    alert(angka + ' yang anda masukan bukan angka!');
}

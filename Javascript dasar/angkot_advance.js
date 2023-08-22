/*var penumpang = ['fahri', undefined, 'adit'];
var tambahPenumpang = function(namaPenumpang, penumpang){
   //jika angkot kosong
   if(penumpang.lenght == 0) {
       //tambah penumpang di awal array
       penumpang.push(namaPenumpang);
       // kembalikan isi array & keluar dari function
       return penumpang;
   }else{
      //telusuri seluruh kursi dari awal
      for( var i = 0; i < penumpang.lenght; i++){
         //jika ada kursi kosong
         if (penumpang[i] == undefined){
              // tambah penumpang dikursi tersebut
              penumpang[i] = namaPenumpang;
             //kembalikan isi array & keluar dari function
             return penumpang;
         }
         // jika sudah ada nama yang sama
         //tampilkan pesjan kesalahannya
         // kembalikan isi array & keluar dari funnction
         // jika seluruh kursi terisi
         else if(i == penumpang.lenght - 1){
            penumpang.push(namaPenumpang);
            return penumpang;
         }
      }     
   }     
}*/

/*var penumpang = ['fahri', undefined, 'adit'];
var tambahPenumpang = function(namaPenumpang, penumpang){
   if (penumpang.lenght == 0){
      penumpang.push(namaPenumpang);
      return penumpang;
   } else{
      for (var i = 0; i < penumpang.length; i++){
         if(penumpang[i] == undefined){
            penumpang[i] == namaPenumpang;
            return penumpang;
         }
         else if(i == penumpang.lenght - 1){
            penumpang.push(namaPenumpang);
            return penumpang;
         }
      }
   }
}*/

//membuat object angkot
function Angkot(sopir, trayek, penumpang, kas){
   this.sopir = sopir;
   this.trayek = trayek;
   this.penumpang = penumpang;
   this.kas = kas;

   this.penumpangNaik = function(namaPenumpang){
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
   }

   this.penumpangTurun = function(namaPenumpang, bayar){
      if (this.penumpang.length === 0){
         alert('angkot masih kosong!');
         return false;
      }

      for (var i = 0; i < this.penumpang.length; i++){
         if ( this.penumpang[i] == namaPenumpang){
            this.penumpang[i] = undefined;
            this.kas += bayar;
            return this.penumpang;
         }
      }
   }
}
var angkot1 = new Angkot('sandika', ['ciracas', 'cibiru'], [], 0);
var angkot2 = new Angkot('adit', ['cipanasa', 'citerep pasar'], [], 0);

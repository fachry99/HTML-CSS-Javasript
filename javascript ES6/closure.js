
// alasan menggunakan clouser = untuk membuat function factories(function yang sesuai dengan function yang lain) & untuk privated method
function init(){
    //let nama = 'fachry';
    return function (nama){
        console.log(nama);
    }
}
let panggilNama = init();
panggilNama('fachry');
panggilNama('galih');


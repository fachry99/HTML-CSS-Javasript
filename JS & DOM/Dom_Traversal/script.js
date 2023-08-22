/*const close = document.querySelector('.close');
const card = document.querySelector('.card');

close.addEventListener('click', function(){
    card.style.display = 'none';
});*/

//*DOM Traversal
//const close = document.querySelectorAll('.close');

//*menggunakan metode for
/*for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(e){
        //close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = "none";
    });
}*/

//*cara lebih simpel menggunakan metode foreach
/*close.forEach(function(el) {
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'; //! execuse dijalankan
        e.preventDefault(); // method mematikan setingan default (css, html)
        e.stopPropagation(); //method untuk menghentikan function lain
    });
    
});*/

/*const cards = document.querySelectorAll('.card');

cards.forEach(function(card){
    card.addEventListener('click', function(e){
        alert('Card berhasil di click');
    });
});*/

/*dari kelas nama pertama mengambil class card sebagai parent element
const nama = document.querySelector('.nama');
console.log(nama.parentElement);*/

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});


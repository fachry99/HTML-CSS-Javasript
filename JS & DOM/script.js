console.log(document);
// DOM Selection
//document.getElementById() -> mengembalikan element

/*const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'lightgray';
judul.innerHTML = 'Fachry';

//document.getElementsByTagName() -> mengembalikan HTMLColection
const p = document.getElementsByTagName('p');
for ( let i =0; i < p.length; i++ ){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//document.getElementsByClassName() -> mengembalikan HTMLColection
const p1 = document.getElementsByClassName('p1')[0];

p1.innerHTML ='Text ini diubah dari javascript';

//document.querySelector() -> target 1 element 
const p4 =document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


//document.querySelectorAll() -> mengembalikan semua element
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; is++){
    p[i].innerHTML ='Text ini diubah melalui javascirpt';
    p[i].style.backgroundColor='lightblue';
}*/

/*const p3 =document.querySelector('.p3');
function ubahWarna(){
    p3.style.backgroundColor= "lightblue";
}*/

// addEventListener()
const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'grey';
});
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'white';
});
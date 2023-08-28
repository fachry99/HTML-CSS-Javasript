//*ngambil data dari API omdb
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movie => console.log(movie)
// });

//* Promise
// Object yang merepresentasikan keberhasilan atau kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
//? states (fulfilled / rejected / pending)
//? callback (resolve / reject / finally)
//? aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji telah ditepati!');
//     }
//     else{
//         reject('Ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));

// contoh sendiri
// let tepati = true;
// const janji = new Promise((resolve, reject) => {
//     if(tepati){
//         resolve('Janji sudah ditepati!');
//     }
//     else{
//         reject('Ingkar janji');
//     }
// });

// janji.then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// console.log(janji2.catch(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');

// Promise.all()
let ditepati1 = true;
const film = new Promise((resolve, reject) => {
    if(ditepati1){
        setTimeout(() => {
            resolve([{           
                judul: 'Avengers',
                sutradara: 'Sandhika Galih',
                pemeran: 'Doddy, Erik, Fajar',
            }])
        }, 1000);
    } else {
        setTimeout(() => {
        reject('film tidak ditemukan!');
        }, 100);
    }
});


let ditepati2 = true;
const cuaca = new Promise((resolve, reject) => {
    if(ditepati2){
        setTimeout(() => {
            resolve([{
                kota: 'Bandung',
                temp: 26,
                kondisi: 'Cerah Berawan',
            }])
        }, 500);
    } else {
        setTimeout(() => {
            reject('Cuaca Tidak ditemukan setelah beberapa waktu!');
            }, 100);
    }
});

//?jalankan satu persatu
film.then(response => console.log(response));
film.catch(response => console.log(response));
cuaca.then(response => console.log(response));
cuaca.catch(response => console.log(response));


//?jalankan bersamaan dalam bentuk array
// Promise.all([film, cuaca])
//    .then(response => console.log(response));
//    .catch(response => console.log(response));



//?jalankan bersamaan tapi beda response
// Promise.all([film, cuaca])
//     .then(response => {
//         const [film, cuaca] = response;
//         console.log(film);
//         console.log(cuaca);
//     }
// );  


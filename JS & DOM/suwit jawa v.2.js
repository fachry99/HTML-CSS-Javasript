function getpilihanKomputer(){
    const komputer = Math.random();
    
    if(komputer < 0.34) return 'gajah';
    if(komputer >= 0.34 && komputer < 0,67) return 'orang';
    return 'semut';
}

function gethasil(komputer, player){
    //membuat peraturan
    if (player == komputer) return 'SERI!!';
    if (player =='gajah') return(komputer == 'orang') ? 'MENANG!!' : 'KALAH';
    if (player == 'semut') return (komputer == 'orang') ? 'KALAH' : 'MENANG!!';
    if( player == 'orang') return (komputer == 'gajah') ? 'KALAH' : 'MENANG!!';
}

function putar(){
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if( new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length)i = 0;
    },100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanKomputer = getpilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = gethasil(pilihanKomputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        },1000);
    });
});
/*
const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function(){
    const pilihanKomputer = getpilihanKomputer();
    const pilihanPlayer = pGajah.className;
    const hasil = gethasil(pilihanKomputer, pilihanPlayer);

    
});

const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function(){
    const pilihanKomputer = getpilihanKomputer();
    const pilihanPlayer = pOrang.className;
    const hasil = gethasil(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function(){
    const pilihanKomputer = getpilihanKomputer();
    const pilihanPlayer = pSemut.className;
    const hasil = gethasil(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector('.img-komputer');
    imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});*/
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightgreen';
});

const tAcak = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcak.appendChild(teksTombol);
tAcak.setAttribute('type', 'button');
tUbahWarna.before(tAcak);

tAcak.addEventListener('click', function(){
    const r = Math.round(Math.random()*255 + 1);
    const g = Math.round(Math.random()*255 + 1);
    const b = Math.round(Math.random()*255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

//bikin slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

document.body.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth)*255);
    const yPos = Math.round((event.clientY / window.innerHeight)*255);
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
});

/*tUbahWarna.onclick = function(){
    //document.body.style.backgroundColor = 'lightgreen';
    document.body.classList.toggle('hijau-muda');
}*/
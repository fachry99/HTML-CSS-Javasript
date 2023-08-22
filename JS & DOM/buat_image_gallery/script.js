const container = document.querySelector('.container');
const jumbo = document.querySelector('.besar');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    //cek apakah yang di-klik adalah thumb
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});

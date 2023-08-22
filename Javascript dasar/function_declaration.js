// isi dari function declaration: function, identifier, (parameter(opsional)), dan {functionbody}
/*function tampilpesan(nama){
    alert('halo'+ nama);
}*/

function jumlahvolumeduakubus(a, b, c){
    var volumea; var volumeb;  var volumec; var total;

    var volumea= a*a*a;
    var volumeb= b*b*b;
    var volumec= c+c+c;

    total= volumea+volumeb+volumec;

    return total;
}

console.log(jumlahvolumeduakubus(8, 3, 1));

//versi lebih simpel
function jumlahvolumeduakubus(a, b, c){
    var total;
    total= a*a*a + b*b*b +c*c*c;

    return total;
}

console.log(jumlahvolumeduakubus(8, 3, 1));
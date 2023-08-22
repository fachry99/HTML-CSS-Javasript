var buah = prompt('masukan nama buah kesukaan anda: \n (cth: alpukat, jambu, mangga, melon, durian)');

switch (buah){
    case 'alpukat':
    case 'jambu':
    case 'mangga':
    case 'melon':
        alert('Merupakan buahan yang sehat');
        break;
    case 'durian':
        alert('buahan yang memiliki batasan konsumsi');
        break;
    default :
    alert('nama buah yang anda masukan salah/ bukan merupakan nama buah');
    break;
}


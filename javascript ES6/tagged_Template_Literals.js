//tagged templates
// const nama = 'Fachry';
// const umur = 21;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;


//     //versi simple higher order function
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}
//     `, "");
// }

// const str = coba`Hello, saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


//highlight
const nama = 'Fachry';
const umur = 21;
const email = "151fachry@gmail.com"

function highlight(strings, ...values){
    //versi simple higher order function
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, "");
}

const str = highlight`Hello, saya ${nama}, saya ${umur} tahun, dan email saya adalah: ${email}`;

document.body.innerHTML = str;








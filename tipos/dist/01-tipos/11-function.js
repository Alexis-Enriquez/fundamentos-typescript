"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//usando ts
function createPicture(title, date, size) {
    console.log('create picture', title, date, size);
}
createPicture('pic1', '12/12/1212', '500x500');
//utilizando parametros opcionales
function createPicture2(title, date, size) {
    console.log('create picture', title, date, size);
}
createPicture2('pic1', '12/12/1212');
//flat array function
let createPic = (title, date, size) => {
    return {
        title,
        date,
        size
    };
};
const picture = createPic('la pic', '2020-12-20', '100x100');
console.log(picture);
//tipo de retorno con ts
function handleError(code, message) {
    //procesamo el codigo
    if (message === 'error') {
        throw new Error(`${message} code error${code}`);
    }
    else {
        return 'todo bien';
    }
}
let result = handleError(200, 'ok');
let result2 = handleError(200, 'error');

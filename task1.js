const replaceString = (text, searchStr, newStr) => { //Функция должна вернуть измененный текст в котором все строки со значением searchStr заменены на newStr
    let result = null;
    while(typeof text === 'string' && typeof searchStr === 'string' && typeof newStr === 'string') {
    if ((text.indexOf(searchStr)) === -1) {
        result = false;
    } else {
    result = text.replace( new RegExp(searchStr, 'g'), newStr);
    }
    return result;
}
return false;
}


console.log(replaceString('Text text', 't', 'u'));
   


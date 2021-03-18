const replaceString = (text, searchStr, newStr) => { //Функция должна вернуть измененный текст в котором все строки со значением searchStr заменены на newStr
    let char = 0;
    let result = '';
    while (char < text.length) {
        if (text[char] !== searchStr) {
            return false;
            result =`${result}${text[char].replace(searchStr, newStr)}`;
        } else if (text[char] !== searchStr) {
            result=`${result}${text[char]}`;
        }
        char += 1;
    }
    return result;
}
console.log(replaceString('Text text', 't', 'o'));
   
//не работает

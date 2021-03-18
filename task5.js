function check(data, expectedType) {
    if (expectedType === 'array' && Array.isArray(data)) {
        return true;
    }
    if (expectedType === 'number' && (data instanceof Number)) {
        return true;
    }
    if (expectedType === 'string' && typeof data === 'string') {
        return true;
    }
    if (expectedType === 'object' && data instanceof Object) {
        return true;
    }
    if (expectedType === 'null' && data === null) {
        return true;
    }
    return false;
}
//Доработайте функцию check, которая проверяет данные data на соответствие типу expectedType. Входными данными могут быть: число, строка, массив, объект, null. Если данные не соответствуют ожидаемому типу, то нужно вернуть false.

console.log(check([], 'number')); // false
console.log(check([], 'array')); // true
 
console.log(check(null, 'null')); // true
console.log(check('test', 'string')); // true


const isArrayEqual = (array1, array2) => { //Создать функцию isArrayEqual, которая сравнивает два произвольных массива.
    if (array1 instanceof Array && array2 instanceof Array) {
        if (array1.length !== array2.length) {
            return false;
        } else {
            let i;
            for(i = 0; i < array1.length; i += 1) {
                if (array1[i] !== array2[i]) {
                    return false;
                }
            }
        }
        return true;
    } 
    return false;
}
console.log(isArrayEqual([], null)); // false or exception
console.log(isArrayEqual([], [])); // true
console.log(isArrayEqual([], ['test'])); // false
console.log(isArrayEqual([1, 2, 3], [1, 2, 3])); // true
console.log(isArrayEqual([1, null, 3], [1, undefined, 3])); // false
console.log(isArrayEqual([false, null], [true, null])); // false

    
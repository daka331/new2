const flatArray = (array) => {
    let result;
    if (array instanceof Array) {
        result = (array.flat(1)).filter(Number);array.flat(1);
    } else {
        result = array;
    }
    return result;
}
//Разработайте функцию flatArray, которая в качестве аргумента принимает массив элементов типа Number и если один из элементов массива является также массивом - начиная с текущей позиции требуется записать все элементы вложенного массива в родительский массив. 

console.log(flatArray([1, 2, 3])); // return [1, 2, 3]
console.log(flatArray([])); // return []
console.log(flatArray([1, [2, 3, 4], 5])); // return [1, 2, 3, 4, 5]
console.log(flatArray([1, [2, 3, 4], 5, [1]])); // return [1, 2, 3, 4, 5, 1]
console.log(flatArray([1, [1], null, NaN, ['test']])); // return [1, 1]

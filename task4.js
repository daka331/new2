const isTimeRangesIntersect = (timeRange1, timeRange2) => {
    for (let i = 0; i < timeRange1.length; i +=1) {
        if (timeRange1[0] <= timeRange2[1] && timeRange2[0] <= timeRange1[1]) {
            return true;
        } else {
            return false;
        }
    }
}
//Разработайте функцию isTimeRangesIntersect(timeRange1, timeRange2), которая возвращает true если диапазоны пересекаются и false если нет. 

console.log(isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00'])); // return false

console.log(isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00'])); // return true

    
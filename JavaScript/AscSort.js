function sortDescending(array) { 
    function compare(a, b) {
      return b - a; 
    }
    array.sort(compare);
    return array;
  }
const array = [1, 5, 3, 8, 4];
const sortedArray = sortDescending(array);
console.log(sortedArray);
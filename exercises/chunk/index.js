// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  return array.reduce((newArr, el, i, arr) => {
    if (i % size === 0) {
      let arrChunk = arr.slice(i, i + size);
      newArr.push(arrChunk);
    }
    return newArr;
  }, []);
}

function chunk2(array, size) {
  const newArr = [];
  let chunkArr = [];

  while (typeof (i = array.shift()) !== 'undefined') {
    chunkArr.push(i);
    if (chunkArr.length === size) {
      newArr.push(chunkArr);
      chunkArr = [];
    }
  }

  if (chunkArr.length) {
    newArr.push(chunkArr);
  }

  return newArr;
}

module.exports = chunk;

function inPlaceShuffle(arr) {
    const floor = 0,
          ceil = arr.length - 1;

    let i = arr.length;

    while (i > 0) {
        swap(arr, getRandom(floor, ceil), getRandom(floor, ceil));

        i--;
    }

    return arr;
}

function swap(arr, firstIndex, secondIndex) {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function getRandom(floor, ceil) {
  floor = Math.ceil(floor);
  ceil = Math.floor(ceil);
  return Math.floor(Math.random() * (ceil - floor + 1)) + floor;
}

module.exports = {
    inPlaceShuffle
};
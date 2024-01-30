const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];

for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers[i].length; j++) {
    if (numbers[i][j] % 2 !==0 ) {
      numbers[i].splice(j, 1);
      j--;
    }
  }
}

console.log(numbers);
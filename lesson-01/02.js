let number1 = Math.floor(Math.random() * 100);

switch (number1 % 2) {
  case 0:
    console.log(`${number1}:Это четное число`);
    break;
  case 1:
    console.log(`${number1}:Это нечетное число`);
    break;
}

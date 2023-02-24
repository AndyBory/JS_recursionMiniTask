//Создать рекурсивную функцию вычисления факториала числа. Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorial(number) {
  // debugger;
  if (typeof number !== 'number' || isNaN(number)) {
    throw new TypeError('Введите целое число от 1 до 170, свыше 170 результат ∞');
  }
  if (number === 0 || number < 0 || number > 10442 || !Number.isInteger(number)) {
    throw new RangeError('Введите целое число от 1 до 170');
  } 
  if (number > 1) {
  return number * factorial (number - 1);
}
return 1;
}


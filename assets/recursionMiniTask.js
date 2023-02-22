//Создать рекурсивную функцию вычисления факториала числа. Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function toFactorial(number) {
  // debugger;
  if (typeof(number) !== 'number') {
    return 'Введите целое число от 1 до 170, свыше 170 результат ∞';
  }
  if (number === 0) {
    return 'Введите целое число от 1 до 170';
  } else if (number === 1) {
    return 1;
  } else (number > 1) {
    return number * toFactorial (number - 1);
  }
}
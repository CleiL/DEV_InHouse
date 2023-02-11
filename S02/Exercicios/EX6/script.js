var operacao = prompt('Selecione a operação (+,-,*,/)');
var num1 = parseFloat(prompt('Num 1'));
var num2 = parseFloat(prompt('Num 2'));

switch (operacao) {
  case '+':
    alert(num1 + num2);
    break;
  case '-':
    alert(num1 - num2);
    break;
  case '*':
    alert(num1 * num2);
    break;
  case '/':
    alert(num1 / num2);
    break;
  default:
    alert('Operação inválida');
}
function parseExpression(expression) {
  const numbers = [];
  let currentNumber = '';

  // Limitar la longitud máxima de la cadena a 20 caracteres
  if (expression.length > 20) {
    return 'Error: Longitud máxima de 20 caracteres excedida';
  }

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (/[0-9]/.test(char)) {
      currentNumber += char;
    } else if (char === '(' || char === ')') {
      if (currentNumber !== '') {
        numbers.push(parseFloat(currentNumber));
        currentNumber = '';
      }
      numbers.push(char);
    } else {
      if (currentNumber !== '') {
        numbers.push(parseFloat(currentNumber));
        currentNumber = '';
      }
      numbers.push(char);
    }
  }

  if (currentNumber !== '') {
    numbers.push(parseFloat(currentNumber));
  }

  return numbers;
}

function evaluateExpression(numbers) {
  const operators = [];
  const operands = [];

  const priority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
    sqrt: 3,
  };

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];

    if (typeof current === 'number') {
      operands.push(current);
    } else if (typeof current === 'string') {
      if (current === 'sqrt') {
        const operand = operands.pop();
        operands.push(Math.sqrt(operand));
      } else {
        while (
          operators.length > 0 &&
          priority[operators[operators.length - 1]] >= priority[current]
        ) {
          const operator = operators.pop();
          const operand2 = operands.pop();
          const operand1 = operands.pop();

          switch (operator) {
            case '+':
              operands.push(operand1 + operand2);
              break;
            case '-':
              operands.push(operand1 - operand2);
              break;
            case '*':
              operands.push(operand1 * operand2);
              break;
            case '/':
              operands.push(operand1 / operand2);
              break;
            case '^':
              operands.push(Math.pow(operand1, operand2));
              break;
          }
        }

        operators.push(current);
      }
    }
  }

  while (operators.length > 0) {
    const operator = operators.pop();
    const operand2 = operands.pop();
    const operand1 = operands.pop();

    switch (operator) {
      case '+':
        operands.push(operand1 + operand2);
        break;
      case '-':
        operands.push(operand1 - operand2);
        break;
      case '*':
        operands.push(operand1 * operand2);
        break;
      case '/':
        operands.push(operand1 / operand2);
        break;
      case '^':
        operands.push(Math.pow(operand1, operand2));
        break;
    }
  }

  return operands[0];
}

function calculate(expression) {
  const numbers = parseExpression(expression);

  // Verificar si se produjo un error en la cadena
  if (typeof numbers === 'string') {
    return numbers;
  }

  const result = evaluateExpression(numbers);
  return result;
}

function calculateSquareRoot() {
  const expression = document.getElementById('expression').value;
  const result = Math.sqrt(parseFloat(expression));
  if (!isNaN(result)) {
    document.getElementById('result').textContent = `Resultado: ${result}`;
    document.getElementById('result').style.visibility = 'visible';
  } else {
    document.getElementById('result').textContent = 'Error: Entrada inválida';
    document.getElementById('result').style.visibility = 'visible';
  }
}

function calculateExpression() {
  const expression = document.getElementById('expression').value;
  const result = calculate(expression);
  if (typeof result === 'number') {
    document.getElementById('result').textContent = `Resultado: ${result}`;
    document.getElementById('result').style.visibility = 'visible';
  } else {
    document.getElementById('result').textContent = result;
    document.getElementById('result').style.visibility = 'visible';
  }
}

// Limpiar el Input
function clearInput() {
  document.getElementById('expression').value = '';
  document.getElementById('result').style.visibility = 'hidden';
}

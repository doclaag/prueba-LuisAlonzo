# Calculadora

Esta es una calculadora de operaciones básicas implementada en JavaScript. Permite resolver operaciones aritméticas utilizando los operadores de suma (`+`), resta (`-`), multiplicación (`*`) y división (`/`). Además, se admite el uso de paréntesis para agrupamiento y las operaciones de potencia (`^`) y raíz cuadrada (`sqrt`).

## Descripción

El programa consta de tres funciones principales: `parseExpression`, `evaluateExpression` y `calculate`, así como una función de ayuda `calculateExpression` para interactuar con la interfaz de usuario.

- La función `parseExpression` se encarga de analizar la expresión matemática y convertirla en una lista de números y operadores.
- La función `evaluateExpression` evalúa la expresión matemática representada por la lista de números y operadores.
- La función `calculate` es la función principal que utiliza las funciones `parseExpression` y `evaluateExpression` para calcular el resultado de una expresión matemática.
- La función `calculateExpression` es llamada cuando se hace clic en el botón "Calcular" en la interfaz de usuario.

## Pasos para ejecutar el programa

1. Descargar los archivos `index.html` y `index.js`.
2. Abrir el archivo `index.html` en un navegador web.
3. Ingresa una expresión matemática en el campo de entrada.
4. Haz clic en el botón "Calcular".
5. El resultado de la expresión se mostrará en la página.

Recordar que la calculadora admite operaciones de suma, resta, multiplicación y división utilizando los operadores `+`, `-`, `*` y `/`, respectivamente. También se puede utilizar paréntesis para agrupar partes de la expresión y las operaciones de potencia y raíz cuadrada con los operadores `^` y `sqrt`.

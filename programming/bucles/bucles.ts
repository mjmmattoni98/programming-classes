// ----- Bucle for -----
// El bucle for es un bucle que se ejecuta un número determinado de veces.
// Su sintaxis es la siguiente:
console.log("Bucle for");
for (let i = 0; i < 10; i++) {
    console.log("i=", i);
}
console.log("\n");
// Este bucle for consta de tres partes:
// 1. Declaración de la variable i a 0.
// 2. Condición de ejecución del bucle: mientras i sea menor que 10.
// 3. Incremento de la variable i en 1. (Nótese que i++ es equivalente a i = i + 1)
// IMPORTANTE: Declarar la variable i a 0 y aumentarla en 1 en cada iteración es una convención. No siempre es así.
// En cada iteración, se imprime el valor de i.

// ----- Bucle while -----
// El bucle while es un bucle que se ejecuta mientras se cumpla una condición.
// Su sintaxis es la siguiente:
console.log("Bucle while");
let i = 0;
while (i < 10) {
    console.log("i=", i);
    i++;
}
console.log("\n");
// Este bucle while consta de dos partes:
// 1. Condición de ejecución del bucle: mientras i sea menor que 10.
// 2. Incremento de la variable i en 1. (Nótese que i++ es equivalente a i = i + 1)
// En cada iteración, se imprime el valor de i.

// ----- Bucle do while -----
// El bucle do while es un bucle que se ejecuta mientras se cumpla una condición.
// Su sintaxis es la siguiente:
console.log("Bucle do while");
let j = 0;
do {
    console.log("j=", j);
    j++;
}
while (j < 10);
console.log("\n");
// Este bucle do while consta de dos partes:
// 1. Incremento de la variable j en 1. (Nótese que j++ es equivalente a j = j + 1)
// 2. Condición de ejecución del bucle: mientras j sea menor que 10.
// Nótese que en este caso, lo que está dentro del bloque do se ejecuta al menos una vez, a diferencia del bucle while normal.
// En cada iteración, se imprime el valor de j.

// EXTRA: Bucle negativo
// Si queremos que un bucle se ejecute en orden inverso, podemos hacer lo siguiente:
console.log("Bucle negativo");
for (let i = 10; i > 0; i--) {
    console.log("i=", i);
}
console.log("\n");
// En este caso, la variable i se inicializa a 10, y se va decrementando en 1 en cada iteración.
// La condición de ejecución del bucle es que i sea mayor que 0.
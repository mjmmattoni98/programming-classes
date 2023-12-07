let a: number = 0; // tipo de dato number
let b = "a"; // tipo de dato char
let c = "abc"; // tipo de dato string
let d = false; // tipo de dato boolean
const e = 5; // constante de tipo number

if (a > 0) {
  console.log("a es mayor que 0");
} else {
  if (a < 0) {
    console.log("a es menor que 0");
  } else {
    console.log("a es igual a 0");
  }
}

// Listas
const lista = [10, 55, -2, 3, 40, 111];
const listaStrings = ["a", "b", "c", "d", "e"];
const primerElemento = lista[0]; // obtiene el primer elemento de la lista

console.log("lista: ", lista);
console.log("primer elemento de la lista: ", primerElemento);

// bucles
const lista2 = [0, 1, 2, 3, 4, 5];
for (let i = 0; i < lista2.length; i++) {
  console.log("indice: ", i);
  if (lista2[i] > 2) {
    console.log("Valor mayor que 2: ", lista2[i]);
  }
}

const lista3 = [44, -1, 8, 32];
for (let i = 0; i < lista3.length; i++) {
  console.log("indice: ", i);
  if (lista3[i] >= 0) {  // mayor o igual que 0 (números positivos)
    console.log("Valor positivo: ", lista3[i]);
  }
}

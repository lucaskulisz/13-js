function calcularInteresCompuesto(inversionInicial, tasaInteres, tiempo) {
  const montoFinal = inversionInicial * Math.pow(1 + tasaInteres/100, tiempo);
  return montoFinal;
}

// Ejemplo de uso
const inversionInicial = 100000;
const tasaInteres = 8;
const tiempo = 12;

const resultado = calcularInteresCompuesto(inversionInicial, tasaInteres, tiempo);
console.log("El monto final es: " + resultado);

/* function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Ejemplo de uso
const numeroDado = 10;

if (esPrimo(numeroDado)) {
  console.log(numeroDado + " es un número primo.");
} else {
  console.log(numeroDado + " no es un número primo.");
}
 */
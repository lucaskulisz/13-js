function cifradoCesar(texto, desplazamiento) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];

    if (caracter.match(/[a-z]/i)) {
      const codigoAscii = texto.charCodeAt(i);

      if (codigoAscii >= 65 && codigoAscii <= 90) {
        // Carácter es mayúscula
        caracter = String.fromCharCode(((codigoAscii - 65 + desplazamiento) % 26) + 65);
      } else if (codigoAscii >= 97 && codigoAscii <= 122) {
        // Carácter es minúscula
        caracter = String.fromCharCode(((codigoAscii - 97 + desplazamiento) % 26) + 97);
      }
    }

    resultado += caracter;
  }

  return resultado;
}

// Ejemplo de uso
const textoOriginal = "Hola como estas";
const desplazamiento = 3;

const textoCifrado = cifradoCesar(textoOriginal, desplazamiento);
console.log("Texto original: " + textoOriginal);
console.log("Texto cifrado: " + textoCifrado);

//Función que devuelve la cadena escrita al revés
function invertirCadena(cadena) {
    var cadenaInversa = "";
    for (i = 0; i < cadena.length; i++){
        cadenaInversa += cadena[cadena.length - i - 1]
    }
    return cadenaInversa;
}

//Comprueba si una palabra es un palíndromo, pasa las palabras a minúsculas para minimizar errores
function esPalindromo(cadena) {
    return cadena.toLowerCase() === invertirCadena(cadena).toLowerCase();
}

//Ejemplo
var cadena = "ana"
console.log(cadena);
console.log(invertirCadena(cadena));
console.log("Es Palindromo: " + esPalindromo(cadena));
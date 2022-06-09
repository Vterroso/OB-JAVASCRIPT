/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript */

let altura1 = 179;
let altura2 = 1.79;
let peso = 94.2;
let alturaRedondeada = (altura2.toFixed(1));
console.log(alturaRedondeada);
let pesoRedondeado = (peso.toFixed());
console.log(pesoRedondeado);

let esigual = (Number.MAX_VALUE === (Number.MAX_VALUE + 1));
console.log(esigual);

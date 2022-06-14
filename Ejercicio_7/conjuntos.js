/*Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)*/


const nombres = new Set ()
nombres.add("Victor");
nombres.add("Soledad");
nombres.add("Jose Luis");
nombres.add("Marcos");
nombres.add("Romina");
console.log(nombres);

nombres.add("Victor");
console.log(nombres);

nombres.add("Javascript")
console.log(nombres)


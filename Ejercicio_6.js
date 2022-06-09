/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

const listaCompra = ["tomates", "huevos", "leche", "yogures", "detergente"];
listaCompra.push("Aceite de girasol");
console.log(listaCompra);

listaCompra.splice(5, 1);
console.log(listaCompra);

const peliculas = [
    {titulo: "El padrino", director: "Francis Ford Coppola", fecha: "1972"},
    {titulo: "Trainspotting", director: "Danny Boyle", fecha: "1996"},
    {titulo: "Origen", director: "Christopher Nolan", fecha: "2010"},
];

const pelis2010 = peliculas.filter(obj => obj.fecha >= 2010 );
console.log(pelis2010);

const directores = peliculas.map(obj =>  obj.director);
console.log(directores);

const titulo = peliculas.map(obj =>  obj.titulo);
console.log(titulo);

listaConcat = directores.concat (titulo);
console.log(listaConcat);

listaProp = [...directores, ...titulo];
console.log(listaProp);
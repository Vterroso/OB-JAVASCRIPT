/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */

const datos1 = {
    nombre: "Victor",
    apellido: "Terroso",
    edad: 34,
    altura: 1.79,
    eresDesarrollador: true
}

const edad1 = datos1.edad;
console.log(edad1);

const lista1 = [
    datos1,
    {nombre: "Ricardo",
    apellido: "Bárzano",
    edad: 35,
    altura: 1.82,
    eresDesarrollador: false},
    {nombre: "Hector",
        apellido: "Molla",
        edad: 36,
        altura: 1.77,
        eresDesarrollador: true}
    ];

    console.log(lista1);

    lista1.sort((a, b) => b.edad - a.edad);

    console.log(lista1);
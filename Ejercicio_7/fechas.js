/**Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy*/

const fechaHoy = new Date();
console.log(fechaHoy);

//La fecha de tu nacimiento
const miCumple = new Date(1987, 9, 20);
console.log(miCumple);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esMayor = fechaHoy>miCumple;
console.log(esMayor)

//- Una variable que contenga el día de tu nacimiento
const diaCumple = miCumple.getDate();
console.log(diaCumple);

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesCumple = miCumple.getMonth()+1;
console.log(mesCumple);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/
const anyoCumple = miCumple.getFullYear();
console.log(anyoCumple);





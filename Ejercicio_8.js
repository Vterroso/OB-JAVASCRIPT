//Crea un archivo JS que contenga las siguientes líneas:

//- Una función sin parámetros que devuelva siempre "true"

function sinParametros(){
    return true
};
console.log(sinParametros());

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function promesa(){
    console.log("Hola, soy una promesa")
};

setTimeout(promesa, 5000);

//- Una función generadora de índices pares automáticos

function* generaIdPar(){
    let id = 0;
    while (true){
        id = id + 2;
        if (id === 26 ){
            return
        }
        yield id;
    }
}

const gen = generaIdPar();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

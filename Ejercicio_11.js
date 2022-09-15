class Estudiante {
    nombre
    asignaturas = []
    
    constructor (nombre, asignaturas){
    this.nombre = nombre
    this.asignaturas = asignaturas
    }

    obtenDatos (){
        return {
            nombre : this.nombre,
            asignaturas: this.asignaturas
        }
        
    
    }
}

const Estudiante1 = new Estudiante ("Victor", ["Javascript", "HTML", "CSS"])

console.log(Estudiante1.obtenDatos())
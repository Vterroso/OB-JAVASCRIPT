const nombre = "Victor"
const apellido = "Terroso"

const persona = {nombre, apellido}

//localStorage.setItem("persona", JSON.stringify(persona))

//sessionStorage.setItem("persona", JSON.stringify(persona))

const fecha = new Date()
//document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(fecha.getTime() + 2 * 600000)}`
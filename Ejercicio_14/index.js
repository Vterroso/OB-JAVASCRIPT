const boton = document.querySelector(".btn")

boton.addEventListener ("click" , () => {
    alert("Click en el botón")
})


$(".btn").click(() => {
    console.log("Estoy usando jQuery")
})


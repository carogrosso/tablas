var numero_inicial = document.getElementById("numero") 
var generar = document.getElementById("generar")
var resultado = document.getElementById("resultado")
var reiniciar = document.getElementById("reiniciar")

generar.addEventListener("click", function(){
  let numerito = numero_inicial.value
  if (numerito == 0) {
    swal({
      title: "Ingresa un número válido",
        text: "El numero tiene que ser igual o mayor a 1.",
        type: "warning",
        showConfirmButton: false,
        cancelButtonColor: '#d33',
      });
  } else {
  for (var i = 1; i < 11; i++) {
    let un_resultado = numerito + " x " + i + " = " + (numerito * i)
    var crear_resultado = document.createElement('h3')
    var cuenta = document.createTextNode(un_resultado)
    crear_resultado.appendChild(cuenta)
    resultado.appendChild(crear_resultado)
    numero_inicial.setAttribute("disabled", "")
    generar.classList.add("display-none")
    reiniciar.classList.remove("display-none")
    }
  }
})

reiniciar.addEventListener("click", function(){
  location.reload()
})
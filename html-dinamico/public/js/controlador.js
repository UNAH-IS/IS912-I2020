// Modelo: Logica de negocio, Datos (Backend, nodejs)
// Vista: Lo que el usuario ve (HTML, CSS)
// Controlador: Gestionar las acciones del usuario (Javascript)

window.onload = function(){
    console.log("La pagina cargo por completo");
}
console.log(document.getElementById("usuario").value);
//document.querySelector('#usuario');

let parrafos = document.querySelectorAll('p');

for(let i = 0; i<parrafos.length;i++)
    console.log(parrafos[i].innerHTML);

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


function cambiarContenido(){
    document.getElementById('p1').innerHTML = '<b>Nuevo contenido</b>';
}

function cambiarEstilos(){
    document.getElementById('p2').style.backgroundColor = '#000000';
    document.getElementById('p2').style.color = 'red';
    document.getElementById('p2').style.fontFamily = 'Roboto';

}

function activarParrafo(etiqueta){
    etiqueta.classList.remove('parrafo-inactivo');
    etiqueta.classList.add('parrafo-activo');
}

function inactivarParrafo(etiqueta){
    etiqueta.classList.remove('parrafo-activo');
    etiqueta.classList.add('parrafo-inactivo');
}

function login(){
    validarCampoVacio('usuario');
    validarCampoVacio('password');
}

function validarCampoVacio(id){
    const etiqueta = document.getElementById(id);
    if (etiqueta.value==''){
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error');
    }else{
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }
}

function validarCorreo(etiqueta){
    console.log(etiqueta.value);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
        document.getElementById('btn-login').disabled=false;
    } else{
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error');
    }
}
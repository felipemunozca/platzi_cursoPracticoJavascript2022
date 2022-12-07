//addEventListener 13/27

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');



//la traduccion es: agrega un escuchador de eventos.
//es un metodo que funciona con dos argumentos.
//el primero es el nombre del evento.
//el segundo es el codigo javascript que quiero que se ejecute.
//PREGUNTA DE ENTREVISTA
//cuando se llama a una funcion dentro de un evento, se debe agregar solo el nombre, NUNCA con parentesis.
boton.addEventListener('click', presionarBoton);

function presionarBoton() {
    const sumaInputs = input1.value + input2.value;
    resultado.innerText = "Resultado es: " + sumaInputs;
}

/**
 * EJEMPLO 2
 */

const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const boton2 = document.querySelector('#btnCalcular2');
const resultado2 = document.querySelector('#resultado2');
const formulario = document.querySelector('#formulario');

//los formularios por defecto interpretan que el ultimo boton dentro del formulario, y lo tranforman a tipo submit, es decir, un boton para enviar el formulario.
//por eso por defecto, la pagina se recarga.

//creo un nuevo escuchador. esta vez con el evento de submit ademas de la funcion que ya cree.
formulario.addEventListener('submit', presionarBotonFormulario);

//se enviara como argumento un event, para que dentro del event listener se reciba como parametro.
function presionarBotonFormulario(event) {
    //para evitar que el formulario se recargue, utilizando event, le puedo indicar que llame a su propiedad preventDefault() para que no ejecute, lo que por defecto haria, es decir, enviar los datos y recargar la pagina.
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    resultado.innerText = "Resultado es: " + sumaInputs;
}
//utilizando la funcion document propia de javascript puedo buscar una clase, id, nombre, tag, desde el archivo html.
//lA forma profesional de trabajar es crear variables que representen a los selectores de los elementos que voy a utilizar.
//si el elemento que quiero utilizar no tiene una caracteristica a la cual apuntar, puedo utilizar querySelector para apuntar a toda la etiqueta html, colocando entre comillas simples el valor de la etiqueta.
const h1 = document.querySelector('h1');
//con selectorAll puedo elegir a todos los atributos que tengan la etiqueta <p>
const p = document.querySelectorAll('p');
//con getElementsByClassName se seleccionan todas las clases, para esto se llaman agregando un punto . antes del nombre.
const parrafoClase = document.getElementsByClassName('.parrafoClase');
//los id se llaman con el simbolo numeral # mas el nombre.
const parrafoId = document.getElementById('#parrafoId');
const input = document.querySelector('input');


//imprimo por consola el valor de cada elemento declarado.
console.log({
    h1,
    p,
    parrafoClase,
    parrafoId,
    input,
});


//acceder al valor que se escribe en el input.
console.log(input.value);


//el profesor recomienda utilizar querySelector ya que se puede utilizar para todo y da mas uniformidad al codigo.
/**
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafoClase = document.querySelector('.parrafoClase');
const parrafoId = document.querySelector('#parrafoId');
const input = document.querySelector('input');
**/
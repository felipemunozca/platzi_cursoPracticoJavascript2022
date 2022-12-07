//RECUERDA: al utilizar querySelector y querer agregar una etiqueta desde su ID se debe agregar el nombre junto al numeral #
//el profesor llama a esto "selectores".
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btnCalcular = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

//escuchar un evento con un boton.
function btnOnClick() {
    //esto es una concatenacion.
    console.log(input1.value + input2.value);
    
    //el usuario no tiene idea que es la consola, para que pueda ver el resultado, tiene que ser impreso directo en html, para esto se crea una constante que almacene el valor de la suma.
    const sumaInputs = input1.value + input2.value;
    resultado.innerText = 'Resultado: ' + sumaInputs;
}
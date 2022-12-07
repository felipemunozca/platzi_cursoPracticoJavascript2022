/**
 * EJERCICIO 1
 */
    const h1 = document.querySelector('h1');
    const h3 = document.querySelector('h3');

    //modificar el titulo del h1 utilizando JS.

    //se utiliza la propiedad innerHTML para indicar que el texto que se escriba se renderizara en el index.
    //con innerHTML ademas de agregar texto, se pueden escribir etiquetas html para renderizar algunas opciones extras.
    //una de las consideraciones que es bueno tener es que un usuario avanzado, puede editar estas opciones en javascript y colocar texto malisioso como enlaces a otras paginas.
    h1.innerHTML = 'Agrego un titulo <br> en formato <i>html</i>.'

    //por lo que se recomienda, en ves de usar innerHTML, cambiarlo por innerText
    //innterText NO renderiza las etiquetas html.
    h3.innerText = 'Agrego texto que <br> no puede ir en formato <i>html</i>.'

    //otras de las propiedades mas utiles que se pueden utilizar entre js y html son getAttribute y setAttribute.

    //getAttribute permite buscar dentro un etiqueta algun atributo en especifico, por ejemplo una clase, un id.
    h1.getAttribute('class');

    //setAttribute permite modificar algun atributo que tenga una etiqueta. Se deben indicar dos parametros, el primero es el valor original, el segundo sera el nuevo valor de la etiqueta.
    h1.setAttribute('class', 'subtitulo');

    //existe otra funcion que es perfecta para trabajar con clases
    //con add() puedo agregar una nueva clase a las que ya existen en la etiqueta <h1>
    h1.classList.add('nuevaClase');
    //con remove() puedo quitar una de las clases que ya existen en la etiqueta <h1>
    h1.classList.remove('subtitulo');
    //con toggle() se puede agregar o quitar una clase dependiendo de como se ejecute una accion, es util para hacer aparecer y desaparecer objetos del html.
    h1.classList.toggle('desaparecer');

    //con contains() es una especie de condicional. Nos devuelve true o false dependiendo de si el elemento tiene la clase que le estoy preguntando.
    h1.classList.contains('nuevaClase');

/**
 * EJERCICIO 2
 */
    const input = document.querySelector('input');

    /** para obtener o asignar valores a los inputs se puede hacer rapidamente utilizando el metodo value */
    input.value = '123456';
    /** ahora este valor aparecera en el input como si el usuario lo hubiese escrito. **/

/**
 * EJERCICIO 3
 */

    /** crear un elemento desde cero. **/
    /** con el metodo createElement() puedo crear el elemento html que quiera. **/
    /** para crear el elemento solo debo agregarlo entre comillas simples y el navegador interpretara esto y abrira y cerrara la etiqueta, por ejemplo 'span', 'img', 'h4'. **/
    /** para este ejemplo, se agregara una etiqueta <img> en el parrafo despues de los titulos. **/
    const img = document.createElement('img');
    img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

    /** al utilizar getElementById no es necesario agregar # al nombre del elemento. **/
    const parrafoId = document.getElementById('parrafoId');
    /** utilizando el metodo append() no borra el contenido de la etiqueta y agrega la imagen despues. **/
    parrafoId.append(img);

    /** si quisiera borrar el texto de la etiqueta <p> solo debo utilizar innerHTML e igualarlo a vacio, y luego cargar la imagen **/
    //parrafoId.innerHTML = "";

/**
 * RESUMEN DE COMPAÑERO:
 * 
 * La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM. El árbol DOM incluye elementos como <body> y <table>, entre muchos otros. Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.
 * Existen varios métodos de Document que servirán para acceder a los elementos del DOM:
 *      > 1. querySelector: Es un método de Document que regresa el primer elemento dentro del documento que coincide con el selector o grupo de selectores especificado. Si no se encuentran coincidencias, regresa null.
 *      > 2. getElementsByClassName: regresa un objeto similar a una matriz con todos los elementos secundarios que tienen todos los nombres de clase dados.
 *      > 3. getElementById: Devuelve una referencia al elemento por su id.
 *      > 4. document.createElement: crea el elemento HTML especificado por la etiqueta, o un HTMLUnknownElement si no se reconoce la etiqueta.
 * Y algunos métodos de la interfaz Element:
 *      > 1. elemento.innerHTML: La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva. (Permite modificar el contenido html del elemento, lo que puede ser peligroso, porque literalmente, se está modificando el HTML)
 *      > 2. elemento.innerText: representa el contenido de texto renderizado de un nodo y sus descendientes. Como getter, se aproxima al texto que el usuario obtendría si resaltara el contenido del elemento con el cursor y luego lo copiara en el portapapeles. Como setter, esto reemplazará a los hijos del elemento con el valor dado, convirtiendo cualquier salto de línea en elementos <br>.
 *      > 3. elemento.getAttribute: devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto null como “”
 *      > 4. elemento.setAttribute: Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
 *      > 5. elemento.rreplaceChldren: eemplaza los elementos secundarios existentes de un nodo con un nuevo conjunto específico de elementos secundarios. Estos pueden ser objetos de cadena o de nodo.
 *      > 6. elemento.append: inserta un conjunto de objetos de nodo u objetos de cadena después del último elemento secundario del elemento. Los objetos de cadena se insertan como nodos de texto equivalentes.
 */
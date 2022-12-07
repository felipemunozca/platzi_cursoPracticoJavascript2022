## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1.1 Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JS que vamos a crear una variable con el nombre definido. 
Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable ya creada.

    ```
    let nombre;             // esto es declarar.
    let nombre = 'Felipe';  // esto es inicializar.
    nombre = 'Esteban';     // esto es reinicializar.
    ```

En JS puedo crear variables con var, let y const.
* var es la forma mas antigua de declarar variables, pero en la actualidad no se usa mucho ya puede generar problemas con las nuevas formas de usar los lenguajes.
* let nos permite cambiar el valor de nuestras variables en el futuro.
* const son variables constantes, lo que significa que su valor una vez declarado, no se puede cambiar.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
La diferencia es el tipo de datos y la forma de declararlos, cuando se declara una variable que recibe numeros, solo necesita eso, los numeros y el simbolo + para sumar.
    En cambio cunado se de declara un valor entre comillas "" se vuelve un string y al utulizar el simbolo + concatena el mensaje con otro string.

    ```
    let suma = 2 + 2;
    let saludo = "Hola, " + "Felipe";
    ```

- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es **+**.

### 1.2 Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fmunozca)
- Edad: number
- Correo electrónico: string (ejemplo@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 1.3️ Traduce a código JavaScript las variables del ejemplo anterior.

```
    let nombre = 'Felipe';
    let apellido = 'Muñoz';
    let username = 'fmunozca';
    let edad = 31;
    let mail = 'ejemplo@gmail.com';
    let esMayorDeEdad = true;
    let dineroAhorrado = 1000;
    let deudas = 100;
```

### 1.4️ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```javascript
	let nombreCompleto = nombre + ' ' + apellido;
	let dineroReal = dineroAhorrado - deudas;

	console.log(nombreCompleto);
	console.log(dineroReal);
```



## Funciones

### 2.1️ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

    Las funciones nos permiten encapsular (guardar) bloques de código para reutilizarlos y ejecutarlos en el futuro.

    [DEFINICION SEGUN MOZILLA.ORG: las funciones son la forma en que encapsulamos un bloque de codigo, para que sean reutilizables y reejecutables en el futuro. encapsular guardar la informacion como dentro de cajitas en memoria.]

- ¿Cuándo me sirve usar una función en mi código?

    Existen dos casos en los que debo utilizar una funcion:

    Uno, nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro.

    Dos, nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    Los parametros son los que reciben una funcion cuando la estamos creando (nombre, apellido).
    Los argumentos son los que se envian a la funcion cuando se ejecuta.

    por ejemplo:

    ```javascript
	funcion nombreCompleto(nombre, apellido){
        return nombre + ' ' + apellido;
    }

	nombreCompleto('Cristobal', 'Munoz');
    ```


### 2.2️ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Felipe";
const lastname = "Munoz";
const completeName = name + lastname;
const nickname = "flp_spriggan";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
Respuesta:

```javascript
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, nickname) {
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");  
}

saludo('juan', 'castro', 'juandc')
```


## Condicionales

### 3.1️ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

    Son la forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    Existen los condicionales: If (else y else if), Switch.
    * El codicional if (con else y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condicion. 
    * El condicional switch utiliza cases (casos) que se comparan con la misma variable o condición que definimos en el switch y va preguntando caso a caso si cumple o no con la condicion, sino pasa a la siguiente.

- ¿Puedo combinar funciones y condicionales?

    Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

### 3.2️ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
Respuesta:

```javascript
if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == 'ExpertDuo') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

### 3.3️ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    //si ninguna de las condiciones se cumple, se ejecuta este mensaje.
    console.warn('Ese tipo de suscripción no existe')
}
```


### 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional. 😏

```js
//se crea un OBJETO donde se definiran todos los tipos de suscripciones.
//si hago la prueba en el navegodor y escribo tiposDeSuscripciones.free me mostrara el mensaje de cursos gratis.
//DATO IMPORTANTE: tambien se puede entrar al valor de los objetos utilizando corchetes [] y dentro comillas simples '' para indicar el valor, por ejemplo tiposDeSuscripciones['free']
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion) {
    //al contrario del ejemplo anterior, esta vez solo creo 1 solo condicional que comparara el valor que tendra "suscripcion", si es un valor que esta dentro del objeto, mostrara el console.log y si no existe mostrara el console.warn
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

conseguirTipoSuscripcion('free');
conseguirTipoSuscripcion('ultraexpert');
```

## Ciclos

### 4.1️ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

    Es la forma de ejecutar un bloque de código hasta que se cumpla cierta condición. (por ejemplo, contar un numero de uno en uno hasta que llegue a diez.)

- ¿Qué tipos de ciclos existen en JavaScript?

    While, Do While y For.

- ¿Qué es un ciclo infinito y por qué es un problema?

    Es cuando la validación de nuestros condicionales nunca se cumple y los ciclos se siguen ejecutando hasta cuando se termina dañando la aplicación (por ejemplo, cuando el navegador ya no puede más de tanta ejecución de ciclos y se termina crusheando la ventana del programa).

- ¿Puedo mezclar ciclos y condicionales?

    Sí, aunque los ciclos son una especie de condionales, nada nos impide agregar más condionales dentro del ciclo. Tambien se puede ejecutar un condicional dentro de un ciclo, si es que la logica lo necesita.

### 4.2️ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
Respuesta:

```javascript
//el ciclo while nos pide pide declarar la variable a iterar antes.
//esta es una de las diferencias con el ciclo for, que declara la variable dentro del ciclo.

let i = 0; 
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

### 4.3️ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```javascript
//se crea una condicion que compare el valor ingresado por el usuario en el navegador, y ante cualquier valor QUE NO SEA igual a 4, ve volvera a ejecutar la pregunta.
let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
```

## Listas

### 5.1️ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista de elementos.
Por ejemplo:
```javascript
const array = [1, 'jaja', true, false, { nombre: 'juan', edad: 30, pais: 'colombia' }];
```

- ¿Qué es un objeto?

Es una lista de elementos PERO cada elemento tiene un nombre clave.
Por ejemplo:
```javascript
const objeto = {
    nombre: 'Juan',
    edad: 30,
    comidasFavoritas: ['Pollo frito', 'vegetales'],
    pais: 'Colombia'
};
```

- ¿Cuándo es mejor usar objetos o arrays?

    * Conviene utilizar ARRAYS cuando un elemento no es especial por si solo sino que todo lo que hagamos sera lo mismo que en todos los demás (la regla se puede incumplir). 
    * En cambio, se utilizan OBJETOS cuando necesitamos hacer cosas distintas y los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 5.2️ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```javascript
//En la posicion de los arrays, el primer elemento simpre sera 0.
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
}
imprimirPrimerElementoArray(['Juan', 'Carlos', 'Diego', 'Pablo']);
```

### 5.3️ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```javascript
//se crea un ciclo for y utilizando la propiedad length se obtiene el largo del arreglo, para ser recorrido y que termine la ejecucion al llegar al ultimo valor.
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        //imprimo todas las posiciones del arreglo utilizando [i]
        console.log(arr[i])
    }
}
imprimirElementoPorElemento(['Juan', 'Carlos', 'Diego', 'Pablo']);
```

### 5.4️ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```javascript
//tratar de obtener un valor de un objeto es distinto al de un array, ya que no se busca por posiciones, sino por los nombres de las propiedades, un ejemplo seria. Si creo un objeto y asigno una propiedad llamado nombre, y quiero saber su valor, deberia hacer un llamado directo, por ej: objeto.nombre o objeto.edad
//tengo que convertir todas las propiedades del objeto en un array, para eso se debe crear una nueva constate que llamaremos arr que utiliza el metodo Object.value.
//
function imprimirElementoPorElementoObjeto(objeto) {
    const arr = Object.values(objeto);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

const objeto = {
    nombre: 'Juan',
    edad: 30,
    comidasFavoritas: ['Pollo frito', 'vegetales'],
    pais: 'Colombia'
};

imprimirElementoPorElementoObjeto(objeto);
```
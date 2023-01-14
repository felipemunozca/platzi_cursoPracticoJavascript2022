/* Se crean las variables para seleccionar los elementos del HTML. */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetailContainer');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

/* Se utiliza el método para escuchar el evento click. Al presionar un icono o texto, aparecerá o desaparecerá alguna 
de las etiquetas de la página index. */
/* toogle significa intercambiar */
menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/* Se crea una función para hacer aparecer y desaparecer el menú en desktop. Se utiliza la propiedad “classList” para poner o 
quitar la clase “inactive” que existe en el archivo styles.css */
function toogleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    //Se agrega una condicional que verifica si la etiqueta <aside> está cerrada o no al presionar el email del usuario.
    if (!isAsideClosed) {
        mobileMenu.classList.add('inactive');
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

/* Se crea una función para hacer aparecer y desaparecer el menú hamburguesa al presionar el icono de las 3 rayas. */
function toogleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    //Se agrega una condicional que verifica si la etiqueta <aside> está cerrada o no al presionar el icono de 3 rayas.
    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    //  Si el <aside> esta abierto y quiero ver el menú en tamaño móvil, llamo a la función "closeProductDetailAside" para que 
    //lo cierre automáticamente y así no se monten entre ellos.
    //  La función "closeProductDetailAside" debe ir declarada en esta parte dentro de la función principal, sino se producirá un error.
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');


}

/* Se crea una función para hacer aparecer y desaparecer el menú <aside> al presionar el icono carrito de compra. */
function toggleCarritoAside() {

    //  Se produce un problema al visualizar el archivo index, si abro el menú de hamburguesa, y también el menú del carrito de compra, 
    //ambos textos se montan encima de ellos mismos, por lo que utilizando JS, se creara una regla que evite esto
    //  Primero, se crea una variable la cual se encargará de revisar si la variable mobileMenu "contiene" la clase "inactive".
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //  Segundo, utilizando el condicional if() mas signo de exclamación ! creo una pregunta con negación, es decir:
    //si mobileMenu NO tiene la clase inactive, utilizando add se la agrego.
    if (!isMobileMenuClosed) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive'); 
    }

    //  Tercero, si intento abrir otro menú al tener abierto el <aside> de productos no se verá ya que este se visualiza sobre los otros, 
    //es por eso que debo hacer que se oculte al presionar el botón de otro menú, para esto:
    //se crea una nueva variable, que se encargara de comparar si la variable productDetailContainer contiene la clase inactive.
    //  En el caso en que no tenga dicha clase, se la agrego con utilizando add.
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
}

/* Se crea un arreglo vacío, al que después se le agregara el listado de productos, como si fuera una API. */
const productList = [];

/* Utilizando el método push(), se agregan los productos al arreglo. */
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
});
productList.push({
    name: 'Smartphone',
    price: 520,
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Reloj',
    price: 50,
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

/* Se crea una función que se encargara de renderizar todo el contenido del arreglo dentro de la vista del archivo index. La función 
recibirá como parámetro un arreglo*/
function renderProducts(array) {

    //  Existe otra forma de utilizar el ciclo for, en vez de agregar un index (i) e ir sumando 1 a cada vuelta del ciclo, se puede 
    //utilizar "for of" agregando un arreglo de objetos para que lea todos los valores a la vez.
    for (producto of array) {

        //  Ahora que tengo un ciclo que recorre el arreglo, debo crear la estructura HTML para imprimir la información en la vista 
        //del archivo index.

        //  Primero, creo una variable que se convertirá en una etiqueta <div> y luego le asigno la clase "product-card".
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //  Segundo, para cargar la información del arreglo en la vista del index, utilizo el formato ya diseñado de este curso y creo
        //las clases y etiquetas directamente desde aquí.
        //  "Producto" es el valor a recorrer, para obtener los valores debo utilizar un punto . y el nombre de la propiedad del objeto,
        //por ejemplo: producto.name - producto.price - producto.image
        
        //  Tercero, se crea una variable para la etiqueta <img> y como atributo se le pasa un source o src mas el valor que tiene 
        //producto.image en el arreglo.
        //  Agrego un evento click al crear la etiqueta <img> y creo una nueva función llamada "openProductDetailAside" para mostrar los 
        //productos al hacer clic sobre las imágenes.
        //  Este nuevo evento se debe hacer dentro de esta función renderProducts() ya que fuera de esta función no existe,
        //por lo que si la llamar desde otra parte del código, el compilador de JavaScript no sería capaz de encontrarla.
        const productImg = document.createElement('img');
        productImg.setAttribute('src', producto.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        //  Cuarto, se crea una variable para una etiqueta <p> y como atributo se le agrega el precio del producto. Además se le
        //concatena el icono de precio $.
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.price;

        //  Quinto, se crea una variable para una etiqueta <p> y como atributo se le agrega el nombre del producto.
        const productName = document.createElement('p');
        productName.innerText = producto.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        //  Sexto, se crea una variable para una etiqueta <figure> que dentro tendra una etiqueta <img> a la cual se le pasara como
        //atributo el icono del carrito de compras que está en la carpeta de assets/icons. La ruta debe ser escrita completa.
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');

        //  Séptimo, una vez que se completó la maquetación, se le indicara a JavaScript en que posición se deben renderizar las 
        //etiquetas que se crearon como variables, para esto se utiliza el método .appendChild(). Al utilizar este método se comienzan
        //a insertar las etiquetas de hijos a padres, es decir, desde las que están mas adentro hacia afuera.
        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }

}

/* Se inicializa la función para renderizar los productos, y se le pasa el arreglo de productos como parámetro. */
renderProducts(productList);

/* Se crea una función para mostrar el menú <aside> con la vista del producto. Para hacerlo funcionar, solo se debe remover la clase 
inactive, que por defecto estará dentro del HTML. */
function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    // creo una nueva regla, cuando tenga el <aside> abierto, que cierre el menú del carrito, ya que si no se solapan entre ellos.
    aside.classList.add('inactive');
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/* Se crea una función que al presionar el botón con la X de cerrar en el menú <aside>, agregue la clase inactive para ocultar 
dicho menú. */
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

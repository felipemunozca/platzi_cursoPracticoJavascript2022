/**
 * Se crean las variables para seleccionar elementos por ID o clase desde el index.html.
 */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetailContainer');
const productDetailCloseIcon = document.querySelector('.product-detail-close')


/**
 * Se crea un arreglo vacío, donde después se le agregara el listado de productos, como si fuera una API.
 */
const productList = [];


/**
 * Se utiliza el método para escuchar el evento click. Al presionar un icono o texto, aparecerá o desaparecerá alguna de las 
 * etiquetas de la página index.
 * toogle significa intercambiar
 */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


/**
 * Se utiliza el metodo push() para agregar los productos al arreglo.
 */
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Una bicicleta muy rápida y liviana.',
});
productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un monitor con muy buena resolución para trabajar.',
});
productList.push({
    name: 'Smartphone',
    price: 520,
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un teléfono inteligente con una muy buena cámara y velocidad.',
});
productList.push({
    name: 'Reloj',
    price: 50,
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un reloj muy cómodo y práctico para el uso diario.',
});


/**
 * Se crea una nueva función que se encargara de renderizar todo el contenido del arreglo dentro del archivo index.html.
 * La función recibirá como parámetro un arreglo.
 * Se realizan cambios en esta función, se reemplaza el "for of" por un "forEach" para recorrer el arreglo y enviar la información
 * del producto al que se le hizo clic a una nueva función llamada renderDetailsAside().
 * Se cambia el evento addEventListener para enviar "producto" como parámetro.
 */
function renderProducts(array) {

    array.forEach(producto => {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', producto.image);

        productImg.addEventListener('click', function(){
            renderDetailsAside(producto);
        });

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.price;
        const productName = document.createElement('p');
        productName.innerText = producto.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    })

}


/**
 * Se inicia la función para renderizar y se le pasa como parámetro, el arreglo de los productos.
 */
renderProducts(productList);


/**
 * Se crea una nueva función para imprimir en el menú <aside> la información del producto tal cual se definió en el arreglo.
 * Se le agrega un ID a cada etiqueta del HTML para poder imprimir cada valor del arreglo donde correspondan.
 */
function renderDetailsAside(producto){

    productDetailContainer.classList.remove("inactive");

    const productImage = document.querySelector("#product-image")
    const productPrice = document.querySelector("#product-price");
    const productName = document.querySelector("#product-name");
    const productDescription = document.querySelector("#product-description");

    productImage.setAttribute('src', producto.image);
    productPrice.innerText = "$ " + producto.price;
    productName.innerText = producto.name;
    productDescription.innerText = producto.description;
}


/**
 * Se reescriben las funciones principales, utilizando solamente clases, toggle para intercambiar la clase de la variable principal y
 * add para agregar la clase inactiva cuando este levantado otro menú. 
 */
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.toggle('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
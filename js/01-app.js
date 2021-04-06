// Agregar Elementos al LocalStorage
// Volvamos al carrito de compras de la U de Humberto. Si presiono el botón agregar al carrito, este se agrega al carrito. Pero si recargo la página web se pierde los agregados al carrito.
// Cuando entro a amazon puedo guardar los elementos en el carrito y si vuelvo a entrar en dos días, seguirá en el carrito, para que ocurra esto se usa LocalStorage

// La API LocalStorage pertenece a la ventana global
// window window.localStorage o llamarlo localStorage

// ('key', 'value')
localStorage.setItem('nombre', 'Humberto');

// donde encontrar la información guardada de localStorge?
// en Chrome - Inspeccionar - Application - Storage - local Storage

// sessionStorage es diferente porque al cerrar el navegador
// los datos guardados se pierden 
// funcionan igual en sintaxis
// sessionStorage.setItem('nombre', 'Valenzuela');

// Solo guarda datos en string, es decir, si yo coloco
// localStorage.setItem('nombre', 1);
// el 1 lo coloca como string, por lo tanto no puedo guardar
// arreglos y tampoco objetos. solo se almacena string
// PERO, podemos utilizar un método llamado JSON.stringyfy 
// si tenemos un objeto
// Lo que hace es convierte el objeto en un string
const mercaderia = {
    nombre: 'Arroz',
    precio: 300
}

const mercaderiaString = JSON.stringify(mercaderia);
// El resultado tiene forma de objeto pero es un string
console.log(mercaderiaString); //{"nombre":"Arroz","precio":300}

// Comprabar que es un string
console.log(typeof mercaderiaString);//string
console.log(typeof mercaderia);//object

// Entonces podemos tener un objeto transformar en un string
// y almacenarlo al localstorage 
localStorage.setItem('mercaderia', mercaderiaString)


// ¿Qué hacemos con un arreglo?
const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('todosLosMeses', mesesString);
// También se aplica de esta forma
// localStorage.setItem('todosLosMeses', JSON.stringify(meses));
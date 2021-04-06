# JS18-LocalStorage
Obtener datos de LocalStorage. Eliminar y Actualizar elementos de LocalStorage
* Agregar Elementos al LocalStorage
* Cuando entro a amazon puedo guardar los elementos en el carrito y si vuelvo a entrar en dos días, 
* seguirá en el carrito, para que ocurra esto se usa LocalStorage
* La API LocalStorage pertenece a la ventana global
* localStorage.setItem('nombre', 'Humberto'); ('key', 'value')
* donde encontrar la información guardada de localStorge?
* en Chrome - Inspeccionar - Application - Storage - local Storage
* Solo guarda datos en string
* PERO, podemos utilizar un método llamado JSON.stringyfy
* localStorage.getItem('todosLosMeses');
* const mesesArray = JSON.parse(meses); console.log(mesesArray);

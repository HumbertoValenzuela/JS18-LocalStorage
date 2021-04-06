// 3. Eliminar y Actualizar elementos de LocalStorage

// Eliminar nombre. localStorage.removeItem('key')
localStorage.removeItem('nombre');
//  localStorage.removeItem('todosLosMeses');

// const meses = ['Enero', 'Febrero', 'Marzo'];
// const mesesString = JSON.stringify(meses);
// localStorage.setItem('todosLosMeses', mesesString);

// Actualizar un registro con localStorage
// 1. Obtener por ejemplo el string de meses y convertirlo a Array
 const mesesArray = JSON.parse(localStorage.getItem('todosLosMeses'));

  console.log(mesesArray);

// 2. Tengo el Array llamado mesesArray
// agregar elemento con el método .push
  mesesArray.push('Nuevo Mes'); // agregar nuevo valor al arreglo
 console.log(mesesArray);

// 3. localStorage.setItem para Reescribir el valor
 localStorage.setItem('todosLosMeses', JSON.stringify(mesesArray));


//  Borrar el localStorage
// localStorage.clear();
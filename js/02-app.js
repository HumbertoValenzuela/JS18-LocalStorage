// 2. Obtener datos de LocalStorage

const nombre = localStorage.getItem('mercaderia');
console.log(nombre);// {"nombre":"Arroz","precio":300}

//  sino tiene valor marca un null

// Como convertir un string(con forma de objeto) a un objeto
const mercaderiaJSON = localStorage.getItem('mercaderia');
console.log(JSON.parse(mercaderiaJSON));//{nombre: "Arroz", precio: 300}


// Como convertir un string(con forma de Array) a un Array
// Obtener datos del Arreglo de meses
const meses = localStorage.getItem('todosLosMeses');
console.log(meses);//string ["Enero","Febrero","Marzo"]
// Tendrá un arreglo válido
const mesesArray = JSON.parse(meses);
console.log(mesesArray);//Array  (3) ["Enero", "Febrero", "Marzo"]
'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let i = 2;
  while (num !== 1) {
    if(num%i === 0){
      array.push(i)
      num = num/i
    } else {
      i++
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let a = 0;

    for(let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++) {
        if(array[i] > array[j]){
            a = array[i]
            array[i] = array[j]
            array[j] = a
        }
      }
    }
   return array

    // solucion de martina--------------------------------------------------------
  //  let swap = true;
  // while (swap) {
  //   swap = false;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] > array[i+1]) {
  //       let aux = array[i];
  //       array[i] = array[i+1];
  //       array[i+1] = aux;
  //       swap = true;
  //     }
  //   }
  // }
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //[20,13,1,58,40,78]
  //     i
  //  j
  //

  for(let i = 1; i < array.length; i++){
    let j = i - 1;
    let vg = array[i];
    while (j >= 0 && vg < array[j]) {
      array[j + 1] = array[j];
      j--        
    }
    array[j + 1] = vg;
  }
  return array
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // 0    1   2  3  <<<<<< indices
  //[10, -2,  -7, 4]
  //  M
  //  i
  //      j

  // i = 0
  // min.index = 0
  // min.value = 10


   for (let i = 0; i < array.length - 1; i++) {
     let min = i;
     for (let j = i + 1; j < array.length; j++){
       if (array[min] > array[j]){
         min = j;      
       }
     }   
     if(i !== min){
       let vg = array[i];
       array[i] = array[min];
       array[min] = vg;
     }
    }
    return array;    
} 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

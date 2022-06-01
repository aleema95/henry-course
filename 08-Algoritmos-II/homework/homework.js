'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // izq < pivote < derecha

  // [10, -2, -7, 4, 8, 5, 3]

  if(array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random()*array.length)];
  let izq = [];
  let der = [];
  let equals = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] < pivot){
      izq.push(array[i]);
    } else if(array[i] > pivot){
      der.push(array[i]);
    } else {
      equals.push(array[i])
    }
  }

  return quickSort(izq).concat(equals).concat(quickSort(der));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // divide siempre a la mitad
  // izq = <> der
  // metodo que tome 2 arrays que devuelva uno array
  // los arrays estan ordenados


  if(array.length <= 1) return array; 

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);//left = [0,middle) << middle no incluido
  let right = array.slice(middle);//right = [middle, final] final incluido

  return merge(mergeSort(left),(mergeSort(right)))
}

function merge(left, right) { // combina arreglo left con arreglo right
  let leftIndex = 0;
  let rightIndex = 0;
  let array = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex])
      leftIndex++;
    } else {
      array.push(right[rightIndex])
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

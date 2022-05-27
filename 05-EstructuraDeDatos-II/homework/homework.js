"use strict";

const { captureRejections } = require("@11ty/eleventy/src/Util/AsyncEventEmitter");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
    this.head = null;
    this._length = 0;
}

LinkedList.prototype.add = function(data){
  let newNode = new Node(data);
  let current = this.head;
  if(!current){
    this.head = newNode;
    this._length++;
    return newNode;
  }

  while(current.next){
    current = current.next;
  }

  current.next = newNode;
  this._length++;
  return newNode;
}

LinkedList.prototype.remove = function(){
  let current = this.head; //agregamos el head a la variable current
  if(!this.head) return null; // checkeamos si existe this.head
  if(this.head.next === null){ // checkeamos si existe un nodo
    var remove = current.data; // guardamos el valor que voy a eliminar en una variable
    this.head = null; // Eliminamos el contenido de head
    this._length--; // aumentamos en uno el valor de this._length
    return remove; // devolvemos la data actual
  };

  while(current.next.next){ //Checkeamos el 2do hacia adelante tiene un nodo
    current = current.next //Actualizamos el nodo actual al siguiente
  }
  var remove = current.next.data
  current.next = null
  this._length--;
  return remove;
  
}

LinkedList.prototype.search = function(data){
  var current = this.head;

  while(current !== null){
    if(typeof data === "function"){
      if(data(current.data) === true){
          return current.data;
      }
    } else if(data === current.data) {
      return current.data;
    }
    current = current.next
  }
  return null;
}

function Node(value) {
  this.data = value;
  this.next = null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  let obj = {};
  this.numBuckets = 35
  this.hash = function(key){
    var sumaPosicion = 0;
      for(let i=0; i < key.length; i++){
        sumaPosicion += key.charCodeAt(i)
      }
     return sumaPosicion % this.numBuckets
  }
  this.set = function(key, value){
    if(typeof(key) !== 'string') throw new TypeError('Keys must be strings');
    obj[this.hash(key)] = value    
  }
  this.get = function(key){
    return obj[this.hash(key)]
  }
  this.hasKey = function(key) {
    return obj[this.hash(key)] !== undefined
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};

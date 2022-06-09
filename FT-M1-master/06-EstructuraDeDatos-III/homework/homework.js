"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(valor) {
  this.value = valor;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function(){
 var conteo = 1;

  if(this.left)conteo += this.left.size();
  if(this.right)conteo += this.right.size();

  return conteo;

  // if(this.left !== null){
  //   count++;
  //   this.left.size();
  // } else if(this.right !== null) {
  //   count++;
  //   this.right.size();
  // } else {
  //   return this.root.size();
  // }
}

BinarySearchTree.prototype.insert = function(valor){

  if(valor < this.value){
    if(this.left){
        this.left.insert(valor);
    }else{
        this.left = new BinarySearchTree(valor);
    }
  } else {
    if(this.right){
        this.right.insert(valor);
    } else {
        this.right = new BinarySearchTree(valor);
    }
  }
}

BinarySearchTree.prototype.contains = function(valor){
  if(this.value === valor) return true;
  //return (this.left.contains(value) ? true : false) Checkear OPERADOR TERNARIO
  if(this.left?.contains(valor)) return true;
 
  if(this.right?.contains(valor)) return true; 

  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order = "in-order"){
  switch(order){
    case "in-order": {
      this.left?.depthFirstForEach(cb,order);
      cb(this.value);
      this.right?.depthFirstForEach(cb,order);
        break;
    }
    case "post-order": {
      this.left?.depthFirstForEach(cb,order);
      this.right?.depthFirstForEach(cb,order);
      cb(this.value);
        break;
    }
    
    case "pre-order": {
      cb(this.value);
      this.left?.depthFirstForEach(cb,order);
      this.right?.depthFirstForEach(cb,order);
        break;
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []){
  cb(this.value);
  if(this.left)arr.push(this.left);
  if(this.right)arr.push(this.right);
  if (arr.length) {
    arr.shift().breadthFirstForEach(cb, arr)
  };

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)){
    resultSet.push(startEl);
  }

  for(var i = 0; i < startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...elements] //otra manera de concatenar //... se llama spread Operator
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector.indexOf('.') == 0) {
    return "class";
  } else if (selector.includes('#')) {
    return "id";
  } else if (selector.indexOf('.') > 0) {
    // selector.split('.') -> [tag, class]
    return "tag.class";
  } 
    return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
     matchFunction = (elemento) => (selector === `#${elemento.id}`);
  } else if (selectorType === "class") {
     matchFunction = (elemento) => (elemento.classList.contains(selector.substring(1)));
  } else if (selectorType === "tag.class") {
     matchFunction = (elemento) => {
      //  var [tagBuscado, classBuscada] = selector.split('.');
      //  return matchFunctionMaker(tagBuscado)(elemento) && matchFunctionMaker(`.${classBuscada}`)(elemento)
      //  se puede hacer la comparacion sin el if si es en una sola linea //////////////
      return elemento.classList.contains(selector.substring(selector.indexOf('.') + 1)) && elemento.tagName == selector.substring(0, selector.indexOf('.')).toUpperCase();

      // if(elemento.classList.contains(selector.substring(selector.indexOf('.') + 1))){
      //   return elemento.tagName == selector.substring(0, selector.indexOf('.')).toUpperCase()
      // } else {
      //   return false;
      // }

      //  if(elemento.classList.contains(selector.substring(selector.indexOf('.') + 1))){
      //    if(elemento.tagName == selector.substring(0, selector.indexOf('.')).toUpperCase()){
      //      return true;
      //    } else {
      //      return false;
      //    }
      //  } else {
      //    return false;
      //  }
     };
  } else if (selectorType === "tag") {
     matchFunction = (elemento) => {
      return elemento.tagName === selector.toUpperCase();
     }
  } 
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

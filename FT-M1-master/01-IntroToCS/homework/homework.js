'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var arr = num.split('');
  var rev = arr.reverse();
  var suma = 0;
  let i = 0;
  
    for(i=0;i<rev.length;i++) {
       suma = suma + rev[i]*(2**i);
    }
    console.log(suma);
    return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  var arr = [];        
        while (num >= 1) {
            arr.push(Math.floor(num%2))
            num = num/2
        }
        arr.reverse()
        return arr.join('');
        
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
// let suma = function(a, b){
//   return a + b
//   }

///FUNCIÓN DE EXPRESIÓN


/////
var suma = (a,b) => a + b

function sumaDoble() {
    
    var a = document.getElementById('inputA').value;
    var b = document.getElementById('inputB').value;
     
    a = parseFloat(a);
    b = parseFloat(b);
     
    
    if (!isNaN(a) && !isNaN(b)) {
      
      var resultado = suma(a, b);
      
     
      document.getElementById('resultado').textContent = "El resultado es: " + resultado;
    } else {
      document.getElementById('resultado').textContent = "Por favor, ingrese valores numéricos válidos en todos los campos.";
    }
  }
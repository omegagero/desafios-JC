// function example(a, b, c){
//   return a+b+c
//   }

///FUNCIÓN DE EXPRESIÓN

var example = function(a, b, c) {
  return a + b + c;
};




function tripleSuma() {

  var a = document.getElementById('inputA').value;
  var b = document.getElementById('inputB').value;
  var c = document.getElementById('inputC').value;

  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);


  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
   
    var resultado = example(a, b, c);
    
   
    document.getElementById('resultado').textContent = "El resultado es: " + resultado;
  } else {
    document.getElementById('resultado').textContent = "Por favor, ingrese valores numéricos válidos en todos los campos.";
  }
}

  

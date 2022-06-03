// Helpers
function esPar(numero) {              //Para saber si la lista es par//
    return (numero % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {   //Calcula el promedio cuando la lista es impar//
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  // Calculadora de mediana
  function medianaSalarios(lista) {                  
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personaMitad1 = lista[mitad - 1];
      const personaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
      return mediana;
    } else {
      const personaMitad = lista[mitad];
      return personaMitad;
    }
  }
  
  // Mediana General
  const salariosCol = colombia.map(   //Me crea una variable solo con los salarios//
    function (persona) {
      return persona.salary;
    }
  );
  
  const salariosColSorted = salariosCol.sort( //Me ordena la lista de salarios de menor a mayor//
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const medianaGeneralCol = medianaSalarios(salariosColSorted); //valor mediana sueldos//
  
  // Mediana del top 10%
  const spliceStart = (salariosColSorted.length * 90) / 100;  // corta en la posicion 18 del array es decir el 10% mas alto
  const spliceCount = salariosColSorted.length - spliceStart; //elementos a usar del array (los elimina del array original) (20-18 = 2) usa la posición 19 y 20
  
  const salariosColTop10 = salariosColSorted.splice(      //lista del 10% de los sueldos más altos//
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  
  console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });
  
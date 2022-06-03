//const lista1 = [
//    1,
//    2,
//    3,
//    1,
//    2,
//    3,
//    4,
//    2,
//    2,
//    2,
//    1,
 // ];
  
//  const lista1Count = {};
  
//  lista1.map(
//    function (elemento) {
//      if (lista1Count[elemento]) {
//        lista1Count[elemento] += 1;  //Suma 1 cada vez que se repite 1 numero//
//      } else {
//        lista1Count[elemento] = 1;
//      }
//    }
//  );
  
//  const lista1Array = Object.entries(lista1Count).sort(  //Convierte la lista1Count en un array//
//    function (elementoA, elementoB) {                    //Elemento A numeros y Elemento B es la cantidad de repeticiones//
//      return elementoA[1] - elementoB[1];                //Ordenar los array segun la posicion 2 que es la cantidad de repeticiones (Ordena de menor a mayor)//
//    }
//  );
  
//  const moda = lista1Array[lista1Array.length - 1];      //Moda = la ultima posicion del array//
  
  function Calcularmoda(lista) {
    const lista1Count = {};
    lista.map(
        function (elemento) {
          if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;  
          } else {
            lista1Count[elemento] = 1;
          }
        }
      );
      
      const lista1Array = Object.entries(lista1Count).sort(  
        function (elementoA, elementoB) {                    
          return elementoA[1] - elementoB[1];                
        }
      );
      const moda = lista1Array[lista1Array.length - 1];    
      return moda;  
  }
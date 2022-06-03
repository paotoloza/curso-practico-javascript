function calcularmediaaritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valoracumulado = 0, nuevoElemento) {
        return valoracumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }


//const numbers = [ 300,
//    200,
//    100,
//    400000000,];
//numbers.sort((a, b) => a - b);

function esPar (numero){
    if (numero % 2 === 0) {
    return true;
} else {
    return false;
}
}

function CalcularMediana(lista){ 
    var numbers = lista.sort((a, b) => a - b);

const mitadLista1 = parseInt(numbers.length / 2);

let mediana;

if (esPar(numbers.length)) {
  const elemento1 = numbers[mitadLista1];
  const elemento2 = numbers[mitadLista1 - 1];
  
  const promedioelemento1y2 = calcularmediaaritmetica ([elemento1, elemento2]);
  mediana = promedioelemento1y2;

} else {
  mediana = numbers[mitadLista1]
}
return mediana;
}


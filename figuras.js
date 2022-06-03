//Código del cuadrado

console.group("Cuadrados")
//const ladocuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetrocuadrado(lado) {
    return lado * 4;
} 
perimetrocuadrado();

//const perimetrocuadrado = ladocuadrado * 4;
//console.log("El perímetro del cuadrado es: " + perimetrocuadrado + "cm");

//const areacuadrado = ladocuadrado * ladocuadrado;

function areacuadrado(lado) {
    return lado * lado;
} 
areacuadrado();

//console.log("El área del cuadrado es: " + areacuadrado + "cm^2");
console.groupEnd();

//Código del triangulo

console.group("Triangulos")
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;
//console.log("Los lados del triángulo miden: " + ladotriangulo1 + "cm, " 
//+ ladotriangulo2 + "cm, " + basetriangulo + "cm");

//const alturatriangulo = 5.5;
//console.log("La altura del triángulo es: " + alturatriangulo + "cm");

function perimetrotriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
perimetrotriangulo();

//const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
//console.log("El perímetro del triángulo es: " + perimetrotriangulo + "cm");

function areatriangulo(altura, base){
    return (base*altura) / 2;
} 
areatriangulo();

//const areatringulo = (basetriangulo * alturatriangulo) / 2;
//console.log("El área del triángulo es: " + areatringulo + "cm^2");
console.groupEnd();

//Código del cuadrado

console.group("Circulos")
//const radiocirculo = 4;
//console.log("El radio del círculo es: " + radiocirculo + "cm");

function diametrocirculo(radio){
    return radio * 2;
} 
diametrocirculo();

//const diametrocirculo = radiocirculo * 2;
//console.log("El diametro del círculo es: " + diametrocirculo + "cm");

const PI = Math.PI;
//console.log("PI es: " + PI + "cm");

function perimetrocirculo(radio){
    const diametro = diametrocirculo(radio);
    return diametro * PI;
} 
perimetrocirculo();

//const perimetrocirculo = diametrocirculo * PI;
//console.log("El perímetro del círculo es: " + perimetrocirculo + "cm");

function areacirculo(radio){
    return (radio * radio) * PI;
} 
areacirculo();

//const areacirculo = (radiocirculo * radiocirculo) * PI;
//console.log("El área del círculo es: " + areacirculo + "cm^2");
console.groupEnd();

//Aquí interactuamos con HTML

function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  
  const perimetro = perimetrocuadrado(value);
  alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areacuadrado(value);
    alert(area);
    
}

function calcularPerimetroTriangulo(){
    const inputlado1 = document.getElementById("Inputlado1Triangulo");
    const valuelado1 = inputlado1.value;
    const inputlado2 = document.getElementById("Inputlado2Triangulo");
    const valuelado2 = inputlado2.value;
    const inputbase = document.getElementById("InputbaseTriangulo");
    const valuebase = inputbase.value;

    const perimetrotri = perimetrotriangulo(valuelado1, valuelado2, valuebase);
    alert(perimetrotri);
  
  }

  function calcularAreaTriangulo(){
    const inputbase = document.getElementById("InputbaseTriangulo");
    const valuebase = inputbase.value;
    const inputaltura = document.getElementById("InputalturaTriangulo");
    const valuealtura = inputaltura.value;

    const areatri = areatriangulo(valuealtura, valuebase);
    alert(areatri);
  
  }

  function calcularPerimetroCirculo(){
    const inputradio = document.getElementById("InputCirculo");
    const valueradio = inputradio.value;
    
    const perimetrocir = perimetrocirculo(valueradio);
    alert(perimetrocir);
  }  

  function calcularAreaCirculo(){
    const inputradio = document.getElementById("InputCirculo");
    const valueradio = inputradio.value;
    
    const areacir = areacirculo(valueradio);
    alert(areacir);
}
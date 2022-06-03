function alturatriangulo(lado1, lado2, base){
    if (lado1 === lado2 && lado1 != base) {
        return Math.sqrt((lado1*lado1) - ((base * base)/4 ));
    }
    else 
    alert ("No es isósceles");
} 
perimetrotriangulo();

function calcularAlturaTriangulo(){
    const inputlado1 = document.getElementById("Inputlado1Triangulo");
    const valuelado1 = inputlado1.value;
    const inputlado2 = document.getElementById("Inputlado2Triangulo");
    const valuelado2 = inputlado2.value;
    const inputbase = document.getElementById("InputbaseTriangulo");
    const valuebase = inputbase.value;

    const altura = alturatriangulo(valuelado1, valuelado2, valuebase);
    alert(altura);
  
  }
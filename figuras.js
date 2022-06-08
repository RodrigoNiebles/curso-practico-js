//Codigo del cuadrado


console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrato + "cm");


function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();




//Codigo del triangulo


//console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del tringulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm ");

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo  + "cm");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) /2
}


function calcularAlturaTriangulo(ladoA, ladoB){
    return (Math.sqrt ((ladoA*ladoA)+ (ladoB*ladoB)));
}
console.log(calcularAlturaTriangulo);






//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();




//Codigo del circulo

//console.group("circulo");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm")

//Diametro

function diametroCirculo(radio){
    return radio * 2;
}


//PI
const PI = Math.PI;
console.log("PI es: " + PI)



//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); 
    return diametro * PI;
}


//Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();


// aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);    
}


function calcularDiametroCirculo (){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = inputt.value;

    const area = areaCirculo(value);
    alert(areaCirculo);
}
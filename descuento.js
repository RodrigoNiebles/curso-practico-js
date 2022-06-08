//const precioOriginal = 120;
//const descuento = 0;


const cupones = ["Cupon1", "Cupon2", "Cupon3"];

function calcularPrecioConDescuento(precio, descuento, cupon){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento) / 100);

    return precioConDescuento - cupon;
}


  
function buttonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;

  
    if (!cupones.includes(cuponValue)){
        cupon = 0;
    }
    else if (cuponValue === "Cupon1"){
        cupon = 2000;
    }
    else if (cuponValue === "Cupon2"){
        cupon = 4000;
    }
    else if (cuponValue === "Cupon3"){
        cupon = 8000;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, cupon);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}





function precioMenosCupon(precio, cupon){
    const descontarCupon = (precio - cupon);

    return descontarCupon;
    

}

function descuentoSoloCupon (){
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;


    if (!cupones.includes(cuponValue)){
        cupon = 0;
    }
    else if (cuponValue === "Cupon1"){
        cupon = 2000;
    }
    else if (cuponValue === "Cupon2"){
        cupon = 4000;
    }
    else if (cuponValue === "Cupon3"){
        cupon = 8000;
    }

    const descontarCupon = precioMenosCupon (priceValue, cupon);
    
    const ResultP = document.getElementById("ResultD");
    ResultP.innerText = "El precio total con tu cupon es de: $" + descontarCupon;

}



    


    
    ///const InputCupon = document.getElementById("InputCupon");
    ///const cuponValue = InputCupon.value; 

    ///let descuento;
    ///switch(cuponValue){
    ///case cupones[0]: "Cupon1"
     /// descuento = 15;
    ///break;
   /// case cupones[1]: "Cupon2"
    ///  descuento = 25;
   /// break;
    ///case cupones[2]: "Cupon3"
     /// descuento = 35;
    ///break;
    

    










//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});



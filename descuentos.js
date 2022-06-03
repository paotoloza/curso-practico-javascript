//const precioOriginal = 120;
//const descuento = 18;

//const porcentajePreciocondescuento = 100 - descuento;
//const preciocondescuento = (precioOriginal * porcentajePreciocondescuento) / 100;

//console.log({
//    precioOriginal,
//    descuento, 
//    porcentajePreciocondescuento,
//    preciocondescuento
//});


function precioDescuento(preciooriginal, descuento){
   const porcentajedescuento = 100 - descuento;
   return (preciooriginal * porcentajedescuento) / 100;

}
precioDescuento();

function PriceDiscount(){
    const inputprice = document.getElementById("InputPrice");
    const valueprice = inputprice.value;
    const inputdiscount = document.getElementById("InputDiscount");
    const valuediscount = inputdiscount.value;

    const preciocondescuento = precioDescuento(valueprice, valuediscount);

    const resultP = document.getElementById("ResultP")
    resultP.innerText = "El precio con descuento son: $" + preciocondescuento;
}
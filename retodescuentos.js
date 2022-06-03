const coupons = [
    "cupon1",
    "cupon2",
    "cupon3",
];

function calcularPrecioConDescuento(preciooriginal, descuento){
    const porcentajedescuento = 100 - descuento;
    return (preciooriginal * porcentajedescuento) / 100;
 
 }
 calcularPrecioConDescuento();
 
 function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  
    switch(couponValue) {
      case coupons[0]: // "cupon1"
        descuento = 15;
      break;
      case coupons[1]: // "cupon2"
        descuento = 30;
      break;
      case coupons[2]: // "cupon3"
        descuento = 25;
      break;
    }
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
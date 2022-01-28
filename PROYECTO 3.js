
let productos = [];

let subtotal = 0;

let totalIva = 0;

let total = 0;
let sumaTotal = 0;
let sumaIva;
let sumaPrecioFinal;

function calcularIva(precio) {
  let ivaProducto = precio * 0.16;
  totalIva = totalIva + ivaProducto
  return ivaProducto;
}

function agregarProducto(nombre, precio, descuentoTipo) {
  let precioDescuento;
  let descuento;
  let ivaProducto;

  if (descuentoTipo) {
    switch (descuento) {
      case 1:
        precioDescuento = precio - (precio * 0.10)
        break;
      case 2:
        precioDescuento = precio - (precio * 0.05)
        break;
      default:
        precioDescuento = precio - (precio * 0.03)
        break

    }
  }

  if (precioDescuento) {
    ivaProducto = calcularIva(precioDescuento);
    subtotal = subtotal + (precioDescuento - ivaProducto);
    total = total + precioDescuento;
  } else {
    ivaProducto = calcularIva(precio)
    subtotal = subtotal + (precio - ivaProducto);
    total = total + precio;


  }
  const producto = {
    nombre: nombre,
    precio,
    precioFinal: precioDescuento ? precioDescuento : undefined,
    valorIva: ivaProducto,

  };
  productos.push(producto)
};

function facturar() {
  for (let i = 0; i < productos.length ; i++) {
    sumaTotal += productos[i].precioFinal
  }
  console.log(productos) 
  console.log(`El total a pagar es de: $${sumaTotal}.`)

}
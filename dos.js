/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let producto;
  let marca;
  let precio;
  let peso;
  let tipo;
  let seguir;
  let acumPeso = 0;
  let acumMarca = 0;
  let marcaMasCaro;
  let marcaMax;
  let marcaMasbarato;
  let contadorPeso = 0;
  let acumPrecio = 0;
  let precioMax;
  let productoCaro;
  let precioBarato;
  let productoBarato;
  do {

    producto = prompt("Ingrese un producto");

    marca = prompt("Ingrese Marca");


    precio = prompt("Ingrese Precio");
    while (precio < 1) {
      precio = prompt("Ingrese Precio Mayor a 0");
    }
    if (acumPrecio == 0 || precio > precioMax){
      precioMax = precio;
      productoCaro = marca;
    }

    if (acumPrecio == 0 || precio > precioBarato ){
      precioBarato = precio;
      productoBarato = marca;
      
    }

    peso = parseInt(prompt("Ingrese Peso en Kg"));
    while (peso < 1) {
      peso = prompt("Error Ingrese Peso Mayor a 0");
    
    }
    tipo = prompt("El producto es solido O liquido ");
    while (tipo != 'solido' && tipo != 'liquido') {
      tipo = prompt("error El producto es solido O liquido ");

    }

    switch (marca) {
      
        

    }

    seguir = prompt("Desea Agregar Otro Producto? :");
  } while (seguir == 's');

  console.log("el peso total de la compra es : " + acumPeso);
  console.log("la marca del más caro de los líquidos : " + productoBarato);
  console.log("la marca del más barato de los sólidos : " + marcaMasbarato);

}

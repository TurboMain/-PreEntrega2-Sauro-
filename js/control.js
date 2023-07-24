function filtrarPorNombre() {
  const productosFiltrados = stockProductos.filter((stockProductos) =>
    stockProductos.nombre.toUpperCase().includes(nombreFiltrar)
  );
  return productosFiltrados;
}

function buscarPorCodigo() {
  const codigoBuscado = stockProductos.filter(
    (stockProductos) => (stockProductos.codigo = nombreFiltrar)
  );
  return codigoBuscado;
}

let codigoBuscado = stockProductos.codigo;
let nombreFiltrar = prompt(
  "Ingrese el nombre del producto a buscar.\n+ -Buscar por Codigo.\n0 -salir"
).toUpperCase();

while (nombreFiltrar != 0) {
  if (nombreFiltrar == "+") {
    nombreFiltrar = parseInt(prompt("Ingrese el codigo a buscar 0-salir"));
    const codigoFiltrado = buscarPorCodigo(nombreFiltrar);
    console.table(codigoFiltrado);
  } else {
    const productoBuscado = filtrarPorNombre(nombreFiltrar);
    console.table(productoBuscado);
  }

  nombreFiltrar = prompt("Ingrese el producto a buscar 0-salir");
}

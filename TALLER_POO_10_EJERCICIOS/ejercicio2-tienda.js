
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    calcularPrecio(cantidad) {
        if (this.precio <= 0) {
            throw new Error("Precio inválido");
        }

        if (cantidad <= 0) {
            throw new Error("Cantidad inválida");
        }

        return this.precio * cantidad;
    }
}

class ProductoFisico extends Producto {
    calcularPrecio(cantidad) {
        return super.calcularPrecio(cantidad) + 10000 * cantidad;
    }
}

class ProductoDigital extends Producto {
    calcularPrecio(cantidad) {
        return super.calcularPrecio(cantidad);
    }
}

let productos = [
    new ProductoFisico(1, "Teclado", 80000),
    new ProductoDigital(2, "Videojuego", 40000)
];

let carrito = [
    { producto: productos[0], cantidad: 2 },
    { producto: productos[1], cantidad: 1 }
];

// Calcular total
try {
    let total = 0;

    carrito.forEach(item => {
        total += item.producto.calcularPrecio(item.cantidad);
    });

    console.log("Total:", total);
} catch (error) {
    console.log("Error:", error.message);
}

// Precio negativo
try {
    let producto = new Producto(3, "Mouse", -5000);
    console.log(producto.calcularPrecio(1));
} catch (error) {
    console.log("Error:", error.message);
}

// Cantidad cero
try {
    productos[0].calcularPrecio(0);
} catch (error) {
    console.log("Error:", error.message);
}

// Producto duplicado
try {
    if (productos.some(p => p.id === 1)) {
        throw new Error("El producto ya existe");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Eliminar producto inexistente
try {
    let indice = carrito.findIndex(item => item.producto.id === 99);

    if (indice === -1) {
        throw new Error("Producto no encontrado en el carrito");
    }

    carrito.splice(indice, 1);
} catch (error) {
    console.log("Error:", error.message);
}

// Producto inexistente
try {
    let producto = productos.find(p => p.id === 99);

    if (!producto) {
        throw new Error("Producto inexistente");
    }
} catch (error) {
    console.log("Error:", error.message);
}

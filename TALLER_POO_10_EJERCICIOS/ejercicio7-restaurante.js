
class ProductoMenu {
    #precio;

    constructor(id, nombre, precio, cantidad) {
        if (precio <= 0) throw new Error("Precio inválido");

        this.id = id;
        this.nombre = nombre;
        this.#precio = precio;
        this.cantidad = cantidad;
    }

    calcularPrecio(cantidad) {
        if (cantidad <= 0) throw new Error("Cantidad inválida");
        if (cantidad > this.cantidad) throw new Error("Producto agotado");

        return this.#precio * cantidad;
    }
}

class Plato extends ProductoMenu {
    calcularPrecio(cantidad) {
        return super.calcularPrecio(cantidad) + 2000 * cantidad;
    }
}

class Bebida extends ProductoMenu {
    calcularPrecio(cantidad) {
        return super.calcularPrecio(cantidad);
    }
}

let menu = [
    new Plato(1, "Hamburguesa", 15000, 5),
    new Bebida(2, "Jugo", 5000, 10)
];

let pedidos = [];

// Pedido válido
try {
    let total = menu[0].calcularPrecio(2) + menu[1].calcularPrecio(1);
    pedidos.push({ productos: ["Hamburguesa", "Jugo"], total: total });
    console.log("Total del pedido:", total);
} catch (error) {
    console.log("Error:", error.message);
}

// Precio negativo
try {
    new Plato(3, "Pizza", -10000, 5);
} catch (error) {
    console.log("Error:", error.message);
}

// Producto agotado
try {
    menu[0].calcularPrecio(10);
} catch (error) {
    console.log("Error:", error.message);
}

// Cantidad inválida
try {
    menu[0].calcularPrecio(0);
} catch (error) {
    console.log("Error:", error.message);
}

// Pedido vacío
try {
    let productosPedido = [];

    if (productosPedido.length === 0) {
        throw new Error("El pedido está vacío");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Producto inexistente
try {
    let producto = menu.find(p => p.id === 99);

    if (!producto) {
        throw new Error("Producto inexistente en el menú");
    }
} catch (error) {
    console.log("Error:", error.message);
}

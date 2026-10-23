
class Servicio {
    constructor(id, nombre, tarifa) {
        if (tarifa <= 0) throw new Error("Tarifa inválida");

        this.id = id;
        this.nombre = nombre;
        this.tarifa = tarifa;
    }

    calcularCosto() {
        return this.tarifa;
    }
}

class Electricidad extends Servicio {
    calcularCosto() {
        return super.calcularCosto() + 15000;
    }
}

class Plomeria extends Servicio {
    calcularCosto() {
        return super.calcularCosto() + 10000;
    }
}

class Mantenimiento extends Servicio {}

let servicios = [
    new Electricidad(1, "Reparar cableado", 50000),
    new Plomeria(2, "Reparar tubería", 40000),
    new Mantenimiento(3, "Reparación general", 30000)
];

let ordenes = [];

// Orden válida
try {
    ordenes.push({
        id: 1,
        cliente: "Ana",
        servicio: servicios[0]
    });

    console.log("Costo:", servicios[0].calcularCosto());
} catch (error) {
    console.log("Error:", error.message);
}

// Tarifa negativa
try {
    new Servicio(4, "Reparación", -20000);
} catch (error) {
    console.log("Error:", error.message);
}

// Orden sin cliente
try {
    let cliente = "";

    if (!cliente) {
        throw new Error("Falta el cliente");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Servicio inexistente
try {
    let servicio = servicios.find(s => s.id === 99);

    if (!servicio) {
        throw new Error("Servicio inexistente");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Orden duplicada
try {
    if (ordenes.some(o => o.id === 1)) {
        throw new Error("Orden duplicada");
    }
} catch (error) {
    console.log("Error:", error.message);
}

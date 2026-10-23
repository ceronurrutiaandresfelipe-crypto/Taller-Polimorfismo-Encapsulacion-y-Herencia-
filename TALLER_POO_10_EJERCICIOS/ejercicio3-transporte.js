
class Vehiculo {
    constructor(id, capacidad) {
        if (capacidad <= 0) {
            throw new Error("Capacidad inválida");
        }

        this.id = id;
        this.capacidad = capacidad;
        this.ocupado = false;
    }

    asignarViaje() {
        if (this.ocupado) {
            throw new Error("El vehículo está ocupado");
        }

        this.ocupado = true;
    }

    calcularCosto(distancia) {
        if (distancia <= 0) {
            throw new Error("Distancia inválida");
        }

        return distancia * 1000;
    }
}

class Carro extends Vehiculo {
    calcularCosto(distancia) {
        if (distancia <= 0) {
            throw new Error("Distancia inválida");
        }

        return distancia * 2000;
    }
}

class Motocicleta extends Vehiculo {
    calcularCosto(distancia) {
        if (distancia <= 0) {
            throw new Error("Distancia inválida");
        }

        return distancia * 1000;
    }
}

class Bicicleta extends Vehiculo {
    calcularCosto(distancia) {
        if (distancia <= 0) {
            throw new Error("Distancia inválida");
        }

        return distancia * 500;
    }
}

let vehiculos = [
    new Carro(1, 4),
    new Motocicleta(2, 2),
    new Bicicleta(3, 1)
];

// Viaje válido
try {
    vehiculos[0].asignarViaje();
    console.log("Costo:", vehiculos[0].calcularCosto(10));
} catch (error) {
    console.log("Error:", error.message);
}

// Capacidad inválida
try {
    new Carro(4, 0);
} catch (error) {
    console.log("Error:", error.message);
}

// Vehículo duplicado
try {
    if (vehiculos.some(v => v.id === 1)) {
        throw new Error("Vehículo duplicado");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Vehículo ocupado
try {
    vehiculos[0].asignarViaje();
} catch (error) {
    console.log("Error:", error.message);
}

// Costo con distancia negativa
try {
    vehiculos[1].calcularCosto(-5);
} catch (error) {
    console.log("Error:", error.message);
}

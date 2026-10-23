
class Reserva {
    #precio;

    constructor(id, cliente, fecha, precio) {
        if (precio <= 0) throw new Error("Precio inválido");

        this.id = id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.#precio = precio;
        this.cancelada = false;
    }

    consultarPrecio() {
        return this.#precio;
    }

    cancelar() {
        if (this.cancelada) throw new Error("Reserva ya cancelada");
        this.cancelada = true;
    }
}

class ReservaHotel extends Reserva {}

class ReservaTour extends Reserva {
    consultarPrecio() {
        return super.consultarPrecio() + 10000;
    }
}

let reservas = [];
let cuposTour = 1;

// Reserva de hotel
try {
    let fecha = "2027-12-15";

    if (new Date(fecha + "T12:00:00") <= new Date()) {
        throw new Error("La fecha debe ser futura");
    }

    reservas.push(new ReservaHotel(1, "Ana", fecha, 200000));
    console.log("Reserva de hotel registrada");
} catch (error) {
    console.log("Error:", error.message);
}

// Fecha pasada
try {
    let fecha = "2020-01-01";

    if (new Date(fecha + "T12:00:00") <= new Date()) {
        throw new Error("La fecha debe ser futura");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Precio inválido
try {
    new ReservaHotel(2, "Carlos", "2027-12-20", -50000);
} catch (error) {
    console.log("Error:", error.message);
}

// Reserva duplicada
try {
    if (reservas.some(r => r.id === 1)) {
        throw new Error("Reserva duplicada");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Cancelar reserva inexistente
try {
    let reserva = reservas.find(r => r.id === 99);

    if (!reserva) throw new Error("Reserva inexistente");
    reserva.cancelar();
} catch (error) {
    console.log("Error:", error.message);
}

// Reservar tour sin cupos
try {
    if (cuposTour <= 0) {
        throw new Error("Tour sin cupos");
    }

    reservas.push(new ReservaTour(3, "Pedro", "2027-12-20", 80000));
    cuposTour--;
    console.log("Precio del tour:", reservas[1].consultarPrecio());

    if (cuposTour <= 0) {
        throw new Error("Tour sin cupos");
    }
} catch (error) {
    console.log("Error:", error.message);
}

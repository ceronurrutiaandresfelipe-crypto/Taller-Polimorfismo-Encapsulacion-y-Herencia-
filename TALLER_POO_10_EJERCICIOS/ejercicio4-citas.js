
class Profesional {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    consultar() {
        return "Consulta general";
    }
}

class MedicoGeneral extends Profesional {
    consultar() {
        return "Medicina general";
    }
}

class Especialista extends Profesional {
    consultar() {
        return "Consulta especializada";
    }
}

let profesionales = [
    new MedicoGeneral(1, "Laura"),
    new Especialista(2, "Pedro")
];

let citas = [];

// Cita válida
try {
    let cita = {
        id: 1,
        profesional: 1,
        paciente: "Ana",
        fecha: "2027-12-15",
        hora: "09:00"
    };

    citas.push(cita);
    console.log(profesionales[0].consultar(), cita);
} catch (error) {
    console.log("Error:", error.message);
}

// Fecha inválida o pasada
try {
    let fecha = new Date("2020-01-01");
    if (isNaN(fecha.getTime()) || fecha <= new Date()) {
        throw new Error("Fecha inválida o pasada");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Profesional inexistente
try {
    let profesional = profesionales.find(p => p.id === 99);
    if (!profesional) {
        throw new Error("Profesional inexistente");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Cita duplicada
try {
    if (citas.some(c => c.id === 1)) {
        throw new Error("Cita duplicada");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Horario ocupado
try {
    let ocupado = citas.some(c =>
        c.profesional === 1 &&
        c.fecha === "2027-12-15" &&
        c.hora === "09:00"
    );

    if (ocupado) {
        throw new Error("Horario ocupado");
    }
} catch (error) {
    console.log("Error:", error.message);
}

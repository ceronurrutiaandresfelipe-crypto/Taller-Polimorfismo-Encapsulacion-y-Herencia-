
class Mascota {
    constructor(id, nombre, edad) {
        if (edad < 0 || !Number.isInteger(edad)) {
            throw new Error("Edad inválida");
        }

        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.adoptada = false;
    }

    adoptar() {
        if (this.adoptada) {
            throw new Error("La mascota ya fue adoptada");
        }

        this.adoptada = true;
    }

    cuidados() {
        return "Alimentación y revisión veterinaria";
    }
}

class Perro extends Mascota {
    cuidados() {
        return "Paseos, alimentación y revisión veterinaria";
    }
}

class Gato extends Mascota {
    cuidados() {
        return "Arenero, alimentación y revisión veterinaria";
    }
}

let mascotas = [
    new Perro(1, "Max", 3),
    new Gato(2, "Michi", 2)
];

let solicitudes = [];

// Adopción válida
try {
    mascotas[0].adoptar();
    solicitudes.push({ id: 1, mascota: mascotas[0].id, persona: "Ana" });

    console.log("Adopción registrada");
    console.log(mascotas[0].cuidados());
} catch (error) {
    console.log("Error:", error.message);
}

// Edad inválida
try {
    new Perro(3, "Rocky", -2);
} catch (error) {
    console.log("Error:", error.message);
}

// Mascota duplicada
try {
    if (mascotas.some(m => m.id === 1)) {
        throw new Error("Mascota duplicada");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Mascota ya adoptada
try {
    mascotas[0].adoptar();
} catch (error) {
    console.log("Error:", error.message);
}

// Mascota inexistente
try {
    let mascota = mascotas.find(m => m.id === 99);

    if (!mascota) {
        throw new Error("Mascota inexistente");
    }

    mascota.adoptar();
} catch (error) {
    console.log("Error:", error.message);
}

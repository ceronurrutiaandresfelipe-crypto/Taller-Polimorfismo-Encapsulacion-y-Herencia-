
class Recurso {
    constructor(codigo, titulo) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.disponible = true;
    }

    prestar() {
        if (!this.disponible) {
            throw new Error("Recurso no disponible");
        }

        this.disponible = false;
    }

    devolver() {
        if (this.disponible) {
            throw new Error("El recurso no estaba prestado");
        }

        this.disponible = true;
    }
}

class LibroImpreso extends Recurso {
    plazo() {
        return 14;
    }
}

class LibroDigital extends Recurso {
    plazo() {
        return 7;
    }
}

let recursos = [
    new LibroImpreso("L1", "Cien años de soledad"),
    new LibroDigital("D1", "JavaScript básico")
];

let prestamos = [];

// Préstamo válido
try {
    recursos[0].prestar();
    prestamos.push({ codigo: "L1", usuario: "Ana" });
    console.log("Préstamo registrado");
} catch (error) {
    console.log("Error:", error.message);
}

// Recurso no disponible
try {
    recursos[0].prestar();
} catch (error) {
    console.log("Error:", error.message);
}

// Devolución válida
try {
    recursos[0].devolver();
    prestamos = prestamos.filter(p => p.codigo !== "L1");
    console.log("Recurso devuelto");
} catch (error) {
    console.log("Error:", error.message);
}

// Devolver sin préstamo
try {
    recursos[1].devolver();
} catch (error) {
    console.log("Error:", error.message);
}

// Código duplicado
try {
    if (recursos.some(r => r.codigo === "L1")) {
        throw new Error("Código duplicado");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Búsqueda sin resultados
try {
    let recurso = recursos.find(r => r.codigo === "X9");
    if (!recurso) {
        throw new Error("Recurso inexistente");
    }
} catch (error) {
    console.log("Error:", error.message);
}

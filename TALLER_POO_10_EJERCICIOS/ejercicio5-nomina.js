
class Empleado {
    #salario;

    constructor(id, nombre, salario) {
        if (!id || !nombre) {
            throw new Error("Faltan datos del empleado");
        }

        if (salario <= 0) {
            throw new Error("Salario inválido");
        }

        this.id = id;
        this.nombre = nombre;
        this.#salario = salario;
    }

    calcularPago() {
        return this.#salario;
    }
}

class EmpleadoPlanta extends Empleado {
    calcularPago() {
        return super.calcularPago() + 200000;
    }
}

class Contratista extends Empleado {
    calcularPago() {
        return super.calcularPago() * 0.9;
    }
}

let empleados = [
    new EmpleadoPlanta(1, "Ana", 1800000),
    new Contratista(2, "Carlos", 1500000)
];

// Calcular pagos
try {
    empleados.forEach(e => {
        console.log(e.nombre, e.calcularPago());
    });
} catch (error) {
    console.log("Error:", error.message);
}

// Salario negativo
try {
    new Empleado(3, "Luis", -500000);
} catch (error) {
    console.log("Error:", error.message);
}

// Datos faltantes
try {
    new Empleado(3, "", 1000000);
} catch (error) {
    console.log("Error:", error.message);
}

// Empleado duplicado
try {
    if (empleados.some(e => e.id === 1)) {
        throw new Error("Empleado duplicado");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Verificar total de nómina
try {
    let total = empleados.reduce((suma, e) => suma + e.calcularPago(), 0);
    console.log("Total de nómina:", total);

    if (total !== 3350000) {
        throw new Error("Cálculo de nómina incorrecto");
    }
} catch (error) {
    console.log("Error:", error.message);
}

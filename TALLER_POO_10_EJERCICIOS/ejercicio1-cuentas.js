
class CuentaBancaria {
    numero;
    titular;
    #saldo;

    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.#saldo = saldo;
    }

    consultarSaldo() {
        return this.#saldo;
    }

    consignar(valor) {
        if (valor <= 0) {
            throw new Error("El valor debe ser positivo");
        }

        this.#saldo += valor;
    }

    retirar(valor) {
        if (valor <= 0 || valor > this.#saldo) {
            throw new Error("Retiro no válido");
        }

        this.#saldo -= valor;
    }
}

class CuentaAhorros extends CuentaBancaria {
    retirar(valor) {
        if (valor > 500000) {
            throw new Error("Máximo de retiro: 500000");
        }

        super.retirar(valor);
    }
}

class CuentaCorriente extends CuentaBancaria {
    retirar(valor) {
        if (valor > 1000000) {
            throw new Error("Máximo de retiro: 1000000");
        }

        super.retirar(valor);
    }
}

let cuentas = [
    new CuentaAhorros(1, "Ana", 800000),
    new CuentaCorriente(2, "Carlos", 1500000)
];

// Pruebas
try {
    cuentas[0].consignar(100000);
    console.log("Saldo:", cuentas[0].consultarSaldo());
} catch (error) {
    console.log(error.message);
}

try {
    cuentas[0].consignar(-5000);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    cuentas[0].retirar(900000);
} catch (error) {
    console.log("Error:", error.message);
}

// Buscar cuenta
try {
    let cuenta = cuentas.find(c => c.numero === 3);

    if (!cuenta) {
        throw new Error("Cuenta inexistente");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Cuenta duplicada
try {
    let numero = 1;

    if (cuentas.some(c => c.numero === numero)) {
        throw new Error("La cuenta ya existe");
    }
} catch (error) {
    console.log("Error:", error.message);
}

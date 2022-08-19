export class ControladorGastos {
    constructor() {
        this.alimentos = [];
        this.salud = [];
        this.transporte = [];
        this.salidas = [];
        this.otros = [];
        this.presupuesto = 0;
    }

    getPresupuesto() {
        return this.presupuesto
    }

    setPresupuesto(monto) {
        this.presupuesto = monto
    }

    agregarAlimentos(monto) {
        this.alimentos.push(monto);
    }

    montoAlimentos() {
        return this.alimentos;
    }

    agregarSalud(monto) {
        this.salud.push(monto);
    }

    montoSalud() {
        return this.salud;
    }

    agregarTransporte(monto) {
        this.transporte.push(monto);
    }

    montoTransporte() {
        return this.transporte;
    }

    agregarSalidas(monto) {
        this.salidas.push(monto);
    }

    montoSalidas() {
        return this.salidas;
    }

    agregarOtros(monto) {
        this.otros.push(monto);
    }

    montoOtros() {
        return this.otros;
    }
}

export class GastoAlimentos {
    constructor(cantidad, lugar) {
        this.cantidad = cantidad;
        this.lugar = lugar;
    }

    montoTotal(gastos, presupuesto) {
        let total = 0;
        gastos.forEach(gasto => {
            total += parseInt(gasto.cantidad);
        });

        return {
            total,
            presupuesto
        }
    }
}

export class GastoSalud {
    constructor(cantidad, lugar) {
        this.cantidad = cantidad;
        this.lugar = lugar;
    }

    montoTotal(gastos, presupuesto) {
        let total = 0;
        gastos.forEach(gasto => {
            total += parseInt(gasto.cantidad);
        });

        return {
            total,
            presupuesto
        }
    }
}

export class GastoTransporte {
    constructor(cantidad, lugar) {
        this.cantidad = cantidad;
        this.lugar = lugar;
    }

    montoTotal(gastos, presupuesto) {
        let total = 0;
        gastos.forEach(gasto => {
            total += parseInt(gasto.cantidad);
        });

        return {
            total,
            presupuesto
        }
    }
}

export class GastoSalidas {
    constructor(cantidad, lugar) {
        this.cantidad = cantidad;
        this.lugar = lugar;
    }

    montoTotal(gastos, presupuesto) {
        let total = 0;
        gastos.forEach(gasto => {
            total += parseInt(gasto.cantidad);
        });

        return {
            total,
            presupuesto
        }
    }
}

export class GastoOtros {
    constructor(cantidad, lugar) {
        this.cantidad = cantidad;
        this.lugar = lugar;
    }

    montoTotal(gastos, presupuesto) {
        let total = 0;
        gastos.forEach(gasto => {
            total += parseInt(gasto.cantidad);
        });

        return {
            total,
            presupuesto
        }
    }
}
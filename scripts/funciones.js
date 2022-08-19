import * as clases from './clases.js'

export let nuevoGasto = new clases.ControladorGastos();
export let montoTotal
let totalA
let totalB
let totalC
let totalD
let totalE

//Se crea una funcion por cada categoria

export function alimentos() {

    let inputA = document.getElementById("alimentos").value
    let inputA2 = document.getElementById("selectA").value

    if (inputA > 0) {

        let nuevoAlimentos = new clases.GastoAlimentos(inputA, inputA2)
        nuevoGasto.agregarAlimentos(nuevoAlimentos);
        montoTotal = nuevoAlimentos.montoTotal(nuevoGasto.montoAlimentos(), nuevoGasto.getPresupuesto());

        let A = document.getElementById("A")
        A.innerHTML = "Gastaste $" + inputA + " en " + inputA2;

        let totalAlimentos = document.getElementById("totalAlimentos")
        totalAlimentos.innerHTML = "El total gastado en alimentos es $" + montoTotal.total

        inputA = document.getElementById("alimentos").value = ""
        inputA2 = document.getElementById("selectA").value = ""

    } else
        Swal.fire("El monto debe ser mayor que 0")

        totalA = parseInt(montoTotal.presupuesto - montoTotal.total)
        localStorage.setItem('totalA', totalA)
        totalGral.innerHTML = "El presupuesto restante es $" + (totalA);
}


export function salud() {

    let inputB = document.getElementById("salud").value
    let inputB2 = document.getElementById("selectB").value

    if (inputB > 0) {

        let nuevoSalud = new clases.GastoSalud(inputB, inputB2)
        nuevoGasto.agregarSalud(nuevoSalud);
        montoTotal = nuevoSalud.montoTotal(nuevoGasto.montoSalud(), nuevoGasto.getPresupuesto());

        let B = document.getElementById("B")
        B.innerHTML = "Gastaste $" + inputB + " en " + inputB2;

        let totalSalud = document.getElementById("totalSalud")
        totalSalud.innerHTML = "El total gastado en salud es $" + montoTotal.total

        inputB = document.getElementById("salud").value = ""
        inputB2 = document.getElementById("selectB").value = ""

    } else
        Swal.fire("El monto debe ser mayor que 0")

        let restante = localStorage.getItem('totalA')

        totalB = (parseInt(restante) - parseInt(montoTotal.total))
        localStorage.setItem('totalB', totalB)
        totalGral.innerHTML = "El presupuesto restante es $" + (totalB);
}

export function transporte() {
    let inputC = document.getElementById("transporte").value
    let inputC2 = document.getElementById("selectC").value

    if (inputC > 0) {

        let nuevoTransporte = new clases.GastoTransporte(inputC, inputC2)
        nuevoGasto.agregarTransporte(nuevoTransporte);
        montoTotal = nuevoTransporte.montoTotal(nuevoGasto.montoTransporte(), nuevoGasto.getPresupuesto());

        let C = document.getElementById("C")
        C.innerHTML = "Gastaste $" + inputC + " en " + inputC2;

        let totalTransporte = document.getElementById("totalTransporte")
        totalTransporte.innerHTML = "El total gastado en transporte es $" + montoTotal.total

        inputC = document.getElementById("transporte").value = ""
        inputC2 = document.getElementById("selectC").value = ""

    } else
        Swal.fire("El monto debe ser mayor que 0")

        let restante = localStorage.getItem('totalB')

        totalC = (parseInt(restante) - parseInt(montoTotal.total))
        localStorage.setItem('totalC', totalC)
        totalGral.innerHTML = "El presupuesto restante es $" + (totalC);
}

export function salidas() {
    let inputD = document.getElementById("salidas").value
    let inputD2 = document.getElementById("selectD").value

    if (inputD > 0) {

        let nuevoSalidas = new clases.GastoSalidas(inputD, inputD2)
        nuevoGasto.agregarSalidas(nuevoSalidas);
        montoTotal = nuevoSalidas.montoTotal(nuevoGasto.montoSalidas(), nuevoGasto.getPresupuesto());

        let D = document.getElementById("D")
        D.innerHTML = "Gastaste $" + inputD + " en " + inputD2;

        let totalSalidas = document.getElementById("totalSalidas")
        totalSalidas.innerHTML = "El total gastado en salidas es $" + montoTotal.total

        inputD = document.getElementById("salidas").value = ""
        inputD2 = document.getElementById("selectD").value = ""

    } else
        Swal.fire("El monto debe ser mayor que 0")

        let restante = localStorage.getItem('totalC')

        totalD = (parseInt(restante) - parseInt(montoTotal.total))
        localStorage.setItem('totalD', totalD)
        totalGral.innerHTML = "El presupuesto restante es $" + (totalD);
}

export function otros() {
    let inputE = document.getElementById("otros").value
    let inputE2 = document.getElementById("selectE").value

    if (inputE > 0) {

        let nuevoOtros = new clases.GastoOtros(inputE, inputE2)
        nuevoGasto.agregarOtros(nuevoOtros);
        montoTotal = nuevoOtros.montoTotal(nuevoGasto.montoOtros(), nuevoGasto.getPresupuesto());

        let E = document.getElementById("E")
        E.innerHTML = "Gastaste $" + inputE + " en " + inputE2;
        
        let totalOtros = document.getElementById("totalOtros")
        totalOtros.innerHTML = "El total gastado en otros es $" + montoTotal.total

        inputE = document.getElementById("otros").value = ""
        inputE2 = document.getElementById("selectE").value = ""

    } else
        Swal.fire("El monto debe ser mayor que 0")

        let restante = localStorage.getItem('totalD')

        totalE = (parseInt(restante) - parseInt(montoTotal.total))
        localStorage.setItem('totalE', totalE)
        totalGral.innerHTML = "El presupuesto restante es $" + (totalE);
}






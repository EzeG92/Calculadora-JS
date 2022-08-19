import * as funciones from './funciones.js'
import {nuevoGasto} from './funciones.js'
import * as selector from './selectores.js'

document.addEventListener("DOMContentLoaded", function () {

	let form1 = document.getElementById("formulario1")
	let form2 = document.getElementById("formulario2")
	let form3 = document.getElementById("formulario3")
	let form4 = document.getElementById("formulario4")
	let form5 = document.getElementById("formulario5")
	let presupuesto

	form1.addEventListener("submit", (e) => {
		e.preventDefault();
		funciones.alimentos();
	})

	form2.addEventListener("submit", (e) => {
		e.preventDefault();
		funciones.salud();
	})

	form3.addEventListener("submit", (e) => {
		e.preventDefault();
		funciones.transporte();
	})

	form4.addEventListener("submit", (e) => {
		e.preventDefault();
		funciones.salidas();
	})

	form5.addEventListener("submit", (e) => {
		e.preventDefault();
		funciones.otros();
	})

	Swal.fire({
			title: "Ingrese su presupuesto",
			input: "number",
			showCancelButton: false,
			confirmButtonText: "Confirmar",
			allowOutsideClick: false,
			inputValidator: monto => {
				if (monto <= 0) {
					return "El monto debe ser mayor que 0";
				} else {
					return undefined;
				}
			}
		})
		

		.then(resultado => {
			if (resultado.value > 0) {
				Swal.fire('El presupuesto ingresado es $' + resultado.value);
				presupuesto = document.getElementById("presIngresado")
				presupuesto.innerHTML = "Presupuesto ingresado $" + resultado.value
				nuevoGasto.setPresupuesto(Number(resultado.value))
			}

})

selector.selectAlimentos();
selector.selectSalud();	
selector.selectTransporte();
selector.selectSalidas();
selector.selectOtros();

})


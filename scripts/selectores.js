
//Crear option dentro de los select de HTML y completar con la informacion tomada del JSON
//Se crea una funcion por cada categoria

export function selectAlimentos() {
	
	fetch('datos.json')
	.then((resp) => resp.json())
	.then((data) => { 

        let opcion = document.createElement('option')
		let destino = document.getElementById("selectA")
		destino.append(opcion)

		let opcion1 = document.createElement('option')
		let destino1 = document.getElementById("selectA")
		destino1.append(opcion1)
		opcion1.append(data[0].lugar1)

		let opcion2 = document.createElement('option')
		let destino2 = document.getElementById("selectA")
		destino2.append(opcion2)
		opcion2.append(data[0].lugar2)

        let opcion3 = document.createElement('option')
		let destino3 = document.getElementById("selectA")
		destino3.append(opcion3)
		opcion3.append(data[0].lugar3)

        let opcion4 = document.createElement('option')
		let destino4 = document.getElementById("selectA")
		destino4.append(opcion4)
		opcion4.append(data[0].lugar4)

        let opcion5 = document.createElement('option')
		let destino5 = document.getElementById("selectA")
		destino5.append(opcion5)
		opcion5.append(data[0].lugar5)
    }
)}

export function selectSalud() {
	
	fetch('datos.json')
	.then((resp) => resp.json())
	.then((data) => { 

        let opcion = document.createElement('option')
		let destino = document.getElementById("selectB")
		destino.append(opcion)

		let opcion1 = document.createElement('option')
		let destino1 = document.getElementById("selectB")
		destino1.append(opcion1)
		opcion1.append(data[1].lugar1)

		let opcion2 = document.createElement('option')
		let destino2 = document.getElementById("selectB")
		destino2.append(opcion2)
		opcion2.append(data[1].lugar2)

        let opcion3 = document.createElement('option')
		let destino3 = document.getElementById("selectB")
		destino3.append(opcion3)
		opcion3.append(data[1].lugar3)

        let opcion4 = document.createElement('option')
		let destino4 = document.getElementById("selectB")
		destino4.append(opcion4)
		opcion4.append(data[1].lugar4)
    }
)}

export function selectTransporte() {
	
	fetch('datos.json')
	.then((resp) => resp.json())
	.then((data) => { 

        let opcion = document.createElement('option')
		let destino = document.getElementById("selectC")
		destino.append(opcion)

		let opcion1 = document.createElement('option')
		let destino1 = document.getElementById("selectC")
		destino1.append(opcion1)
		opcion1.append(data[2].lugar1)

		let opcion2 = document.createElement('option')
		let destino2 = document.getElementById("selectC")
		destino2.append(opcion2)
		opcion2.append(data[2].lugar2)

        let opcion3 = document.createElement('option')
		let destino3 = document.getElementById("selectC")
		destino3.append(opcion3)
		opcion3.append(data[2].lugar3)

        let opcion4 = document.createElement('option')
		let destino4 = document.getElementById("selectC")
		destino4.append(opcion4)
		opcion4.append(data[2].lugar4)
    }
)}

export function selectSalidas() {
	
	fetch('datos.json')
	.then((resp) => resp.json())
	.then((data) => { 

        let opcion = document.createElement('option')
		let destino = document.getElementById("selectD")
		destino.append(opcion)

		let opcion1 = document.createElement('option')
		let destino1 = document.getElementById("selectD")
		destino1.append(opcion1)
		opcion1.append(data[3].lugar1)

		let opcion2 = document.createElement('option')
		let destino2 = document.getElementById("selectD")
		destino2.append(opcion2)
		opcion2.append(data[3].lugar2)

        let opcion3 = document.createElement('option')
		let destino3 = document.getElementById("selectD")
		destino3.append(opcion3)
		opcion3.append(data[3].lugar3)

        let opcion4 = document.createElement('option')
		let destino4 = document.getElementById("selectD")
		destino4.append(opcion4)
		opcion4.append(data[3].lugar4)
    }
)}

export function selectOtros() {
	
	fetch('datos.json')
	.then((resp) => resp.json())
	.then((data) => { 

        let opcion = document.createElement('option')
		let destino = document.getElementById("selectE")
		destino.append(opcion)

		let opcion1 = document.createElement('option')
		let destino1 = document.getElementById("selectE")
		destino1.append(opcion1)
		opcion1.append(data[4].lugar1)
    }
)}
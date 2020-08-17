/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let promedio;
	let acumuladorEdad = 0;
	let NombreMasPesado;
	let HombreMasPesado;
	let flagHombre = 0;

	for (let i = 0; i < 5; i++) {

		nombre = prompt("Ingrese Nombre");
		while (!(isNaN(nombre))) {
			nombre = prompt("Error Ingrese Nombre");
		}

		peso = parseFloat(prompt("Ingrese Su peso"));
		while (peso < 1 || isNaN(peso)) {
			peso = parseFloat(prompt("Error Ingrese un peso Valido: "));
		}

		sexo = prompt("Ingrese Sexo f-m");
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("Error Ingrese Sexo f-m");
		}
		edad = parseInt(prompt("Ingrese Edad"));
		while (edad < 1 || isNaN(edad)) {
			edad = parseInt(prompt("Error Ingrese Edad"));
		}

		acumuladorEdad += edad;

		if (sexo == 'f') {
			contadorMujeres++;
		}
		else {
			if (flagHombre == 0 || peso > HombreMasPesado) {
				HombreMasPesado = peso;
				NombreMasPesado = nombre;
				flagHombre = 1;
			}
		}
	}

	promedio = acumuladorEdad / 5;

	console.log("La cantidad de mujeres Son " + contadorMujeres);
	console.log("La edad promedio es de : " + promedio);
	if (flagHombre == 0) {
		console.log("No se Ingreso ningun hombre");
	}
	else {
		console.log("El hombre mas pesado es : " + NombreMasPesado + " y pesa " + HombreMasPesado + "Kg");
	}

}

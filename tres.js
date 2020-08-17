/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let lugarPreferido;
	let sexoTitularMasPasajero;
	let mayorPasajeros;
	let acumPasajeros = 0;
	let contadorPasajeros = 0;
	let promedio = 0;
	let flag = 0;
	let acumCantidadInvierno = 0;
	let seguir;
	let contadorInvierno = 0;


	do {
		sexo = prompt("Ingrese Sexo f-m");
		while (sexo != 'm' && sexo != 'f') {
			sexo = prompt("Error Ingrese Sexo f-m");
		}

		lugar = prompt("Ingrese Lugar bariloche , cataratas , salta ");
		while (lugar != 'bariloche' && lugar != 'cataratas' && lugar != 'salta') {
			lugar = prompt("Error Ingrese Lugar bariloche , cataratas , salta ");
		}

		temporada = prompt("Ingrese temporada otoño/invierno/verano/primavera ");
		while (temporada != 'otoño' && temporada != 'invierno' && temporada != 'verano' && temporada != 'primavera') {
			temporada = prompt("Error Ingrese temporada otoño/invierno/verano/primavera ");
		}

		cantidad = parseInt(prompt("Ingrese Cantidad"));
		while (cantidad < 1 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Error Ingrese Cantidad"));
		}

		switch(lugar) {
			case 'bariloche':
				contadorBariloche++;
				break;
			case 'cataratas':
				contadorCataratas++;
				break;
			case 'salta':
				contadorSalta++;
				break;
		}

		if (flag == 0 || cantidad > mayorPasajeros){
			mayorPasajeros = cantidad;
			sexoTitularMasPasajero = sexo;
			flag = 1;
		}

		if (temporada == 'invierno') {
			acumCantidadInvierno += cantidad;
			contadorInvierno++;
		}

	seguir = prompt("Desea Agregar otro? : ")
	} while (seguir == 's');


	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		lugarPreferido = "bariloche";
	}

	else if (contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta) {
		lugarPreferido = "cataratas";
	}
	else {
		lugarPreferido = "salta";
	}

	if (contadorInvierno != 0) {
		promedio = acumCantidadInvierno / contadorInvierno;
	}


	console.log("el lugar mas elegido es : " + lugarPreferido)
	console.log("El sexo del titular con mas pasajeros es : " + sexoTitularMasPasajero + " y lleva " + mayorPasajeros);
	console.log("el promedio de personas por viajes en inviernos es " + promedio);

}

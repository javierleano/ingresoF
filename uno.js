/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let acumMujeres = 0;
	let contadorMujeres = 0;
	let pesoMax;
	let contador = 0;
	let hombreMasPesado = 0;
	let promedio;
	let acumEdad = 0;
	let contadorEdad = 0;


	for (let i = 0; i < 5; i++){
	nombre = prompt("Ingrese Nombre");
	

	peso = parseInt(prompt("Ingrese Peso valido"));
	
	sexo = prompt("Ingrese Sexo (f o m)");
	while(sexo != 'f' && sexo != 'm'){
	sexo = prompt("Error Ingrese Sexo (f o m)");
	}
	
	edad = prompt("Ingrese edad");
     if (edad > 0){ 
	 }
	
	switch(sexo){
		case 'f' :
		contadorMujeres++;
		if (edad > 0){
			acumEdad++;
		}
		break;
		case 'm' : 
		pesoMax = peso;
		if (edad > 0){
			acumEdad++;
		}
		break;
	}	
	}
   
	   promedio = acumEdad / 5;

	console.log("la cantidad de mujeres son : " + contadorMujeres);
	console.log("la edad promedio es " + promedio);
	console.log("el hombre mas pesado " + pesoMax);


	
}

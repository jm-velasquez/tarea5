//1. Mostrar en consola la secuencia de Fibonacci:
//a. Entre los números 0 y 1000.
console.log("TAREA Nº5");
console.log("========================================================");
console.log("a. Mostrar en consola la secuencia de fibonacci entre los números 0 y 1000.");
/*
    0, 1, 1, 2, 3, 5, 8, 13...
    fn = f(n - 1) + f(n - 2)
    cuando n >= 2
*/

function generarFibonacci(n) {
	let fn = [0, 1];
	if (n <= 1) {
		return fn;
	}
	for (let i = 2; i <= n; i++) {
		fn[i] = fn[i - 1] + fn[i - 2];

	}
	return fn;
}
function consoleLog(array) {
	for(let i = 0; i < array.length; i++) {
		console.log("Secuencia de Fibonacci > ",array[i]);
	}
}
let arrayFibonacci = generarFibonacci(16);
consoleLog(arrayFibonacci);

//b. Números pares entre 0 y 1000.
console.log("========================================================");
console.log("b. Números pares entre 0 y 1000.");

function consoleLogPar(array) {
	for(let i = 0; i < array.length; i++) {
		if (array[i]%2==0)
		console.log("Secuencia de Fibonacci > ",array[i]);
	}
}
consoleLogPar(arrayFibonacci);

//c. Números impares entre 0 y 1000.
console.log("========================================================");
console.log("c. Números impares entre 0 y 1000.");

function consoleLogImpar(array) {
	for(let i = 0; i < array.length; i++) {
		if (array[i]%2!=0)
		console.log("Secuencia de Fibonacci > ",array[i]);
	}
}
consoleLogImpar(arrayFibonacci);

//2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
console.log("========================================================");
console.log("2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.");


let pokemones =['Pikachu','Charmander','Bulbasaur','Squirtle']

for (const poke of pokemones) {
	console.log(poke);
  }
console.log("=====================CONVERSION==========================");
Array.prototype.toUpperCase = function() {
	return this.map(word => word.toUpperCase())
  };
  const pokemones2 = ['Pikachu','Charmander','Bulbasaur','Squirtle'].toUpperCase(); 
  
  for (const poke of pokemones2) {
	console.log(poke);
  }
console.log("========================================================");

//3. Del siguiente arreglo de objetos,cl retornar otro arreglo con los pokemones tipo fuego.
let pokemones3 = [
	{
		nombre: 'Pikachu',
		tipo: 'Electrico'
	},
	{
		nombre: 'Charmander',
		tipo: 'Fuego',
	},
	{
		nombre: 'Bulbasaur',
		tipo: 'Planta'
	},
	{
		nombre: 'Squirtle',
		tipo: 'Agua'
	},
	{
		nombre: 'Charmeleon',
		tipo: 'Fuego'
	},
	{
		nombre: 'Weedle',
		tipo: 'bicho'
	},
	{
		nombre: 'Charizard',
		tipo: 'Fuego'
	}
]
console.log("3. Del siguiente arreglo de objetos,cl retornar otro arreglo con los pokemones tipo fuego.");


for (const poke of pokemones3) {
	console.log(poke);
  }
  console.log("========================================================");

  let tipoFuego = pokemones3.filter(personaje => personaje.tipo == 'Fuego')


    console.log(tipoFuego);
  console.log("========================================================");
//1. Mostrar en consola la secuencia de Fibonacci:
//a. Entre los números 0 y 1000.
console.log("TAREA Nº5");
console.log("========================================================");
console.log("a. Mostrar en consola la secuencia de fibonacci entre los números 0 y 1000.");

const fibonacci = (fibo) => {
        for(i=2; i <= 1000; i++){
		    fibo.push(fibo[i-1] + fibo[i-2]);
		    document.write(fibo[i]+"<br/>");	
	    }
        
           
        }
const n1 = 0
const n2 = 1
fibonacci(n)
//b. Números pares entre 0 y 1000.
//c. Números impares entre 0 y 1000.
//2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
//3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.

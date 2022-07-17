/*Programa para practicar las tablas.
//Funcionamiento al usuario se le pide ingresar un numero el cual representa la tabla que quiere practicar.
//Luego el programa mostrara cada unos de las operaciones y el usuario debe ir completando cada resultado.
//Puede cancelar la ejecucion del programa teclando la palabra EXIT.
*/
let numTabla = parseInt(prompt("Ingrece el numero de tabla a practicar"));

let count = 1;
const limit = 11;
while (count < limit) {
  let result = prompt(
    "Ingrese el resultado de la multiplicacion:" +
      numTabla +
      "X" +
      count +
      "\n(Para cancelar ingrese EXIT)"
  );
  if (result.toLocaleUpperCase() == "EXIT") {
    break;
  } else {
    let resultSuccess = numTabla * count;
    if (parseInt(result) === resultSuccess) {
      alert("Correcto ");
      count++;
    } else {
      alert("Resultado incorrecto");
    }
  }
}

alert("Programa Terminado \n Realizado por: Franco Marcuzzi");

const readline = require("readline");
const q1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

q1.question("Ingrese número de legionarios: ", (legionarios) => {
  let formaciones = [];
  let numLegionarios = legionarios;
  let contador = 0;
  let detenerRecursion = false;
  let cuadrados = [];
  hallandoFormaciones();

  function hallandoFormaciones() {
    if (numLegionarios > 1) {
      for (let i = 1; i <= numLegionarios; i++) {
        if (i * i > numLegionarios) {
          formaciones.push({
            legionarios: (i - 1) * (i - 1),
            formacion: i - 1,
          });
          break;
        }
      }
    } else if (numLegionarios === 1) {
      formaciones.push({
        legionarios: 1,
        formacion: 1,
      });
      detenerRecursion = true;
    } else if (numLegionarios < 1) {
      formaciones.push({
        legionarios: 0,
        formacion: 0,
      });
      detenerRecursion = true;
    }

    numLegionarios = numLegionarios - formaciones[contador].legionarios;
    contador++;
    if (!detenerRecursion) {
      hallandoFormaciones();
    }
  }

  generarFormaciones();
  function generarFormaciones() {
    formaciones.forEach((elm, index) => {
      cuadrados.push(new Array(elm.formacion));
      for (let i = 0; i < elm.formacion; i++) {
        cuadrados[index][i] = new Array(elm.formacion);
      }
    });
  }

  for (let i = 0; i < cuadrados.length; i++) {
    for (let j = 0; j < cuadrados[i].length; j++) {
      for (let y = 0; y < cuadrados[i][j].length; y++) {
        cuadrados[i][j][y] = "*";
      }
    }
  }
  console.log(formaciones)
  q1.close();

});

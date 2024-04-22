import displayMainMenu from "./menus/displayMainMenu.js";
let programRepeat = 0;

do {
  displayMainMenu();
  while (isNaN(programRepeat) || programRepeat == 0 || null || programRepeat > 2) {
    programRepeat = Number(
      prompt(
        `Termino su programa o ha colocado digito no valido,\n Desea continuar en el programa?\n
      (1) Continuar en el programa.
      (2) Salir del programa.`
      )
    );
  }

  if (programRepeat === 2) {
    alert("Programa terminado");
  }
  programRepeat === 1 ? (programRepeat = true) : (programRepeat = false);
} while (programRepeat === true);

function continueProgram(valor) {
  programRepeat = valor;
}

export { continueProgram };

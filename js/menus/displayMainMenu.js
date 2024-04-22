import { continueProgram } from "../main.js";
import customerMenu from "../menus/customerMenu.js";
import scheduleMenu from "../menus/scheduleMenu.js";
import mettingMenu from "../menus/mettingMenu.js";

export default function displayMainMenu() {
  let mainResponse = 0;
  mainResponse = Number(
    prompt(`AGENDA DE CITA
  (1) CLIENTES
  (2) HORARIOS DISPONIBLES
  (3) REUNIONES`)
  );

  switch (mainResponse) {
    case 1:
      customerMenu();
      break;
    case 2:
      scheduleMenu();
      break;
    case 3:
      mettingMenu();
      break;
    default:
      continueProgram(false);
      break;
  }
}

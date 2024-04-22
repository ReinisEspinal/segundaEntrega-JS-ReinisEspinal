import { continueProgram } from "../main.js";
import Metting from "../class/Metting.js";

const metting = new Metting();
const showPropertiesAdd = {
  "ID Horario": "idSchedule",
  Cedula: "idCustomer",
  Descripcion: "description",
  Fecha: "dateCreated",
};

export default function mettingMenu() {
  try {
    /*TODO: (6) Mostrar el dia con mayor cita de clientes.`*/
    let mettingOption = Number(
      prompt(`AGENDAR UNA REUNION\n
    (1) Agendar una reunion.
    (2) Filtrar reuniones disponibles por cedula.
    (3) Filtrar reuniones disponibles por dias.
    (4) Cancelar una reunion.
    (5) Mostrar todas las reuniones.`)
    );

    switch (mettingOption) {
      case 1:
        addMetting();
        break;
      case 2:
        alert(filterMettingByIdCustomer().value);
        break;
      case 3:
        filterMettingByDay();
        break;
      case 4:
        cancelMetting();
        break;
      case 5:
        showMetting();
        break;
      default:
        continueProgram(false);
        break;
    }
  } catch (error) {
    console.log(error);
  }
  continueProgram(0);
}

function addMetting() {
  let res = true;
  while (res) {
    let value = "";

    for (const propertyName in showPropertiesAdd) {
      const realProperty = showPropertiesAdd[propertyName];
      value = prompt("Digite el valor de " + propertyName);
      metting[realProperty] = value;
    }
    res = false;
  }
  const addNewMetting = new Metting(
    metting.idSchedule,
    metting.idCustomer,
    metting.status,
    metting.description,
    metting.dateCreated
  );

  const result = Metting.addMetting(addNewMetting);

  alert(result.value);
}

function showMetting() {
  let description = "";
  Metting.viewMettingSchedule()
    .value.sort((a, b) => a.status - b.status)
    .forEach((objMetting) => {
      description += ` ${objMetting.idMetting}:\n${objMetting.idCustomer}-${objMetting.status}-${objMetting.date}-${objMetting.location}\n`;
    });

  alert(description);
}

function filterMettingByIdCustomer() {
  let description = "";
  let result = { status: false, value: null };

  let idCustomer = prompt("Cedula:");

  const mettings = Metting.filterViewMettingByIdCustomer(idCustomer);

  if (mettings.status === true) {
    mettings.value.forEach((objMet) => {
      description += `${objMet.idCustomer} ${objMet.status} ${objMet.date} ${objMet.location}\n`;
    });
    result = {
      status: true,
      value: description,
    };
  } else {
    result = { status: false, value: "No hay reuniones para este cliente" };
  }
  return result;
}

function filterMettingByDay() {
  let result = { status: false, value: null };

  const lstDay = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  let day = Number(
    prompt(`Selecciona el dia\n
    (1) Lunes
    (2) Martes
    (3) Miercoles
    (4) Jueves
    (5) Viernes
    (6) Sabado
    (7) Domingo`)
  );

  if (!isNaN(day)) {
    switch (day) {
      case 1:
        result.value = Metting.filterViewMettingByDay(lstDay[0]).value;
        result.status = Metting.filterViewMettingByDay(lstDay[0]).status;
        break;
      case 2:
        result.value = Metting.filterViewMettingByDay(lstDay[1]).value;
        result.status = Metting.filterViewMettingByDay(lstDay[1]).status;
        break;
      case 3:
        result.value = Metting.filterViewMettingByDay(lstDay[2]).value;
        result.status = Metting.filterViewMettingByDay(lstDay[2]).status;
        break;
      case 4:
        result.value = Metting.filterViewMettingByDay(lstDay[3]).value;
        result.status = Metting.filterViewMettingByDay(lstDay[3]).status;
        break;
      case 5:
        result.value = Metting.filterViewMettingByDay(lstDay[4]).value;
        result.status = Metting.filterViewMettingByDay(lstDay[4]).status;
        break;
      case 6:
        result.value = Metting.filterViewMettingByDay(lstDay[5]).value;
        result.status = Metting.filterViewMettingByDay(lstDay[5]).status;
        break;
      case 7:
        result.value = Metting.filterViewMettingByDay(lstDay[6]).value;
        result.status = Metting.filterViewMettingByDay(lstDay[6]).status;
        break;
      default:
        continueProgram(0);
        break;
    }
    if (result.status === true) {
      result.status = true;

      alert(
        "Reuniones filtradas por dia\n\n" +
          result.value
            .map((objMet) => {
              return `${objMet.idMetting} ${objMet.idCustomer} ${objMet.status} ${objMet.date} ${objMet.location}`;
            })
            .join("\n")
      );
    } else if (result.status !== true) {
      alert("No hay reuniones para ese dia");
    }
  } else {
    result = { status: false, value: null };
    alert("Seleccione de manera correcta");
  }
}
function cancelMetting() {
  let idMetting = prompt("Digite el id de la reunion a cancelar:");
  Metting.cancelMetting(idMetting);
}

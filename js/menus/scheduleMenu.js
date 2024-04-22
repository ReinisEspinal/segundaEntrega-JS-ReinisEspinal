import { continueProgram } from "../main.js";
import  Schedule from "../class/Schedule.js"


export default function scheduleMenu() {
  let scheduleOptions = Number(
    prompt(`HORARIO DISPONIBLES PARA REUNIONES\n
  (1) Ver horario por dia
  (2) Mostrar todos los horarios`)
  );

  switch (scheduleOptions) {
    case 1:
      showScheduleByDay();
      break;
    case 2:
      alert("Horario disponibles\n\n" + showSchedule());
      break;
    default:
      continueProgram(1);
      break;
  }
  continueProgram(0);
}
function showScheduleByDay() {
  let schedule;
  let result;
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

  switch (day) {
    case 1:
      schedule = Schedule.showScheduleByDay(lstDay[0]).value;
      result = schedule;
      break;
    case 2:
      schedule = Schedule.showScheduleByDay(lstDay[1]).value;
      result = schedule;
      break;
    case 3:
      schedule = Schedule.showScheduleByDay(lstDay[2]).value;
      result = schedule;
      break;
    case 4:
      schedule = Schedule.showScheduleByDay(lstDay[3]).value;
      result = schedule;
      break;
    case 5:
      schedule = Schedule.showScheduleByDay(lstDay[4]).value;
      result = schedule;
      break;
    case 6:
      schedule = Schedule.showScheduleByDay(lstDay[5]).value;
      result = schedule;
      break;
    case 7:
      schedule = Schedule.showScheduleByDay(lstDay[6]).value;
      result = schedule;
      break;
    default:
      continueProgram(1);
      break;
  }
if(result !== undefined){
  alert(result);
}
else{
  alert("Debe digitar un dia valido.")
}
  continueProgram(1);
}
function showSchedule() {
  continueProgram(1);
  return Schedule.showSchedule();
}
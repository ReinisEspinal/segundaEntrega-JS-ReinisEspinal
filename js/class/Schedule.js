import DBContext from "../db/DBContext.js";

const dbContext = new DBContext();

export default class Schedule {
  constructor(idSchedule, day, startTime, endTime, status, location) {
    this.idSchedule = idSchedule;
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.status = status;
    this.location = location;
  }

  static showScheduleByDay(day) {
    let result = { status: false, value: "" };
    let description = "";
    const schedule = Schedule.getAllSchedule()
      .map((obj) => {
        return new Schedule(
          obj.idSchedule,
          obj.day,
          obj.startTime,
          obj.endTime,
          "",
          obj.location
        );
      })
      .filter((obj) => {
        return String(obj.day).toLowerCase() === day.toLowerCase();
      })
      .forEach((obj) => {
        description += `ID HORARIO: ${obj.idSchedule}\nEl ${obj.day} de ${obj.startTime}-${obj.endTime}, ${obj.location}.\n\n`;
        result = { status: true, value: description };
      });
    return result;
  }

  static showSchedule() {
    let descriptionSchedule = "";
    let result;
    const schedule = Schedule.getAllSchedule()
      .map((obj) => {
        return new Schedule(
          obj.idSchedule,
          obj.day,
          obj.startTime,
          obj.endTime,
          obj.status,
          obj.location
        );
      })
      .filter((obj) => {
        return obj.status === "ACTIVE";
      })
      .forEach((obj) => {
        descriptionSchedule += `ID HORARIO: ${obj.idSchedule}\nEl ${obj.day} de ${obj.startTime}-${obj.endTime}, ${obj.location}.\n\n`;
      });

    descriptionSchedule !== null || descriptionSchedule !== undefined
      ? (result = descriptionSchedule)
      : (result = "No hay horarios disponibles");
    return result;
  }
  static getAllSchedule() {
    return dbContext._lstSchedule;
  }

  static existsSchedule(id) {
    try {
      
      let result = { status: false, value: null };

      const exists = dbContext._lstSchedule.some(
        (obj) => obj.idSchedule === id
      );
      exists
        ? (result = { status: true, value: "El horario existe" })
        : (result = { status: false, value: "El horario no existe" });

      return result;
    } catch (error) {}
  }
}
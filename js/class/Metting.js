import DBContext from "../db/DBContext.js";
import Schedule from "../class/Schedule.js";

const dbContext = new DBContext();

export default class Metting {
  constructor(idSchedule, idPerson, description, dateCreated) {
    const mettindIdResult = this.generateUniqueId("METTING");

    if (mettindIdResult.status === true) {
      this.idMetting = mettindIdResult.value;
    } else {
      throw new Error("Error al generar el ID de la reunion");
    }

    this.idSchedule = idSchedule;
    this.idCustomer = idPerson;
    this.status = "ACTIVE";
    this.description = description;
    this.dateCreated = dateCreated;
  }

  static addMetting(metting) {
    try {
      let result = { status: false, description: null };
      const existsCustomer = Customer.existsPersonByID(metting.idCustomer);
      let existsSchedule = Schedule.existsSchedule(metting.idSchedule);
      let existsMetting = Metting.existsMetting(
        metting.idSchedule,
        metting.idCustomer
      );

      if (existsMetting.status === false) {
        if (existsCustomer === true && existsSchedule.status === true) {
          dbContext._lstMettings.push(metting);
          result = {
            status: true,
            value: `Reunion agendada de manera exitosa.`,
          };
        } else {
          result = {
            status: false,
            value: "Valide la cedula y el horario seleccionado",
          };
        }
      } else {
        result = {
          status: false,
          value: "No se pudo agendar una reunion, ya hay una cita pautada",
        };
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static getAllMetting() {
    return dbContext._lstMettings;
  }

  static existsMetting(idSchedule = 0, idcustomer) {
    let result = { status: false, value: null };

    try {
      const exists = dbContext._lstMettings.some(
        (obj) => obj.idSchedule === idSchedule && obj.idCustomer === idcustomer
      );

      exists
        ? (result = { status: true, value: "La reunion existe" })
        : { status: false, value: "La reunion no existe" };

      return result;
    } catch (error) {
      result = { status: false, value: error };
      return result;
    }
  }

  static filterViewMettingByIdCustomer(idCustomer) {
    let result = { status: false, value: null };

    try {
      const lstMetting = Metting.viewMettingSchedule().value.filter(
        (element) => {
          return element.idCustomer === idCustomer;
        }
      );
      if (lstMetting.length >= 1) {
        result = { status: true, value: lstMetting };
      } else {
        result = { status: false, value: null };
      }
      return result;
    } catch (error) {}
  }
  static filterViewMettingByDay(day) {
    let result = { status: false, value: {} };
    try {
      const mettings = Metting.viewMettingSchedule().value.filter(
        (objMetting) => {
          return (
            objMetting.status === "ACTIVE" &&
            objMetting.date.split("/")[0] === day
          );
        }
      );

      if (mettings.length > 0) {
        result = { status: true, value: mettings };
      }
      return result;
    } catch (error) {
      result = { status: false, value: error };
      return result;
    }
  }
  static viewMettingSchedule() {
    let result = { status: false, value: null };

    try {
      const mettings = Metting.getAllMetting().map((objMetting) => {
        const matchingSchedule = Schedule.getAllSchedule().find(
          (objSchedule) => objSchedule.idSchedule === objMetting.idSchedule
        );
        if (matchingSchedule) {
          return {
            idMetting: objMetting.idMetting,
            idCustomer: objMetting.idCustomer,
            status: objMetting.status,
            date: `${matchingSchedule.day}/${matchingSchedule.startTime}am-${matchingSchedule.endTime}am`,
            location: matchingSchedule.location,
          };
        }
      });
      if (mettings.length > 0) {
        result = { status: false, value: mettings };
      }
      return result;
    } catch (error) {
      result = { status: false, value: error };
      return result;
    }
  }

  static cancelMetting(mettingId) {
    let result = { status: false, value: null };

    try {
      const metting = dbContext._lstMettings.find(
        (e) => e.idMetting === mettingId
      );
      if (metting !== undefined) {
        result.status = true;
        metting.status = "INACTIVE";

        alert("Metting cancelada");
      } else {
        result.value = "La reunion no existe";
        alert(result.value);
        result.status = false;
      }

      return result;
    } catch (error) {
      result.value = error;
      return result;
    }
  }
  generateUniqueId(stringId) {
    try {
      let result = { status: false, value: null };
      let id = stringId + "-";

      const lastMettingsIdIndex = dbContext._lstMettings.length - 1;

      let lastElmentNumber = String(
        dbContext._lstMettings[lastMettingsIdIndex].idMetting
      ).split("-")[1];

      id += `${Number(lastElmentNumber) + 1}`;
      result = { status: true, value: id };

      return result;
    } catch (error) {
      result = { status: false, value: error };
    }
  }
}

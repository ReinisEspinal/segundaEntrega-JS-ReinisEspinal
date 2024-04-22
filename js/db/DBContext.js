export default class DBContext {
  constructor() {
    this._lstPeople = [
      {
        idPerson: "40224211413",
        idCustomer: "CUSTOMER-1",
        idType: "cedula",
        firstName: "Reinis",
        lastName: "Espinal",
        age: 28,
        gender: "M",
        email: "reinisespinal@hotmail.com",
      },
      {
        idPerson: "00119446300",
        idCustomer: "CUSTOMER-2",
        idType: "cedula",
        firstName: "Stefany Del Carmen",
        lastName: "Muñoz Duran",
        age: 27,
        gender: "F",
        email: "stefanymd29@hotmail.com",
      },
      {
        idPerson: "5544",
        idCustomer: "",
        idType: "cedula",
        firstName: "Test",
        lastName: "Muñoz Duran",
        age: 27,
        gender: "F",
        email: "stefanymd29@hotmail.com",
      },
    ];
    this._lstSchedule = [
      //# **Lunes**

      {
        idSchedule: "LUN-0800-0900",
        day: "Lunes",
        startTime: "08:00",
        endTime: "09:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "LUN-0900-1000",
        day: "Lunes",
        startTime: "09:00",
        endTime: "10:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "LUN-1000-1100",
        day: "Lunes",
        startTime: "10:00",
        endTime: "11:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "LUN-1100-1200",
        day: "Lunes",
        startTime: "11:00",
        endTime: "12:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "LUN-1300-1400",
        day: "Lunes",
        startTime: "13:00",
        endTime: "14:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "LUN-1400-1500",
        day: "Lunes",
        startTime: "14:00",
        endTime: "15:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "LUN-1500-1600",
        day: "Lunes",
        startTime: "15:00",
        endTime: "16:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "LUN-1600-1700",
        day: "Lunes",
        startTime: "16:00",
        endTime: "17:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "LUN-1700-1800",
        day: "Lunes",
        startTime: "17:00",
        endTime: "18:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },

      // **Martes**

      {
        idSchedule: "MAR-0800-0900",
        day: "Martes",
        startTime: "08:00",
        endTime: "09:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "MAR-0900-1000",
        day: "Martes",
        startTime: "09:00",
        endTime: "10:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "MAR-1000-1100",
        day: "Martes",
        startTime: "10:00",
        endTime: "11:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "MAR-1100-1200",
        day: "Martes",
        startTime: "11:00",
        endTime: "12:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "MAR-1300-1400",
        day: "Martes",
        startTime: "13:00",
        endTime: "14:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "MAR-1400-1500",
        day: "Martes",
        startTime: "14:00",
        endTime: "15:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "MAR-1500-1600",
        day: "Martes",
        startTime: "15:00",
        endTime: "16:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "MAR-1600-1700",
        day: "Martes",
        startTime: "16:00",
        endTime: "17:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "MAR-1700-1800",
        day: "Martes",
        startTime: "17:00",
        endTime: "18:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },

      //Jueves
      {
        idSchedule: "JUE-0800-0900",
        day: "Jueves",
        startTime: "08:00",
        endTime: "09:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "JUE-0900-1000",
        day: "Jueves",
        startTime: "09:00",
        endTime: "10:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "JUE-1000-1100",
        day: "Jueves",
        startTime: "10:00",
        endTime: "11:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "JUE-1100-1200",
        day: "Jueves",
        startTime: "11:00",
        endTime: "12:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "JUE-1300-1400",
        day: "Jueves",
        startTime: "13:00",
        endTime: "14:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "JUE-1400-1500",
        day: "Jueves",
        startTime: "14:00",
        endTime: "15:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "JUE-1500-1600",
        day: "Jueves",
        startTime: "15:00",
        endTime: "16:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "JUE-1600-1700",
        day: "Jueves",
        startTime: "16:00",
        endTime: "17:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "JUE-1700-1800",
        day: "Jueves",
        startTime: "17:00",
        endTime: "18:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },

      //Viernes
      {
        idSchedule: "VIE-0800-0900",
        day: "Viernes",
        startTime: "08:00",
        endTime: "09:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "VIE-0900-1000",
        day: "Viernes",
        startTime: "09:00",
        endTime: "10:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "VIE-1000-1100",
        day: "Viernes",
        startTime: "10:00",
        endTime: "11:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "VIE-1100-1200",
        day: "Viernes",
        startTime: "11:00",
        endTime: "12:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "VIE-1300-1400",
        day: "Viernes",
        startTime: "13:00",
        endTime: "14:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "VIE-1400-1500",
        day: "Viernes",
        startTime: "14:00",
        endTime: "15:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "VIE-1500-1600",
        day: "Viernes",
        startTime: "15:00",
        endTime: "16:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "VIE-1600-1700",
        day: "Viernes",
        startTime: "16:00",
        endTime: "17:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "VIE-1700-1800",
        day: "Viernes",
        startTime: "17:00",
        endTime: "18:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },

      //SABADOS

      {
        idSchedule: "SAB-0800-0900",
        day: "Sabado",
        startTime: "08:00",
        endTime: "09:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "SAB-0900-1000",
        day: "Sabado",
        startTime: "09:00",
        endTime: "10:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "SAB-1000-1100",
        day: "Sabado",
        startTime: "10:00",
        endTime: "11:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "SAB-1100-1200",
        day: "Sabado",
        startTime: "11:00",
        endTime: "12:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "SAB-1300-1400",
        day: "Sabado",
        startTime: "13:00",
        endTime: "14:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "SAB-1400-1500",
        day: "Sabado",
        startTime: "14:00",
        endTime: "15:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "SAB-1500-1600",
        day: "Sabado",
        startTime: "15:00",
        endTime: "16:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "SAB-1600-1700",
        day: "Sabado",
        startTime: "16:00",
        endTime: "17:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "SAB-1700-1800",
        day: "Sabado",
        startTime: "17:00",
        endTime: "18:00",
        status: "ACTIVE",
        location: "SURCUSAL",
      },

      //DOMINGO
      {
        idSchedule: "DOM-0800-0900",
        day: "Domingo",
        startTime: "08:00",
        endTime: "09:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "DOM-0900-1000",
        day: "Domingo",
        startTime: "09:00",
        endTime: "10:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "DOM-1000-1100",
        day: "Domingo",
        startTime: "10:00",
        endTime: "11:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "DOM-1100-1200",
        day: "Domingo",
        startTime: "11:00",
        endTime: "12:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "DOM-1300-1400",
        day: "Domingo",
        startTime: "13:00",
        endTime: "14:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "DOM-1400-1500",
        day: "Domingo",
        startTime: "14:00",
        endTime: "15:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "DOM-1500-1600",
        day: "Domingo",
        startTime: "15:00",
        endTime: "16:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "DOM-1600-1700",
        day: "Domingo",
        startTime: "16:00",
        endTime: "17:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
      {
        idSchedule: "DOM-1700-1800",
        day: "Domingo",
        startTime: "17:00",
        endTime: "18:00",
        status: "INACTIVE",
        location: "SURCUSAL",
      },
    ];
    this._lstMettings = [
      {
        idMetting: "METTING-1",
        idSchedule: "LUN-0800-0900",
        idCustomer: "40224211413",
        status: "ACTIVE",
        description: "METTING IS CONFIRM IT, IT'S-ACTIVE",
        dateCreated: "20/4/2024",
      },
      {
        idMetting: "METTING-2",
        idSchedule: "LUN-0900-1000",
        idCustomer: "40224211413",
        status: "ACTIVE",
        description: "METTING IS CONFIRM IT, IT'S-ACTIVE",
        dateCreated: "20/4/2024",
      },
      {
        idMetting: "METTING-3",
        idSchedule: "LUN-0900-1000",
        idCustomer: "00119446300",
        status: "ACTIVE",
        description: "METTING IS CONFIRM IT, IT'S-ACTIVE",
        dateCreated: "20/4/2024",
      },
    ];
  }
}
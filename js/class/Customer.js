import DBContext from "../db/DBContext.js";
import Person from "./Person.js";
//LLAMANDO A DB
const dbContext = new DBContext();


export default class Customer extends Person {
  get PersonExists() {
    try {
      let result = false;
      result = Customer.existsPersonByID(this.idPerson);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  get FullName() {
    return this.firstName + " " + this.lastName;
  }
  constructor(
    idPerson = "",
    idType = "",
    firstName = "",
    lastName = "",
    age = 0,
    gender = "",
    email = "",
    cell = ""
  ) {
    super(idPerson, idType, firstName, lastName, age, gender, email, cell);

    this.idCustomer = this.generateUniqueId();
  }

  generateUniqueId() {
    // Obtener el último customerId en el esquema "CUSTOMER-X" del listado _lstPeople
    let lastCustomerIdNumber = 0;
    dbContext._lstPeople.forEach((person) => {
      const match = person.idCustomer.match(/^CUSTOMER-(\d+)$/);
      if (match) {
        const customerIdNumber = parseInt(match[1]);
        if (customerIdNumber > lastCustomerIdNumber) {
          lastCustomerIdNumber = customerIdNumber;
        }
      }
    });

    // Incrementar el último customerIdNumber
    lastCustomerIdNumber++;

    // Construir el nuevo customerId
    const newCustomerId = `CUSTOMER-${lastCustomerIdNumber}`;

    return newCustomerId;
  }

  static addPerson(personObjt) {
    try {
      let result = false;
      if (Customer.existsPersonByID(personObjt.idPerson) == false) {
        dbContext._lstPeople.push(personObjt);
        result = true;
      } else {
        result = false;
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  /*TODO CAMBIAR LA MANERA EN COMO RETORNA EL METODO,
  RETORNAR UN OBJETO RESULT CON LAS
  PROPIEDADES STATUS Y VALUE
  */
  static existsPersonByID(id) {
    let exists = false;
    exists = Customer.getAllPeople().some((element) => {
      return element.idPerson === id;
    });
    exists === true ? (exists = true) : (exists = false);

    return exists;
  }

  static searchPersonByID(id) {
    let exists = this.existsPersonByID(id);

    if (exists) {
      exists = Customer.getAllPeople().find((element) => {
        element.idPerson === id &&
          element.idCustomer != null &&
          element.idCustomer != "";
      });
    }
    return exists;
  }

  static showPerson(idPerson) {
    let exists = Customer.existsPersonByID(idPerson);
    let description = "";
    let result = "";

    if (exists === true) {
      Customer.getAllPeople().forEach((element) => {
        if (element.idPerson === idPerson) {
          description += `${element.idCustomer} ${element.idPerson}, ${element.firstName}, ${element.lastName}\n`;
        }
      });
      result = { status: true, description: description };
    } else {
      result = { status: true, description: "El cliente no existe" };
    }
    return result;
  }

  static eliminarPersona(id) {
    let result = Customer.existsPersonByID(id);

    if (result) {
      result = { status: true, description: "Cliente eliminado" };

      dbContext._lstPeople.forEach((object, index) => {
        if (object.idPerson === id) {
          dbContext._lstPeople.splice(index, 1);
        }
      });

      return result;
    } else {
      result = { status: false, description: "El cliente no existe" };
    }
    return result;
  }

  static editPerson(personObj) {
    let result;
    const exists = Customer.existsPersonByID(personObj.idPerson);
    if (exists === true) {
      dbContext._lstPeople.forEach((obj) => {
        if (obj.idPerson === personObj.idPerson) {
          obj.firstName = personObj.firstName;
          obj.idType = personObj.idType;
          obj.lastName = personObj.lastName;
          obj.age = personObj.age;
          obj.gender = personObj.gender;
          obj.email = personObj.email;
          obj.cell = personObj.cell;
          obj.typePerson = this.idPerson;
        }
      });
      result = {
        status: true,
        value: 'Cliente "' + personObj.FullName + '" editado.',
      };
    } else {
      result = { status: false, value: "El cliente no existe" };
    }
    return result;
  }

  static getAllPeople() {
    return dbContext._lstPeople.filter(
      (obj) => obj.idCustomer !== null && obj.idCustomer !== ""
    );
  }
}

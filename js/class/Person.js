export default class Person {
  get FullName() {
    return this.fullName;
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
    this.idPerson = idPerson;
    this.idType = idType;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.cell = cell;
    if (this.constructor === Person)
      throw new Error("No puedes crear una instancia de una clase abstracta");
  }
  editPerson(personID) {
    throw new error("Metodo abstracto");
  }
  addPerson(personObjt) {
    throw new error("Metodo abstracto");
  }
  searchPersonByID(personID) {
    throw new error("Metodo abstracto");
  }
  getAllPeople() {
    throw new error("No se puede usar un metodo de una clase abstracta");
  }

  showPerson(personObjt) {
    throw new error("No se puede usar un metodo de una clase abstracta");
  }
  eliminarPersona(personaID) {
    throw new error("No se puede usar un metodo de una clase abstracta");
  }
}

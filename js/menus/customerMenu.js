import Customer from "../class/Customer.js";
import { continueProgram } from "../main.js";
const customer = new Customer();
// Objeto que mapea los nombres de visualización a las propiedades reales
const showPropertiesAdd = {
  Cedula: "idPerson",
  "Primer Nombre": "firstName",
  Apellidos: "lastName",
};

export default function customerMenu() {
  let customerCrudOption = Number(
    prompt(
      "CRUD DE PERSONAS\n\n" +
        "(1)    Agregar cliente\n" +
        "(2)    Buscar cliente.\n" +
        "(3)    Eliminar cliente.\n" +
        "(4)    Editar cliente.\n" +
        "(5)    Mostrar todas los clientes."
    )
  );
  switch (customerCrudOption) {
    case 1:
      addCustomer();
      break;
    case 2:
      showCustomer();
      break;
    case 3:
      deleteCustomer();
      break;
    case 4:
      editCustomer();
      break;
    case 5:
      getAllCustomer();
      break;
    default:
      continueProgram(0);
      break;
  }
}

//ADD NEW CUSTOMER
function addCustomer() {
  let res = true;
  while (res) {
    let value = "";

    for (const propertyName in showPropertiesAdd) {
      const realProperty = showPropertiesAdd[propertyName];
      value = prompt("Digite el valor de " + propertyName);
      customer[realProperty] = value;
    }
    res = false;
  }
  const addNewCustomer = new Customer(
    customer.idPerson,
    customer.idType,
    customer.firstName,
    customer.lastName,
    customer.age,
    customer.gender,
    customer.email,
    customer.cell
  );

  const result = Customer.addPerson(addNewCustomer);

  if (result === true) {
    alert(customer.firstName + ", ha sido agregada exitosamente!!");
  } else if (customer.PersonExists == true) {
    alert("No ha sido agregado, el cliente existe");
  } else {
    alert("Intente de nuevo, revise los datos insertados");
  }
  continueProgram(0);
}

//SHOW JUST ONE CUSTOMER BY ID
function showCustomer() {
  let id = prompt("Cedula");
  let description = "";
  const result = Customer.showPerson(id);
  result.status === true
    ? (description = `${result.description}`)
    : (description = "No existe");
  alert(description);
  description = "";
  continueProgram(0);
}

//DELETE A CUSTOMER BY ID
function deleteCustomer() {
  let id = prompt("Cedula");
  const result = Customer.eliminarPersona(id);
  alert(result.description);
  continueProgram(0);
}

//EDIT A CUSTOMER
function editCustomer() {
  let result;
  let res = true;
  while (res) {
    let value = "";
    for (const propertyName in customer) {
      value = prompt("Digite el valor de " + propertyName);
      customer[propertyName] = value;
    }
    res = false;
  }
  const customerEdited = new Customer(
    customer.idPerson,
    customer.idType,
    customer.firstName,
    customer.lastName,
    customer.age,
    customer.gender,
    customer.email,
    customer.cell,
    customer.typePerson
  );

  let existsCustomer = customerEdited.PersonExists;

  if (existsCustomer === true) {
    result = Customer.editPerson(customerEdited);
  }

  alert(result.value);
  continueProgram(0);
}

//GET ALL CUSTOMER IN THE LIST
function getAllCustomer() {
  let description = "";
  Customer.getAllPeople().forEach((element) => {
    description += `${element.idCustomer} ${element.idPerson} ${element.firstName}\n`;
  });
  alert(description);
  continueProgram(0);
}

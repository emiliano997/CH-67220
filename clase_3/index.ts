// Características de TypeScript
// 1. Tipado estático
let nombre = "Juan"; // Tipo inferido
let apellido: string = "Perez"; // Tipo explícito
let edad: number = 30;

let peliculas: string[] = ["The Dark Knight", "Inception", "Interstellar"];
let series: Array<String> = ["The Office", "Friends", "Breaking Bad"];

// 2. Interfaces
import { Empleado } from "./src/interfaces/Empleado";
import { EmpleadoTech } from "./src/interfaces/EmpleadoTech";
import { Empresa } from "./src/models/Empresa";
import { Puesto } from "./src/utils/Puesto";

const empleados: Empleado[] = [
  { nombre: "Juan", edad: 30, salario: 1000 },
  { nombre: "Maria", edad: 25, salario: 1200, puesto: "Developer" },
  { nombre: "Carlos", edad: 35, salario: 1100 },
];

const bestEmployee: Empleado = empleados[0];
bestEmployee.bonus = 500;

const newEmployee: Empleado = {
  nombre: "Pedro",
  edad: 40,
  salario: 1500,
  puesto: "Developer",
};

console.log(newEmployee);

empleados.push(newEmployee);

const empresa = new Empresa<Empleado>("Google", "Mountain View");
// empresa.empleados = []; // ❌
empresa.addEmpleado(bestEmployee);
console.log(empresa.getEmpleados());

const silliconValley = new Empresa<EmpleadoTech>("Facebook", "Menlo Park");

const techEmployee: EmpleadoTech = {
  username: "markzuck",
  password: "123456",
  puesto: Puesto.CEO,
};

silliconValley.addEmpleado(techEmployee);
console.log(silliconValley.getEmpleados());

const argentinaTech = new Empresa<string>("MercadoLibre", "Buenos Aires");

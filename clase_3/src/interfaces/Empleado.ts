interface Empleado {
  nombre: string;
  edad: number;
  salario: number;
  puesto?: "Developer" | "ProjectManager" | "CEO";
  bonus?: number;
}

export { Empleado }; // ✅
// export default Empleado;

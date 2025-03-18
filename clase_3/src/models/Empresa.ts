export class Empresa<T> {
  private empleados: T[] = [];
  public nombre: string;
  public direccion: string;

  constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
    this.direccion = direccion;
  }

  getEmpleados() {
    return this.empleados;
  }

  addEmpleado(empleado: T) {
    this.empleados.push(empleado);
  }
}

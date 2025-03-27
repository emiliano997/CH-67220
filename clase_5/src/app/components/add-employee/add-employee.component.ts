import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../employeelist/interfaces/Employee';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  @Output()
  public sendEmployee: EventEmitter<Employee> = new EventEmitter();

  public employee: Employee = {
    id: 0,
    fullName: '',
    position: '',
    salary: 0,
    isActive: true,
  };

  addEmployee(): void {
    console.log(this.employee);

    this.sendEmployee.emit(this.employee);

    this.employee = {
      id: 0,
      fullName: '',
      position: '',
      salary: 0,
      isActive: true,
    };
  }
}

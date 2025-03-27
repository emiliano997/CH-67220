import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from './interfaces/Employee';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css',
})
export class EmployeelistComponent {
  @Input()
  public employees: Employee[] = [];

  @Output()
  public selectedEmployee: EventEmitter<number> = new EventEmitter();

  onDeleteEmployee(id: number): void {
    this.selectedEmployee.emit(id);
  }
}

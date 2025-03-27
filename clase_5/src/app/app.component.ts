import { Component, ElementRef, ViewChild } from '@angular/core';
import { Employee } from './components/employeelist/interfaces/Employee';
import { Nestedcomponent1Component } from './components/nestedcomponent1/nestedcomponent1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  // @ViewChild(Nestedcomponent1Component, { static: false })
  // public nestedComponent!: Nestedcomponent1Component;

  // @ViewChild('#description', { static: false }) public description!: ElementRef;

  // ngAfterViewInit() {
  //   console.log(this.nestedComponent);

  //   this.nestedComponent.title = 'New Title';
  // }

  public employeesDesign: Employee[] = [
    {
      id: 1,
      fullName: 'John Doe',
      position: 'Graphic Designer',
      salary: 1200,
      isActive: true,
    },
  ];

  public employees: Employee[] = [
    {
      id: 1,
      fullName: 'John Doe',
      position: 'Software Developer',
      salary: 1200,
      isActive: true,
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      position: 'Project Manager',
      salary: 1500,
      isActive: false,
    },
    {
      id: 3,
      fullName: 'Alice',
      position: 'Software Developer',
      salary: 1300,
      isActive: true,
    },
    {
      id: 4,
      fullName: 'Bob',
      position: 'Software Developer',
      salary: 1400,
      isActive: true,
    },
    {
      id: 5,
      fullName: 'Charlie',
      position: 'Software Developer',
      salary: 1200,
      isActive: false,
    },
  ];

  onAddEmployee(employee: Employee): void {
    employee.id = this.employees[this.employees.length - 1].id + 1;
    this.employees.push(employee);
  }

  onDeleteEmployee(id: number): void {
    this.employees = this.employees.filter((employee) => employee.id !== id);

    // const employeeIndex = this.employees.findIndex((employee) => employee.id === id);
    // this.employees.splice(employeeIndex, 1);
  }
}

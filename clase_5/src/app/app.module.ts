import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { Nestedcomponent1Component } from './components/nestedcomponent1/nestedcomponent1.component';
import { Nestedcomponent2Component } from './components/nestedcomponent2/nestedcomponent2.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    Nestedcomponent1Component,
    Nestedcomponent2Component,
    EmployeelistComponent,
    AddEmployeeComponent,
  ],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

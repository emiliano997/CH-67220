import { Component } from '@angular/core';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-template-driven',
  standalone: false,
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
})
export class TemplateDrivenComponent {
  public persona: Persona;

  constructor() {
    this.persona = new Persona();
  }

  save() {
    console.log(this.persona);
    this.persona = {
      nombre: '',
      apellido: '',
      edad: 0,
    };
  }
}

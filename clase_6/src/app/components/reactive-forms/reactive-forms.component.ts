import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noRiverAllowed } from '../../utils/custom-validator';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  public formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      message: [
        '',
        [Validators.minLength(10), Validators.required, noRiverAllowed],
      ],
    });
  }

  public submit() {
    console.log(this.formulario.value);
    console.log(this.formulario.controls['message'].errors);

    if (this.formulario.valid) {
      alert('Formulario enviado correctamente');
    }
  }

  get nameControl() {
    return this.formulario.get('name');
  }

  get isNameInvalid() {
    return this.nameControl?.touched && this.nameControl?.invalid;
  }

  get emailControl() {
    return this.formulario.get('email');
  }

  get isEmailInvalid() {
    return this.emailControl?.touched && this.emailControl?.invalid;
  }

  get messageControl() {
    return this.formulario.get('message');
  }

  get isMessageInvalid() {
    return this.messageControl?.touched && this.messageControl?.invalid;
  }
}

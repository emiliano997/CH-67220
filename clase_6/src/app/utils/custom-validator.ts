import { AbstractControl } from '@angular/forms';

export function noRiverAllowed(control: AbstractControl) {
  const value = control.value?.toLowerCase();

  if (value.includes('river')) {
    return { noRiverAllowed: true };
  }

  return null;
}

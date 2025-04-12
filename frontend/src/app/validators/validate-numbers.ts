import { AbstractControl, ValidationErrors } from '@angular/forms';

export function customNumericValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (value === null || value === '') return null;

  const regex = /^-?\d{0,6}(?:[.,]?\d*)?$/;
  if (!regex.test(value)) {
    return { invalidFormat: true };
  }

  const digitCount = value.replace(/[^0-9]/g, '').length;
  if (digitCount > 6) {
    return { maxDigits: true };
  }

  return null;
}

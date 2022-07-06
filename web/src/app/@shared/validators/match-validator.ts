import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

// Custom validator to validate that the value of some control matches the value of another control.
export function matchControlValidator(otherControl: FormControl): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = control.value === otherControl.value;
    return isValid ? null : {
      matchControl: {
        value: control.value
      }
    };
  };
}

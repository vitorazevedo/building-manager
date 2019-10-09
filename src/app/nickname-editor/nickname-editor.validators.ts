import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NicknameValidators {
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { // Simulate call to server
        if (control.value.toLowerCase() === 'pringle') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}

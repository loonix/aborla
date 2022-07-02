import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from '@app/@shared/form-group/form.component';
import { AuthService } from '@app/@shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent extends FormComponent implements OnInit {
  form: FormGroup;
  usernameFormControl: FormControl;
  passwordFormControl: FormControl;
  confirmPasswordFormControl: FormControl;
  nameFormControl: FormControl;
  emailFormControl: FormControl;
  addressFormControl: FormControl;
  postcodeFormControl: FormControl;
  countyFormControl: FormControl;
  phoneNumberFormControl: FormControl;

  validationMessages = {
    name: {
      required: 'required',
    },
  };

  constructor(public authService: AuthService, public router: Router) {
    super();
  }

  override ngOnInit(): void {
    this.generateForm();
    super.ngOnInit();
  }

  generateForm() {
    this.usernameFormControl = new FormControl(null, Validators.required);
    this.passwordFormControl = new FormControl(null, Validators.required);
    this.emailFormControl = new FormControl(null, Validators.required);
    this.nameFormControl = new FormControl(null, Validators.required);
    this.addressFormControl = new FormControl(null, Validators.required);
    this.postcodeFormControl = new FormControl(null, Validators.required);
    this.countyFormControl = new FormControl(null, Validators.required);
    this.phoneNumberFormControl = new FormControl(null, Validators.required);

    this.form = new FormGroup({
      username: this.usernameFormControl,
      password: this.passwordFormControl,
      email: this.emailFormControl,
      name: this.nameFormControl,
      address: this.addressFormControl,
      postcode: this.postcodeFormControl,
      county: this.countyFormControl,
      phoneNumber: this.phoneNumberFormControl
    });
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  loginWithGoogle() {
    this.authService.GoogleAuth();
  }

  register() {
    // this.authService.SignUp(userEmail.value, userPwd.value)
    if (this.validateForm()) {
      console.log('Valid form')
      return;
    }
    console.log('invalid form')
  }
}

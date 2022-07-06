import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from '@app/@shared/form-group/form.component';
import { AuthService } from '@app/@shared/services/auth.service';
import { errorMessages } from '@app/@shared/validators/error-messages';
import { matchControlValidator } from '@app/@shared/validators/match-validator';
import { emailAddressRegex } from '@app/@shared/validators/regex-email';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent extends FormComponent implements OnInit {
  form: FormGroup;
  accountTypeFormControl: FormControl;
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
      required: errorMessages.required,
    },
    accountType: {
      required: errorMessages.required,
    },
    password: {
      required: errorMessages.required,
      pattern: errorMessages.passwordValidation,
      minlength: errorMessages.passwordMinLength,
    },
    confirmPassword: {
      matchControl: errorMessages.passwordDoNotMatch,
    },
    email: {
      required: errorMessages.required,
      pattern: errorMessages.emailInvalid,
      mustNotExist: errorMessages.duplicateEmail
    },
    address: {
      required: errorMessages.required,
    },
    postcode: {
      required: errorMessages.required,
    },
    county: {
      required: errorMessages.required,
    },
    phoneNumber: {
      required: errorMessages.required,
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
    this.accountTypeFormControl = new FormControl(null, Validators.required);
    this.passwordFormControl = new FormControl(null, Validators.required);
    this.confirmPasswordFormControl = new FormControl(null, matchControlValidator(this.passwordFormControl));

    // TODO: GEt list of emails already registred
    const otherEmails = [];
    this.emailFormControl = new FormControl(null, [
      Validators.required,
      Validators.pattern(emailAddressRegex),
      // mustNotExistValidator(otherEmails, false)
    ]);

    this.emailFormControl = new FormControl(null, Validators.required);
    this.nameFormControl = new FormControl(null, Validators.required);
    this.addressFormControl = new FormControl('', Validators.required);
    this.postcodeFormControl = new FormControl(null, Validators.required);
    this.countyFormControl = new FormControl(null, Validators.required);
    this.phoneNumberFormControl = new FormControl(null, Validators.required);

    this.accountTypeFormControl.setValue(1);

    this.form = new FormGroup({
      accountType: this.accountTypeFormControl,
      password: this.passwordFormControl,
      confirmPassword: this.confirmPasswordFormControl,
      email: this.emailFormControl,
      name: this.nameFormControl,
      address: this.addressFormControl,
      postcode: this.postcodeFormControl,
      county: this.countyFormControl,
      phoneNumber: this.phoneNumberFormControl
    });
  }

  onChangeCompanyType(values: any) {
    console.log(values);
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  loginWithGoogle() {
    this.authService.GoogleAuth();
  }

  register() {
    if (this.validateForm()) {
      console.log('Valid form')
      return;
    }
    console.log('invalid form')
  }
}

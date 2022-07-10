import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/@shared/services/auth.service';
import { errorMessages } from '@app/@shared/validators/error-messages';
import { FormComponent } from '@app/@shared/form-group/form.component';
import { emailAddressRegex } from '@app/@shared/validators/regex-email';
import { matchControlValidator } from '@app/@shared/validators/match-validator';
import { User } from '@app/@shared/models/user.model';
import { Role } from '@app/@shared/enums/role.enum';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent extends FormComponent implements OnInit {
  user:User;
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
    this.user = this.authService.GetUser();
    console.log(this.user)
    this.generateForm();
    super.ngOnInit();
  }

  generateForm() {
    this.accountTypeFormControl = new FormControl(this.user.accountType, Validators.required);

    // TODO: GEt list of emails already registred
    const otherEmails = [];
    this.emailFormControl = new FormControl(this.user.email, [
      Validators.required,
      Validators.pattern(emailAddressRegex),
      // mustNotExistValidator(otherEmails, false)
    ]);
    this.nameFormControl = new FormControl(this.user.displayName, Validators.required);
    this.addressFormControl = new FormControl(this.user.address, Validators.required);
    this.postcodeFormControl = new FormControl(this.user.postcode, Validators.required);
    this.countyFormControl = new FormControl(this.user.county, Validators.required);
    this.phoneNumberFormControl = new FormControl(this.user.phoneNumber, Validators.required);

    this.accountTypeFormControl.setValue(this.user.accountType);

    this.form = new FormGroup({
      accountType: this.accountTypeFormControl,
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

  save() {
    console.log(this.form.controls)
    if (this.validateForm()) {
      console.log('Valid form')
      const command: any = {
        displayName: this.nameFormControl.value,
        address: this.addressFormControl.value,
        postcode: this.postcodeFormControl.value,
        county: this.countyFormControl.value,
        phoneNumber: this.phoneNumberFormControl.value,
        uid:  this.user.uid,
        photoURL: '',
        role: Role.User,
        isActive: false,
        country: ''
      }
      this.authService.EditProfile(command)
      // .then(result => { }).catch(error => this.serverError = error);
      return;
    }
    console.log('invalid form')
  }
}


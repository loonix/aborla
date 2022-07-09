import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from '@app/@shared/form-group/form.component';
import { AuthService } from '@app/@shared/services/auth.service';
import { errorMessages } from '@app/@shared/validators/error-messages';
import { emailAddressRegex } from '@app/@shared/validators/regex-email';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent extends FormComponent implements OnInit {
  validationMessages = {
    name: {
      required: errorMessages.required,
    },
    password: {
      required: errorMessages.required,
      pattern: errorMessages.passwordValidation,
      minlength: errorMessages.passwordMinLength,
    },
  };
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  form: FormGroup;

  constructor(public authService: AuthService, public router: Router) {
    super();
  }

  override ngOnInit() {
    this.generateForm();
    super.ngOnInit();
  }

  generateForm() {
    this.passwordFormControl = new FormControl(null, Validators.required);
    this.emailFormControl = new FormControl(null, [
      Validators.required,
      Validators.pattern(emailAddressRegex),
    ]);

    this.form = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  signIn() {
    this.authService.SignIn(this.form.controls['email'].value, this.form.controls['password'].value).then(result => {
      console.log('result', result);
    }).catch(error => {
      console.log('error', error);
      if (error) this.serverError = error as string;
    });

  }
}

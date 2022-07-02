import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { I18nModule } from '@app/i18n';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthService } from '@app/@shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    I18nModule,
    AuthenticationRoutingModule,
  ],
  declarations: [
    DashboardComponent, 
    ForgotPasswordComponent, 
    SignInComponent, 
    SignUpComponent, 
    VerifyEmailComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[AuthService]
})
export class AuthenticationModule {}

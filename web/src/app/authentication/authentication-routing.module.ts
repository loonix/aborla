import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/@shared/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';


const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  // { path: '', component: AboutComponent, data: { title: marker('About') } },
  // { path: 'sign-in', component: SignInComponent },
  // { path: 'register-user', component: SignUpComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'verify-email-address', component: VerifyEmailComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthenticationRoutingModule {}

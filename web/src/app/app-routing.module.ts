import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AuthGuard } from './@shared/guards/auth.guard';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
    { path: 'my-items', loadChildren: () => import('./my-items/my-items.module').then((m) => m.MyItemsModule) },
    { path: 'my-account', loadChildren: () => import('./my-account/my-account.module').then((m) => m.MyAccountModule) },
    { path: 'my-cards', loadChildren: () => import('./my-cards/my-cards.module').then((m) => m.MyCardsModule) },
    { path: 'privacy-policy', loadChildren: () => import('./privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyModule) },
   
  ]),
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

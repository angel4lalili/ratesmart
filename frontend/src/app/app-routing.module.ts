import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'; 
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { AdminFormsComponent } from './components/admin-forms/admin-forms.component'; 
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AdminFormCustomizeComponent } from './components/admin-forms/admin-form-customize/admin-form-customize.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminFormAnalyticsComponent } from './components/admin-forms/admin-form-analytics/admin-form-analytics.component'; 
import { ForgotPasswordAuthComponent } from './components/forgot-password/forgot-password-auth/forgot-password-auth.component';
import { SetPasswordComponent } from './components/forgot-password/set-password/set-password.component'; 
import { AdminFormCustomizeLogoComponent } from './components/admin-forms/admin-form-customize/admin-form-customize-logo/admin-form-customize-logo.component';
import { AdminSettingsDeleteComponent } from './components/admin-settings/admin-settings-delete/admin-settings-delete.component';
import { UserStartComponent } from './components/user-start/user-start.component';
import { EndUserComponent } from './components/end-user/end-user.component';
import { RateSatisfactoryComponent } from './components/end-user/rate-satisfactory/rate-satisfactory.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashScreenComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent   
 },
  { path: 'forgot-password-auth', component: ForgotPasswordAuthComponent },
  { path: 'user-start', component: UserStartComponent}, // Assuming this is also public
  { path: 'end-user', component: EndUserComponent}, // Assuming this is also public
  { path: 'rate-satisfactory', component: RateSatisfactoryComponent}, // Assuming this is also public

  // Protected routes (require authentication)
  { 
    path: 'admin-dashboard', 
    component: AdminDashboardComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin-settings', 
    component: AdminSettingsComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin-forms', 
    component: AdminFormsComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin-profile', 
    component: AdminProfileComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'change-password', 
    component: ChangePasswordComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin-form-customize', 
    component: AdminFormCustomizeComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin-form-analytics', 
    component: AdminFormAnalyticsComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin-form-customize-logo', 
    component: AdminFormCustomizeLogoComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin-settings-delete', 
    component: AdminSettingsDeleteComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'about-page', 
    component: AboutPageComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'set-password', 
    component: SetPasswordComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

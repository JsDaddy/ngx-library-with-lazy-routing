import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// DEPSPITE NOT BEING USED, THIS CANNOT BE REMOVED!!!!! THIS FORCES NG-PACKAGR TO BUILD auth/* first
// See: https://github.com/ng-packagr/ng-packagr/issues/1562
// @ts-ignore
import { LoginModule } from 'auth/login-page';


export async function loadLogin(): Promise<import('auth/login-page').LoginModule> {
  const m = await import('auth/login-page');
  return m.LoginModule;
}

export async function loadRegistration(): Promise<import('auth/registration-page').RegistrationModule> {
  const m = await import('auth/registration-page');
  return m.RegistrationModule;
}

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: loadLogin
}, {
  path: 'registration',
  loadChildren: loadRegistration
}];

export const routerModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [routerModule],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

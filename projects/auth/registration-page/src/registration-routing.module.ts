import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{
  path: '',
  component: RegistrationComponent
}];

// tslint:disable-next-line:max-line-length
// When building in Prod, for some reason it is necessary to declare and export this variable because you cannot call functions inside decorators
// Although if you enable Ivy in production build you can call it directly in decorator
export const routerModule = RouterModule.forChild(routes);

@NgModule({
  imports: [routerModule],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }

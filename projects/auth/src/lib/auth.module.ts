import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { CoreComponent } from './core.component';

export { CoreComponent } from './core.component';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    AuthRoutingModule
  ],
  exports: [CoreComponent]
})
export class AuthModule {
}

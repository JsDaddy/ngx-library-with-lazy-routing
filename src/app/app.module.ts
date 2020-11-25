import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule, CoreComponent } from 'auth';

@NgModule({
  imports: [
    AuthModule,
    BrowserModule
  ],
  bootstrap: [CoreComponent]
})
export class AppModule {
}

import { UiHeaderModule } from '@micro/ui/header';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiNavbarModule } from '@micro/ui/navbar';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiNavbarModule,
    UiHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiHeaderModule } from '@micro/ui/header';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    UiHeaderModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

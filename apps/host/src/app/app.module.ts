import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiHeaderModule } from '@micro/ui/header';
import { UiSideMenuModule } from '@micro/ui/side-menu';

import { AppComponent } from './app.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule,
    UiHeaderModule,
    UiSideMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

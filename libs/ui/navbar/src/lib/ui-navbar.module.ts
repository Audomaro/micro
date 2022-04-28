import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './../../../../../apps/host/src/app/app-routing.module';

import { DxToolbarModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxToolbarModule,
    AppRoutingModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class UiNavbarModule { }

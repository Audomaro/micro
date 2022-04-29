import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

export const uiSideMenuRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent],
})
export class UiSideMenuModule {}

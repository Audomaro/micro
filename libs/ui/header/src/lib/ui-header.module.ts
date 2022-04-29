import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from './header/header.component';

export const uiHeaderRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('dashboard/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('admin/Module').then((m) => m.RemoteEntryModule),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(uiHeaderRoutes, { initialNavigation: 'enabledBlocking' })
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class UiHeaderModule { }

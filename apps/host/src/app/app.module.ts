import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiNavbarModule } from '@micro/ui/navbar';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    UiNavbarModule,
    RouterModule.forRoot(
      [
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
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

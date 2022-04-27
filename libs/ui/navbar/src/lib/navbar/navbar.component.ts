import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'micro-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  backButtonOptions: any;
  refreshButtonOptions: any;
  addButtonOptions: any;
  saveButtonOptions: any;
  printButtonOptions: any;
  settingsButtonOptions: any;

  constructor() {

    this.backButtonOptions = {
      type: 'back',
      onClick: () => {
        notify('Back button has been clicked!');
      },
    };

    this.refreshButtonOptions = {
      icon: 'refresh',
      onClick: () => {
        notify('Refresh button has been clicked!');
      },
    };

    this.addButtonOptions = {
      icon: 'plus',
      onClick: () => {
        notify('Add button has been clicked!');
      },
    };

    this.saveButtonOptions = {
      text: 'Save',
      onClick: () => {
        notify('Save option has been clicked!');
      },
    };

    this.printButtonOptions = {
      text: 'Print',
      onClick: () => {
        notify('Print option has been clicked!');
      },
    };

    this.settingsButtonOptions = {
      text: 'Settings',
      onClick: () => {
        notify('Settings option has been clicked!');
      },
    };
  }

  ngOnInit(): void { }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Scan', url: '/home' },
    { title: 'Settings', url: '/settings'},
  ];
  public version: string = environment.version;

  constructor(private router: Router) {
    this.router.navigate(['/home']);
  }

}

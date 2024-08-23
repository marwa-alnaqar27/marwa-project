import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marwa-project';
  rows = [
    { name: 'mar', appointment: 30, role: 'admin' },
    { name: 'mir', appointment: 25, role: 'admin' },
    { name: 'mais', appointment: 40, role: 'admin' },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-items></app-items>
    </div>
  `,
})
export class AppComponent {
  constructor() {}
}

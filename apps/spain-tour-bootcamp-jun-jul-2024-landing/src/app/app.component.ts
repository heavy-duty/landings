import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'bootcamp-root',
  template: `<bootcamp-nx-welcome></bootcamp-nx-welcome>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'spain-tour-bootcamp-jun-jul-2024-landing';
}

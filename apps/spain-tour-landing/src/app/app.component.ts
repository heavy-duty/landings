import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'hd-spain-tour-root',
  template: `<hd-spain-tour-nx-welcome></hd-spain-tour-nx-welcome> `,
  styles: [''],
})
export class AppComponent {
  title = 'spain-tour-landing';
}

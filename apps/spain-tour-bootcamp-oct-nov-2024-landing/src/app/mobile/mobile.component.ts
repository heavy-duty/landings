import { Component, Input } from '@angular/core';
import { INTRO_TEXT, SUCCESS_INSCRIPTION_TEXT } from '../utils';

@Component({
  selector: 'bootcamp-app-mobile-component',
  template: `
    <div id="mobile-main-frame" class="relative overflow-x-hidden">
      Aquí va el mobile
    </div>
  `,
  standalone: true,
  styles: [],
})
export class AppMobileComponent {
  @Input() isFromEmail = false;

  introText = INTRO_TEXT;
  successText = SUCCESS_INSCRIPTION_TEXT;
}

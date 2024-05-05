import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-footer-mobile',
  template: `
    {{text}}
  
    `,
  styles: ``,
})
export class FooterMobileComponent {
  text = 'Footer Mobile text';
}

import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-navbar-mobile',
  template: `
    {{text}}
  
    `,
  styles: ``,
})
export class NavbarMobileComponent {
  text = 'Navbar Mobile text';
}

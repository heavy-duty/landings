import { Component, OnInit, inject } from '@angular/core';
import { AppDesktopComponent } from './pages/desktop/desktop.page';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AppMobileComponent } from './pages/mobile/mobile.page';
@Component({
  standalone: true,
  imports: [AppDesktopComponent, AppMobileComponent],
  selector: 'hdb-root',
  template: ` 
    @if (!showMobile) {
      <hdb-app-desktop></hdb-app-desktop> 
    } @else {
      <hdb-app-mobile></hdb-app-mobile> 
    }
  `,
  styles: ``,
})
export class AppComponent implements OnInit {
  private readonly _breakpointObserver = inject(BreakpointObserver);
  readonly breakpoint$ = this._breakpointObserver;

  showMobile = false;

  ngOnInit(): void {
    this.breakpoint$
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showMobile = false;
        } else {
          this.showMobile = true;
        }
      });
  }
}

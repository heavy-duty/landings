import { Component, OnInit } from '@angular/core';
import { AppDesktopComponent } from './desktop/desktop.component.';
import { AppMobileComponent } from './mobile/mobile.component.';
import { CommonModule } from '@angular/common';

import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  standalone: true,
  selector: 'bootcamp-root',
  template: `
    <div class="bp-bg-wall"></div>

    <div *ngIf="!showMobile">
      <bootcamp-app-desktop-component></bootcamp-app-desktop-component> 
    </div>
    <div *ngIf="showMobile">
      <bootcamp-app-mobile-component></bootcamp-app-mobile-component> 
    </div>  
  `,
  imports: [AppDesktopComponent, AppMobileComponent, CommonModule],
  styles: [''],
  
})
export class AppComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) { }

  readonly breakpoint$ = this.breakpointObserver;
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

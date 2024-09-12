import { Component, OnInit, inject } from '@angular/core';
import { AppDesktopComponent } from './desktop/desktop.component';
import { AppMobileComponent } from './mobile/mobile.component';
import { CommonModule } from '@angular/common';

import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'bootcamp-root',
  template: `
    <div class="z-[30]"></div>
      
    @if (!showMobile) {
      <bootcamp-app-desktop-component></bootcamp-app-desktop-component> 
    } @else {
      <bootcamp-app-mobile-component></bootcamp-app-mobile-component> 
    }
  `,
  imports: [AppDesktopComponent, AppMobileComponent, CommonModule],
  styles: [''],
  
})
export class AppComponent implements OnInit {
  private readonly _breakpointObserver = inject(BreakpointObserver);
  private readonly _route = inject(ActivatedRoute);
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

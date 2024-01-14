import { Component, OnInit, inject } from '@angular/core';
import { AppDesktopComponent } from './desktop/desktop.component.';
import { AppMobileComponent } from './mobile/mobile.component.';
import { CommonModule } from '@angular/common';

import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { UpdateSubscriptionService } from './components/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'bootcamp-root',
  template: `
    <div class="bp-bg-wall"></div>

    <div *ngIf="!showMobile">
      <bootcamp-app-desktop-component [isFromEmail]="isFromEmail"></bootcamp-app-desktop-component> 
    </div>
    <div *ngIf="showMobile">
      <bootcamp-app-mobile-component [isFromEmail]="isFromEmail"></bootcamp-app-mobile-component> 
    </div>  
  `,
  imports: [AppDesktopComponent, AppMobileComponent, CommonModule],
  styles: [''],
  
})
export class AppComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) { }

  private readonly _updateSubscriptionService = inject(UpdateSubscriptionService);
  private readonly _route = inject(ActivatedRoute);
  readonly breakpoint$ = this.breakpointObserver;

  showMobile = false;
  isFromEmail: boolean = false;


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

      
      
      this._route.queryParamMap.subscribe(
        (params) => {
          console.log("Getting_Data", params.get('isFromEmail'));
          this.isFromEmail = params.get('isFromEmail') ? true : false;
        }
      )

  }


  
}

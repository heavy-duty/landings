import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bootcamp-nx-welcome',
  template: `
    <div>
      <div id="desktop-table" class="relative bottom-[2vw] w-[100vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
          alt="Desktop wood table pixel art"
          class="absolute w-[65vw] top-[30vw]"
        />
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
          alt="Desktop wood table pixel art"
          class="absolute w-[65vw] top-[30vw] right-0"
        />
      </div>
      <div id="computer-monitor" class="absolute top-[5.7vw] left-[36vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
          alt="Vintage computer monitor pixel art"
          class="w-[35vw]"
        />
      </div>

      <div id="computer-keyboard" class="absolute top-[37.5vw] left-[36vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928472/keyboard_r0owce.png"
          alt="Vintage computer keyboard pixel art"
          class="w-[30vw] -rotate-1"
        />
      </div>
      
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'bootcamp-app-desktop-component',
  template: `
    <div>
      <div id="desktop-table" class="top-[28vw] h-[23.5vw] relative bottom-[2vw] w-[100vw] overflow-hidden">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
          alt="Desktop wood table pixel art"
          class="absolute w-[65vw] "
        />
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
          alt="Desktop wood table pixel art"
          class="absolute w-[65vw] right-0"
        />
      </div>


      <div id="computer-speaker-left" class="absolute top-[21.65vw] left-[29.8vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703956343/Stereo_c3sfcm.png"
          alt="Vintage computer left speaker pixel art"
          class="w-[8vw]"
        />
      </div>

      <div id="computer-monitor" class="absolute top-[5.75vw] left-[36vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
          alt="Vintage computer monitor pixel art"
          class="w-[35vw]"
        />
      </div>

      <div id="computer-speaker-right" class="absolute top-[21.65vw] right-[28.3vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703956343/Stereo_c3sfcm.png"
          alt="Vintage computer right speaker pixel art"
          class="w-[8vw]"
        />
      </div>

      <div id="computer-keyboard" class="absolute top-[37.5vw] left-[36vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928472/keyboard_r0owce.png"
          alt="Vintage computer keyboard pixel art"
          class="w-[30vw] -rotate-1"
        />
      </div>
      

      <div id="drink-can-one" class="absolute top-[26vw] right-[17vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703957580/Beer_yegqqa.png"
          alt="Vintage drink can pixel art"
          class="w-[4vw]"
        />
      </div>

      <div id="drink-can-two" class="absolute top-[27.5vw] right-[15vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703957580/Beer_yegqqa.png"
          alt="Vintage drink can pixel art"
          class="w-[4vw]"
        />
      </div>

      <div id="cup-coffee" class="absolute top-[34vw] left-[20vw]">

      
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703957915/Smoke_Dark_hzsnah.gif"
          alt="Vintage cup of coffee smoke gif pixel art"
          class="w-[6vw] absolute top-[-3.3vw] right-[0.3vw] opacity-45"
        />
      
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703957914/Coffee_zrvkfh.png"
          alt="Vintage cup of coffee pixel art"
          class="w-[6vw]"
        />
      </div>


      <div id="computer-mousepad" class="absolute top-[35vw] right-[18vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956344/Mousepad_ua5xde.png"
          alt="Heavy duty builders mousepad pixel art"
          class="w-[17vw] -rotate-3"
        />
      </div>

      <div id="computer-mouse" class="absolute top-[32.5vw] right-[24vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956344/mouse_lcpikf.png"
          alt="Vintage computer mouse pixel art"
          class="w-[11vw] -rotate-3"
        />
      </div>
      
    </div>
  `,
  standalone: true,
  styles: []
})
export class AppDesktopComponent {}

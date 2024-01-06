import { Component } from '@angular/core';

@Component({
  selector: 'bootcamp-app-mobile-component',
  template: `
    <div id="mobile-main-frame" class="relative">
      <div id="main-art-welcome" class="relative flex justify-center top-[6vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704465536/Sign_yicmjg.png"
          alt="Vintage welcome bootcamp painting pixel art"
          class="w-[90vw]"
        />
      </div>

      <div id="official-calendar" class="relative flex justify-center mt-[13vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704401964/Poster_Febrero_1_zmxv1n.png"
          alt="Vintage calendar february pixel art"
          class="relative w-[80vw] left-[1vw]"
        />
      </div>

      <div id="desktop-table" class="absolute -bottom-[9.5vw]">
        <img 
        src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
        alt="Desktop wood table pixel art"
        class="w-[99.9vw] h-[60vw]"
        />
      </div>

      <div class="relative flex justify-center mt-[10vw] overflow-x-hidden">
        <div id="computer-speaker-left" class="absolute left-[5vw] bottom-[15vw]">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
            alt="Vintage computer left speaker pixel art"
            class="w-[18vw]"
          />
        </div>  

        <div id="computer-monitor" class="z-10">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
            alt="Vintage computer monitor pixel art"
            class="w-[85vw] ml-[16.5vw]"
          />
        </div>

        <div id="computer-speaker-right" class="absolute right-[0vw] bottom-[15vw] z-20">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
            alt="Vintage computer right speaker pixel art"
            class="w-[18vw]"
          />
        </div>
      </div>

      <div>
        <div id="computer-keyboard" class="relative mt-[2vw]">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928472/keyboard_r0owce.png"
            alt="Vintage computer keyboard pixel art"
            class="relative w-[70vw] rotate-3 left-[1vw]"
          />
        </div>

        <div id="computer-mousepad" class="absolute bottom-[4vw] -right-[1.5vw]">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956344/Mousepad_ua5xde.png"
            alt="Heavy duty builders mousepad pixel art"
            class="w-[33vw] -rotate-1"
          />

          <a href="https://heavyduty.builders" target="_blank">
            <div class="w-[7vw] h-[3vw] absolute right-[3vw] bottom-[2.4vw] -rotate-[2deg] opacity-0"></div>
          </a>
        </div>
        <div id="computer-mouse" class="absolute bottom-[7vw] right-[8vw] z-10">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704509525/Mobile_Mouse_fjeob2.png"
            alt="Vintage computer mouse pixel art"
            class="w-[20vw] -rotate-3"
          />
        </div>
      </div>
    </div>
  `,
  standalone: true,
  styles: []
})
export class AppMobileComponent {}

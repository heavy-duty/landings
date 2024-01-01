import { Component } from '@angular/core';

@Component({
  selector: 'bootcamp-app-desktop-component',
  template: `
    <div id="desktop-main-frame" class="relative min-h-[110vh] overflow-x-hidden">

      <div id="wall-shadow" class="absolute left-[5vw] bottom-[15vw]">
        <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704135252/shadow_ztxbuz.png"
            alt="Shadow on the wall pixel art"
            class="w-[70vw]"
          />
      </div>

      <div id="desktop-table" class="absolute bottom-[0vw] h-[23.5vw] w-[100vw] overflow-hidden">
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

      <div id="game-controller" class="absolute bottom-[11vw] left-[27.4vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704136206/Game_qd0yag.png"
          alt="Vintage game controller pixel art"
          class="w-[10vw]"
        />
      </div>

      <div id="ashtray" class="absolute bottom-[7vw] left-[15.4vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704138598/Ashtray_dissdy.png"
          alt="Vintage ashtray pixel art"
          class="w-[7vw]"
        />
      </div>

      <div id="bookshelf" class="absolute bottom-[19vw] -left-[13vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704138687/Books_Shell_1_q13cdi.png"
          alt="Vintage bookshelf pixel art"
          class="w-[40vw]"
        />
      </div>

      <div id="funko-builder" class="absolute bottom-[32vw] left-[14.5vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704138873/Builder_l1fch8.png"
          alt="Vintage funko builder pixel art"
          class="w-[6vw]"
        />
      </div>

      <div id="computer-speaker-left" class="absolute bottom-[19.65vw] left-[29.8vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703956343/Stereo_c3sfcm.png"
          alt="Vintage computer left speaker pixel art"
          class="w-[8vw]"
        />
      </div>

      <div id="official-calendar" class="absolute right-[6vw] bottom-[24.5vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704142619/Poster_Febrero_pwlvn4.png"
          alt="Vintage calendar february pixel art"
          class="w-[23vw]"
        />
      </div>

      <div id="main-art-welcome" class="absolute right-[34.5vw] bottom-[47.5vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704143728/Small_Sign_qgu8np.png"
          alt="Vintage calendar february pixel art"
          class="w-[30vw]"
        />
      </div>

      <div id="computer-monitor" class="absolute bottom-[13.8vw] left-[36vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
          alt="Vintage computer monitor pixel art"
          class="w-[35vw]"
        />
      </div>

      <div id="computer-speaker-right" class="absolute bottom-[19.65vw] right-[28.3vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703956343/Stereo_c3sfcm.png"
          alt="Vintage computer right speaker pixel art"
          class="w-[8vw]"
        />
      </div>

      <div id="computer-keyboard" class="absolute bottom-[3.6vw] left-[36vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928472/keyboard_r0owce.png"
          alt="Vintage computer keyboard pixel art"
          class="w-[30vw] -rotate-1"
        />
      </div>
      

      <div id="drink-can-one" class="absolute bottom-[19.5vw] right-[17vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703957580/Beer_yegqqa.png"
          alt="Vintage drink can pixel art"
          class="w-[4vw]"
        />
      </div>

      <div id="drink-can-two" class="absolute bottom-[18.5vw] right-[15vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703957580/Beer_yegqqa.png"
          alt="Vintage drink can pixel art"
          class="w-[4vw]"
        />
      </div>

      <div id="cup-coffee" class="absolute bottom-[9.5vw] right-[6vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1703957915/Smoke_Dark_hzsnah.gif"
          alt="Vintage coffee smoke gif pixel art"
          class="w-[6vw] absolute top-[-3.3vw] right-[0.3vw] opacity-25"
        />
      
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704136782/Coffee_1_f1esg4.png"
          alt="Vintage solana cup of coffee pixel art"
          class="w-[6vw]"
        />
      </div>


      <div id="computer-mousepad" class="absolute bottom-[9.8vw] right-[19.2vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956344/Mousepad_ua5xde.png"
          alt="Heavy duty builders mousepad pixel art"
          class="w-[15vw] -rotate-3"
        />
      </div>

      <div id="computer-mouse" class="absolute bottom-[12vw] right-[25.5vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956344/mouse_lcpikf.png"
          alt="Vintage computer mouse pixel art"
          class="w-[9vw] -rotate-3"
        />
      </div>
      
    </div>
  `,
  standalone: true,
  styles: []
})
export class AppDesktopComponent {}

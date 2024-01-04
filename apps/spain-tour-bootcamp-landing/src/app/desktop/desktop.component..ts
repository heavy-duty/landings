import { Component } from '@angular/core';

@Component({
  selector: 'bootcamp-app-desktop-component',
  template: `
    <div id="desktop-main-frame" class="relative overflow-x-hidden">

      <div id="wall-shadow" class="absolute left-[5vw] bottom-[15vw]">
        <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704135252/shadow_ztxbuz.png"
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
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704136206/Game_qd0yag.png"
          alt="Vintage game controller pixel art"
          class="w-[10vw]"
        />
      </div>

      <div id="ashtray" class="absolute bottom-[7vw] left-[15.4vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402636/Ashtray_1_x1uxiq.png"
          alt="Vintage ashtray pixel art"
          class="w-[7vw]"
        />
      </div>

      <div id="bookshelf" class="absolute bottom-[19vw] -left-[15vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704138687/Books_Shell_1_q13cdi.png"
          alt="Vintage bookshelf pixel art"
          class="w-[40vw]"
        />
      </div>

      <div id="bookshelf-books-down" class="absolute bottom-[17.2vw] left-[2.5vw] w-[6vw] h-[12.5vw]">
        <img  
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Yellow_Simple_Book__xl7bko.png"
          alt="Vintage yellow book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] -left-[0.6vw]"
        />  
        <img  
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/White_Simple_Book__qqytug.png"
          alt="Vintage white book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[1vw]"
        />
        <img  
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Blue_Simple_Book__foovlc.png"
          alt="Vintage blue book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[3vw]"
        />
        <img  
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Green_Simple_Book_lcseet.png"
          alt="Vintage green book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[5vw]"
        />
        <img  
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Purple_Simple_Book_apk2zp.png"
          alt="Vintage purple book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[7vw]"
        />
        <img  
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Yellow_Simple_Book__xl7bko.png"
          alt="Vintage yellow book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[9vw]"
        />  
        <img  
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Red_Simple_Book__fwzsq5.png"
          alt="Vintage red book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[11vw]"
        />        
      </div>

      <div id="bookshelf-books-up" class="absolute bottom-[31.5vw] left-[2.5vw] w-[6vw] h-[12.5vw]">
        <a href="https://www.soldev.app/" target="_blank" >
          <img  
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704289333/Blue_Book_qogwrt.png"
            alt="Vintage blue book pixel art"
            class="w-[3vw] absolute z-10 top-[0vw]"
          />
        </a>
        <a href="https://www.soldev.app/" target="_blank" >
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704289333/Red_Book_ui9oqa.png"
            alt="Vintage red book pixel art"
            class="w-[2.7vw] absolute z-10 left-[1.7vw] top-[0.95vw]"
          />
        </a>
        <a href="https://www.soldev.app/" target="_blank" >
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704289332/Green_Book_wfxtwg.png"
            alt="Vintage green book pixel art"
            class="w-[2.9vw] absolute z-10 left-[3.3vw] top-[0.2vw]"
          />
        </a>
        <a href="https://www.soldev.app/" target="_blank" >
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704289332/Pink_Book_wuxdpf.png"
            alt="Vintage green book pixel art"
            class="w-[2.8vw] absolute z-10 left-[5vw] top-[0.55vw]"
          />        
        </a>
      </div>

      <div id="funko-builder" class="absolute bottom-[32vw] left-[12.5vw]">
        <a href="https://heavyduty.builders" target="_blank">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704138873/Builder_l1fch8.png"
            alt="Vintage funko builder pixel art"
            class="w-[6vw]"
          />
        </a>
      </div>

      <div id="globe-decoration" class="absolute bottom-[19vw] left-[20.5vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704394177/Decoration_uydlqs.png"
          alt="Vintage random globe decoration pixel art"
          class="w-[8vw]"
        />
      </div>

      <div id="lamp" class="absolute bottom-[5.5vw] left-[0.5vw] z-10">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704141231/Lamp_m1fus3.png"
          alt="Vintage  lamp with light pixel art"
          class="w-[28vw]"
        />
      </div>

      <div id="official-calendar" class="absolute right-[6vw] bottom-[24.5vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704401964/Poster_Febrero_1_zmxv1n.png"
          alt="Vintage calendar february pixel art"
          class="w-[23vw]"
        />
      </div>

      <div id="main-art-welcome" class="absolute right-[34.5vw] bottom-[47.5vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704143728/Small_Sign_qgu8np.png"
          alt="Vintage welcome bootcamp painting pixel art"
          class="w-[30vw]"
        />
      </div>

      <div id="computer-speaker-left" class="absolute bottom-[19.65vw] left-[29.8vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
          alt="Vintage computer left speaker pixel art"
          class="w-[8vw]"
        />
      </div>

      <div id="computer-monitor" class="absolute bottom-[13.8vw] left-[36vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
          alt="Vintage computer monitor pixel art"
          class="w-[35vw]"
        />
      </div>

      <div id="computer-speaker-right" class="absolute bottom-[19.65vw] right-[26.8vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
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
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704394177/Beer_1_oue2db.png"
          alt="Vintage drink can pixel art"
          class="w-[4vw]"
        />
      </div>

      <div id="drink-can-two" class="absolute bottom-[18.5vw] right-[15vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704394177/Beer_1_oue2db.png"
          alt="Vintage drink can pixel art"
          class="w-[4vw]"
        />
      </div>

      <div id="cup-coffee" class="absolute bottom-[9.5vw] right-[6vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703957915/Smoke_Dark_hzsnah.gif"
          alt="Vintage coffee smoke gif pixel art"
          class="w-[6vw] absolute top-[-3.3vw] right-[0.3vw] opacity-25"
        />
      
        <a href="https://solana.com" target="_blank">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704136782/Coffee_1_f1esg4.png"
            alt="Vintage solana cup of coffee pixel art"
            class="w-[6vw]"
          />
        </a>  
      </div>

      <div id="computer-mousepad" class="absolute bottom-[7vw] right-[18.2vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956344/Mousepad_ua5xde.png"
          alt="Heavy duty builders mousepad pixel art"
          class="w-[15vw] -rotate-3"
        />

        <a href="https://heavyduty.builders" target="_blank">
          <div class="w-[3vw] h-[1.3vw] absolute right-[1.5vw] bottom-[1.4vw] -rotate-[2deg] opacity-0"></div>
        </a>
      </div>

      <div id="computer-mouse" class="absolute bottom-[9vw] right-[23.5vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704394177/Desktop_Mouse_1_wrdno3.png"
          alt="Vintage computer mouse pixel art"
          class="w-[11vw] -rotate-3"
        />
      </div>
      
    </div>
  `,
  standalone: true,
  styles: []
})
export class AppDesktopComponent { }

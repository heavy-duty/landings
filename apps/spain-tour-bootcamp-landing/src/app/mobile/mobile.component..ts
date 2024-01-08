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

        <div class="absolute text-center bp-font-retro-computer">
          <h1 class="text-[3.5vw] mt-[8vw] mb-[4vw]">
            BIENVENIDO AL BOOT CAMP:
          </h1>
          <h1 class="text-[4.5vw]">
            INTRODUCCION A LAS 
          </h1>
          <h1 class="text-[4.5vw]">
            DAPPS EN SOLANA
          </h1>

          <div class="mt-[4vw]">
            <button class="bg-[#6A4CB1] px-[4vw] py-[1.5vw] text-white text-[3.5vw] border-black border-[0.5vw]" aria-label="Botón de registro">REGISTRARME</button>
          </div>
        </div>

      </div>

      <div id="official-calendar" class="relative flex justify-center mt-[13vw]">
        <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1704401964/Poster_Febrero_1_zmxv1n.png"
          alt="Vintage calendar february pixel art"
          class="relative w-[80vw] left-[1vw]"
        />
      </div>

      <div class="relative flex justify-center mt-[10vw]">

        <div id="desktop-table" class="absolute top-[54.1vw]">
          <img 
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
          alt="Desktop wood table pixel art"
          class="w-[99.9vw] h-[60vw]"
          />
        </div>

        <div id="wall-shadow" class="absolute top-[23.4vw]  z-10">
          <img 
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704135252/shadow_ztxbuz.png"
              alt="Shadow on the wall pixel art"
              class="w-[100vw]"
            />
        </div> 

        <div id="computer-speaker-left" class="absolute left-[5vw] bottom-[15vw]  z-10">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
            alt="Vintage computer left speaker pixel art"
            class="w-[18vw]"
          />
        </div>  

        <div id="computer-monitor" class="z-20 relative mt-[0.4vw]">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
            alt="Vintage computer monitor pixel art"
            class="w-[85vw] ml-[16.5vw]"
          />
        </div>

        <div id="computer-speaker-right" class="absolute right-[0vw] bottom-[15vw] z-30">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
            alt="Vintage computer right speaker pixel art"
            class="w-[18vw]"
          />
        </div>
      </div>

      <div class="relative">
        <div id="computer-keyboard" class="relative mt-[2vw]">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1702928472/keyboard_r0owce.png"
            alt="Vintage computer keyboard pixel art"
            class="relative w-[70vw] rotate-3 left-[1vw]"
          />
        </div>

        <div id="cup-coffee" class="absolute -top-[15.5vw] right-[1vw] z-30">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1703957915/Smoke_Dark_hzsnah.gif"
            alt="Vintage coffee smoke gif pixel art"
            class="w-[11vw] absolute top-[-6.3vw] right-[0.3vw] opacity-25"
          />
        
          <a href="https://solana.com" target="_blank">
            <img 
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704136782/Coffee_1_f1esg4.png"
              alt="Vintage solana cup of coffee pixel art"
              class="w-[11vw]"
            />
          </a>  
        </div>

        <div id="ashtray" class="absolute -top-[10.5vw] left-[4vw]">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704465247/Ashtray_2_y7wyub.png"
            alt="Vintage ashtray pixel art"
            class="w-[12vw]"
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

      <div class="relative mt-[10vw]">
        <div id="bookshelf" class="relative -left-[37vw] z-30">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704138687/Books_Shell_1_q13cdi.png"
            alt="Vintage bookshelf pixel art"
            class="w-[100vw]"
          />
        </div>


        <div id="bookshelf-books-up" class="absolute top-[6vw] left-[7vw] w-[40vw] h-[12.5vw] z-40">
          <a href="https://www.soldev.app/" target="_blank" >
            <img  
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704289333/Blue_Book_qogwrt.png"
              alt="Vintage blue book pixel art"
              class="w-[7.3vw] absolute z-10 top-[0vw]"
            />
          </a>
          <a href="https://www.soldev.app/" target="_blank" >
            <img 
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704289333/Red_Book_ui9oqa.png"
              alt="Vintage red book pixel art"
              class="w-[6.7vw] absolute z-10 left-[4.5vw] top-[1.8vw]"
            />
          </a>
          <a href="https://www.soldev.app/" target="_blank" >
            <img 
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704289332/Green_Book_wfxtwg.png"
              alt="Vintage green book pixel art"
              class="w-[7.1vw] absolute z-10 left-[9vw] top-[0.3vw]"
            />
          </a>
          <a href="https://www.soldev.app/" target="_blank" >
            <img 
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704289332/Pink_Book_wuxdpf.png"
              alt="Vintage green book pixel art"
              class="w-[7vw] absolute z-10 left-[13.5vw] top-[0.7vw]"
            />        
          </a>
        </div>

        <div id="bookshelf-books-down" class="absolute bottom-[0vw] left-[7vw] w-[6vw] h-[27vw] z-[30]">
          <img  
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Yellow_Simple_Book__xl7bko.png"
            alt="Vintage yellow book pixel art"
            class="w-[4.9vw] absolute z-10 top-[0vw] -left-[1.1vw]"
          />  
          <img  
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/White_Simple_Book__qqytug.png"
            alt="Vintage white book pixel art"
            class="w-[4.9vw] absolute z-10 top-[0vw] left-[3.6vw]"
          />
          <img  
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Blue_Simple_Book__foovlc.png"
            alt="Vintage blue book pixel art"
            class="w-[4.9vw] absolute z-10 top-[0vw] left-[8.6vw]"
          />
          <img  
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Green_Simple_Book_lcseet.png"
            alt="Vintage green book pixel art"
            class="w-[4.9vw] absolute z-10 top-[0vw] left-[13vw]"
          />
          <img  
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Purple_Simple_Book_apk2zp.png"
            alt="Vintage purple book pixel art"
            class="w-[4.9vw] absolute z-10 top-[0vw] left-[17.5vw]"
          />
          <img  
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Yellow_Simple_Book__xl7bko.png"
            alt="Vintage yellow book pixel art"
            class="w-[4.9vw] absolute z-10 top-[0vw] left-[22vw]"
          />  
          <img  
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704402554/Red_Simple_Book__fwzsq5.png"
            alt="Vintage red book pixel art"
            class="w-[4.9vw] absolute z-10 top-[0vw] left-[26.5vw]"
          />
        </div>

        <div id="wall-shadow-desktop" class="absolute w-[100vw] h-[70vw] bg-black -top-[7.2vw] opacity-30"></div>

        <div id="wall-shadow-room" class="absolute bottom-[8vw] -right-[3vw]  z-10">
          <img 
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704135252/shadow_ztxbuz.png"
              alt="Shadow on the wall pixel art"
              class="w-[100vw]"
            />
        </div> 

        <div id="trash-can" class="absolute z-10 -right-[2vw] bottom-0">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704654302/Trash_Can_vjrqps.png"
            alt="Trash can pixel art"
            class="w-[25vw]"
          />
        </div>
        

        <div id="room-floor" class="absolute w-[100vw] bg-[#faebd7] h-[8.5vw] bottom-[0vw]"></div>
      </div>

      <div id="funko-builder" class="absolute bottom-[32vw] left-[28.5vw] z-[40]">
        <a href="https://heavyduty.builders" target="_blank">
          <img 
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1704138873/Builder_l1fch8.png"
            alt="Vintage funko builder pixel art"
            class="w-[15vw]"
          />
        </a>
      </div>


    </div>
  `,
  standalone: true,
  styles: []
})
export class AppMobileComponent {}

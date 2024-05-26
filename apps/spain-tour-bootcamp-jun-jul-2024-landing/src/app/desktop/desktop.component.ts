import { Component } from '@angular/core';
import {INTRO_TEXT, SUCCESS_INSCRIPTION_TEXT} from '../utils';

@Component({
  selector: 'bootcamp-app-desktop-component',
  template: `
    <div id="desktop-main-frame" class="relative overflow-x-hidden">

      <div id="wall-shadow" class="absolute left-[5vw] bottom-[15vw]">
        <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704135252/shadow_ztxbuz.png"
            alt="Shadow on the wall pixel art"
            class="w-[70vw]"
          />
      </div>

      <div id="official-calendar" class="absolute right-[4vw] bottom-[24.8vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716673552/Poster_Junio_stjug5.png"
          alt="Vintage calendar june pixel art"
          class="w-[24vw]"
        />

        <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Solana+Boot+Camp+Espa%C3%B1a&details=El+primer+boot+camp+de+solana+en+espa%C3%B1a&location=Online&dates=20240205T200000Z%2F20240205T220000Z" alt="Add event to Google calendar" target="_blank">
          <div class="add-calendar-event" class="absolute top-[17vw] left-[4.8vw] w-[2.6vw] h-[2.25vw]">

          </div>
        </a>

        <a href="https://solana.com" target="_blank">
          <div class="absolute opacity-0 w-[19.7vw] h-[7.8vw] z-40 top-[2.9vw] left-[1.9vw]"></div>
        </a>
      </div>
      
      <div id="resources-cork" class="absolute left-[1vw] bottom-[35.7vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Cork_2_jwnr5s.png"
          alt="Vintage cork with resources stickers"
          class="w-[32vw] relative"
        />

        <a href="#" target="_blank" aria-label="collaborators text">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705422202/Colaboradores_ca9jpy.png"
            alt="Vintage collaborators title stickers"
            class="w-[16vw] absolute z-30 top-[2vw] right-[2.5vw]"
          />
        </a>

        <a href="https://solana.com/" target="_blank" aria-label="link to solana oficial page">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716748521/Solana_rctkla.png"
            alt="Vintage Solana logo stickers"
            class="w-[6.3vw] absolute z-30 top-[5vw] right-[6.3vw]"
          />
        </a>

        <a href="https://www.rust-lang.org/" target="_blank" aria-label="link to Rust official website">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716748521/Rust_eqvvrp.png"
            alt="Vintage Rust logo stickers"
            class="w-[6.5vw] absolute z-30 top-[12vw] right-[3.6vw] -rotate-[15deg]"
          />
        </a>

        <a href="https://github.com/coral-xyz/anchor" target="_blank" aria-label="link to CoinTelegraph">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716748521/Anchord_lq2jid.png"
            alt="Vintage Anchor logo stickers"
            class="w-[6.5vw] absolute z-30 top-[11vw] right-[12.3vw] rotate-[15deg]"
          />
        </a>

        <a href="https://discord.com/invite/sbjg5YvYfM" target="_blank" arial-label="Solana Cookbook link">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716748521/Post-it_ity4kn.png"
            alt="Vintage post-it purple message"
            class="w-[7.5vw] absolute z-30 top-[3vw] right-[19vw] rotate-[15deg]"
          />
        </a>

        <!-- PIN -->
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
          alt="Vintage cork pin"
          class="w-[1.5vw] absolute z-30 top-[12.5vw] right-[6.4vw] -rotate-[15deg]"
        />

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
          alt="Vintage cork pin"
          class="w-[1.5vw] absolute z-30 top-[5.2vw] right-[8.6vw] -rotate-[15deg]"
        />

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
          alt="Vintage cork pin"
          class="w-[1.5vw] absolute z-30 top-[11.3vw] right-[14.2vw] -rotate-[15deg]"
        />

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705260583/Pin2_zcum7b.png"
          alt="Vintage cork pin"
          class="w-[1.5vw] absolute z-30 top-[3.3vw] right-[21.3vw] -rotate-[15deg]"
        />
      </div>

      <div id="main-art-welcome" class="absolute w-[30vw] right-[34.5vw] bottom-[47.5vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704143728/Small_Sign_qgu8np.png"
          alt="Vintage welcome bootcamp painting pixel art"
          class="w-[30vw]"
        />

        <div class="absolute top-[3vw] w-[30vw] -left-[0.2vw] flex justify-center bp-font-retro-computer">
          <div class="relative">
            <h2 class="text-[1.1vw] text-black">
              Bienvenido al Heavy Duty Camp
            </h2>
          </div>
        </div>

      </div>

      <div id="desktop-table" class="absolute bottom-[0vw] h-[23.5vw] w-[100vw] overflow-hidden">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
          alt="Desktop wood table pixel art"
          class="absolute w-[65vw] "
        />
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
          alt="Desktop wood table pixel art"
          class="absolute w-[65vw] right-0"
        />
      </div>

      <div id="game-controller" class="absolute bottom-[11vw] left-[27.4vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704136206/Game_qd0yag.png"
          alt="Vintage game controller pixel art"
          class="w-[10vw]"
        />
      </div>

      <div id="ashtray" class="absolute bottom-[7vw] left-[15.4vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704465247/Ashtray_2_y7wyub.png"
          alt="Vintage ashtray pixel art"
          class="w-[7vw]"
        />
      </div>

      <div id="bookshelf" class="absolute bottom-[19vw] -left-[15vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704138687/Books_Shell_1_q13cdi.png"
          alt="Vintage bookshelf pixel art"
          class="w-[40vw]"
        />
      </div>

      <div id="bookshelf-books-down" class="absolute bottom-[17.2vw] left-[2.5vw] w-[6vw] h-[12.5vw]">
        <img  
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Yellow_Simple_Book__xl7bko.png"
          alt="Vintage yellow book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] -left-[0.6vw]"
        />  
        <img  
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/White_Simple_Book__qqytug.png"
          alt="Vintage white book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[1vw]"
        />
        <img  
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Blue_Simple_Book__foovlc.png"
          alt="Vintage blue book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[3vw]"
        />
        <img  
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Green_Simple_Book_lcseet.png"
          alt="Vintage green book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[5vw]"
        />
        <img  
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Purple_Simple_Book_apk2zp.png"
          alt="Vintage purple book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[7vw]"
        />
        <img  
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Yellow_Simple_Book__xl7bko.png"
          alt="Vintage yellow book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[9vw]"
        />  
        <img  
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Red_Simple_Book__fwzsq5.png"
          alt="Vintage red book pixel art"
          class="w-[1.95vw] absolute z-10 top-[0vw] left-[11vw]"
        />        
      </div>

      <!-- <div id="bookshelf-books-up" class="absolute bottom-[31.5vw] left-[2.5vw] w-[6vw] h-[12.5vw]">
        <a href="https://www.soldev.app/" target="_blank" >
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704289333/Blue_Book_qogwrt.png"
            alt="Vintage blue book pixel art"
            class="w-[3vw] absolute z-10 top-[0vw]"
          />
        </a>
        <a href="https://www.soldev.app/" target="_blank" >
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704289333/Red_Book_ui9oqa.png"
            alt="Vintage red book pixel art"
            class="w-[2.7vw] absolute z-10 left-[1.7vw] top-[0.95vw]"
          />
        </a>
        <a href="https://www.soldev.app/" target="_blank" >
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704289332/Green_Book_wfxtwg.png"
            alt="Vintage green book pixel art"
            class="w-[2.9vw] absolute z-10 left-[3.3vw] top-[0.2vw]"
          />
        </a>
        <a href="https://www.soldev.app/" target="_blank" >
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704289332/Pink_Book_wuxdpf.png"
            alt="Vintage green book pixel art"
            class="w-[2.8vw] absolute z-10 left-[5vw] top-[0.55vw]"
          />        
        </a>
      </div> -->

      <div id="terms-and-policies" class="absolute bottom-[31vw] left-[2.5vw] z-20 bp-font-retro-computer">
        <a href="https://solanaspain.dev/assets/privacy_policies.pdf" target="_blank" aria-label="privacy policies">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705447193/Pp_Book_1_u9q485.png"
            alt="Privacy Politics book pixel art"
            class="w-[16vw] absolute -top-[2.1vw] left-[0.4vw]"
          />
          <p class="absolute top-[0.5vw] left-[1.3vw] text-[0.58vw]">
            Politicas de privacidad
          </p>
        </a>
        <a href="https://solanaspain.dev/assets/terms_and_conditions.pdf" target="_blank" aria-label="privacy policies">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705446722/Tc_Book_1_c3w8cr.png"
            alt="Terms and conditions book pixel art"
            class="w-[16vw]"
          />
          <p class="absolute top-[2.6vw] left-[1vw] text-[0.6vw]">
            Terminos y condiciones
          </p>
        </a>  
      </div>

      <div id="funko-builder" class="absolute bottom-[35.4vw] left-[8vw] z-[50]">
        <a href="https://heavyduty.builders" target="_blank">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704138873/Builder_l1fch8.png"
            alt="Vintage Bob funko builder pixel art"
            class="w-[6vw]"
          />
        </a>
      </div>

      <div id="red-backpack" class="absolute bottom-[18.6vw] left-[19vw] z-[14]">
        <a href="https://backpack.app/" target="_blank" aria-label="Link to Backpack official website">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/v1705699000/Back-pack_l5p1nc.png"
            alt="Vintage backpack red pixel art"
            class="w-[14vw]"
          />
        </a>
      </div>

      <div id="lamp" class="absolute bottom-[5.5vw] left-[0.5vw] z-10">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704141231/Lamp_m1fus3.png"
          alt="Vintage  lamp with light pixel art"
          class="w-[28vw]"
        />
      </div>

      <div id="computer-speaker-left" class="absolute bottom-[19.65vw] left-[31.2vw] z-[15]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
          alt="Vintage computer left speaker pixel art"
          class="w-[8vw]"
        />
      </div>

      <div id="computer-monitor" class="absolute bottom-[13.8vw] left-[36vw] z-[16]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
          alt="Vintage computer monitor pixel art"
          class="w-[35vw]"
        />

        <div class="absolute top-[9vw] flex justify-center bp-font-retro-computer">
          <div class="text-left relative left-[5.5vw] max-w-[16vw]">
            <h2 class="text-[1.4vw] text-[#00E805]">
              > {{introText}} <span class="terminal-cursor-desktop"></span>
            </h2>
            @if (true) {
              <button class="bg-[#00E805] mt-[1.5vw] px-[1vw] py-[0.5vw] text-black text-[1.1vw]" aria-label="Botón de registro">
                <a  href="https://forms.gle/tUYkF43kQ6pQF9eU9" target="_blank">
                  REGISTRARME
                </a>
              </button>
            }
          </div>
        </div>
      </div>

      <div id="computer-speaker-right" class="absolute bottom-[19.65vw] right-[28.5vw] z-[17]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
          alt="Vintage computer right speaker pixel art"
          class="w-[8vw]"
        />
      </div>

      <div id="computer-keyboard" class="absolute bottom-[3.6vw] left-[36vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1702928472/keyboard_r0owce.png"
          alt="Vintage computer keyboard pixel art"
          class="w-[30vw] -rotate-1"
        />
      </div>

      <div id="drink-can-one" class="absolute bottom-[19.5vw] right-[17vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704394177/Beer_1_oue2db.png"
          alt="Vintage drink can pixel art"
          class="w-[4vw]"
        />
      </div>

      <div id="drink-can-two" class="absolute bottom-[18.5vw] right-[15vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704394177/Beer_1_oue2db.png"
          alt="Vintage drink can pixel art"
          class="w-[4vw]"
        />
      </div>


      <div id="funko-builder-girl" class="absolute bottom-[14.5vw] right-[7vw] z-[50]">
        <a href="https://heavyduty.builders" target="_blank">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716676126/Alice_Builder_V2_iazyzw.png"
            alt="Vintage Alice funko builder pixel art"
            class="w-[7.5vw]"
          />
        </a>
      </div>


      <div id="cup-coffee" class="absolute bottom-[6.5vw] right-[6vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703957915/Smoke_Dark_hzsnah.gif"
          alt="Vintage coffee smoke gif pixel art"
          class="w-[6vw] absolute top-[-3.3vw] right-[0.3vw] opacity-25"
        />
      
        <a href="https://solana.com" target="_blank">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704136782/Coffee_1_f1esg4.png"
            alt="Vintage solana cup of coffee pixel art"
            class="w-[6vw]"
          />
        </a>  
      </div>

      <div id="computer-mousepad" class="absolute bottom-[7vw] right-[18.2vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703956344/Mousepad_ua5xde.png"
          alt="Heavy duty builders mousepad pixel art"
          class="w-[15vw] -rotate-3"
        />

        <a href="https://heavyduty.builders" target="_blank">
          <div class="w-[3vw] h-[1.3vw] absolute right-[1.5vw] bottom-[1.4vw] -rotate-[2deg] opacity-0"></div>
        </a>
      </div>

      <div id="computer-mouse" class="absolute bottom-[9vw] right-[23.5vw] z-[18]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704394177/Desktop_Mouse_1_wrdno3.png"
          alt="Vintage computer mouse pixel art"
          class="w-[11vw] -rotate-3"
        />
      </div>
      
    </div>
  `,
  standalone: true,
  styles: []
})
export class AppDesktopComponent { 

  introText = INTRO_TEXT;
  successText = SUCCESS_INSCRIPTION_TEXT;
}

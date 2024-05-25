import { Component, Input } from '@angular/core';
import { INTRO_TEXT, SUCCESS_INSCRIPTION_TEXT } from '../utils';

@Component({
  selector: 'bootcamp-app-mobile-component',
  template: `
    <div id="mobile-main-frame" class="relative overflow-x-hidden">
      <div id="main-art-welcome" class="relative flex justify-center top-[6vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704465536/Sign_yicmjg.png"
          alt="Vintage welcome bootcamp painting pixel art"
          class="w-[90vw]"
        />

        <div class="absolute text-center bp-font-retro-computer">
          <h2 class="text-[3.2vw] mt-[8vw] mb-[4vw]">
            Bienvenido al Heavy Duty Camp:
          </h2>
          <h1 class="text-[4.5vw] w-[72vw]">
            {{introText}}
          </h1>
          <div class="mt-[4vw]">
            <button class="bg-[#6A4CB1] px-[4vw] py-[1.5vw] text-white text-[3.5vw] border-black border-[0.5vw]" aria-label="Botón de registro">
              <a href="#">
                REGISTRARME
              </a>  
            </button>
          </div>
        </div>

      </div>

      <div id="official-calendar" class="relative flex justify-center mt-[13vw]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716673552/Poster_Junio_stjug5.png"
          alt="Vintage calendar june pixel art"
          class="relative w-[80vw] left-[1vw]"
        />

        <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Solana+Boot+Camp+Espa%C3%B1a&details=El+primer+boot+camp+de+solana+en+espa%C3%B1a&location=Online&dates=20240205T200000Z%2F20240205T220000Z" alt="Add event to Google calendar" target="_blank">
          <div class="add-calendar-event" class="absolute top-[56.5vw] left-[27vw] w-[8.5vw] h-[7.5vw]"></div>
        </a>

        <a href="https://solana.com" target="_blank">
          <div class="absolute opacity-0 w-[65.5vw] h-[26vw] z-40 top-[9.6vw] left-[17.6vw]"></div>
        </a>
      </div>

      <div id="partners-cork" class="relative flex justify-center mt-[5vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Cork_2_jwnr5s.png"
          alt="Vintage cork with partners stickers"
          class="w-[90vw] relative"
        />

        <a href="https://www.solanahub.app/" target="_blank" aria-label="link to solana hub">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705422202/Colaboradores_ca9jpy.png"
            alt="Vintage collaborators title stickers"
            class="w-[55vw] absolute z-30 top-[4.5vw] right-[11vw]"
          />
        </a>

        <a href="https://www.solanahub.app/" target="_blank" aria-label="link to solana hub">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Solana_Hub_j84bqc.png"
            alt="Vintage Solana Hub partners stickers"
            class="w-[22vw] absolute z-30 top-[15vw] right-[28vw]"
          />
        </a>

        <a href="https://shyft.to/" target="_blank" aria-label="link to Shyft RPC">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Shyft_nfqbba.png"
            alt="Vintage Shyft partners stickers"
            class="w-[20vw] absolute z-30 top-[32vw] right-[10vw] -rotate-[15deg]"
          />
        </a>

        <a href="https://cointelegraph.com/" target="_blank" aria-label="link to CoinTelegraph">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705260583/Cointelegraph_rrsref.png"
            alt="Vintage Cointelegraph partners stickers"
            class="w-[24vw] absolute z-30 top-[33vw] right-[43vw] rotate-[15deg]"
          />
        </a>

        <a href="https://solanacookbook.com/" target="_blank" arial-label="Solana Cookbook link">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705260583/Post-it_jcuxkl.png"
            alt="Vintage post-it purple message"
            class="w-[24vw] absolute z-30 top-[8vw] right-[69vw] rotate-[15deg]"
          />
        </a>

        <!-- PINs -->
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
          alt="Vintage cork pin"
          class="w-[4vw] absolute z-30 top-[32vw] right-[19.5vw] -rotate-[15deg]"
        />

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
          alt="Vintage cork pin"
          class="w-[4vw] absolute z-30 top-[14vw] right-[36.5vw] -rotate-[15deg]"
        />

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
          alt="Vintage cork pin"
          class="w-[4vw] absolute z-30 top-[34.5vw] right-[50.5vw] -rotate-[15deg]"
        />
        
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705260583/Pin2_zcum7b.png"
          alt="Vintage cork pin"
          class="w-[4vw] absolute z-30 top-[8.5vw] right-[77.5vw] -rotate-[15deg]"
        />
      </div>

      <div class="relative flex justify-center mt-[6vw]">

        <div id="desktop-table" class="absolute top-[54.1vw]">
          <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1702928477/table_xwe3xs.png"
          alt="Desktop wood table pixel art"
          class="w-[99.9vw] h-[60vw]"
          />
        </div>

        <div id="wall-shadow" class="absolute top-[23.4vw]  z-10">
          <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704135252/shadow_ztxbuz.png"
              alt="Shadow on the wall pixel art"
              class="w-[100vw]"
            />
        </div> 

        <div id="computer-speaker-left" class="absolute left-[5vw] bottom-[15vw]  z-10">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
            alt="Vintage computer left speaker pixel art"
            class="w-[18vw]"
          />
        </div>  

        <div id="computer-monitor" class="z-20 relative mt-[0.4vw]">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
            alt="Vintage computer monitor pixel art"
            class="w-[85vw] ml-[16.5vw]"
          />

          <div class="absolute top-[22vw] w-[100vw] flex justify-center bp-font-retro-computer">
            <div class="text-left relative -left-[1vw] w-[34vw]">
              <h2 class="text-[3vw] text-[#00E805]">
                > {{introText}} <span class="terminal-cursor-mobile"></span>
              </h2>
              @if (!isFromEmail) {
              <button class="bg-[#00E805] mt-[4vw] px-[4vw] py-[1.5vw] text-black text-[2.5vw] border-black border-[0.5vw]" aria-label="Botón de registro">
                <a data-formkit-toggle="ec6cdd2569" href="https://discoprotocol.ck.page/ec6cdd2569">
                  REGISTRARME
                </a>
              </button>
              }
            </div>
          </div>
        </div>

        <div id="computer-speaker-right" class="absolute right-[0vw] bottom-[15vw] z-30">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
            alt="Vintage computer right speaker pixel art"
            class="w-[18vw]"
          />
        </div>
      </div>

      <div class="relative">
        <div id="computer-keyboard" class="relative mt-[2vw]">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1702928472/keyboard_r0owce.png"
            alt="Vintage computer keyboard pixel art"
            class="relative w-[70vw] rotate-3 left-[1vw]"
          />
        </div>

        <div id="cup-coffee" class="absolute -top-[15.5vw] right-[1vw] z-30">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703957915/Smoke_Dark_hzsnah.gif"
            alt="Vintage coffee smoke gif pixel art"
            class="w-[11vw] absolute top-[-6.3vw] right-[0.3vw] opacity-25"
          />
        
          <a href="https://solana.com" target="_blank">
            <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704136782/Coffee_1_f1esg4.png"
              alt="Vintage solana cup of coffee pixel art"
              class="w-[11vw]"
            />
          </a>  
        </div>

        <div id="funko-builder-girl" class="absolute -top-[21.5vw] -left-[1vw] z-[70]">
          <a href="https://heavyduty.builders" target="_blank">
            <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716676126/Alice_Builder_V2_iazyzw.png"
              alt="Vintage Alice funko builder pixel art"
              class="w-[19vw]"
            />
          </a>
        </div>

        <div id="computer-mousepad" class="absolute bottom-[4vw] -right-[1.5vw]">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703956344/Mousepad_ua5xde.png"
            alt="Heavy duty builders mousepad pixel art"
            class="w-[33vw] -rotate-1"
          />

          <a href="https://heavyduty.builders" target="_blank">
            <div class="w-[7vw] h-[3vw] absolute right-[3vw] bottom-[2.4vw] -rotate-[2deg] opacity-0"></div>
          </a>
        </div>
        <div id="computer-mouse" class="absolute bottom-[7vw] right-[8vw] z-20">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/v1704509525/Mobile_Mouse_fjeob2.png"
            alt="Vintage computer mouse pixel art"
            class="w-[20vw] -rotate-3"
          />
        </div>
      </div>

      <div class="relative mt-[10vw]">
        <div id="bookshelf" class="relative -left-[49.5vw] z-30 w-[130vw]">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704138687/Books_Shell_1_q13cdi.png"
            alt="Vintage bookshelf pixel art"
            class="w-[130vw]"
          />
        </div>

        <div id="bookshelf-books-up" class="absolute top-[36vw] left-[9vw] w-[50vw] h-[10vw] z-[60] bp-font-retro-computer">
          <a href="https://solanaspain.dev/assets/privacy_policies.pdf" target="_blank" aria-label="privacy policies">
            <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705447193/Pp_Book_1_u9q485.png"
              alt="Vintage drink can pixel art"
              class="w-[50vw] absolute -top-[6vw] left-[1.2vw]"
            />
            <p class="absolute top-[2vw] ml-[4vw] text-[1.8vw]">
              Politicas de privacidad
            </p>
          </a>
          <a href="https://solanaspain.dev/assets/terms_and_conditions.pdf" target="_blank" aria-label="privacy policies">
            <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705446722/Tc_Book_1_c3w8cr.png"
              alt="Vintage drink can pixel art"
              class="w-[50vw]"
            />
            <p class="absolute top-[8.3vw] ml-[3.5vw] text-[1.8vw]">
              Terminos y condiciones
            </p>
          </a>  
        </div>

        <!-- <div id="bookshelf-books-up" class="absolute top-[6vw] left-[7vw] w-[40vw] h-[12.5vw] z-40">
          <a href="https://www.soldev.app/" target="_blank" >
            <img  
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704289333/Blue_Book_qogwrt.png"
              alt="Vintage blue book pixel art"
              class="w-[7.3vw] absolute z-10 top-[0vw]"
            />
          </a>
          <a href="https://www.soldev.app/" target="_blank" >
            <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704289333/Red_Book_ui9oqa.png"
              alt="Vintage red book pixel art"
              class="w-[6.7vw] absolute z-10 left-[4.5vw] top-[1.8vw]"
            />
          </a>
          <a href="https://www.soldev.app/" target="_blank" >
            <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704289332/Green_Book_wfxtwg.png"
              alt="Vintage green book pixel art"
              class="w-[7.1vw] absolute z-10 left-[9vw] top-[0.3vw]"
            />
          </a>
          <a href="https://www.soldev.app/" target="_blank" >
            <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704289332/Pink_Book_wuxdpf.png"
              alt="Vintage green book pixel art"
              class="w-[7vw] absolute z-10 left-[13.5vw] top-[0.7vw]"
            />        
          </a>
        </div> -->

        <div id="bookshelf-books-down" class="absolute bottom-[0vw] left-[7vw] w-[6vw] h-[34vw] z-[30]">
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Red_Simple_Book__fwzsq5.png"
            alt="Vintage yellow book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] -left-[1.1vw]"
          />  
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/White_Simple_Book__qqytug.png"
            alt="Vintage white book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] left-[3.6vw]"
          />
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Blue_Simple_Book__foovlc.png"
            alt="Vintage blue book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] left-[8.6vw]"
          />
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Green_Simple_Book_lcseet.png"
            alt="Vintage green book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] left-[13vw]"
          />
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Purple_Simple_Book_apk2zp.png"
            alt="Vintage purple book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] left-[17.5vw]"
          />
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Yellow_Simple_Book__xl7bko.png"
            alt="Vintage yellow book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] left-[22vw]"
          />  
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Red_Simple_Book__fwzsq5.png"
            alt="Vintage red book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] left-[26.5vw]"
          />
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Blue_Simple_Book__foovlc.png"
            alt="Vintage blue book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] left-[31.6vw]"
          />
          <img  
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704402554/Green_Simple_Book_lcseet.png"
            alt="Vintage green book pixel art"
            class="w-[7.4vw] absolute z-10 top-[0vw] left-[36.5vw]"
          />
        </div>

        <div id="wall-shadow-desktop" class="absolute w-[100vw] h-[90vw] bg-black -top-[7.2vw] opacity-30"></div>

        <div id="wall-shadow-room" class="absolute bottom-[8vw] -right-[3vw]  z-10">
          <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704135252/shadow_ztxbuz.png"
              alt="Shadow on the wall pixel art"
              class="w-[100vw]"
            />
        </div> 

        <div id="red-backpack" class="absolute z-40 -right-[4vw] bottom-0">
          <a href="https://backpack.app/" target="_blank" aria-label="Link to Backpack official website">
            <img 
              src="https://res.cloudinary.com/andresmgsl/image/upload/v1705699000/Back-pack_l5p1nc.png"
              alt="Vintage backpack red pixel art"
              class="w-[35vw]"
            />
          </a>  
        </div>

        <div id="room-floor" class="absolute w-[100vw] bg-[#faebd7] h-[8.5vw] bottom-[0vw]"></div>
      </div>

      <div id="funko-builder" class="absolute bottom-[54vw] left-[26vw] z-[70]">
        <a href="https://heavyduty.builders" target="_blank">
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704138873/Builder_l1fch8.png"
            alt="Vintage funko builder pixel art"
            class="w-[20vw]"
          />
        </a>
      </div>


    </div>
  `,
  standalone: true,
  styles: []
})
export class AppMobileComponent {
  @Input() isFromEmail = false;

  introText = INTRO_TEXT;
  successText = SUCCESS_INSCRIPTION_TEXT;
}

import { Component } from '@angular/core';
import { INTRO_TEXT, SUCCESS_INSCRIPTION_TEXT } from '../utils';
import { ShowOnHoverDirective } from '../utils/hover.directive';

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

        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Heavy+Duty+Camp&details=Heavy+Duty+Camp+te+explica+acerca+de+Solana&location=Online&dates=20240617T180000Z%2F20240617T190000Z"
          alt="Add event to Google calendar"
          target="_blank"
        >
          <div
            class="add-calendar-event"
            class="absolute top-[21.2vw] left-[2.3vw] w-[2.6vw] h-[2.55vw]"
          ></div>
        </a>

        <a href="https://solana.com" target="_blank">
          <div
            class="absolute opacity-0 w-[19.7vw] h-[7.8vw] z-40 top-[2.9vw] left-[1.9vw]"
          ></div>
        </a>
      </div>

      <div class="absolute right-[28.5vw]  bottom-[38.5vw] z-[100]">
        <a
          href="https://discord.com/invite/sbjg5YvYfM"
          target="_blank"
          arial-label="Heavy Duty Builders discord link"
          bootcampShowOnHover
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716748521/Post-it_ity4kn.png"
            alt="Vintage post-it purple message"
            class="w-[7.5vw] z-30 top-[3vw] right-[19vw] rotate-[15deg]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717014833/Post-it-hover._png_q0qzzs.png"
            alt="Vintage post-it purple message hover"
            class="w-[7.5vw] absolute z-30 top-[0.2vw] opacity-0 rotate-[15deg]"
          />
        </a>
      </div>

      <div id="resources-cork" class="absolute left-[1vw] bottom-[35.7vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Cork_2_jwnr5s.png"
          alt="Vintage cork with resources stickers"
          class="w-[32vw] relative"
        />

        <a href="#" aria-label="collaborators text">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705422202/Colaboradores_ca9jpy.png"
            alt="Vintage resources title stickers"
            class="w-[16.5vw] absolute z-30 top-[1.8vw] right-[7vw]"
          />
        </a>

        <!-- Solana -->
        <div class="absolute z-30 top-[5vw] right-[4vw]">
          <a
            href="https://solana.com/"
            target="_blank"
            aria-label="link to solana oficial page"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716748521/Solana_rctkla.png"
              alt="Vintage Solana logo stickers"
              class="w-[6.3vw] realtive z-30 right-[6.3vw]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717014249/Solana_Hover_jirt5k.png"
              alt="Vintage Solana logo stickers hover"
              class="w-[6.3vw] absolute top-[0vw] -rotate-[10deg] opacity-0"
            />
          </a>

          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
            alt="Vintage cork pin"
            class="w-[1.5vw] absolute top-[0.5vw] right-[2.3vw] -rotate-[15deg]"
          />
        </div>

        <!-- Solana FM  -->
        <div class="absolute z-30 top-[12vw] right-[2vw]">
          <a
            href="https://solana.fm/"
            target="_blank"
            aria-label="link to SolanaFM official website"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717679878/Solana_FM_rkwx20.png"
              alt="Vintage SolanaFM logo stickers"
              class="w-[4.5vw] relative -rotate-[15deg]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717679878/Solana_FM_Hover_gruima.png"
              alt="Vintage SolanaFM logo stickers hover"
              class="w-[4.5vw] absolute z-30 top-[0vw] right-[0.8vw] rotate-[15deg] opacity-0"
            />
          </a>
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
            alt="Vintage cork pin"
            class="w-[1.5vw] absolute z-30 top-[0vw] right-[1.8vw] -rotate-[15deg]"
          />
        </div>

        <!-- Shyft  -->
        <div class="absolute z-30 top-[12vw] right-[15vw]">
          <a
            href="https://shyft.to/"
            target="_blank"
            aria-label="link to shyft official website"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Shyft_nfqbba.png"
              alt="Vintage Shyft logo stickers"
              class="w-[5.7vw] relative rotate-[15deg]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717679878/Shyft_Hover_hipjxv.png"
              alt="Vintage Shyft logo stickers hover"
              class="w-[5.7vw] absolute top-[0vw] -right-[1vw] -rotate-[15deg] opacity-0"
            />
          </a>

          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
            alt="Vintage cork pin"
            class="w-[1.5vw] absolute z-30 top-[0.3vw] right-[1.4vw] -rotate-[15deg]"
          />
        </div>

        <!-- Rug Radio ES  -->
        <div class="absolute z-30 bottom-[3vw] right-[8vw]">
          <a
            href="https://twitter.com/RugRadioES"
            target="_blank"
            aria-label="link to Rug radio ES official X account"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1718484312/RugRadio_qwrrh7.png"
              alt="Vintage Rug Radio logo stickers"
              class="w-[5.3vw] relative -rotate-[0deg]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1718484312/RugRadio_Hover_dxafju.png"
              alt="Vintage Rug Radio logo stickers hover"
              class="w-[5.3vw] absolute top-[0vw] -right-[0.3vw] -rotate-[10deg] opacity-0"
            />
          </a>

          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
            alt="Vintage cork pin"
            class="w-[1.5vw] absolute z-30 top-[0.3vw] right-[1.8vw] -rotate-[15deg]"
          />
        </div>

        <!-- Aqua Save  -->
        <div class="absolute absolute z-30 top-[6vw] left-[4.5vw]">
          <a
            href="https://aquasave.io/"
            target="_blank"
            arial-label="Aqua Save website link"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1718226360/Aquasave_cnnlmu.png"
              alt="Vintage Aqua Save purple message"
              class="w-[5.5vw] relative rotate-[15deg]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1718226360/Aquasave_Hover_ui252o.png"
              alt="Vintage Aqua Save purple message hover"
              class="w-[5.5vw] absolute z-30 top-[0vw] -right-[1.1vw] opacity-0 -rotate-[5deg]"
            />
          </a>

          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705260583/Pin2_zcum7b.png"
            alt="Vintage cork pin"
            class="w-[1.5vw] absolute z-30 top-[0vw] right-[1.1vw] -rotate-[15deg]"
          />
        </div>

        <!-- Cryptoconexion  -->
        <div class="absolute absolute z-30 top-[5vw] left-[13.2vw]">
          <a
            href="https://cryptoconexion.com/"
            target="_blank"
            arial-label="Crypto Conexion website link"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1718473550/Cryptoconexion_lstp2z.png"
              alt="Vintage Crypto conexion purple message"
              class="w-[5.5vw] relative rotate-[10deg]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1718473550/Cryptoconexion_hover_f8thoc.png"
              alt="Vintage Crypto conexion purple message hover"
              class="w-[5.5vw] absolute z-30 top-[0vw] -right-[0.5vw] opacity-0 -rotate-[5deg]"
            />
          </a>

          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705260583/Pin2_zcum7b.png"
            alt="Vintage cork pin"
            class="w-[1.5vw] absolute z-30 top-[0vw] right-[2vw] -rotate-[15deg]"
          />
        </div>

      </div>

      <div
        id="main-art-welcome"
        class="absolute w-[30vw] right-[34.5vw] bottom-[47.5vw]"
      >
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704143728/Small_Sign_qgu8np.png"
          alt="Vintage welcome bootcamp painting pixel art"
          class="w-[30vw]"
        />

        <div
          class="absolute top-[3vw] w-[30vw] -left-[0.2vw] flex justify-center bp-font-retro-computer"
        >
          <div class="relative">
            <h2 class="text-[1.1vw] text-black">
              Bienvenido al Heavy Duty Camp
            </h2>
          </div>
        </div>
      </div>

      <div
        id="desktop-table"
        class="absolute bottom-[0vw] h-[23.5vw] w-[100vw] overflow-hidden"
      >
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

      <div id="bookshelf" class="absolute bottom-[19vw] -left-[15vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704138687/Books_Shell_1_q13cdi.png"
          alt="Vintage bookshelf pixel art"
          class="w-[40vw]"
        />
      </div>

      <div
        id="bookshelf-books-down"
        class="absolute bottom-[17.2vw] left-[2.5vw] w-[6vw] h-[12.5vw]"
      >
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

      <div
        id="terms-and-policies"
        class="absolute bottom-[31vw] left-[2.5vw] z-20 bp-font-retro-computer"
      >
        <a
          href="https://solanaspain.dev/assets/privacy_policies.pdf"
          target="_blank"
          aria-label="privacy policies"
          bootcampShowOnHover
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705447193/Pp_Book_1_u9q485.png"
            alt="Privacy Politics book pixel art"
            class="w-[16vw] absolute -top-[2.1vw] left-[0.4vw] z-[80]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717013708/libro_1_awjcp4.png"
            alt="Privacy Politics book pixel art hover"
            class="w-[16vw] absolute -top-[2vw] left-[0.5vw] z-[90] opacity-0"
          />
          <p class="absolute top-[0.5vw] left-[1.3vw] text-[0.58vw] z-[95]">
            Politicas de privacidad
          </p>
        </a>
        <a
          href="https://solanaspain.dev/assets/terms_and_conditions.pdf"
          target="_blank"
          aria-label="privacy policies"
          bootcampShowOnHover
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705446722/Tc_Book_1_c3w8cr.png"
            alt="Terms and conditions book pixel art"
            class="w-[16vw]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716763632/TC_Book_Hover_dqky3v.png"
            alt="Terms and conditions book pixel art hover"
            class="absolute top-[0vw] left-[0.1vw] w-[16vw] opacity-0"
          />
          <p class="absolute top-[2.6vw] left-[1vw] text-[0.6vw]">
            Terminos y condiciones
          </p>
        </a>
      </div>

      <div
        id="funko-builder"
        class="absolute bottom-[35.4vw] left-[6.5vw] z-[50]"
      >
        <a
          href="https://heavyduty.builders"
          target="_blank"
          bootcampShowOnHover
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716896549/Builder_V2_jslxvj.png"
            alt="Vintage Bob funko builder pixel art"
            class="w-[6vw]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716896550/Builder_Hover_sszl8v.png"
            alt="Vintage Bob funko builder pixel art hover"
            class="absolute top-[0vw] w-[6vw] opacity-0"
          />
        </a>
      </div>

      <div
        id="red-backpack"
        class="absolute bottom-[18.6vw] left-[19vw] z-[14]"
      >
        <a
          href="https://backpack.app/"
          target="_blank"
          aria-label="Link to Backpack official website"
          bootcampShowOnHover
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705699000/Back-pack_l5p1nc.png"
            alt="Vintage backpack red pixel art"
            class="w-[14vw]"
          />
          <img
            id="red-backpack-image"
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717014249/Back-pack-hover_tbfche.png"
            alt="Vintage backpack red pixel art hover"
            class="absolute w-[14vw] top-[0vw] opacity-0"
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

      <div
        id="computer-speaker-left"
        class="absolute bottom-[19.65vw] left-[31.2vw] z-[15]"
      >
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703956343/Stereo_c3sfcm.png"
          alt="Vintage computer left speaker pixel art"
          class="w-[8vw]"
        />
      </div>

      <div
        id="computer-monitor"
        class="absolute bottom-[13.8vw] left-[36vw] z-[16]"
      >
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1702928464/screen_vpremv.png"
          alt="Vintage computer monitor pixel art"
          class="w-[35vw]"
        />

        <div
          class="absolute top-[9vw] flex justify-center bp-font-retro-computer"
        >
          <div class="text-left relative left-[5.5vw] max-w-[16vw]">
            <h2 class="text-[1.4vw] text-[#00E805]">
              > {{ introText }} <span class="terminal-cursor-desktop"></span>
            </h2>
            @if (true) {
            <button
              class="bg-[#00E805] mt-[1.5vw] px-[1vw] py-[0.5vw] text-black text-[1.1vw]"
              aria-label="Botón de registro"
            >
              <a href="https://forms.gle/tUYkF43kQ6pQF9eU9" target="_blank">
                REGISTRARME
              </a>
            </button>
            }
          </div>
        </div>
      </div>

      <div
        id="computer-speaker-right"
        class="absolute bottom-[19.65vw] right-[28.5vw] z-[17]"
      >
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

      <div id="resources-books" class="absolute bottom-[16.5vw] right-[7vw]">
        <div class="relative top-[4vw] z-[20] -left-[0.3vw">
          <a
            href="https://www.rust-lang.org/"
            target="_blank"
            aria-label="Link to Backpack official website"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/v1717679736/Rust_Book_e0hrhf.png"
              alt="Vintage backpack red pixel art"
              class="w-[14vw]"
            />
            <img
              id="red-backpack-image"
              src="https://res.cloudinary.com/andresmgsl/image/upload/v1717679736/Rust_Book_Hover_qnimjy.png"
              alt="Vintage backpack red pixel art hover"
              class="absolute w-[14vw] top-[0.1vw] opacity-0"
            />
          </a>
        </div>

        <div class="relative top-[1.9vw] z-[10] left-[0.3vw]">
          <a
            href="https://github.com/coral-xyz/anchor"
            target="_blank"
            aria-label="Link to Backpack official website"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717679737/Anchor_Book_wu4kra.png"
              alt="Vintage backpack red pixel art"
              class="w-[14vw]"
            />
            <img
              id="red-backpack-image"
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717679736/Anchor_Book_Hover_ifekxq.png"
              alt="Vintage backpack red pixel art hover"
              class="absolute w-[14vw] top-[0.1vw] opacity-0"
            />
          </a>
        </div>

        <div class="relative">
          <a
            href="https://solanacookbook.com/"
            target="_blank"
            aria-label="Link to Backpack official website"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717679736/Solana_Book_liou5a.png"
              alt="Vintage backpack red pixel art"
              class="w-[14vw]"
            />
            <img
              id="red-backpack-image"
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717679736/Solana_Book_Hover_ex3feg.png"
              alt="Vintage backpack red pixel art hover"
              class="absolute w-[14vw] top-[0.1vw] opacity-0"
            />
          </a>
        </div>
      </div>

      <div
        id="funko-builder-girl"
        class="absolute bottom-[7vw] left-[13.4vw] z-[50]"
      >
        <a
          href="https://heavyduty.builders"
          target="_blank"
          bootcampShowOnHover
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716910387/Alice_V2_1_rxxbc1.png"
            alt="Vintage Alice funko builder pixel art"
            class="w-[9.7vw]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716896550/Alice_Hover_zohjwy.png"
            alt="Vintage Alice funko builder pixel art hover"
            class="absolute top-[0vw] w-[9.7vw] opacity-0"
          />
        </a>
      </div>

      <div id="cup-coffee" class="absolute bottom-[6.5vw] right-[6vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703957915/Smoke_Dark_hzsnah.gif"
          alt="Vintage coffee smoke gif pixel art"
          class="w-[6vw] absolute top-[-3.3vw] right-[0.3vw] opacity-25 z-[100]"
        />

        <a href="https://solana.com" target="_blank" bootcampShowOnHover>
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704136782/Coffee_1_f1esg4.png"
            alt="Vintage solana cup of coffee pixel art"
            class="w-[6vw]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717014996/Coffee_Hover_ydchg9.png"
            alt="Vintage solana cup of coffee pixel art hover"
            class="absolute top-[0vw] w-[6vw] opacity-0"
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
          <div
            class="w-[3vw] h-[1.3vw] absolute right-[1.5vw] bottom-[1.4vw] -rotate-[2deg] opacity-0"
          ></div>
        </a>
      </div>

      <div
        id="computer-mouse"
        class="absolute bottom-[9vw] right-[23.5vw] z-[18]"
      >
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704394177/Desktop_Mouse_1_wrdno3.png"
          alt="Vintage computer mouse pixel art"
          class="w-[11vw] -rotate-3"
        />
      </div>
    </div>
  `,
  standalone: true,
  styles: [],
  imports: [ShowOnHoverDirective],
})
export class AppDesktopComponent {
  introText = INTRO_TEXT;
  successText = SUCCESS_INSCRIPTION_TEXT;
}

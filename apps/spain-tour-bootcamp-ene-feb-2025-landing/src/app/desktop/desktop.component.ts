import { Component } from '@angular/core';
import { INTRO_TEXT, SUCCESS_INSCRIPTION_TEXT } from '../utils';
import { ShowOnHoverDirective } from '../utils/hover.directive';

@Component({
  selector: 'bootcamp-app-desktop-component',
  template: `
    <div
      id="desktop-main-frame"
      class="relative bp-bg-wall flex flex-col justify-end"
    >
      <section class="relative w-[100vw] min-h-[35vw]">
        <div class="absolute top-[1vw] left-[39.6vw]">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923793/bootcamp-oct-2024/fame.png"
            alt="welcome sign"
            class="relative w-[25vw]"
          />

          <div
            class="absolute top-[2.2vw] w-[30vw] -left-[2.65vw] flex justify-center bp-font-retro-computer"
          >
            <div class="relative">
              <h2 class="text-[0.95vw] text-black">
                Bienvenido al Heavy Duty Camp
              </h2>
            </div>
          </div>
        </div>

        <div class="absolute right-[24.5vw] top-[10vw] z-[100]">
          <a
            href="https://discord.com/invite/sbjg5YvYfM"
            target="_blank"
            arial-label="Heavy Duty Builders discord link"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1732953302/bootcamp-ene-2025/Post-it-blue.png"
              alt="Vintage post-it purple message"
              class="w-[8.5vw] z-30 top-[3vw] right-[19vw] rotate-[15deg]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1732953302/bootcamp-ene-2025/Post-it-blue-hover.png"
              alt="Vintage post-it purple message hover"
              class="w-[8.5vw] absolute z-30 top-[-0.2vw]  opacity-0 rotate-[15deg]"
            />
          </a>
        </div>

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1732953123/bootcamp-ene-2025/IMG_2106.png"
          alt="calendar"
          class="absolute right-[2vw] top-[1.5vw] w-[20vw]"
        />

        <div class="relative w-[30vw] left-[5vw] top-[1.5vw] z-[100]">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923792/bootcamp-oct-2024/cork.png"
            alt="cork panel"
            class="absolute w-[100%]"
          />

          <a href="#" aria-label="collaborators text">
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705422202/Colaboradores_ca9jpy.png"
              alt="Vintage resources title stickers"
              class="w-[16.5vw] absolute z-30 top-[1.5vw] right-[7vw]"
            />
          </a>

          <!-- Solana -->
          <div class="absolute z-30 top-[6vw] right-[11vw]">
            <a
              href="https://solana.com/"
              target="_blank"
              aria-label="link to solana oficial page"
              bootcampShowOnHover
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1716748521/Solana_rctkla.png"
                alt="Vintage Solana logo stickers"
                class="w-[7.3vw] realtive z-30 right-[6.3vw]"
              />
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717014249/Solana_Hover_jirt5k.png"
                alt="Vintage Solana logo stickers hover"
                class="w-[7.3vw] absolute top-[0vw] -rotate-[10deg] opacity-0"
              />
            </a>

            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
              alt="Vintage cork pin"
              class="w-[1.5vw] absolute top-[0.5vw] right-[2.8vw] -rotate-[15deg]"
            />
          </div>

          <!-- Shyft  -->
          <div class="absolute z-30 top-[8vw] right-[21vw]">
            <a
              href="https://shyft.to/"
              target="_blank"
              aria-label="link to shyft official website"
              bootcampShowOnHover
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Shyft_nfqbba.png"
                alt="Vintage Shyft logo stickers"
                class="w-[6.3vw] relative rotate-[15deg]"
              />
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717679878/Shyft_Hover_hipjxv.png"
                alt="Vintage Shyft logo stickers hover"
                class="w-[6.3vw] absolute top-[0vw] -right-[1vw] -rotate-[15deg] opacity-0"
              />
            </a>

            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705184037/Pin_lsboby.png"
              alt="Vintage cork pin"
              class="w-[1.5vw] absolute z-30 top-[0.3vw] right-[1.7vw] -rotate-[15deg]"
            />
          </div>

          <!-- Solana FM  -->
          <!-- <div class="absolute z-30 top-[10vw] right-[7.5vw]">
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
          </div> -->

          <!-- Cryptoconexion  -->
          <!-- <div class="absolute z-30 top-[4.6vw] left-[3.2vw]">
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
          </div> -->
        </div>
      </section>

      <section class="relative w-[100vw] min-h-[15vw] overscroll-contain">
        <div
          id="red-backpack"
          class="absolute w-[13.5vw] top-[-14.5vw] left-[19.2vw] z-[100]"
        >
          <a
            href="https://backpack.app/"
            target="_blank"
            aria-label="Link to Backpack official website"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923820/bootcamp-oct-2024/web/backpack.png"
              alt="Vintage backpack red pixel art"
              class="w-[14vw]"
            />
            <img
              id="red-backpack-image"
              src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923820/bootcamp-oct-2024/web/backpack_hover.png"
              alt="Vintage backpack red pixel art hover"
              class="absolute w-[14vw] top-[0vw] opacity-0"
            />
          </a>
        </div>

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1726502940/bootcamp-oct-2024/book_shell.png"
          alt="book shell"
          class="absolute w-[36vw] top-[-20.9vw] left-[-14.5vw] z-[10]"
        />

        <div
        id="computer-monitor"
        class="absolute top-[-25.9vw] left-[40vw] z-20"
      >
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/pc.png"
          alt="Vintage computer monitor pixel art"
          class="w-[28vw]"
        />

        <div
        
          class="absolute top-[9vw] flex justify-center bp-font-retro-computer"
        >
          <div class="text-left relative left-[5vw] max-w-[16vw]">
            <h2 class="text-[1.2vw] text-[#e8e814]">
              > {{ introText }} <span class="terminal-cursor-desktop"></span>
            </h2>
            @if (true) {
            <button
              class="bg-[#e8e814] ml-[0.6vw] mt-[1.5vw] px-[1vw] py-[0.5vw] text-black text-[1.1vw]"
              aria-label="Botón de registro"
            >
              <a href="https://forms.gle/D8uKuJhGSLUHErTu9" target="_blank">
                REGISTRARME
              </a>
            </button>
            }
          </div>
        </div>
      </div>

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/l_speaker.png"
          alt="pc monitor speakers"
          class="absolute w-[7.5vw] top-[-8.8vw] left-[33.5vw] z-[15]"
        />

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/r_speaker.png"
          alt="pc monitor speakers"
          class="absolute w-[7.5vw] top-[-8.9vw] right-[27vw] z-20"
        />

        <div id="lamp" class="absolute -top-[6.5vw] left-[2.5vw] z-10">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1704141231/Lamp_m1fus3.png"
            alt="Vintage  lamp with light pixel art"
            class="w-[28vw]"
          />
        </div>

        <div
          id="funko-builder"
          class="absolute top-[-3vw] right-[10.5vw] z-20"
        >
          <a
            href="https://heavyduty.builders"
            target="_blank"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923821/bootcamp-oct-2024/web/bob.png"
              alt="Vintage Bob funko builder pixel art"
              class="w-[7.8vw]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923821/bootcamp-oct-2024/web/bob_hover.png"
              alt="Vintage Bob funko builder pixel art hover"
              class="absolute top-[0vw] left-[0vw] w-[9.5vw] opacity-0"
            />
          </a>
        </div>

        <div
          id="funko-builder-girl"
          class="absolute top-[6vw] left-[22.5vw] z-20"
        >
          <a
            href="https://heavyduty.builders"
            target="_blank"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923817/bootcamp-oct-2024/web/alice.png"
              alt="Vintage Alice funko builder pixel art"
              class="w-[8.8vw] "
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923817/bootcamp-oct-2024/web/alice_hover.png"
              alt="Vintage Alice funko builder pixel art hover"
              class="absolute top-[0vw] w-[8.1vw] opacity-0"
            />
          </a>
        </div>

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923794/bootcamp-oct-2024/keyboard.png"
          alt="pc Keyboard "
          class="absolute w-[30vw] top-[4.5vw] left-[35vw] z-[20] rotate-[-2deg]"
        />

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923792/bootcamp-oct-2024/mousepad.png"
          alt="pc mouse mousepad"
          class="absolute w-[14vw] top-[4.2vw] right-[20vw] z-10"
        />

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923792/bootcamp-oct-2024/mouse.png"
          alt="pc mouser"
          class="absolute w-[14vw] top-[2vw] right-[24.8vw] z-[15]"
        />

        <div
          id="terms-and-policies"
          class="absolute -top-[13.8vw] w-[15vw] z-20 left-[1.2vw]"
        >
          <a
            href="https://solanaspain.dev/assets/privacy_policies.pdf"
            target="_blank"
            aria-label="privacy policies"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923818/bootcamp-oct-2024/web/pp_book.png"
              alt="Privacy Politics book pixel art"
              class="absolute w-[14.8vw] z-20"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923818/bootcamp-oct-2024/web/pp_book_hover.png"
              alt="Privacy Politics book pixel art hover"
              class="absolute -top-[0.15vw] left-[0.2vw] w-[14.8vw] z-20 opacity-0"
            />
          </a>
          <a
            href="https://solanaspain.dev/assets/terms_and_conditions.pdf"
            target="_blank"
            aria-label="privacy policies"
            bootcampShowOnHover
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923819/bootcamp-oct-2024/web/tc_book.png"
              alt="Terms and conditions book pixel art"
              class="absolute top-[2.15vw] w-[15vw] z-[15] left-[1vw]"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923818/bootcamp-oct-2024/web/tc_book_hover.png"
              alt="Terms and conditions book pixel art hover"
              class="absolute top-[2vw] w-[15vw] z-[15] left-[1.2vw] opacity-0"
            />
          </a>
        </div>

        <div
          id="cup-coffee"
          class="absolute w-[7.5vw] right-[4vw] top-[7vw] z-20"
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1703957915/Smoke_Dark_hzsnah.gif"
            alt="Vintage coffee smoke gif pixel art"
            class="w-[6.7vw] absolute top-[-6.5vw] right-[1.1vw] opacity-25 z-[10]"
          />

          <a href="https://solana.com" target="_blank" bootcampShowOnHover>
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923820/bootcamp-oct-2024/web/coffee.png"
              alt="Vintage solana cup of coffee pixel art"
              class="w-[6.7vw] z-20"
            />
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923819/bootcamp-oct-2024/web/cofee_hover.png"
              alt="Vintage solana cup of coffee pixel art hover"
              class="absolute top-[0vw] w-[6.61vw] opacity-0 z-20"
            />
          </a>
        </div>

        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923794/bootcamp-ene-2025/table.png"
          alt="wooden-table"
          class="w-[100vw] relative"
        />
      </section>
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

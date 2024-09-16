import { Component } from '@angular/core';
import { INTRO_TEXT, SUCCESS_INSCRIPTION_TEXT } from '../utils';
import { ShowOnHoverDirective } from '../utils/hover.directive';

@Component({
  selector: 'bootcamp-app-desktop-component',
  template: `
    <div id="desktop-main-frame" class="relative bp-bg-wall flex flex-col justify-end">
      
      <section class="relative w-[100vw] min-h-[35vw] z-[20]">

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923793/bootcamp-oct-2024/fame.png" alt="welcome sign" class="absolute w-[25vw] top-[1vw] left-[39.6vw]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1726507356/bootcamp-oct-2024/calendar.png" alt="calendar" class="absolute right-[2vw] top-[1.5vw] w-[20vw]" />

        <div class="relative w-[30vw] left-[5vw] top-[1.5vw]">
          
          <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923792/bootcamp-oct-2024/cork.png" alt="cork panel" class="absolute w-[100%]" />
          
          <a href="#" aria-label="collaborators text">
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1705422202/Colaboradores_ca9jpy.png"
              alt="Vintage resources title stickers"
              class="w-[16.5vw] absolute z-30 top-[1.5vw] right-[7vw]"
            />
          </a>

          <!-- Solana -->
          <div class="absolute z-30 top-[5vw] right-[2vw]">
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
          <div class="absolute z-30 top-[10vw] right-[7.5vw]">
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
          <div class="absolute z-30 top-[5vw] right-[12.5vw]">
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

          <!-- Cryptoconexion  -->
          <div class="absolute absolute z-30 top-[4.6vw] left-[3.2vw]">
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

      </section>

      <section class="relative w-[100vw] min-h-[15vw] overscroll-contain">
        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/backpack.png" alt="backpack madlads" class="absolute w-[10vw] top-[-21vw] left-[4.8vw] z-[20]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1726502940/bootcamp-oct-2024/book_shell.png" alt="book shell" class="absolute w-[36vw] top-[-20.9vw] left-[-14.5vw] z-[10]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/pc.png" alt="pc monitor" class="absolute w-[28vw] top-[-25.9vw] left-[40vw] z-20" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/l_speaker.png" alt="pc monitor speakers" class="absolute w-[9vw] top-[-10.5vw] left-[31.5vw] z-[15]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/r_speaker.png" alt="pc monitor speakers" class="absolute w-[9vw] top-[-10.6vw] right-[24vw] z-20" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923789/bootcamp-oct-2024/bob.png" alt="Bob Funko" class="absolute w-[7vw] top-[6vw] left-[22.5vw] z-20" />
        
        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/alice.png" alt="Alice Funko" class="absolute w-[6.2vw] top-[-2vw] right-[8.5vw] z-20" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923794/bootcamp-oct-2024/keyboard.png" alt="pc Keyboard " class="absolute w-[30vw] top-[4.5vw] left-[35vw] z-[20] rotate-[-2deg]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923794/bootcamp-oct-2024/table.png"  alt="wooden-table" class="w-[100vw] relative"/>

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923792/bootcamp-oct-2024/mousepad.png" alt="pc mouse mousepad" class="absolute w-[14vw] top-[4.2vw] right-[20vw] z-10" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923792/bootcamp-oct-2024/mouse.png" alt="pc mouser" class="absolute w-[14vw] top-[2vw] right-[24.8vw] z-[15]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923790/bootcamp-oct-2024/pp_book_english.png" alt="temrs and conditions book" class="absolute top-[7vw] w-[15vw] z-20 left-[1vw]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725923791/bootcamp-oct-2024/tc_book_spanish.png" alt="privacy policies book" class="absolute top-[9.2vw] w-[15vw] z-[15] left-[2vw]" />
        
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

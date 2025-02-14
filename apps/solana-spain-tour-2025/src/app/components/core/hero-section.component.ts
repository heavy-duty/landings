import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushPinIconComponent } from '../push-pin.icon';

@Component({
  selector: 'spain-tour-hero-section',
  imports: [PushPinIconComponent],
  standalone: true,
  template: `
    <section class="flex flex-col items-start px-[7vw] min-h-[62vw] gap-[10vw]">
      <!-- Solana Tour 2023 letters and stickers -->
      <div class="relative w-full mt-[5vw]">
        <div class="relative flex items-start w-[74vw] mx-auto my-0">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_1421/q_auto/f_auto/v1691707717/images/main_title_image_cwvimj.webp"
            alt="Solana Tour text"
            class="w-full"
          />
        </div>
      </div>

      <!-- 2024 Sticker -->
      <div class="absolute top-[18vw] right-[20vw]">
        <div class="w-[18vw] rotate-12">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840556/tour-2025/2025.png"
            alt="2025 sticker"
            class="w-full"
          />
        </div>
      </div>

      <!-- Spain Sticker -->
      <div class="absolute top-[17vw] right-[42vw]">
        <div class="w-[20vw] -rotate-12">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840557/tour-2025/espa%C3%B1a.png"
            alt="2023 Spain sticker"
            class="w-full"
          />
        </div>
      </div>

      <!-- Spain map with push pins and sponsors-->
      <div class="relative flex">
        <div class="relative w-[50vw]">
          <div class="relative">
            <!-- paper -->
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1739479885/tour-2025/map-full-02.png"
              alt="Spain Mailand map in a paper"
              class="block w-full"
              width="1008"
              height="907"
            />
            <!-- tape -->
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_250/q_auto/f_auto/v1691707717/images/tape_ogkfqm.webp"
              alt="top tape on Mainland map paper"
              class="absolute -top-[1vw] left-[18vw] w-[13vw] rotate-3"
            />

            <!-- Heavy Duty Sticker -->
            <a href="https://heavyduty.builders" target="_blank">
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738935776/tour-2025/logo.png"
                alt="heavy duty sticker top tape on Mainland map paper"
                class="absolute bottom-[4vw] right-[3vw] w-[5vw] rotate-6"
              />
            </a>
            <!-- Solana Sticker -->
            <a href="https://solana.com" target="_blank">             
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1692022432/logo_solana_drawing_fnixsc.webp"
                alt="solana sticker top tape on Mainland map paper"
                class="absolute top-[2vw] right-[4vw] w-[3vw] -rotate-6"
              />
            </a>
            <!-- Push Pins -->
            <!-- Madrid -->
            <a
              href="#madrid-event-section"
              title="Direct link to the Madrid event section"
            >
              <spain-tour-push-pin-icon
                class="absolute block w-[3vw] top-[42.5%] left-[43.5%] z-10 cursor-pointer"
                colorData="purple"
                [classPrefix]="'map-madrid-pin'"
                [showHover]="true"
              ></spain-tour-push-pin-icon>
            </a>
            <!-- Barcelona -->
            <a
              href="#barcelona-event-section"
              title="Direct link to the Barcelona event section"
            >
              <spain-tour-push-pin-icon
                class="absolute block w-[3vw] top-[31.5%] right-[12%] z-10 cursor-pointer"
                colorData="green"
                [classPrefix]="'map-barcelona-pin'"
                [showHover]="true"
              ></spain-tour-push-pin-icon>
            </a>

            <!-- Galicia -->
            <a
              href="#galicia-event-section"
              title="Direct link to the Galicia event section"
            >
              <spain-tour-push-pin-icon
                class="absolute block w-[3vw] top-[16%] left-[9.5%] z-10 cursor-pointer"
                colorData="lightBlue"
                [classPrefix]="'map-galicia-pin'"
                [showHover]="true"
              ></spain-tour-push-pin-icon>
            </a>

            <!-- Malaga -->
            <a
              href="#marbella-event-section"
              title="Direct link to the Marbella event section"
            >
              <spain-tour-push-pin-icon
                class="absolute block w-[3vw] bottom-[15%] left-[32%] z-10 cursor-pointer"
                colorData="red"
                [classPrefix]="'map-marbella-pin'"
                [showHover]="true"
              ></spain-tour-push-pin-icon>
            </a>
          </div>

          <!-- Global Sponsors-->
          <div class="relative w-full px-[2vw] h-[16vw]">
            <a
              href="https://solana.com/"
              target="_blank"
              aria-label="Official link to Solana website"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1695149182/Solana_sticker_1_pdpppt.png"
                class="absolute w-[14vw] top-[2.5vw] left-[0vw] -rotate-12"
                alt="Solana logo sticker"
              />
            </a>
            <a
              href="https://lafamilia.so/"
              target="_blank"
              aria-label="Official link to La Familia website"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738855614/tour-2025/tag_parche_laa_faamilia.png"
                class="absolute w-[11.5vw] top-[6vw] left-[14.5vw] rotate-12"
                alt="La Familia logo sticker"
              />
            </a>
            <a
              href="https://backpack.app/"
              target="_blank"
              aria-label="Official link to Backpack website"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1708738704/Backpack_sticker_jafsjt.png"
                class="absolute w-[11vw] top-[2vw] left-[28vw] rotate-6"
                alt="Backpack logo sticker"
              />
            </a>
            <a
              href="https://shyft.to/"
              target="_blank"
              aria-label="Official link to Shyft RPC"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1708739504/Shyft_sticker_axpjak.png"
                class="absolute w-[11vw] top-[7vw] left-[40vw] -rotate-12"
                alt="Shyft RPC logo sticker"
              />
            </a>
          </div>
        </div>

        <!-- Posts Sections -->
        <div class="relative w-[40vw]">
          <!-- first post-it-->
          <div class="absolute w-[26vw] top-[0vw] right-[7vw]">
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840556/tour-2025/Notas/01.png"
              class="relative w-full rotate-12"
              alt="second tour solana white folded paper "
            />
          </div>

          <!-- second post-it-->
          <div
            class="absolute flex justify-center w-[25vw] top-[23vw] right-[8vw]"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1739479750/tour-2025/02.png"
              alt="4 cities white folded paper"
              class="w-full -rotate-6"
            />
          </div>

          <!-- third post-it-->
          <div class="absolute w-[24vw] top-[45vw] left-[6vw]">
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840556/tour-2025/Notas/03.png"
              class="relative w-full left-[2vw] rotate-3"
              alt="global sponsors white folded paper"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {}

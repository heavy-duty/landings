import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-hero-section',
  template: `
    <section class="flex flex-col items-start px-[7vw] min-h-[62vw] gap-[10vw]">
      <!-- Solana Tour 2023 letters and stickers -->
      <div class="relative w-full mt-[5vw]">
        <div class="relative flex items-start w-[74vw] mx-auto my-0">
          <img
            src="assets/images/main_title_image.webp"
            alt="Solana Tour text"
            class="w-full"
          />
        </div>
      </div>

      <div class="absolute top-[18vw] right-[25vw]">
        <div class="w-[13vw] rotate-12">
          <img
            src="assets/images/sticker_2023.webp"
            alt="2023 sticker"
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
              src="assets/images/spain_folded_paper.webp"
              alt="Spain Mailand map in a paper"
              class="block w-full"
              width="908"
              height="807"
            />
            <!-- tape -->
            <img
              src="assets/images/tape.webp"
              alt="top tape on Mainland map paper"
              class="absolute -top-[1vw] left-[18vw] w-[13vw] rotate-3"
            />

            <!-- Heavy Duty Sticker -->
            <img
              src="assets/images/logo_heavyduty_pencil.webp"
              alt="top tape on Mainland map paper"
              class="absolute bottom-[4vw] right-[3vw] w-[5vw] rotate-6"
            />

            <!-- Push Pins -->
            <a
              href="#first-event-section"
              title="Direct link first event section"
            >
              <hd-spain-tour-push-pin-icon
                class="absolute block w-[3vw] top-[43%] left-[42%] z-10 cursor-pointer"
                colorData="blue"
                [classPrefix]="'map-madrid-pin'"
                [showHover]="true"
              ></hd-spain-tour-push-pin-icon>
            </a>
            <a
              href="#second-event-section"
              title="Direct link second event section"
            >
              <hd-spain-tour-push-pin-icon
                class="absolute block w-[3vw] bottom-[15.5%] left-[35.5%] z-10 cursor-pointer"
                colorData="purple"
                [classPrefix]="'map-malaga-pin'"
                [showHover]="true"
              ></hd-spain-tour-push-pin-icon>
            </a>
            <a
              href="#third-event-section"
              title="Direct link third event section"
            >
              <hd-spain-tour-push-pin-icon
                class="absolute block w-[3vw] bottom-[31.6%] right-[29.6%] z-10 cursor-pointer"
                colorData="lightBlue"
                [classPrefix]="'map-alicante-pin'"
                [showHover]="true"
              ></hd-spain-tour-push-pin-icon>
            </a>
            <a
              href="#fourth-event-section"
              title="Direct link fourth event section"
            >
              <hd-spain-tour-push-pin-icon
                class="absolute block w-[3vw] top-[30%] right-[10.8%] z-10 cursor-pointer"
                colorData="green"
                [classPrefix]="'map-barcelona-pin'"
                [showHover]="true"
              ></hd-spain-tour-push-pin-icon>
            </a>
          </div>

          <!-- Global Sponsors-->
          <div class="relative w-full px-[2vw] h-[16vw]">
            <img
              src="assets/images/sponsors/logo_solana_sticker.webp"
              class="absolute w-[20vw] top-[1vw] rotate-6"
              alt="Solana logo sticker"
            />
            <img
              src="assets/images/sponsors/logo_jump_sticker.webp"
              class="absolute w-[20vw] top-[7vw] left-[14vw] -rotate-6"
              alt="Jump logo sticker"
            />
            <img
              src="assets/images/sponsors/logo_circle_sticker.webp"
              class="absolute w-[20vw] top-[1vw] left-[28vw]"
              alt="Circle logo sticker"
            />
          </div>
        </div>

        <!-- Posts Sections -->
        <div class="relative w-[40vw]">
          <!-- first post-it-->
          <div class="absolute w-[28vw] top-[2.1vw] right-[7vw]">
            <img
              src="assets/images/note1.png"
              class="relative w-full rotate-12"
              alt="blue Post-It third sponsor spot"
            />
            <hd-spain-tour-push-pin-icon
              colorData="red"
              [classPrefix]="'fifth-pin'"
              class="absolute block w-[3vw] z-10 top-[.8vw] left-[14vw]"
            ></hd-spain-tour-push-pin-icon>
          </div>

          <!-- second post-it-->
          <div
            class="absolute flex justify-center w-[25vw] top-[24vw] right-[8vw]"
          >
            <img
              src="assets/images/note2.png"
              alt="green Post-It first sponsor spot"
              class="w-full -rotate-6"
            />
            <hd-spain-tour-push-pin-icon
              class="absolute block w-[3vw] top-[0.6vw] mr-[2vw] z-10"
              colorData="red"
              [classPrefix]="'seven-pin'"
            ></hd-spain-tour-push-pin-icon>
          </div>

          <!-- third post-it-->
          <div class="absolute w-[28vw] top-[46vw] left-[4vw]">
            <img
              src="assets/images/note3.png"
              class="relative w-full left-[2vw] rotate-3"
              alt="white folded paper second sponsor spot"
            />
            <hd-spain-tour-push-pin-icon
              colorData="red"
              classPrefix="pin-drago"
              class="absolute block w-[3vw] z-10 top-[1.5vw] left-[15vw]"
            ></hd-spain-tour-push-pin-icon>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {}

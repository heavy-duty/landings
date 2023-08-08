import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-hero-section',
  template: `
    <section
      class="flex flex-col items-start mb-[6vw] px-[7vw] min-h-[62vw] gap-[10vw]"
    >
      <div class="relative w-full mt-[5vw]">
        <div class="relative flex items-start w-[74vw] mx-auto my-0">
          <img
            src="assets/images/main_title_image.png"
            alt="SOLANA TOUR text"
            class="w-full"
          />
        </div>
      </div>

      <div class="relative flex">

        <!-- Spain map with push pins and sponsors-->
        <div class="relative w-[50vw]">
          <div class="relative">
            <!-- paper -->
            <img
              src="assets/images/spain_folded_paper.png"
              alt="Spain Mailand map in a paper"
              class="block w-full"
              width="908"
              height="807"
            />
            <!-- Spain Map -->
            <img
              src="assets/images/tape.png"
              alt="top tape on Mainland map paper"
              class="absolute -top-[1vw] left-[18vw] w-[13vw] rotate-3"
            />

            <!-- Push Pins -->
            <hd-spain-tour-push-pin-icon
              class="absolute block w-[3vw] top-[43%] left-[42%] z-10 cursor-pointer"
              colorData="red"
              [classPrefix]="'map-madrid-pin'"
              [showHover]="true"
            ></hd-spain-tour-push-pin-icon>
            <hd-spain-tour-push-pin-icon
              class="absolute block w-[3vw] bottom-[15.5%] left-[35.5%] z-10 cursor-pointer"
              colorData="red"
              [classPrefix]="'map-malaga-pin'"
              [showHover]="true"
            ></hd-spain-tour-push-pin-icon>
            <hd-spain-tour-push-pin-icon
              class="absolute block w-[3vw] bottom-[31.6%] right-[29.6%] z-10 cursor-pointer"
              colorData="red"
              [classPrefix]="'map-alicante-pin'"
              [showHover]="true"
            ></hd-spain-tour-push-pin-icon>
            <hd-spain-tour-push-pin-icon
              class="absolute block w-[3vw] top-[30%] right-[10.8%] z-10 cursor-pointer"
              colorData="red"
              [classPrefix]="'map-barcelona-pin'"
              [showHover]="true"
            ></hd-spain-tour-push-pin-icon>
          </div>
          
          <!-- Global Sponsors-->
          <div class="relative w-full px-[2vw] h-[16vw]">
            <img
              src="assets/images/sponsors/logo_solana_sticker.png"
              class="absolute w-[20vw] top-[1vw] rotate-6"
              alt="Solana logo sticker"
            />
            <img
              src="assets/images/sponsors/logo_jump_sticker.png"
              class="absolute w-[20vw] top-[7vw] left-[14vw] -rotate-6"
              alt="Jump logo sticker"
            />
            <img
              src="assets/images/sponsors/logo_circle_sticker.png"
              class="absolute w-[20vw] top-[1vw] left-[28vw]"
              alt="Circle logo sticker"
            />
          </div>
        </div>
        
        <!-- Posts Sections -->
        <div class="relative w-[42vw]">

          <!-- first post-it-->
          <div class="absolute w-[25vw] top-[1vw] right-[9vw]">
            <img
              src="assets/images/folded_paper.webp"
              class="relative w-full rotate-12"
              alt="blue Post-It third sponsor spot"
            />
            <hd-spain-tour-push-pin-icon
              colorData="yellow"
              [classPrefix]="'fifth-pin'"
              class="absolute block w-[3vw] z-10 top-[.5vw] left-[11vw]"
            ></hd-spain-tour-push-pin-icon>
          </div>

          <!-- second post-it-->
          <div
            class="absolute flex justify-center w-[23vw] top-[24vw] right-[12vw]"
          >
            <img
              src="assets/images/folded_paper.webp"
              alt="green Post-It first sponsor spot"
              class="w-full -rotate-6"
            />
            <hd-spain-tour-push-pin-icon
              class="absolute block w-[3vw] top-[1vw] mr-[2.5vw] z-10"
              colorData="purple"
              [classPrefix]="'seven-pin'"
            ></hd-spain-tour-push-pin-icon>
          </div>

          <!-- third post-it-->
          <div class="absolute w-[28vw] top-[46vw] left-[4vw]">
            <img
              src="assets/images/folded_paper.webp"
              class="relative w-full left-[2vw] rotate-3"
              alt="white folded paper second sponsor spot"
            />
            <hd-spain-tour-push-pin-icon
              colorData="lightBlue"
              classPrefix="pin-drago"
              class="absolute block w-[3vw] z-10 top-[2vw] left-[13vw]"
            ></hd-spain-tour-push-pin-icon>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  constructor() {
    console.log('E');
  }
}

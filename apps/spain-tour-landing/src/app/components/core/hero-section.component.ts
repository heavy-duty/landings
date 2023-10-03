import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-hero-section',
  template: `
    <section class="flex flex-col items-start px-[7vw] min-h-[62vw] gap-[10vw]">
      <!-- Solana Tour 2023 letters and stickers -->
      <div class="relative w-full mt-[5vw]">
        <div class="relative flex items-start w-[74vw] mx-auto my-0">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_1421/q_auto/f_auto/v1691707717/images/main_title_image_cwvimj.webp"
            alt="Solana Tour text"
            class="w-full"
          />
        </div>
      </div>

      <!-- 2023 Sticker -->
      <div class="absolute top-[18vw] right-[25vw]">
        <div class="w-[13vw] rotate-12">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_250/q_auto/f_auto/v1691707718/images/sticker_2023_zw2ppd.webp"
            alt="2023 sticker"
            class="w-full"
          />
        </div>
      </div>

      <!-- Spain Sticker -->
      <div class="absolute top-[16vw] right-[45vw]">
        <div class="w-[13vw] -rotate-12">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_250/q_auto/f_auto/v1692124514/spain_ihsaw2.png"
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
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1691707710/images/spain_folded_paper_y0crma.webp"
              alt="Spain Mailand map in a paper"
              class="block w-full"
              width="908"
              height="807"
            />
            <!-- tape -->
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_250/q_auto/f_auto/v1691707717/images/tape_ogkfqm.webp"
              alt="top tape on Mainland map paper"
              class="absolute -top-[1vw] left-[18vw] w-[13vw] rotate-3"
            />

            <!-- Heavy Duty Sticker -->
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_96/q_auto/f_auto/v1691707717/images/logo_heavyduty_pencil_dyy1dm.webp"
              alt="top tape on Mainland map paper"
              class="absolute bottom-[4vw] right-[3vw] w-[5vw] rotate-6"
            />

            <!-- Solana Sticker -->
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1692022432/logo_solana_drawing_fnixsc.webp"
              alt="top tape on Mainland map paper"
              class="absolute top-[2vw] right-[4vw] w-[3vw] -rotate-6"
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
            <!-- line from madrid to malaga -->
            <div class="absolute w-[19vw] top-[20vw] left-[11.5vw] -rotate-1">
              <img
                src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1692022342/red_thread_M-M_wegday.webp"
                alt="connector between Madrid push pin to Malaga push pin"
                class="w-full"
              />
            </div>
            <!-- -->
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
            <!-- line from Málaga to Alicante -->
            <div
              class="absolute w-[15.5vw] bottom-[3.8vw] right-[15.3vw] -rotate-1"
            >
              <img
                src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1692022341/red_thread_M-A_nyqlwp.webp"
                alt="connector between Madrid push pin to Malaga push pin"
                class="w-full"
              />
            </div>
            <!-- -->
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
            <!-- line from Alicante to Barcelona -->
            <div class="absolute w-[16vw] top-[14vw] right-[3vw] -rotate-2">
              <img
                src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1692022341/red_thread_A-B_bflpbb.webp"
                alt="connector between Madrid push pin to Malaga push pin"
                class="w-full"
              />
            </div>
            <!-- -->
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
            <a href="https://solana.com/" target="_blank" aria-label="Official link to Solana website">
              <img            
                src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1695149182/Solana_sticker_1_pdpppt.png"
                class="absolute w-[14vw] top-[3vw] left-[10vw] -rotate-12"
                alt="Solana logo sticker"
              />
            </a>
            <a href="https://heavyduty.builders/" target="_blank" aria-label="Official link to Heavy Duty Builders website">
              <img
                src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1695149182/HDB_sticker_1_ibjklb.png"
                class="absolute w-[14.5vw] top-[6vw] left-[28vw] rotate-12"
                alt="Heavy Duty Builders logo sticker"
              />
            </a>
          </div>
        </div>

        <!-- Posts Sections -->
        <div class="relative w-[40vw]">
          <!-- first post-it-->
          <div class="absolute w-[26vw] top-[4vw] right-[7vw]">
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_538/q_auto/f_auto/v1692122853/small_folded_paper2_y8vbis.png"
              class="relative w-full rotate-12"
              alt="blue Post-It third sponsor spot"
            />
            <hd-spain-tour-push-pin-icon
              colorData="red"
              [classPrefix]="'fifth-pin'"
              class="absolute block w-[3vw] z-10 top-[.2vw] left-[13vw]"
            ></hd-spain-tour-push-pin-icon>
          </div>

          <!-- second post-it-->
          <div
            class="absolute flex justify-center w-[25vw] top-[29vw] right-[8vw]"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_480/q_auto/f_auto/v1692122854/small_folded_paper3_e8u2os.png"
              alt="green Post-It first sponsor spot"
              class="w-full -rotate-6"
            />
            <hd-spain-tour-push-pin-icon
              class="absolute block w-[3vw] top-[0.4vw] mr-[2vw] z-10"
              colorData="red"
              [classPrefix]="'seven-pin'"
            ></hd-spain-tour-push-pin-icon>
          </div>

          <!-- third post-it-->
          <div class="absolute w-[24vw] top-[50vw] left-[6vw]">
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1695237212/support_note_cdnahy.png"
              class="relative w-full left-[2vw] rotate-3"
              alt="white folded paper second sponsor spot"
            />
            <hd-spain-tour-push-pin-icon
              colorData="red"
              classPrefix="pin-drago"
              class="absolute block w-[3vw] z-10 top-[.5vw] left-[12.5vw]"
            ></hd-spain-tour-push-pin-icon>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {}

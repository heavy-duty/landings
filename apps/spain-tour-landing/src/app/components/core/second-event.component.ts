import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-second-event',
  template: `
    <div
      class="relative flex gap-[5vw] w-full pt-[5vw]"
      id="second-event-section"
    >
      <!-- Postcard -->
      <div
        class="relative bg-white bp-bg-paper-pattern rotate-3 w-[50vw] h-[31.3vw] p-[2.5vw] -right-[4vw] order-2"
      >
        <hd-spain-tour-push-pin-icon
          colorData="purple"
          [classPrefix]="'second-event-pint-1'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-push-pin-icon
          colorData="purple"
          [classPrefix]="'second-event-pint-2'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-post-card-icon
          [classPrefix]="'-second-event'"
          [firstColor]="'#00C2FF'"
          [secondColor]="'#FFA463'"
          class="absolute block w-full top-0 left-0"
        ></hd-spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">
          <!-- Postcard image section-->
          <div class="basis-[70%] h-full bp-bg-second-event"></div>

          <!-- Postcard info section -->
          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p
              class="text-[2.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
            >
              <span class="block">Meeting #2:</span>
              <span class="block">Programs</span>
            </p>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <!-- <i class="fal fa-map-marker-alt text-[1vw]"></i> -->
              <img
                src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_29/q_auto/f_auto/v1691707713/images/icons/location_l31pvh.webp"
                class="absolute w-[1.5vw] left-[1vw]"
                alt="Calendar icon"
              />
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light">TBD</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <!-- <i class="fal fa-calendar-alt text-[1vw]"></i> -->
              <img
                src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_21/q_auto/f_auto/v1691707714/images/icons/calendar_zucjxg.webp"
                class="absolute w-[1.1vw] left-[1.2vw]"
                alt="Calendar icon"
              />
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light">09/29/2023</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light ">
                15:00 - 17:00
              </p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[2vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <!-- <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[2vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div> -->

            <div class="absolute w-full bottom-0 left-0 px-[1vw]">
              <!-- This is only necessary for max zoom 500% avoid moving-->
              <a
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting+%232+-+Programas+en+Solana.&details=Segundo+evento+del+Tour+por+espa%C3%B1a+de+Solana.&location=Innovation+Campus+-+Malaga+Terrace+coworking%2C+Calle+Puerto%2C+14%2C+29016+M%C3%A1laga%2C+Spain&dates=20230926T140000Z%2F20230926T160000Z"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#6BFF7D] border-[.1vw] border-gray-800 hover:bg-[#4ff963] text-center font-bold"
                aria-label="Schedule second event action"
              >
                Schedule Event
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Event Information -->
      <div class="relative">
        <!-- Information text -->
        <div class="relative w-[24vw]">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_461/q_auto/f_auto/v1692122853/information_grxkq0.png"
            class="w-full -rotate-3"
            alt="Information text on a paper"
          />
        </div>

        <!-- Post-it information -->
        <div class="relative w-[22vw] mt-[2vw] ml-[5vw] -rotate-6 order-1">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_422/q_auto/f_auto/v1692122853/post_it_purple_l8klxb.png"
            alt="purple post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/xh84ikcr"
            target="_blank"
            aria-label="Official link to the second tour event"
          >
            <hd-spain-tour-event-more-info-icon
              class="absolute w-[14.5vw] left-[4.3vw] bottom-[4vw] z-10"
              [classPrefix]="'sixth-event243'"
            ></hd-spain-tour-event-more-info-icon>
          </a>
          <hd-spain-tour-push-pin-icon
            colorData="purple"
            [classPrefix]="'sixth-event22-pin'"
            class="absolute block w-[3vw] z-10 top-[.5vw] left-[9.8vw]"
          ></hd-spain-tour-push-pin-icon>
        </div>
      </div>
    </div>

    <!-- Event sponsors -->
    <div class="relative w-full flex justify-end">
      <!-- Sponsor text -->
      <div class="relative w-[16vw] mt-[4vw]">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_307/q_auto/f_auto/v1691707713/images/sponsors_paper_z1mjqh.webp"
          class="w-full"
          alt="Information text on a paper"
        />
      </div>

      <!-- Sticker logos -->
      <div class="relative h-[26vw]">
        <div class="absolute w-[22vw] top-[12.5vw] right-[13vw] z-10">
          <a
            href="https://blockchainmalaga.es/"
            aria-label="Official Blockchain Málaga link to website"
            target="_blank"
          >
          
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_500/q_auto/f_auto/v1692813667/big_logo_rr94mf.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-6"
              alt="Blockchain Málaga logo sticker"
            />
          </a>
        </div>
        <!-- <div class="absolute w-[17vw] top-[10vw] right-[26vw] z-10">
          <a
            href="#"
            aria-label="Official Event 2 Sponsor 2 link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_326/q_auto/f_auto/v1692274752/ClaynoSaurz_cr1gen.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-12"
              alt="Event 2 Sponsor 2 logo sticker"
            />
          </a>
        </div>
        <div class="absolute w-[12vw] top-[14vw] right-[2vw] z-10">
          <a
            href="#"
            aria-label="Official Event 2 Sponsor 3 link to website"
            target="_blank"
          >
          
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_230/q_auto/f_auto/v1692275087/drip_photo_nxdgfy.png"
              class="relative w-full rotate-12"
              alt="Event 2 Sponsor 3 logo sticker"
            />
          </a>
          <hd-spain-tour-push-pin-icon
            colorData="purple"
            [classPrefix]="'pin-drip-1'"
            class="absolute block w-[3vw] z-10 -top-[.5vw] left-[2vw]"
          ></hd-spain-tour-push-pin-icon>
          <hd-spain-tour-push-pin-icon
            colorData="purple"
            [classPrefix]="'pin-drip-2'"
            class="absolute block w-[3vw] z-10 -bottom-[.5vw] right-[2vw]"
          ></hd-spain-tour-push-pin-icon>
        </div> -->
        <!-- <div class="absolute w-[19vw] top-[13vw] right-[24vw] z-10">
          <hd-spain-tour-push-pin-icon
            class="absolute block w-[3vw] -top-[1.3vw] left-[7.5vw] z-10"
            colorData="purple"
            [classPrefix]="'seven-event12-pin'"
          ></hd-spain-tour-push-pin-icon>
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1692279501/Your_Logo_Small_1_u5caqj.png"
            class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-6"
            alt="Event 2 Sponsors note"
          />
        </div> -->
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondEventComponent {}

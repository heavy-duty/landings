import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-fourth-event',
  template: `
    <div
      class="relative flex gap-[5vw] w-full pt-[5vw]"
      id="fourth-event-section"
    >
      <!-- Postcard -->
      <div
        class="relative bg-white bp-bg-paper-pattern rotate-3 w-[50vw] h-[31.3vw] p-[2.5vw] -right-[4vw] order-2"
      >
        <hd-spain-tour-push-pin-icon
          class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
          colorData="green"
          [classPrefix]="'fourth-event-pin-1'"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-push-pin-icon
          class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
          colorData="green"
          [classPrefix]="'fourth-event-pin-2'"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-post-card-icon
          [classPrefix]="'-fourth-event'"
          [firstColor]="'#46ea69'"
          [secondColor]="'#14b4e5'"
          class="absolute block w-full top-0 left-0"
        ></hd-spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">
          <!-- Postcard image section-->
          <div class="basis-[70%] h-full bp-bg-fourth-event"></div>

          <!-- Postcard info section -->
          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p
              class="text-[2.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
            >
              <span class="block">Meeting #4:</span>
              <span class="block">What are NFTs?</span>
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
              <p class="bp-landing-font text-[1vw] font-light">10/06/2023</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light">19:00 - 21:30</p>
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
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting+%234+-+%C2%BFQu%C3%A9+son+los+NFTs%3F&details=%C3%9Altimo+evento+del+Tour+por+espa%C3%B1a+de+Solana.&location=CREC+Coworking+Gr%C3%A0cia+-+Depot+Lab+Barcelona%2C+Carrer+de+Joaquim+Ruyra%2C+9%2C+11%2C+08025+Barcelona%2C+Spain&dates=20230929T150000Z%2F20230929T190000Z"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#EBD738] border-[.1vw] border-gray-800 hover:bg-[#ffe900] text-center font-bold"
                aria-label="Schedule fourth event action"
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
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_422/q_auto/f_auto/v1692128530/post_it_blue_ysugzq.png"
            alt="blue post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/1jccph9h"
            target="_blank"
            aria-label="Official link to the fourth tour event"
          >
            <hd-spain-tour-event-more-info-icon
              class="absolute w-[14vw] left-[4.3vw] bottom-[3.5vw] z-10 -rotate-3"
              [classPrefix]="'sixth-event2-pin'"
            ></hd-spain-tour-event-more-info-icon>
          </a>
          <hd-spain-tour-push-pin-icon
            colorData="green"
            [classPrefix]="'sixth-event2-pin'"
            class="absolute block w-[3vw] z-10 top-[.5vw] left-[8.5vw]"
          ></hd-spain-tour-push-pin-icon>
        </div>
      </div>
    </div>
    <!-- Event sponsors -->
    <div class="relative w-full">
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
        <!-- <div class="absolute w-[11vw] top-[4vw] left-[8vw] z-10">
          <a
            href="#"
            aria-label="Official Event 4 Sponsor 1 link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_211/q_auto/f_auto/v1692275893/sticker_superteamMX_lndnk8.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Event 4 Sponsor 1 logo sticker"
            />
          </a>
        </div>
        <div class="absolute w-[24vw] top-[20vw] left-[10vw] z-10">
          <a
            href="#"
            aria-label="Official Event 4 Sponsor 2 link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_461/q_auto/f_auto/v1692273423/sticker_exchangeArt_hsprre.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-6"
              alt="Event 4 Sponsor 2 logo sticker"
            />
          </a>
        </div>
        <div class="absolute w-[11vw] top-[2vw] left-[39vw] z-10">
          <a
            href="#"
            aria-label="Official Event 4 Sponsor 3 link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_211/q_auto/f_auto/v1692275897/sticker_superteamTK_n3dhav.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-12"
              alt="Event 4 Sponsor 3 logo sticker"
            />
          </a>
        </div>
        <div class="absolute w-[9vw] top-[4vw] left-[22vw] z-10">
          <a
            href="#"
            aria-label="Official Event 4 Sponsor 4 link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_173/q_auto/f_auto/v1692273357/sticker_quickNode_ughr0b.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Event 4 Sponsor 4 logo sticker"
            />
          </a>
        </div>
        <div class="absolute w-[9vw] top-[13vw] left-[32vw] z-10">
          <a
            href="#"
            aria-label="Official Event 4 Sponsor 5 link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_173/q_auto/f_auto/v1692276155/sticker_helius_josvfc.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Event 4 Sponsor 5 logo sticker"
            />
          </a>
        </div> -->
        <div class="absolute w-[19vw] top-[6vw] left-[12vw] z-10">
          <hd-spain-tour-push-pin-icon
            class="absolute block w-[3vw] -top-[1.3vw] left-[6vw] z-10"
            colorData="green"
            [classPrefix]="'seven-event13-pin'"
          ></hd-spain-tour-push-pin-icon>
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1692279501/Your_Logo_Small_1_u5caqj.png"
            class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-6"
            alt="Event 2 Sponsors note"
          />
        </div>
      </div>

      
      <!-- Ballerina Sticker -->
      <div class="absolute right-[1vw] top-[2vw]">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1692280284/Ballerina_f1euu4.png"
          alt="Drawing bull"
          class="w-[15vw] rotate-6"
        />
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_134/q_auto/f_auto/v1691707717/images/tape_ogkfqm.webp"
          alt="tape for drawing ballerina"
          class="absolute w-[5vw] -rotate-[10deg] -top-[1vw] right-[5.7vw]"
        />
      </div>

      <!-- Bull Sticker -->
      <div class="absolute right-[22vw] top-[5vw]">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_488/q_auto/f_auto/v1691707714/images/icons/bull_bsyz0y.webp"
          alt="Drawing bull"
          class="w-[20vw] rotate-6"
        />
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_134/q_auto/f_auto/v1691707717/images/tape_ogkfqm.webp"
          alt="tape for drawing bull"
          class="absolute w-[7vw] rotate-[25deg] top-[1.3vw] right-[5vw]"
        />
      </div>

      <!-- Wine -->
      <div class="absolute right-[2vw] top-[20vw]">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/v1692282122/Wine_ltvjuk.png"
          alt="Drawing bull"
          class="w-[10vw]"
        />
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_134/q_auto/f_auto/v1691707717/images/tape_ogkfqm.webp"
          alt="tape for drawing wine"
          class="absolute w-[5vw] top-[.3vw] right-[3.5vw]"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourthEventComponent {}

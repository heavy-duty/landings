import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-first-event',
  template: `
    <div class="relative flex gap-[5vw] w-full">
      <!-- Postcard -->
      <div
        class="relative bg-white bp-bg-paper-pattern -rotate-3 w-[50vw] h-[31.3vw] p-[2.5vw] right-0"
      >
        <hd-spain-tour-push-pin-icon
          colorData="green"
          [classPrefix]="'fourth-pin'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-push-pin-icon
          class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-post-card-icon
          [classPrefix]="'-first-event'"
          [firstColor]="'#00c2ff'"
          [secondColor]="'#ff6363'"
          class="absolute block w-full top-0 left-0"
        ></hd-spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">
          <!-- Postcard image section-->
          <div class="basis-[70%] h-full bp-bg-first-event"></div>

          <!-- Postcard info section -->
          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p
              class="text-[1.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
            >
              <span class="block">Meeting #1:</span>
              <span class="block">Conceptos Básicos.</span>
            </p>
            <a href="https://goo.gl/maps/hnjYbQRoCjn1jmNo6" target="_blank">
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <!-- <i class="fal fa-map-marker-alt text-[1vw]"></i> -->
                <img
                  src="assets/images/icons/location.webp"
                  class="absolute w-[1.5vw] left-[1vw]"
                  alt="Calendar icon"
                />
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                  The Shed CoWorking,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                  C. de Hermosilla 48,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">Madrid.</p>
              </div>
            </a>

            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
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
                src="assets/images/icons/calendar.webp"
                class="absolute w-[1.1vw] left-[1.2vw]"
                alt="Calendar icon"
              />
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light">24/09/2023</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[2vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light ">14:00 18:00</p>
            </div>

            <div class="absolute w-full bottom-0 left-0 px-[1vw]">
              <!-- This is only necessary for max zoom 500% avoid moving-->

              <a
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting+%231+-+Conceptos+B%C3%A1sicos.&details=Primer+evento+del+Tour+por+espa%C3%B1a+de+Solana.&location=The+Shed+CoWorking%2C+C.+de+Hermosilla%2C+48%2C+1%C2%BA+Derecha%2C+28001+Madrid%2C+Spain.&dates=20230924T130000Z%2F20230924T170000Z"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw]  bg-[#98e6ff] border-[.1vw] border-gray-800 hover:bg-[#83dcf7] text-center font-bold"
              >
                Agendar evento
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
            src="assets/images/information_paper.webp"
            class="w-full rotate-3"
            alt="Information text on a paper"
          />
        </div>

        <!-- Post-it information -->
        <div class="relative w-[22vw] mt-[2vw] ml-[5vw] rotate-6">
          <img
            src="assets/images/green_post_it_2.webp"
            alt="green post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/m1op9i7b"
            target="_blank"
          >
            <hd-spain-tour-event-more-info-icon
              class="absolute w-[13vw] left-[4.3vw] bottom-[4.5vw] z-10"
              [classPrefix]="'sixth-event0'"
            ></hd-spain-tour-event-more-info-icon>
          </a>
          <hd-spain-tour-push-pin-icon
            colorData="purple"
            [classPrefix]="'ff-match-pin'"
            class="absolute block w-[3vw] z-10 top-[.5vw] left-[9.8vw]"
          ></hd-spain-tour-push-pin-icon>
        </div>
      </div>
    </div>

    <!-- Event sponsors -->
    <div class="relative w-full">
      <!-- Sponsor text -->
      <div class="relative w-[16vw] mt-[4vw]">
        <img
          src="assets/images/sponsors_paper.webp"
          class="w-full"
          alt="Information text on a paper"
        />
      </div>

      <!-- Sticker logos -->
      <div class="relative h-[26vw]">
        <div class="absolute w-[11vw] top-[8vw] left-[8vw] z-10">
          <a
            href="https://phantom.app/"
            aria-label="Official link to Phatom wallet"
            target="_blank"
          >
            <img
              src="assets/images/sponsors/logo_phantom_sticker.webp"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Phatom Wallet sticker"
            />
          </a>
        </div>
        <div class="absolute w-[24vw] top-[16vw] left-[16vw] z-10">
          <a
            href="https://exchange.art/"
            aria-label="Official link to Exchange Art NFT marketplace"
            target="_blank"
          >
            <img
              src="assets/images/sponsors/logo_exchangeArt_sticker.webp"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Exchange Art NFT marketplace sticker"
            />
          </a>
        </div>
        <div class="absolute w-[9vw] top-[4vw] left-[22vw] z-10">
          <a
            href="https://www.quicknode.com/"
            aria-label="Official link to QuickNode RPC"
            target="_blank"
          >
            <img
              src="assets/images/sponsors/logo_quickNode_sticker.webp"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="QuickNode RPC sticker"
            />
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstEventComponent {

}

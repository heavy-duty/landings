import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-fourth-event',
  template: `
    <div class="relative w-full h-[31.3vw] mt-[7vw]">
        <div
          class="absolute bg-white bp-bg-paper-pattern w-[50vw] rotate-3 h-full p-[2.5vw] right-0"
        >
          <hd-spain-tour-push-pin-icon
            class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
            colorData="green"
            [classPrefix]="'second-pin'"
          ></hd-spain-tour-push-pin-icon>
          <hd-spain-tour-push-pin-icon
            class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
          ></hd-spain-tour-push-pin-icon>
          <hd-spain-tour-post-card-icon
            [classPrefix]="'-fourth-event'"
            [firstColor]="'#5C39EA'"
            [secondColor]="'#FF0B81'"
            class="absolute block w-full top-0 left-0"
          ></hd-spain-tour-post-card-icon>

          <div class="relative w-full h-full flex">
            <!-- Postcard image section-->
            <div class="basis-[70%] h-full bp-bg-fourth-event"></div>

            <!-- Postcard info section -->
            <div class="relative basis-[30%] h-full  px-[1vw]">
              <p
                class="text-[1.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
              >
                <span class="block">Meeting #4:</span>
                <span class="block">¿Qué son los NFTs?</span>
              </p>
              <a href="https://goo.gl/maps/Z9cpLCyMdjhv8e1h6" target="_blank">
                <div
                  class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
                >
                  <i class="fal fa-map-marker-alt text-[1vw]"></i>
                  <p class="bp-landing-font text-[1vw] font-light">
                    CREC Coworking
                  </p>
                </div>
                <div
                  class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
                >
                  <div class="basis-[.7vw]"></div>
                  <p class="bp-landing-font text-[1vw] font-light">
                    Carrer de Joaquim 9.
                  </p>
                </div>
                <div
                  class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
                >
                  <div class="basis-[.7vw]"></div>
                  <p class="bp-landing-font text-[1vw] font-light">Barcelona</p>
                </div>
              </a>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light text-white">
                  .
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light text-white">
                  .
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-calendar-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">29/09/2023</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[2vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                  16:00 - 20:00
                </p>
              </div>

              <div class="absolute w-full bottom-0 left-0 px-[1vw]">
                <!-- This is only necessary for max zoom 500% avoid moving-->
                <a
                  href="https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting+%234+-+%C2%BFQu%C3%A9+son+los+NFTs%3F&details=%C3%9Altimo+evento+del+Tour+por+espa%C3%B1a+de+Solana.&location=CREC+Coworking+Gr%C3%A0cia+-+Depot+Lab+Barcelona%2C+Carrer+de+Joaquim+Ruyra%2C+9%2C+11%2C+08025+Barcelona%2C+Spain&dates=20230929T150000Z%2F20230929T190000Z"
                  target="_blank"
                  class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#EBD738] border-[.1vw] border-gray-800 hover:bg-[#ffe900] text-center font-bold"
                >
                  Agendar evento
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourthEventComponent {
  constructor() {
    console.log('E');
  }
}

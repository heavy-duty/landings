import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-third-event',
  template: `
    <div class="relative w-full h-[31.3vw] mt-[8vw]">
        <div
          class="relative bg-white bp-bg-paper-pattern -rotate-3 w-[50vw] h-full p-[2.5vw]"
        >
          <hd-spain-tour-push-pin-icon
            colorData="blue"
            [classPrefix]="'second-pin'"
            class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
          ></hd-spain-tour-push-pin-icon>
          <hd-spain-tour-push-pin-icon
            colorData="green"
            [classPrefix]="'third-pin'"
            class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
          ></hd-spain-tour-push-pin-icon>
          <hd-spain-tour-post-card-icon
            [classPrefix]="'-third-event'"
            [firstColor]="'#63FF85'"
            [secondColor]="'#00C2FF'"
            class="absolute block w-full top-0 left-0"
          ></hd-spain-tour-post-card-icon>

          <div class="relative w-full h-full flex">
            <!-- Postcard image section-->
            <div class="basis-[70%] h-full bp-bg-third-event"></div>

            <!-- Postcard info section -->
            <div class="relative basis-[30%] h-full  px-[1vw]">
              <p
                class="text-[1.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
              >
                <span class="block">Meeting #3:</span>
                <span class="block">Todo sobre "Wallets".</span>
              </p>
              <a href="https://goo.gl/maps/qy6ob8VkteYCxR428" target="_blank">
                <div
                  class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
                >
                  <i class="fal fa-map-marker-alt text-[1vw]"></i>
                  <p class="bp-landing-font text-[1vw] font-light">
                    ULab Co-working
                  </p>
                </div>
                <div
                  class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
                >
                  <div class="basis-[.7vw]"></div>
                  <p class="bp-landing-font text-[1vw] font-light">
                    Pl. Sant Cristòfol, 14
                  </p>
                </div>
                <div
                  class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
                >
                  <div class="basis-[.7vw]"></div>
                  <p class="bp-landing-font text-[1vw] font-light ">Alicante</p>
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
                <p class="bp-landing-font text-[1vw] font-light">28/09/2023</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[2vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">
                  10:00 - 13:00
                </p>
              </div>

              <div class="absolute w-full bottom-0 left-0 px-[1vw]">
                <!-- This is only necessary for max zoom 500% avoid moving-->
                <a
                  href="https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting+%233+-+Privates+Keys+y+Wallets.&details=Tercer+evento+del+Tour+por+espa%C3%B1a+de+Solana.&location=ULab%2C+Pl.+Sant+Crist%C3%B2fol%2C+14%2C+03002+Alacant%2C+Alicante%2C+Spain&dates=20230928T090000Z%2F20230928T120000Z"
                  target="_blank"
                  class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#FFBC58] border-[.1vw] border-gray-800 hover:bg-[#f7a93b] text-center font-bold"
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
export class ThirdEventComponent {
  constructor() {
    console.log('E');
  }
}

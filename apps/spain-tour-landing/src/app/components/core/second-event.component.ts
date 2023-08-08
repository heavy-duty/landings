import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-second-event',
  template: `
    <div class="relative w-full h-[31.3vw] mt-[11vw]">
      <div
        class="absolute bg-white bp-bg-paper-pattern w-[50vw] rotate-3 h-full p-[2.5vw] right-0"
      >
        <hd-spain-tour-push-pin-icon
          class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-push-pin-icon
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
              class="text-[1.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
            >
              <span class="block">Meeting #2:</span>
              <span class="block">Programas y renta.</span>
            </p>
            <a href="https://goo.gl/maps/5N33J5ZtjX6FBPgh8" target="_blank">
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-map-marker-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Innovation Campus,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                  Calle Puerto 14,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">Málaga.</p>
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
              <i class="fal fa-calendar-alt text-[1vw]"></i>
              <p class="bp-landing-font text-[1vw] font-light">26/09/2023</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[2vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light ">
                15:00 - 17:00
              </p>
            </div>

            <div class="absolute w-full bottom-0 left-0 px-[1vw]">
              <!-- This is only necessary for max zoom 500% avoid moving-->
              <a
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Meeting+%232+-+Programas+en+Solana.&details=Segundo+evento+del+Tour+por+espa%C3%B1a+de+Solana.&location=Innovation+Campus+-+Malaga+Terrace+coworking%2C+Calle+Puerto%2C+14%2C+29016+M%C3%A1laga%2C+Spain&dates=20230926T140000Z%2F20230926T160000Z"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#6BFF7D] border-[.1vw] border-gray-800 hover:bg-[#4ff963] text-center font-bold"
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
export class SecondEventComponent {
  constructor() {
    console.log('E');
  }
}

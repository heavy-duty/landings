import { Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-root',
  template: `
    <section class="flex justify-center mb-[2vw] px-[7vw]">
      <div class="w-full h-[62vw] relative mt-[5vw]">
        <hd-spain-tour-main-card-icon
          class="absolute w-full"
        ></hd-spain-tour-main-card-icon>
        <div class="px-[2.5vw] pt-[1vw] pb-[2vw]">
          <hd-spain-tour-sun-sticker-icon
            class="absolute w-[8vw] top-[-2.5vw] right-[1vw]"
          ></hd-spain-tour-sun-sticker-icon>
          <div class="relative flex flex-col items-center mb-[1vw]">
            <hd-spain-tour-red-dot-icon
              class="block w-[2vw]"
            ></hd-spain-tour-red-dot-icon>
            <h1 class="text-[3vw] bp-amatic-font text-center font-bold">
              Tour por las Islas Canarias
            </h1>
            <hd-spain-tour-red-line-icon
              class="block w-[13vw] ml-[12vw] -mt-[1vw]"
            ></hd-spain-tour-red-line-icon>
          </div>
          <div class="bg-[#0ac0ff] w-full h-[38vw] relative">
            <div class="absolute bottom-[3vw] left-[2vw]">
              <p class="bp-beach-sunshine-font text-[3vw]">El Hierro</p>
              <hd-spain-tour-el-hierro-island-icon
                class="block w-[10vw]"
              ></hd-spain-tour-el-hierro-island-icon>
            </div>
            <div class="absolute top-[3vw] left-[6vw]">
              <p class="bp-beach-sunshine-font text-[3vw]">La Palma</p>
              <hd-spain-tour-la-palma-island-icon
                class="block w-[8vw]"
              ></hd-spain-tour-la-palma-island-icon>
            </div>
            <div
              class="absolute bottom-[8vw] left-[15vw] flex flex-col items-center"
            >
              <hd-spain-tour-la-gomera-island-icon
                class="block w-[8vw]"
              ></hd-spain-tour-la-gomera-island-icon>
              <p class="bp-beach-sunshine-font text-[3vw]">La Gomera</p>
            </div>
            <div class="absolute bottom-[11vw] left-[24vw]">
              <p class="bp-beach-sunshine-font text-[3vw]">Tenerife</p>
              <hd-spain-tour-tenerife-island-icon
                class="block w-[17vw]"
              ></hd-spain-tour-tenerife-island-icon>
            </div>
            <div class="absolute bottom-[8vw] left-[44vw] text-right">
              <p class="bp-beach-sunshine-font text-[3vw]">Gran</p>
              <p class="bp-beach-sunshine-font text-[3vw] -mt-[1.5vw]">
                Canaria
              </p>
              <hd-spain-tour-gran-canaria-island-icon
                class="block w-[10vw]"
              ></hd-spain-tour-gran-canaria-island-icon>
            </div>
            <div class="absolute top-[12vw] right-[9vw] z-10">
              <hd-spain-tour-fuerteventura-island-icon
                class="block w-[14vw]"
              ></hd-spain-tour-fuerteventura-island-icon>
              <p class="bp-beach-sunshine-font text-[3vw]">Fuerteventura</p>
            </div>
            <div class="absolute right-[3vw]">
              <p
                class="relative bp-beach-sunshine-font text-[3vw] top-[3vw] right-[6vw]"
              >
                Lanzarote
              </p>
              <hd-spain-tour-lanzarote-island-icon
                class="block w-[10vw]"
              ></hd-spain-tour-lanzarote-island-icon>
              <hd-spain-tour-airscrew-icon
                class="block absolute w-[2vw] z-20 bottom-[5.1vw] left-[4.3vw]"
              ></hd-spain-tour-airscrew-icon>
            </div>
          </div>

          <div class="w-full flex justify-center">
            <hd-spain-tour-red-dot-icon
              class="block w-[2vw] absolute bottom-[2vw]"
            ></hd-spain-tour-red-dot-icon>
          </div>
        </div>
      </div>
    </section>
    <section class="my-[4vw] px-[7vw]">
      <div class="flex justify-between">
        <div class="relative block w-[22vw]">
          <img
            src="assets/images/road_map.webp"
            alt="roadmap Tour Text image"
            class="w-full"
          />
        </div>
        <div class="relative flex justify-center w-[18vw] right-[2vw]">
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] top-[1vw] mr-[2.5vw] z-10"
          ></hd-spain-tour-red-dot-icon>
          <img
            src="assets/images/green_post_it_2.webp"
            alt="green Post-It first sponsor spot"
            class="w-full -rotate-6"
          />
        </div>
      </div>

      <!-- first event -->
      <div class="relative w-full h-[31.3vw] ">
        <div class="relative bg-white -rotate-3 w-[50vw] h-full p-[2.5vw]">
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] z-10 top-[1.5vw] left-[2vw]"
          ></hd-spain-tour-red-dot-icon>
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] z-10 top-[1.5vw] right-[2vw]"
          ></hd-spain-tour-red-dot-icon>
          <hd-spain-tour-post-card-icon
            [classPrefix]="'-first-event'"
            [firstColor]="'#00c2ff'"
            [secondColor]="'#ff6363'"
            class="absolute block w-full top-0 left-0"
          ></hd-spain-tour-post-card-icon>

          <div class="relative w-full h-full flex">
            <div class="basis-[70%] h-full bg-black"></div>
            <div class="basis-[30%] h-full  px-[1vw]">
              <p
                class="text-[1.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
              >
                <span class="block">Meeting #1:</span>
                <span class="block">Conceptos Básicos</span>
              </p>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-map-marker-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Location to be
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">defined</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-calendar-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Date to be defined
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[2vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>

              <div class="relative w-full">
                <!-- This is only necessary for max zoom 500% avoid moving-->
                <button
                  class="absolute top-0 bp-amatic-font text-[2vw] p-[.3vw] w-full bg-[#98e6ff] border-[.1vw] border-gray-800 hover:bg-[#83dcf7]"
                >
                  Más detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- line from first event to second event-->
      <div class="relative w-full h-[22vw]">
        <img
          src="assets/images/arrow_1-2.png"
          class="absolute w-[33vw] right-[1vw] -top-[15vw]"
        />
      </div>

      <!-- second event-->
      <div class="relative w-full h-[31.3vw]">
        <div
          class="absolute bg-white w-[50vw] rotate-3 h-full p-[2.5vw] right-0"
        >
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] z-10 top-[1.5vw] left-[2vw]"
          ></hd-spain-tour-red-dot-icon>
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] z-10 top-[1.5vw] right-[2vw]"
          ></hd-spain-tour-red-dot-icon>
          <hd-spain-tour-post-card-icon
            [classPrefix]="'-second-event'"
            [firstColor]="'#00C2FF'"
            [secondColor]="'#FFA463'"
            class="absolute block w-full top-0 left-0"
          ></hd-spain-tour-post-card-icon>

          <div class="relative w-full h-full flex">
            <div class="basis-[70%] h-full bg-black"></div>
            <div class="basis-[30%] h-full  px-[1vw]">
              <p
                class="text-[1.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
              >
                <span class="block">Meeting #2:</span>
                <span class="block">Programas en Solana</span>
              </p>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-map-marker-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Location to be
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">defined</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-calendar-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Date to be defined
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[2vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>

              <div class="relative w-full">
                <!-- This is only necessary for max zoom 500% avoid moving-->
                <button
                  class="absolute top-0 bp-amatic-font text-[2vw] p-[.3vw] w-full bg-[#6BFF7D] border-[.1vw] border-gray-800 hover:bg-[#4ff963]"
                >
                  Más detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- line from second event to third event-->
      <div class="relative w-full h-[22vw]">
        <img
          src="assets/images/arrow_2-3.png"
          class="absolute w-[34vw] left-[1vw] -top-[13vw]"
        />
      </div>

      <!-- third event -->
      <div class="relative w-full h-[31.3vw] ">
        <div class="relative bg-white -rotate-3 w-[50vw] h-full p-[2.5vw]">
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] z-10 top-[1.5vw] left-[2vw]"
          ></hd-spain-tour-red-dot-icon>
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] z-10 top-[1.5vw] right-[2vw]"
          ></hd-spain-tour-red-dot-icon>
          <hd-spain-tour-post-card-icon
            [classPrefix]="'-third-event'"
            [firstColor]="'#63FF85'"
            [secondColor]="'#00C2FF'"
            class="absolute block w-full top-0 left-0"
          ></hd-spain-tour-post-card-icon>

          <div class="relative w-full h-full flex">
            <div class="basis-[70%] h-full bg-black"></div>
            <div class="basis-[30%] h-full  px-[1vw]">
              <p
                class="text-[1.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
              >
                <span class="block">Meeting #3:</span>
                <span class="block">Privates Keys y Wallets</span>
              </p>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-map-marker-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Location to be
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">defined</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-calendar-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Date to be defined
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[2vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>

              <div class="relative w-full">
                <!-- This is only necessary for max zoom 500% avoid moving-->
                <button
                  class="absolute top-0 bp-amatic-font text-[2vw] p-[.3vw] w-full bg-[#FFBC58] border-[.1vw] border-gray-800 hover:bg-[#f7a93b]"
                >
                  Más detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- line from third event to fourth event-->
      <div class="relative w-full h-[22vw]">
        <img
          src="assets/images/arrow_3-4.png"
          class="absolute w-[34vw] right-[1vw] -top-[13vw]"
        />
      </div>

      <!-- fourth event-->
      <div class="relative w-full h-[31.3vw]">
        <div
          class="absolute bg-white w-[50vw] rotate-3 h-full p-[2.5vw] right-0"
        >
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] z-10 top-[1.5vw] left-[2vw]"
          ></hd-spain-tour-red-dot-icon>
          <hd-spain-tour-red-dot-icon
            class="absolute block w-[2vw] z-10 top-[1.5vw] right-[2vw]"
          ></hd-spain-tour-red-dot-icon>
          <hd-spain-tour-post-card-icon
            [classPrefix]="'-fourth-event'"
            [firstColor]="'#FF6363'"
            [secondColor]="'#63FF85'"
            class="absolute block w-full top-0 left-0"
          ></hd-spain-tour-post-card-icon>

          <div class="relative w-full h-full flex">
            <div class="basis-[70%] h-full bg-black"></div>
            <div class="basis-[30%] h-full  px-[1vw]">
              <p
                class="text-[1.8vw] bp-amatic-font text-left font-bold mb-[2.5vw]"
              >
                <span class="block">Meeting #4:</span>
                <span class="block">¿Qué son los NFTs?</span>
              </p>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-map-marker-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Location to be
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">defined</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[.3vw] gap-[1vw]"
              >
                <i class="fal fa-calendar-alt text-[1vw]"></i>
                <p class="bp-landing-font text-[1vw] font-light">
                  Date to be defined
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-300 mb-[2vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">.</p>
              </div>

              <div class="relative w-full">
                <!-- This is only necessary for max zoom 500% avoid moving-->
                <button
                  class="absolute top-0 bp-amatic-font text-[2vw] p-[.3vw] w-full bg-[#98e6ff] border-[.1vw] border-gray-800 hover:bg-[#83dcf7]"
                >
                  Más detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AppComponent {}

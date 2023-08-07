import { Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-root',
  template: `
    <!-- Spain map -->
    <section
      class="flex flex-col items-start mb-[12vw] px-[7vw] min-h-[62vw] gap-[10vw]"
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
        <!-- spain map with push pins -->
        <div class="relative w-[50vw]">
          <img
            src="assets/images/spain_folded_paper.png"
            alt="Spain Mailand map in a paper"
            class="block w-full"
            width="908"
            height="807"
          />

          <img
            src="assets/images/tape.png"
            alt="top tape on Mainland map paper"
            class="absolute -top-[1vw] left-[18vw] w-[13vw] rotate-3"
          />

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

          <div
            class="absolute w-full px-[2vw] bottom-0"
          >
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
        <div class="relative w-[42vw]">
          <!-- first post-it-->
          <div class="absolute w-[25vw] top-[1vw] right-[9vw]">
            <img
              src="assets/images/blue_post_it_3.webp"
              class="relative w-full left-[2vw] -rotate-3"
              alt="blue Post-It third sponsor spot"
            />
            <img
              src="assets/images/heavyduty_sticker.webp"
              class="absolute w-[10vw] -top-[3vw] -left-[1.5vw] -rotate-12"
              alt="Heavy Duty Builders graffiti sticker"
            />
            <hd-spain-tour-push-pin-icon
              colorData="yellow"
              [classPrefix]="'fifth-pin'"
              class="absolute block w-[3vw] z-10 top-[.5vw] left-[13vw]"
            ></hd-spain-tour-push-pin-icon>
          </div>

          <!-- second post-it-->
          <div
            class="absolute flex justify-center w-[20vw] top-[23vw] right-[12vw]"
          >
            <hd-spain-tour-push-pin-icon
              class="absolute block w-[3vw] top-[1vw] mr-[2.5vw] z-10"
              colorData="purple"
              [classPrefix]="'seven-pin'"
            ></hd-spain-tour-push-pin-icon>
            <img
              src="assets/images/green_post_it_2.webp"
              alt="green Post-It first sponsor spot"
              class="w-full -rotate-6"
            />
          </div>

          <!-- third post-it-->
          <div class="absolute w-[28vw] top-[46vw] left-[4vw]">
            <img
              src="assets/images/folded_paper.webp"
              class="relative w-full left-[2vw] -rotate-3"
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

      <div class="relative"></div>
    </section>

    <section class="my-[4vw] px-[7vw]">
      <!-- Roadmap  -->
      <div class="flex justify-between mb-[4vw]">
        <div class="relative block w-[45vw]">
          <img
            src="assets/images/road_map.png"
            alt="roadmap Tour Text image"
            class="w-full"
          />
        </div>
      </div>

      <!-- first event -->
      <div class="relative w-full h-[31.3vw]">
        <div
          class="relative bg-white bp-bg-paper-pattern -rotate-3 w-[50vw] h-full p-[2.5vw]"
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
            <div class="basis-[70%] h-full bp-bg-first-event"></div>
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
                  <i class="fal fa-map-marker-alt text-[1vw]"></i>
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
                <p class="bp-landing-font text-[1vw] font-light">24/09/2023</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[2vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">
                  14:00 18:00
                </p>
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
      </div>

      <!-- line from first event to second event-->
      <div class="relative w-full h-[22vw]">
        <img
          src="assets/images/arrow_1-2.webp"
          class="absolute w-[33vw] right-[1vw] -top-[5vw]"
          alt="arrow from first postcard event to second postcard event"
        />
      </div>

      <!-- second event-->
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
            <div class="basis-[70%] h-full bp-bg-second-event"></div>
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

      <!-- line from second event to third event-->
      <div class="relative w-full h-[22vw]">
        <div class="absolute w-[20vw] top-[7vw] right-[3vw] z-10">
          <img
            src="assets/images/sponsors_paper.png"
            class="relative w-full rotate-12"
            alt="Sponsor text paper"
          />
        </div>
        <div class="absolute w-[16vw] top-[19vw] right-[18vw] z-10">
          <a
            href="https://solanamonkey.business/"
            aria-label="Official link to SMB"
            target="_blank"
          >
            <img
              src="assets/images/sponsors/logo_smb.webp"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="SMB sticker"
            />
          </a>
        </div>

        <div class="absolute w-[19vw] top-[22vw] -right-[2vw] z-10">
          <a
            href="https://claynosaurz.com/"
            aria-label="Official link to ClaynoSaurz"
            target="_blank"
          >
            <img
              src="assets/images/sponsors/logo_claynosaurz.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-12"
              alt="Claynosaurz sticker"
            />
          </a>
        </div>
        <div class="absolute w-[15vw] top-[34vw] right-[10vw]">
          <a
            href="https://drip.haus/"
            target="_blank"
            aria-label="Drip official link"
          >
            <img
              src="assets/images/sponsors/drip_photo.png"
              class="relative w-full rotate-12"
              alt="Drip Haus logo photo sponsor"
            />
          </a>
          <hd-spain-tour-push-pin-icon
            colorData="blue"
            classPrefix="pin-drip"
            class="absolute block w-[3vw] z-10 -top-[.5vw] left-[2vw]"
          ></hd-spain-tour-push-pin-icon>
          <hd-spain-tour-push-pin-icon
            colorData="blue"
            classPrefix="pin-drip"
            class="absolute block w-[3vw] z-10 -bottom-[.5vw] right-[2vw]"
          ></hd-spain-tour-push-pin-icon>
        </div>
        <img
          src="assets/images/arrow_2-3.webp"
          class="absolute w-[34vw] left-[1vw] -top-[6vw]"
          alt="arrow from second postcard event to third postcard event"
        />
      </div>

      <!-- third event -->
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
            <div class="basis-[70%] h-full bp-bg-third-event"></div>
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

      <!-- line from third event to fourth event-->
      <div class="relative w-full h-[22vw]">
        <div class="absolute w-[20vw] top-[7vw] left-[3vw] z-10">
          <img
            src="assets/images/sponsors_paper.png"
            class="relative w-full"
            alt="Sponsor text paper"
          />
        </div>

        <div class="absolute w-[12vw] top-[20vw] left-[3vw] z-10">
          <a href="https://de.superteam.fun/" target="_blank">
            <img
              src="assets/images/sponsors/logo_superteam_berlin_sticker.png"
              class="relative w-full rotate-12"
              alt="Logo SuperTeam Germany Sponsor"
            />
          </a>
        </div>

        <div class="absolute w-[12vw] top-[30vw] left-[17vw] z-10">
          <a href="https://ultimate.app/" target="_blank">
            <img
              src="assets/images/sponsors/logo_ultimate.png"
              class="relative w-full -rotate-12"
              alt="Logo Ultimate App Sponsor"
            />
          </a>
        </div>

        <div class="absolute w-[10vw] top-[36vw] left-[2vw] z-10">
          <a href="https://mango.markets" target="_blank">
            <img
              src="assets/images/sponsors/logo_mango.png"
              class="relative w-full -rotate-12"
              alt="Logo Mango App Sponsor"
            />
          </a>
        </div>

        <img
          src="assets/images/arrow_3-4.webp"
          class="absolute w-[34vw] right-[1vw] -top-[8vw]"
          alt="arrow from third postcard event to fourth postcard event"
        />
      </div>

      <!-- fourth event-->
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
            <div class="basis-[70%] h-full bp-bg-fourth-event"></div>
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
    </section>

    <footer class="flex justify-between mt-[10vw]">
      <!-- Heavy Duty Builders Info-->
      <div
        class="relative w-[24vw] h-[23vw] -mt-[5vw] left-[10vw] mb-[5vw] -rotate-12"
      >
        <img
          src="assets/images/yellow_post_it_1.webp"
          class="absolute w-full rotate-3"
          alt="Yellow sticker with footer information"
        />
        <img
          src="assets/images/logo_heavyduty_beware.webp"
          class="absolute w-[65%] -top-[3vw] left-[3vw] -rotate-12"
          alt="Beware Heavy Duty Builders sticker"
        />
        <div class="relative flex justify-around top-[6vw] pl-[2vw] px-[2.5vw]">
          <a
            href="https://twitter.com/HeavyDutyBuild"
            aria-labe="Official Twitter Link"
            target="_blank"
          >
            <hd-spain-tour-twitter-icon
              class="block w-[5vw]"
            ></hd-spain-tour-twitter-icon>
          </a>
          <a
            href="https://discord.com/invite/sbjg5YvYfM"
            aria-labe="Official Discord Link"
            target="_blank"
          >
            <hd-spain-tour-discord-icon
              class="block w-[5vw]"
            ></hd-spain-tour-discord-icon>
          </a>
          <a
            href="https://github.com/heavy-duty"
            aria-label="Official Github Link"
            target="_blank"
          >
            <hd-spain-tour-github-icon
              class="block w-[5vw]"
            ></hd-spain-tour-github-icon>
          </a>
        </div>
        <div
          class="relative top-[6vw] w-full flex flex-col items-center mt-[1vw]"
        >
          <div class="relative  w-[80%]">
            <a
              href="https://heavyduty.builders/"
              aria-labe="Official HeavyDuty Website link"
              target="_blank"
            >
              <hd-spain-tour-website-link-icon
                class="w-full"
              ></hd-spain-tour-website-link-icon>
            </a>
          </div>
          <div class="relative w-[60%] mt-[1vw]">
            <img
              src="assets/images/footer_terms_text.webp"
              class="w-full"
              alt="Heavy Duty Builders terms & conditions link"
            />
          </div>
          <div class="relative w-[55%] mt-[.5vw]">
            <img
              src="assets/images/footer_copyleft_text.webp"
              class="w-full"
              alt="Heavy Duty Builders copyrights"
            />
          </div>
        </div>
      </div>

      <!-- Next Hackathon information -->
      <div class="relative w-[17vw] h-[17vw] top-[2vw] right-[12vw] rotate-6">
        <div class="absolute w-[11vw] top-[10vw] right-[20vw]">
          <a
            href="https://solana.com/events"
            aria-label="Official link to Solana Events 2023"
            target="_blank"
          >
            <img
              src="assets/images/logo_hackershouse_sticker.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Solana Hacker House sticker"
            />
          </a>
        </div>

        <a href="https://solana.com/grizzlython" target="_blank">
          <img
            src="assets/images/hackathon_post_it.webp"
            class="w-full"
            alt="Next hackathon orange Post-it"
          />
        </a>
        <a href="https://solana.com/" target="_blank">
          <img
            src="assets/images/logo_solana_sticker.png"
            class="absolute w-[6vw] -top-[1vw] -left-[1.5vw] -rotate-12"
            alt="Solana logo sticker"
          />
        </a>
        <hd-spain-tour-push-pin-icon
          colorData="green"
          [classPrefix]="'footer-pin'"
          class="absolute block w-[3vw] z-10 top-[0vw] right-[2vw]"
        ></hd-spain-tour-push-pin-icon>
      </div>
    </footer>
  `,
})
export class AppComponent {}

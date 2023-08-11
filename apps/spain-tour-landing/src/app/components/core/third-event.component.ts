import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-third-event',
  template: `
    <div class="relative flex gap-[5vw] w-full pt-[13vw]" id="third-event-section">
      <!-- Postcard -->
      <div
        class="relative bg-white bp-bg-paper-pattern -rotate-3 w-[50vw] h-[31.3vw] p-[2.5vw] right-0"
      >
        <hd-spain-tour-push-pin-icon
          colorData="lightBlue"
          [classPrefix]="'second-pin'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-push-pin-icon
          colorData="lightBlue"
          [classPrefix]="'third-pin'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
        ></hd-spain-tour-push-pin-icon>
        <hd-spain-tour-post-card-icon
          [classPrefix]="'-third-event'"
          [firstColor]="'#7e64ef'"
          [secondColor]="'#fc55a6'"
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
            <a href="https://goo.gl/maps/qy6ob8VkteYCxR428" target="_blank" aria-label="Link to third event location on google maps">
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
                src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_21/q_auto/f_auto/v1691707714/images/icons/calendar_zucjxg.webp"
                class="absolute w-[1.1vw] left-[1.2vw]"
                alt="Calendar icon"
              />
              <div class="basis-[.7vw]"></div>
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
                aria-label="Schedule third event action"
              >
                Agendar evento
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <!-- Information text -->
        <div class="relative w-[24vw]">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_461/q_auto/f_auto/v1691707717/images/information_paper_fvclx1.webp"
            class="w-full rotate-3"
            alt="Information text on a paper"
          />
        </div>

        <!-- Post-it information -->
        <div class="relative w-[22vw] mt-[2vw] ml-[5vw] rotate-6">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_422/q_auto/f_auto/v1691707711/images/post_it_pink_prlmro.webp"
            alt="pink post-it with some information"
            class="relative w-full"
          />
          <a href="https://lu.ma/m1op9i7b" target="_blank" aria-label="Official link to the third tour event">
            <hd-spain-tour-event-more-info-icon
              class="absolute w-[13vw] left-[4.3vw] bottom-[4.5vw] z-10"
              [classPrefix]="'sixth-event3'"
            ></hd-spain-tour-event-more-info-icon>
          </a>
          <hd-spain-tour-push-pin-icon
            colorData="lightBlue"
            [classPrefix]="'sixth-2-event-pin'"
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
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_307/q_auto/f_auto/v1691707713/images/sponsors_paper_z1mjqh.webp"
          class="w-full"
          alt="Information text on a paper"
        />
      </div>

      <!-- Sticker logos -->
      <div class="relative h-[26vw]">
        <div class="absolute w-[11vw] top-[4vw] left-[6vw] z-10">
          <a
            href="https://ultimate.app/"
            aria-label="Official link to Ultimate Wallet"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_211/q_auto/f_auto/v1691707715/images/sponsors/logo_ultimate_oa9aih.webp"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Ultimate Wallet sticker"
            />
          </a>
        </div>
        <div class="absolute w-[11vw] top-[14vw] left-[16vw] z-10">
          <a
            href="https://de.superteam.fun"
            aria-label="Official link to SuperTeam Germany"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_211/q_auto/f_auto/v1691707716/images/sponsors/logo_superteam_berlin_sticker_vosnkx.webp"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="SuperTeam Germany sticker"
            />
          </a>
        </div>
        <div class="absolute w-[10vw] top-[3vw] left-[27vw] z-10">
          <a
            href="https://mango.markets/"
            aria-label="Official link to Mango Markets"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_192/q_auto/f_auto/v1691707715/images/sponsors/logo_mango_k7zelw.webp"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Mango Markets sticker"
            />
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdEventComponent {

}

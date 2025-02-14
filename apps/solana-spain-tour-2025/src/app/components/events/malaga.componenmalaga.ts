import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushPinIconComponent } from '../push-pin.icon';
import { PostCardIconComponent } from '../post-card.icon';
import { EventMoreInfoIconComponent } from '../event-more-info.icon';

@Component({
  selector: 'spain-tour-malaga-event',
  imports: [
    PushPinIconComponent,
    PostCardIconComponent,
    EventMoreInfoIconComponent,
  ],
  standalone: true,
  template: `
    <div
      class="relative flex gap-[5vw] w-full pt-[12vw]"
      id="malaga-event-section"
    >
      <!-- Postcard -->
      <div
        class="relative bg-white bp-bg-paper-pattern rotate-3 w-[50vw] h-[31.3vw] p-[2.5vw] -right-[4vw] order-2"
      >
        <spain-tour-push-pin-icon
          colorData="purple"
          [classPrefix]="'malaga-event-pint-1'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
        ></spain-tour-push-pin-icon>
        <spain-tour-push-pin-icon
          colorData="purple"
          [classPrefix]="'malaga-event-pint-2'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
        ></spain-tour-push-pin-icon>
        <spain-tour-post-card-icon
          [classPrefix]="'-malaga-event'"
          [firstColor]="'#46ea69'"
          [secondColor]="'#14b4e5'"
          class="absolute block w-full top-0 left-0"
        ></spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">
          <!-- Postcard image section-->
          <div class="basis-[70%] h-full bp-bg-malaga-event"></div>

          <!-- Postcard info section -->
          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p class="text-[3.8vw] bp-amatic-font text-left font-bold mb-[0vw]">
              <span class="block">Málaga</span>
            </p>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <a href="https://maps.app.goo.gl/RLqjo2NkP7K9jZ7p7" target="_blank">
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <!-- <i class="fal fa-map-marker-alt text-[1vw]"></i> -->
                <img
                  src="https://res.cloudinary.com/andresmgsl/image/upload/w_29/q_auto/f_auto/v1691707713/images/icons/location_l31pvh.webp"
                  class="absolute w-[1.5vw] left-[1vw]"
                  alt="Calendar icon"
                />
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                  Blvr. Louis Pasteur,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">
                  47, Campanillas,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">
                  29019, Málaga.
                </p>
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
              <!-- <i class="fal fa-calendar-alt text-[1vw]"></i> -->
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_21/q_auto/f_auto/v1691707714/images/icons/calendar_zucjxg.webp"
                class="absolute w-[1.1vw] left-[1.2vw]"
                alt="Calendar icon"
              />
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light">26/02/2025</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[2vw] gap-[1vw]"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_21/q_auto/f_auto/v1694100214/Clock_dcuean.png"
                class="absolute w-[1.1vw] left-[1.2vw]"
                alt="Calendar icon"
              />
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light ">
                18:00 - 21:00
              </p>
            </div>

            <div class="absolute w-full bottom-0 left-0 px-[1vw]">
              <!-- This is only necessary for max zoom 500% avoid moving-->
              <a
                href="https://lu.ma/7un9600u"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#6BFF7D] border-[.1vw] border-gray-800 hover:bg-[#4ff963] text-center font-bold"
                aria-label="Schedule malaga event action"
              >
                ¡Apúntate!
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
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840550/tour-2025/Palabras/informacion.png"
            class="w-full -rotate-3"
            alt="Information text on a paper"
          />
        </div>

        <!-- Post-it information -->
        <div class="relative w-[22vw] mt-[2vw] ml-[5vw] -rotate-6 order-1">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1739371445/tour-2025/postales/malaga/malaga.png"
            alt="purple post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/7un9600u"
            target="_blank"
            aria-label="Official link to the malaga tour event"
          >
            <spain-tour-event-more-info-icon
              class="absolute w-[18vw] left-[2vw] bottom-[1.5vw] z-10"
              [classPrefix]="'sixth-event243'"
            ></spain-tour-event-more-info-icon>
          </a>
        </div>
      </div>
    </div>

    <!-- Event sponsors -->
    <div class="relative w-full flex flex-col items-end">
      <!-- Sponsor text -->
      <div class="relative w-[16vw] mt-[4vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_307/q_auto/f_auto/v1692815512/Partners_qdxiud.png"
          class="w-full"
          alt="Information text on a paper"
        />
      </div>

      <!-- Partners logos -->
      <div
        class="relative w-[85vw] mt-[2vw] right-[1vw] flex flex-col items-end"
      >
        <div class="relative w-[16vw] -rotate-[6deg]">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1694101554/Universidad-malaga-sticker_xcqtib.png"
            class="w-full"
            alt="Official Cultura C3 logo"
          />
        </div>
        <div
          class="relative w-[16vw] right-[17vw] -top-[10vw] h-[5vw] rotate-[5deg]"
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1739490970/tour-2025/unknown-gravity-logo.png"
            class="w-full"
            alt="Official unknown gravity logo"
          />
        </div>
        <div
          class="relative w-[18vw] -left-[10vw] -top-[3vw] h-[5vw] -rotate-[8deg]"
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1739493478/tour-2025/blockchain-malaga_jvqvau.png"
            class="w-full"
            alt="Official blockchain malaga logo"
          />
        </div>
      </div>
    </div>

    <!-- Cnnector line and sticker -->
    <div class="relative h-[20vw]">
      <!-- line from malaga event to other event-->
      <div class="relative w-full mb-[2vw] bg-red-300">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1691707714/images/arrow_1-2_dmfgl4.webp"
          class="absolute w-[46vw] left-[0vw] -top-[32vw] scale-x-[-1] -rotate-[12deg]"
          alt="arrow from first postcard event to second postcard event"
        />
      </div>

      <!-- plane icon -->
      <div class="absolute w-full mb-[16vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1692022453/airplane_rjo8jo.webp"
          class="absolute w-[12vw] -left-[0vw] -top-[8vw] -rotate-[16deg] scale-x-[-1]"
          alt="plane sticker"
        />
      </div>

      <!-- Purple zigzag divider -->
      <div class="relative w-full flex left-0 z-10">
        <div class="absolute w-[70vw] -top-[1vw] -right-[6vw] -rotate-6">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1739482018/tour-2025/zigzag_purple_tqiwna.png"
            class="w-full"
            alt="Purple zigzag divider "
          />
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MalagaEventComponent {}

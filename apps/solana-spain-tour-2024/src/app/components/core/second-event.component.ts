import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushPinIconComponent } from '../push-pin.icon';
import { PostCardIconComponent } from '../post-card.icon';
import { EventMoreInfoIconComponent } from '../event-more-info.icon';

@Component({
  selector: 'spain-tour-second-event',
  imports: [PushPinIconComponent, PostCardIconComponent, EventMoreInfoIconComponent],
  standalone: true,
  template: `
    <div
      class="relative flex gap-[5vw] w-full pt-[5vw]"
      id="second-event-section"
    >
      <!-- Postcard -->
      <div
        class="relative bg-white bp-bg-paper-pattern rotate-3 w-[50vw] h-[31.3vw] p-[2.5vw] -right-[4vw] order-2"
      >
        <spain-tour-push-pin-icon
          colorData="purple"
          [classPrefix]="'second-event-pint-1'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
        ></spain-tour-push-pin-icon>
        <spain-tour-push-pin-icon
          colorData="purple"
          [classPrefix]="'second-event-pint-2'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
        ></spain-tour-push-pin-icon>
        <spain-tour-post-card-icon
          [classPrefix]="'-second-event'"
          [firstColor]="'#00C2FF'"
          [secondColor]="'#FFA463'"
          class="absolute block w-full top-0 left-0"
        ></spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">
          <!-- Postcard image section-->
          <div class="basis-[70%] h-full bp-bg-second-event"></div>

          <!-- Postcard info section -->
          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p
              class="text-[3.8vw] bp-amatic-font text-left font-bold mb-[0vw]"
            >
              <span class="block">Málaga</span>
            </p>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <a href="https://goo.gl/maps/11bzGmCxsc7xrR8d7" target="_blank">
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
                <p class="bp-landing-font text-[1vw] font-light">The Green Ray,</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">
                  Bulevar Louis Pasteur
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light ">
                  29590 Málaga.
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
              <p class="bp-landing-font text-[1vw] font-light">09/28/2023</p>
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
                17:00 - 21:30
              </p>
            </div>

            <div class="absolute w-full bottom-0 left-0 px-[1vw]">
              <!-- This is only necessary for max zoom 500% avoid moving-->
              <a
                href="https://lu.ma/xh84ikcr"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#6BFF7D] border-[.1vw] border-gray-800 hover:bg-[#4ff963] text-center font-bold"
                aria-label="Schedule second event action"
              >
                Join us!
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
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_461/q_auto/f_auto/v1692122853/information_grxkq0.png"
            class="w-full -rotate-3"
            alt="Information text on a paper"
          />
        </div>

        <!-- Post-it information -->
        <div class="relative w-[22vw] mt-[2vw] ml-[5vw] -rotate-6 order-1">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_422/q_auto/f_auto/v1692122853/post_it_purple_l8klxb.png"
            alt="purple post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/xh84ikcr"
            target="_blank"
            aria-label="Official link to the second tour event"
          >
            <spain-tour-event-more-info-icon
              class="absolute w-[14.5vw] left-[4.3vw] bottom-[4vw] z-10"
              [classPrefix]="'sixth-event243'"
            ></spain-tour-event-more-info-icon>
          </a>
          <spain-tour-push-pin-icon
            colorData="purple"
            [classPrefix]="'sixth-event22-pin'"
            class="absolute block w-[3vw] z-10 top-[.5vw] left-[9.8vw]"
          ></spain-tour-push-pin-icon>
        </div>
      </div>
    </div>

    <!-- Event sponsors -->
    <div class="relative w-full flex justify-end">
      <!-- Sponsor text -->
      <div class="relative w-[16vw] mt-[4vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_307/q_auto/f_auto/v1692815512/Partners_qdxiud.png"
          class="w-full"
          alt="Information text on a paper"
        />
      </div>

      <!-- Sticker logos -->
      <div class="relative h-[26vw]">
        <div class="absolute w-[22vw] top-[12.5vw] right-[25vw] z-10">
          <a
            href="https://blockchainmalaga.es/"
            aria-label="Official Blockchain Málaga link to website"
            target="_blank"
          >
          
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_500/q_auto/f_auto/v1692813667/big_logo_rr94mf.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-6"
              alt="Blockchain Málaga logo sticker"
            />
          </a>
        </div>
        <div class="absolute w-[17vw] top-[15vw] right-[3vw] z-10">
          <a
            href="https://www.link.uma.es/"
            aria-label="Official Malaga university link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_500/q_auto/f_auto/v1694101554/Universidad-malaga-sticker_xcqtib.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-6"
              alt="Malaga university Sticker"
            />
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondEventComponent {}

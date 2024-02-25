import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushPinIconComponent } from '../push-pin.icon';
import { PostCardIconComponent } from '../post-card.icon';
import { EventMoreInfoIconComponent } from '../event-more-info.icon';

@Component({
  selector: 'spain-tour-fourth-event',
  imports: [PushPinIconComponent, PostCardIconComponent, EventMoreInfoIconComponent],
  standalone: true,
  template: `
    <div
      class="relative flex gap-[5vw] w-full pt-[5vw]"
      id="fourth-event-section"
    >
      <!-- Postcard -->
      <div
        class="relative rotate-3 w-[60vw] h-[31.3vw] p-[2.5vw] -right-[4vw] order-2"
      >
        <spain-tour-push-pin-icon
          class="absolute block w-[3vw] z-10 top-[3vw] left-[3vw]"
          colorData="green"
          [classPrefix]="'fourth-event-pin-1'"
        ></spain-tour-push-pin-icon>
        <spain-tour-push-pin-icon
          class="absolute block w-[3vw] z-10 top-[3vw] right-[3vw]"
          colorData="green"
          [classPrefix]="'fourth-event-pin-2'"
        ></spain-tour-push-pin-icon>

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1708810792/postcard_madrid_bda1f0.gif" />
        <!-- <spain-tour-post-card-icon
          [classPrefix]="'-fourth-event'"
          [firstColor]="'#46ea69'"
          [secondColor]="'#14b4e5'"
          class="absolute block w-full top-0 left-0"
        ></spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">

          <div class="basis-[70%] h-full bp-bg-fourth-event"></div>

          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p
              class="text-[3.8vw] bp-amatic-font text-left font-bold mb-[0vw]"
            >
              <span class="block">Barcelona</span>
            </p>

            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <a href="https://goo.gl/maps/L9MtSjAMpZoov5N66" target="_blank">
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <img
                  src="https://res.cloudinary.com/andresmgsl/image/upload/w_29/q_auto/f_auto/v1691707713/images/icons/location_l31pvh.webp"
                  class="absolute w-[1.5vw] left-[1vw]"
                  alt="Calendar icon"
                />
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">C d'Albert Einstein,</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">11, 08042 Barcelona.</p>
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
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_21/q_auto/f_auto/v1691707714/images/icons/calendar_zucjxg.webp"
                class="absolute w-[1.1vw] left-[1.2vw]"
                alt="Calendar icon"
              />
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light">10/11/2023</p>
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
              <p class="bp-landing-font text-[1vw] font-light">15:00 - 18:00</p>
            </div>

            <div class="absolute w-full bottom-0 left-0 px-[1vw]">
              <a
                href="https://lu.ma/1jccph9h"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#EBD738] border-[.1vw] border-gray-800 hover:bg-[#ffe900] text-center font-bold"
                aria-label="Schedule fourth event action"
              >
                Join us!
              </a>
            </div>
          </div>
        </div> -->
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
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_422/q_auto/f_auto/v1692128530/post_it_blue_ysugzq.png"
            alt="blue post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/1jccph9h"
            target="_blank"
            aria-label="Official link to the fourth tour event"
          >
            <spain-tour-event-more-info-icon
              class="absolute w-[14vw] left-[4.3vw] bottom-[3.5vw] z-10 -rotate-3"
              [classPrefix]="'sixth-event2-pin'"
            ></spain-tour-event-more-info-icon>
          </a>
          <spain-tour-push-pin-icon
            colorData="green"
            [classPrefix]="'sixth-event2-pin'"
            class="absolute block w-[3vw] z-10 top-[.5vw] left-[8.5vw]"
          ></spain-tour-push-pin-icon>
        </div>
      </div>
    </div>
    <!-- Event sponsors -->
    <div class="relative w-full">
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
        <div class="absolute w-[13vw] top-[7vw] left-[2vw] z-10">
          <a
            href="https://twitter.com/IRLeventsES"
            aria-label="Official IRL Barcelona link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_411/q_auto/f_auto/v1692888385/IRL-logo_ryb3ui.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="IRL Barcelona logo sticker"
            />
          </a>
        </div>

        <div class="absolute w-[22vw] top-[14vw] left-[20vw] z-10">
          <a
            href="https://www.42barcelona.com/es"
            aria-label="Official 42 Barcelona link to website"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_411/q_auto/f_auto/v1694112133/42-barcelona-sticker_ceo6ih.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-12"
              alt="42 Barcelona logo sticker"
            />
          </a>
        </div>
      </div>
      
      <!-- Ballerina Sticker -->
      <div class="absolute right-[1vw] top-[2vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1692280284/Ballerina_f1euu4.png"
          alt="Drawing bull"
          class="w-[15vw] rotate-6"
        />
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_134/q_auto/f_auto/v1691707717/images/tape_ogkfqm.webp"
          alt="tape for drawing ballerina"
          class="absolute w-[5vw] -rotate-[10deg] -top-[1vw] right-[5.7vw]"
        />
      </div>

      <!-- Bull Sticker -->
      <div class="absolute right-[22vw] top-[5vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_488/q_auto/f_auto/v1691707714/images/icons/bull_bsyz0y.webp"
          alt="Drawing bull"
          class="w-[17vw] rotate-6"
        />
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_134/q_auto/f_auto/v1691707717/images/tape_ogkfqm.webp"
          alt="tape for drawing bull"
          class="absolute w-[7vw] rotate-[25deg] top-[1.3vw] right-[3vw]"
        />
      </div>

      <!-- Wine -->
      <div class="absolute right-[2vw] top-[20vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/v1692282122/Wine_ltvjuk.png"
          alt="Drawing bull"
          class="w-[10vw]"
        />
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_134/q_auto/f_auto/v1691707717/images/tape_ogkfqm.webp"
          alt="tape for drawing wine"
          class="absolute w-[5vw] top-[.3vw] right-[3.5vw]"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourthEventComponent {}

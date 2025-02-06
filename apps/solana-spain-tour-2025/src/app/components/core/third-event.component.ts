import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushPinIconComponent } from '../push-pin.icon';
import { PostCardIconComponent } from '../post-card.icon';
import { EventMoreInfoIconComponent } from '../event-more-info.icon';

@Component({
  selector: 'spain-tour-third-event',
  imports: [
    PushPinIconComponent,
    PostCardIconComponent,
    EventMoreInfoIconComponent,
  ],
  standalone: true,
  template: `
    <div
      class="relative flex gap-[5vw] w-full pt-[2vw] pb-[4vw]"
      id="third-event-section"
    >
      <!-- Postcard -->
      <div class="relative -rotate-3 w-[60vw] h-[31.3vw] p-[2.5vw] right-0">
        <spain-tour-push-pin-icon
          colorData="lightBlue"
          [classPrefix]="'second-pin'"
          class="absolute block w-[3vw] z-10 top-[2vw] left-[3vw]"
        ></spain-tour-push-pin-icon>
        <spain-tour-push-pin-icon
          colorData="lightBlue"
          [classPrefix]="'third-pin'"
          class="absolute block w-[3vw] z-10 top-[2vw] right-[3vw]"
        ></spain-tour-push-pin-icon>

        <img
          class="w-full"
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1708828576/postcard_barcelona-min_fjzpjc.gif"
        />

        <!-- <spain-tour-post-card-icon
          [classPrefix]="'-third-event'"
          [firstColor]="'#7e64ef'"
          [secondColor]="'#fc55a6'"
          class="absolute block w-full top-0 left-0"
        ></spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">

          <div class="basis-[70%] h-full bp-bg-third-event"></div>


          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p
              class="text-[3.8vw] bp-amatic-font text-left font-bold mb-[0vw]"
            >
              <span class="block">Madrid</span>
            </p>

            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            
            <a href="https://goo.gl/maps/r6RXedhp2ke8d7KN8" target="_blank">
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >

                <img
                  src="https://res.cloudinary.com/andresmgsl/image/upload/w_29/q_auto/f_auto/v1691707713/images/icons/location_l31pvh.webp"
                  class="absolute w-[1.5vw] left-[1vw]"
                  alt="Calendar icon"
                />
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">ULab, Pl.</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">Sant Cristòfol, 14,</p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light"> 03002 Alacant.</p>
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
              <p class="bp-landing-font text-[1vw] font-light">10/10/2023</p>
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
                18:00 - 20:30
              </p>
            </div>
            <div class="absolute w-full bottom-0 left-0 px-[1vw]">
              <a
                href="https://lu.ma/30c49le6"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw] bg-[#FFBC58] border-[.1vw] border-gray-800 hover:bg-[#f7a93b] text-center font-bold"
                aria-label="Schedule third event action"
              >
                Join us!
              </a>
            </div>
          </div>
        </div> -->
      </div>
      <div class="relative">
        <!-- Information text -->
        <div class="relative w-[24vw]">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_461/q_auto/f_auto/v1692122853/information_grxkq0.png"
            class="w-full rotate-3"
            alt="Information text on a paper"
          />
        </div>
        <!-- Post-it information -->
        <div class="relative w-[22vw] mt-[2vw] ml-[5vw] rotate-6">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_422/q_auto/f_auto/v1694104288/post_it_pink_lokhcq.png"
            alt="pink post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/30c49le6"
            target="_blank"
            aria-label="Official link to the third tour event"
          >
            <spain-tour-event-more-info-icon
              class="absolute w-[16vw] left-[3.4vw] bottom-[3vw] z-10"
              [classPrefix]="'sixth-event3'"
            ></spain-tour-event-more-info-icon>
          </a>
          <spain-tour-push-pin-icon
            colorData="lightBlue"
            [classPrefix]="'sixth-2-event-pin'"
            class="absolute block w-[3vw] z-10 top-[.5vw] left-[9.8vw]"
          ></spain-tour-push-pin-icon>
        </div>
      </div>
    </div>
    <!-- Event sponsors -->
    <div class="relative w-full">
      <!-- Sponsor text -->
      <div class="relative w-[19vw] mt-[4vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_307/q_auto/f_auto/v1692815512/Partners_qdxiud.png"
          class="w-full"
          alt="Information text on a paper"
        />
      </div>

      <!-- Sticker logos -->
      <div class="relative h-[26vw]">
        <div class="absolute w-[22vw] top-[6vw] left-[2vw] z-10">
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
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdEventComponent {}

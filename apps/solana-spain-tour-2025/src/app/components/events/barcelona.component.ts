import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushPinIconComponent } from '../push-pin.icon';
import { PostCardIconComponent } from '../post-card.icon';
import { EventMoreInfoIconComponent } from '../event-more-info.icon';

@Component({
  selector: 'spain-tour-barcelona-event',
  imports: [
    PushPinIconComponent,
    PostCardIconComponent,
    EventMoreInfoIconComponent,
  ],
  standalone: true,
  template: `
    <div
      class="relative flex gap-[5vw] w-full pt-[5vw]"
      id="barcelona-event-section"
    >
      <!-- Postcard -->
      <div
        class="relative bg-white bp-bg-paper-pattern -rotate-3 w-[50vw] h-[31.3vw] p-[2.5vw] right-0"
      >
        <spain-tour-push-pin-icon
          colorData="blue"
          [classPrefix]="'fourth-pin'"
          class="absolute block w-[3vw] z-10 top-[1.5vw] left-[2vw]"
        ></spain-tour-push-pin-icon>
        <spain-tour-push-pin-icon
          class="absolute block w-[3vw] z-10 top-[1.5vw] right-[2vw]"
          colorData="blue"
          [classPrefix]="'barcelona-event-right-pin'"
        ></spain-tour-push-pin-icon>
        <spain-tour-post-card-icon
          [classPrefix]="'-barcelona-event'"
          [firstColor]="'#00c2ff'"
          [secondColor]="'#ff6363'"
          class="absolute block w-full top-0 left-0"
        ></spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">
          <!-- Postcard image section-->
          <div class="basis-[70%] h-full bp-bg-barcelona-event"></div>
          
          <!-- Postcard info section -->
          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p class="text-[3.8vw] bp-amatic-font text-left font-bold mb-[0vw]">
              <span class="block">barcelona</span>
            </p>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <a href="https://maps.app.goo.gl/eoFWxrw3vP8azh7h8" target="_blank">
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
                Carrer d'Albert
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                Einstein, 11,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                Nou Barris,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                
                <p class="bp-landing-font text-[1vw] font-light">
                08042 Barcelona
                  </p>
              </div>
            </a>
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
              <p class="bp-landing-font text-[1vw] font-light">19/02/2025</p>
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
                10:00 - 15:00
              </p>
            </div>

            <div class="absolute w-full bottom-0 left-0 px-[1vw]">
              <!-- This is only necessary for max zoom 500% avoid moving-->

              <a
                href="https://lu.ma/q4f98ei5"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw]  bg-[#98e6ff] border-[.1vw] border-gray-800 hover:bg-[#83dcf7] text-center font-bold"
                aria-label="Schedule first event action"
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
        <div class="relative w-[26vw]">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840550/tour-2025/Palabras/informacion.png"
            class="w-full rotate-3"
            alt="Information text on a paper"
          />
        </div>

        <!-- Post-it information -->
        <div class="relative w-[22vw] mt-[2vw] ml-[5vw] rotate-6">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1739306272/tour-2025/postales/Barcelona/barcelona.png"
            alt="green post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/q4f98ei5"
            target="_blank"
            aria-label="Official link to the first tour event"
          >
            <spain-tour-event-more-info-icon
              class="absolute  w-[17vw] left-[1.8vw] bottom-[1.2vw] z-10"
              [classPrefix]="'sixth-event0'"
            ></spain-tour-event-more-info-icon>
          </a>
          <spain-tour-push-pin-icon
            colorData="blue"
            [classPrefix]="'ff-match-pin'"
            class="absolute block w-[3vw] z-10 top-[.5vw] left-[9.8vw]"
          ></spain-tour-push-pin-icon>
        </div>
      </div>
    </div>

    <!-- Event sponsors -->
    <div class="relative w-full">
      <!-- Parthers text -->
      <div class="relative w-[16vw] mt-[4vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_307/q_auto/f_auto/v1692815512/Partners_qdxiud.png"
          class="w-full"
          alt="Information text on a paper"
        />
      </div>

      <!-- Sticker logos -->
      <div class="relative h-[26vw]">
        <div class="absolute w-[22vw] top-[2vw] left-[27vw] z-40">
          <a
            href="https://w3blab.io/"
            aria-label="Web3Labs barcelona - Official Link "
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_511/q_auto/f_auto/v1692737035/web3Lab-barcelona_vjkagh.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-3"
              alt="Web3Labs barcelona logo sticker"
            />
          </a>
        </div>

        <div class="absolute w-[22vw] top-[8vw] left-[5vw] z-40">
          <a
            href="https://www.42barcelona.com/"
            aria-label="Web3Labs barcelona - Official Link "
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_511/q_auto/f_auto/v1694093991/42-barcelona-sticker_mnw41q.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-6"
              alt="Web3Labs barcelona logo sticker"
            />
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarcelonaEventComponent {}

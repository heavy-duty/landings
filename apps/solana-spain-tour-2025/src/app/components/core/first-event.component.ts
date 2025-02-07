import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushPinIconComponent } from '../push-pin.icon';
import { PostCardIconComponent } from '../post-card.icon';
import { EventMoreInfoIconComponent } from '../event-more-info.icon';

@Component({
  selector: 'spain-tour-first-event',
  imports: [
    PushPinIconComponent,
    PostCardIconComponent,
    EventMoreInfoIconComponent,
  ],
  standalone: true,
  template: `
    <div
      class="relative flex gap-[5vw] w-full pt-[15vw]"
      id="first-event-section"
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
          [classPrefix]="'first-event-right-pin'"
        ></spain-tour-push-pin-icon>
        <spain-tour-post-card-icon
          [classPrefix]="'-first-event'"
          [firstColor]="'#00c2ff'"
          [secondColor]="'#ff6363'"
          class="absolute block w-full top-0 left-0"
        ></spain-tour-post-card-icon>

        <div class="relative w-full h-full flex">
          <!-- Postcard image section-->
          <div class="basis-[70%] h-full bp-bg-first-event"></div>

          <!-- Postcard info section -->
          <div class="relative basis-[30%] h-full  px-[1vw]">
            <p class="text-[3.8vw] bp-amatic-font text-left font-bold mb-[0vw]">
              <span class="block">Madrid</span>
            </p>
            <div
              class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
            >
              <div class="basis-[.7vw]"></div>
              <p class="bp-landing-font text-[1vw] font-light text-white">.</p>
            </div>
            <a href="https://maps.app.goo.gl/1EgDVTzCkfBD9xmv7" target="_blank">
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
                  Distrito Telefónica,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                  Edificio Norte 3,
                </p>
              </div>
              <div
                class="flex items-center border-b-[.1vw] border-slate-400 mb-[.3vw] gap-[1vw]"
              >
                <div class="basis-[.7vw]"></div>
                <p class="bp-landing-font text-[1vw] font-light">
                  28050, Madrid.
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
              <p class="bp-landing-font text-[1vw] font-light">09/27/2023</p>
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
                href="https://lu.ma/q4f98ei5"
                target="_blank"
                class="block w-full bp-amatic-font text-[2vw] p-[.3vw]  bg-[#98e6ff] border-[.1vw] border-gray-800 hover:bg-[#83dcf7] text-center font-bold"
                aria-label="Schedule first event action"
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
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_422/q_auto/f_auto/v1692123346/post_it_green_o8w7hk.png"
            alt="green post-it with some information"
            class="relative w-full"
          />
          <a
            href="https://lu.ma/q4f98ei5"
            target="_blank"
            aria-label="Official link to the first tour event"
          >
            <spain-tour-event-more-info-icon
              class="absolute w-[14vw] left-[4.6vw] bottom-[4vw] z-10"
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
            aria-label="Web3Labs Madrid - Official Link "
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_511/q_auto/f_auto/v1692737035/web3Lab-madrid_vjkagh.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-3"
              alt="Web3Labs Madrid logo sticker"
            />
          </a>
        </div>

        <div class="absolute w-[22vw] top-[8vw] left-[5vw] z-40">
          <a
            href="https://www.42madrid.com/"
            aria-label="Web3Labs Madrid - Official Link "
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/w_511/q_auto/f_auto/v1694093991/42-madrid-sticker_mnw41q.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] rotate-6"
              alt="Web3Labs Madrid logo sticker"
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
export class FirstEventComponent {}

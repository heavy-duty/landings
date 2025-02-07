import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThirdEventComponent } from './components/core/third-event.component';
import { FooterEventComponent } from './components/core/footer.component';
import { HeroSectionComponent } from './components/core/hero-section.component';
import { SecondEventComponent } from './components/core/second-event.component';
import { FirstEventComponent } from './components/core/first-event.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    FirstEventComponent,
    ThirdEventComponent,
    SecondEventComponent,
    FooterEventComponent,
    HeroSectionComponent,
  ],
  selector: 'spain-tour-root',
  template: `
    <!-- Spain map -->
    <spain-tour-hero-section></spain-tour-hero-section>

    <!-- Divider & Roadmap -->
    <div
      class="w-full relative flex justify-between items-center mt-[8vw] mb-[3vw]"
    >
      <div class="relative">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_538/q_auto/f_auto/v1691707712/images/divider_arrows_uannux.webp"
          alt="divider arrows with spain colors"
          class="w-[28vw]"
        />
      </div>

      <div class="flex justify-between">
        <div class="relative block w-[40vw] -rotate-3">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_768/q_auto/f_auto/v1691707710/images/road_map_fphuqq.webp"
            alt="Roadmap tour text image"
            class="w-full"
          />
        </div>
      </div>

      <div class="relative">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_538/q_auto/f_auto/v1691707712/images/divider_arrows_uannux.webp"
          alt="divider arrows with spain colors"
          class="w-[28vw] -scale-x-[1]"
        />
      </div>
    </div>

    <!-- Events section -->
    <section class="relative px-[7vw] overflow-hidden pb-[5vw]">
      <!-- third event -->
      <spain-tour-third-event></spain-tour-third-event>

      <!-- Orange zigzag divider -->
      <div class="absolute w-full flex left-0 z-10">
        <div class="absolute w-[70vw] -top-[3vw] -rotate-3">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1691707714/images/zigzag_orange_tqiwna.webp"
            class="w-full"
            alt="Orange zigzag divider "
          />
        </div>
      </div>

      <!-- line from third event to fourth event-->
      <div class="relative w-full mb-[16vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1691707714/images/arrow_3-4_hbjenp.webp"
          class="absolute w-[55vw] -right-[4vw] -top-[37vw]"
          alt="arrow from third postcard event to fourth postcard event"
        />
      </div>

      <!-- train icon -->
      <div class="absolute w-full mb-[16vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1692022453/train_a0d2vt.webp"
          class="absolute w-[16vw] right-[18vw] -top-[22vw] -rotate-[320deg]"
          alt="train sticker"
        />
      </div>

      <!-- second event-->
      <spain-tour-second-event></spain-tour-second-event>

      <!-- Green zigzag divider -->
      <div class="absolute w-full flex left-0 z-10">
        <div class="absolute w-[70vw] top-[3vw] -right-[1vw] -rotate-6">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1691707713/images/zigzag_green_xtvnyq.webp"
            class="w-full"
            alt="Green zigzag divider "
          />
        </div>
      </div>

      <!-- line from second event to third event-->
      <div class="relative w-full mb-[16vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1691707711/images/arrow_2-3_pczd47.webp"
          class="absolute w-[50vw] -left-[8vw] -top-[28vw]"
          alt="arrow from second postcard event to third postcard event"
        />
      </div>

      <!-- train icon -->
      <div class="absolute w-full mb-[16vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1692022453/train_a0d2vt.webp"
          class="absolute w-[16vw] left-[6vw] -top-[12vw] rotate-12 scale-x-[-1]"
          alt="train sticker"
        />
      </div>

      <!-- third event-->
      <spain-tour-first-event></spain-tour-first-event>
    </section>

    <!-- Divider & Doubts text -->
    <div
      class="w-full relative flex justify-between items-center mt-[3vw] mb-[20vw]"
    >
      <div class="relative">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_538/q_auto/f_auto/v1691707712/images/divider_arrows_uannux.webp"
          alt="divider arrows with spain colors"
          class="w-[28vw]"
        />
      </div>

      <div class="relative">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_587/q_auto/f_auto/v1692122853/questions_qkolgf.png"
          class="w-[28vw] -rotate-6"
          alt="Doubts text on a paper"
        />
      </div>

      <div class="relative">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_538/q_auto/f_auto/v1691707712/images/divider_arrows_uannux.webp"
          alt="divider arrows with spain colors"
          class="w-[28vw] -scale-x-[1]"
        />
      </div>
    </div>

    <spain-tour-footer></spain-tour-footer>
  `,
  styles: ``,
})
export class AppComponent {}

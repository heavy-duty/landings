import { Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-root',
  template: `
    <!-- Spain map -->
    <hd-spain-tour-hero-section></hd-spain-tour-hero-section>

    <!-- Divider & Roadmap -->
    <div class="w-full relative flex justify-between items-center mt-[8vw] mb-[3vw]">
      <div class="relative">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_538/q_auto/f_auto/v1691707712/images/divider_arrows_uannux.webp"
          alt="divider arrows with spain colors"
          class="w-[28vw]"
        />
      </div>

      <div class="flex justify-between">
        <div class="relative block w-[40vw] -rotate-6">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_768/q_auto/f_auto/v1691707710/images/road_map_fphuqq.webp"
            alt="Roadmap tour text image"
            class="w-full"
          />
        </div>
      </div>

      <div class="relative">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_538/q_auto/f_auto/v1691707712/images/divider_arrows_uannux.webp"
          alt="divider arrows with spain colors"
          class="w-[28vw] -scale-x-[1]"
        />
      </div>
    </div>

    <!-- Events section -->
    <section class="relative px-[7vw] overflow-hidden pb-[5vw]">
      <hd-spain-tour-first-event></hd-spain-tour-first-event>

      <!-- Blue zigzag divider -->
      <div class="absolute w-full flex left-0 z-10">
        <div class="absolute w-[70vw] -top-[4vw]">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1691707713/images/zigzag_blue_taamxn.webp"
            class="w-full"
            alt="Blue zigzag divider "
          />
        </div>
      </div>

      <!-- line from first event to second event-->
      <div class="relative w-full mb-[16vw]">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1691707714/images/arrow_1-2_dmfgl4.webp"
          class="absolute w-[46vw] right-[0vw] -top-[32vw]"
          alt="arrow from first postcard event to second postcard event"
        />
      </div>

      <!-- second event-->
      <hd-spain-tour-second-event></hd-spain-tour-second-event>

      <!-- Green zigzag divider -->
      <div class="absolute w-full flex left-0 z-10">
        <div class="absolute w-[70vw] top-[3vw] -right-[1vw] -rotate-6">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1691707713/images/zigzag_green_xtvnyq.webp"
            class="w-full"
            alt="Green zigzag divider "
          />
        </div>
      </div>

      <!-- line from second event to third event-->
      <div class="relative w-full mb-[16vw]">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1691707711/images/arrow_2-3_pczd47.webp"
          class="absolute w-[50vw] -left-[8vw] -top-[28vw]"
          alt="arrow from second postcard event to third postcard event"
        />
      </div>

      <!-- third event -->
      <hd-spain-tour-third-event></hd-spain-tour-third-event>

      <!-- Orange zigzag divider -->
      <div class="absolute w-full flex left-0 z-10">
        <div class="absolute w-[70vw] -top-[3vw] -rotate-3">
          <img
            src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1691707714/images/zigzag_orange_tqiwna.webp"
            class="w-full"
            alt="Orange zigzag divider "
          />
        </div>
      </div>

      <!-- line from third event to fourth event-->
      <div class="relative w-full mb-[16vw]">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/q_auto/f_auto/v1691707714/images/arrow_3-4_hbjenp.webp"
          class="absolute w-[55vw] -right-[4vw] -top-[37vw]"
          alt="arrow from third postcard event to fourth postcard event"
        />
      </div>

      <!-- fourth event-->
      <hd-spain-tour-fourth-event></hd-spain-tour-fourth-event>
    </section>

    <!-- Divider & Doubts text -->
    <div class="w-full relative flex justify-between items-center mt-[3vw] mb-[15vw]">
      <div class="relative">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_538/q_auto/f_auto/v1691707712/images/divider_arrows_uannux.webp"
          alt="divider arrows with spain colors"
          class="w-[28vw]"
        />
      </div>

      <div class="relative">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_587/q_auto/f_auto/v1692122853/questions_qkolgf.png"
          class="w-[22vw] rotate-6"
          alt="Doubts text on a paper"
        />
      </div>

      <div class="relative">
        <img
          src="https://res.cloudinary.com/pwcaguerrero/image/upload/w_538/q_auto/f_auto/v1691707712/images/divider_arrows_uannux.webp"
          alt="divider arrows with spain colors"
          class="w-[28vw] -scale-x-[1]"
        />
      </div>
    </div>

    <hd-spain-tour-footer></hd-spain-tour-footer>
  `,
})
export class AppComponent {}

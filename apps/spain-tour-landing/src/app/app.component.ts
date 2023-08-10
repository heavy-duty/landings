import { Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-root',
  template: `
    <!-- Spain map -->
    <hd-spain-tour-hero-section></hd-spain-tour-hero-section>

    <!-- Divider & Roadmap -->
    <div class="w-full relative flex justify-between items-center my-[8vw]">
      <div class="relative">
        <img
          src="assets/images/arrows.png"
          alt="divider arrows with spain colors"
          class="w-[28vw]"
        />
      </div>

      <div class="flex justify-between">
        <div class="relative block w-[40vw] -rotate-6">
          <img
            src="assets/images/road_map.webp"
            alt="Roadmap tour text image"
            class="w-full"
          />
        </div>
      </div>

      <div class="relative">
        <img
          src="assets/images/arrows.png"
          alt="divider arrows with spain colors"
          class="w-[28vw] -scale-x-[1]"
        />
      </div>
    </div>

    <!-- Events section -->
    <section class="px-[7vw]">
      <hd-spain-tour-first-event></hd-spain-tour-first-event>

      <!-- line from first event to second event-->
      <div class="relative w-full">
        <img
          src="assets/images/arrow_1-2.webp"
          class="absolute w-[35vw] right-[1vw] -top-[34vw]"
          alt="arrow from first postcard event to second postcard event"
        />
      </div>

      <!-- second event-->
      <hd-spain-tour-second-event></hd-spain-tour-second-event>

      <!-- line from second event to third event-->
      <div class="relative w-full">
        <img
          src="assets/images/arrow_2-3.webp"
          class="absolute w-[35vw] -left-[1vw] -top-[25vw]"
          alt="arrow from second postcard event to third postcard event"
        />
      </div>

      <!-- third event -->
      <hd-spain-tour-third-event></hd-spain-tour-third-event>

      <!-- line from third event to fourth event-->
      <div class="relative w-full ">
        <img
          src="assets/images/arrow_3-4.webp"
          class="absolute w-[38vw] right-[1vw] -top-[36vw]"
          alt="arrow from third postcard event to fourth postcard event"
        />
      </div>

      <!-- fourth event-->
      <hd-spain-tour-fourth-event></hd-spain-tour-fourth-event>
    </section>

    <!-- Divider & Doubts text -->
    <div class="w-full relative flex justify-between items-center mt-[10vw] mb-[15vw]">
      <div class="relative">
        <img
          src="assets/images/arrows.png"
          alt="divider arrows with spain colors"
          class="w-[28vw]"
        />
      </div>

      <div class="relative">
        <img
          src="assets/images/doubts_paper.webp"
          class="w-[22vw] rotate-6"
          alt="Doubts text on a paper"
        />
      </div>

      <div class="relative">
        <img
          src="assets/images/arrows.png"
          alt="divider arrows with spain colors"
          class="w-[28vw] -scale-x-[1]"
        />
      </div>
    </div>

    <hd-spain-tour-footer></hd-spain-tour-footer>
  `,
})
export class AppComponent {}

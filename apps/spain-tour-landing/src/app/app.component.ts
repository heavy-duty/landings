import { Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-root',
  template: `
    <!-- Spain map -->
    <hd-spain-tour-hero-section></hd-spain-tour-hero-section>

    <section class="my-[4vw] px-[7vw]">
      <!-- Roadmap  -->
      <div class="flex justify-between mb-[4vw]">
        <div class="relative block w-[45vw]">
          <img
            src="assets/images/road_map.png"
            alt="roadmap Tour Text image"
            class="w-full"
          />
        </div>
      </div>

      <!-- first event -->
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
          class="absolute w-[35vw] left-[1vw] -top-[28vw]"
          alt="arrow from second postcard event to third postcard event"
        />
      </div>

      <!-- third event -->
      <hd-spain-tour-third-event></hd-spain-tour-third-event>

      <!-- line from third event to fourth event-->
      <div class="relative w-full h-[22vw]">
        <img
          src="assets/images/arrow_3-4.webp"
          class="absolute w-[34vw] right-[1vw] -top-[8vw]"
          alt="arrow from third postcard event to fourth postcard event"
        />
      </div>

      <!-- fourth event-->
      <hd-spain-tour-fourth-event></hd-spain-tour-fourth-event>
    </section>

    <hd-spain-tour-footer></hd-spain-tour-footer>
  `,
})
export class AppComponent {}

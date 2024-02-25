import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PushPinIconComponent } from './components/push-pin.icon';
import { RedLineIconComponent } from './components/red-line.icon';
import { MainCardIconComponent } from './components/main-card.icon';
import { PostCardIconComponent } from './components/post-card.icon';
import { WebsiteLinkIconComponent } from './components/website-url.icon';
import { FirstEventComponent } from './components/core/first-event.component';
import { SecondEventComponent } from './components/core/second-event.component';
import { ThirdEventComponent } from './components/core/third-event.component';
import { FourthEventComponent } from './components/core/fourth-event.component';
import { FooterEventComponent } from './components/core/footer.component';
import { HeroSectionComponent } from './components/core/hero-section.component';
import { EventMoreInfoIconComponent } from './components/event-more-info.icon';

@Component({
  standalone: true,
  imports: [
    RouterModule,   
    PushPinIconComponent,
    RedLineIconComponent,
    MainCardIconComponent,
    PostCardIconComponent,
    WebsiteLinkIconComponent,
    FirstEventComponent,
    SecondEventComponent,
    ThirdEventComponent,
    FourthEventComponent,
    FooterEventComponent,
    HeroSectionComponent,
    EventMoreInfoIconComponent
  ],
  selector: 'spain-tour-root',
  template: `
   <!-- Spain map -->
   <spain-tour-hero-section></spain-tour-hero-section>

  <!-- Divider & Roadmap -->
  <div class="w-full relative flex justify-between items-center mt-[8vw] mb-[3vw]">
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
        class="absolute w-[16vw] right-[18vw] -top-[42vw] -rotate-[30deg] scale-x-[-1]"
        alt="train sticker"
      />
    </div>

    <!-- fourth event-->
    <spain-tour-fourth-event></spain-tour-fourth-event>
  </section>

  <!-- Divider & Doubts text -->
  <div class="w-full relative flex justify-between items-center mt-[3vw] mb-[20vw]">
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
export class AppComponent {
}

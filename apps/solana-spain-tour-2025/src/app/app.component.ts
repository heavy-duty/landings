import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterEventComponent } from './components/core/footer.component';
import { HeroSectionComponent } from './components/core/hero-section.component';
import { BarcelonaEventComponent } from './components/events/barcelona.component';
import { MadridEventComponent } from './components/events/madrid.componen';
import { GaliciaEventComponent } from './components/events/galicia.component';
import { MalagaEventComponent } from './components/events/malaga.componenmalaga';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    BarcelonaEventComponent,
    MadridEventComponent,
    GaliciaEventComponent,
    MalagaEventComponent,
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
      <spain-tour-barcelona-event></spain-tour-barcelona-event>

      <spain-tour-madrid-event></spain-tour-madrid-event>

      <spain-tour-galicia-event></spain-tour-galicia-event>

      <spain-tour-malaga-event></spain-tour-malaga-event>
      
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
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840554/tour-2025/Palabras/preguntas.png"
          class="w-[28vw] rotate-[3deg]"
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

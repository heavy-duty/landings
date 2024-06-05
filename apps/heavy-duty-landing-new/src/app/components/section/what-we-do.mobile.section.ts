import { Component } from '@angular/core';
import { ShowOnHoverDirective } from '../../utils';
@Component({
  standalone: true,
  imports: [ShowOnHoverDirective],
  selector: 'hdb-what-we-do-mobile',
  template: `
    <section class="relative mb-[12vw]">
      <img
        src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717582346/section_2_mobile_nsr4ed.png"
        alt="Bloques completos"
        class="absolute z-10 w-[100vw] right-[0vw]"
      />

      <div class="relative w-full flex top-[3vw] justify-center">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715131417/small_sign_z6cbac.png"
          class="relative w-[68vw] z-10"
          alt="Letrero"
        />
        <p class="absolute text-[4.5vw] top-[4.8vw] z-[20]">WHAT WE DO</p>
      </div>

      <div class="relative mt-[10vw] flex flex-col items-center gap-[2.5vw]">
        <a
          href="https://solanaspain.tours"
          class="relative"
          target="_blank"
          hdbShowOnHover
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717076013/tools_frame_bw_ttak7c.png"
            alt="tools picture black and white"
            class="w-[82vw]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717076013/tools_frame_color_tvgtvw.png"
            alt="tools picture colorful hover"
            class="w-[82vw] absolute top-[0vw] opacity-0"
          />
        </a>

        <div class="relative w-[81.5vw] bg-white border-[0.7vw] border-black p-[2.5vw]">
          <h2 class="mb-[3vw] text-center text-[3.6vw]">Solana Spain Tour</h2>
          <p class="leading-loose text-[2.5vw] text-justify">A tour around Spain to facilitate the initiation and building of our fellow devs in the Solana ecosystem. Feedback is always welcome!</p>
        </div> 
      </div>

      <div class="relative mt-[10vw] flex flex-col items-center gap-[2.5vw]">
        <a
          href="https://solanaspain.tours"
          class="relative"
          target="_blank"
          hdbShowOnHover
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717076012/bootcamp_frame_bw_ydmp60.png"
            alt="bootcamp picture black and white" 
            class="w-[82vw]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717076012/bootcamp_frame_color_dtdhyt.png"
            alt="bootcamp picture colorful hover" 
            class="w-[82vw] absolute top-[0vw] opacity-0"
          />
        </a>

        <div class="relative w-[81.5vw] bg-white border-[0.7vw] border-black p-[2.5vw]">
          <h2 class="mb-[3vw] text-center text-[3.6vw]">Solana Spain Tour</h2>
          <p class="leading-loose text-[2.5vw] text-justify">A tour around Spain to facilitate the initiation and building of our fellow devs in the Solana ecosystem. Feedback is always welcome!</p>
        </div> 
      </div>

      <div></div>
    </section>
  `,
  styles: ``,
})
export class WhatWeDoMobileComponent {
  text = 'What we do Mobile text';
}

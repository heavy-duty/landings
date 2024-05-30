import { Component } from '@angular/core';
import { ShowOnHoverDirective } from '../../utils';
@Component({
  standalone: true,
  imports: [ShowOnHoverDirective],
  selector: 'hdb-what-we-do-desktop',
  template: `
    <section class="relative py-[1.3vw] px-[3vw] mb-[6vw]">
      <img
        src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717074987/Bricks_Bricks_Section_2_lqjkaf.png"
        alt="Bloques completos"
        class="absolute z-10 w-[90vw] right-[5vw]"
      />

      <div class="w-full flex mt-[4.35vw] justify-center">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715131417/small_sign_z6cbac.png"
          class="relative w-[33vw] z-10"
          alt="Letrero"
        />
      </div>

      <div class="relative flex gap-1 mt-[6.5vw]">
        <a href="https://solanaspain.tours" class="relative left-[2.5vw]" target="_blank" hdbShowOnHover>
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717076013/tools_frame_bw_ttak7c.png"
            alt="tools picture black and white"
            class="w-[42vw]"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717076013/tools_frame_color_tvgtvw.png"
            alt="tools picture black and white"
            class="w-[42vw] absolute top-[0vw] opacity-0"
          />
        </a>

        <a href="https://solanaspain.dev" class="relative left-[7vw]" target="_blank" hdbShowOnHover>
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717076012/bootcamp_frame_bw_ydmp60.png" 
            alt="bootcamp picture black and white" 
            class="w-[42vw] "
          />
          <img 
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717076012/bootcamp_frame_color_dtdhyt.png" 
            alt="bootcamp picture black and white" 
            class="w-[42vw] absolute top-[0vw] opacity-0"
          />
        </a>
      </div>

      <div class="relative flex gap-1 mt-[1.5vw]">
        <div class="relative left-[2.7vw] w-[41.5vw] h-[12vw] bg-white border-[0.3vw] border-black">
        </div>

        <div class="relative left-[7.8vw] w-[41.5vw] h-[12vw] bg-white border-[0.3vw] border-black">
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class WhatWeDoDesktopComponent {
  text = 'What we do Desktop text';
}

import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-about-us-desktop',
  template: `
    <section class="relative py-[1.3vw] px-[3vw] mb-[12vw]">
      <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715130050/Bricks_Bricks_Section_1_swvdm2.png" alt="Bloques completos" class="absolute z-10 w-[90vw] right-[5vw]"/>

      <div class="w-full flex mt-[4.35vw] justify-center">
        <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715131417/small_sign_z6cbac.png" class="relative w-[33vw] z-10" alt="Letrero" />
      </div>

      <div class="relative flex gap-1 mt-[21vw]">
        <div class="block relative ml-[4vw]">
          <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715133022/toolbox_shadow_rik3fo.png" class="relative w-[7vw] z-10 top-[6.3vw]" alt="Caja de herramienta" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715133022/new_bob_shadow_nffjmi.png" class="relative w-[9vw] z-10 top-[0.8vw]" alt="Bob pequeño" />
        </div>

        <div class="absolute z-10 right-[1vw] -top-[14.5vw]">
          <img src="https://res.cloudinary.com/andresmgsl/image/upload/v1715132871/bob_dialog_desktop_vkedge.png" class="relative w-[71.7vw]" alt="Globo de chat de bob"/>
        </div>

        <div class="ml-[60vw]">
          <img src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715133022/cat_shadow_u7em8w.png" class="relative w-[9vw] top-[10vw] right-0 z-10" alt="Gato constructor pequeño" />
        </div>
      </div>
      <div class="gradient absolute w-full h-[10vw] left-0 -bottom-[0.8vw]"></div>
    </section>
    `,
  styles: ``,
})
export class AboutSectionDesktopComponent {
  text = 'About Us Desktop text';
}

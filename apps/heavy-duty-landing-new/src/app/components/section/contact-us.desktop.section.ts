import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-contact-us-desktop',
  template: `
    <section class="relative py-[1.3vw] px-[3vw] mb-[7vw]">
      <img
        src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715130050/Bricks_Bricks_Section_1_swvdm2.png"
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

      <div class="relative flex gap-1 -mt-[4vw]">
        <div class="relative ml-[4vw]">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717077540/pc_full_tuhvf4.png"
            class="relative  z-10 top-[5.5vw]"
            alt="Computadora"
          />
        </div>

        <div class="absolute z-10 top-[11vw] right-[15vw]">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717077540/alice_dialog_desktop_frquxh.png"
            class="relative w-[45.7vw]"
            alt="Globo de chat de Alice"
          />
        </div>

        <div class="ml-[60vw]">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_500/q_auto/f_auto/v1714505817/new_alice_shadow_c7nff5.png"
            class="absolute w-[10vw] top-[14.5vw] right-[5vw] z-10"
            alt="Alice"
          />
        </div>
      </div>
      <div
        class="gradient absolute w-full h-[10vw] left-0 -bottom-[0.8vw]"
      ></div>
    </section>
  `,
  styles: ``,
})
export class ContactUsSectionDesktopComponent {
  text = 'Contact Us Desktop text';
}

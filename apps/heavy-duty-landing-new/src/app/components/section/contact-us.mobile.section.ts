import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-contact-us-mobile',
  template: `
    <section class="relative py-[1.3vw] px-[3vw] mb-[7vw]">
      <img
        src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717672048/section_3_mobile_naso4r.png"
        alt="Bloques completos"
        class="absolute z-10 w-[100vw] right-[0vw]"
      />

      <div class="relative w-full flex top-[3vw] justify-center">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715131417/small_sign_z6cbac.png"
          class="relative w-[68vw] z-10"
          alt="Letrero"
        />
        <p class="absolute text-[4.5vw] top-[4.8vw] z-[20]">CONTACT US</p>
      </div>

      <div class="relative flex justify-end z-10 top-[11vw] right-[5vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717672476/alice_dialog_mobile_ekrxq5.png"
          class="relative w-[55.7vw]"
          alt="Globo de chat de Alice"
        />
        <p
          class="absolute top-[4.8vw] right-[2.8vw] w-[49vw] text-[2.6vw] text-justify leading-relaxed"
        >
          If you're a developer seeking a friendly and supportive community to
          join or looking for some support for your project, you've come to the
          right place!
        </p>
      </div>

      <div class="relative flex gap-[5vw]">
        <div class="relative">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717077540/pc_full_tuhvf4.png"
            class="relative w-[50vw] left-[2vw] z-10"
            alt="Computadora"
          />
        </div>

        <div class="relative">
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/w_500/q_auto/f_auto/v1714505817/new_alice_shadow_c7nff5.png"
            class="relative w-[26vw] z-10 mt-[10vw]"
            alt="Alice"
          />
        </div>
      </div>
      <div
        class="gradient absolute w-full h-[10vw] left-0 bottom-[41vw] z-[0]"
      ></div>


      <div
        class="relative mt-[10vw] flex justify-center gap-[6vw] w-[100vw] z-[20]"
      >
        <div
          class="flex justify-center items-center bg-pixel-purple w-[15vw] h-[15vw] border-[0.3vw] border-black"
        >
          <a href="https://x.com/heavydutybuild" target="_blank">
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717190449/X_icon_nltmhx.png"
              class="w-[8.5vw]"
              alt="Twitter logo"
            />
          </a>
        </div>

        <div
          class="flex justify-center items-center bg-pixel-purple w-[15vw] h-[15vw] border-[0.3vw] border-black"
        >
          <a href="https://discord.com/invite/sbjg5YvYfM" target="_blank">
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717190449/Discord_icon_iurmeu.png"
              class="w-[8.5vw]"
              alt="Discord logo"
            />
          </a>
        </div>
        <div
          class="flex justify-center items-center bg-pixel-purple w-[15vw] h-[15vw] border-[0.3vw] border-black"
        >
          <a
            href="https://www.linkedin.com/company/heavyduty-builders"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717190451/LinkedIn_icon_yw8v3p.png"
              class="w-[8.5vw]"
              alt="LinkedIn logo"
            />
          </a>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ContactUsSectionMobileComponent {
  text = 'Contact Us Mobile text';
}

import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-about-us-mobile',
  template: `
    <section class="relative mb-[25vw]">
      <img
        src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717527611/section_1_mobile_iy5k9r.png"
        alt="Bloques completos"
        class="absolute z-10 w-[100vw] right-[0vw]"
      />

      <div class="relative w-full flex top-[3vw] justify-center">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715131417/small_sign_z6cbac.png"
          class="relative w-[68vw] z-10"
          alt="Letrero"
        />
        <p class="absolute text-[4.5vw] top-[4.8vw] z-[20]">ABOUT US</p>
      </div>

      <div class="relative flex justify-center mt-[10vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717528054/bob_dialog_mobile_epavgq.png"
          alt="Globo de chat de bob"
          class="w-[85vw]"
        />
        <p
          class="absolute top-[4.5vw] left-[12.5vw] w-[75vw] text-[2.4vw] text-justify leading-relaxed"
        >
        Welcome to Heavy Duty Builders! We are a vibrant international family of developers passionately dedicated to the world of OSS and supporting our fellow software enthusiasts. Since 2021, we've united to create this community, connecting builders in the Solana ecosystem as we grow together. Our mission is to foster educational resources in the field of web3 development.
        <br />
        <br />
        Dive in with us, and let's create, share, and build on this exciting journey!
        </p>
      </div>
      <div
        class="gradient absolute w-full h-[10vw] left-0 bottom-[1vw] z-[10]"
      ></div>
      <div class="relative flex justify-center items-end z-[20]">
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715133022/toolbox_shadow_rik3fo.png"
          alt="Caja de herramienta"
          class="w-[15vw]"
        /> 
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715133022/new_bob_shadow_nffjmi.png"
          alt="Bob"
          class="w-[25vw]"
        /> 
        <img 
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1715133022/cat_shadow_u7em8w.png"
          alt="Gato constructor pequeño"
          class="w-[15vw]"
        /> 
      </div>
    </section>
  `,
  styles: ``,
})
export class AboutSectionMobileComponent {
  text = 'About Us Mobile text';
}

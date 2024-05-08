import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-hero-desktop',
  template: `
    <section class="relative py-[1.3vw] px-[3vw] mb-[12vw]">
      <h1 class="text-[4vw] mb-[1.5vw]">HEAVY DUTY <br/> BUILDERS<br/> COMMUNITY<br/></h1>
      <p class="text-[1vw] mb-[1.5vw]">¡Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit!</p>
      <button class=" bg-pixel-purple py-[0.4vw] px-[2.2vw] border-[0.2vw] border-black text-white text-[2vw]">JOIN THE BOOT CAMP</button>

      <img src="https://res.cloudinary.com/andresmgsl/image/upload/w_600/q_auto/f_auto/v1714505817/Bricks_Blocks_Hero_jagbqi.png" alt="Bloques a la mitad" class="absolute w-[48vw] top-[1vw] right-[3vw]" />

      <img src="https://res.cloudinary.com/andresmgsl/image/upload/w_500/q_auto/f_auto/v1714505817/new_bob_shadow_nffjmi.png" alt="Bob" class="absolute z-10 w-[16vw] top-[12vw] right-[24vw]" />

      <img src="https://res.cloudinary.com/andresmgsl/image/upload/w_500/q_auto/f_auto/v1714505817/new_alice_shadow_c7nff5.png" alt="Alice" class="absolute z-10 w-[16vw] top-[12vw] right-[6vw]" />

    </section>
    <div class="gradient absolute w-full h-[10vw] left-0 -bottom-[3vw]"></div>
    `,
  styles: ``,
})
export class HeroDesktopComponent {
  text = 'Hero Desktop text';
}

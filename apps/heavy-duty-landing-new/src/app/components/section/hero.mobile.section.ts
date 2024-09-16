import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-hero-mobile',
  template: `
    <section class="relative mb-[16vw]">
      <div class="flex gap-[3vw] mt-[3vw] mb-[5vw] justify-around">
        <img class="w-[20vw]" src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717521335/hero_L_xecqgb.png" alt="bloques izquierdos"/>
        <h1 class="text-[5.5vw] mt-[3.5vw] text-center">HEAVY DUTY <br/> BUILDERS<br/> COMMUNITY<br/></h1>
        <img class="w-[20vw]" src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1717521334/hero_R_zsntgu.png" alt="bloques derechos"/>
      </div>
      <!-- <div class="flex justify-center mb-[]">
        <a href="https://solanaspain.dev" class=" bg-pixel-purple py-[2.2vw] px-[6.2vw] border-[0.5vw] border-black text-white text-[3.8vw]" target="_blank">JOIN THE BOOT CAMP</a>
      </div> -->
    </section>
      `,
  styles: ``,
})
export class HeroMobileComponent {
  text = 'Hero Mobile text';
}

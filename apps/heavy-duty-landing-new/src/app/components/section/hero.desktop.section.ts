import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-hero-desktop',
  template: `
    <section class="py-[1.3vw] px-[3vw]">
      <h1 class="text-[3.5vw] mb-[1.5vw]">HEAVY DUTY <br/> BUILDERS<br/> COMMUNITY<br/></h1>
      <p class="text-[1vw] mb-[1.5vw]">¡Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit!</p>
      <button class=" bg-pixel-purple py-[0.4vw] px-[1.2vw] border-[0.2vw] border-black text-white text-[1.5vw]">JOIN THE BOOT CAMP</button>
    </section>
  
    `,
  styles: ``,
})
export class HeroDesktopComponent {
  text = 'Hero Desktop text';
}

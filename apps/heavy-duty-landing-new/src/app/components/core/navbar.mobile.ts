import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-navbar-mobile',
  template: `
    <nav
      class="flex justify-between bg-pixel-yellow py-[2vw] px-[4vw] border-b-[0.7vw] border-black"
    >
      <div class="flex gap-[3.5vw] items-center text-[3vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_300/q_auto/f_auto/v1714505939/logo_hmojql.png"
          alt="Heavy Duty Builders only helmet logo"
          class="relative w-[12vw]"
        />
        <p>HEAVY DUTY BUILDERS</p>
      </div>

      <div class="flex items-center text-[6.5vw]">
        <p>=</p>
      </div>
    </nav>
  `,
  styles: ``,
})
export class NavbarMobileComponent {
  text = 'Navbar Mobile text';
}

import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-navbar-mobile',
  template: `
    <nav
      class="flex flex-col items-center bg-pixel-yellow py-[2vw] px-[4vw] border-b-[0.7vw] border-black fixed w-[100vw] top-[0vw] z-[100]"
    >
      <div class="flex gap-[3.5vw] items-center text-[3vw]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/w_300/q_auto/f_auto/v1714505939/logo_hmojql.png"
          alt="Heavy Duty Builders only helmet logo"
          class="relative w-[12vw]"
        />
        <p>HEAVY DUTY BUILDERS</p>
      </div>

      <div class="flex mt-[3vw] gap-[4vw] items-center text-[2.5vw]">
        <a href="#about-us" aria-label="About us">
          <p>About Us</p>
        </a>
        <a href="#what-we-do" aria-label="What we do">
          <p>What We Do</p>
        </a>
        <a href="#contact-us" aria-label="Contact us">
          <p>Contact Us</p>
        </a>
      </div>
    </nav>
  `,
  styles: ``,
})
export class NavbarMobileComponent {
  text = 'Navbar Mobile text';
}

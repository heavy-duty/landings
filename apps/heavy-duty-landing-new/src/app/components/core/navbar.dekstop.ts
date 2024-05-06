import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-navbar-desktop',
  template: `
    <nav class="flex justify-between bg-pixel-yellow py-[1.2vw] px-[2vw] border-b-[0.35vw] border-black">
      <div class="flex gap-[1.5vw] items-center text-[1vw]">
        <img src="https://res.cloudinary.com/andresmgsl/image/upload/w_300/q_auto/f_auto/v1714505939/logo_hmojql.png" alt="Heavy Duty Builders only helmet logo" class="relative w-[5vw]"/>
        <p>> HEAVY DUTY BUILDERS</p>
      </div>

      <div class="flex gap-[2.5vw] items-center text-[1vw]">
        <a href="#" aria-label="About us">
          <p>About Us</p>
        </a>
        <a href="#" aria-label="What we do">
          <p>What We Do</p>
        </a>
        <a href="#" aria-label="Contact us">
          <p>Contact Us</p>
        </a>
      </div>
    </nav>
    `,
  styles: ``,
})
export class NavbarDesktopComponent {
  text = 'Navbar Desktop text';
}

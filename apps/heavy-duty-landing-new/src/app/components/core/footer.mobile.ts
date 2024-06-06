import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-footer-mobile',
  template: `
    <footer
      class="flex justify-center bg-pixel-yellow py-[4.2vw] px-[2vw] border-t-[0.6vw] border-black"
    >
      <div class="flex gap-[2.5vw] items-center text-[2.7vw]">
        <p>© 2024 HeavyDuty</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterMobileComponent {
  text = 'Footer Mobile text';
}

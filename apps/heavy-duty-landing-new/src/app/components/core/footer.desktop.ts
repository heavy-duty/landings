import { Component } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'hdb-footer-desktop',
  template: `
    <footer class="flex justify-between bg-pixel-yellow py-[2.2vw] px-[2vw] border-t-[0.2vw] border-black">
      <div class="flex gap-[1.5vw] items-center text-[0.7vw]">
        <p>© 2024 HeavyDuty</p>
        <p>Terms & Conditions</p>
      </div>

    </footer>
    `,
  styles: ``,
})
export class FooterDesktopComponent {
  text = 'Footer Desktop text';
}

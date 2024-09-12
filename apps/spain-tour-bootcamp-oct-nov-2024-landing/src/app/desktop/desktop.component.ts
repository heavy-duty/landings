import { Component } from '@angular/core';
import { INTRO_TEXT, SUCCESS_INSCRIPTION_TEXT } from '../utils';
import { ShowOnHoverDirective } from '../utils/hover.directive';

@Component({
  selector: 'bootcamp-app-desktop-component',
  template: `
    <div id="desktop-main-frame" class="relative overflow-x-hidden">
      
      <section class="relative w-[100vw] h-[33vw] z-[20]">
        <img src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923795/bootcamp-oct-2024/calendar_spanish.png" alt="calendar" class="absolute right-[2vw] top-[1.5vw] w-[20vw]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923792/bootcamp-oct-2024/cork.png" alt="cork panel" class="absolute w-[30vw] left-[5vw] top-[1.5vw]" />
      </section>

      <section class="relative w-[100vw] h-[15vw]">
        <img src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923793/bootcamp-oct-2024/book_shell.png" alt="book shell" class="absolute w-[36vw] top-[-20.9vw] left-[-14.5vw] z-[10]" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923790/bootcamp-oct-2024/pc.png" alt="pc monitor" class="absolute w-[28vw] top-[-25.9vw] left-[40vw] z-20" />

        <img src="https://res.cloudinary.com/andresmgsl/image/upload/v1725923794/bootcamp-oct-2024/table.png"  alt="wooden-table" class="w-[100vw] absolute"/>
      </section>

    </div>
  `,
  standalone: true,
  styles: [],
  imports: [ShowOnHoverDirective],
})
export class AppDesktopComponent {
  introText = INTRO_TEXT;
  successText = SUCCESS_INSCRIPTION_TEXT;
}

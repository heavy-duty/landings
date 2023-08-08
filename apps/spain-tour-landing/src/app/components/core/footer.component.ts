import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-footer',
  template: `
    <footer class="flex justify-between mt-[10vw]">
      <!-- Heavy Duty Builders Info-->
      <div
        class="relative w-[24vw] h-[23vw] -mt-[5vw] left-[10vw] mb-[5vw] -rotate-12"
      >
        <img
          src="assets/images/yellow_post_it_1.webp"
          class="absolute w-full rotate-3"
          alt="Yellow sticker with footer information"
        />
        <img
          src="assets/images/logo_heavyduty_beware.webp"
          class="absolute w-[65%] -top-[3vw] left-[3vw] -rotate-12"
          alt="Beware Heavy Duty Builders sticker"
        />
        <!-- Socials -->
        <div class="relative flex justify-around top-[6vw] pl-[2vw] px-[2.5vw]">
          <a
            href="https://twitter.com/HeavyDutyBuild"
            aria-labe="Official Twitter Link"
            target="_blank"
          >
            <hd-spain-tour-twitter-icon
              class="block w-[5vw]"
            ></hd-spain-tour-twitter-icon>
          </a>
          <a
            href="https://discord.com/invite/sbjg5YvYfM"
            aria-labe="Official Discord Link"
            target="_blank"
          >
            <hd-spain-tour-discord-icon
              class="block w-[5vw]"
            ></hd-spain-tour-discord-icon>
          </a>
          <a
            href="https://github.com/heavy-duty"
            aria-label="Official Github Link"
            target="_blank"
          >
            <hd-spain-tour-github-icon
              class="block w-[5vw]"
            ></hd-spain-tour-github-icon>
          </a>
        </div>
        
        <!-- Links -->
        <div
          class="relative top-[6vw] w-full flex flex-col items-center mt-[1vw]"
        >
          <div class="relative  w-[80%]">
            <a
              href="https://heavyduty.builders/"
              aria-labe="Official HeavyDuty Website link"
              target="_blank"
            >
              <hd-spain-tour-website-link-icon
                class="w-full"
              ></hd-spain-tour-website-link-icon>
            </a>
          </div>
          <div class="relative w-[60%] mt-[1vw]">
            <img
              src="assets/images/footer_terms_text.webp"
              class="w-full"
              alt="Heavy Duty Builders terms & conditions link"
            />
          </div>
          <div class="relative w-[55%] mt-[.5vw]">
            <img
              src="assets/images/footer_copyleft_text.webp"
              class="w-full"
              alt="Heavy Duty Builders copyrights"
            />
          </div>
        </div>
      </div>

      <!-- Next Hackathon information -->
      <div class="relative w-[17vw] h-[17vw] top-[2vw] right-[12vw] rotate-6">
        <!-- HackerHouse Sticker -->
        <div class="absolute w-[11vw] top-[10vw] right-[20vw]">
          <a
            href="https://solana.com/events"
            aria-label="Official link to Solana Events 2023"
            target="_blank"
          >
            <img
              src="assets/images/logo_hackershouse_sticker.png"
              class="absolute w-full -top-[1.5vw] -left-[1vw] -rotate-12"
              alt="Solana Hacker House sticker"
            />
          </a>
        </div>

        <!-- Next hackathon post-it -->
        <a href="https://solana.com/grizzlython" target="_blank">
          <img
            src="assets/images/hackathon_post_it.webp"
            class="w-full"
            alt="Next hackathon orange Post-it"
          />
        </a>
        <a href="https://solana.com/" target="_blank">
          <img
            src="assets/images/logo_solana_sticker.png"
            class="absolute w-[6vw] -top-[1vw] -left-[1.5vw] -rotate-12"
            alt="Solana logo sticker"
          />
        </a>
        <hd-spain-tour-push-pin-icon
          colorData="green"
          [classPrefix]="'footer-pin'"
          class="absolute block w-[3vw] z-10 top-[0vw] right-[2vw]"
        ></hd-spain-tour-push-pin-icon>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterEventComponent {
  constructor() {
    console.log('E');
  }
}

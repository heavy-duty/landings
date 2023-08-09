import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-footer',
  template: `
    <footer class="relative mt-[10vw]">
      <!-- Doubts text -->
      <div class="relative w-full flex justify-center">
        <img
          src="assets/images/doubts_paper.webp"
          class="w-[22vw]"
          alt="Doubts text on a paper"
        />
      </div>

      <div class="flex justify-between mt-[10vw] w-full">
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
          <div
            class="relative flex justify-around top-[6vw] pl-[2vw] px-[2.5vw]"
          >
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
        <div class="relative w-[17vw] h-[17vw] top-[2vw] right-[12vw]">
          <!-- HackerHouse Sticker -->
          <div class="absolute w-[11vw] top-[10vw] right-[20vw]">
            <a
              href="https://solana.com/events"
              aria-label="Official link to Solana Events 2023"
              target="_blank"
            >
              <img
                src="assets/images/logo_hackershouse_sticker.webp"
                class="relative w-full -top-[1.5vw] -left-[1vw] -rotate-12"
                alt="Solana Hacker House sticker"
              />
            </a>
          </div>

          <!-- Solana Sticker -->
          <div class="absolute w-[16vw] top-[2vw] right-[30vw]">
            <a
              href="https://solana.com"
              aria-label="Official link to Solana"
              target="_blank"
            >
              <img
                src="assets/images/sponsors/logo_solana_sticker.webp"
                class="relative w-full -top-[1.5vw] -left-[1vw] rotate-6"
                alt="Solana sticker"
              />
            </a>
          </div>

          <!-- Heavy Duty Builders Sticker -->
          <div class="absolute w-[12vw] top-[7vw] right-[34vw]">
            <a
              href="https://heavyduty.builders/"
              aria-label="Official link to Heavy Duty Builders"
              target="_blank"
            >
              <img
                src="assets/images/sponsors/logo_heavyduty_sticker.webp"
                class="relative w-full -top-[1.5vw] -left-[1vw] -rotate-6"
                alt="Heavy Duty Builders sticker"
              />
            </a>
          </div>

          <!-- Next hackathon post-it -->
          <div class="relative">
            <a href="https://solana.com/grizzlython" target="_blank">
              <img
                src="assets/images/hackathon_post_it.webp"
                class="w-full rotate-12"
                alt="Next hackathon orange Post-it"
              />
            </a>
            <a href="https://solana.com/" target="_blank">
              <img
                src="assets/images/logo_solana_sticker.webp"
                class="absolute w-[6vw] -top-[3vw] -left-[1.5vw] -rotate-12"
                alt="Solana logo sticker"
              />
            </a>
            <hd-spain-tour-push-pin-icon
              colorData="green"
              [classPrefix]="'footer-pin'"
              class="absolute block w-[3vw] z-10 top-[1vw] right-[1vw]"
            ></hd-spain-tour-push-pin-icon>
          </div>
        </div>
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

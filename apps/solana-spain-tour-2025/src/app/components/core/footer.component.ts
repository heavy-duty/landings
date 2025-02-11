import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PushPinIconComponent } from '../push-pin.icon';
import { WebsiteLinkIconComponent } from '../website-url.icon';

@Component({
  selector: 'spain-tour-footer',
  imports: [PushPinIconComponent, WebsiteLinkIconComponent],
  standalone: true,
  template: `
    <footer class="relative mt-[10vw]">
      <div class="flex justify-between mt-[10vw] w-full">
        <!-- Heavy Duty Builders Info-->
        <div
          class="relative w-[24vw] h-[23vw] -mt-[13vw] left-[10vw] mb-[5vw] -rotate-12"
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1691707714/images/yellow_post_it_1_pncwoj.webp"
            class="absolute w-full rotate-3"
            alt="Yellow sticker with footer information"
          />
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840555/tour-2025/Palabras/siguenos.png"
            class="absolute w-[65%] -top-[2.5vw] left-[3vw] -rotate-6"
            alt="Follow us Heavy Duty Builders sticker"
          />
          <!-- Socials -->
          <div
            class="relative flex justify-around top-[6vw] pl-[2vw] px-[2.5vw]"
          >
            <a
              href="https://twitter.com/HeavyDutyBuild"
              aria-label="Official Twitter Link"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_96/q_auto/f_auto/v1691707710/images/social_icons_twitter_dhwcht.png"
                class="block w-[5vw]"
                alt="twitter social logo"
              />
            </a>
            <a
              href="https://discord.com/invite/sbjg5YvYfM"
              aria-label="Official Discord Link"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_96/q_auto/f_auto/v1691707710/images/social_icons_discord_rs9iyc.png"
                class="block w-[5vw]"
                alt="discord social logo"
              />
            </a>
            <a
              href="https://github.com/heavy-duty"
              aria-label="Official Github Link"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_96/q_auto/f_auto/v1691707711/images/social_icons_github_m9txq6.png"
                class="block w-[5vw]"
                alt="github social logo"
              />
            </a>
          </div>

          <!-- Links -->
          <div
            class="relative top-[6vw] w-full flex flex-col items-center mt-[1vw]"
          >
            <div class="relative  w-[80%]">
              <a
                href="https://heavyduty.builders/"
                aria-label="Official HeavyDuty Website link"
                target="_blank"
              >
                <spain-tour-website-link-icon
                  class="w-full"
                ></spain-tour-website-link-icon>
              </a>
            </div>
            <div class="relative w-[60%] mt-[1vw]">
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_276/q_auto/f_auto/v1691707713/images/footer_terms_text_x7pjv0.webp"
                class="w-full"
                alt="Heavy Duty Builders terms & conditions link"
              />
            </div>
            <div class="relative w-[55%] mt-[.5vw]">
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_253/q_auto/f_auto/v1691707712/images/footer_copyleft_text_ekofd8.webp"
                class="w-full"
                alt="Heavy Duty Builders copyrights"
              />
            </div>
          </div>
        </div>

        <!-- Solana Spain Tour Logo -->
        <div
          class="absolute w-[22vw] h-[23vw] -top-[17vw] left-[44vw] rotate-3"
        >
          <img
            src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1694972535/solana_spain_tour_logo-03_1_xccest.png"
            class="absolute w-full rotate-3"
            alt="Solana Spain Tour logo"
          />
        </div>

        <!-- Next Hackathon information -->
        <div class="relative w-[17vw] h-[17vw] top-[2vw] right-[10vw]">
          <!-- Solana Sticker -->
          <div class="absolute w-[16vw] top-[7vw] right-[20vw]">
            <a
              href="https://solana.com"
              aria-label="Official link to Solana"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/w_400/q_auto/f_auto/v1691707715/images/sponsors/logo_solana_sticker_onimz7.webp"
                class="relative w-full -top-[1.5vw] -left-[1vw] rotate-6"
                alt="Solana sticker"
              />
            </a>
          </div>

          <!-- Become Partner information-->
          <div class="absolute w-[20vw] -top-[15vw] -right-[5vw]">
            <a
              href="mailto:andres@heavyduty.builders"
              subject="Solana Spain Tour sponsorship information"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840554/tour-2025/Palabras/Partnergg.png"
                class="relative w-full -top-[1.5vw] -left-[1vw] rotate-6"
                alt="Become partner sticker"
              />
            </a>
          </div>

          <!-- Heavy Duty Builders Sticker -->
          <div class="absolute w-[15vw] top-[4vw] right-[38vw]">
            <a
              href="https://heavyduty.builders/"
              aria-label="Official link to Heavy Duty Builders"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738935776/tour-2025/logo.png"
                class="relative w-full -top-[1.5vw] -left-[1vw] -rotate-6"
                alt="Heavy Duty Builders sticker"
              />
            </a>
          </div>

          <!-- Next hackathon post-it -->
          <div class="relative">
            <a
              href="https://solanaspain.dev"
              target="_blank"
              aria-label="Official link to Solana Grizzlython Hackathon website"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1738840556/tour-2025/Notas/HDC.png"
                class="w-full rotate-12"
                alt="Next hackathon orange Post-it"
              />
            </a>
            <a
              href="https://backpack.app/"
              target="_blank"
              aria-label="Official link to Backpack website"
            >
              <img
                src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1739296652/bootcamp-ene-2025/Backpack.png"
                class="absolute w-[6vw] -top-[3.6vw] -left-[0.5vw] rotate-0"
                alt="Backpack logo sticker"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterEventComponent {}

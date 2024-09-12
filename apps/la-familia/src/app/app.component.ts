import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'la-familia-root',
  template: ` <section
      class="w-[100vw] h-[450px] bg-mid-black flex gap-[100px] justify-center items-center"
    >
      <div class="w-[350px]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725729366/Asset_31_rsm8ah.png"
          class="relative w-full"
          alt="Logo oficial de la Familia"
        />
      </div>
      <div class="w-[600px]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725977170/Asset_30_ytzfz6.png"
          class="relative w-full"
          alt="Tag oficial de la Familia"
        />
        <p class="bp-arima-font text-white text-lg font-thin w-[570px] text-justify relative mt-[-20px]">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut nisl fermentum, ullamcorper lorem et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut nisl fermentum, ullamcorper lorem .”
        </p>
        <p class="text-white text-sm bp-arima-font italic text-right mt-[20px] mr-[30px]">Andriu</p>
      </div>
    </section>

    <div class="relative w-[100vw] flex justify-center">
      <div class="relative max-w-[2100px] w-[100%]">
        <section class="flex w-100 h-[500px]">
          <div class="basis-[50%] p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Misión</h2>
            <p class="mb-[20px] text-justify text-lg bp-arima-font">
              We help the most promising projects in the Solana ecosystem launch
              and grow. We are organized as a collective of creatives,
              developers, and operators who are experienced in launching and
              growing technology businesses.
            </p>
            <p class="mb-[20px] text-justify text-lg bp-arima-font">
              We value the sovereignty that comes with founding a company, the
              skin in the game that comes with investing, and the joy that comes
              with getting sh*t done. In a pre-crypto world, we had to fit into
              broiler categories — founder, investor, or employee. Crypto allows
              us to be free-range and be all 3 at the same time.
            </p>
            <p class="mb-[20px] text-justify text-lg bp-arima-font">
              This workspace is raw, WIP, and meant for our community. We're
              turning our organization inside-out so you can lurk, find
              opportunities and join us on this adventure.
            </p>
          </div>
          <div class="basis-[50%] p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Involúcrate </h2>
            <ul class="relative w-[100%] bp-arima-font">
              <li
                class="relative w-[100%] bg-mid-black text-white py-[20px] px-[30px] mb-[15px]"
              >
                Complete 💰 Bounties to earn crypto and get community
                membership.
              </li>
              <li
                class="relative w-[100%] bg-mid-black text-white py-[20px] px-[30px] mb-[15px]"
              >
                Ready to join Web3 full-time? Check out our Job Board to find
                work at high-growth startups.
              </li>
              <li
                class="relative w-[100%] bg-mid-black text-white py-[20px] px-[30px] mb-[15px]"
              >
                Are you building on Solana?
                <a
                  href="https://airtable.com/applOdn4FW3olhhjh/shrGNt5J30e5YFdif"
                  target="_blank"
                  >Reach out</a
                >, we'd love to work with you.
              </li>
              <li
                class="relative w-[100%] bg-mid-black text-white py-[20px] px-[30px] mb-[15px] italic"
              >
                La familia is in experimental beta. Enter at your own risk.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>

    <section
      class="relative w-[100vw] h-[350px] bg-mid-black flex flex-col gap-[20px] justify-center items-center text-white"
    >
      <h2 class="bp-lime-light-font text-4xl">
        Building for the Radar Hackathon?
      </h2>
      <p class="bp-arima-font">
        Use La Familia to get more visibility and boost your chances of winning
        a piece of that $1m prize pool.
      </p>
      <p class="bp-arima-font">
        … and if that’s not enough, participants from India can also snag
        exclusive local prizes worth $5,000+
      </p>
      <a href="https://www.colosseum.org/radar" target="_blank">
        <p class="bp-arima-font">📢 Showcase Your Project</p>
      </a>
    </section>

    <div class="relative w-[100vw] flex justify-center">
      <div class="relative max-w-[2100px] w-[100%]">
        <section class="flex w-100 h-[500px]">
          <div class="basis-[33%] flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Lukers</h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Events Calendar
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Find Work
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >HandBook</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Learn</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Discord</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Podcast</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Values</a
                >
              </li>
            </ul>
          </div>
          <div class="basis-[33%] flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Contributors</h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Events Calendar
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Find Work
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >HandBook</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Learn</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Discord</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Podcast</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Values</a
                >
              </li>
            </ul> 
          </div>
          <div class="basis-[33%] flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Founders</h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Events Calendar
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Find Work
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >HandBook</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Learn</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Discord</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Podcast</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Values</a
                >
              </li>
            </ul>
          </div>
        </section>

        <section
          class="relative w-[100vw] h-[60px] bg-mid-black flex justify-center items-center text-white overflow-x-hidden"
        >
          <p class="text-sm bp-arima-font">
            © La Familia 2024. All rights reserved.
          </p>
        </section>
      </div>
    </div>

    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {}

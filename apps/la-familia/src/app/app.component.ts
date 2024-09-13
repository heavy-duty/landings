import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'la-familia-root',
  template: ` <section
      class="w-[100vw] h-[450px] bg-mid-black flex gap-[80px] justify-center items-center"
    >
      <div class="max-w-[350px] w-[100%]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725729366/Asset_31_rsm8ah.png"
          class="relative w-full"
          alt="Logo oficial de la Familia"
        />
      </div>
      <div class="max-w-[600px] w-[100%]">
        <img
          src="https://res.cloudinary.com/andresmgsl/image/upload/q_auto/f_auto/v1725977170/Asset_30_ytzfz6.png"
          class="relative w-full"
          alt="Tag oficial de la Familia"
        />
        <p
          class="bp-arima-font text-white text-lg font-thin w-[570px] text-justify relative mt-[-20px]"
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
          nisl fermentum, ullamcorper lorem et. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur ut nisl fermentum, ullamcorper
          lorem .”
        </p>
        <p
          class="text-white text-sm bp-arima-font italic text-right mt-[20px] mr-[30px]"
        >
          Andriu
        </p>
      </div>
    </section>

    <div class="relative w-[100vw] flex justify-center">
      <div class="relative max-w-[2100px] w-[100%]">
        <section class="flex w-100 min-h-[500px]">
          <div class="basis-[50%] p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Conócenos</h2>
            <p class="mb-[20px] text-justify text-md bp-arima-font">
              La Familia busca consolidar una presencia sólida en el ecosistema
              tecnológico español, creando una comunidad activa y conectada que
              impulse el uso y desarrollo de la blockchain de Solana.
            </p>
            <p class="mb-[20px] text-justify text-md bp-arima-font">
              Queremos invitarte a unirte a un movimiento que trasciende la
              tecnología, donde fomentamos la colaboración entre
              desarrolladores, inversores, artistas, jugadores y entusiastas del
              blockchain. Desde pequeños meetups hasta grandes congresos,
              pasando por campañas y contenido en línea en español, queremos que
              formes parte de una comunidad que comparte conocimientos, ideas y
              proyectos.
            </p>
            <p class="mb-[20px] text-justify text-md bp-arima-font">
              Nos estamos asociando con universidades, influencers y empresas
              locales para ofrecerte oportunidades de aprendizaje y desarrollo.
              Desde cursos especializados hasta eventos que te permitirán
              conectar con expertos y potenciales colaboradores. Nuestro
              objetivo es posicionar a España como un referente clave para
              Solana en el mundo hispanohablante, y tu participación puede
              marcar la diferencia.
            </p>
            <p class="mb-[20px] text-justify text-md bp-arima-font">
              Únete a La Familia y ayúdanos a escribir el próximo capítulo de la
              blockchain en España.
            </p>
          </div>
          <div class="basis-[50%] p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Involúcrate</h2>
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
      class="relative w-[100vw] h-[430px] bg-mid-black flex flex-col gap-[20px] justify-center items-center text-white"
    >
      <h2 class="bp-lime-light-font text-4xl">
        Construyendo para el Hackathon de RADAR
      </h2>
      <div class="w-[100%] max-w-[800px] text-center">
        <p class="bp-arima-font mb-[20px]">
          El Radar Global Hackathon es tu oportunidad para ganar experiencia en
          Solana y competir con equipos de todo el mundo por premios acumulados de
          $600K 🏆. Visita ColosseumOrg para registrarte y ser parte de esta
          increíble experiencia.
        </p>
        <p class="bp-arima-font mb-[20px]">
          Estamos en España y queremos que formes parte de esta oportunidad para
          llevar tus ideas al siguiente nivel. ¡Vamos a construir juntos! 👷‍♀️👨‍🔧🧑‍💻
        </p>
        <p class="bp-arima-font mb-[20px]">
          ¿No eres desarrollador? ¡No te preocupes! Conoce a tus futuros
          compañeros de equipo en nuestros eventos o a través del portal del
          Hackathon 💡.
        </p>
        <a href="https://www.colosseum.org/radar" target="_blank">
          <p class="bp-arima-font">📢 ¡Muestra tu proyecto!</p>
        </a>
      </div>
    </section>

    <div class="relative w-[100vw] flex justify-center">
      <div class="relative max-w-[2100px] w-[100%]">
        <section class="flex flex-wrap justify-between w-100 min-h-[500px]">
          <div class=" flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Nosotros</h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Discord
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Instagram
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >X (Twitter)</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Escribenos</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Solana Spain Tour</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Solana Ecosystem Call</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Próximos Eventos</a
                >
              </li>
            </ul>
          </div>
          <div class=" flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Contribuidores</h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Superteam Earn
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Grants de Solana
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Se un contribuidor</a
                >
              </li>
            </ul>
          </div>
          <div class=" flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[20px]">Desarrolladores</h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Documentos
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank">
                  Bootcamp - Solana básico
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Blinks</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://www.colosseum.org/radar" target="_blank"
                  >Heavy Duty Builders</a
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

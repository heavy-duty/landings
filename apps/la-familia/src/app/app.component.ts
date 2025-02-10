import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'la-familia-root',
  template: ` <section
      class="w-[100vw] min-h-[450px] bg-mid-black flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-center md:justify-center p-10"
    >
      <div class="max-w-[150px] md:max-w-[380px] w-[100%] ">
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
          class="bp-arima-font text-white text-lg font-thin max-w-[570px] text-justify relative mt-[20px] md:mt-[-20px]"
        >
          “La descentralización es el corazón de web3, y para abrazar
          verdaderamente la promesa de web3, debe ser el núcleo inquebrantable
          de todo lo haga que un proyecto.”
        </p>
        <p
          class="text-white text-sm bp-arima-font italic text-right mt-[20px] mr-[30px]"
        >
          La Familia
        </p>
      </div>
    </section>
    

    <div class="relative w-[100vw] flex flex-col md:flex-row justify-center">
      <div class="relative max-w-[2100px] w-[100%]">
        <section class="flex flex-col md:flex-row w-100 min-h-[500px]">
          <div class="basis-[50%] p-16">
            <h2 class="bp-lime-light-font text-4xl mb-[10px]">Conócenos</h2>
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
              
                Completa 
                <a
                  href="https://earn.superteam.fun"
                  target="_blank"
                  >
                  retos
                </a>
                &nbsp;y gana crypto monedas en el proceso.
              </li>
              <li
                class="relative w-[100%] bg-mid-black text-white py-[20px] px-[30px] mb-[15px]"
              >
                ¿Estas construyendo en Solana?
                <a href="mailto:equipo@lafamilia.so" target="_blank">
                  Contáctanos </a
                >, Nos encantaría apoyarte.
              </li>
              <li
                class="relative w-[100%] bg-mid-black text-white py-[20px] px-[30px] mb-[15px] italic"
              >
                La familia está en una fase inicial, muchas cosas pueden
                cambiar. Juntos haremos crecer está comunidad hispana.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>

    <section
      class="relative w-[100vw] min-[]:h-[430px] bg-mid-black flex flex-col gap-[20px] justify-center items-center text-white p-10"
    >
      <h2 class="bp-lime-light-font text-2xl md:text-4xl text-center">
        Conoce A la Familia
      </h2>
      <div class="w-[100%] max-w-[800px] flex justify-center">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/OzWr1DOoLZE?si=agXgt842ootGOMrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>

    <div class="relative w-[100vw] flex justify-center">
      <div class="relative max-w-[2100px] w-[100%]">
         
        <section class="flex flex-col md:flex-row flex-wrap justify-between w-100 min-h-[500px]">
          <div class=" flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-2xl mb-[20px]">Nosotros</h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://discord.gg/qSSrqC2gZZ" target="_blank">
                  Discord
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://www.instagram.com/lafamilia.so/" target="_blank">
                  Instagram
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://x.com/LaFamilia_so" target="_blank"
                  >X (Twitter)</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="mailto:equipo@lafamilia.so" target="_blank"
                  >Escribenos</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://solanaspain.tours/" target="_blank"
                  >Solana Spain Tour</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://app.getriver.io/events/solana-ecosystem-call-september-ofg" target="_blank"
                  >Solana Ecosystem Call</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://lu.ma/user/lafamilia_so" target="_blank"
                  >Próximos Eventos</a
                >
              </li>
            </ul>
          </div>
          <div class=" flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-2xl mb-[20px]">
              Contribuidores
            </h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://earn.superteam.fun" target="_blank">
                  Superteam Earn
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://solana.org/grants-funding" target="_blank">
                  Grants y funding
                </a>
              </li>
            </ul>
          </div>
          <div class=" flex flex-col items-center p-16">
            <h2 class="bp-lime-light-font text-2xl mb-[20px]">
              Desarrolladores
            </h2>
            <hr class="w-[25%] h-[1px] border-black mb-[30px]" />
            <ul class="list-square bp-arima-font text-lg">
              <li class="mb-[10px]">
                <a href="https://solana.com/es/docs" target="_blank">
                  Documentos
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://solanaspain.dev/" target="_blank">
                  Bootcamp - Solana básico
                </a>
              </li>
              <li class="mb-[10px]">
                <a href="https://github.com/heavy-duty/znap" target="_blank"
                  >Blinks with Znap</a
                >
              </li>
              <li class="mb-[10px]">
                <a href="https://heavyduty.builders/" target="_blank"
                  >Heavy Duty Builders</a
                >
              </li>
            
            </ul>
          </div>
        </section>

        <section
          class="relative w-[100%] h-[60px] bg-mid-black flex justify-center items-center text-white overflow-x-hidden"
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

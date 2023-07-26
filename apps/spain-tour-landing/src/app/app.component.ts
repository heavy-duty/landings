import { Component } from '@angular/core';

@Component({
  selector: 'hd-spain-tour-root',
  template: `
    <section>
      <h1 class="text-6xl text-center mt-16">Islands Tour</h1>
      <div class="w-full flex mt-32 justify-center gap-6">
        <hd-spain-tour-tenerife-island-icon class="w-56"></hd-spain-tour-tenerife-island-icon>
        <hd-spain-tour-lanzarote-island-icon class="w-56"></hd-spain-tour-lanzarote-island-icon>
        <hd-spain-tour-la-gomera-island-icon class="w-56"></hd-spain-tour-la-gomera-island-icon>
        <hd-spain-tour-fuerteventura-island-icon class="w-56"></hd-spain-tour-fuerteventura-island-icon>
        <hd-spain-tour-gran-canaria-island-icon class="w-56"></hd-spain-tour-gran-canaria-island-icon>
        <hd-spain-tour-la-palma-island-icon class="w-56"></hd-spain-tour-la-palma-island-icon>
        <hd-spain-tour-el-hierro-island-icon class="w-56"></hd-spain-tour-el-hierro-island-icon>
      </div>
    </section>
    <section>
      <h2 class="text-4xl text-center mt-16">Tour roadmap</h2>
      <div class="w-full flex justify-center mt-32">
        <ul class="flex flex-col column gap-6">
          <li>Primer Evento</li>
          <li>Segundo Evento</li>
          <li>Tercer Evento</li>
          <li>Cuarto Evento</li>
          <li>Quinto Evento</li>
        </ul>
      </div>
    </section>

    <footer class="w-full flex justify-center mt-32 bg-black text-white p-4">
      EL FOOTER
    </footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'islands-tour-web-client';
}

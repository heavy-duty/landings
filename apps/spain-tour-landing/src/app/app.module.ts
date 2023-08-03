import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElHierroIslandIconComponent } from './components/el-hierro.icon';
import { FuerteventuraIslandIconComponent } from './components/fuerteventura.icon';
import { GranCanariaIslandIconComponent } from './components/gran-canaria.icon';
import { LaGomeraIslandIconComponent } from './components/la-gomera.icon';
import { LaPalmaIslandIconComponent } from './components/la-palma.icon';
import { LanzaroteIslandIconComponent } from './components/lanzarote.icon';
import { TenerifeIslandIconComponent } from './components/tenerife.icon';
import { WhaleIconComponent } from './components/whale.icon';
import { AirscrewIconComponent } from './components/airscrew.icon';
import { RedDotIconComponent } from './components/red-dot.icon';
import { BoatIconComponent } from './components/boat.icon';
import { RedLineIconComponent } from './components/red-line.icon';
import { SunStickerIconComponent } from './components/sun-sticker.icon';
import { MainCardIconComponent } from './components/main-card.icon';
import { PostCardIconComponent } from './components/post-card.icon';

@NgModule({
  declarations: [
    AppComponent,
    TenerifeIslandIconComponent,
    LanzaroteIslandIconComponent,
    LaGomeraIslandIconComponent,
    FuerteventuraIslandIconComponent,
    GranCanariaIslandIconComponent,
    ElHierroIslandIconComponent,
    LaPalmaIslandIconComponent,
    WhaleIconComponent,
    AirscrewIconComponent,
    RedDotIconComponent,
    RedLineIconComponent,
    BoatIconComponent,
    SunStickerIconComponent,
    MainCardIconComponent,
    PostCardIconComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

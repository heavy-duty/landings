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

@NgModule({
  declarations: [
    AppComponent,
    TenerifeIslandIconComponent,
    LanzaroteIslandIconComponent,
    LaGomeraIslandIconComponent,
    FuerteventuraIslandIconComponent,
    GranCanariaIslandIconComponent,
    ElHierroIslandIconComponent,
    LaPalmaIslandIconComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PushPinIconComponent } from './components/push-pin.icon';
import { RedLineIconComponent } from './components/red-line.icon';
import { SunStickerIconComponent } from './components/sun-sticker.icon';
import { MainCardIconComponent } from './components/main-card.icon';
import { PostCardIconComponent } from './components/post-card.icon';
import { GithubIconComponent } from './components/github.icon';
import { DiscordIconComponent } from './components/discord.icon';
import { TwitterIconComponent } from './components/twitter.icon';
import { WebsiteLinkIconComponent } from './components/website-url.icon';
import { FirstEventComponent } from './components/core/first-event.component';
import { SecondEventComponent } from './components/core/second-event.component';
import { ThirdEventComponent } from './components/core/third-event.component';
import { FourthEventComponent } from './components/core/fourth-event.component';
import { FooterEventComponent } from './components/core/footer.component';
import { HeroSectionComponent } from './components/core/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PushPinIconComponent,
    RedLineIconComponent,
    SunStickerIconComponent,
    MainCardIconComponent,
    PostCardIconComponent,
    GithubIconComponent,
    DiscordIconComponent,
    TwitterIconComponent,
    WebsiteLinkIconComponent,
    FirstEventComponent,
    SecondEventComponent,
    ThirdEventComponent,
    FourthEventComponent,
    FooterEventComponent,
    HeroSectionComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

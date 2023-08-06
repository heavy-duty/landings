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
    WebsiteLinkIconComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {DictionaryService} from "./dictionary.service";
import { TimelinesComponent } from './timelines/timelines.component';
import {DateUtilService} from "./date-util.service";
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    TimelinesComponent,
    YoutubePlayerComponent,
    YoutubePlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DictionaryService,DateUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

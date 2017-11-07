import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SongsModule } from './songs/songs.module';
import { AppComponent } from './app.component';
import { Store } from './store';


@NgModule({
  imports: [
    BrowserModule,
    SongsModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[Store],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}

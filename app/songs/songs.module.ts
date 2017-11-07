import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';

import { SongsService } from './services/songs.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    SongsFavouritesComponent,
    SongsPlaylistComponent,
    SongsListenedComponent,
    SongsListComponent
  ],
  providers: [
    SongsService
  ],
  exports: [
    SongsFavouritesComponent,
    SongsPlaylistComponent,
    SongsListenedComponent,
    SongsListComponent
  ]
})
export class SongsModule {}

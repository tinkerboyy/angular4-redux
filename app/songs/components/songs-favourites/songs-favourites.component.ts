import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Store } from '../../../store';
import { SongsService, Song } from '../../services/songs.service';

@Component({
  selector: 'songs-favourites',
  styleUrls: [],
  template: `
    <div class="songs">
      <songs-list
        [list]="favourites$ | async"
        (toggle)="onToggle($event)">
        Favourites  
      </songs-list>  
    </div>
  `
})
export class SongsFavouritesComponent implements OnInit {
  
  favourites$: Observable<Song[]>;
  
  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.favourites$ = this.store.select('playlist')
      .filter(Boolean)
      .map(playlist => playlist.filter(track => track.favourite));
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Store } from '../../../store';

import { SongsService, Song } from '../../services/songs.service';

@Component({
  selector: 'songs-listened',
  styleUrls: [],
  template: `
    <div class="songs">
      <songs-list
        [list]="listened$ | async"
        (toggle)="onToggle($event)">
        Played  
      </songs-list> 
    </div>
  `
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<Song[]>;
  
  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist')
      .filter(Boolean)
      .map(playlist => playlist.filter(track => track.listened));
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }
}

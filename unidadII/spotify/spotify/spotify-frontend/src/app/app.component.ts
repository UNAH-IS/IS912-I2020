import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-frontend';
  regionVisible:string = '';

  verArtista(id){
    this.regionVisible = 'artistas';
    console.log('Ver artista con ID: ' + id);
  }

  verPlaylist(id){
    this.regionVisible = 'playlists';
    console.log('Ver playlist con ID: ' + id);
  }
}

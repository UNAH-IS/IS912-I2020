import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ArtistasService } from 'src/app/services/artistas.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onVerArtista = new EventEmitter();
  @Output() onVerPlaylist = new EventEmitter();
  faMusic = faMusic;
  faPlay = faPlay;

  artistas:any = [];
  constructor(private artistasService:ArtistasService) { }

  ngOnInit(): void {
    //this.artistas =
    this.artistasService.obtenerArtistas().subscribe(
      res=>{
        this.artistas = res;
        console.log("Artistas: ", this.artistas);
      },
      error=>{
        console.log(error)
      }
    );
  }

  verArtista(artista){
    this.onVerArtista.emit(artista._id);
  }

  verPlaylist(id){
    this.onVerPlaylist.emit(id);
  }
}

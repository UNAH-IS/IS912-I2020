import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {
  artista:any = {
    nombreArtista:'Metallica',
    caratula:'imagen.jpg'
  }

  artistas:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    this.artistas.push({
      nombreArtista: this.artista.nombreArtista,
      caratula: this.artista.caratula
    });
    console.log(this.artistas);
  }

}

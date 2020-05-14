import { Component, OnInit } from '@angular/core';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  faPlay = faPlay;
  faPlus = faPlus;
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  guardarCancionPlaylist(){

  }

  agregarAPlaylist(modalGuardarEnPlaylist){
    this.modalService.open(modalGuardarEnPlaylist,
      {
        size:'xs',
        centered:true
      }
    );
  }
}

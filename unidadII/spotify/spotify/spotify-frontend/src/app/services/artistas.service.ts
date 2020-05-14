import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private httpClient:HttpClient) { }

  obtenerArtistas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/artistas',{});
  }
}

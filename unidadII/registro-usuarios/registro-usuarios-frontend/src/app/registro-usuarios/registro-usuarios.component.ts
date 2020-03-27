import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({//Decorador
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  //Declaraciones
  // nombre:string = 'Pedro';
  personas:any = [];//Arreglo de cualquier cosa
  persona:any = {
    nombre:'',
    apellido:'',
    fechaNamiento:'',
    pais:''
  }
  backendHost:string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) {}

  ngOnInit() {
    this.httpClient.get(`${this.backendHost}/usuarios`)
    .subscribe(res=>{
      this.personas = res;
      console.log(this.personas);
    });
  }

  guardar(){
      this.httpClient.post(`${this.backendHost}/usuarios`,this.persona)
      .subscribe((res:any)=>{
        console.log(res);
        this.personas.push(res.usuarioGuardado);
      });
  }

  eliminar(i){
    console.log("Eliminar el elemento " + i);
    this.httpClient.delete(`${this.backendHost}/usuarios/${i}`)
    .subscribe((res:any)=>{
      console.log(res);
      if (res.codigoResultado == 1){
        this.personas.splice(i,1);
      }
    });
  }
}

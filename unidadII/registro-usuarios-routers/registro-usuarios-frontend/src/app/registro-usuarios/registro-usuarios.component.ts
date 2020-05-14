import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  personas:any = [];//Arreglo de cualquier cosa
  formularioRegistro = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.maxLength(10)]),
    apellido:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required,Validators.email]),
    fechaNacimiento:new FormControl('', [Validators.required]),
    pais:new FormControl('', [Validators.required])
  });

  backendHost:string = 'http://localhost:8888';

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`${this.backendHost}/usuarios`)
    .subscribe(res=>{
      this.personas = res;
      console.log(this.personas);
    });
  }

  get nombre(){
    return this.formularioRegistro.get('nombre');
  }

  get apellido(){
    return this.formularioRegistro.get('apellido');
  }
  get email(){
    return this.formularioRegistro.get('email');
  }
  get fechaNacimiento(){
    return this.formularioRegistro.get('fechaNacimiento');
  }
  get pais(){
    return this.formularioRegistro.get('pais');
  }

  guardar(){
    console.log('Formulario válido:' , this.formularioRegistro.valid);
    this.httpClient.post(`${this.backendHost}/usuarios`,this.formularioRegistro.value)
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

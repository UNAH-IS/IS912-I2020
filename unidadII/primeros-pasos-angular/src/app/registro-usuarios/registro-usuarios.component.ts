import { Component, OnInit } from '@angular/core';
import { TokenizeOptions } from '@angular/compiler/src/ml_parser/lexer';

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
    nombre:'Juan',
    apellido:'Perez',
    edad:'22',
    password:'asd.456'
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    this.personas.push(
      {
        nombre: this.persona.nombre,
        apellido: this.persona.apellido,
        edad: this.persona.edad,
        password: this.persona.password
      }
    );
    console.log(this.personas);
  }
}

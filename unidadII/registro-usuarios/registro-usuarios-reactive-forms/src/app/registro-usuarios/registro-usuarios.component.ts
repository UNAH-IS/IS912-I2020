import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  formularioRegistro = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.maxLength(10)]),
    apellido:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required,Validators.email]),
    fechaNacimiento:new FormControl('', [Validators.required]),
    pais:new FormControl('', [Validators.required])
  });


  constructor() { }

  ngOnInit(): void {
  }

  get nombre(){
    return this.formularioRegistro.get('nombre');
  }

  guardar(){
    console.log(this.formularioRegistro.value);
    console.log('Formulario válido:' , this.formularioRegistro.valid);
  }

}

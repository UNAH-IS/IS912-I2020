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
    dia:new FormControl('', [Validators.required]),
    mes:new FormControl('', [Validators.required]),
    anio:new FormControl('', [Validators.required]),
    pais:new FormControl('', [Validators.required])
  });

  backendHost:string = 'http://localhost:8888';

  dias:any;
  meses:any =[
    {
      numeroMes:1,
      nombreMes:'Enero'
    },
    {
      numeroMes:2,
      nombreMes:'Febrero'
    },
    {
      numeroMes:3,
      nombreMes:'Marzo'
    },
    {
      numeroMes:4,
      nombreMes:'Abril'
    },
    {
      numeroMes:5,
      nombreMes:'Mayo'
    },
    {
      numeroMes:6,
      nombreMes:'Junio'
    },
    {
      numeroMes:7,
      nombreMes:'Julio'
    },
    {
      numeroMes:8,
      nombreMes:'Agosto'
    },
    {
      numeroMes:9,
      nombreMes:'Septiembre'
    },
    {
      numeroMes:10,
      nombreMes:'Octubre'
    },
    {
      numeroMes:11,
      nombreMes:'Noviembre'
    },
    {
      numeroMes:12,
      nombreMes:'Diciembre'
    }
  ];
  paises:any = [
    {
      codigoPais:1,
      nombrePais:'Honduras'
    },
    {
      codigoPais:2,
      nombrePais:'Guatemala'
    },
    {
      codigoPais:3,
      nombrePais:'Nicaragua'
    },
    {
      codigoPais:4,
      nombrePais:'Panama'
    }
  ]

  editando:boolean=false;

  constructor(private httpClient:HttpClient) {
    this.dias = Array(31).fill(0).map((x,i)=>(i+1));
  }

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
  get dia(){
    return this.formularioRegistro.get('dia');
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
      this.personas.push(res);
    });
  }

  eliminar(id){
    console.log("Eliminar el elemento con el ID: " + id);
    this.httpClient.delete(`${this.backendHost}/usuarios/${id}`)
    .subscribe((res:any)=>{
      console.log(res);
      if (res.ok == 1){
        this.personas = this.personas.filter(item=>item._id!=id);
      }
    });
  }

  editar(id){
    this.editando = true;
    this.httpClient.get(`${this.backendHost}/usuarios/${id}`)
    .subscribe((res:any)=>{
      console.log(res);
      this.formularioRegistro.get('nombre').setValue(res.nombre);
      this.formularioRegistro.get('apellido').setValue(res.apellido);
      this.formularioRegistro.get('email').setValue(res.email);
      this.formularioRegistro.get('dia').setValue(res.fechaNacimiento.dia);
      this.formularioRegistro.get('mes').setValue(res.fechaNacimiento.mes);
      this.formularioRegistro.get('anio').setValue(res.fechaNacimiento.anio);
      this.formularioRegistro.get('pais').setValue(res.pais);
    });
  }

  nuevo(){
    this.editando = false;
    this.formularioRegistro.get('nombre').setValue(null);
    this.formularioRegistro.get('apellido').setValue(null);
    this.formularioRegistro.get('email').setValue(null);
    this.formularioRegistro.get('dia').setValue(null);
    this.formularioRegistro.get('mes').setValue(null);
    this.formularioRegistro.get('anio').setValue(null);
    this.formularioRegistro.get('pais').setValue(null);
  }

  actualizar(){

  }
}

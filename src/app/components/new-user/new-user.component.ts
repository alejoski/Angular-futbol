import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Countrie } from './countries';
import { HttpClient } from '@angular/common/http';
import data from '../../../assets/countries.json';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from '../login/usuario';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {

  forma: FormGroup;

  /*  forma = new FormGroup({
  
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      correo: new FormControl(''),
      correo2: new FormControl(''),
      passwd: new FormControl(''),
      passwd2: new FormControl(''),
      pais: new FormControl('')
    })*/

  private usuario: Usuario = new Usuario();

  countries: Countrie[] = data;

  constructor(private httpClient: HttpClient, private userServices: UserService, private fb: FormBuilder) {
    //console.log(this.countries);
    this.crearFormulario();

  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre  : ['', [Validators.required,Validators.maxLength(60)]],
      apellido: ['', [Validators.required,Validators.maxLength(60)]],
      correo  : ['', [Validators.required,Validators.maxLength(60), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      correo2 : ['', [Validators.required,Validators.maxLength(60), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      passwd  : ['', [Validators.required,Validators.maxLength(60)]],
      passwd2 : ['', [Validators.required,Validators.maxLength(60)]],
      pais    : ['', [Validators.required,Validators.maxLength(60)]]
    });
  }

  get nombreInvalido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoInvalido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;;
  }

  get correoInvalido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;;
  }

  get correo2Invalido(){
    return this.forma.get('correo2').invalid && this.forma.get('correo2').touched    
  }

  get correo2Diferente(){

    if(this.forma.get('correo2').touched)
      if(this.forma.value.correo != this.forma.value.correo2)
        return true;
    
          return false;
  }

  get passwdInvalido(){
    return this.forma.get('passwd').invalid && this.forma.get('passwd').touched;;
  }

  get passwd2Invalido(){
    return this.forma.get('passwd2').invalid && this.forma.get('passwd2').touched;;
  }

  get paisInvalido(){
    return this.forma.get('pais').invalid && this.forma.get('pais').touched;;
  }


  validar() {
    console.log(this.forma);

    this.create();

  }

  create(): void {

    console.log("Llego a Create()");

    if(this.forma.invalid){

      return Object.values(this.forma.controls).forEach(
        control => {
          control.markAllAsTouched();
        })
        
    }else{

      this.usuario.nombre = this.forma.value.nombre
      this.usuario.apellido = this.forma.value.apellido
      this.usuario.correo = this.forma.value.correo;
      this.usuario.contrasena = this.forma.value.passwd;
      this.usuario.pais = this.forma.value.pais;

    }

    this.userServices.create(this.usuario).subscribe(

    );
  }

  ngOnInit(): void {
  }

}

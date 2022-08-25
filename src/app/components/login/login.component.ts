import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {



  forma = new FormGroup({
    user: new FormControl(''),
    passwd: new FormControl('')
  }) ;

   

  constructor(private fb: FormBuilder, private loginServices: LoginService, private router:Router) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
  //Formulario Reactivo
    this.forma = this.fb.group({
      user  : ['',[Validators.minLength(5),Validators.required]],
      passwd: ['',[Validators.minLength(3),Validators.required]]
    });

  }


  get userInvalid(){
    return this.forma.get('user')?.invalid && this.forma.get('user')?.touched
  }

  get passInvalid(){
    return this.forma.get('passwd')?.invalid && this.forma.get('passwd')?.touched
  }

 private nombre:string;
  
  validar():void{
    
    console.log("Llego");
    console.log(" - " + this.forma.value.user);
    console.log(" - " + this.forma.value.passwd);


    const usuario = new User(this.forma.value.user,this.forma.value.passwd);

     
    
    //this.loginServices.validaUser(usuario).subscribe( login => this.router.navigate(['/home'])

    //this.loginServices.validaUser(usuario).subscribe( login => this.nombre = login.name);

    this.loginServices.validaUser(usuario).subscribe( login =>{
        console.log("-"+login.name);
        
        //Si existe puede entrar a la aplicación 
        if(login.exist)
          this.router.navigate(['/home']);

        this.nombre = login.name
      });
    
    


  }

 /* validate(forma: NgForm){
    console.log("Llego al componente");
    console.log(forma.value);
    console.log(forma.value.user);
    console.log(forma.value.password);

  }*/



}

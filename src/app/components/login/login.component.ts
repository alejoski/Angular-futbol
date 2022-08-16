import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma = new FormGroup({
    user: new FormControl(''),
    passwd: new FormControl('')
  }) ;

   

  constructor(private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
  //Formulario Reactivo
    this.forma = this.fb.group({
      user  : ['',[Validators.minLength(5),Validators.required]],
      passwd: ['',[Validators.minLength(5),Validators.required]]
    });

  }


  get userInvalid(){
    return this.forma.get('user')?.invalid && this.forma.get('user')?.touched
  }

  get passInvalid(){
    return this.forma.get('passwd')?.invalid && this.forma.get('passwd')?.touched
  }

  validar(){
    console.log("Llego");
    console.log(this.forma);
  }

 /* validate(forma: NgForm){
    console.log("Llego al componente");
    console.log(forma.value);
    console.log(forma.value.user);
    console.log(forma.value.password);

  }*/

}

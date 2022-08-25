import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Countrie } from './countries';
import { HttpClient } from '@angular/common/http';
import data from '../../../assets/countries.json';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {

  forma = new FormGroup({

    nombre:new FormControl(''),
    apellido:new FormControl(''),
    correo:new FormControl(''),
    correo2:new FormControl(''),
    passwd:new FormControl(''),
    passwd2:new FormControl(''),
    pais:new FormControl('')
  })

  countries: Countrie[] = data;

  constructor(private httpClient: HttpClient) {

    console.log(this.countries);
  }

  validar(){

    console.log(this.forma.value);

  }

  ngOnInit(): void {
  }

}

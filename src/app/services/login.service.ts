import { Injectable } from '@angular/core';
import { Usuario } from '../components/login/usuario';
import { User } from '../components/login/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

   login  = new Usuario();
   private urlEndPoint: string = "http://localhost:8080/api";
  constructor(private http: HttpClient) {       
  }

  validaUser(usuario:User):Observable<Usuario>{

    console.log("Llego a valida usuario");

    return this.http.get<Usuario>(`${this.urlEndPoint}/login/${usuario.user}/${usuario.passwd}`);
  }
}

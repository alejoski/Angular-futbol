import { Injectable } from '@angular/core';
import { Usuario } from '../components/login/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  login = new Usuario();

  private urlEndPoint: string = "http://localhost:8080/api";

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  validaUser(usu:string, passwd: string): Observable<Usuario> {

    console.log("Llego a valida usuario");

    return this.http.get<Usuario>(`${this.urlEndPoint}/login/${usu}/${passwd}`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    console.log("Llego a create en Angular services");
    return this.http.post<Usuario>(`${this.urlEndPoint}/createUser`, usuario, { headers: this.httpHeaders });
    //330
  }
}

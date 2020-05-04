import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../';
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly BASE_URL = "http://localhost:3000/sendmail";

  constructor(
    private http: HttpClient
  ) { }

  logar(contato: Contato) {
    console.log("contato Service", contato);
    return this.http.post( this.BASE_URL, contato).subscribe(
      response => {
        console.log(response);
      }

    );
   }

}
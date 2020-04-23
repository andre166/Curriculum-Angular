import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../';
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(
    private http: HttpClient
  ) { }

  logar(contato: Contato) {
    console.log("contato Service", contato);
    return this.http.post('http://localhost:3000/sendmail', contato).subscribe(
      response => {
        console.log(response);
      }

    );
   }

}
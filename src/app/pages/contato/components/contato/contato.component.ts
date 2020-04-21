import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContatoService } from '../../services';
import { Contato } from '../../models';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    this.criarContato();
  }

  criarContato(){

    this.form = this.fb.group({
      nome: [''],
      email: [''],
      assunto: [''],
      texto: ['']
    });
    
  }

  eviarEmail() {

    const contato: Contato = this.form.value;
    console.log("contato", contato);

    this.contatoService.logar(contato);
  }

}

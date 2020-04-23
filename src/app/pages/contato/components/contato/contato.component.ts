import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from '../../services';
import { Contato } from '../../models';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  form: FormGroup;
  msg: boolean = false;
  formularioValido: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    // this.criarContato();
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      assunto: ['', [Validators.required]],
      texto: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  criarContato(){

    this.form = this.fb.group({
      nome: [' '],
      email: [''],
      assunto: [''],
      texto: ['']
    });

    
  }

  msgEmailSuccess(){

    this.msg = true;  
    // setTimeout(() => this.msg = false, 5000);

  }

  eviarEmail() {

    if (this.form.invalid) {
      return;
    }

    const contato: Contato = this.form.value;
    console.log("contato", contato);
    this.contatoService.logar(contato);
    this.msgEmailSuccess();

  }

  get nome() {
    return this.form.get('nome');
  }

  get email() {
    return this.form.get('email');
  }

  get assunto() {
    return this.form.get('assunto');
  }

  get texto() {
    return this.form.get('texto');
  }

}

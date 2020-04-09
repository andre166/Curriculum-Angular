import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent, WrapperProjetosComponents } from './components';


import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProjetosComponent,
    WrapperProjetosComponents
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProjetosModule { }

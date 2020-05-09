import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './components';

import { RouterModule } from '@angular/router';

import {  MatButtonModule } from '@angular/material/button';
import {  FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    ProjetosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
 
  ]
})
export class ProjetosModule { }

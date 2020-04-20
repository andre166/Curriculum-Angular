import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent, WrapperProjetosComponents } from './components';


import { RouterModule } from '@angular/router';

import {  MatButtonModule } from '@angular/material/button';
import {  MatTooltipModule } from '@angular/material/tooltip';
import {  MatIconModule } from '@angular/material/icon';
import {  FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    ProjetosComponent,
    WrapperProjetosComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
 
  ]
})
export class ProjetosModule { }

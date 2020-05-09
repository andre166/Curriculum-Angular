import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadosComponent } from './components';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CertificadosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class CertificadosModule { }

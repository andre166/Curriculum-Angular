import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, WrapperhomeComponent } from './components';

import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Section1Component } from './components/section1';

//
@NgModule({
  declarations: [
    HomeComponent,
    WrapperhomeComponent,
    Section1Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    Section1Component
  ]
})
export class HomeModule { }

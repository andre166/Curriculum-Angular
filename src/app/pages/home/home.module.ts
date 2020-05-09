import {  NgModule } from '@angular/core';
import {  CommonModule } from '@angular/common';
import {  HomeComponent } from './components';
import {  RouterModule } from '@angular/router';

import {  MatTooltipModule } from '@angular/material/tooltip';
import {  MatIconModule } from '@angular/material/icon';
import {  FlexLayoutModule } from '@angular/flex-layout';
import {  Section1Component } from './components/section1';
import {  MatCardModule} from '@angular/material/card';
import {  Section2Component } from './components/section2';
import {  MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    HomeComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    Section1Component,
    Section2Component
  ]
})
export class HomeModule { }

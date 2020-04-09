import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  HomeModule, HomeRoutingModule, 
  ContatoModule, ContatoRoutingModule,
  CertificadosModule, CertificadosRoutingModule,
  ProjetosModule, ProjetosRoutingModule
  
} from './pages';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    HomeModule,
    HomeRoutingModule,
    ContatoModule,
    ContatoRoutingModule,
    CertificadosModule,
    CertificadosRoutingModule,
    ProjetosModule,
    ProjetosRoutingModule,


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

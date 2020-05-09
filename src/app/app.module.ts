import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


import { 
  HomeModule, HomeRoutingModule, 
  ContatoModule, ContatoRoutingModule,
  CertificadosModule, CertificadosRoutingModule,
  ProjetosModule, ProjetosRoutingModule

} from './pages';


import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
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
  entryComponents: [
    AppComponent,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AppComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
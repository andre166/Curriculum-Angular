import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatFormFieldModule,
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
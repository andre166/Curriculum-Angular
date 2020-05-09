import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificadosComponent } from './components';

export const CertificadosRoutes: Routes = [
    { 
        path: 'certificados', 
        component: CertificadosComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(CertificadosRoutes)],
  exports: [RouterModule]
})

export class CertificadosRoutingModule {
}

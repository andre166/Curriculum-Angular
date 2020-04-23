import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './components';


export const ContatoRoutes: Routes = [
    { 
        path: 'contato', 
        component: ContatoComponent,
        // children: [{ path: '', component: ContatoComponent }]

    }
];

@NgModule({
  imports: [RouterModule.forChild(ContatoRoutes)],
  exports: [RouterModule]
})

export class ContatoRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent, WrapperContatoComponent } from './components';


export const ContatoRoutes: Routes = [
    { 
        path: 'contato', 
        component: WrapperContatoComponent,
        children: [{ path: '', component: ContatoComponent }]

    }
];

@NgModule({
  imports: [RouterModule.forChild(ContatoRoutes)],
  exports: [RouterModule]
})

export class ContatoRoutingModule {
}

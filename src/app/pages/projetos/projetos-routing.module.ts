import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './components';


export const ProjetosRoutes: Routes = [
    { 
        path: 'projetos', 
        component: ProjetosComponent,
        // children: [{ path: '', component: ProjetosComponent }]

    }
];

@NgModule({
  imports: [RouterModule.forChild(ProjetosRoutes)],
  exports: [RouterModule]
})

export class ProjetosRoutingModule {
}

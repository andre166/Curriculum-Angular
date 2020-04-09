import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, WrapperhomeComponent } from './components';


export const HomeRoutes: Routes = [
    { 
        path: 'home', 
        component: WrapperhomeComponent,
        children: [{ path: '', component: HomeComponent }]

    }
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}

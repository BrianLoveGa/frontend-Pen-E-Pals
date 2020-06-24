import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalsViewComponent } from './components/pals-view/pals-view.component';


const routes: Routes = [
  {
    path:'pals',
    component: PalsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

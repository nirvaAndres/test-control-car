import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './sections/home/home';
import { Quotes } from './sections/quotes/quotes';
import { Assessment } from './sections/assessment/assessment';
import { Assignment } from './sections/assignment/assignment';
import { Atc } from './sections/atc/atc';
import { Workshop } from './sections/workshop/workshop';

const routes: Routes = [
  {
    path:'',
    component:Home
  },
  {
    path:'quotes',
    component:Quotes
  },
  {
    path:'assesment',
    component:Assessment
  },
  {
    path:'assignment',
    component:Assignment
  },
  {
    path:'workshop',
    component:Workshop
  },
  {
    path:'atc',
    component:Atc
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

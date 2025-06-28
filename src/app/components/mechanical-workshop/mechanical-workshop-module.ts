import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MechanicalWorkshop } from './mechanical-workshop';

@NgModule({
  declarations: [
    MechanicalWorkshop
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    MechanicalWorkshop
  ]
})

export class MechanicalWorkshopModule { }

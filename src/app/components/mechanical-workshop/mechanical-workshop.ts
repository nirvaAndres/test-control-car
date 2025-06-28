import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mechanical-workshop',
  standalone: false,
  templateUrl: './mechanical-workshop.html',
  styleUrl: './mechanical-workshop.scss'
})

export class MechanicalWorkshop {
  @Input('stageWorkshop') stageWorkshop:string = "general";
  @Input('descriptionWorkshop') descriptionWorkshop:string = "general";
}

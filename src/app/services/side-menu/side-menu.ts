import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SideMenu {

  menuToggleSubject = new Subject<void>();
  
}

import { Component } from '@angular/core';
import { SideMenu } from '../../services/side-menu/side-menu';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})

export class NavBar {

  constructor(private sideMenuService:SideMenu) {}

  toggleMenu = ():void => {
    this.sideMenuService.menuToggleSubject.next();
  }

}

import { Component, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { SideMenu } from './services/side-menu/side-menu';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MenuItems } from './interfaces/menu-items';
import { sideMenu } from './utils/shared-data/const-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})

export class App implements OnInit, OnDestroy {

  protected readonly title = signal('test-control-car');

  @ViewChild('sidenav') sidenav!: MatSidenav;

  isDetectToggleMenu!: Subscription;
  indexSelected:number = 0;
  menuItemList: MenuItems[] = sideMenu;

  constructor(private sideMenuService:SideMenu) {}

  ngOnInit(): void {

    this.isDetectToggleMenu = this.sideMenuService.menuToggleSubject.subscribe({
      next: () => {
        this.toggleMenu();
      },
      error: (e) => {
        alert("Mensaje de error random");
      }
    })
  }

  toggleMenu = (): void => {
    this.sidenav.toggle();
  }

  focusItem = (index:number): void => {
    this.indexSelected = index;
  }

  ngOnDestroy (): void {
    this.isDetectToggleMenu.unsubscribe();
  }

}

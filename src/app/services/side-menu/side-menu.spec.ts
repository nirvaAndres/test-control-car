import { TestBed } from '@angular/core/testing';

import { SideMenu } from './side-menu';

describe('SideMenu', () => {
  let service: SideMenu;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideMenu);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

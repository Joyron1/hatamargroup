import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOpenerComponent } from './home-opener.component';

describe('HomeOpenerComponent', () => {
  let component: HomeOpenerComponent;
  let fixture: ComponentFixture<HomeOpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOpenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogosComponent } from './home-logos.component';

describe('HomeLogosComponent', () => {
  let component: HomeLogosComponent;
  let fixture: ComponentFixture<HomeLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

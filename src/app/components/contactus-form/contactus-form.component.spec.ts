import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusFormComponent } from './contactus-form.component';

describe('ContactusFormComponent', () => {
  let component: ContactusFormComponent;
  let fixture: ComponentFixture<ContactusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

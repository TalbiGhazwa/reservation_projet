import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEvenementComponent } from './ajout-evenement.component';

describe('AjoutEvenementComponent', () => {
  let component: AjoutEvenementComponent;
  let fixture: ComponentFixture<AjoutEvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEvenementComponent]
    });
    fixture = TestBed.createComponent(AjoutEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

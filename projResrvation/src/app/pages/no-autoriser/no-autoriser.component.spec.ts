import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAutoriserComponent } from './no-autoriser.component';

describe('NoAutoriserComponent', () => {
  let component: NoAutoriserComponent;
  let fixture: ComponentFixture<NoAutoriserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoAutoriserComponent]
    });
    fixture = TestBed.createComponent(NoAutoriserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

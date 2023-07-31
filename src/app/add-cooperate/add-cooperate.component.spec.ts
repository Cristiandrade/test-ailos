import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCooperateComponent } from './add-cooperate.component';

describe('AddCooperateComponent', () => {
  let component: AddCooperateComponent;
  let fixture: ComponentFixture<AddCooperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCooperateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCooperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

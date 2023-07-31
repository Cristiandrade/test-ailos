import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPersonalComponent } from './icon-personal.component';

describe('IconPersonalComponent', () => {
  let component: IconPersonalComponent;
  let fixture: ComponentFixture<IconPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

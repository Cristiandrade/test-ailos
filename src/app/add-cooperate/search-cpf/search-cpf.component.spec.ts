import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCpfComponent } from './search-cpf.component';

describe('SearchCpfComponent', () => {
  let component: SearchCpfComponent;
  let fixture: ComponentFixture<SearchCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
